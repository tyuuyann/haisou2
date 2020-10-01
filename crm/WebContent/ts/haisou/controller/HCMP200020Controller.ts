module crm_module {
    import BaseController = base.controller.BaseController;

    export class HCMP200020Controller extends BaseController {

        static $inject = ['$scope', '$state', 'HCMP200020Business', 'NCMP900010Business', 'Modal', 'UserInfo', 'CustDetilInfo']
        constructor(
            protected $scope: ng.IScope,
            protected $state: ng.ui.IStateService,
            protected hcmp200020Business: HCMP200020Business,
            protected ncmp900010business: NCMP900010Business,
            protected modal: Modal,
            protected userInfo: UserInfo,
            protected custDetilInfo: CustDetilInfo,
            protected hcmp200020: HCMP200020
        ) {
            super($scope, $state);
            this.hcmp200020 = new HCMP200020();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void {
            // 固定文言の取得
            this.hcmp200020Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp200020, response.data);

                this.createCustInfo();
            }, (response) => {
                //取得失敗時
            });
        }

        /**
         * 顧客詳細画面作成
         */
        public createCustInfo(): void {
            this.hcmp200020.cust_name = this.custDetilInfo.getCust_name();
            this.hcmp200020.cust_kana = this.custDetilInfo.getCust_kana();
            this.hcmp200020.tel = "☎ " + this.custDetilInfo.getTel();
            this.hcmp200020.addres = this.custDetilInfo.getAddres();
            this.hcmp200020.yubino = "〒 " + this.custDetilInfo.getYubino();

            var map_width_point = parseFloat(this.custDetilInfo.getPoint_keido());
            var map_height_point = parseFloat(this.custDetilInfo.getPoint_ido());

            // mapboxを使用。
            var mapSize = document.getElementById("map");
            mapSize.style.width = window.outerWidth + "px";
            mapSize.style.height = (window.outerHeight/10) * 3 + "px";

            mapboxgl.accessToken = 'pk.eyJ1IjoieWFtYWhzaXRhc2hpbm9idSIsImEiOiJja2ZtaTl3eHoxNWRmMzVtcXlzZmplbm0yIn0.jQ1GtIaCztI8HN9AxR_dYQ';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/yamahsitashinobu/ckfmjzmm85d4y19nzy2di1kqr',
                center: [map_width_point, map_height_point],
                zoom: 14
            });

            var marker = new mapboxgl.Marker()
                                .setLngLat([map_width_point, map_height_point])
                                .addTo(map);
        }
    }
}

angular.module('crm').controller('HCMP200020Controller', crm_module.HCMP200020Controller);
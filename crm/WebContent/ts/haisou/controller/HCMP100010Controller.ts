module crm_module {
    import BaseController = base.controller.BaseController;

    export class HCMP100010Controller extends BaseController {

        static $inject = ['$scope', '$state', 'HCMP100010Business', 'Modal', 'UserInfo']
        constructor(
            protected $scope: ng.IScope,
            protected $state: ng.ui.IStateService,
            protected hcmp100010Business: HCMP100010Business,
            protected modal: Modal,
            protected userInfo: UserInfo,
            protected hcmp100010: HCMP100010
        ) {
            super($scope, $state);
            this.hcmp100010 = new HCMP100010();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void {
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp100010, response.data);

                this.createMap();
            }, (response) => {
                //取得失敗時
            });
        }

        /**
         * マップ作製
         */
        public createMap(): void {
            // マップデータの取得
            this.hcmp100010Business.getMapInfo().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp100010, response.data);

                var map_width = parseFloat(this.hcmp100010.mapInfoList[0].pop_width);
                var map_height = parseFloat(this.hcmp100010.mapInfoList[0].pop_height);

                // mapboxを使用。
                var mapSize = document.getElementById("map");
                mapSize.style.width = window.outerWidth + "px";
                mapSize.style.height = window.outerHeight + "px";

                mapboxgl.accessToken = 'pk.eyJ1IjoieWFtYWhzaXRhc2hpbm9idSIsImEiOiJja2ZtaTl3eHoxNWRmMzVtcXlzZmplbm0yIn0.jQ1GtIaCztI8HN9AxR_dYQ';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/yamahsitashinobu/ckfmjzmm85d4y19nzy2di1kqr',
                    center: [map_width, map_height],
                    zoom: 14
                });

                // Hello World ダイアログボックスを表示する
                //                var markerHeight = 50, markerRadius = 10, linearOffset = 25;
                //                var popupOffsets = {
                //                    'top': [0, 0],
                //                    'top-left': [0, 0],
                //                    'top-right': [0, 0],
                //                    'bottom': [0, -markerHeight],
                //                    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                //                    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                //                    'left': [markerRadius, (markerHeight - markerRadius) * -1],
                //                    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
                //                };
                //                var popup = new mapboxgl.Popup({ offset: popupOffsets, className: 'my-class' })
                //                    .setLngLat(map.getCenter())
                //                    .setHTML("<h1>Hello World!</h1>")
                //                    .setMaxWidth("300px")
                //                    .addTo(map);

                var pop: any[] = new Array(this.hcmp100010.mapInfoList.length);
                for (var i = 1; i < this.hcmp100010.mapInfoList.length; i++) {
                    pop[i - 1] = new mapboxgl.Popup({ closeOnClick: false })
                        .setLngLat([parseFloat(this.hcmp100010.mapInfoList[i].pop_width), parseFloat(this.hcmp100010.mapInfoList[i].pop_height)])
                        .setHTML('<h1>' + this.hcmp100010.mapInfoList[i].memo + '</h1>')
                        .addTo(map);
                }
//                var popup = new mapboxgl.Popup({ closeOnClick: false })
//                   .setLngLat([-96, 37.8])
//                   .setHTML('<h1>Hello World!</h1>')
//                    .addTo(map);
            }, (response) => {
                //取得失敗時
            });
        }
    }
}

angular.module('crm').controller('HCMP100010Controller', crm_module.HCMP100010Controller);
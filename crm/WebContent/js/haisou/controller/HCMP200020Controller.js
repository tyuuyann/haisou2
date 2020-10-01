var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var HCMP200020Controller = (function (_super) {
        __extends(HCMP200020Controller, _super);
        function HCMP200020Controller($scope, $state, hcmp200020Business, ncmp900010business, modal, userInfo, custDetilInfo, hcmp200020) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.hcmp200020Business = hcmp200020Business;
            this.ncmp900010business = ncmp900010business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.custDetilInfo = custDetilInfo;
            this.hcmp200020 = hcmp200020;
            this.hcmp200020 = new crm_module.HCMP200020();
            this.init();
        }
        /**
         * 初期設定
         */
        HCMP200020Controller.prototype.init = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp200020Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp200020, response.data);
                _this.createCustInfo();
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         * 顧客詳細画面作成
         */
        HCMP200020Controller.prototype.createCustInfo = function () {
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
            mapSize.style.height = (window.outerHeight / 10) * 3 + "px";
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
        };
        HCMP200020Controller.$inject = ['$scope', '$state', 'HCMP200020Business', 'NCMP900010Business', 'Modal', 'UserInfo', 'CustDetilInfo'];
        return HCMP200020Controller;
    }(BaseController));
    crm_module.HCMP200020Controller = HCMP200020Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('HCMP200020Controller', crm_module.HCMP200020Controller);

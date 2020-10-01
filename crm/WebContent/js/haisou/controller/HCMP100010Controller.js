var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var HCMP100010Controller = (function (_super) {
        __extends(HCMP100010Controller, _super);
        function HCMP100010Controller($scope, $state, hcmp100010Business, modal, userInfo, hcmp100010) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.hcmp100010Business = hcmp100010Business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.hcmp100010 = hcmp100010;
            this.hcmp100010 = new crm_module.HCMP100010();
            this.init();
        }
        /**
         * 初期設定
         */
        HCMP100010Controller.prototype.init = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp100010, response.data);
                _this.createMap();
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         * マップ作製
         */
        HCMP100010Controller.prototype.createMap = function () {
            var _this = this;
            // マップデータの取得
            this.hcmp100010Business.getMapInfo().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp100010, response.data);
                var map_width = parseFloat(_this.hcmp100010.mapInfoList[0].pop_width);
                var map_height = parseFloat(_this.hcmp100010.mapInfoList[0].pop_height);
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
                var pop = new Array(_this.hcmp100010.mapInfoList.length);
                for (var i = 1; i < _this.hcmp100010.mapInfoList.length; i++) {
                    pop[i - 1] = new mapboxgl.Popup({ closeOnClick: false })
                        .setLngLat([parseFloat(_this.hcmp100010.mapInfoList[i].pop_width), parseFloat(_this.hcmp100010.mapInfoList[i].pop_height)])
                        .setHTML('<h1>' + _this.hcmp100010.mapInfoList[i].memo + '</h1>')
                        .addTo(map);
                }
                //                var popup = new mapboxgl.Popup({ closeOnClick: false })
                //                   .setLngLat([-96, 37.8])
                //                   .setHTML('<h1>Hello World!</h1>')
                //                    .addTo(map);
            }, function (response) {
                //取得失敗時
            });
        };
        HCMP100010Controller.$inject = ['$scope', '$state', 'HCMP100010Business', 'Modal', 'UserInfo'];
        return HCMP100010Controller;
    }(BaseController));
    crm_module.HCMP100010Controller = HCMP100010Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('HCMP100010Controller', crm_module.HCMP100010Controller);

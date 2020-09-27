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
            this.hcmp100010 = new crm_module.HCMP000010();
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
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         *
         */
        HCMP100010Controller.prototype.nextBusMap = function () {
            // 画面遷移
            this.$state.go("HCMP000010");
        };
        /**
        * 初期設定
        */
        HCMP100010Controller.prototype.nextCustList = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp100010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
        * 初期設定
        */
        HCMP100010Controller.prototype.nextSkj = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp100010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
        * 初期設定
        */
        HCMP100010Controller.prototype.nextHaisou = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp100010, response.data);
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

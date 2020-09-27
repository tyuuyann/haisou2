var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var HCMP200010Controller = (function (_super) {
        __extends(HCMP200010Controller, _super);
        function HCMP200010Controller($scope, $state, hcmp200010Business, modal, userInfo, hcmp200010) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.hcmp200010Business = hcmp200010Business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.hcmp200010 = hcmp200010;
            this.hcmp200010 = new crm_module.HCMP200010();
            this.init();
        }
        /**
         * 初期設定
         */
        HCMP200010Controller.prototype.init = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp200010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         *
         */
        HCMP200010Controller.prototype.nextBusMap = function () {
            // 画面遷移
            this.$state.go("HCMP000010");
        };
        /**
        * 初期設定
        */
        HCMP200010Controller.prototype.nextCustList = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp200010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
        * 初期設定
        */
        HCMP200010Controller.prototype.nextSkj = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp200010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
        * 初期設定
        */
        HCMP200010Controller.prototype.nextHaisou = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp200010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        HCMP200010Controller.$inject = ['$scope', '$state', 'HCMP200010Business', 'Modal', 'UserInfo'];
        return HCMP200010Controller;
    }(BaseController));
    crm_module.HCMP200010Controller = HCMP200010Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('HCMP200010Controller', crm_module.HCMP200010Controller);

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var HCMP000010Controller = (function (_super) {
        __extends(HCMP000010Controller, _super);
        function HCMP000010Controller($scope, $state, hcmp000001Business, ncmp900010business, modal, userInfo, hcmp000010) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.hcmp000001Business = hcmp000001Business;
            this.ncmp900010business = ncmp900010business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.hcmp000010 = hcmp000010;
            this.hcmp000010 = new crm_module.HCMP000010();
            this.init();
        }
        /**
         * 初期設定
         */
        HCMP000010Controller.prototype.init = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp000001Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp000010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        /**
         *業務マップボタン押下
         */
        HCMP000010Controller.prototype.nextBusMap = function () {
            // 画面遷移
            this.ncmp900010business.next("HCMP000010", "HAISOUHEADER.HCMP100010", true);
        };
        /**
          *顧客リストボタン押下
          */
        HCMP000010Controller.prototype.nextCustList = function () {
            // 画面遷移
            this.ncmp900010business.next("HCMP000010", "HAISOUHEADER.HCMP200010", true);
        };
        /**
          *スケジュールボタン押下
          */
        HCMP000010Controller.prototype.nextSkj = function () {
            // 画面遷移
            this.ncmp900010business.next("HCMP000010", "HAISOUHEADER.HCMP300010", true);
        };
        /**
          *配送管理ボタン押下
          */
        HCMP000010Controller.prototype.nextHaisou = function () {
            // 画面遷移
            this.ncmp900010business.next("HCMP000010", "HAISOUHEADER.HCMP400010", true);
        };
        HCMP000010Controller.$inject = ['$scope', '$state', 'HCMP000010Business', 'NCMP900010Business', 'Modal', 'UserInfo'];
        return HCMP000010Controller;
    }(BaseController));
    crm_module.HCMP000010Controller = HCMP000010Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('HCMP000010Controller', crm_module.HCMP000010Controller);

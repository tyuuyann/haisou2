var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var HCMP300010Controller = (function (_super) {
        __extends(HCMP300010Controller, _super);
        function HCMP300010Controller($scope, $state, hcmp300010Business, ncmp900010business, modal, userInfo, custDetilInfo, hcmp300010) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.hcmp300010Business = hcmp300010Business;
            this.ncmp900010business = ncmp900010business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.custDetilInfo = custDetilInfo;
            this.hcmp300010 = hcmp300010;
            this.hcmp300010 = new crm_module.HCMP300010();
            this.init();
        }
        /**
         * 初期設定
         */
        HCMP300010Controller.prototype.init = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp300010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp300010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        HCMP300010Controller.$inject = ['$scope', '$state', 'HCMP300010Business', 'NCMP900010Business', 'Modal', 'UserInfo', 'CustDetilInfo'];
        return HCMP300010Controller;
    }(BaseController));
    crm_module.HCMP300010Controller = HCMP300010Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('HCMP300010Controller', crm_module.HCMP300010Controller);

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var HCMP400010Controller = (function (_super) {
        __extends(HCMP400010Controller, _super);
        function HCMP400010Controller($scope, $state, hcmp400010Business, ncmp900010business, modal, userInfo, custDetilInfo, hcmp400010) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.hcmp400010Business = hcmp400010Business;
            this.ncmp900010business = ncmp900010business;
            this.modal = modal;
            this.userInfo = userInfo;
            this.custDetilInfo = custDetilInfo;
            this.hcmp400010 = hcmp400010;
            this.hcmp400010 = new crm_module.HCMP400010();
            this.init();
        }
        /**
         * 初期設定
         */
        HCMP400010Controller.prototype.init = function () {
            var _this = this;
            // 固定文言の取得
            this.hcmp400010Business.ScrJson().then(function (response) {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(_this.hcmp400010, response.data);
            }, function (response) {
                //取得失敗時
            });
        };
        HCMP400010Controller.$inject = ['$scope', '$state', 'HCMP400010Business', 'NCMP900010Business', 'Modal', 'UserInfo', 'CustDetilInfo'];
        return HCMP400010Controller;
    }(BaseController));
    crm_module.HCMP400010Controller = HCMP400010Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('HCMP400010Controller', crm_module.HCMP400010Controller);

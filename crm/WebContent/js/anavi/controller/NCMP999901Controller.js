var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var NCMP999901Controller = (function (_super) {
        __extends(NCMP999901Controller, _super);
        function NCMP999901Controller($scope, $state, ncmp999901Business, ncmp900010business, userInfo, mainData, ncmp999901) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.ncmp999901Business = ncmp999901Business;
            this.ncmp900010business = ncmp900010business;
            this.userInfo = userInfo;
            this.mainData = mainData;
            this.ncmp999901 = ncmp999901;
            this.ncmp999901 = new crm_module.NCMP999901();
            this.init();
        }
        /**
         * 初期処理
         */
        NCMP999901Controller.prototype.init = function () {
            var _this = this;
            this.ncmp999901Business.ScrJson().then(function (response) {
                angular.extend(_this.ncmp999901, response.data);
                _this.$state.go(_this.mainData.getNextView());
            }, function (response) {
            });
        };
        /**
         * 戻るボタン押下
         */
        NCMP999901Controller.prototype.pre = function () {
            this.ncmp900010business.pre();
        };
        NCMP999901Controller.$inject = ['$scope', '$state', 'NCMP999901Business', 'NCMP900010Business', 'UserInfo', 'MainData'];
        return NCMP999901Controller;
    }(BaseController));
    crm_module.NCMP999901Controller = NCMP999901Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('NCMP999901Controller', crm_module.NCMP999901Controller);

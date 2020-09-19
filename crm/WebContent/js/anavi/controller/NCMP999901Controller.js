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
        function NCMP999901Controller($scope, $state, ncmp999901Business, userInfo, ncmp999901) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.ncmp999901Business = ncmp999901Business;
            this.userInfo = userInfo;
            this.ncmp999901 = ncmp999901;
            this.ncmp999901 = new crm_module.NCMP999901();
            this.init();
        }
        NCMP999901Controller.prototype.init = function () {
            var _this = this;
            _this.ncmp999901Business.ScrJson().then(function (response) {
                angular.extend(_this.ncmp999901, response.data);
            }, function (response) {
            });
            _this.ncmp999901.id = _this.userInfo.getId();
            _this.ncmp999901.name = _this.userInfo.getName();
            _this.$state.go("CRMHEADER.NCMP000010");
        };
        NCMP999901Controller.prototype.login = function () {
            var _this = this;
            //_this.lgip000001Business.init().then(function onSuccess(response){
            //alert("success");
            //}
            //, function onError(response){
            //alert("error");
            //}
            //);
        };
        NCMP999901Controller.prototype.clear = function () {
            alert("");
        };
        NCMP999901Controller.$inject = ['$scope', '$state', 'NCMP999901Business', 'UserInfo'];
        return NCMP999901Controller;
    }(BaseController));
    crm_module.NCMP999901Controller = NCMP999901Controller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('NCMP999901Controller', crm_module.NCMP999901Controller);

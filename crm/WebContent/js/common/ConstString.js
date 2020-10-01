var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var ConstString = (function (_super) {
        __extends(ConstString, _super);
        function ConstString($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        ConstString.prototype.commString = function () {
            var PC = "PC;";
        };
        ConstString.$inject = ['$http'];
        return ConstString;
    }(BaseBusiness));
    crm_module.ConstString = ConstString;
})(crm_module || (crm_module = {}));
angular.module('crm').service('MainData', crm_module.MainData);

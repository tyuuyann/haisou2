var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var UserInfo = (function (_super) {
        __extends(UserInfo, _super);
        function UserInfo($http) {
            _super.call(this, $http);
            this.$http = $http;
            this.id = "";
        }
        UserInfo.prototype.getId = function () {
            return this.id;
        };
        UserInfo.prototype.setId = function (id) {
            this.id = id;
        };
        UserInfo.prototype.getName = function () {
            return this.name;
        };
        UserInfo.prototype.setName = function (name) {
            this.name = name;
        };
        UserInfo.prototype.getAuth = function () {
            return this.auth;
        };
        UserInfo.prototype.setAuth = function (auth) {
            this.auth = auth;
        };
        UserInfo.$inject = ['$http'];
        return UserInfo;
    }(BaseBusiness));
    crm_module.UserInfo = UserInfo;
})(crm_module || (crm_module = {}));
angular.module('crm').service('UserInfo', crm_module.UserInfo);

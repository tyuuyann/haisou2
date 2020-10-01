var crm_module;
(function (crm_module) {
    var SystemParameter = (function () {
        function SystemParameter() {
        }
        return SystemParameter;
    }());
    crm_module.SystemParameter = SystemParameter;
    var Sys = (function () {
        function Sys() {
        }
        return Sys;
    }());
    crm_module.Sys = Sys;
})(crm_module || (crm_module = {}));
angular.module('crm').service('SystemParameter', crm_module.SystemParameter);

var crm_module;
(function (crm_module) {
    var testDTO = (function () {
        function testDTO() {
        }
        return testDTO;
    }());
    crm_module.testDTO = testDTO;
})(crm_module || (crm_module = {}));
angular.module('crm').service('testDTO', crm_module.testDTO);

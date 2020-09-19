var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var testbusiness = (function (_super) {
        __extends(testbusiness, _super);
        function testbusiness($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        testbusiness.prototype.init = function () {
            // jsonテスト---------------------------------------
            this.$http.get("json/test.json")
                .then(function onSuccess(response) {
                //alert("success");
            }, function onError(response) {
                //alert("error");
            });
            //-------------------------------------------------
            this.$http.get("http://localhost:8080/crm/resource/sample")
                .then(function onSuccess(response) {
                alert("success");
            }, function onError(response) {
                alert("error");
            });
        };
        testbusiness.prototype.display = function () {
            //var str = document.getElementById('');
            //this.$scope.text = str;
        };
        testbusiness.$inject = ['$http'];
        return testbusiness;
    }(BaseBusiness));
    crm_module.testbusiness = testbusiness;
})(crm_module || (crm_module = {}));
angular.module('crm').service('testbusiness', crm_module.testbusiness);

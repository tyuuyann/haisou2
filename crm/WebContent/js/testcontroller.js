var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseController = base.controller.BaseController;
    var testcontroller = (function (_super) {
        __extends(testcontroller, _super);
        function testcontroller($scope, $http, testdto) {
            _super.call(this, $scope, $http);
            this.$scope = $scope;
            this.$http = $http;
            this.testdto = testdto;
            this.testdto = new crm_module.testDTO();
            this.init();
        }
        testcontroller.prototype.init = function () {
            var test2;
            test2 = "test2";
            this.testdto.loginUser = "test";
            //alert(this.testdto.loginUser);
            //this.$state.go("login");
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
        testcontroller.prototype.display = function () {
            //var str = document.getElementById('');
            //this.$scope.text = str;
        };
        testcontroller.$inject = ['$scope', '$http', 'testDTO'];
        return testcontroller;
    }(BaseController));
    crm_module.testcontroller = testcontroller;
})(crm_module || (crm_module = {}));
angular.module('crm', []).controller('testcontroller', ['$scope', '$http', crm_module.testcontroller]);

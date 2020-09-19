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
        function testcontroller($scope, $state, testbusiness, testdto) {
            _super.call(this, $scope, $state);
            this.$scope = $scope;
            this.$state = $state;
            this.testbusiness = testbusiness;
            this.testdto = testdto;
            this.testdto = new crm_module.testDTO();
            this.init();
        }
        testcontroller.prototype.init = function () {
            //        	this.testdto.loginUser = "test";
            //            alert(this.testdto.loginUser);
            //            this.testbusiness.init();
            //            this.display();
            this.$state.go("CRMHEADER.HEADER");
        };
        testcontroller.prototype.display = function () {
            this.$state.go('login');
            //var json: any = this.testbusiness.init();
            //?alert("disp");
        };
        testcontroller.$inject = ['$scope', '$state', 'testbusiness', 'testDTO'];
        return testcontroller;
    }(BaseController));
    crm_module.testcontroller = testcontroller;
})(crm_module || (crm_module = {}));
angular.module('crm').controller('testcontroller', crm_module.testcontroller);

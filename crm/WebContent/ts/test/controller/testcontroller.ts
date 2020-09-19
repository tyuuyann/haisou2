module crm_module{
    import BaseController = base.controller.BaseController;

    export class testcontroller extends BaseController{

        static $inject = ['$scope','$state','testbusiness','testDTO']
        constructor(public $scope: ng.IScope,public $state: ng.ui.IStateService,public testbusiness:testbusiness,public testdto:testDTO){
            super($scope,$state);
            this.testdto = new testDTO();
            this.init();
        }

        public init(): void {
//        	this.testdto.loginUser = "test";
//            alert(this.testdto.loginUser);

//            this.testbusiness.init();
//            this.display();
			this.$state.go("CRMHEADER.HEADER");
        }

        public display(): void{
			this.$state.go('login');
            //var json: any = this.testbusiness.init();
        	//?alert("disp");
        }
    }
}

angular.module('crm').controller('testcontroller',crm_module.testcontroller);
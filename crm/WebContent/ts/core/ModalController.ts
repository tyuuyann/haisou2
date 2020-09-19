module crm_module{
    import BaseController = base.controller.BaseController;
    export class ModalController extends BaseController{
    	static $inject = ['$scope','$state','Modal']
    	constructor(public $scope: ng.IScope,public $state: ng.ui.IStateService,public modal:Modal){
    	     super($scope,$state);
    	     this.init();
    	}
    	public init(): void{
    		//alert("");
    	}

    	public clickOK(): void{
    		this.modal.removeMessage();
    	}

    }
}

angular.module('crm').controller('ModalController',crm_module.ModalController);
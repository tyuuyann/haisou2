
module crm_module{
import BaseController = base.controller.BaseController;

export class NCMP999901Controller extends BaseController{

	static $inject = ['$scope','$state','NCMP999901Business','UserInfo']
	constructor(
			protected $scope: ng.IScope,
			protected $state: ng.ui.IStateService,
			protected ncmp999901Business:NCMP999901Business,
			protected userInfo:UserInfo,
			protected ncmp999901:NCMP999901
	){
		super($scope,$state);
		this.ncmp999901 = new NCMP999901();
		this.init();
	}

	public init(): void {
		var _this = this;
		_this.ncmp999901Business.ScrJson().then((response) => {
			angular.extend(_this.ncmp999901,response.data);
		},(response) => {

		});
		_this.ncmp999901.id = _this.userInfo.getId();
		_this.ncmp999901.name = _this.userInfo.getName();
		_this.$state.go("CRMHEADER.NCMP000010");

	}

	public login(): void{
		var _this = this;

		//_this.lgip000001Business.init().then(function onSuccess(response){
			//alert("success");
		//}
		//, function onError(response){
			//alert("error");
		//}
		//);
	}

	public clear(): void{
		alert("");
	}
}
}

angular.module('crm').controller('NCMP999901Controller',crm_module.NCMP999901Controller);
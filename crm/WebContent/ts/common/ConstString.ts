module crm_module{
	import BaseBusiness = base.business.BaseBusiness;

    export class ConstString extends BaseBusiness{
    	static $inject = ['$http']
		constructor(public $http: ng.IHttpService) {
			super($http);
		}

        public commString(){
            let PC = "PC;"
        }


    }
}

angular.module('crm').service('MainData',crm_module.MainData);
module crm_module{
    import BaseBusiness = base.business.BaseBusiness;

    export class HCMP000010Business extends BaseBusiness{

        static $inject = ['$http']
        constructor(public $http: ng.IHttpService){
            super($http);
        }

		/**
		 * 固定文言の取得
		 */
        public ScrJson(): any{
        	return this.$http.get("json/HCMP000010.json");
        }
    }
}

angular.module('crm').service('HCMP000010Business',crm_module.HCMP000010Business);
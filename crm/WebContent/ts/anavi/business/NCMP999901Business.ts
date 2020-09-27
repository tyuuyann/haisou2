module crm_module{
    import BaseBusiness = base.business.BaseBusiness;

    export class NCMP999901Business extends BaseBusiness{

        static $inject = ['$http']
        constructor(public $http: ng.IHttpService){
            super($http);
        }

		/**
		 * 画面文字列の取得
		 */
        public ScrJson(): any{
        	return this.$http.get("json/NCMP999901.json");
        }
    }
}

angular.module('crm').service('NCMP999901Business',crm_module.NCMP999901Business);
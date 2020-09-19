module crm_module{
    import BaseBusiness = base.business.BaseBusiness;

    export class NCMP000110Business extends BaseBusiness{

        static $inject = ['$http']
        constructor(public $http: ng.IHttpService){
            super($http);
        }

		/**
		 * 画面文字列の取得
		 */
        public ScrJson(): any{
        	return this.$http.get("json/NCMP000010.json");
        }

        /**
         * ログイン入力チェック
         */
        public init(): any {

        }

        public login(): void{
            //var str = document.getElementById('');
            //this.$scope.text = str;
        }
    }
}

angular.module('crm').service('NCMP000010Business',crm_module.NCMP000010Business);
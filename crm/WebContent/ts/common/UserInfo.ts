module crm_module{
	import BaseBusiness = base.business.BaseBusiness;

    export class UserInfo extends BaseBusiness{
    	static $inject = ['$http']
		constructor(public $http: ng.IHttpService) {
			super($http);
		}
        private id: string = "";
		private name: string;
		private auth: string;

		getId(): string{
			return this.id;
		}

		setId(id: string){
			this.id = id;
		}

		getName(): string{
			return this.name;
		}

		setName(name: string){
			this.name = name;
		}

		getAuth(): string{
			return this.auth;
		}

		setAuth(auth: string){
			this.auth = auth;
		}
    }
}

angular.module('crm').service('UserInfo',crm_module.UserInfo);
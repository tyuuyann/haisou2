module crm_module{
	import BaseBusiness = base.business.BaseBusiness;

    export class MainData extends BaseBusiness{
    	static $inject = ['$http']
		constructor(public $http: ng.IHttpService) {
			super($http);
		}
        private preview: string[] = new Array();
        private nextView: string;

		getPreview(): string[]{
			return this.preview;
		}

		setPreview(preview: string){
			this.preview.push(preview);
		}

        getNextView(): string{
            return this.nextView;
        }

        setNextView(nextView: string){
            this.nextView = nextView;
        }


    }
}

angular.module('crm').service('MainData',crm_module.MainData);
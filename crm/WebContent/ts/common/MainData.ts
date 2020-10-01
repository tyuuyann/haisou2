module crm_module{
	import BaseBusiness = base.business.BaseBusiness;

    export class MainData extends BaseBusiness{
    	static $inject = ['$http']
		constructor(public $http: ng.IHttpService) {
			super($http);
		}

        private pcTablet: string;
        private preview: string[] = new Array();
        private nextView: string;

        public getPcTablet(): string{
            return this.pcTablet;
        }

        public setPcTablet(pcTable: string){
            this.pcTablet = pcTable;
        }

		public getPreview(): string[]{
			return this.preview;
		}

		public setPreview(preview: string){
			this.preview.push(preview);
		}

        public getNextView(): string{
            return this.nextView;
        }

        public setNextView(nextView: string){
            this.nextView = nextView;
        }


    }
}

angular.module('crm').service('MainData',crm_module.MainData);
module crm_module {

    import BaseBusiness = base.business.BaseBusiness;
    export class NCMP900010Business extends BaseBusiness {

        static $inject = ['$http', '$state', 'MainData']
        constructor(public $http: ng.IHttpService,
            protected $state: ng.ui.IStateService,
            protected mainData: MainData) { super($http); }

        /**
         * 次画面遷移共通処理
         */
        public next(pre: string, next: string, retention: boolean): void {
            var nextscean: string[];
            nextscean = next.split(".");

            if (retention) {
                this.mainData.setPreview(pre);
            }

            if ("HAISOUHEADER" == nextscean[0]) {

                if ("HCMP100010" == nextscean[1] ||
                    "HCMP200010" == nextscean[1] ||
                    "HCMP300010" == nextscean[1] ||
                    "HCMP400010" == nextscean[1]) {
                    this.$state.go(nextscean[0]);
                } else {
                    this.$state.go(next);
                }

            }else{
                this.$state.go(nextscean[0]);
            }
            this.mainData.setNextView(next);

        }

        /**
         * 前画面遷移共通処理
         */
        public pre(): void {
            var pre = this.mainData.getPreview().pop();
            this.$state.go(pre);
        }
    }
}

angular.module('crm').service('NCMP900010Business', crm_module.NCMP900010Business);
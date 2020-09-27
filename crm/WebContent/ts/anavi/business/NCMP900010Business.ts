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
            this.mainData.setNextView(next);
            this.$state.go(nextscean[0]);
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
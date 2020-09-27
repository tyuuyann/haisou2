
module crm_module {
    import BaseController = base.controller.BaseController;

    export class NCMP999901Controller extends BaseController {

        static $inject = ['$scope', '$state', 'NCMP999901Business', 'NCMP900010Business', 'UserInfo', 'MainData']
        constructor(
            protected $scope: ng.IScope,
            protected $state: ng.ui.IStateService,
            protected ncmp999901Business: NCMP999901Business,
            protected ncmp900010business: NCMP900010Business,
            protected userInfo: UserInfo,
            protected mainData: MainData,
            protected ncmp999901: NCMP999901
        ) {
            super($scope, $state);
            this.ncmp999901 = new NCMP999901();
            this.init();
        }

        /**
         * 初期処理
         */
        public init(): void {
            this.ncmp999901Business.ScrJson().then((response) => {
                angular.extend(this.ncmp999901, response.data);
                this.$state.go(this.mainData.getNextView());
            }, (response) => {

            });
        }

        /**
         * 戻るボタン押下
         */
        public pre(): void {
            this.ncmp900010business.pre();
        }

    }
}

angular.module('crm').controller('NCMP999901Controller', crm_module.NCMP999901Controller);
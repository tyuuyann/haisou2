module crm_module {
    import BaseController = base.controller.BaseController;

    export class HCMP300010Controller extends BaseController {

        static $inject = ['$scope', '$state', 'HCMP300010Business', 'NCMP900010Business', 'Modal', 'UserInfo', 'CustDetilInfo']
        constructor(
            protected $scope: ng.IScope,
            protected $state: ng.ui.IStateService,
            protected hcmp300010Business: HCMP300010Business,
            protected ncmp900010business: NCMP900010Business,
            protected modal: Modal,
            protected userInfo: UserInfo,
            protected custDetilInfo: CustDetilInfo,
            protected hcmp300010: HCMP300010
        ) {
            super($scope, $state);
            this.hcmp300010 = new HCMP300010();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void {
            // 固定文言の取得
            this.hcmp300010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp300010, response.data);
            }, (response) => {
                //取得失敗時
            });
        }
    }
}
angular.module('crm').controller('HCMP300010Controller', crm_module.HCMP300010Controller);
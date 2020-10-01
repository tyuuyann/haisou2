module crm_module {
    import BaseController = base.controller.BaseController;

    export class HCMP400010Controller extends BaseController {

        static $inject = ['$scope', '$state', 'HCMP400010Business', 'NCMP900010Business', 'Modal', 'UserInfo', 'CustDetilInfo']
        constructor(
            protected $scope: ng.IScope,
            protected $state: ng.ui.IStateService,
            protected hcmp400010Business: HCMP400010Business,
            protected ncmp900010business: NCMP900010Business,
            protected modal: Modal,
            protected userInfo: UserInfo,
            protected custDetilInfo: CustDetilInfo,
            protected hcmp400010: HCMP400010
        ) {
            super($scope, $state);
            this.hcmp400010 = new HCMP400010();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void {
            // 固定文言の取得
            this.hcmp400010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp400010, response.data);
            }, (response) => {
                //取得失敗時
            });
        }
    }
}
angular.module('crm').controller('HCMP400010Controller', crm_module.HCMP400010Controller);
module crm_module{
    import BaseController = base.controller.BaseController;

    export class HCMP100010Controller extends BaseController{

        static $inject = ['$scope','$state','HCMP100010Business','Modal','UserInfo']
        constructor(
        		protected $scope: ng.IScope,
        		protected $state: ng.ui.IStateService,
        		protected hcmp100010Business:HCMP100010Business,
        		protected modal:Modal,
    			protected userInfo:UserInfo,
        		protected hcmp100010:HCMP000010
        		){
            super($scope,$state);
            this.hcmp100010 = new HCMP000010();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void{
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp100010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

         /**
          *
          */
        public nextBusMap(): void{
           // 画面遷移
           this.$state.go("HCMP000010");
        }

         /**
         * 初期設定
         */
        public nextCustList(): void{
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp100010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

         /**
         * 初期設定
         */
        public nextSkj(): void{
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp100010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

         /**
         * 初期設定
         */
        public nextHaisou(): void{
            // 固定文言の取得
            this.hcmp100010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp100010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

    }
}

angular.module('crm').controller('HCMP100010Controller',crm_module.HCMP100010Controller);
module crm_module{
    import BaseController = base.controller.BaseController;

    export class HCMP200010Controller extends BaseController{

        static $inject = ['$scope','$state','HCMP200010Business','Modal','UserInfo']
        constructor(
        		protected $scope: ng.IScope,
        		protected $state: ng.ui.IStateService,
        		protected hcmp200010Business:HCMP200010Business,
        		protected modal:Modal,
    			protected userInfo:UserInfo,
        		protected hcmp200010:HCMP200010
        		){
            super($scope,$state);
            this.hcmp200010 = new HCMP200010();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void{
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp200010 , response.data);
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
            this.hcmp200010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp200010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

         /**
         * 初期設定
         */
        public nextSkj(): void{
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp200010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

         /**
         * 初期設定
         */
        public nextHaisou(): void{
            // 固定文言の取得
            this.hcmp200010Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp200010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

    }
}

angular.module('crm').controller('HCMP200010Controller',crm_module.HCMP200010Controller);
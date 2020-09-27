module crm_module{
    import BaseController = base.controller.BaseController;

    export class HCMP000010Controller extends BaseController{

        static $inject = ['$scope','$state','HCMP000010Business','NCMP900010Business','Modal','UserInfo']
        constructor(
        		protected $scope: ng.IScope,
        		protected $state: ng.ui.IStateService,
        		protected hcmp000001Business:HCMP000010Business,
                protected ncmp900010business:NCMP900010Business,
        		protected modal:Modal,
    			protected userInfo:UserInfo,
        		protected hcmp000010:HCMP000010
        		){
            super($scope,$state);
            this.hcmp000010 = new HCMP000010();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void{
            // 固定文言の取得
            this.hcmp000001Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp000010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

         /**
          *
          */
        public nextBusMap(): void{
           // 画面遷移
           this.ncmp900010business.next("HCMP000010","HAISOUHEADER.HCMP100010",true);
        }

        /**
          *
          */
        public nextCustList(): void{
           // 画面遷移
           this.ncmp900010business.next("HCMP000010","HAISOUHEADER.HCMP200010",true);
        }

        /**
          *
          */
        public nextSkj(): void{
           // 画面遷移
           this.$state.go("HCMP000010");
        }

        /**
          *
          */
        public nextHaisou(): void{
           // 画面遷移
           this.$state.go("HCMP000010");
        }
    }
}

angular.module('crm').controller('HCMP000010Controller',crm_module.HCMP000010Controller);
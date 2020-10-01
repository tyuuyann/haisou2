module crm_module{
    import BaseController = base.controller.BaseController;

    export class HCMP200010Controller extends BaseController{

        static $inject = ['$scope','$state','HCMP200010Business','NCMP900010Business','Modal','UserInfo', 'CustDetilInfo']
        constructor(
        		protected $scope: ng.IScope,
        		protected $state: ng.ui.IStateService,
        		protected hcmp200010Business:HCMP200010Business,
                protected ncmp900010business:NCMP900010Business,
        		protected modal:Modal,
    			protected userInfo:UserInfo,
                protected custDetilInfo: CustDetilInfo,
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

                this.getCustList();
            }, (response) => {
                //取得失敗時
            });
        }

        /**
         * 顧客一覧を取得
         */
        public getCustList(): void{
            this.hcmp200010Business.getCustList().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.hcmp200010 , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

        /**
         * 顧客詳細画面に遷移
         */
        public goCustDetil(index: number): void{
            var custList = this.hcmp200010.custInfoList;

            this.custDetilInfo.setCustId(custList[index].custid);
            this.custDetilInfo.setCust_name(custList[index].cust_name);
            this.custDetilInfo.setCust_kana(custList[index].cust_kana);
            this.custDetilInfo.setPoint_ido(custList[index].point_ido);
            this.custDetilInfo.setPoint_keido(custList[index].point_keido);
            this.custDetilInfo.setTel(custList[index].tel);
            this.custDetilInfo.setAddres(custList[index].addres);
            this.custDetilInfo.setYubino(custList[index].yubino);

            this.ncmp900010business.next("HAISOUHEADER.HCMP200010","HAISOUHEADER.HCMP200020",true);
        }
    }
}

angular.module('crm').controller('HCMP200010Controller',crm_module.HCMP200010Controller);
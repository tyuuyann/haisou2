module crm_module{
    import BaseController = base.controller.BaseController;

    export class LGIP000001Controller extends BaseController{

        static $inject = ['$scope','$state','LGIP000001Business','NCMP900010Business','Modal','UserInfo', 'MainData', 'SystemParameter']
        constructor(
        		protected $scope: ng.IScope,
        		protected $state: ng.ui.IStateService,
        		protected lgip000001Business:LGIP000001Business,
                protected ncmp900010business:NCMP900010Business,
        		protected modal:Modal,
    			protected userInfo:UserInfo,
                protected mainData: MainData,
                protected sys: SystemParameter,
        		protected lgip000001:LGIP000001
        		){
            super($scope,$state);
            this.lgip000001 = new LGIP000001();
            this.init();
        }

        /**
         * 初期設定
         */
        public init(): void{
            // 社員ＩＤの初期化
            this.lgip000001.loginUser = "";
            // パスワードの初期化
            this.lgip000001.loginPasWd = "";
            // 固定文言の取得
            this.lgip000001Business.ScrJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.lgip000001 , response.data);
                if(navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf( 'iPad') == -1){
                    this.mainData.setPcTablet("iPhone");
                } else if(navigator.userAgent.indexOf('Android') > 0) {
                    this.mainData.setPcTablet("Andriod");
                } else {
                    this.mainData.setPcTablet("PC");
                }

                this.getSys();

            }, (response) => {
				//取得失敗時
            });


        }

        public getSys():void{
              // システムパラメータの取得
            this.lgip000001Business.systemJson().then((response) => {
                //setPropertyが使用できるようにする（angular.extendがsetProperty）
                //取得成功時
                //値をセットする
                angular.extend(this.sys , response.data);
            }, (response) => {
                //取得失敗時
            });
        }

        /**
         * ログインボタン押下時処理
         */
        public login(): void{
        	// 画面ロック
        	this.modal.dispLoading();

        	// メッセージを設定する領域の初期化
        	var messageInfoLst = [];
        	//　入力チェック
        	var result = this.lgip000001Business.init(this.lgip000001,messageInfoLst);

        	if(result == "OK"){
        		// 入力チェックで問題がない場合
        		// 社員の存在チェック
        		this.lgip000001Business.login(this.lgip000001, this.sys).then((response) => {
        			// 通信成功の場合
        			// 画面ロック解除
            		this.modal.removeLoading();

        			// 社員が存在していた場合
            		if(response.data.checkVal == "OK"){
            			//angular.extend(this.$scope.userInfo,response.data);
            			this.userInfo.setId(response.data.id);
            			this.userInfo.setName(response.data.name);
            			// 画面遷移
                        this.ncmp900010business.next("","HCMP000010",false);
            			//this.$state.go("HCMP000010");
            		} else {
            			// 画面ロック解除
            			this.modal.removeLoading();
            			// メッセージ追加・表示
            			messageInfoLst.push({msgID:"E-000020",msgInfo2:[this.lgip000001.label.word00006 , this.lgip000001.label.word00007]});

            			this.modal.showMessege(messageInfoLst);
            		}
                },(response) => {
                	// 通信失敗の場合
                    this.modal.removeLoading();
                	// エラー画面をそのうち用意する予定
                    alert(JSON.stringify(response));
                });
        	} else {
        		// 入力チェックで問題がある場合
        		// メッセージを表示
        		this.modal.removeLoading();
        		this.modal.showMessege(messageInfoLst);
        	}


        }

        /**
         * クリアボタン押下時処理
         */
        public clear(): void{
			//alert("");
        }
    }
}

angular.module('crm').controller('LGIP000001Controller',crm_module.LGIP000001Controller);
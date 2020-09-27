module crm_module{
    import BaseBusiness = base.business.BaseBusiness;

    export class HCMP200010Business extends BaseBusiness{

        static $inject = ['$http']
        constructor(public $http: ng.IHttpService){
            super($http);
        }

		/**
		 * 固定文言の取得
		 */
        public ScrJson(): any{
        	return this.$http.get("json/HCMP200010.json");
        }

        /**
         * ログイン入力チェック
         * @param :myscpe[LGIP000001] messageInfoLst[messageInfoLst]
         * @return :returnval "OK"入力チェックに問題ない場合　"NG"入力チェックに問題がある場合
         */
        public init(myscope:any, messageInfoLst:any): string {
        	// 戻り値を"OK"で初期化
        	var returnval: string = "OK";

        	// 社員ＩＤが空白の場合
			if(myscope.loginUser == ""){
				// メッセージの追加
				messageInfoLst.push({msgID:"E-000010",msgInfo2:[myscope.label.word00006]});
				// 入力チェック問題あり
				returnval = "NG";
			}

        	// パスワードが空白の場合
			if(myscope.loginPasWd == ""){
				// メッセージの追加
				messageInfoLst.push({msgID:"E-000010",msgInfo2:[myscope.label.word00007]});
				// 入力チェック問題あり
				returnval = "NG";
			}

        	// 戻り値
			return returnval;
        }

        /**
         *
         */
        public login(myscope:any): any{

        	// サーバに送るデータを設定
        	var sendData = {
        			// 入力された社員ＩＤ
    				loginUser: myscope.loginUser,
    				// 入力された社員パスワード
    	    		loginPswd: myscope.loginPasWd
    			};

        	// サーバのＵＲＬ
        	// 共通部分は後日まとめる予定
            return this.$http.post("http://192.168.1.14:8080/crm/resource/sample2/login2" , sendData);
        }
    }
}

angular.module('crm').service('HCMP200010Business',crm_module.HCMP200010Business);
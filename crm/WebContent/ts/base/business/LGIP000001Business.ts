module crm_module {
    import BaseBusiness = base.business.BaseBusiness;

    export class LGIP000001Business extends BaseBusiness {

        static $inject = ['$http', 'MainData']
        constructor(
            public $http: ng.IHttpService,
            protected mainData: MainData) {
            super($http);
        }

		/**
		 * 固定文言の取得
		 */
        public ScrJson(): any {
            return this.$http.get("json/LGIP000001.json");
        }

        /**
         * システムパラメータ取得（後日起動時取得にする）
         */
        public systemJson(): any {
            return this.$http.get("json/SystemParameter.json");
        }

        /**
         * ログイン入力チェック
         * @param :myscpe[LGIP000001] messageInfoLst[messageInfoLst]
         * @return :returnval "OK"入力チェックに問題ない場合　"NG"入力チェックに問題がある場合
         */
        public init(myscope: any, messageInfoLst: any): string {
            // 戻り値を"OK"で初期化
            var returnval: string = "OK";

            // 社員ＩＤが空白の場合
            if (myscope.loginUser == "") {
                // メッセージの追加
                messageInfoLst.push({ msgID: "E-000010", msgInfo2: [myscope.label.word00006] });
                // 入力チェック問題あり
                returnval = "NG";
            }

            // パスワードが空白の場合
            if (myscope.loginPasWd == "") {
                // メッセージの追加
                messageInfoLst.push({ msgID: "E-000010", msgInfo2: [myscope.label.word00007] });
                // 入力チェック問題あり
                returnval = "NG";
            }

            // 戻り値
            return returnval;
        }

        /**
		 * 社員存在チェック
		 * @param :myscpe[LGIP000001]
		 * @return :存在チェック結果
		 */
        public login(myscope: any, sys: any): any {

            // サーバに送るデータを設定
            var sendData = {
                // 入力された社員ＩＤ
                loginUser: myscope.loginUser,
                // 入力された社員パスワード
                loginPswd: myscope.loginPasWd
            };

            // サーバのＵＲＬ
            // 共通部分は後日まとめる予定
            if (this.mainData.getPcTablet() == "PC") {
                return this.$http.post(sys.system.PC_HTTP + "sample2/login2", sendData);
            } else {
				return this.$http.post(sys.system.TABLET_TEST_HTTP + "sample2/login2", sendData);
            }
        }
    }
}

angular.module('crm').service('LGIP000001Business', crm_module.LGIP000001Business);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var LGIP000001Business = (function (_super) {
        __extends(LGIP000001Business, _super);
        function LGIP000001Business($http, mainData) {
            _super.call(this, $http);
            this.$http = $http;
            this.mainData = mainData;
        }
        /**
         * 固定文言の取得
         */
        LGIP000001Business.prototype.ScrJson = function () {
            return this.$http.get("json/LGIP000001.json");
        };
        /**
         * システムパラメータ取得（後日起動時取得にする）
         */
        LGIP000001Business.prototype.systemJson = function () {
            return this.$http.get("json/SystemParameter.json");
        };
        /**
         * ログイン入力チェック
         * @param :myscpe[LGIP000001] messageInfoLst[messageInfoLst]
         * @return :returnval "OK"入力チェックに問題ない場合　"NG"入力チェックに問題がある場合
         */
        LGIP000001Business.prototype.init = function (myscope, messageInfoLst) {
            // 戻り値を"OK"で初期化
            var returnval = "OK";
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
        };
        /**
         * 社員存在チェック
         * @param :myscpe[LGIP000001]
         * @return :存在チェック結果
         */
        LGIP000001Business.prototype.login = function (myscope, sys) {
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
            }
            else if(this.mainData.getPcTablet() == "Android"){
            	var config = {
                        headers: { 'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
                 };
                return this.$http.post(sys.system.TABLET_TEST_HTTP + "sample2/login2", sendData, config);
            }else{
            	return this.$http.post(sys.system.TABLET_TEST_HTTP + "sample2/login2", sendData);
            }
        };
        LGIP000001Business.$inject = ['$http', 'MainData'];
        return LGIP000001Business;
    }(BaseBusiness));
    crm_module.LGIP000001Business = LGIP000001Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('LGIP000001Business', crm_module.LGIP000001Business);

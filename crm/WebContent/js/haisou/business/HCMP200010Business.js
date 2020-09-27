var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var HCMP200010Business = (function (_super) {
        __extends(HCMP200010Business, _super);
        function HCMP200010Business($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        /**
         * 固定文言の取得
         */
        HCMP200010Business.prototype.ScrJson = function () {
            return this.$http.get("json/HCMP200010.json");
        };
        /**
         * ログイン入力チェック
         * @param :myscpe[LGIP000001] messageInfoLst[messageInfoLst]
         * @return :returnval "OK"入力チェックに問題ない場合　"NG"入力チェックに問題がある場合
         */
        HCMP200010Business.prototype.init = function (myscope, messageInfoLst) {
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
         *
         */
        HCMP200010Business.prototype.login = function (myscope) {
            // サーバに送るデータを設定
            var sendData = {
                // 入力された社員ＩＤ
                loginUser: myscope.loginUser,
                // 入力された社員パスワード
                loginPswd: myscope.loginPasWd
            };
            // サーバのＵＲＬ
            // 共通部分は後日まとめる予定
            return this.$http.post("http://192.168.1.14:8080/crm/resource/sample2/login2", sendData);
        };
        HCMP200010Business.$inject = ['$http'];
        return HCMP200010Business;
    }(BaseBusiness));
    crm_module.HCMP200010Business = HCMP200010Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('HCMP200010Business', crm_module.HCMP200010Business);

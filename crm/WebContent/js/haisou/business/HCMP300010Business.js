var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var HCMP300010Business = (function (_super) {
        __extends(HCMP300010Business, _super);
        function HCMP300010Business($http, mainData, sys) {
            _super.call(this, $http);
            this.$http = $http;
            this.mainData = mainData;
            this.sys = sys;
        }
        /**
         * 固定文言の取得
         */
        HCMP300010Business.prototype.ScrJson = function () {
            return this.$http.get("json/HCMP300010.json");
        };
        /**
         * 顧客一覧取得
         */
        HCMP300010Business.prototype.getCustList = function () {
            // サーバに送るデータを設定
            var sendData = {};
            // サーバのＵＲＬ
            // 共通部分は後日まとめる予定
            if (this.mainData.getPcTablet() == "PC") {
                return this.$http.post(this.sys.system.PC_HTTP + "haisou/custinfoList", sendData);
            }
            else {
                return this.$http.post(this.sys.system.TABLET_TEST_HTTP + "haisou/custinfoList", sendData);
            }
        };
        HCMP300010Business.$inject = ['$http', 'MainData', 'SystemParameter'];
        return HCMP300010Business;
    }(BaseBusiness));
    crm_module.HCMP300010Business = HCMP300010Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('HCMP300010Business', crm_module.HCMP300010Business);

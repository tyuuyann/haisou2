var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var HCMP100010Business = (function (_super) {
        __extends(HCMP100010Business, _super);
        function HCMP100010Business($http, mainData, sys) {
            _super.call(this, $http);
            this.$http = $http;
            this.mainData = mainData;
            this.sys = sys;
        }
        /**
         * 固定文言の取得
         */
        HCMP100010Business.prototype.ScrJson = function () {
            return this.$http.get("json/HCMP100010.json");
        };
        HCMP100010Business.prototype.getMapInfo = function () {
            // サーバに送るデータを設定
            var sendData = {};
            // サーバのＵＲＬ
            // 共通部分は後日まとめる予定
            if (this.mainData.getPcTablet() == "PC") {
                return this.$http.post(this.sys.system.PC_HTTP + "haisou/MapInfo", sendData);
            }
            else {
                return this.$http.post(this.sys.system.TABLET_TEST_HTTP + "haisou/MapInfo", sendData);
            }
        };
        HCMP100010Business.$inject = ['$http', 'MainData', 'SystemParameter'];
        return HCMP100010Business;
    }(BaseBusiness));
    crm_module.HCMP100010Business = HCMP100010Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('HCMP100010Business', crm_module.HCMP100010Business);

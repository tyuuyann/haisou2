var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var NCMP999901Business = (function (_super) {
        __extends(NCMP999901Business, _super);
        function NCMP999901Business($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        /**
         * 画面文字列の取得
         */
        NCMP999901Business.prototype.ScrJson = function () {
            return this.$http.get("json/NCMP999901.json");
        };
        NCMP999901Business.$inject = ['$http'];
        return NCMP999901Business;
    }(BaseBusiness));
    crm_module.NCMP999901Business = NCMP999901Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('NCMP999901Business', crm_module.NCMP999901Business);

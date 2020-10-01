var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var HCMP000010Business = (function (_super) {
        __extends(HCMP000010Business, _super);
        function HCMP000010Business($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        /**
         * 固定文言の取得
         */
        HCMP000010Business.prototype.ScrJson = function () {
            return this.$http.get("json/HCMP000010.json");
        };
        HCMP000010Business.$inject = ['$http'];
        return HCMP000010Business;
    }(BaseBusiness));
    crm_module.HCMP000010Business = HCMP000010Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('HCMP000010Business', crm_module.HCMP000010Business);

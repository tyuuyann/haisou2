var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var NCMP000010Business = (function (_super) {
        __extends(NCMP000010Business, _super);
        function NCMP000010Business($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        /**
         * 画面文字列の取得
         */
        NCMP000010Business.prototype.ScrJson = function () {
            return this.$http.get("json/NCMP000010.json");
        };
        /**
         * ログイン入力チェック
         */
        NCMP000010Business.prototype.init = function () {
        };
        NCMP000010Business.prototype.login = function () {
            //var str = document.getElementById('');
            //this.$scope.text = str;
        };
        NCMP000010Business.$inject = ['$http'];
        return NCMP000010Business;
    }(BaseBusiness));
    crm_module.NCMP000010Business = NCMP000010Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('NCMP000010Business', crm_module.NCMP000010Business);

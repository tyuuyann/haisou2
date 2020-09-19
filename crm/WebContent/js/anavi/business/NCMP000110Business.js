var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var NCMP000110Business = (function (_super) {
        __extends(NCMP000110Business, _super);
        function NCMP000110Business($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        /**
         * 画面文字列の取得
         */
        NCMP000110Business.prototype.ScrJson = function () {
            return this.$http.get("json/NCMP000010.json");
        };
        /**
         * ログイン入力チェック
         */
        NCMP000110Business.prototype.init = function () {
        };
        NCMP000110Business.prototype.login = function () {
            //var str = document.getElementById('');
            //this.$scope.text = str;
        };
        NCMP000110Business.$inject = ['$http'];
        return NCMP000110Business;
    }(BaseBusiness));
    crm_module.NCMP000110Business = NCMP000110Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('NCMP000010Business', crm_module.NCMP000010Business);

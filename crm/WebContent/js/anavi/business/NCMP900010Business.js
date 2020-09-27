var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var NCMP900010Business = (function (_super) {
        __extends(NCMP900010Business, _super);
        function NCMP900010Business($http, $state, mainData) {
            _super.call(this, $http);
            this.$http = $http;
            this.$state = $state;
            this.mainData = mainData;
        }
        /**
         * 次画面遷移共通処理
         */
        NCMP900010Business.prototype.next = function (pre, next, retention) {
            var nextscean;
            nextscean = next.split(".");
            if (retention) {
                this.mainData.setPreview(pre);
            }
            this.mainData.setNextView(next);
            this.$state.go(nextscean[0]);
        };
        /**
         * 前画面遷移共通処理
         */
        NCMP900010Business.prototype.pre = function () {
            var pre = this.mainData.getPreview().pop();
            this.$state.go(pre);
        };
        NCMP900010Business.$inject = ['$http', '$state', 'MainData'];
        return NCMP900010Business;
    }(BaseBusiness));
    crm_module.NCMP900010Business = NCMP900010Business;
})(crm_module || (crm_module = {}));
angular.module('crm').service('NCMP900010Business', crm_module.NCMP900010Business);

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var MainData = (function (_super) {
        __extends(MainData, _super);
        function MainData($http) {
            _super.call(this, $http);
            this.$http = $http;
            this.preview = new Array();
        }
        MainData.prototype.getPcTablet = function () {
            return this.pcTablet;
        };
        MainData.prototype.setPcTablet = function (pcTable) {
            this.pcTablet = pcTable;
        };
        MainData.prototype.getPreview = function () {
            return this.preview;
        };
        MainData.prototype.setPreview = function (preview) {
            this.preview.push(preview);
        };
        MainData.prototype.getNextView = function () {
            return this.nextView;
        };
        MainData.prototype.setNextView = function (nextView) {
            this.nextView = nextView;
        };
        MainData.$inject = ['$http'];
        return MainData;
    }(BaseBusiness));
    crm_module.MainData = MainData;
})(crm_module || (crm_module = {}));
angular.module('crm').service('MainData', crm_module.MainData);

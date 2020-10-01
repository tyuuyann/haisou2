var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crm_module;
(function (crm_module) {
    var BaseBusiness = base.business.BaseBusiness;
    var CustDetilInfo = (function (_super) {
        __extends(CustDetilInfo, _super);
        function CustDetilInfo($http) {
            _super.call(this, $http);
            this.$http = $http;
        }
        CustDetilInfo.prototype.getCustId = function () {
            return this.custid;
        };
        CustDetilInfo.prototype.setCustId = function (custid) {
            this.custid = custid;
        };
        CustDetilInfo.prototype.getCust_name = function () {
            return this.cust_name;
        };
        CustDetilInfo.prototype.setCust_name = function (cust_name) {
            this.cust_name = cust_name;
        };
        CustDetilInfo.prototype.getCust_kana = function () {
            return this.cust_kana;
        };
        CustDetilInfo.prototype.setCust_kana = function (cust_kana) {
            this.cust_kana = cust_kana;
        };
        CustDetilInfo.prototype.getPoint_ido = function () {
            return this.point_ido;
        };
        CustDetilInfo.prototype.setPoint_ido = function (point_ido) {
            this.point_ido = point_ido;
        };
        CustDetilInfo.prototype.getPoint_keido = function () {
            return this.point_keido;
        };
        CustDetilInfo.prototype.setPoint_keido = function (point_keido) {
            this.point_keido = point_keido;
        };
        CustDetilInfo.prototype.getTel = function () {
            return this.tel;
        };
        CustDetilInfo.prototype.setTel = function (tel) {
            this.tel = tel;
        };
        CustDetilInfo.prototype.getAddres = function () {
            return this.addres;
        };
        CustDetilInfo.prototype.setAddres = function (addres) {
            this.addres = addres;
        };
        CustDetilInfo.prototype.getYubino = function () {
            return this.yubino;
        };
        CustDetilInfo.prototype.setYubino = function (yubino) {
            this.yubino = yubino;
        };
        CustDetilInfo.$inject = ['$http'];
        return CustDetilInfo;
    }(BaseBusiness));
    crm_module.CustDetilInfo = CustDetilInfo;
})(crm_module || (crm_module = {}));
angular.module('crm').service('CustDetilInfo', crm_module.CustDetilInfo);

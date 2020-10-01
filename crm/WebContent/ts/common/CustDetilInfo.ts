module crm_module{
	import BaseBusiness = base.business.BaseBusiness;

    export class CustDetilInfo extends BaseBusiness{
    	static $inject = ['$http']
		constructor(public $http: ng.IHttpService) {
			super($http);
		}

        private custid: string;
        private cust_name: string;
        private cust_kana: string;
        private point_ido: string;
        private point_keido: string;
        private tel: string;
        private addres: string;
        private yubino: string;

        public getCustId(): string{
            return this.custid;
        }

        public setCustId(custid: string){
            this.custid = custid;
        }

        public getCust_name(): string{
            return this.cust_name;
        }

        public setCust_name(cust_name: string){
            this.cust_name = cust_name;
        }

        public getCust_kana(): string{
            return this.cust_kana;
        }

        public setCust_kana(cust_kana: string){
            this.cust_kana = cust_kana;
        }

        public getPoint_ido(): string{
            return this.point_ido;
        }

        public setPoint_ido(point_ido: string){
            this.point_ido = point_ido;
        }

        public getPoint_keido(): string{
            return this.point_keido;
        }

        public setPoint_keido(point_keido: string){
            this.point_keido = point_keido;
        }

        public getTel(): string{
            return this.tel;
        }

        public setTel(tel: string){
            this.tel = tel;
        }

        public getAddres(): string{
            return this.addres;
        }

        public setAddres(addres: string){
            this.addres = addres;
        }

        public getYubino(): string{
            return this.yubino;
        }

        public setYubino(yubino: string){
            this.yubino = yubino;
        }
    }
}

angular.module('crm').service('CustDetilInfo',crm_module.CustDetilInfo);
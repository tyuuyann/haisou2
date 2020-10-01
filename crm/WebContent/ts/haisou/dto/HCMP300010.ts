module crm_module {
    export class HCMP300010 {
        cust_name: string;
        cust_kana: string;
        tel: string;
        point_ido: string;
        point_keido: string;
        addres: string;
        yubino: string;

        label: HCMP300010LabelClass;
    }

    export class HCMP300010LabelClass {
        word00001: string;
    }
}

angular.module('crm').service('HCMP300010', crm_module.HCMP300010);
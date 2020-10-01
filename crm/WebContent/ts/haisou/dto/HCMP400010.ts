module crm_module {
    export class HCMP400010 {
        cust_name: string;
        cust_kana: string;
        tel: string;
        point_ido: string;
        point_keido: string;
        addres: string;
        yubino: string;

        label: HCMP400010LabelClass;
    }

    export class HCMP400010LabelClass {
        word00001: string;
    }
}

angular.module('crm').service('HCMP400010', crm_module.HCMP400010);
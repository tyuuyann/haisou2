module crm_module {
    export class HCMP200020 {
        cust_name: string;
        cust_kana: string;
        tel: string;
        point_ido: string;
        point_keido: string;
        addres: string;
        yubino: string;

        label: HCMP200020LabelClass;
    }

    export class HCMP200020LabelClass {
        word00001: string;
    }
}

angular.module('crm').service('HCMP200020', crm_module.HCMP200020);
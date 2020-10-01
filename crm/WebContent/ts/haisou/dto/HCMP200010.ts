module crm_module {
    export class HCMP200010 {
        custInfoList: HCMP200010OutDTO[];
        label: HCMP200010LabelClass;
    }

    export class HCMP200010OutDTO {
        custid: string;
        cust_name: string;
        cust_kana: string;
        point_ido: string;
        point_keido: string;
        tel: string;
        addres: string;
        yubino: string;
    }

    export class HCMP200010LabelClass {
        word00001: string;
    }
}

angular.module('crm').service('HCMP200010', crm_module.HCMP200010);
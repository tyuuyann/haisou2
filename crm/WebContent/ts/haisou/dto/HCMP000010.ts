module crm_module{
    export class HCMP000010{
        loginUser: string;
        loginPasWd: string;
    	label: HCMP000010LabelClass;
    }

    export class HCMP000010LabelClass{
    	word00001: string;
        word00002: string;
        word00003: string;
        word00004: string;
        word00005: string;
    }
}

angular.module('crm').service('HCMP000010',crm_module.HCMP000010);
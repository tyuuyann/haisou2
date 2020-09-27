module crm_module{
    export class HCMP100010{
        loginUser: string;
        loginPasWd: string;
    	label: HCMP100010LabelClass;
    }

    export class HCMP100010LabelClass{
    	word00001: string;
    }
}

angular.module('crm').service('HCMP100010',crm_module.HCMP100010);
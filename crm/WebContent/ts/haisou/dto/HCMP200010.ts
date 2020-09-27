module crm_module{
    export class HCMP200010{
        loginUser: string;
        loginPasWd: string;
    	label: HCMP200010LabelClass;
    }

    export class HCMP200010LabelClass{
    	word00001: string;
    }
}

angular.module('crm').service('HCMP200010',crm_module.HCMP200010);
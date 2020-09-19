module crm_module{
    export class NCMP999901{
        id: string;
        name: string;
    	auth: string;
    	label: LabelClass;
    }

    export class LabelClass{
    	word00001: string;
    	word00002: string;
    }
}

angular.module('crm').service('NCMP999901',crm_module.NCMP999901);
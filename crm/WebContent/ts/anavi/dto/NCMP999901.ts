module crm_module{
    export class NCMP999901{
        preview: string[];
    	label: NCMP999901LabelClass;
    }

    export class NCMP999901LabelClass{
    	word00001: string;
    }
}

angular.module('crm').service('NCMP999901',crm_module.NCMP999901);
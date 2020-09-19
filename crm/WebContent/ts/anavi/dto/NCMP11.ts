module crm_module{
    export class NCMP000010{
        id: string;
        name: string;
    	auth: string;
    	skjTimeLst: string[];
    	label: LabelClass;
    }

    export class LabelClass{
    	word00001: string;
    	word00002: string;
    	word00003: string;
    	word00004: string;
    	word00005: string;
    	word00006: string;
    	word00007: string;
    }
}

angular.module('crm').service('NCMP999901',crm_module.NCMP999901);
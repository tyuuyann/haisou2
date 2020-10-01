module crm_module{
    export class HCMP100010{
        mapInfoList: Haisou0001MapInfoOutDTO[];
    	label: HCMP100010LabelClass;
    }

    export class Haisou0001MapInfoOutDTO{
        map_no: number;
        pop_width: string;
        pop_height: string;
        memo: string;
    }

    export class HCMP100010LabelClass{
    	word00001: string;
    }
}

angular.module('crm').service('HCMP100010',crm_module.HCMP100010);
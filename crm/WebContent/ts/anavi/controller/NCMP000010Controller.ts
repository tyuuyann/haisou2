
module crm_module {
    import BaseController = base.controller.BaseController;

    export class NCMP000010Controller extends BaseController {

        static $inject = ['$scope', '$state', 'NCMP000010Business', 'UserInfo']
        constructor(
            protected $scope: ng.IScope,
            protected $state: ng.ui.IStateService,
            protected ncmp000010Business: NCMP000010Business,
            protected userInfo: UserInfo,
            protected ncmp000010: NCMP000010
        ) {
            super($scope, $state);
            this.ncmp000010 = new NCMP000010();
            this.init();
        }

        public init(): void {
            this.ncmp000010Business.ScrJson().then((response) => {
                angular.extend(this.ncmp000010, response.data);

                this.ncmp000010.skjTimeLst = [];
                this.ncmp000010.skjTimeLst.push("08:00");
                this.ncmp000010.skjTimeLst.push("09:00");
                this.ncmp000010.skjTimeLst.push("10:00");
                this.ncmp000010.skjTimeLst.push("11:00");
                this.ncmp000010.skjTimeLst.push("12:00");
                this.ncmp000010.skjTimeLst.push("13:00");
                this.ncmp000010.skjTimeLst.push("14:00");
                this.ncmp000010.skjTimeLst.push("15:00");
                this.ncmp000010.skjTimeLst.push("16:00");
                this.ncmp000010.skjTimeLst.push("17:00");
                this.ncmp000010.skjTimeLst.push("18:00");
                this.ncmp000010.skjTimeLst.push("19:00");
                this.ncmp000010.skjTimeLst.push("20:00");
                this.ncmp000010.skjTimeLst.push("21:00");
                this.ncmp000010.skjTimeLst.push("22:00");

            }, (response) => {

            });
            //this.ncmp999901.id = this.userInfo.getId();
            this.ncmp000010.name = this.userInfo.getName();

        }

        public createReport(): void {


        }

        public clear(): void {
            alert("");
        }
    }
}

angular.module('crm').controller('NCMP000010Controller', crm_module.NCMP000010Controller);
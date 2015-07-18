describe('dpdaterangepicker', function () {
    var elm, scope;

    beforeEach(module('dpdaterangepicker'));

    beforeEach(inject(function ($rootScope, $compile) {

        scope = $rootScope;

        function onDateRangeSelect(beginDate, endDate, range) {
            console.log('onDateRangeSelect(): begin date: ', beginDate, ' - end date: ', endDate, ' - range: ', range);
        }

        // Configuration of the dpdatepicker
        scope.opt = {
            dateFormat: 'yyyy-mm-dd',
            monthLabels: {
                1: 'Jan',
                2: 'Feb',
                3: 'Mar',
                4: 'Apr',
                5: 'May',
                6: 'Jun',
                7: 'Jul',
                8: 'Aug',
                9: 'Sep',
                10: 'Oct',
                11: 'Nov',
                12: 'Dec'
            },
            dayLabels: {
                su: 'Sun',
                mo: 'Mon',
                tu: 'Tue',
                we: 'Wed',
                th: 'Thu',
                fr: 'Fri',
                sa: 'Sat'
            },
            buttons: {
                todayBtnText: 'Today',
                nextBtnText: 'Next',
                prevBtnText: 'Previous',
                okBtnText: 'OK'
            },
            beginDateText: 'begin date',
            endDateText: 'end date',
            sundayHighlight: true,
            currentDayHighlight: true,
            dateRangeSelectCb: onDateRangeSelect
        };

        elm = angular.element('<dpdaterangepicker options="opt"></dpdaterangepicker>');

        $compile(elm)(scope);
        scope.$digest();

    }));

    it('is vsselectiongroup', function () {
        expect(elm[0].querySelectorAll('.dpselectiongroup').length).toBe(1);
    });

    it('is dpselection', function () {
        expect(elm[0].querySelectorAll('.dpselection').length).toBe(1);
    });

    it('is dpbtnpicker', function () {
        expect(elm[0].querySelectorAll('.dpbtnpicker').length).toBe(1);
    });

    it('is icon-calendar', function () {
        expect(elm[0].querySelectorAll('.icon-calendar').length).toBe(1);
    });

});
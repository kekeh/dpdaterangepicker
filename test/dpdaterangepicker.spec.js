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
            sunHighlight: false,
            currDayHighlight: false,
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
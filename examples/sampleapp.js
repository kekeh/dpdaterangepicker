/**
 * @ngdoc object
 * @name sampleapp
 * @description sampleapp is module of sampleapp. It injects dpdatepicker.
 */
var sampleapp = angular.module('sampleapp', ['dpdaterangepicker']);

/**
 * @ngdoc object
 * @name samplectrl
 * @description samplectrl is controller of the sampleapp.
 */
sampleapp.controller('samplectrl', function ($scope) {

    function onDateRangeSelect(beginDate, endDate, range) {
        console.log('PARENT - onDateRangeSelect(): begin date: ', beginDate, ' - end date: ', endDate, ' - range: ', range);
    }

    // Configuration of the dpdaterangepicker
    $scope.opt = {
        /*
         initSelectorMonth: {
             year: 2012,
             month: 8
         },
         initSelectedDateRange: {
             begin: {
                 year: 2012,
                 month: 8,
                 day: 16
             },
             end: {
                 year: 2014,
                 month: 10,
                 day: 17
             }
         },
         */
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
        sundayRedColor: true,
        dateRangeSelectCb: onDateRangeSelect
    };
});





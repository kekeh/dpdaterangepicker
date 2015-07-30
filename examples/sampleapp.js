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
sampleapp.controller('samplectrl', function ($scope, dpdaterangeConfig) {

    //dpdaterangeConfig.sunHighlight = false;
    //dpdaterangeConfig.currDayHighlight = false;

    function onDateRangeSelect(beginDate, endDate, range) {
        console.log('PARENT - onDateRangeSelect(): begin date: ', beginDate, ' - end date: ', endDate, ' - range: ', range);
    }

    $scope.selectedRange = undefined;

    $scope.$watch('selectedRange', function(value) {
        if(value !== undefined) {
            console.log('PARENT: watch - Date range changed: ', value);
        }
    });

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
        dateRangeSelectCb: onDateRangeSelect
        */
    };
});





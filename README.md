# dpdaterangepicker v. 0.0.3

**Date range picker - AngularJS reusable UI component**

## Description
Simple AngularJS directive which implements the date range picker. Depends on only the AngularJS.

## Usage

* include the **dpdaterangepicker-0.0.3.min.js** and the **dpdaterangepicker-0.0.3.min.css** files into your project. See the **Build project** and the **Installation** chapters below.
```html
<script src="dpdaterangepicker-0.0.3.min.js"></script>
<link href="dpdaterangepicker-0.0.3.min.css" rel="stylesheet" type="text/css">
```
* inject the **dpdaterangepicker** module into your application module.
```js
angular.module('sampleapp', ['dpdaterangepicker']);
```
* add **dpdaterangepicker** HTML tag into your HTML file. See the **HTML example** chapter below.
* add needed Javascript code. See the **Javascript example** chapter below.

### HTML example
```html
<div ng-app="sampleapp" ng-controller="sampleappctrl">
    <dpdaterangepicker options="opt"</dpdaterangepicker>
</div>
```

### Tags
| Tag  | Description | Mandatory | 
| :------------ |:---------------|:---------------:|
| dpdaterangepicker | dpdaterangepicker tag | yes | 


### Attributes
| Attribute | Description | Mandatory | 
| :------------ |:---------------|:---------------:|
| options | dpdaterangepicker configuration object. See below. | yes |


### Options data (an option attribute in the dpdaterangepicker directive)

| Attribute | Description | Values | Mandatory |
| :------------ |:---------------|:---------------|:---------------|
| **initSelectorMonth** | Initial selector month. When the selector is opened this month is shown. If not defined the current month is shown. See the **Javascript example** below. | object | no |
| **initSelectedDateRange** | Initial selected date range. When the component is loaded this date range is shown. If not defined no selection. See the **Javascript example** below. | object | no |
| **dateFormat** | Date format. The day and the month are always two digits and the year is always four digits. For example: 'yyyy-mm-dd' | string | yes |
| **monthLabels** | Object which contain month names. Shown in selector. See the **Javascript example** below. | strings | yes |
| **dayLabels** | Object which contain weekday names. Shown in selector. See the **Javascript example** below. | strings | yes |
| **buttons** | Object which contain the sub properties. | See below | yes |
| buttons.**todayBtnText** | Today button text. | text | yes |
| buttons.**nextBtnText** | Next button text. | text | yes |
| buttons.**prevBtnText** | Previous button text. | text | yes |
| buttons.**okBtnText** | Ok button text. | text | yes |
| **beginDateText** | Begin date text shown in UI. | text | yes |
| **endDateText** | End date text shown in UI. | text | yes |
| **currentDayHighlight** | Is current day highlighted. | true or false | yes |
| **sundayHighlight** | Is sundays highlighted or not. | true or false | yes |
| **dateRangeSelectCb** | Date range select callback function. See below. | function | no |


### Javascript example
```js
var sampleapp = angular.module('sampleapp', ['dpdaterangepicker']);
sampleapp.controller('sampleappctrl', function ($scope) {

    // Watch the user selections - invoked when the user accepts the date range
    function onDateRangeSelect(beginDate, endDate, range) {
        console.log('onDateRangeSelect(): begin date: ', beginDate, ' - end date: ', endDate, ' - range: ', range);
    }

    // Configuration of the dpdaterangepicker
    $scope.opt = {
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
        dateRangeSelectCb: onDateRangeSelect
    };
```

#### initSelectorMonth

Example of the value. See description of the properties below the example.

```js
    initSelectorMonth: {year: 1980, month: 8}
```

##### Properties
* year - year of the visible month
* month - month of the visible month


#### initSelectedDateRange

Example of the value. See description of the properties below the example.

```js
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
```

##### Objects and properties
* begin - begin date object
  * year - year of the visible begin date
  * month - month of the visible begin date
  * day - day of the visible begin date

* end - end date object
  * year - year of the visible end date
  * month - month of the visible end date
  * day - day of the visible end date


#### dateRangeSelectCb

Example of the function. See description of the parameters below the example.

```js
    function onDateRangeSelect(beginDate, endDate, range) {
        console.log('onDateRangeSelect(): begin date: ', beginDate, ' - end date: ', endDate, ' - range: ', range);
    }
```

| Function | Parameters | Description | 
| :------------ |:---------------|:---------------|
| onDateRangeSelect | beginDate, endDate and formatted range | Called when the user accepts the date range from the UI. |

##### Parameters
* beginDate - year of the selected date
  * year - year of the visible begin date
  * month - month of the visible begin date
  * day - day of the visible begin date
  * formatted - formatted begin date. See the **dateFormat** from the **Options data** chapter above

* endDate - month of the selected date
  * year - year of the visible end date
  * month - month of the visible end date
  * day - day of the visible end date
  * formatted - formatted end date. See the **dateFormat** from the **Options data** chapter above
  
* range - formatted date range. The dates are separated by the dash


## Demo
In the **examples** folder of this project has the sample application and the online demo is [here](http://kekeh.github.io/dpdaterangepicker)

## Dependencies
Depends on AngularJS. Implemented using the AngularJS version 1.3.16.

## Build project
* Build can be done by executing the **grunt** command. It creates the **dist/debug** and the **dist/min** folders and put files to these folders.
```js
grunt
```

## Installation
* Installation can be done using the **bower**. It installs files from the **dist/debug** and the **dist/min** folders. Needed CSS and javascript files are located in these folders.
```js
bower install dpdaterangepicker
```

## Compatibility (tested with)
* IE 9+
* Firefox 36
* Google Chrome 41
* Opera 28.0
* Mobile Safari 8

## Licence
* License: MIT

## Author
* Author: kekeh
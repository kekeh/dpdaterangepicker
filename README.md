# dpdaterangepicker v. 0.1.1

**Date range picker - AngularJS reusable UI component**

## Description
Simple AngularJS directive which implements the date range picker. Depends on only the AngularJS.

## Usage

* include the **dpdaterangepicker-0.1.1.min.js** and the **dpdaterangepicker-0.1.1.min.css** files into your project. See the **Build project** and the **Installation** chapters below.
```html
<script src="dpdaterangepicker-0.1.1.min.js"></script>
<link href="dpdaterangepicker-0.1.1.min.css" rel="stylesheet" type="text/css">
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
    <dpdaterangepicker options="opt" width="20%" height="28px"></dpdaterangepicker>
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
| ng-model | model object - contains selected date range in string format | no | 
| width | width of the component (no selector). Can be pixels or percent for example: **width="20%"** or **width="250px"**. The default value is **260px**. | no | 
| height | height of the component (no selector). Can be pixels or percen for example: **height="100%"** or **height="30px"**. The default value is **30px**. | no | 

### Options data (an option attribute in the dpdaterangepicker directive)

* The following configuration values except **initSelectorMonth**, **initSelectedDateRange** and **dateRangeSelectCb** can be configured also using the **dpdaterangeConfig** object by injecting it. See the **Javascript example** below. By using the **dpdaterangeConfig** does the configuration in the application level. 

| Attribute | Description | Values | Default value | Mandatory |
| :------------ |:---------------|:---------------|:---------------|:---------------|
| **initSelectorMonth** | Initial selector month. When the selector is opened this month is shown. If not defined the current month is shown. See the **Javascript example** below. | object | - | no |
| **initSelectedDateRange** | Initial selected date range. When the component is loaded this date range is shown. If not defined no selection. See the **Javascript example** below. | object | - | no |
| **dateFormat** | Date format. The day and the month are always two digits and the year is always four digits. For example: 'yyyy-mm-dd' | string | 'yyyy-mm-dd' | no |
| **monthLabels** | Object which contain month names. Shown in selector. | strings | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec | no |
| **dayLabels** | Object which contain weekday names. Shown in selector. | strings | Sun, Mon, Tue, Wed, Thu, Fri, Sat | no |
| **buttons** | Object which contain the sub properties. | See below | - | no |
| buttons.**todayBtnText** | Today button text. | text | 'Today' | no |
| buttons.**nextBtnText** | Next button text. | text | 'Next' | no |
| buttons.**prevBtnText** | Previous button text. | text | 'Previous' | no |
| buttons.**okBtnText** | Ok button text. | text | 'OK' | no |
| **beginDateText** | Begin date text shown in UI. | 'begin date' | text | no |
| **endDateText** | End date text shown in UI. | text | 'end date' | no |
| **currDayHighlight** | Is current day highlighted. | true or false | true | no |
| **sunHighlight** | Is sundays highlighted or not. | true or false | true | no |
| **dateRangeSelectCb** | Date range select callback function. See below. | function | - | no |


### Javascript example
```js
var sampleapp = angular.module('sampleapp', ['dpdaterangepicker']);
sampleapp.controller('sampleappctrl', function ($scope, dpdaterangeConfig) {

    // Configure the date range picker in application level by injecting the dpdaterangeConfig object
    dpdaterangeConfig.sunHighlight = false;
    dpdaterangeConfig.currDayHighlight = false;
    
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
        dateFormat: 'dd.mm.yyyy',
        sunHighlight: false,
        currDayHighlight: false,
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
<?xml version="1.0" encoding="UTF-8"?>
<Export generator="Cache" version="25" zv="Cache for Windows (x86-64) 2016.2 (Build 736U)" ts="2017-04-24 08:53:49">
<CSP name="modules/page/pageController.js" application="/widgetsdirect/"><![CDATA[
angular
  .module('WidgetsDirect', ['ngMaterial'])
   .controller('PageController', ['$q', '$scope', '$timeout', '$http', '$log', function($q, $scope, $timeout, $http, $log) {
	
	$scope.message = "";
	$scope.sortAsc = true;
	
	
	
	$http.get('/widgetsdirect/rest/Chris').then(
	  function(response) { //success
	    $scope.message = response.data.Message;
	    $scope.widgets = response.data.Widgets;
      }
     ,function(response) { //failure
	   $scope.message = "Couldn't get data :(";
       }
      );
	   
   		}
   	  ]
   )]]></CSP>
</Export>

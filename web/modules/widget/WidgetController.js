<?xml version="1.0" encoding="UTF-8"?>
<Export generator="Cache" version="25" zv="Cache for Windows (x86-64) 2016.2 (Build 736U)" ts="2017-04-28 19:37:01">
<CSP name="modules/widget/WidgetController.js" application="/widgetsdirect/"><![CDATA[
angular
  .module('WidgetsDirect')
   .controller('WidgetController', ['$q', '$scope', '$timeout', '$http', '$log', '$mdDialog',function($q, $scope, $timeout, $http, $log, $mdDialog) {
	
	  $scope.editWidget = function(ev, widget) {
         var parent = angular.element(document.body);
         $scope.newwidget = widget;
         	
         $mdDialog.show({
            parent: parent,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            targetEvent: ev,
            templateUrl: '/widgetsdirect/modules/widget/EditWidget.csp',
            controller: function DialogController($scope, $mdDialog, $http, $log) {

                $scope.saveWidget = function(widget) {
                  $http.put('/widgetsdirect/rest/widget/'+widget.Id, widget).then(
                     function(data) {
                       
                        $mdDialog.hide();
                    
                     },
                     function(data) {
                       
                          $log.info('Update failed ');

                     }
                  );
               };
            }
         })
      };
	
	
	   
   		}
   	  ]
   )]]></CSP>
</Export>

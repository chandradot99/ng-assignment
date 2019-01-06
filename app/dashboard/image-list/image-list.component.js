'use strict';

angular.
	module('dashboard.imageList', [])
	.component('imageListComponent', {
		transclude: true,
    	bindings: {
      		data: '<'
    	},
		templateUrl: 'dashboard/image-list/image-list.template.html'
	});
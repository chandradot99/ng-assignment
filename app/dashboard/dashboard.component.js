'use strict';

angular.
	module('dashboard')
	.component('dashboardComponent', {
		templateUrl: 'dashboard/dashboard.template.html',
		controller: ['$http', '$q', function DashboardCtrl($http, $q) {
			var that = this;
			var dataApiPromise = $http({method: 'GET', url: 'http://demo8499921.mockable.io/angular', cache: 'true'});
			var imageApiPromise = $http({method: 'GET', url: 'https://picsum.photos/list', cache: 'true'});

			$q.all([dataApiPromise, imageApiPromise]).then(function(response){
				var titles = response[0].data.titles;
				var images = response[1].data.slice(0,5);

				that.clubbedData = [0,1,2,3,4].map(function(index) {
					return {
						title: titles[index],
						imageUrl: 'https://picsum.photos/300/258?image=' + images[index].id
					}
				});
			});

		}]
	});
'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '8/5/2017',
            time: '9:50 pm'
        }
    }
);



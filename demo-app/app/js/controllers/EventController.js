'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '8/5/2017',
            time: '9:50 pm',
            location: {
                address: 'Pune',
                city: 'Pune'
            },

            imageUrl: './img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Session 1'
                },
                {
                    name: 'session 2'
                },
                {
                    name: 'session 3'
                }
            ]
        }
    }
);



'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red"> Hi There </span>';
        $scope.boolVal = true;
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
                    name: 'Session 1',
                    upVoteCount: 0
                },
                {
                    name: 'session 2',
                    upVoteCount: 0
                },
                {
                    name: 'session 3',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);



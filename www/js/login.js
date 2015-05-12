/**
 * Created by pastwinder on 15/5/7.
 */
angular.module('starter.login', [])
    .factory('Projects', function() {
        return {
            all: function() {
                var projectString = window.localStorage['projects'];
                if(projectString) {
                    return angular.fromJson(projectString);
                }
                return [];
            },
            save: function(projects) {
                window.localStorage['projects'] = angular.toJson(projects);
            },
            newProject: function(projectTitle,projectPassword) {
                // Add a new project
                return {
                    title: projectTitle,
                    password: projectPassword,
                    tasks: []
                };
            },
            getLastActiveIndex: function() {
                return parseInt(window.localStorage['lastActiveProject']) || 0;
            },
            setLastActiveIndex: function(index) {
                window.localStorage['lastActiveProject'] = index;
            }
        }
    })
//控制title
.controller('LoginCtrl', function($scope,Projects) {
        // A utility function for creating a new project
        // with the given projectTitle
        var loginUser = function(userName,userPassword) {
//            var newProject = Projects.newProject(projectTitle,projectPassword);
            if(userName=='wind'&&userPassword=='lovej'){
                alert('Login Success!');
            }else{
                alert('Login failure!');
            }
//            $scope.projects.push(newProject);
//            Projects.save($scope.projects);
//            $scope.selectProject(newProject, $scope.projects.length-1);
//            $scope.projectModal.hide();
        }
        // Called to login a user
        $scope.loginUser = function(user) {
            //var projectTitle = prompt('Project name');
            var userName = user.name;
            var userPassword = user.password;
            if(userName) {
                loginUser(userName,userPassword);
            }
        };
    })



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
        var createProject = function(projectTitle,projectPassword) {
            var newProject = Projects.newProject(projectTitle,projectPassword);
            $scope.projects.push(newProject);
            Projects.save($scope.projects);
            $scope.selectProject(newProject, $scope.projects.length-1);
            $scope.projectModal.hide();
        }
        // Called to create a new project
        $scope.newProject = function(project) {
            //var projectTitle = prompt('Project name');
            var projectTitle = project.title;
            var projectPassword = project.password;
            if(projectTitle) {
                createProject(projectTitle,projectPassword);
            }
        };
    })



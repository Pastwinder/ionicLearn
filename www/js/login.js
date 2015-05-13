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
// $http 用于交互数据
// $timeout 用于下拉刷新超时返回
.controller('LoginCtrl', function($scope,$http,$timeout) {
        // A utility function for creating a new project
        // with the given projectTitle
        var loginUser = function(userName,userPassword) {
//            var newProject = Projects.newProject(projectTitle,projectPassword);
            if (userName == 'wind' && userPassword == 'lovej') {
                alert('Login Success!');
                $http.get("http://www.shifanglogistics.com.cn/htmobile/listNews.do?m_userid=15050&Q_isNotice_SN_EQ=0")
                    .success(function (response) {
                        //alert(response);
                        $scope.names = response.result;
                    })
                    .error(function (data) { //错误代码
                    });
            } else {
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
        //删除行方法
        $scope.remove = function (name) {
            $scope.names.splice($scope.names.indexOf(name), 1);
            alert('remove');
        }
        //下拉刷新方法
        $scope.doRefresh = function() {

            console.log('Refreshing!');
            $timeout( function() {

                $scope.names.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
                $scope.names.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
                $scope.names.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
                $scope.names.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');

            }, 1000);

        };
    })



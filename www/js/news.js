/**
 * Created by pastwinder on 15/5/21.
 */
angular.module('starter.news', ['starter.model.newsmodel'])
    .controller('NewsCtrl',function($scope,$http,$timeout,News){
//        $scope.loginUser = function (){
            $http.get("http://www.shifanglogistics.com.cn/htmobile/listNews.do?m_userid=15050&Q_isNotice_SN_EQ=0")
                .success(function (response) {
                    //alert(response);
                    $scope.news = response.result;
                    News.setall(response.result);
                })
                .error(function (data) { //错误代码
                });
//        }

        //删除行方法
        $scope.remove = function (onenews) {
            $scope.news.splice($scope.news.indexOf(onenews), 1);
            alert('remove');
        }
        //下拉刷新方法
        $scope.doRefresh = function() {

            console.log('Refreshing!');
            $timeout( function() {

                $scope.news.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
                $scope.news.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
                $scope.news.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
                $scope.news.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');

            }, 1000);

        };

    })
    .controller('NewsDetailCtrl', function($scope, $stateParams,News) {
        $scope.onenews = News.get($stateParams.newsId);
    })
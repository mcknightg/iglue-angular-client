/**
 * MainCtrl - controller
 */
catwalkApp.controller('MainCtrl', ['$scope','$state','$translate','$window','SubscriptionPlan','Settings',
    function ($scope,$state,$translate,$window,SubscriptionPlan,Settings) {

        SubscriptionPlan.getByPlanId({planId:''},function(plan){
            $scope.smallPlan = plan;
        });
        SubscriptionPlan.getByPlanId({planId:''},function(plan){
            $scope.medPlan = plan;
        });
        SubscriptionPlan.getByPlanId({planId:''},function(plan){
            $scope.largePlan = plan;
        });

        Settings.get().then(function(data){
            $scope.settings = data;
            $scope.base_url = base_url;
        });

        var theme = $window.localStorage.getItem('theme') ;
        if(!theme){theme = 'default'}

        var themes = {
            "default": "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/yeti/bootstrap.min.css",
            "cerulean" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cerulean/bootstrap.min.css",
            "cosmo" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cosmo/bootstrap.min.css",
            "cyborg" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cyborg/bootstrap.min.css",
            "darkly" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/darkly/bootstrap.min.css",
            "flatly" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/flatly/bootstrap.min.css",
            "journal" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/journal/bootstrap.min.css",
            "lumen" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/lumen/bootstrap.min.css",
            "paper" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/paper/bootstrap.min.css",
            "readable" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/readable/bootstrap.min.css",
            "sandstone" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css",
            "simplex" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/simplex/bootstrap.min.css",
            "slate" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/slate/bootstrap.min.css",
            "spacelab" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/spacelab/bootstrap.min.css",
            "superhero" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/superhero/bootstrap.min.css",
            "united" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/united/bootstrap.min.css",
            "yeti" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/yeti/bootstrap.min.css"
        };
        $scope.themesheet = $('#theme');
        $scope.themesheet.attr('href',themes[theme]);
        $scope.changeTheme = function(theme){
            $window.localStorage.setItem('theme',theme) ;
            $scope.themesheet.attr('href',themes[theme]);
        };

    }
]);
//  Home Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider','USER_ROLES',
    function ($stateProvider, $urlRouterProvider,USER_ROLES) {
        $urlRouterProvider.otherwise('/index/home');
        $stateProvider
            .state('index.home', {
                url: "/home",
                templateUrl: "components/home/home.html",
                controller: 'MainCtrl'
            })

    }
]);

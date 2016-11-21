var app=angular.module('2NDopinion_app',['ngRoute','ngCookies']);

app.directive('passwordValidate', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {

                scope.pwdValidLength = (viewValue && viewValue.length >= 8 ? 'valid' : undefined);
                scope.pwdHasLetter = (viewValue && /[A-z]/.test(viewValue)) ? 'valid' : undefined;
                scope.pwdHasNumber = (viewValue && /\d/.test(viewValue)) ? 'valid' : undefined;

                if(scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber) {
                    ctrl.$setValidity('pwd', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('pwd', false);                    
                    return undefined;
                }

            });
        }
    };
});


function mainController($scope,$http,$cookieStore,$location,$timeout,$rootScope,$window){
	$scope.user_email = null;
}

app.controller('MainController',mainController);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller : 'MainController',
		templateUrl : 'home.html'
	})
	.when('/login', {
			controller: 'MainController',
			templateUrl: 'login.html'
		})
	.when('/signup', {
			controller: 'MainController',
			templateUrl: 'signup.html'
		})
	.when('/otp_confirmation', {
			controller: 'MainController',
			templateUrl: 'OTP.html'
		})
	.when('/register', {
			controller: 'MainController',
			templateUrl: 'registerCustomer.html'
		})
	.when('/learnmore', {
			controller: 'MainController',
			templateUrl: 'learnmore.html'
		})	
	.otherwise({redirectTo:'/'})
})
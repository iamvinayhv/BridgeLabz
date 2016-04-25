angular.module('bridgeApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Home');

        $stateProvider
        .state('Home', {
            url: '/Home',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/Home.html'
                }
            }
        })
        .state('AboutUs', {
            url: '/AboutUs',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/AboutUs.html'
                }
            }
        })
        .state('OurJob', {
            url: '/OurJob',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/OurJob.html'
                }
            }
        })
        .state('JoinUs', {
            url: '/JoinUs',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/JoinUs.html'
                }
            }
        })
        .state('Contact', {
            url: '/Contact',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/Contact.html'
                }
            }
        })
        .state('Login', {
            url: '/Login',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/Login.html'
                }
            }
        })
            .state('Register', {
                url: '/Register',
                views: {
                    nav: {
                        templateUrl: 'pages/Navbar.html'
                    },
                    content: {
                        templateUrl: 'pages/Register.html'
                    }
                }
            })

    });



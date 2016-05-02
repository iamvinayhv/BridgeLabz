angular.module('bridgeApp', ['ui.router','satellizer'])
    .config(function ($stateProvider, $urlRouterProvider, $authProvider) {

    $urlRouterProvider.otherwise('/Home');
        // $authProvider.loginUrl = 'http://localhost/bridgelabz';
        $stateProvider
        .state('Home', {
            url: '/Home',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/Home.html'
                },
                footer:{
                    templateUrl: 'pages/footer.html'
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
                },
                footer:{
                    templateUrl: 'pages/footer.html'
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
                },
                footer:{
                    templateUrl: 'pages/footer.html'
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
                },
                footer:{
                    templateUrl: 'pages/footer.html'
                }

            },
                controller : 'resumeController'
        })
        .state('Contact', {
            url: '/Contact',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/Contact.html'
                },
                footer:{
                    templateUrl: 'pages/footer.html'
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
                },
                footer: {
                    templateUrl: 'pages/footer.html'
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
                },
                footer:{
                    templateUrl: 'pages/footer.html'
                }
            }
        })
        .state('callback', {
            url: '/callback',
            views: {
                nav: {
                    templateUrl: 'pages/Navbar.html'
                },
                content: {
                    templateUrl: 'pages/callback.html'
                },
                footer:{
                    templateUrl: 'pages/footer.html'
                }
            }
        });
        $authProvider.linkedin({
            url: 'http://localhost/bridgelabz/#/Home',
            clientId: '75bf56ze65qo89',
            redirectUri: 'https://localhost/bridgelabz/linkedin/callback'
        });
        // $authProvider.oauth2({
        //     name: 'linkedin',
        //     url: '/auth/linkedin',
        //     clientId: '75bf56ze65qo89',
        //     redirectUri: 'https://localhost/bridgelabz/linkedin/callback',
        //     authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization'
        // });



    });



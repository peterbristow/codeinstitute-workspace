angular.module('theMonkeesApp', ['ngRoute',
    'bootstrapLightbox'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            })
            .when('/bio', {
                controller: 'BioController',
                templateUrl: 'views/bio.html'
            })
            .when('/gallery', {
                controller: 'GalleryController',
                templateUrl: 'views/gallery.html'
            })
            .when('/media', {
                controller: 'MediaController',
                templateUrl: 'views/media.html'
            })
            .when('/gigs', {
                controller: 'GigsController',
                templateUrl: 'views/gigs.html'
            })
            .when('/contact', {
                controller: 'ContactController',
                templateUrl: 'views/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

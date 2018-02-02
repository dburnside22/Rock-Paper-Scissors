(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      $stateProvider
        .state('leaderBoard', {
          url: '/leaderBoard',
          controller: 'LeaderCtrl as leader',
          templateUrl: '/templates/leaderBoard.html'
        });
  }

  angular
    .module('rockPaperScissors', ['ui.router', 'firebase'])
    .config(config);
})();

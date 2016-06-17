angular.module('starter', [
  'ionic'
  'starter.controllers'
]).run(($ionicPlatform) ->
  $ionicPlatform.ready ->
    if window.cordova and window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
      cordova.plugins.Keyboard.disableScroll true
    if window.StatusBar
      StatusBar.styleDefault()
    return
  return
).config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state('app',
      url: '/app'
      abstract: true
      templateUrl: 'templates/menu.html'
      controller: 'AppCtrl'
    )
    .state('app.search',
      url: '/search'
      views: 'menuContent':
        templateUrl: 'templates/search.html'
    )
    .state('app.browse',
      url: '/browse'
      views: 'menuContent':
        templateUrl: 'templates/browse.html'
    )
    .state('app.playlists',
      url: '/playlists'
      views: 'menuContent':
        templateUrl: 'templates/playlists.html'
        controller: 'PlaylistsCtrl'
    )
    .state('app.single',
      url: '/playlists/:playlistId'
      views: 'menuContent':
        templateUrl: 'templates/playlist.html'
        controller: 'PlaylistCtrl'
    )
    .state('app.posts',
      url: '/posts'
      views: 'menuContent':
        templateUrl: 'templates/posts.html'
        controller: 'PostsCtrl'
    )
  $urlRouterProvider.otherwise '/app/playlists'
  return

angular.module 'starter.controllers', []

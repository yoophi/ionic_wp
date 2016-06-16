class PostsCtrl extends BaseController
  @inject('$scope', 'WpApiService')

  initialize: ->
    @WpApiService.findPosts().success((response) =>
      console.log response
      @$scope.posts = response
    )


angular.module('starter.controllers').controller('PostsCtrl', PostsCtrl)

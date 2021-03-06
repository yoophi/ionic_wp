class PostsCtrl extends BaseController
  @inject('$scope', '$stateParams', 'WpApiService')

  initialize: ->
    categoryId = @$stateParams.categoryId
    @WpApiService.findPosts(categoryId).success((response) =>
      console.log response
      @$scope.posts = response
    )


angular.module('starter.controllers').controller('PostsCtrl', PostsCtrl)

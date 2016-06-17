class PostCtrl extends BaseController
  @inject('$scope', '$stateParams', 'WpApiService')

  initialize: ->
    postId = @$stateParams.postId
    @WpApiService.findPost(postId).success((response) =>
      @$scope.post = response
    )


angular.module('starter.controllers').controller('PostCtrl', PostCtrl)

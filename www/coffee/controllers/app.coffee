class AppCtrl extends BaseController
  @inject('$scope', 'WpApiService', '$ionicModal', '$timeout')

  initialize: ->
    @$scope.loginData = {}
    @$ionicModal.fromTemplateUrl('templates/login.html', scope: @$scope).then (modal) =>
      @$scope.modal = modal
      return

    @getWpCategories()
    @getWpTotalPosts()

  closeLogin: ->
    @$scope.modal.hide()
    return

  login: ->
    @$scope.modal.show()
    return

  doLogin: ->
    console.log 'Doing login', @$scope.loginData
    @$timeout (=>
      @$scope.closeLogin()
      return
    ), 1000
    return

  getWpCategories: ->
    @WpApiService.findCategories().success((response, status, headers, config) =>
      console.log response
      @$scope.categories = response
    )

  getWpTotalPosts: ->
    @WpApiService.findPosts().success((response, status, headers, config) =>
      @$scope.totalPosts = headers('X-WP-Total')
      console.log 'X-WP-Total', headers('X-WP-Total')
    )

angular.module('starter.controllers').controller('AppCtrl', AppCtrl)

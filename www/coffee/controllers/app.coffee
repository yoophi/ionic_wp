class AppCtrl extends BaseController
  @inject('$scope', '$ionicModal', '$timeout')

  initialize: ->
    @$scope.loginData = {}
    @$ionicModal.fromTemplateUrl('templates/login.html', scope: @$scope).then (modal) =>
      @$scope.modal = modal
      return

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


angular.module('starter.controllers').controller('AppCtrl', AppCtrl)

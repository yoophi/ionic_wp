class WpApiService extends BaseService
  @inject '$http'

  initialize: ->
    @API_ENDPOINT = if ionic.Platform.isWebView() then "http://yoophi.com/blog/wp-json/wp/v2" else '/v2'

  getEndpoint: ->
    @API_ENDPOINT

  findCategories: () ->
    promise = @$http.get(@API_ENDPOINT + '/categories', {}).error((data, status) ->
      return
    )
    promise

  findPost: (postId) ->
    promise = @$http.get(@API_ENDPOINT + "/posts/#{postId}", {}).error((data, status) ->
      return
    )
    promise

  findPosts: (categoryId) ->
    qs = if categoryId isnt "0" then "?categories=#{categoryId}" else ""
    promise = @$http.get(@API_ENDPOINT + '/posts' + qs, {}).error((data, status) ->
      return
    )
    promise


angular.module('starter').service 'WpApiService', WpApiService

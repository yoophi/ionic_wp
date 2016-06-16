class WpApiService extends BaseService
  @inject '$http'

  initialize: ->
    @API_ENDPOINT = if ionic.Platform.isWebView() then "http://yoophi.com/blog/wp-json/wp/v2" else '/v2'

  getEndpoint: ->
    @API_ENDPOINT

  findPosts: () ->
    promise = @$http.get(@API_ENDPOINT + '/posts', {}).error((data, status) ->
      return
    )
    promise


angular.module('starter').service 'WpApiService', WpApiService

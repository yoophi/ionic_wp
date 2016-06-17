var WpApiService,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

WpApiService = (function(superClass) {
  extend(WpApiService, superClass);

  function WpApiService() {
    return WpApiService.__super__.constructor.apply(this, arguments);
  }

  WpApiService.inject('$http');

  WpApiService.prototype.initialize = function() {
    return this.API_ENDPOINT = ionic.Platform.isWebView() ? "http://yoophi.com/blog/wp-json/wp/v2" : '/v2';
  };

  WpApiService.prototype.getEndpoint = function() {
    return this.API_ENDPOINT;
  };

  WpApiService.prototype.findCategories = function() {
    var promise;
    promise = this.$http.get(this.API_ENDPOINT + '/categories', {}).error(function(data, status) {});
    return promise;
  };

  WpApiService.prototype.findPost = function(postId) {
    var promise;
    promise = this.$http.get(this.API_ENDPOINT + ("/posts/" + postId), {}).error(function(data, status) {});
    return promise;
  };

  WpApiService.prototype.findPosts = function(categoryId) {
    var promise, qs;
    qs = categoryId !== "0" ? "?categories=" + categoryId : "";
    promise = this.$http.get(this.API_ENDPOINT + '/posts' + qs, {}).error(function(data, status) {});
    return promise;
  };

  return WpApiService;

})(BaseService);

angular.module('starter').service('WpApiService', WpApiService);

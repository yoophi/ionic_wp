var PostsCtrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PostsCtrl = (function(superClass) {
  extend(PostsCtrl, superClass);

  function PostsCtrl() {
    return PostsCtrl.__super__.constructor.apply(this, arguments);
  }

  PostsCtrl.inject('$scope', '$stateParams', 'WpApiService');

  PostsCtrl.prototype.initialize = function() {
    var categoryId;
    categoryId = this.$stateParams.categoryId || "0";
    console.log('PostsCtrl', 'categoryId', categoryId);
    return this.WpApiService.findPosts(categoryId).success((function(_this) {
      return function(response) {
        console.log(response);
        return _this.$scope.posts = response;
      };
    })(this));
  };

  return PostsCtrl;

})(BaseController);

angular.module('starter.controllers').controller('PostsCtrl', PostsCtrl);

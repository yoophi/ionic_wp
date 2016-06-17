var PostCtrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PostCtrl = (function(superClass) {
  extend(PostCtrl, superClass);

  function PostCtrl() {
    return PostCtrl.__super__.constructor.apply(this, arguments);
  }

  PostCtrl.inject('$scope', '$stateParams', 'WpApiService');

  PostCtrl.prototype.initialize = function() {
    var postId;
    postId = this.$stateParams.postId;
    return this.WpApiService.findPost(postId).success((function(_this) {
      return function(response) {
        return _this.$scope.post = response;
      };
    })(this));
  };

  return PostCtrl;

})(BaseController);

angular.module('starter.controllers').controller('PostCtrl', PostCtrl);

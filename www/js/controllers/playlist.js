var PlaylistCtrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PlaylistCtrl = (function(superClass) {
  extend(PlaylistCtrl, superClass);

  function PlaylistCtrl() {
    return PlaylistCtrl.__super__.constructor.apply(this, arguments);
  }

  PlaylistCtrl.inject('$scope', '$stateParams');

  return PlaylistCtrl;

})(BaseController);

angular.module('starter.controllers').controller('PlaylistCtrl', PlaylistCtrl);

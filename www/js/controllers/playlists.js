var PlaylistsCtrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PlaylistsCtrl = (function(superClass) {
  extend(PlaylistsCtrl, superClass);

  function PlaylistsCtrl() {
    return PlaylistsCtrl.__super__.constructor.apply(this, arguments);
  }

  PlaylistsCtrl.inject('$scope');

  PlaylistsCtrl.prototype.initialize = function() {
    return this.$scope.playlists = [
      {
        title: 'Reggae',
        id: 1
      }, {
        title: 'Chill',
        id: 2
      }, {
        title: 'Dubstep',
        id: 3
      }, {
        title: 'Indie',
        id: 4
      }, {
        title: 'Rap',
        id: 5
      }, {
        title: 'Cowbell',
        id: 6
      }
    ];
  };

  return PlaylistsCtrl;

})(BaseController);

angular.module('starter.controllers').controller('PlaylistsCtrl', PlaylistsCtrl);

var AppCtrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AppCtrl = (function(superClass) {
  extend(AppCtrl, superClass);

  function AppCtrl() {
    return AppCtrl.__super__.constructor.apply(this, arguments);
  }

  AppCtrl.inject('$scope', 'WpApiService', '$ionicModal', '$timeout');

  AppCtrl.prototype.initialize = function() {
    this.$scope.loginData = {};
    this.$ionicModal.fromTemplateUrl('templates/login.html', {
      scope: this.$scope
    }).then((function(_this) {
      return function(modal) {
        _this.$scope.modal = modal;
      };
    })(this));
    this.getWpCategories();
    return this.getWpTotalPosts();
  };

  AppCtrl.prototype.closeLogin = function() {
    this.$scope.modal.hide();
  };

  AppCtrl.prototype.login = function() {
    this.$scope.modal.show();
  };

  AppCtrl.prototype.doLogin = function() {
    console.log('Doing login', this.$scope.loginData);
    this.$timeout(((function(_this) {
      return function() {
        _this.$scope.closeLogin();
      };
    })(this)), 1000);
  };

  AppCtrl.prototype.getWpCategories = function() {
    return this.WpApiService.findCategories().success((function(_this) {
      return function(response, status, headers, config) {
        console.log(response);
        return _this.$scope.categories = response;
      };
    })(this));
  };

  AppCtrl.prototype.getWpTotalPosts = function() {
    return this.WpApiService.findPosts().success((function(_this) {
      return function(response, status, headers, config) {
        _this.$scope.totalPosts = headers('X-WP-Total');
        return console.log('X-WP-Total', headers('X-WP-Total'));
      };
    })(this));
  };

  return AppCtrl;

})(BaseController);

angular.module('starter.controllers').controller('AppCtrl', AppCtrl);

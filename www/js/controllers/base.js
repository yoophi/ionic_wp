var BaseController,
  slice = [].slice;

BaseController = (function() {
  BaseController.inject = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return this.$inject = args;
  };

  function BaseController() {
    var args, fn, fn1, i, index, key, len, ref, ref1, ref2;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    ref = this.constructor.$inject;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      key = ref[index];
      this[key] = args[index];
    }
    if (this.$scope != null) {
      this.scope = this.$scope;
    }
    ref1 = this.constructor.prototype;
    fn1 = (function(_this) {
      return function(key) {
        if (typeof fn === 'function') {
          fn = (typeof fn.bind === "function" ? fn.bind(_this) : void 0) || _.bind(fn, _this);
        }
        Object.defineProperty(_this, key, {
          get: function() {
            return this.scope[key];
          },
          set: function(v) {
            return this.scope[key] = v;
          }
        });
        return _this.scope[key] = fn;
      };
    })(this);
    for (key in ref1) {
      fn = ref1[key];
      console.log(key);
      if ((key === 'constructor' || key === 'initialize') || key[0] === '_') {
        continue;
      }
      fn1(key);
    }
    if ((ref2 = this.initialize) != null) {
      ref2.call(this);
    }
  }

  return BaseController;

})();
var BaseService,
  slice = [].slice;

BaseService = (function() {
  BaseService.inject = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return this.$inject = args;
  };

  function BaseService() {
    var args, i, index, key, len, ref, ref1;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    ref = this.constructor.$inject;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      key = ref[index];
      this[key] = args[index];
    }
    if (this.$scope != null) {
      this.scope = this.$scope;
    }
    if ((ref1 = this.initialize) != null) {
      ref1.call(this);
    }
  }

  return BaseService;

})();

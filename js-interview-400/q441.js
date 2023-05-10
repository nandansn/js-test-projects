// How do you create your own bind method using either call or apply method?

/**
 * The custom bind function needs to be created on Function prototype inorder to use it as other builtin functions. This custom function should return a function similar to original bind method and the implementation of inner function needs to use apply method call.

The function which is going to bind using custom myOwnBind method act as the attached function(boundTargetFunction) and argument as the object for apply method call.
 */


Function.prototype.myOwnBind = function(whoIsCallingMe) {
    if (typeof this !== "function") {
      throw new Error(this + "cannot be bound as it's not callable");
    }
    const boundTargetFunction = this;
    return function() {
      boundTargetFunction.apply(whoIsCallingMe, arguments);
    }
  }
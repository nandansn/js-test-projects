/**
 * all subclass/derived class should be substitutable for their base/parent class. If you use base type, you should be able to use subtypes without breaking anything.
 */

/**
* Simple hypothetical example that violates  
* Liskov Principle with real-time situation
*
* STUPID Approach
*/

class Car {
    constructor(){...}
  
    public getEngine():IEngine {...}  
    public startEngine():void {...}
    public move():void {...}
    public stopEngine():IEngine {...}
  }
  /* 
  * We are extending class Car to class Cycle
  */
  class Cycle extends Car {  
      constuctor(){...}
      public startCycle() {...}
      public stopCycle() {...}  
  }
  /**
  * Since Cycle extends Car; 
  * startEngine(), stopEngine() methods are also
  * available which is incorrect and inaccurate abstraction
  *
  * How can we fix it?
  */

  /**
* Simple hypothetical example that follows the 
* Liskov Principle with real-time situation
*
* SO'L'ID approach
*/

class Vehicle {
    constructor(){...}
  
    public move():void {...}
  }
  
  class Car extends Vehicle {
    constructor(){...}
  
    public getEngine():IEngine {...}  
    public startEngine():void {...}
    public move():void {...}
    public stopEngine():IEngine {...}
  
  }
  
  /* 
  * We are extending class Car to class Cycle
  */
  class Cycle extends Car {  
      constructor(){...}
  
      public startCycle() {...}
      public move() {...}   
      public stopCycle() {...}  
  }
  /**
  * Since class Cycle extends Vehicle; 
  * move() method is only also available and applicable
  * which is precise level of abstraction
  */
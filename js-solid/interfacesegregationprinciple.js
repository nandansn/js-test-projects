/**
 * This principle deals with the demerits and issues caused when implementing big interfaces.
 * 
 * It states that we should break our interfaces into granular small ones so that they better satisfy the requirements. This is necessary so as to reduce the amount of unused code.
 */

/**
*  Simplest Example that violates Interface 
*  Segregation Principle 
*
*  STUPID Approach
*
*  Interface for Shop that sells dress and shoes 
*/

interface ICommodity {
    public updateRate();
    public updateDiscount();
 
    public addCommodity();
    public deleteCommodity();
 
    public updateDressColor();
    public updateDressSize();
 
    public updateSoleType();
 
}


/**
*  Simplest Example that supports Interface 
*  Segregation Principle 
*
*  SOL'I'D Approach
*
*  Separate Interfaces for Shop that sells dress and shoes 
*/

interface ICommodity {
    public updateRate();
    public updateDiscount();
    public addCommodity();
    public deleteCommodity();
 }
 
 
 interface IDress {
    public updateDressColor();
    public updateDressSize();
 }
 
 interface IShoe {
    public updateSoleType();
    public updateShoeSize();
 }


 /**
  * This principle focuses on dividing the set of actions into smaller parts such that Class executes what is required.
  */
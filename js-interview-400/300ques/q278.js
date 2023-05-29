// Is enums feature available in javascript

/**
 * No, javascript does not natively support enums. But there are different kinds of solutions to simulate them even though they may not provide exact equivalents. For example, you can use freeze or seal on object,
 */

var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})
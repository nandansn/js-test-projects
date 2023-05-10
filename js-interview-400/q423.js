// What is the easiest way to ignore promise errors?

/**
 * The easiest and safest way to ignore promise errors is void that error. This approach is ESLint friendly too.
 */

await promise.catch((e) => void e);

// What is the difference between setTimeout, setImmediate and process.nextTick?

/**
 * Set Timeout: setTimeout() is to schedule execution of a one-time callback after delay milliseconds.
Set Immediate: The setImmediate function is used to execute a function right after the current event loop finishes.
Process NextTick: If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively.



The first one executed was process.nextTick, which puts its callback at the front of the event queue. It will execute after the code currently being executed but before any I/O events or timers.

Next is "timeout". Since we passed setTimeout a timeout of 0, there's no additional enforced delay before its execution, and it is placed on into the timer queue during the next loop.

Finally, we have setImmediate, which is clearly not as immediate as its name suggests! Its callback is placed in the check queue of the next cycle of the event loop. Since the check queue occurs later than the timer queue, setImmediate will be slower than setTimeout 0.

All in all, the event loop looks like this:

timers -> IO -> poll -> check ->close -> timers -> ...

Timers: callbacks from setInterval or setTimeout
IO callbacks: callbacks from I/O events
Idle: used internally by Node between IO and Poll phases
Poll: retrieve new I/O events
Check: callbacks from setImmediate execute here
Close: handle closed connections like sockets
 */
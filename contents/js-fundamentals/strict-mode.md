## The modern mode, "use strict"

when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict"

### use strict:

The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

**Example**

> "use strict";
>
> // this code works the modern way

**Ensure that “use strict” is at the top**

Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled

### Browser console

- how to actually use strict in the console?

> 'use strict'; <Shift+Enter for a newline>
> // ...your code
> <Enter to run>

It works in most browsers, namely Firefox and Chrome.

If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper:

> (function() {
> 'use strict';
>
> // ...your code here...
> })()

### Should we “use strict”?

The question may sound obvious, but it’s not so.

One could recommend to start scripts with "use strict"… But you know what’s cool?

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.

As of now, we’ve got to know about use strict in general.

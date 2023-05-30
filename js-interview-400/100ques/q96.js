// What is the purpose of void 0

/*

Void(0) is used to prevent the page from refreshing. 
This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. 
It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an <a> element. i.e, when you click a link, 
the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression. 
For example, the below link notify the message without reloading the page

<a href="JavaScript:void(0);" onclick="alert('Well done!')">
  Click Me!
</a>

By using javascript:void(0), the <a> tag will not send you to other web address. It will also not refresh the page as links usually do when you don't specify a value for the href attribute.

If you are wondering why we don't just remove the href attribute, the answer is that by removing the href attribute we will also remove the link appearance of the <a> element. That means that the cursor will not change when hovering the <a> tag. The cursor will act like it is on normal text.

In other words, by adding javascript:void(0) as the value of href attribute we will create a link that does nothing.

The example link from the beginning of this article will run the clickFunction function when the tag is clicked, but without refreshing the page or sending you to a different page.

When to use javascript:void(0);?
Thankfully, with all the updates made in Javascript, you will never have to use it as there are better alternatives to it.

In order to prevent the default behavior of a <a> tag, it's generally recommended to use the <button> tag for buttons and the <a> tag for links. Also, if you need or want to change the cursor, it's recommended to use CSS instead of changing the tag to <a>.

*/

// create a new function that adds 2 numbers /

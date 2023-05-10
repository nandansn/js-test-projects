// How do you create custom HTML element?

/**
 * Define your custom HTML element: First you need to define some custom class by extending HTMLElement class. After that define your component properties (styles,text etc) using connectedCallback method. Note: The browser exposes a function called customElements.define inorder to reuse the element.
 * 
 * 
 */

class CustomElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "This is a custom element";
    }
  }
  customElements.define("custom-element", CustomElement);


  /**
   * Use custome element just like other HTML element: Declare your custom element as a HTML tag.
   * 
   *    <body>
        <custom-element>
   </body>
   */

  
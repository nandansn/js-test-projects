// // What is the use of stopPropagation method?

/*

The stopPropagation method is used to stop the event from bubbling up the event chain.
For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

document
  .getElementById("link")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

  */

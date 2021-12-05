const pElement = document.getElementById('desc');

(function traverseParent(pElement) {
  if (pElement) {
    console.log(pElement.parentElement);
    traverseParent(pElement.parentElement);
  } else {
    return;
  }
})(document.getElementById('desc'));

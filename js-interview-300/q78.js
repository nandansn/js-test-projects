// How do you detect caps lock key turned on or not

/*

The mouseEvent getModifierState() is used to return a boolean value that indicates whether the specified modifier key is activated or not. 
The modifiers such as CapsLock, ScrollLock and NumLock are activated when they are clicked, and deactivated when they are clicked again.

<input type="password" onmousedown="enterInput(event)" />

<p id="feedback"></p>

<script>
  function enterInput(e) {
    var flag = e.getModifierState("CapsLock");
    if (flag) {
      document.getElementById("feedback").innerHTML = "CapsLock activated";
    } else {
      document.getElementById("feedback").innerHTML =
        "CapsLock not activated";
    }
  }
</script>

*/
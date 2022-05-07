const keys = document.querySelectorAll(".keys");
const keysTab = document.querySelector(".keys-tab");
const keysSpace = document.querySelector(".keys-space");
const keysCapslock = document.querySelector(".keys-capslock");
const leftShift = document.querySelector(".left-shift");
const rightShift = document.querySelector(".right-shift");
const leftCtrl = document.querySelector(".left-ctrl");
const rightCtrl = document.querySelector(".right-ctrl");
const leftAlt = document.querySelector(".left-alt");
const rightAlt = document.querySelector(".right-alt");
for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerHTML);
  keys[i].setAttribute("lowercasename", keys[i].innerHTML.toLowerCase());
}

window.addEventListener("keydown", function (event) {
  console.log(event.code);
  for (let i = 0; i < keys.length; i++) {
    if (
      event.key == keys[i].getAttribute("keyname") ||
      event.key == keys[i].getAttribute("lowercasename")
    ) {
      keys[i].classList.add("active");
    }
    if (event.code == "Space") {
      keysSpace.classList.add("active");
    }
    if (event.code == "CapsLock") {
      if (event.getModifierState("CapsLock")) {
        keysCapslock.classList.add("active");
      } else {
        keysCapslock.classList.remove("active");
      }
    }
    if (event.code == "ShiftLeft") {
      rightShift.classList.remove("active");
    }
    if (event.code == "ShiftRight") {
      leftShift.classList.remove("active");
    }
    if (event.code == "ControlLeft") {
      leftCtrl.classList.add("active");
      rightCtrl.classList.remove("active");
    }
    if (event.code == "ControlRight") {
      rightCtrl.classList.add("active");
      leftCtrl.classList.remove("active");
    }
    if (event.code == "AltLeft") {
      leftAlt.classList.add("active");
      rightAlt.classList.remove("active");
    }
    if (event.code == "AltRight") {
      rightAlt.classList.add("active");
      leftAlt.classList.remove("active");
    }
  }
});

window.addEventListener("keyup", function (event) {
  for (let i = 0; i < keys.length; i++) {
    if (
      (event.key == keys[i].getAttribute("keyname") ||
        event.key == keys[i].getAttribute("lowercasename")) &&
      event.code !== "CapsLock"
    ) {
      keys[i].classList.remove("active");
    }
    if (event.code == "Tab") {
      keysTab.classList.remove("active");
    }
    if (event.code == "Space") {
      keysSpace.classList.remove("active");
    }
    if (event.code == "ControlLeft") {
      leftCtrl.classList.remove("active");
      console.log("ctrl l");
    }
    if (event.code == "ControlRight") {
      rightCtrl.classList.remove("active");
      console.log("ctrl l");
    }
    if (event.code == "AltLeft") {
      leftAlt.classList.remove("active");
      console.log("ctrl l");
    }
    if (event.code == "AltRight") {
      rightAlt.classList.remove("active");
      console.log("ctrl l");
    }
  }
});

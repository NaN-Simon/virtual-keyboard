const keyboard = document.querySelector(".keyboard-wrapper");
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
const keysDelete = document.querySelector(".keys-delete");
const keysLeft = document.querySelector(".keys-left");
const keysRight = document.querySelector(".keys-right");
const keysUp = document.querySelector(".keys-up");
const keysDown = document.querySelector(".keys-down");
const text = document.querySelector(".text");

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerHTML);
  keys[i].setAttribute("lowercasename", keys[i].innerHTML.toLowerCase());
}

window.addEventListener("keydown", function (event) {
  // console.log(event.code);
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
    if (event.code == "Delete") {
      keysDelete.classList.add("active");
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
    if (event.code == "ArrowLeft") {
      keysLeft.classList.add("active");
    }
    if (event.code == "ArrowRight") {
      keysRight.classList.add("active");
    }
    if (event.code == "ArrowUp") {
      keysUp.classList.add("active");
    }
    if (event.code == "ArrowDown") {
      keysDown.classList.add("active");
    }
    if (event.code == "CapsLock") {
      if (event.getModifierState("CapsLock")) {
        keysCapslock.classList.add("active");
        toUppercase();
      } else {
        keysCapslock.classList.remove("active");
        toLowercase();
      }
    }
    if (event.code == "ControlLeft") {
      window.addEventListener("keyup", function (e) {
        if (e.code == "ShiftLeft") {
          toChangeKeys()
        }
      });
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
    if (event.code == "Delete") {
      keysDelete.classList.remove("active");
    }
    if (event.code == "ControlLeft") {
      leftCtrl.classList.remove("active");
    }
    if (event.code == "ControlRight") {
      rightCtrl.classList.remove("active");
    }
    if (event.code == "AltLeft") {
      leftAlt.classList.remove("active");
    }
    if (event.code == "AltRight") {
      rightAlt.classList.remove("active");
    }
    if (event.code == "ArrowLeft") {
      keysLeft.classList.remove("active");
    }
    if (event.code == "ArrowRight") {
      keysRight.classList.remove("active");
    }
    if (event.code == "ArrowUp") {
      keysUp.classList.remove("active");
    }
    if (event.code == "ArrowDown") {
      keysDown.classList.remove("active");
    }
  }
});
let capsLockFlag = false;
text.value = "";
window.addEventListener("click", function (event) {
  const current = event.target;
  if (event.target.closest(".keyboard-wrapper")) {
    if (current.innerHTML.length == 1) {
      text.value += current.innerHTML;
    }
    if (current.innerHTML == "") {
      text.value += " ";
    }

    if(current.innerHTML == "Lang"){
      console.log('asd')
      toChangeKeys()
    }
    if (current.innerHTML == "CapsLock") {
      if (capsLockFlag) {
        keysCapslock.classList.add("active");
        toUppercase();
        capsLockFlag = false;
      } else {
        keysCapslock.classList.remove("active");
        toLowercase();
        capsLockFlag = true;
      }
    }
    if (current.innerHTML == "Backspace" && text.value !== ""){
      text.value=text.value.substring(0,text.value.length-1)
    }
    if (current.innerHTML == "") {
      keysSpace.classList.add("active");
      setTimeout(()=>{
        keysSpace.classList.remove("active");
      },400)
    }
  }
});

function toLowercase() {
  for (let key of keys) {
    if (key.getAttribute("lowercasename").length == 1) {
      key.innerHTML = key.getAttribute("lowercasename");
    }
  }
}
function toUppercase() {
  for (let key of keys) {
    if (key.getAttribute("keyname").length == 1) {
      key.innerHTML = key.getAttribute("keyname");
    }
  }
}
function toChangeKeys(){
  for(let key of keys){
    if (key.getAttribute("ru")){
      key.innerHTML = key.getAttribute("ru")
    }
  }
}


window.text=text;
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
const keysBackspace = document.querySelector(".keys-backspace");
const keysBackquote = document.querySelector(".keys-backquote");
const keys1 = document.querySelector(".keys1");
const keys2 = document.querySelector(".keys2");
const keys3 = document.querySelector(".keys3");
const keys4 = document.querySelector(".keys4");
const keys5 = document.querySelector(".keys5");
const keys6 = document.querySelector(".keys6");
const keys7 = document.querySelector(".keys7");
const keys8 = document.querySelector(".keys8");
const keys9 = document.querySelector(".keys9");
const keys0 = document.querySelector(".keys0");
const keysDash = document.querySelector(".keys-dash");
const keysEquals = document.querySelector(".keys-equals");
const bracketLeft = document.querySelector(".bracket-left");
const bracketRight = document.querySelector(".bracket-right");
const backslash = document.querySelector(".keys-slash");
const keysEnter = document.querySelector(".keys-enter");

for (let i = 0; i < keys.length; i++) {
  if (
    keys[i].innerHTML.length == 1 &&
    keys[i].innerHTML.match(/[a-zа-яё;',.]/i)
  ) {
    keys[i].setAttribute("keyname", keys[i].innerHTML);
    keys[i].setAttribute(
      "lowercasename",
      keys[i].getAttribute("en").toLowerCase()
    );
    keys[i].setAttribute(
      "rulowercasename",
      keys[i].getAttribute("ru").toLowerCase()
    );
  }
}

window.addEventListener("keydown", function (event) {
  for (let i = 0; i < keys.length; i++) {
    if (
      event.key == keys[i].getAttribute("keyname") ||
      event.key == keys[i].getAttribute("lowercasename") ||
      event.key == keys[i].getAttribute("ru") ||
      event.key == keys[i].getAttribute("rulowercasename")
    ) {
      keys[i].classList.add("active");
    }
    if (event.code == "Backquote") {
      keysBackquote.classList.add("active");
    }
    if (event.code == "Digit1") {
      keys1.classList.add("active");
    }
    if (event.code == "Digit2") {
      keys2.classList.add("active");
    }
    if (event.code == "Digit3") {
      keys3.classList.add("active");
    }
    if (event.code == "Digit4") {
      keys4.classList.add("active");
    }
    if (event.code == "Digit5") {
      keys5.classList.add("active");
    }
    if (event.code == "Digit6") {
      keys6.classList.add("active");
    }
    if (event.code == "Digit7") {
      keys7.classList.add("active");
    }
    if (event.code == "Digit8") {
      keys8.classList.add("active");
    }
    if (event.code == "Digit9") {
      keys9.classList.add("active");
    }
    if (event.code == "Digit0") {
      keys0.classList.add("active");
    }
    if (event.code == "Minus") {
      keysDash.classList.add("active");
    }
    if (event.code == "Equal") {
      keysEquals.classList.add("active");
    }
    if (event.code == "Backspace") {
      keysBackspace.classList.add("active");
    }
    if (event.code == "BracketLeft") {
      bracketLeft.classList.add("active");
    }
    if (event.code == "BracketRight") {
      bracketRight.classList.add("active");
    }
    if (event.code == "Backslash") {
      backslash.classList.add("active");
    }
    if (event.code == "Tab") {
      keysTab.classList.add("active");
    }
    if (event.code == "Space") {
      keysSpace.classList.add("active");
    }
    if (event.code == "Delete") {
      keysDelete.classList.add("active");
    }
    if (event.code == "ShiftLeft") {
      leftShift.classList.add("active");
    }
    if (event.code == "ShiftRight") {
      rightShift.classList.add("active");
    }
    if (event.code == "Enter") {
      keysEnter.classList.add("active");
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
      document.onkeyup = function (e) {
        if (e.code == "ShiftLeft") {
          if (langFlag) {
            toEn();
            langFlag = false;
          } else {
            toRu();
            langFlag = true;
          }
        }
      };
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
    if (event.code == "Backquote") {
      keysBackquote.classList.add("active");
    }
    if (event.code == "Digit1") {
      keys1.classList.remove("active");
    }
    if (event.code == "Digit2") {
      keys2.classList.remove("active");
    }
    if (event.code == "Digit3") {
      keys3.classList.remove("active");
    }
    if (event.code == "Digit4") {
      keys4.classList.remove("active");
    }
    if (event.code == "Digit5") {
      keys5.classList.remove("active");
    }
    if (event.code == "Digit6") {
      keys6.classList.remove("active");
    }
    if (event.code == "Digit7") {
      keys7.classList.remove("active");
    }
    if (event.code == "Digit8") {
      keys8.classList.remove("active");
    }
    if (event.code == "Digit9") {
      keys9.classList.remove("active");
    }
    if (event.code == "Digit0") {
      keys0.classList.remove("active");
    }
    if (event.code == "Minus") {
      keysDash.classList.remove("active");
    }
    if (event.code == "Equal") {
      keysEquals.classList.remove("active");
    }
    if (event.code == "Backspace") {
      keysBackspace.classList.remove("active");
    }
    if (event.code == "BracketLeft") {
      bracketLeft.classList.remove("active");
    }
    if (event.code == "BracketRight") {
      bracketRight.classList.remove("active");
    }
    if (event.code == "Backslash") {
      backslash.classList.remove("active");
    }
    if (event.code == "Delete") {
      keysDelete.classList.remove("active");
    }
    if (event.code == "ShiftLeft") {
      leftShift.classList.remove("active");
    }
    if (event.code == "ShiftRight") {
      rightShift.classList.remove("active");
    }
    if (event.code == "Enter") {
      keysEnter.classList.remove("active");
    }
  }
});
let capsLockFlag = false;
let langFlag = false;
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
    if (current.innerHTML == "Backspace" && text.value !== "") {
      text.value =
        text.value.substring(0, text.selectionStart - 1) +
        text.value.substring(text.selectionEnd, text.value.length);
    }
    if (current.innerHTML == "Del") {
      text.value =
        text.value.substring(0, text.selectionStart) +
        text.value.substring(text.selectionEnd + 1, text.value.length);
    }
    if (current.innerHTML == "") {
      keysSpace.classList.add("active");
      setTimeout(() => {
        keysSpace.classList.remove("active");
      }, 400);
    }

    if (current.innerHTML == "Lang") {
      if (langFlag || localStorage.getItem("language") === "russian") {
        localStorage.removeItem("language");
        toEn();
        langFlag = false;
      } else {
        localStorage.setItem("language", "russian");
        toRu();
        langFlag = true;
      }
      toChangeLang();
    }
  }
  text.focus();
});

function toChangeLang() {
  if (localStorage.getItem("language") === "russian") {
    toRu();
  } else {
    toEn();
  }
}
toChangeLang();

function toLowercase() {
  for (let key of keys) {
    if (langFlag) {
      if (key.getAttribute("rulowercasename") != null) {
        if (key.getAttribute("rulowercasename").match(/[a-zа-яё;',.]/i)) {
          key.innerHTML = key.getAttribute("rulowercasename");
        }
      }
    } else {
      if (key.getAttribute("lowercasename") != null) {
        if (key.getAttribute("lowercasename").match(/[a-zа-яё;',.]/i)) {
          key.innerHTML = key.getAttribute("lowercasename");
        }
      }
    }
  }
}
function toUppercase() {
  for (let key of keys) {
    if (langFlag) {
      if (key.getAttribute("ru") != null) {
        if (key.getAttribute("ru").match(/[a-zа-яё;',.]/i)) {
          key.innerHTML = key.getAttribute("ru");
        }
      }
    } else {
      if (key.getAttribute("keyname") != null) {
        if (key.getAttribute("keyname").match(/[a-zа-яё;',.]/i)) {
          key.innerHTML = key.getAttribute("keyname");
        }
      }
    }
  }
}
function toRu() {
  for (let key of keys) {
    if (key.getAttribute("ru")) {
      key.innerHTML = key.getAttribute("ru");
    }
  }
}
function toEn() {
  for (let key of keys) {
    if (key.getAttribute("ru")) {
      key.innerHTML = key.getAttribute("keyname");
    }
  }
}

window.text = text;

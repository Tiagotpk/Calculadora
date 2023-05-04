import calculate from "./calc.js"
import clipboard from "./clipboard.js"
import { handleButtonPress, handleClearBtn, handleType } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handleClearBtn)
document.getElementById('input').addEventListener("keydown", handleType)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", clipboard)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)

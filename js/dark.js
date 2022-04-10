let body = document.querySelector('body')
let toggleBtn = document.querySelector('.toggle-btn')

function setDarkTheme() {
  body.classList.toggle('dark')
}

toggleBtn.addEventListener('click', switchTheme)

function switchTheme() {
  // Get the value of the "dark" item from the local storage on every click
  darkMode = localStorage.getItem('dark')

  if (darkMode !== 'on') {
    //   Set the value of the item to "on" when dark mode is on
    setDarkTheme()
    darkMode = localStorage.setItem('dark', 'on')
  } else {
    //   Set the value of the item to  "null" when dark mode if off
    setDarkTheme()
    darkMode = localStorage.setItem('dark', 'off')
  }
}

// Get the value of the "dark" item from the local storage
let darkMode = localStorage.getItem('dark')

// check dark mode is on or off on page reload
if (darkMode === 'on') {
  setDarkTheme()
}

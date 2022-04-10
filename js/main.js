//?=============== declaration ====================
let todoInp = document.querySelector('.todoInp')
let todoBtn = document.querySelector('.todoBtn')
let cont = document.querySelector('.cont')
let tasks = []
let editSwitch = 1
let a

//! events
todoBtn.addEventListener('click', funTask)

//!===============START THE FUNCTIONS ===================
function funTask(e) {
  e.preventDefault()
  if (todoInp.value == '') {
    return
  }
  //?=============== declaration ====================

  let contTask = document.createElement('div')
  let task = document.createElement('input')
  let removeBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  let removeIcon = document.createElement('i')
  let editIcon = document.createElement('i')

  //*============= appendChild =======================
  cont.appendChild(contTask)
  contTask.appendChild(task)
  contTask.appendChild(removeBtn)
  removeBtn.appendChild(removeIcon)
  contTask.appendChild(editBtn)
  editBtn.appendChild(editIcon)

  //?=============text contint && setAttribute ==========
  a = todoInp.value
  task.value = a
  removeIcon.classList.add('fa-solid')
  removeIcon.classList.add('fa-trash')
  editIcon.classList.add('fa-solid')
  editIcon.classList.add('fa-pen-to-square')
  task.disabled = true

  //*============ save an object =====================
  let taskObj = {
    id: Date.now(),
    text: task.value,
  }
  //*========= save in localStorage ==================
  tasks.push(taskObj)
  localStorage.setItem('key', JSON.stringify(tasks))

  //!======== remove function =======================
  removeBtn.addEventListener('click', remove)

  function remove() {
    //*==========git localStorage ele =================
    let dataLocalStorage = JSON.parse(localStorage.getItem('key'))
    dataLocalStorage = dataLocalStorage.filter((ta) => ta.text != task.value)
    //*========reset localStorage ele =================
    localStorage.setItem('key', JSON.stringify(dataLocalStorage))
    contTask.remove()
  }
  //!========= edit function ========================
  editBtn.addEventListener('click', edit)
  function edit() {
    let dataLocalStorage = JSON.parse(localStorage.getItem('key'))
    if (editSwitch == 1) {
      task.classList.toggle('class', 'inpTask')
      task.disabled = false
      editSwitch = 0
    } else {
      task.disabled = true
      taskObj.text = task.value
      editSwitch = 1
      console.log(taskObj)
      for (let i = 0; i < dataLocalStorage.length; i++) {
        if (taskObj.id == dataLocalStorage[i].id) {
          delete dataLocalStorage[i]
        }
      }
      dataLocalStorage.push(taskObj)
      dataLocalStorage = dataLocalStorage.filter((x) => x.id != null)
      dataLocalStorage = dataLocalStorage.sort((a, b) => a.id - b.id)
      localStorage.setItem('key', JSON.stringify(dataLocalStorage))
    }
    task.addEventListener('keyup', preseEnter)
    function preseEnter(event) {
      if (event.keyCode === 13) {
        event.preventDefault()
        task.disabled = true
        console.log(task.value)
        editBtn.click()
      }
    }
  }

  todoInp.value = ''
}

document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  let data = JSON.parse(localStorage.getItem('key'))
  if (data == null) {
    return
  }
  console.log(data)
  data.forEach((e, i, arr) => {
    //?=============== declaration ====================

    let contTask = document.createElement('div')
    let task = document.createElement('input')
    let removeBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    let removeIcon = document.createElement('i')
    let editIcon = document.createElement('i')

    //*============= appendChild =======================
    cont.appendChild(contTask)
    contTask.appendChild(task)
    contTask.appendChild(removeBtn)
    removeBtn.appendChild(removeIcon)
    contTask.appendChild(editBtn)
    editBtn.appendChild(editIcon)

    //?=============text contint && setAttribute ==========
    task.value = e.text
    removeIcon.classList.add('fa-solid')
    removeIcon.classList.add('fa-trash')
    editIcon.classList.add('fa-solid')
    editIcon.classList.add('fa-pen-to-square')
    task.disabled = true
    //*============ save an object =====================
    let taskObj = e
    //*========= save in localStorage ==================
    tasks.push(taskObj)
    localStorage.setItem('key', JSON.stringify(tasks))
    //!======== remove function =======================
    removeBtn.addEventListener('click', remove)

    function remove() {
      //*==========git localStorage ele =================
      let dataLocalStorage = JSON.parse(localStorage.getItem('key'))
      dataLocalStorage = dataLocalStorage.filter((ta) => ta.text != task.value)
      //*========reset localStorage ele =================
      localStorage.setItem('key', JSON.stringify(dataLocalStorage))
      contTask.remove()
    }
    //!========= edit function ========================
    editBtn.addEventListener('click', edit)
    function edit() {
      let dataLocalStorage = JSON.parse(localStorage.getItem('key'))
      if (editSwitch == 1) {
        task.disabled = false
        editSwitch = 0
      } else {
        task.disabled = true
        taskObj.text = task.value
        editSwitch = 1
        console.log(taskObj)
        for (let i = 0; i < dataLocalStorage.length; i++) {
          if (taskObj.id == dataLocalStorage[i].id) {
            delete dataLocalStorage[i]
          }
        }
        dataLocalStorage.push(taskObj)
        dataLocalStorage = dataLocalStorage.filter((x) => x.id != null)
        dataLocalStorage = dataLocalStorage.sort((a, b) => a.id - b.id)
        localStorage.setItem('key', JSON.stringify(dataLocalStorage))
      }
    }

    todoInp.value = ''
    console.log(e.text)
  })
}
console.log(Math.random())

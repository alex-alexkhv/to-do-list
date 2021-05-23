function saveTasks(nameCategory, tasks) {
    localStorage.setItem(nameCategory, JSON.stringify(tasks))
        // console.log("saveTasks nameCategory: " + nameCategory)    
        // console.log("saveTasks tasks: ")
        // console.log(tasks)
        // console.log("tasks.length: ")
        // console.log(tasks.length)
//         let countTasks = {[nameCategory]: tasks.length}
//         // console.log(countTasks)
// if (countTasksArr === undefined) {
//     let countTasksArr = []
//     countTasksArr.push(countTasks)
//     } else {
//         countTasksArr.push(countTasks)
//     }
    

//      console.log(countTasksArr)
}

function pushTasks(nameCategory, task) {
    const categoryTasks = loadTasks(nameCategory)
    categoryTasks.push(task)

    saveTasks(nameCategory, categoryTasks)
}

function loadTasks(nameCategory) {
    const oldData = localStorage.getItem(nameCategory)
    console.log("loadTasks oldData: " + oldData)
    const tasks = JSON.parse(oldData)
    return tasks || []
}

function saveCategories(categories) {
    localStorage.setItem("categories", JSON.stringify(categories))
}

function loadCategories() {
    const categories = JSON.parse(localStorage.getItem("categories"))
    return categories
}

function addTask(list, taskText, deleteCb) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = taskText
    const btnDel = document.createElement("button")
    btnDel.innerText = "удалить"
    list.appendChild(li)
    li.appendChild(span)
    li.appendChild(btnDel)
    btnDel.onclick = function() {
        list.removeChild(li)
        deleteCb()
    }
}

function addTaskCat(cat, taskCount) {
    const li = document.createElement('li')
    li.classList.add("card")
    const a = document.createElement('a')
    a.setAttribute("href", "/category?name=" + cat.key)
    a.setAttribute("target", "_self")
    li.appendChild(a)
    const img = document.createElement('img')
    img.setAttribute('src', `icons/${cat.key}.svg`)
    a.appendChild(img)
    const cardBottom = document.createElement('div')
    cardBottom.classList.add("card-bottom")
    a.appendChild(cardBottom)
    cardBottom.innerHTML=`
        <span class="name-category">${cat.catName}</span><br>
        <span class="count-task">${taskCount}</span>
        <span class="count-task-end">шт.</span>
    `   
    return li
}
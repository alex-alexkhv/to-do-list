const newTask = document.getElementById("task") // новая задача
const formAdd = document.getElementById("form-add") // новая задача
const category = document.getElementById("category") // выбранная категория
    // console.log(newTask, formAdd, category)


function handleSubmit(event) {
    event.preventDefault()
    pushTasks(category.value, { mes: newTask.value })
        // console.log(category.value)
        // console.log([{ mes: newTask.value }])

}

formAdd.addEventListener('submit', handleSubmit)
const urlParams = new URLSearchParams(window.location.search);
const nameCategory = urlParams.get('name');

const dictionary = {
    work: {
        header: "Задачи по работе",
        icon: "icons/work.svg"
    },
    musik: {
        header: "Задачи по музыке",

        icon: "icons/musik.svg"
    },

    study: {
        header: "Задачи по обучению",
        icon: "icons/study.svg"
    },

    travel: {
        header: "Задачи по путешествиям",
        icon: "icons/travel.svg"
    },

    house: {
        header: "Задачи по дому",

        icon: "icons/house.svg"
    },
    all: {
        header: "Все задачи",
        icon: "icons/all.svg"
    },

}

const nameHeader = document.getElementById("header") // имя заголовка текущей категории
nameHeader.innerText = dictionary[nameCategory]?.header || "Задачи"

const nameIcon = document.getElementById("icon-card") // урээл иконки текущей категории
nameIcon.src = dictionary[nameCategory]?.icon || "icons/all.svg"



// console.log(nameCategory)
let tasks = loadTasks(nameCategory)
console.log(tasks)

const container = document.getElementById("tasks-list"); //список задач
// 


for (let index = 0; index < tasks.length; index++) {
    const element = tasks[index];
    // console.log(element.mes)
    function handleDelete() {
        // const arr = tasks.filter(function(task) {
        //     return task.mes !== element.mes
        // })
        const arr = tasks.filter(task => task.mes !== element.mes)
        tasks = arr
        saveTasks(nameCategory, tasks)
    }
    function handleCheck() {
        element.checked = !element.checked
        saveTasks(nameCategory, tasks)
    }

    addTask(container, element.mes, element.checked, handleDelete, handleCheck)
}


// loadCategories() //???

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('name');
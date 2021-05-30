let cats = loadCategories()

if (cats === null) {
    cats = [
        {catName: "Работа", key: "work"},
        {catName: "Дом", key: "house"},
        {catName: "Музыка", key: "musik"},
        {catName: "Обучение", key: "study"},
        {catName: "Путешествия", key: "travel"}
    ]
    saveCategories(cats)
}
// console.log(cats)\

let summ = 0


const cardList = document.getElementById('card-list')
cardList.innerHTML = ""
for (let i = 0; i < cats.length; i++) {
    const element = cats[i];
    const catTasksCount = loadTasks(element.key).length
    summ += catTasksCount
    const li = addTaskCat(element, catTasksCount)
    cardList.appendChild(li)
}
const li = addTaskCat({catName: "Все", key: "all"}, summ)
cardList.prepend(li)
// console.log(li)



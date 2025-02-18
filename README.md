# 🎯 Проект: "Генератор случайных персонажей"
## Этот проект отлично показывает работу с объектами и DOM-элементами.
мини-приложение, которое генерирует случайных персонажей с разными характеристиками: именем, возрастом, профессией и уникальными чертами.

# Open: [https://romanbarinov84.github.io/Generator-random-Characters/]

# 🛠 Функционал:
При нажатии на кнопку создаётся новый случайный персонаж.
Данные берутся из заранее подготовленных массивов.

# 🚀 Как работает?
При нажатии на кнопку создаётся объект character.
Значения полей берутся случайно из массивов.
Данные персонажа отображаются в HTML.
Картинка (avatar) генерируется через robohash.org, создавая уникальное изображение.

# Приммер кода 
```js
function getRandomArr(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

const $generate = document.getElementById("generate");
$generate.addEventListener("click", () => {
      
    const character = {
        name:getRandomArr(names),
        age: Math.floor(Math.random() * 50) + 18,
        job:getRandomArr(job),
        ability:getRandomArr(abilitys),
        avatar:`https://robohash.org/${Math.random()}`
    }

document.getElementById("name").textContent = character.name;
document.getElementById("age").textContent = character.age;
document.getElementById("job").textContent = character.job;
document.getElementById("abilitys").textContent = character.ability;
document.getElementById("avatar").src = character.avatar

})

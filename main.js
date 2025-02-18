
const names = ["Artem","Greg","Andrey","Sergey","Sofia","Sveta","Angelika","Egor","Valeriy"];
const job = ["Doctor","Driver","Writer","Scientist","Datasatanist","Frontender","Designer","Trainer"];
const abilitys = ["Superman","Batman","Spike","Pluto","Deadpull","Woodywood","Android","MetallBand","Play Guitar"];

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
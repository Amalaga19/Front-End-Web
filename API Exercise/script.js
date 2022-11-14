let charName;
let charImage;
let charStatus;
let aliveResult = document.getElementById('aliveBtn')
let deadResult = document.getElementById('deadBtn')


fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random()*826)}`)
.then(Response=>Response.json())
.then((data) => {
    <img src='data.image' alt=""></img>
    charName = data.name;
    charStatus = data.status;
}

)
aliveBaddEventListener('click')
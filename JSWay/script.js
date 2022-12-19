// CHAPTER 6

//Modelling a Dog
// TODO: create the dog object here

const dog= {
    name: "Fang",
    species: "boarhound",
    size: "75 cm",

    bark(){
        let bark= "Grrr! Grrr!";
        return bark;
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//Modelling a Circle

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {

    radius: r,

    circumference(){
        return Math.PI * 2 * r;
    }

    area(){
        return Math.PI * (r * r);
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);\


//CHAPTER 7
//Sum of Values

const values = [3, 11, 7, 2, 9, 10];

function sumValues(array){
    let total=0;
    for (let i=0; i<array.length;i++){
        total+=array[i];
    }
    return total;
}
console.log (sumValues(values));

//Maximum Value

const values = [3, 11, 7, 2, 9, 10];

function maxValue(array){
    let max = 0;
    for (let i=0; i<array.length; i++){
        if (array[i]>max){
            max=array[i];
        }
        else{
            continue;
        }
    }
    return max;
}

console.log(maxValue(values));


//WEEK 8
//Word Info

let word = prompt("Enter a word");
console.log(word.length, word.toLowerCase(), word.toUpperCase());

//Backwards Word

let word = prompt("Enter a word");
let wordArr = [];

for(let i = word.length; i = 0; i--){
    wordArr.push(word[i]);
}
console.log(wordArr.toString());
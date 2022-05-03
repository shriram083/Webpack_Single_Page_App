import { navbar } from '../component/navbar';

import '../styles/navbar.css'

import "../styles/index.css"


let navbar_div = document.querySelector("#navbar");
navbar_div.innerHTML = navbar()

let searchByName = async (url, box) => {

    let res = await fetch(url);
    let data = await res.json();
    appendData(data.meals,box)
};

let appendData = (data,main) => {
    main.innerHTML = null;
    data.forEach((el) => {
        let innerBox = document.createElement('div');
        innerBox.setAttribute("class","innerBox");

        let imgbox = document.createElement("div");
        imgbox.setAttribute("class", "imgbox");
        let img = document.createElement("img");
        img.src = el.strMealThumb;

        let contentBox = document.createElement("div");
        contentBox.setAttribute("class", "contentBox");

        let title = document.createElement("h1");
        title.innerText = el.strMeal;

        let Ingredients = document.createElement("h2");
        Ingredients.innerText = "Ingedients"

        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let li5 = document.createElement("li");
        let li6 = document.createElement("li");
        let li7 = document.createElement("li");
        let li8 = document.createElement("li");
        let li9 = document.createElement("li");
        let li10 = document.createElement("li");
        let li11 = document.createElement("li");
        let li12 = document.createElement("li");
        let li13 = document.createElement("li");
        let li14 = document.createElement("li");
        let li15 = document.createElement("li");
        let li16 = document.createElement("li");
        let li17 = document.createElement("li");
        let li18 = document.createElement("li");
        let li19 = document.createElement("li");
        let li20 = document.createElement("li");

        li1.innerText = `${el.strIngredient1} :- ${el.strMeasure1}`;
        li2.innerText = `${el.strIngredient2} :- ${el.strMeasure2}`;
        li3.innerText = `${el.strIngredient3} :- ${el.strMeasure3}`;
        li4.innerText = `${el.strIngredient4} :- ${el.strMeasure4}`;
        li5.innerText = `${el.strIngredient5} :- ${el.strMeasure5}`;
        li6.innerText = `${el.strIngredient6} :- ${el.strMeasure6}`;
        li7.innerText = `${el.strIngredient7} :- ${el.strMeasure7}`;
        li8.innerText = `${el.strIngredient8} :- ${el.strMeasure8}`;
        li9.innerText = `${el.strIngredient9} :- ${el.strMeasure9}`;
        li10.innerText = `${el.strIngredient10} :- ${el.strMeasure10}`;
        li11.innerText = `${el.strIngredient11} :- ${el.strMeasure11}`;
        li12.innerText = `${el.strIngredient12} :- ${el.strMeasure12}`;
        li13.innerText = `${el.strIngredient13} :- ${el.strMeasure13}`;
        li14.innerText = `${el.strIngredient14} :- ${el.strMeasure14}`;
        li15.innerText = `${el.strIngredient15} :- ${el.strMeasure15}`;
        li16.innerText = `${el.strIngredient16} :- ${el.strMeasure16}`;
        li17.innerText = `${el.strIngredient17} :- ${el.strMeasure17}`;
        li18.innerText = `${el.strIngredient18} :- ${el.strMeasure18}`;
        li19.innerText = `${el.strIngredient19} :- ${el.strMeasure19}`;
        li20.innerText = `${el.strIngredient20} :- ${el.strMeasure20}`;

        ul.append(li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,
            li11,li12,li13,li14,li15,li16,li17,li18,li19,li20
        );

        let instruction = document.createElement("h2");
        instruction.innerText = "Instructions"

        let process = document.createElement("p");
        process.innerText = el.strInstructions;

        imgbox.append(title,img);
        contentBox.append(Ingredients,ul,instruction,process)
        innerBox.append(imgbox,contentBox)
        main.append(innerBox);
    });
};

let searchByDefault = () => {
    let url = `https://www.themealdb.com/api/json/v1/1/random.php`
    let box = document.querySelector("#container");

    searchByName(url, box);
};
window.addEventListener("load", searchByDefault);


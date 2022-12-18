fetch("./data.json").then((el)=>{
    return el.json();
})
.then((data)=>{
    let val=data.med1;
    fun(val);
})
.catch((err)=>{
    console.log(err);
})


let j = document.querySelector(".json")
function fun(val){
    val.forEach((el)=>{
        let a = document.createElement("div")
        a.setAttribute("class","man")
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src",el.image)
        div.append(image)
        let div1 = document.createElement("div")
        let name = document.createElement("h3")
        name.innerText=el.name;
        let title = document.createElement("p")
        title .innerText=el.title;
        div1.append(name,title)
        a.append(div,div1)
        j.append(a)
    })
}
// ---------------slider 1------------------------------------------------------------------------------//


fetch("./data.json").then((el)=>{
    return el.json();
})
.then((data)=>{
    let val=data.med2;
    doctor(val);
})
.catch((err)=>{
    console.log(err);
})

function doctor(val){
    val.forEach((el)=>{
        let div = document.createElement("div")
        div.setAttribute("class","product-card")
        let image= document.createElement("img");
        image.setAttribute("src",el.image);
        let name= document.createElement("h1");
        name.innerText=el.name;
        let field= document.createElement("h3");
        field.innerText=el.field;
        let experience= document.createElement("h4");
        experience.innerText=el.experience;
        let degree= document.createElement("h3");
        degree.innerText=el.degree;

        div.append(image, name, field, experience, degree);
        document.querySelector(".product-container").append(div);
    })
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// ---------------------slider 2-------------------------------------------------------------------------------//


fetch("./data.json").then((el)=>{
    return el.json();
})
.then((data)=>{
    let val=data.med3;
    cust(val);
})
.catch((err)=>{
    console.log(err);
})


function cust(val){
    val.forEach((el)=>{
        let div = document.createElement("div")
        div.setAttribute("class","product-card1")
        
        let name= document.createElement("h1");
        name.innerText=el.name;

        let city= document.createElement("h4");
        city.innerText=el.city;

        let comment= document.createElement("p");
        comment.innerText=el.comment;

        div.append(name, city, comment);
        document.querySelector(".product-container1").append(div);
    })
}


const productContainers1 = [...document.querySelectorAll('.product-container1')];
const nxtBtn1= [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];

productContainers1.forEach((item, i) => {
    let containerDimensions1 = item.getBoundingClientRect();
    let containerWidth1 = containerDimensions1.width;

    nxtBtn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth1;
    })

    preBtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth1;
    })
})





//=============================================================================================================================//





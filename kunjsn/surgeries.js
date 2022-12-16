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


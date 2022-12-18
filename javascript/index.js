let bag = [];
let pay = [];
let cat = [];
let launch = [];
let trend = [];
let updated=[]
let x = './database/db.json';

fetch(x)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    bag = data.data1;
    pay = data.payments;
    cat = data.category;
    launch = data.NewLaunch;
    trend = data.Trending;
    deal = data.Deals;
    updated=data.register_User
    displayCard(bag);
    displayPay(pay);
    displayCategory(cat);
    displayLaunch(updated);
    displayTrend(trend);
    displayDeal(deal);
  })
  .catch(function (err) {
    console.log(err);
  });

let cont = document.querySelector('.cards');

function displayCard(bag) {
  bag.forEach((el) => {
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', el.img);
    div.append(image);
    document.querySelector('.cards').append(div);
  });
}
//Payments Section
let con2 = document.querySelector('.payments');

function displayPay(pay) {
  pay.forEach((el) => {
    // console.log(el);
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', el.p1);
    div.append(image);
    con2.append(div);
  });
}
//Top Category

let category = document.querySelector('.category');
function displayCategory(cat) {
  cat.forEach((el) => {
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', el.img);
    let heading = document.createElement('h4');
    heading.innerText = el.head;
    div.append(image, heading);
    category.append(div);
  });
}

//New Launches

// let Launch = document.querySelector('.launches');
// function displayLaunch(launch) {
//   launch.forEach((el) => {
//     // console.log(el);
//     let div = document.createElement('div');
//     let image = document.createElement('img');
//     image.setAttribute('src', el.img);
//     let heading = document.createElement('h3');
//     heading.innerText = el.head;
//     let price = document.createElement('p');
//     price.innerText = el.Price;
//     div.append(image, heading, price);
//     Launch.append(div);
//   });
// }

let Launch = document.querySelector('.launches');
function displayLaunch(launch) {
  launch.forEach((el) => {
    // console.log(el);
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', el.avatar);
    let heading = document.createElement('h3');
    heading.innerText = el.username;
    let price = document.createElement('p');
    price.innerText = "Rs "+el.Price;
    let btn=document.createElement('button');
    btn.innerText="DELETE"
    btn.setAttribute("class","delete")
    div.append(image, heading, price );
    Launch.append(div);
  });
}

//Trending
let count = 1;
let T = document.querySelector('.trending');
function displayTrend(trend) {
  trend.forEach((el) => {
    console.log(el);
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', el.img);
    let head = document.createElement('h3');
    head.innerText = el.head;
    let price = document.createElement('p');
    price.innerText = el.price;
    let btn = document.createElement('button');
    btn.innerText = 'Add To Cart';

    btn.addEventListener('click', function () {
      let cartdata = JSON.parse(localStorage.getItem('cartdata')) || [];
      cartdata.push(el);
      localStorage.setItem('cartdata', JSON.stringify(cartdata));
    });
    div.append(image, head, price, btn);
    T.append(div);
  });
}
// ----------//
let D = document.querySelector('.deals');
function displayDeal(deal) {
  deal.forEach((el) => {
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', el.img);
    let head = document.createElement('h3');
    head.innerText = el.head;
    let price = document.createElement('p');
    price.innerText = el.price;
    div.append(image, head, price);
    D.append(div);
  });
}

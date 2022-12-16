let container= document.getElementById("#slide_image");

 let json_file='./db.json'
 


 let slide_data=[];
 let Facility_data=[];
 let Frequent_Booked_Lab_Test_data=[];
 let Certified_Lab_data=[];
 let Health_Packages_data=[];
 let Patients_data=[];
 let Advertise_data=[];
 let Benefits_data=[];
 let UI_image_data=[];





 fetch(json_file)
.then(function (res){
    return res.json();
})

.then(function(data){
slide_data=data.slide;
  Facility_data=data.Facility;
 
  Frequent_Booked_Lab_Test_data=data.Frequent_Booked_Lab_Test;
  Certified_Lab_data=data.Certified_Lab;
  Health_Packages_data=data.Health_Packages;
  Patients_data=data.Patients;
  Advertise_data=data.Advertise;
  Benefits_data=data.Benefits;
  UI_image_data=data.UI_image;
 
 
  display_slide_data(slide_data);
  display_Facility_data(Facility_data);
  display_Frequent_Booked_Lab_Test_data(Frequent_Booked_Lab_Test_data)
  display_Certified_Lab_data(Certified_Lab_data)
  display_Health_Packages_data(Health_Packages_data)
  display_Patients_data(Patients_data)
  display_Advertise_data(Advertise_data)
  display_Benefits_data(Benefits_data)
  display_UI_image_data(UI_image_data)
})

.catch(function (err){
    console.log(err);
});

function display_slide_data(slide_data){
    slide_data.forEach((el)=>{
   
    let div= document.createElement('div');
    let imag= document.createElement('img');
    imag.setAttribute('src',el.image);
    div.append(imag);
    document.querySelector('#slide_image').append(div);
    
    });
}
// let butn=document.getElementById('#butn')
function display_Facility_data(Facility_data){
    Facility_data.forEach((ell)=>{
        let div= document.createElement('div');
      let imag=document.createElement('img');
      imag.setAttribute('src',ell.image);
      let h3= document.createElement('h3');
    h3.innerHTML=ell.title;
    div.append(imag,h3);
    document.querySelector('#butn').append(div);
    });


    
}


function display_Frequent_Booked_Lab_Test_data(Frequent_Booked_Lab_Test_data){
    Frequent_Booked_Lab_Test_data.forEach((el)=>{
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('src',el.image);

        let h2= document.createElement('h2');
        h2.innerHTML=el.Name;
        let p1= document.createElement('p');
        p1.innerHTML=el.title
        
        
        let div1 = document.createElement('div');
               
        let price = document.createElement('h2');
        price.innerHTML=el.price;
        let button = document.createElement('button');
        button.innerHTML=el.Button;
div1.append(price,button)
div.append(image,h2,p1,div1)
document.querySelector('#card').append(div);
    })
};

function display_Certified_Lab_data(Certified_Lab_data){
   Certified_Lab_data.forEach((el)=>{
     let div = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('src',el.image);

        let h3= document.createElement('h3');
        h3.innerHTML=el.Name;
        let title= document.createElement('p');
        title.innerHTML=el.title
                        
        let location = document.createElement('p');
        location.innerHTML=el.location;
 div.append(image,h3,title,location)
document.querySelector('#top_mid').append(div);
    
   })
}

function display_Health_Packages_data(Health_Packages_data){
    Health_Packages_data.forEach((el)=>{
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('src',el.image);

        let h2= document.createElement('h2');
        h2.innerHTML=el.Name;
        let p1= document.createElement('p');
        p1.innerHTML=el.title
        
        
       
               
        let price = document.createElement('h2');
        price.innerHTML=el.price;
      

div.append(image,h2,p1,price)
document.querySelector('#top_mid_1').append(div);
    })
}



















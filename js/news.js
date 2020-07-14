// let name ="Dygelnyy Kirill",
//    number= 1,
//    namberSecond =2.4;

// alert(name);

// alert(namberSecond);



let div = document.getElementById("myID");

div.onmouseover = function(){
   this.setAttribute("style","background-color:green;");
}



const selectElement = document.querySelector(".works_item");

selectElement.addEventListener("click", function(){
   this.style.backgroundColor = "red";
});
    

const nameInput = document.body.querySelector('[name=name]');

const ageInput = document.body.querySelector('[age=age]');

const statusBtn = document.body.querySelector('.status-btn');

const genderMan = document.body.querySelector('#gender');

const statusText = document.body.querySelector('.status');




statusBtn.addEventListener('click', () => {
   const name = nameInput.value;
   const age = ageInput.value;
   const gender = genderMan.value;
   if (age <= 30) {
      statusText.textContent = ' young!';
   }
   if (age > 30) {
      statusText.textContent = ' old man!';
   }
   let person = {
      name,
      age,
      person: gender,
   }
   console.log(genderMan)


   alert(person.name + " is " + person.age + person.person + statusText.textContent);
});


// let user = {     // объект
//    name: "John",  // под ключом "name" хранится значение "John"
//    age: 30        // под ключом "age" хранится значение 30
//  };

// // получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30


/*******/
// let i = 2;
// let b = 2;

// // console.log( ++i );
// // console.log( --b );

// let m = 10;
// console.log (m+=2);

// for (let a=1, b=2, c=3; b<3;b++);

// let a = 4,
//    b = 5;
// a < b;
// a > b;
// a >= b;
// a <= b;
// a == b;
// a != b;

// let age = 18;

// if (age === 18) {
//    alert ("you are an adult!!!");
// } else if (age===21) {
//    alert ("you best!!!")
// }
// else {
//    alert ("you are not 18 years old.")
// }
// (age === 18) ? alert("you are an adult!!!") : 
//                alert ("you are not 18 years old.")
// (age >=18 && age <=50) ? alert("you are an adult") : 
                        //  alert("you are not 18 years old.");

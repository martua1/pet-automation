const pets = [
    { name: "Pamuk", type: "cat", breed: "Ankara Kedisi", age: 2, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTiwlRQuHXcXvZmrLLCoHD3MuUHc0tz6ZIg&s" },
    { name: "Duman", type: "cat", breed: "British Shorthair", age: 1, picture: "https://images.petlebi.com/v7/_ptlb/up/gallery/british-shorthair-kedisi-kokeni-ve-tarihcesi-1684.jpg" },
    { name: "Karabaş", type: "dog", breed: "Sivas Kangalı", age: 5, picture: "https://www.memurlar.net/common/news/documents/798633/kangal.jpg" },
    { name: "Max", type: "dog", breed: "Golden Retriever", age: 3, picture: "https://www.elityavru.com/images/irk-bilgileri/kopek-irki/golden-retriever.webp" },
    { name: "Ori", type: "rabbit", breed: "Rex Tavşanı", age: 2, picture: "https://images.petlebi.com/v7/_ptlb/up/gallery/rex-tavsani-genel-ozellikler-4458.jpg" },
    { name: "Karbeyaz", type: "rabbit", breed: "Mini Lop", age: 4, picture: "https://images.petlebi.com/v7/_ptlb/up/gallery/hollanda-lop-tavsani-genel-ozellikleri-9043.jpeg"}
];
123
function categoryList(selectedType) {
    const alan = document.getElementById('display-area');
    alan.innerHTML = ""; 

    for (let i = 0; i < pets.length; i++) {
        let animal = pets[i];

        if (selectedType === 'all' || animal.type === selectedType) {
            
            let cardColor = "";
            
            if (animal.type === "cat") {
                cardColor = "orange";
            } else if (animal.type === "dog") {
                cardColor = "blue";
            } else {
                cardColor = "green";
            }

            const card = `
                <div class="pet-kart" style="border: 2px solid ${cardColor}; margin: 10px; padding: 10px; border-radius: 10px;">
                    <img src="${animal.picture}" alt="${animal.name}" style="width:100px; height:100px; object-fit:cover; border-radius:50px;">
                    <h3>${animal.name}</h3>
                    <p>Cins: ${animal.breed}</p>
                    <p>Yaş: ${animal.age}</p>
                    <button class="detay-btn">Sahiplen</button>
                </div>
            `;
            alan.innerHTML += card;
        }
    }
}


const animals = [
  "Dog",
  "Cat",
  "Rabbit"
];
document.getElementById("animals").innerHTML = animals;



let text = "cat";
document.getElementById("cat").innerHTML = text.length;

const dog = {};


dog.firstName = "Sivas";
dog.lastName = "Kangalı";
dog.age = "5";
dog.eyeColor = "blue"; 


document.getElementById("dog").innerHTML =
dog.firstName + " is " + dog.age + " years old.";


function makeAppointment(event) {
    event.preventDefault();

    let name = document.getElementById('pet-name').value;
    let dateInput = document.getElementById('appointment-date').value;
    let vet = document.getElementById('veterinary-choice').value;

    
    if (dateInput === "") {
        alert("Lütfen bir tarih seçin!");
    } else {
        let selectedDate = new Date(dateInput);
        let today = new Date();
        
        if (selectedDate < today) {
            alert("Geçmiş bir tarihe randevu alamazsınız!");
        } else {
            alert(`Randevu Başarılı!\n\n${name} için ${dateInput} tarihinde ${vet} ile randevunuz oluşturuldu. `);
            document.getElementById('appointment-form').reset();
        }
    }
}


//Arrow Function

const add = (catAge, dogAge) => catAge + dogAge;

let result = add(2, 3);

document.getElementById("demo").innerHTML = "Kedilerin ve Köpeklerin yaşları toplamı: " + result;


//Await/Async


function myDisplayer(some) {
  document.getElementById("demo1").innerHTML += some + " ";
}

myDisplayer("Kediler 3 ayda bir, ");
myDisplayer("köpekler 6 ayda bir, ");
myDisplayer("tavşanlar ise yılda bir aşı olmalı.");



//Destructuring

const dog1 = {
  firstName: "Karabaş",
  breed: "Sivas Kangalı",
  age: 5
};


let {firstName, breed} = dog1;


document.getElementById("demo2").innerHTML =
firstName + " " + breed;


//Class 

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const cat1 = new Cat("Pamuk", 5);
const cat3 = new Cat("Duman", 3);

document.getElementById("demo3").innerHTML =
  cat1.name + " " + cat3.name;


//Async/await

function myFirstDisplayer(some) {
  document.getElementById("demo4").innerHTML += some + " ";
}

function myFirst() {
  myFirstDisplayer("Kedilerde mide hastalıklarından sonra en sık görülen hastalıklar idrar yolu enfeksiyonlarıdır. ");
}

function mySecond() {
  myFirstDisplayer("Bu yüzden kedilere yılda bir çiş tahlili yaptırmak önemlidir.");
}

myFirst();
mySecond();

//JSON

let catJson = '{"employees":[' +
'{"firstName":"Pamuk","lastName":"Öztürk" },' +
'{"firstName":"Duman","lastName":"Öztürk" }]}';

const catObj = JSON.parse(catJson);

document.getElementById("demo6").innerHTML =
catObj.employees[0].firstName + " " + catObj.employees[1].lastName;



const evcilHayvanlar = [
    { ad: "Pamuk", tur: "kedi", cins: "Ankara Kedisi", yas: 2, resim: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTiwlRQuHXcXvZmrLLCoHD3MuUHc0tz6ZIg&s" },
    { ad: "Duman", tur: "kedi", cins: "British Shorthair", yas: 1, resim: "https://images.petlebi.com/v7/_ptlb/up/gallery/british-shorthair-kedisi-kokeni-ve-tarihcesi-1684.jpg" },
    { ad: "Karabaş", tur: "kopek", cins: "Sivas Kangalı", yas: 5, resim: "https://www.memurlar.net/common/news/documents/798633/kangal.jpg" },
    { ad: "Max", tur: "kopek", cins: "Golden Retriever", yas: 3, resim: "https://www.elityavru.com/images/irk-bilgileri/kopek-irki/golden-retriever.webp" },
    { ad: "Ori", tur: "tavsan", cins: "Rex Tavşanı", yas: 2, resim: "https://images.petlebi.com/v7/_ptlb/up/gallery/rex-tavsani-genel-ozellikler-4458.jpg" },
    { ad: "Karbeyaz", tur: "tavsan", cins: "Mini Lop", yas: 4, resim: "https://images.petlebi.com/v7/_ptlb/up/gallery/hollanda-lop-tavsani-genel-ozellikleri-9043.jpeg"}
];

function kategoriListele(secilenTur) {
    const alan = document.getElementById('gosterim-alani');
    alan.innerHTML = ""; 

    for (let i = 0; i < evcilHayvanlar.length; i++) {
        let hayvan = evcilHayvanlar[i];

        if (secilenTur === 'hepsi' || hayvan.tur === secilenTur) {
            
            let kartRengi = "";
            
            if (hayvan.tur === "kedi") {
                kartRengi = "orange";
            } else if (hayvan.tur === "kopek") {
                kartRengi = "blue";
            } else {
                kartRengi = "green";
            }

            const kart = `
                <div class="pet-kart" style="border: 2px solid ${kartRengi}; margin: 10px; padding: 10px; border-radius: 10px;">
                    <img src="${hayvan.resim}" alt="${hayvan.ad}" style="width:100px; height:100px; object-fit:cover; border-radius:50px;">
                    <h3>${hayvan.ad}</h3>
                    <p>Cins: ${hayvan.cins}</p>
                    <p>Yaş: ${hayvan.yas}</p>
                    <button class="detay-btn">Sahiplen</button>
                </div>
            `;
            alan.innerHTML += kart;
        }
    }
}


const animals = [
  "Köpek",
  "Kedi",
  "Tavşan"
];
document.getElementById("animals").innerHTML = animals;



let text = "kedi";
document.getElementById("kedi").innerHTML = text.length;

const person = {};


dog.firstName = "Sivas";
dog.lastName = "Kangalı";
dog.age = "5";
dog.eyeColor = "blue"; 


document.getElementById("dog").innerHTML =
dog.firstName + " is " + dog.age + " years old.";






function randevuAl(event) {
    event.preventDefault();

    let ad = document.getElementById('evcil-ad').value;
    let tarihInput = document.getElementById('randevu-tarih').value;
    let veteriner = document.getElementById('veteriner-secim').value;

    
    if (tarihInput === "") {
        alert("Lütfen bir tarih seçin!");
    } else {
        let secilenTarih = new Date(tarihInput);
        let bugun = new Date();
        
        if (secilenTarih < bugun) {
            alert("Geçmiş bir tarihe randevu alamazsınız!");
        } else {
            alert(`Randevu Başarılı!\n\n${ad} için ${tarihInput} tarihinde ${veteriner} ile randevunuz oluşturuldu. `);
            document.getElementById('randevu-formu').reset();
        }
    }
}
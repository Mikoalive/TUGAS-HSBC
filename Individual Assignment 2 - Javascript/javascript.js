// fitur mode gelap 

let darkmode = document.querySelector("html");

function changeColor() {
    darkmode.classList.toggle("dark");

    if(darkmode.classList.contains('dark')) {
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }
}

let tema = localStorage.getItem("tema");
if(tema == 'dark') {
    darkmode.classList.add("dark");
}


// typing judul

const efekKetik = document.querySelector("h3 span");
const gantiKata = ["PORTFOLIO", "PROFILE", "PROJECT", "JOURNEY"];

let indexKata = 0;
let indexHuruf = 0;
let hapus = false;

const mengetik = () => {
    const katakata = gantiKata[indexKata];
    const karakter = katakata.substring(0, indexHuruf);
    efekKetik.textContent = karakter;

    if(!hapus && indexHuruf < katakata.length) {
        indexHuruf++;
        setTimeout(mengetik, 100);
    } else if (hapus && indexHuruf > 0) {
        indexHuruf--;
        setTimeout(mengetik, 50);
    } else {
        hapus = !hapus;
        indexKata = !hapus ? (indexKata + 1) % gantiKata.length : indexKata;
        setTimeout(mengetik, 1000); 
    }
}
mengetik()


// message ke whatsapp

function kirimwhatsapp() {

    let noHape = "+6289512330009";

    let name =  document.querySelector("#fname").value;
    let email =  document.querySelector("#femail").value;
    let message =  document.querySelector("#fmessage").value;

    let url = "https://wa.me/" + noHape + "?text=" 
    + "*Name* : " +name+ "%0A"
    + "*Email* : " +email+ "%0A"
    + "*Message* : " +message+ "%0A";

    window.open(url, "_blank").focus();
};

window.onbeforeunload = function() {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}


// responsive menu

function menu(e) {
    let list = document.getElementById('my-profile');

    e.name === 'menu' ? (e.name = "close", list.classList.add('left-[7vw]') , list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('left-[7vw]'), list.classList.remove('opacity-100'))
} 

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


// judul web 

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


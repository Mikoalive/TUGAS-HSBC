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


// live chat 
window.$crisp=[];
window.CRISP_WEBSITE_ID="3dc5adfc-0d78-4ddc-bcaa-6fca8390a33e";(function(){d=document;
    s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();



// // formulir contact

// const contactForm = document.getElementById("cform");
// const nameInput = document.getElementById("fname");
// const emailInput = document.getElementById("femail");
// const messageInput = document.getElementById("fmessage");
// const btnSubmit = document.getElementById("btn");

// const publicKey = "V-1_Jd0ighvR28BZM";
// const serviceID = "service_jp009at";
// const templateID = "template_u7am744";


// emailjs.init(publicKey);
// contactForm.addEventListener("Submit", e => {
//   e.preventDefault();
// btnSubmit.innerText = "Just A Moment...";

// const inputFields = {
//   name: nameInput.value,
//   email: emailInput.value,
//   message: messageInput.value
// }

// emailjs.send(serviceID, templateID, inputFields, publicKey)
// .then (() => {
//   alert('Pesan berhasil terkirim');

//   nameInput.value = "";
//   emailInput.value = "";
//   messageInput.value = "";

// }, (error) => {
//   console.log(error);
//   btnSubmit.innerHTML = "Pesan tidak terkirim!";
// });
// });
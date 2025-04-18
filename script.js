
// toggle nav-links

function togglemenu() {
    document.querySelector('.nav-links').classList.toggle('active');
};

function onhover() {
    document.querySelector('.nav-links').classList.remove('active');
};

// button scrolling function

let but = document.getElementById("button");
but.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        but.style.display = "block";
    }
    else {
        but.style.display = "none";
    }
});

// working of chat box (opening and closing)

let icon = document.getElementById("icon-1");
let chatbox = document.getElementById("chat");
let closebox = document.getElementById("close-chat")

icon.addEventListener("click", function () {
    chatbox.classList.add("open");
    but.classList.add("hide");
});
closebox.addEventListener("click", function () {
    chatbox.classList.remove("open");
    but.classList.remove("hide");
});

// getting details of person from the chat box

let email = document.getElementById("email");
let popupmessage = document.getElementById("pop-msg")

document.getElementById("pop").addEventListener("click", function () {

    if ((email.value.trim() != '') && (email.value.includes("@gmail.com"))) {
        popupmessage.innerHTML = `your details are accessed successfully ${email.value}.`;


        popupmessage.classList.add("success");


        popupmessage.style.backgroundColor = 'blueviolet';

        setTimeout(() => {
            popupmessage.classList.remove('success');
        }, 3000);

        document.getElementById("chat").classList.remove("open");

        email.value = '';
        but.classList.remove('hide');

    }
    else {
        popupmessage.innerHTML = "enter valid email";
        popupmessage.classList.add("success");

        popupmessage.style.backgroundColor = 'brown';
        popupmessage.style.textAlign = 'center';

        setTimeout(() => {
            popupmessage.classList.remove("success");
        }, 3000);
    }

});

var home = document.querySelector(".home .outer .inner");
var profile1 =document.querySelector(".about .about1");
var profile2 =document.querySelector(".about .about2");
var skills=document.querySelectorAll(".equal .inner");

var observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("slow");
        }
    });
} , {
    threshold : .9
});

observer.observe(home);
observer.observe(profile1);
observer.observe(profile2);
skills.forEach(ele => {
    observer.observe(ele);
} );
skills.forEach(ele => {
    observer.observe(ele);
} );




  
  



















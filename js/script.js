$(document).ready(function(){
    var typed = new Typed(".typing-1",{
                strings:[
                    "Junior","FrontEnd", "Developer"
                ],
                typeSpeed: 80,
                backSpeed: 60,
                loop:true
            });
            var typed = new Typed(".typing-2",{
                strings:[
                    "Junior","FrontEnd", "Developer"
                ],
                typeSpeed: 80,
                backSpeed: 60,
                loop:true
            });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    // if (this.scrollY > 0) {
    //     navbar.classList.add("sticky");
    // }else{
    //     navbar.classList.remove("sticky");
    // }
    navbar.classList.toggle ("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.onclick = () => {
	menu.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-content',{delay:350, origin:'left'});

sr.reveal('.container',{delay:200, origin:'bottom'});
(function () {
    const myName = document.querySelector("#name");
    const myEmail = document.querySelector("#email");
    const myPhone = document.querySelector("#phone");
    const myMessage = document.querySelector("#message");

    myMessage.addEventListener("keyup", () => {
        document.getElementById("current-character").textContent = myMessage.value.length;
    });

    const spacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;

    // İsim Alanı kotrolü
    myName.addEventListener("blur", function controlName(){
        let myError = document.querySelector("#ErrName");
        if (myName.value.length == 0) {
            myError.innerHTML = "İsim alanı boş bırakılamaz";
            return false;
        }else if(myName.value.length <= 3){
            myError.innerHTML = "İsim alanı 3 karakterden az olamaz";
            return false;
        }else if(myName.value.length >= 30){
            myError.innerHTML = "İsim alanı 30 karakterden fazla olamaz";
            return false;
        }else if(!NumericPattern.test(myName.value)){
            myError.innerHTML = "İsminizde rakam kullanamazsınız..";
            return false;
        }else{
            myError.innerHTML = "";
            return true;
        }
    });

    // E Posta kontrolü
    myEmail.addEventListener("blur", function controlEmail(){
        let myError =document.querySelector("#ErrEmail");
        if (myEmail.value.length == 0) {
            myError.innerHTML = "Eposta alanı boş bırakılamaz..";
            return false;   
        }else if(!spacePattern.test(myEmail.value)){
            myError.textContent = "E Posta adresinizde boşluk bıraktınız...";
            return false;
        }else if(!EmailPattern.test(myEmail.value)){
            myError.textContent = "E Posta adresiniz yanlış. Tekrardan giriniz..";
            return false;
        }else{
            myError.innerHTML = "";
            return true;
        }
    });

    // Telefon kontrolü
    myPhone.addEventListener("blur", function controlEmail(){
        let myError =document.querySelector("#ErrPhone");
        if (myPhone.value.length == 0) {
            myError.innerHTML = "Telefon alanı boş bırakılamaz";
            return false;
        }else if (!spacePattern.test(myPhone.value)) {
            myError.textContent = "Telefon numaranızda boşluk bıraktınız...";
            return false;
        }else if (!OnlyNumberPattern.test(myPhone.value)) {
            myError.textContent = "Telefon numaranız sadece rakamlardan oluşmalıdır..";
            return false;

        }else if (myPhone.value.length < 7) {
            myError.innerHTML = "Telefon numaranız 7 rakamdan az olamaz";
            return false;
        }else if (myPhone.value.length > 13) {
            myError.innerHTML = "Telefon numaranız 13 rakamdan fazla olamaz";
            return false;
        }else{
            myPhone.innerHTML = "";
            return false;
        }
    });

    myMessage.addEventListener("blur", function controlMessage(){
        let myError = document.querySelector("#ErrMessage");
        if (myMessage.value.length == 0) {
            myError.innerHTML = "Mesaj alanı boş bırakılamaz";
            return false;
        }else{
            myError.innerHTML = "";
            return true;
        }
    })

    let myForms = document.querySelector(".needs-validation");
        myForms.addEventListener("submit", function(e){
        if (!myForms.checkValidity() ||
            !controlName() ||
            !controlEmail() ||
            !controlPhone() ||
            !controlMessage()){
            e.preventDefault();
            e.stopPropagation();
        }

    });

})();
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const crossBtn = document.querySelectorAll(".close");
const crossBtnMerci = document.querySelectorAll(".close-merci");
const btnEnvoyer = document.getElementById("envoyer");
const bgMerci = document.querySelector(".bground-merci");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
crossBtn.forEach((btn) => btn.addEventListener("click", closeModal));
crossBtnMerci.forEach((btn) => btn.addEventListener("click", closeModalMerci));

btnEnvoyer.addEventListener("click", merci);

function merci(){
  bgMerci.style.display = "block";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//cacher le modal
function closeModal(){
  modalbg.style.display = "none";
}

//cacher le modal merci
function closeModalMerci(){
  bgMerci.style.display = "none";
}


//validation du module

//variables
let formulaire = document.getElementById('formulaire');
let email = document.getElementById('email');
let prenom = document.getElementById('first');
let nom = document.getElementById('last');
let boxObligatoire = document.getElementById('checkbox1');
let birthdate = document.getElementById('birthdate');


//les error
let errorPre = document.getElementById('errorPre');
let errorNom = document.getElementById('errorNom');
let errorVille = document.getElementById('errorVille');
let errorCheck = document.getElementById('errorCheck');
let errorDate = document.getElementById('errorDate');


//regex
let nameRegex = /^[a-zA-Z-\s]+$/


//validation du formulaire
formulaire.addEventListener('submit', function (event) {
  if(prenom.value.length < 2){
    errorPre.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    prenom.style.border = "1px solid red";
    console.log('number of letter error');
    event.preventDefault();
  }
  else if(nom.value.length < 2){
    errorNom.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    nom.style.border = "1px solid red";
    console.log('number of letter error');
    event.preventDefault();
  }
  else if(!birthdate.value){
    errorDate.innerHTML = "Vous devez entrer votre date de naissance.";
    console.log('date error');
    event.preventDefault();
  }
  else if(document.querySelector('input[name="location"]:checked') == null) {
    errorVille.innerHTML = "Vous devez choisir une option.";
    console.log('radio button pas choisi');
    event.preventDefault();
  }
  else if(!boxObligatoire.checked){
    errorCheck.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions."
    console.log('checkbox error');
    event.preventDefault();
  }
  else{
    formulaire.submit();
  }
});
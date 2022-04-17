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
const btnFermer = document.getElementById("btnFermer");
const bgMerci = document.querySelector(".bground-merci");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//mes ajouts
//fermer le modal par la croix
crossBtn.forEach((btn) => btn.addEventListener("click", closeModal));
//fermer le modal de valdation par la croix
crossBtnMerci.forEach((btn) => btn.addEventListener("click", closeModalMerci));
//fermer le modal de valdation par le boutton fermer
btnFermer.addEventListener("click", closeModalMerci);

//fonctions

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//fermer le modal
function closeModal(){
  modalbg.style.display = "none";
}

//fermer le modal merci
function closeModalMerci(){
  bgMerci.style.display = "none";
}

//variables
let formulaire = document.getElementById('formulaire');
let email = document.getElementById('email');
let prenom = document.getElementById('first');
let nom = document.getElementById('last');
let boxObligatoire = document.getElementById('checkbox1');
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');
//variables regex
let nameRegex = /^[a-zA-Z-\s]+$/
let mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/


//functions de vérifications

//verif prenom
function checkPrenom(){
  if(prenom.value.length < 2 || !prenom.value.match(nameRegex)){
    prenom.parentElement.setAttribute('data-error-visible', 'true');
    prenom.style.border = '2px solid #e54858';
    return false;
  }
  prenom.style.border = '0px';
  prenom.parentElement.setAttribute('data-error-visible', 'false');
  return  true;
}

//verif nom
function checkNom(){
  if(nom.value.length < 2 || !nom.value.match(nameRegex)){
    nom.parentElement.setAttribute('data-error-visible', 'true');
    nom.style.border = '2px solid #e54858';
    return false;
  }
  nom.style.border = '0px';
  nom.parentElement.setAttribute('data-error-visible', 'false');
  return  true;
}

//verif mail
function checkMail(){
  if(email.value.trim() === "" || !email.value.match(mailRegex)){
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
    return false;
  }
  email.style.border = '0px';
  email.parentElement.setAttribute('data-error-visible', 'false');
  return  true;
}

//verif date de naissance
function checkBirthdate(){
  if(!birthdate.value){
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.style.border = '2px solid #e54858';
    return false;
  }
  birthdate.style.border = '0px';
  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  return  true;
}

//verif le nombre de tournois participé
function checkQuantity(){
  if(quantity.value === ""){
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    quantity.style.border = '2px solid #e54858';
    return false;
  }
  quantity.style.border = '0px';
  quantity.parentElement.setAttribute('data-error-visible', 'false');
  return  true;
}

//verif si une ville est choisie
function checkRadio(){
  if(document.querySelector('input[name="location"]:checked') == null) {
    document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'true');
    document.querySelector('input[name="location"]').style.border = '2px solid #e54858';
    return false;
  }
  document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

//verif si cocher les les termes et conditions
function checkBox(){
  if(!boxObligatoire.checked){
    boxObligatoire.parentElement.setAttribute('data-error-visible', 'true');
    boxObligatoire.style.border = '2px solid #e54858';
    return false;
  }
  boxObligatoire.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

//valide si tout est bien renseigné 
function validationForm(){
  if(checkPrenom()===true && checkNom()===true && checkMail()===true && checkBirthdate()===true && checkQuantity()===true && checkRadio()===true && checkBox()===true){
    return true;
  }
  return false;
}

//verif chaque champs un à un
function verifChamps() {
  checkPrenom()
  checkNom()
  checkMail()
  checkBirthdate()
  checkQuantity()
  checkRadio()
  checkBox()
}

//affiche le message 'merci de votre inscription'
function envoieValider(){
  modalbg.style.display = "none";
  bgMerci.style.display = "block";
}

//au clique sur envoyé
formulaire.addEventListener('submit', function (event) {
  event.preventDefault();

  if(validationForm()===true){
    envoieValider();
    formulaire.reset();
  }else{
    verifChamps();
  }

});

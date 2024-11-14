var buttonclicked = document.getElementById("button-generate");
var Resultat = document.getElementById("returnResultat");
var GetValue = document.getElementById("longueurPwd");
var Erreur = document.getElementById("returnErreur");

// tableau
const tableau = [
  {
    Majuscule: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  {
    Minuscule: "abcdefghijklmnopqrstuvwxyz",
  },
  {
    Nombre: "0123456789",
  },
  {
    Symbole: "!@#$%^&*()_+-={}:<>?",
  },
];

function buttonClick() {
  document.addEventListener("click", Click);

  var Longueur = GetValue.value;
  if (Longueur == "") {
    return MessageErreur();
  } else {
    alert(Longueur);
  }
}

function Click() {
  buttonclicked.style.transform = "scale(1.1)";
  buttonclicked.style.transition = "0.5s";
}

function MessageErreur() {
  Erreur.innerHTML = `<p>Veuillez entrer une longueur</p>`;
}
// alert("OUI");
// var password = generatePassword(GetValue);
// Resultat.innerHTML = `<p>${password}`;

// var password = "";
//     var length = parseInt(GetValue);
//     for (var i = 0; i < length; i++) {
//       var random = Math.floor(Math.random() * 4);
//       var random2 = Math.floor(
//         Math.random() * tableau[random].Majuscule.length
//       );
//       password += tableau[random].Majuscule[random2];
//     }
//   }
//   password.innerHTML = `<p>${password}`;

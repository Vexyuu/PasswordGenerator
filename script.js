var buttonclicked = document.getElementById("button-generate");
var Resultat = document.getElementById("returnResultat");
var GetValue = document.getElementById("longueurPwd").value;

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
  if (GetValue == "") {
    alert("Veuillez entrer une longueur");
  } else {
    var password = "";
    var length = parseInt(GetValue);
    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * 4);
      var random2 = Math.floor(
        Math.random() * tableau[random].Majuscule.length
      );
      password += tableau[random].Majuscule[random2];
    }
  }
  password.innerHTML = `<p>${password}`;
}

// alert("OUI");
// var password = generatePassword(GetValue);
// Resultat.innerHTML = `<p>${password}`;

const button = document.getElementById("button-generate");
const Resultat = document.getElementById("returnResultat");
const slider = document.getElementById("slider");
const lengthValue = document.getElementById("length-value");

// ----------------------------------------------------------------- //
// --------------------------Options Table-------------------------- //
// ----------------------------------------------------------------- //
const OptionMajuscule = document.getElementById("Majuscule");
const OptionMinuscule = document.getElementById("Minuscule");
const OptionNombre = document.getElementById("Nombre");
const OptionSymbole = document.getElementById("Symbole");

const table = {
  Majuscule: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Minuscule: "abcdefghijklmnopqrstuvwxyz",
  Nombre: "0123456789",
  Symbole: "!@#$%^&*()_+-={}:<>?",
};

// ------------------------------------------------------------------ //
// --------------------------Event Listener-------------------------- //
// ------------------------------------------------------------------ //
slider.addEventListener("input", function () {
  lengthValue.textContent = slider.value;
});

button.addEventListener("click", buttonClicked);

// ------------------------------------------------------------- //
// --------------------------Fonctions-------------------------- //
// ------------------------------------------------------------- //

function generatePassword() {
  let password = "";
  const length = slider.value;
  const ChooseCharactere = [];

  if (OptionMajuscule.checked) ChooseCharactere.push(...table.Majuscule);
  if (OptionMinuscule.checked) ChooseCharactere.push(...table.Minuscule);
  if (OptionNombre.checked) ChooseCharactere.push(...table.Nombre);
  if (OptionSymbole.checked) ChooseCharactere.push(...table.Symbole);
  if (ChooseCharactere.length === 0) {
    return ErreurOption();
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * ChooseCharactere.length);
    password += ChooseCharactere[randomIndex];
  }
  Resultat.style.color = "";
  Resultat.innerHTML = password;
}

function buttonClicked() {
  button.style.transform = "scale(1.1)";
  button.style.transition = "0.5s";
  setTimeout(() => {
    button.style.transform = "scale(1.0)";
  }, 100);
}

function ErreurOption() {
  Resultat.innerHTML = "Veuillez sélectionner au moins une option.";
  Resultat.style.color = "red";
  Resultat.style.transform = "scale(1.2)";
  Resultat.style.transition = "0.5s";
  setTimeout(() => {
    Resultat.style.transform = "scale(1.0)";
  }, 100);
}

function CopyPast() {
  navigator.clipboard.writeText(Resultat.innerHTML).then(() => {
    Resultat.innerHTML = "Copié !";
  });
}

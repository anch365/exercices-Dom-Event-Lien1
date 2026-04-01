let nomFamille = document.querySelector("#lastname");

nomFamille.addEventListener("input", handleChangeOnInput);

function handleChangeOnInput() {
    let valeur = nomFamille.value;
    alert(valeur);    
};






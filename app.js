const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['a','b','b','c','a'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];



form.addEventListener('submit', (e) => {
    e.preventDefault();

    for(i = 1; i<6; i++){
        tableauResultats.push(document.querySelector(`input[name=q${i}]:checked`).value)
    }

    verifFunc(tableauResultats);
    tableauResultats =[];
})


function verifFunc(tabResultats) {
    for (let a = 0; a < 5; a++) {
        if(tableauResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
        
    }

    afficherResultats(verifTableau);
    couleurFunc(verifTableau);
    verifTableau = [];

}

function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;

    switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = `✅ Bravo, c'est un sans faute ! ✅`;

            aideResultat.innerText ='';
            noteResultat.innerText = '5/5'
        break;
        case 1:
            titreResultat.innerText = `✨ A RIEN D'ETRE UNE LEGENDE ✨`;

            aideResultat.innerText ="Tu m'en voudrais si je t'aiderais pour la dernière réponse";
            noteResultat.innerText = '4/5'
        break;
        case 2:
            titreResultat.innerText = `👀 Tu ne peux pas t'arrêter en si bon chemin 👀`;

            aideResultat.innerText ="Souviens toi, tu la déjà vue !";
            noteResultat.innerText = '3/5'
        break;
        case 3:
            titreResultat.innerText = `👀 Encore une et tu dépasse la moyenne 👀`;

            aideResultat.innerText ="Google, lance tu est capable de Doigby";
            noteResultat.innerText = '2/5'
        break;
        case 4:
            titreResultat.innerText = `😂 PROMIS je ne me moque pas 😂`;

            aideResultat.innerText ="Fais toi confiance, c'est très simple ! ";
            noteResultat.innerText = '1/5'
        break;
        case 5:
            titreResultat.innerText = `👎🏼 J'ai jamais vu ça ... 👎🏼`;

            aideResultat.innerText ='Replonge toi dans ton enfance ...';
            noteResultat.innerText = '0/5'
        break;    
        default:
            'Woops, cas innatendu. Revenez plus tard.'
    } 

}

function couleurFunc(tabValBool ){

    for(let j = 0; j< tabValBool.length; j++){

        if (tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }

    }
}

toutesLesQuestions.forEach(item => {

    item.addEventListener('click', () => {
        item.style.background = 'white';
    })

})
let i = 0;
const changeTekst = document.querySelector('.description-wrapper');
const changeTitel = document.querySelector('.description-title-wrapper');

var tekst1 = '';
var tekst2 = 'Mijn naam is Tahiru, maar je kunt me ook kennen als squirelboy. 🐿️ Ik ben een technologiefanaat die graag de nieuwste innovaties verkent. Mijn ambitie is om mijn eigen start-uponderneming te beginnen door gebruik te maken van de vaardigheden die ik heb. 🚀In mijn vrije tijd geniet ik van het volgen van voetbal, en ik ben een grote fan van Manchester United 👹, Napoli, Ajax Amsterdam en Real Madrid. ⚽ Mijn nieuwsgierigheid en verlangen naar kennis drijven me er ook toe om alles te leren over wat er bestaat.';

// Add an event listener to the changeTekst element
changeTekst.addEventListener = ('click', function () {
    i++;
    if (i === 1) {
        changeTekst.textContent = tekst2;
        changeTitel.textContent = 'Titel2';
        changeTekst.scrollIntoView({ behavior: 'smooth' });
    }else{}
});

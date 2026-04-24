const rulle1 = document.querySelector("#rulle1");
const rulle2 = document.querySelector("#rulle2");
const rulle3 = document.querySelector("#rulle3");
const btn_infoHead = document.querySelector("#btn_infoHead");
const btn_infomidt = document.querySelector("#btn_infomidt");
const btn_infosidst = document.querySelector("#btn_infosidst");

rulle1.addEventListener("click", infoHead);
rulle2.addEventListener("click", infomidt);
rulle3.addEventListener("click", infosidst);
btn_infoHead?.addEventListener("click", infoHead);
btn_infomidt?.addEventListener("click", infomidt);
btn_infosidst?.addEventListener("click", infosidst);

function infoHead() {
  console.log("infoHead");
  document.querySelector(".info-text > h2").textContent =
    "DU er ikke alene, men du sidder alene";
  document.querySelector(".placeholder").textContent =
    "Du har lige gjort dig færdig på toilettet og opdager pludselig at der ikke er meget toilet papir og går i panik. Først og fremmest skal du overveje et par ting. Hvor slemt er det, Hvor sidder du?";
  document.querySelector("#efficiency").innerHTML =
    " <p> Efter at du har analyseret din situation har du måske fundet ud af hvor slemt det er, hvor meget papir skal bruges eller kan det rystes væk. <p> Sidder du offentligt kan spørge naboen om du må låne lidt papir (dette gælder også for toiletvogne på ros). Er du hjemme kan du råbe på en ven eller familiemedlem.";
  document.querySelector("#requirement").textContent =
    "Hvis den er helt slem og du ikke har fundet en løsning, der ingen nabo er og der ingen hjemme er - det er der du skal begynde at tage et kig rundt og se hvilke muligheder og valg du har.";
}

function infomidt() {
  console.log("infomidt");
  document.querySelector(".info-text > h2").textContent =
    " Situationen er kritisk. Dine muligheder er få";
  document.querySelector(".placeholder").textContent =
    "Du sidder der stadig, du er måske for stolt til at råbe om hjælp eller også er der ingen hjælp at finde. Det er kun dig der kan løse dette.";
  document.querySelector("#efficiency").textContent =
    "Det lyder lidt klamt, men hvad ligger der på gulvet - er der noget du kan bruge. Tøj, klude, håndklæder - vær gerne kreativ og prioriter";
  document.querySelector("#requirement").innerHTML =
    " <p> Kan det rystes væk, er der ultimativt behov for at skulle tørre eller kan du nå ud i badet? <p> Du kan selvfølgelig også blive siddende og vente på hjælp";
}

function infosidst() {
  console.log("infosidst");
  document.querySelector(".info-text > h2").textContent = "Lær af dine fejl";
  document.querySelector(".placeholder").textContent =
    "Du skal ikke være pinlig berørt, dette sker for os alle, men det vigtige er at lære af sine fejl. Her er et par gode råd til fremover";
  document.querySelector("#efficiency").textContent =
    "Sæt aldrig en ny rulle på holderne uden at tjekke reserven. Køb altid en pakke mere end du tror du har brug for. Det her må aldrig ske igen.";
  document.querySelector("#requirement").textContent =
    "Gem en rulle under vasken. En i skabet. En i tasken. Kald det hvad du vil — paranoia, forberedelse, visdom. Folk der har prøvet det her én gang forstår det altid.";
}

btn_infoHead?.addEventListener("mouseover", highlightHJÆLP);
btn_infomidt?.addEventListener("mouseover", highlightvalg);
btn_infosidst?.addEventListener("mouseover", highlightråd);
btn_infoHead?.addEventListener("mouseout", de_light);
btn_infomidt?.addEventListener("mouseout", de_light);
btn_infosidst?.addEventListener("mouseout", de_light);

function highlightHJÆLP() {
  rulle1.style.filter = "brightness(1.4)";
}
function highlightvalg() {
  rulle2.style.filter = "brightness(1.4)";
}
function highlightråd() {
  rulle3.style.filter = "brightness(1.4)";
}
function de_light() {
  rulle1.style.filter = "";
  rulle2.style.filter = "";
  rulle3.style.filter = "";
}

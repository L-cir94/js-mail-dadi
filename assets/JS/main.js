/* (1)Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi
può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati
in pagina.
*/
/* strumenti

*/
//crea lista di chi può accedere
 const userList =[
  'luca.cirigliano@gmail.com',
  'mimmo@gmail.com',
  'pippo@gmail.com',
  'mamma@gmail.com',
  'riccio@gmail.com'
]
//chiedi utente la sua email
//const userMail = prompt('inserisci la tua email')//per es normale 
const userMail = document.getElementById("mail");//per bonus
const access = document.getElementById("access")
const button = document.querySelector('button');
button.addEventListener('click', function(){
  let inputUserMail = userMail.value
  console.log(inputUserMail);
  let hasaccess = false
  for (let i = 0; i < userList.length; i++)
//controlla che sia nella lista delgi ammessi 
if (inputUserMail == userList[i]){
  console.log('accesso consentito')
  i = userList.length;
  hasaccess =true}
  if (hasaccess){
    access.innerHTML = 'Accesso consentito'
  }else {
console.log('accesso negato')
//stampa un messaggio su HTML
access.innerHTML = 'Accesso non consentito'
}
})
/* (2)Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let numberPc = Math.floor(Math.random() * 6) + 1;
let numberUser = Math.floor(Math.random() * 6) + 1;
console.log(`numero utente ${numberUser} numero pc ${numberPc} `)
const diceEl = document.getElementById("computersays")
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (numberUser > numberPc) {
    console.log("hai vinto")
    diceEl.innerHTML = `${numberPc}<--pc<br> ${numberUser}<--il tuo numero <br> hai vinto`
} else if (numberUser == numberPc) {
    console.log("hai pareggiato") 
    diceEl.innerHTML =`${numberPc}<--pc<br> ${numberUser}<--il tuo numero <br> hai pareggiato`
} else {
    console.log("hai perso");
    diceEl.innerHTML =`${numberPc}<--pc<br> ${numberUser}<--il tuo numero <br> hai perso`
}
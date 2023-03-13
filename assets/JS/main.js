/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi
può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati
in pagina.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
programma così come lo faremmo "a mano" */

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
const userMail =document.getElementById("mail");//per bonus
const access = document.querySelector("div")
const button = document.querySelector('button');
button.addEventListener('click', function(){
  let inputUserMail = userMail.value
  console.log(inputUserMail);
  for (let i = 0; i < userList.length; i++)
//controlla che sia nella lista delgi ammessi 
if (inputUserMail == userList[i]){
  console.log('accesso consentito')
  i = userList.length;
  access.innerHTML = 'Accesso consentito'
}else {
console.log('accesso negato')
access.innerHTML = 'Accesso non consentito'
}
})

console.log(userMail);
//stampa un messaggio su HTML

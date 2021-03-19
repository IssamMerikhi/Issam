const txtAnim = document.querySelector('h3');
txtAnim.style.textAlign = "center";
txtAnim.style.fontFamily = "monospace";


var txt = "<strong>Issam</strong>";


new Typewriter(txtAnim, {
  deleteSpeed: 20
}).typeString('hi , ' +txt.big()+ ' here.')
.start()



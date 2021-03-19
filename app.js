

const txtAnim = document.querySelector('h3');
txtAnim.style.textAlign = "center";
txtAnim.style.fontFamily = "monospace";


var txt = "<strong>Issam</strong>";


new Typewriter(txtAnim, {
  deleteSpeed: 20
}).typeString('hi , ' +txt.big()+ ' here.')
.start()


const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');


const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    
  });

}

sections.forEach(section => {
  observer.observe(section)
})
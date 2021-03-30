window.onload = function(){
    const EFFECT = document.getElementById("c");
    const EFFECT2 = document.getElementById("t");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect(){
        if(window.scrollY >= 900){
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition = '1s ease-in-out';
        } 

        else if (window.scrollY >= 500){
            EFFECT2.style.top = '53rem';
            EFFECT2.style.left = '20%';
            EFFECT2.style.opacity = '1';
            EFFECT2.style.transform = 'translateX(0px)';
            EFFECT2.style.transition = '1s ease-in-out';
        } 

        else {
            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'translateX(-50px)';
            EFFECT2.style.opacity = '0';
            EFFECT2.style.transform = 'translateX(-50px)';

        }
    }

    scrollEffect();
}


/*window.onload = function(){
    const EFFECT = document.getElementById("t");

    window.addEventListener('scroll2', scrollEffect2);

    function scrollEffect2(){
        if(window.scrollY >= 500){
            EFFECT.style.top = '53rem';
            EFFECT.style.left = '20%';
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition = '1s ease-in-out';
        } 
        else {
            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'translateX(-50px)';

        }
    }

    scrollEffect2();
}
*/
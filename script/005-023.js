{
    const primero = document.querySelector('.S1seccion-023');

    const bloque1 = document.querySelector('.CamLigero-1');



    window.onload = function(){
        document.getElementById("a002-0051").onmouseover = function(){
            primero.classList.add('S1seccion-023-22-33-44-55');
        };
        document.getElementById("ddd").onmouseover = function(){
            primero.classList.remove('S1seccion-023-22-33-44-55');
        };

        bloque1.addEventListener('click', () =>{
            primero.classList.remove('S1seccion-023-22-33-44-55');
        });
    };
}
{
    const bloque1Refors = document.querySelector('.S1seccion-007');
    const primero = document.querySelector('.S1seccion-023');

    bloque1Refors.addEventListener('click', () =>{
        primero.classList.remove('S1seccion-023-22-33-44-55');
    });
}
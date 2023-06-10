{
    const boton001521 = document.querySelector(".a002-00521");
    const boton001522 = document.querySelector(".a002-00522");
    const boton001523 = document.querySelector(".a002-00523");

    const bloque0010170241 = document.querySelector(".S1seccion-024");
    const bloque0010170242 = document.querySelector(".S1seccion-001");
    const bloque0010170243 = document.querySelector(".S1seccion-017");

    boton001521.addEventListener('click', () =>{
        bloque0010170241.classList.remove('S1seccion-024--001-017-024');
        bloque0010170242.classList.add('S1seccion-024--001-017-024');
        bloque0010170243.classList.add('S1seccion-024--001-017-024');
    });
    boton001522.addEventListener('click', () =>{
        bloque0010170241.classList.add('S1seccion-024--001-017-024');
        bloque0010170242.classList.remove('S1seccion-024--001-017-024');
        bloque0010170243.classList.add('S1seccion-024--001-017-024');
    });
    boton001523.addEventListener('click', () =>{
        bloque0010170241.classList.add('S1seccion-024--001-017-024');
        bloque0010170242.classList.add('S1seccion-024--001-017-024');
        bloque0010170243.classList.remove('S1seccion-024--001-017-024');
    });
}
{
    const abuelo = document.querySelector('.FS1seccion-001');
    const abrir = document.querySelector('.containerF001-001 i');
    const abrirPadre = document.querySelector('.containerF001-001');

    const cerrar = document.querySelector('.Fa003-001');
    const cerrarPadre = document.querySelector('.containerF001');

    abrir.addEventListener('click', () =>{
        cerrarPadre.classList.remove('containerF001none');
        abrirPadre.classList.add('containerF001-001none');
        abuelo.classList.add('FS1seccion-001none');
    });
    cerrar.addEventListener('click', () =>{
        abrirPadre.classList.remove('containerF001-001none');
        cerrarPadre.classList.add('containerF001none');
        abuelo.classList.remove('FS1seccion-001none');
    })
}
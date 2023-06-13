{
    const color1 = document.querySelector(".a002-00521");
    const color2 = document.querySelector(".a002-00522");
    const color3 = document.querySelector(".a002-00523");

    color1.addEventListener('click', () =>{
        color1.classList.add('a002-0052p1p2p3');
        color2.classList.remove('a002-0052p1p2p3');
        color3.classList.remove('a002-0052p1p2p3');
    });
    color2.addEventListener('click', () =>{
        color1.classList.remove('a002-0052p1p2p3');
        color2.classList.add('a002-0052p1p2p3');
        color3.classList.remove('a002-0052p1p2p3');
    });
    color3.addEventListener('click', () =>{
        color1.classList.remove('a002-0052p1p2p3');
        color2.classList.remove('a002-0052p1p2p3');
        color3.classList.add('a002-0052p1p2p3');
    });
}
const acc = document.querySelectorAll('.acord');


acc.forEach(ac =>{
    const icon = ac.querySelector('.icon');
    const answer = ac.querySelector('.answer');
    const p = ac.querySelector('p');
    ac.addEventListener('click',()=>{
        icon.classList.toggle('rotate-180');
        answer.classList.toggle('overflow-hidden');
        p.classList.toggle('max-h-fit');
    })
})
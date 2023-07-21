const bttnLeft = document.getElementById('bttnLeft'),
      bttnRight = document.getElementById('bttnRight'),
      card = document.querySelectorAll('#card')

bttnLeft.addEventListener('click', () => {
    if((window.innerWidth <= 480)){
        card[0].classList.remove('translate-x-[0px]')
        card[0].classList.add('-translate-x-[440px]')
        card[1].classList.add('translate-x-[0px]')
    }else if((window.innerWidth >= 768)){
        card[0].classList.remove('md:translate-x-[0px]')
        card[0].classList.add('md:-translate-x-[1400px]')
        card[1].classList.add('md:translate-x-[0px]')
    }
    bttnLeft.classList.add('cursor-not-allowed')
    bttnRight.classList.remove('cursor-not-allowed')

    bttnLeft.classList.add('opacity-80')
    bttnRight.classList.remove('opacity-80')
})

bttnRight.addEventListener('click', () =>{
    if((window.innerWidth <= 480)){
        card[1].classList.add('translate-x-[440px]')
        card[1].classList.remove('translate-x-[0px]')
        card[0].classList.add('translate-x-[0px]')
    }else if((window.innerWidth >= 768)){
        card[1].classList.add('md:translate-x-[1400px]')
        card[1].classList.remove('md:translate-x-[0px]')
        card[0].classList.add('md:translate-x-[0px]')
    }
    bttnRight.classList.add('cursor-not-allowed')
    bttnLeft.classList.remove('cursor-not-allowed')

    bttnRight.classList.add('opacity-80')
    bttnLeft.classList.remove('opacity-80')
})
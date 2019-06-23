// menu burger

document.addEventListener("click", function (e) {
    let event = e.composedPath()
    let fog = document.querySelector('.fog')
    let burger = document.querySelector('.burger')
    let svg = document.getElementById('svg')
        if (event[0] === svg || event[1] === svg){
            menu(burger)
        }else if(event[0] === fog) {
            close(burger)
            closeModal()
        }
})

function closeModal(){
    let modal = document.querySelector('.modal')
    let shadow = document.querySelector('.fog')
    if (modal.classList.contains('modalShow')) {
        modal.classList.remove('modalShow')
        modal.style.display = 'none'
        shadow.classList.remove('zIndex-8')
        shadow.classList.add('zIndex-6')
        fog()
        clearModal(modal)
    }


}

function clearModal(modal){

    modal.querySelector('.title').innerHTML = ''
    modal.querySelector('.date').innerHTML = '<b><u>Date :</u></b>'
    modal.querySelector('.description').innerHTML = '<b><u>Description :</u></b>'
    modal.querySelector('.place').innerHTML = '<b><u>Lieux :</u></b>'



}

function fog() {
    let fog = document.querySelector('.fog')
    if (fog.style.display === 'block'){
        fog.style.display = 'none'
        fog.classList.remove('show')
    } else{
        fog.style.display = 'block'
        fog.classList.add('show')
    }
}

function menu(burger) {

    let svg = document.getElementById('svg')
    let menu = document.querySelector('.menu')


    if (burger.classList.contains('open')){
        close(burger)
    }else{
        burger.classList.remove('close')
        svg.classList.remove('unSkew')
        burger.classList.add('open')
        svg.classList.add('skew')
        menu.style.display = 'flex'
        menu.classList.add('M-show')
        fog()
    }
}

function close(burger) {
    let svg = document.getElementById('svg')
    let menu = document.querySelector('.menu')
    if (burger.classList.contains('open')){
        burger.classList.remove('open')
        svg.classList.remove('skew')
        menu.classList.remove('M-show')
        burger.classList.add('close')
        svg.classList.add('unSkew')
        menu.style.display = 'none'
        fog()
    }
}


//eventListener
function addEvent(array, fctn) {
    for (let i = 0; i < array.length; i++){
        array[i].addEventListener("click",fctn)
    }
}

//maps

function maps(){
    let name = this.dataset.name
    let gmaps = document.getElementById('gmap_canvas')
    let src = "https://maps.google.com/maps?q=saint-gratien%20" + name + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
    let url = encodeURI(src)
    gmaps.setAttribute("src",url)
    let map = document.querySelector('.mapOuter')
    map.style.height = '55vh'
}

if (document.querySelector('.zIndex-5').dataset.name === 'accueil') {
    //slider
    let swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        hashNavigation: {
            watchState: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let Narrow = document.querySelector('.swiper-button-next')
    let Parrow = document.querySelector('.swiper-button-prev')
    Narrow.style.backgroundImage = "url('')"
    Parrow.style.backgroundImage = "url('')"

    //modal
    let elem = document.querySelectorAll('div.slider > a')
    addEvent(elem, modal)
    function modal() {
        let event = this.parentNode
        let title = event.childNodes['1'].innerText
        let date = event.dataset.date
        let place = event.dataset.place
        let content = event.dataset.content
        let modal = document.querySelector('.modal')

        modal.querySelector('.place').appendChild(document.createTextNode(place))
        modal.querySelector('.title').appendChild(document.createTextNode(title))
        modal.querySelector('.date').appendChild(document.createTextNode(date))
        modal.querySelector('.description').appendChild(document.createTextNode(content))

        modal.classList.add('modalShow')
        modal.style.display = 'block'
        let shadow = document.querySelector('.fog')
        shadow.classList.remove('zIndex-6')
        shadow.classList.add('zIndex-8')

        fog()
    }

}else if (document.querySelector('.zIndex-5').dataset.name === 'town') {
    //service google maps
    let elem = document.querySelectorAll('a[data-name]')
    addEvent(elem, maps)

}else if (document.querySelector('.zIndex-5').dataset.name === 'faq') {
    //faq
    let question = document.querySelectorAll('.question')
    addEvent(question,show)

    function show(){
        let answer = this.parentNode.querySelector('.answer')
        if (answer.style.display === 'block'){
            answer.style.display = 'none'
        }else{
            answer.style.display = 'block'
        }
    }
}else if (document.querySelector('.zIndex-5').dataset.name === 'contact'){

}

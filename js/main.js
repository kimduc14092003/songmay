transparentHeader()


// Funcion
function transparentHeader(){
    var header_content=document.querySelector('.header-content');
    header_content.classList.toggle('header-transparent',(scrollY<30&this.screen.width>1023))
    addEventListener('scroll',function(){
        header_content.classList.toggle('header-transparent',(scrollY<30&this.screen.width>1023))
    })
}


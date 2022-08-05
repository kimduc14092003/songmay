var $=document.querySelector.bind(document);
var $$=document.querySelectorAll.bind(document);

start()

// Funcion
function start(){
    // transparentHeader()
    buyBtn()
    exitRegisterForm()
    submit_btn()
}
function transparentHeader(){
    var header_content=$('.header-content');
    header_content.classList.toggle('header-transparent',(scrollY<30&this.screen.width>1023))
    addEventListener('scroll',function(){
        header_content.classList.toggle('header-transparent',(scrollY<30&this.screen.width>1023))
    })
}
function buyBtn(){
    let buyBtn=$('.recap_content-btn');
    let register_form=$('.register-form');
    buyBtn.addEventListener('click',function(){
        register_form.style.display='flex'
    })
}
function exitRegisterForm(){
    let register_form=$('.register-form');
    let overlay=$('.register_overlay');
    let register_exit=$('.register_exit');
    overlay.addEventListener('click',function(){
        register_form.style.display='none'
    })
    register_exit.addEventListener('click',function(){
        register_form.style.display='none'
    })
}
function patternForm(){
    let result=0;
    let register_name=$('.register_box-name>input');
    let register_email=$('.register_box-email>input');
    let register_phone=$('.register_box-phone>input');
    
    const name =register_name.value 
    const email =register_email.value
    const phone =register_phone.value
    const patternEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const patternPhone=/[0-9]{10}/;

    let errorName_icon=$('.register_box-name>i')
    let errorEmail_icon =$('.register_box-email>i');
    let errorPhone_icon =$('.register_box-phone>i');

    let errorName_text=$('.register_box-name>span');
    let errorEmail_text =$('.register_box-email>span');
    let errorPhone_text =$('.register_box-phone>span');


    if(name===''){
        errorName_icon.style.display='block'
        errorName_text.style.display='block'
    }
        else{
            result++;
            errorName_icon.style.display='none'
            errorName_text.style.display='none'
        }
    if(!email.match(patternEmail)){
        errorEmail_icon.style.display='block'
        errorEmail_text.style.display='block'
    }
        else{
            result++;
            errorEmail_icon.style.display='none'
            errorEmail_text.style.display='none'
        }
    if(!phone.match(patternPhone)){
        errorPhone_icon.style.display='block'
        errorPhone_text.style.display='block'
    }
        else{
            result++;
            errorPhone_icon.style.display='none'
            errorPhone_text.style.display='none'
        }
    return result>=3
}
function unFocusInput(){
    let register_name=$('.register_box-name>input');
    let register_email=$('.register_box-email>input');
    let register_phone=$('.register_box-phone>input');
    // console.log(register_name, register_email, register_phone);
    register_name.addEventListener('blur',function(){
        patternForm()
    })
    register_email.addEventListener('blur',function(){
        patternForm()
    })
    register_phone.addEventListener('blur',function(){
        patternForm()
    })
}
function submit_btn() {
    let submitButton = $('.register_box-submmit');
    submitButton.addEventListener('click',function(){
        unFocusInput()
        let register_form=$('.register-form');
        if(patternForm())
        {
            register_form.style.display='none'
            alert("Cảm ơn bạn đã quan tâm đến khóa học của chúng tôi!")
        }
    })
}


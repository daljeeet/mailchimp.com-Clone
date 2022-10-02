let loginBtn = document.querySelector('.login_button')
    loginBtn.addEventListener('click', function() {
        location.href = 'login.html'
    })
    let signupBtn = document.querySelectorAll('.sign_up_btn')
    signupBtn.forEach(function(elem) {
        elem.addEventListener('click', function() {
            location.href = 'pricing.html'
        })
    })
    let faque = document.querySelectorAll('.faq_que')
    faque.forEach(function(element) {
        element.children[0].addEventListener('click', 
            function(){
                let anstoggle = element.children[1]
        if (anstoggle.className == 'hide') {
            anstoggle.className = 'show'
            element.children[0].children[1].innerText = '➖'
        } else {
            anstoggle.className = 'hide'
            element.children[0].children[1].innerText = '➕'
        }
            })
    })



    let navList = document.querySelectorAll('.nav_list')
    navList.forEach(function(element,index){
        element.addEventListener('mouseover',function(){
            mouseOver(element,index)
        })
    })

    let dropdown = document.querySelectorAll('.dorpdown_content')
    function mouseOver(e,i){
        dropdown.forEach(function(elem,ind){
            if(i===ind){
                elem.children[1].addEventListener('mouseover',function(){
                    hideIt(elem,e)
                } )
                elem.style.display='inherit'
                let rightCont = elem.children[0].children
                for(let node of rightCont){
                    if(node.className==='drop_right'){
                       node.addEventListener('mouseover',function dropRight(){
                        node.children[1].style.display = 'flex'
                       }
                       )
                       node.addEventListener('mouseout',function hideRight(){
                        node.children[1].style.display = 'none'
                       } )
                    }
                }
               
        }else{
            elem.style.display ='none'
        }
    })
    }
    function hideIt(el,e){
        el.style.display = 'none'
        e.style.color = 'black'
    }


   let hamberger = document.querySelector('#hamIcon');
   let nav = document.querySelector('nav')
   let hambClose = document.querySelector('#hamIconClose');
   let backArrow = document.querySelector('.backArrow')
   hamberger.addEventListener('click',shoNav)
   function shoNav(){
    nav.className= 'nav_show'
    hamberger.style.display = 'none'
    hambClose.style.display = 'flex'
   }
   hambClose.addEventListener('click', closeNav );
   function closeNav(){
    nav.className = 'nav_hide'
    hamberger.style.display = 'flex'
    hambClose.style.display = 'none'
   }
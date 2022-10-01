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
        element.addEventListener('mouseout',function(){
            mouseOut(element,index)
        })
    })
    let dropdown = document.querySelectorAll('.dorpdown_content')
    function mouseOver(e,i){
        dropdown.forEach(function(elem,ind){
        if(i===ind){
            let lists = elem.children[0].childNodes;
            lists.forEach(function(a,b){
                if(a.className==='drop_right'){
                    a.addEventListener('mouseover',function(){toggleRight(a,b)})
                }
            })
            elem.children[1].addEventListener('mouseover',function(){
                hideIt(elem)
            } )
            e.style.color = 'teal'
            elem.style.display='inherit'
        }else{
            elem.style.display ='none'
        }
    })
    }
        function mouseOut(e,i){
        // e.style.display='none'
    }
    function hideIt(el,e){
        el.style.display = 'none'
    }
    function toggleRight(a,b){
        console.log(a.childNodes)
    }
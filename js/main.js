// $(document).ready(function(){})
$(function(){
    let left_text = ['Home','About','Project','Contact']
    $('.main_full').fullpage({
        anchors:['f01','f02','f03','f04'],
        css3: false,
        scrollOverflow: false,
        afterLoad: function(origin, destination, direction, trigger){
            let idx = destination.index;
            // console.log(idx)
            const video = $('.profile-box').find('video');
            if(idx==0){
                video.get(0).play();
            }

            $('.section').eq(idx).addClass('on').siblings().removeClass('on');
            $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
            $('.footer .left span').text(left_text[idx])
            $('.footer .left strong').text('0' +(idx +1))

            if(origin.index >= 0 && direction =='down'){
                $('.header h1 a').addClass('wow')
            }else {
                $('.header h1 a').removeClass('wow')
            }
        },
    }) 

    //우측상단햄버거
    $('.cover_btn').on('click',function(){
        $('#cover').slideToggle();
    })
    let cloneMenu = $('nav>ul').clone();
    console.log(cloneMenu)
    $('#cover').append(cloneMenu);
    $('#cover a').on('click',function(){
        $('#cover').slideUp();
    })
    const poroject = $('.swiper-slide .img')
    const porobg = $('.img .clong-bg')
    poroject.mouseenter(function(){
        $(this).find('.clong-bg').css({
            height : '220px'
        })
    })
    poroject.mouseleave(function(){
        porobg.css({
            height : '0'
        })
    })
})
$(function(){
    const spanEl = document.querySelector('.profile-text > h2 > span')
    const txtArr = ['web publisher', 'hyun joon']
    console.log(txtArr)
    let index = 0;
    let currentTxt = txtArr[index].split("")
    // console.log(currentTxt)

    // writeTxt
    function writeTxt(){
        spanEl.textContent += currentTxt.shift()


        // 만약에 currentTxt길이가 0 이 아니라면
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100))

        }else {

            currentTxt = spanEl.textContent.split("")

            setTimeout(deleteTxt, 3000) 
        }
    }

    function deleteTxt(){
        currentTxt.pop() 
        spanEl.textContent = currentTxt.join()
       
        if(currentTxt.length !==0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
            
        }else {
             
            index = (index + 1) % txtArr.length
            
            currentTxt = txtArr[index].split("")
            writeTxt()
        }
    }
    writeTxt()
})()

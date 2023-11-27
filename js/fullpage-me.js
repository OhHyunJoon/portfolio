$(document).ready(function() {
    //fullpage설정
    $('#fullpage').fullpage({
        anchors: ['page1','page2', 'page3', 'page4', 'page5'],
       //options here
        autoScrolling:true,  //기본값 true
        scrollHorizontally: true,
        sectionsColor: ['#aaa','#bbb','#ccc','#ddd','#eee', "#fff"],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5', '푸터'],
        slidesNavigation: true,
        keyboardScrolling: false, // 키보드 눌렀을 때 스크롤 (기본값 true)
        responsiveWidth: 1000,  //1000 이하가 되면 풀페이지 해제하기 


       afterLoad: function(anchorLink, index){
            console.log('현재 섹션 번호는' + index)
            if(index == 6) {
                alert('마지막 섹션입니다.')
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log('현재 활성화된 슬라이드 번호는' + slideAnchor)
        }
        
    });
    //methods
    $.fn.fullpage.setAllowScrolling(true);  // 
 });
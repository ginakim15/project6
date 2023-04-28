$(function(){

    /**header 스크롤 라인 */
    let lastScroll = 0;
    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if (curr > 0) {
            $('header').addClass('line')
        } else {
            $('header').removeClass('line')
        }
    })

    /**메인비주얼 카테고리 */
    //동적으로 생성된 태그일 때
    $(document).on('mouseover','.cate-item',function(){
        if ($(this).find('.catesub-list').length > 0) {
            $(this).children('.catesub-list').addClass('on');
        }
    });
    $(document).on('mouseleave','.cate-item',function(){
        $('.catesub-list').removeClass('on');
    });

    /**메인비주얼 슬라이드 */
    const groupSlide = new Swiper('.group-slide',{
        effect: 'fade',
        loop:true,
        speed:1500,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
        pagination:{
            el:'.swiper-pagination'
        },
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    $('.sc-visual .group-slide').hover(function(){
        $('.sc-visual .btn').addClass('on')
    },function(){
        $('.sc-visual .btn').removeClass('on')
    })
    /**메인컨텐츠(col-left) 바둑슬라이드 */
    const goSlide = new Swiper('.go-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) 스터디슬라이드 */
    const studySlide = new Swiper('.study-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) gpt슬라이드 */
    const gptSlide = new Swiper('.gpt-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) free슬라이드 */
    const freeSlide = new Swiper('.free-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) brand슬라이드 */
    const brandSlide = new Swiper('.brand-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**banner슬라이드 슬라이드 */
    const bannerSlide = new Swiper('.banner-slide',{
        loop:true,
        speed:1500,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
        pagination:{
            el:'.swiper-pagination'
        },
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) promotion슬라이드 */
    const promotionSlide = new Swiper('.promotion-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) oneday슬라이드 */
    const onedaySlide = new Swiper('.oneday-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) luck슬라이드 */
    const luckSlide = new Swiper('.luck-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) high슬라이드 */
    const highSlide = new Swiper('.high-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:6,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) other슬라이드 */
    const otherSlide = new Swiper('.other-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) weekend슬라이드 */
    const weekendSlide = new Swiper('.weekend-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-left) low슬라이드 */
    const lowSlide = new Swiper('.low-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
        navigation:{
            prevEl:'.btn.prev',
            nextEl:'.btn.next'
        }
    })
    /**메인컨텐츠(col-right) position:sticky top값 변경 */
    function posSet(){
        targetHeight = $('.position-wrap').outerHeight();
        windowHeight = window.innerHeight;
        result = targetHeight - windowHeight;

        $('.sc-content .position-wrap').css('top',-result);
    }
    posSet();

    $(window).resize(function(){
        posSet();
    })
    /**메인컨텐츠(col-right) 리뷰슬라이드 */
    const reviewSlide = new Swiper('.review-slide',{
        loop:true,
        speed:1500,
        spaceBetween:15,
        slidesPerView:1.1,
        autoplay:{
            delay: 2000,
            disableOnInteraction: false
        }
    })
    /**메인컨텐츠(col-right) 책슬라이드 */
    const bookSlide = new Swiper('.book-slide',{
        loop:true,
        speed:1500,
        spaceBetween:20,
        slidesPerView:1.3,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
        pagination:{
            el:'.swiper-pagination'
        }
    })

    

    /**(.sc-visual .group-category)데이터바인딩(menuData.json) */
    fetch('https://ginakim15.github.io/project6//assets/data/menuData.json')
    .then(res=>res.json())
    .then(json=>{
        data=json.menu;
        
        let html='';
        data.forEach(element => {

            if (element.depth1) { //catesub(=depth1)가 있다면 (조건문)

                let depth1 = '';
                element.depth1.forEach(dep1 => { 

                    if (dep1.depth2) { //sub(=depth2)가 있다면 (조건문)
                        let depth2 = '';

                        dep1.depth2.forEach(dep2 => {
                            depth2+=`<li class="sub-item">
                                        <a href="" class="sub">${dep2.name}</a>
                                    </li>`;
                        });
                        //반복되는 부분은 sub-item(li) 이기 때문에 따로 빼줌
                        depth2El = `<ul class="sub-list">${depth2}</ul>`;
                    } else { //없다면
                        depth2El='';
                    }

                    depth1+=`<li class="catesub-item">
                                <a href="" class="catesub">${dep1.name}</a>
                                ${depth2El}
                            </li>`;
                });
                //반복되는 부분은 catesub-item(li) 이기 때문에 따로 빼줌
                depth1El = `<ul class="catesub-list">${depth1}</ul>`;
            }else{ //없다면
                depth1El='';
            }
            
            html+=`<li class="cate-item">
                        <a href="" class="cate">${element.name}</a>
                        ${depth1El}
                    </li>`;
        });
        $('#menuList').html(html);
    })

    // ../assets/data/menuData.json
    // https://github.com/ginakim15/project6/blob/master/assets/data/menuData.json

    /**(.sc-content .column-left)데이터바인딩(classData.json) */
    /**
     * @display1 - 나는 바둑을 빨리 배웠어, 연진아 ⚫⚪
     * @display2 - 세상을 바꿀 ChatGPT, 이젠 배워야 할 때!
     * @display3 - ⭐ 모두 무료! 0원 VOD가 한 곳에! ⭐
     * @display4 - 리뷰 100개, 평점 4.9 이상 명품클래스✔
     * @display5 - 오늘 인기 원데이
     * @display6 - 2023년, 올해 운세는? ✍
     * @display7 - 다른 분들은 이걸 많이 봤어요!
     * @display8 - 이번주 시작
     * @display9 - 만원 이하 클래스
     */

    classList(1,'#classList1')
    classList(2,'#classList2')
    classList(3,'#classList3')
    classList(4,'#classList4')
    classList(5,'#classList5')
    classList(6,'#classList6')
    classList(7,'#classList7')
    classList(8,'#classList8')
    classList(9,'#classList9')

    // ../assets/data/classData.json
    // https://github.com/ginakim15/project6/blob/master/assets/data/classData.json
    
    function classList(num,frame){
        fetch('https://ginakim15.github.io/project6/assets/data/classData.json')
        .then(res=>res.json())
        .then(json=>{

            allData = json.items;
            resultData = allData.filter(function(data){
                return data.display.indexOf(num) >= 0
            })
            console.log(resultData);
            
            let html = '';
            resultData.forEach(element => {

                const placeEl = (element.sort.place)?`<em class="point place">${element.sort.place}</em>`:'';
                const onlineEl = (element.sort.online)?`<em class="point place">온라인 LIVE</em>`:'';
                const liveEl = (element.sort.live)?`<em class="point live">LIVE</em>`:'';
                const ebookEl = (element.sort.ebook)?`<em class="point ebook">전자책</em>`:'';
                const vodEl = (element.sort.vod)?`<em class="point vod">VOD</em>`:'';
                const talingEl = (element.sort.taling)?`<em class="point taling">VOD</em>`:'';

                const favEl=(element.fav > 0)?`<span class="good">${element.fav}</span>`:'';

                let reviewEl=``;
                if(element.review > 0){
                    if(element.review > 100){
                        reviewEl=`<span class="count">리뷰 100건 +</span>`
                    }else{
                        reviewEl=`<span class="count">리뷰 ${element.review}건</span>`
                    }
                }

                const oriEl=(element.price.ori > 0)?`<span class="del">${priceFomat(element.price.ori)}원</span>`:'';
                const discountEl=(element.price.discount > 0)?`<span class="sale">${element.price.discount}%</span>`:'';

                html+=`<div class="swiper-slide">
                            <a href="">
                                <div class="img-box">
                                    <div class="wrap">
                                        <button class="btn-wish" aria-label="찜하기"></button>
                                        <img src="${element.thumb}" alt>
                                    </div>
                                 </div>
                                <div class="text-box">
                                    ${placeEl} ${onlineEl} ${liveEl} ${ebookEl} ${vodEl} ${talingEl}
                                    <p class="title">${element.title}</p>
                                    <p class="tutor">${element.tutor}</p>
                                    <div class="price-wrap">
                                        <em class="price">${priceFomat(element.price.curr)}원</em>
                                        ${oriEl}
                                        ${discountEl}
                                    </div>
                                    <div class="text-wrap">
                                        ${favEl}
                                        ${reviewEl}
                                    </div>
                                </div>
                            </a>
                        </div>`;
            });
            $(frame).html(html);
            
        })
    }
    function priceFomat(price){
        return price.toLocaleString('ko-KR');
   }

    



        
           

    





















})
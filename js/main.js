let Header = document.querySelector('header');
let btt = document.querySelector('.go_top')
let qnaWrapper=document.querySelectorAll('.qna_list')

if(qnaWrapper.length > 0){
    
    qnaList = qnaWrapper[0].querySelectorAll('.qna_list li');
    console.log(qnaList)

    for(ql of qnaList){            
        ql.addEventListener('click', e=>{
            for(li of qnaList){
                li.classList.remove('active');
            }
            e.currentTarget.classList.add('active');
        })
    }
}


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 0){
            Header.classList.add('active');
        }else{
            Header.classList.remove('active');
        }
    if(window.pageYOffset > 300){
            btt.classList.add('active');
        }else{
            btt.classList.remove('active');
        }
    });
    btt.addEventListener('click', e=>{
         e.preventDefault();
         scrollTo({
            left:0, 
            top:0, 
            hehavior:'smooth'
        }); 
     });

let sliderWrapper = document.querySelector('.slide_wrapper');
let sliderContainer = document.querySelector('.slide_container');
let slide = sliderContainer.querySelectorAll('li');
let slideCount=slide.length;
let prevBtn = sliderWrapper.querySelector('.fa-chevron-left');
let nextBtn = sliderWrapper.querySelector('.fa-chevron-right');
currentIndex = 0;
let timer;

// slide.forEach((item,idx)=>{
//     item.style.left=`${idx*100}%`;
// });

sliderContainer.style.width = `${sliderWrapper.offsetWidth*slideCount}px`;
for(item of slide){
    item.style.width = `${sliderWrapper.offsetWidth}px`;
}
/*
슬라이드 이동함수

gotoSlide 함수 생성, 매개변수 idx가 들어오면
    sliderContainer의 left값을 idx 0 -> 0, idx 1 -> -100%, idx2 -> -200%;
    idx번호로 currentIndex 갱신

    css:sliderContainer transition:0.4s
*/

function goToSlide(idx){
    if(idx > slideCount - 1){
        idx = 0;
    } else if (idx < 0){
        idx = slideCount - 1;
    }
    sliderContainer.style.left=`${-idx*100}%`;
    currentIndex = idx;
}
/*
다음버튼을 클릭하면 할일
현재 슬라이드 번호에 +1한 숫자를 goToSlide에 전달
만약에 마지막일때 다음 버튼을 클릭하면 처음으로 이동
*/

nextBtn.addEventListener('click',()=>{
    goToSlide(++currentIndex);
});
prevBtn.addEventListener('click',()=>{
    goToSlide(--currentIndex);
});
/*
자동슬라이드
4초마다 goToSlide에 현재번호+1
slideWrapper 마우스 들어오면 멈추고, 나가면 다시 자동 슬라이드
*/

function autoslide(){
    timer = setInterval('goToSlide(++currentIndex)',4000);
}
autoslide();


sliderWrapper.addEventListener('mouseenter',()=>{
    clearInterval(timer);
    });
sliderWrapper.addEventListener('mouseleave',()=>{
    autoslide();
    });





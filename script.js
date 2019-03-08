console.log("connected");
var btnLeft = document.querySelector('#btn_left');
var btnRight = document.querySelector('#btn_right');
var pics = document.querySelectorAll('.pics > img');
var quotes = document.querySelectorAll('.texts h3');
var span = document.querySelector('.controls > span');
var counter = 0;
var x;
setAnimate();

btnRight.addEventListener('click', (e) => {
    counter = (counter + 1) % pics.length;
    change();
});

btnLeft.addEventListener('click', (e) => {
    counter = (counter - 1) % pics.length;
    if(counter < 0){
        counter = pics.length - 1;
    }
    change();
});

function change(){
    span.innerHTML = `${counter+1} of ${pics.length}`;
    setAnimate();
    for(let i = 0; i < pics.length; i++){
        let pic = pics[i];
        let quote = quotes[i];
        if(i === counter){
            pic.classList.remove('hide');
            quote.classList.remove('hide');   
        }else{
            pic.classList.add('hide');
            quote.classList.add('hide');
        }
    }
}

function setAnimate(){
    clearInterval(x);
    x = setInterval(()=>{
        counter = (counter + 1) % pics.length;
        change();
    }, 3500);
}
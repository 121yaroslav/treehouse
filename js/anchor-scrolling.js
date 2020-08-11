 function scrollToDiv(element,navheight){
var offset = element.offset();
var offsetTop = offset.top; 
var totalScroll = offsetTop-navheight;

$('body,html').animate({
scrollTop: totalScroll
}, 700); //скорость анимации прокрутки
}

$(' menu li a').click(function(){ //тут вешаем обработчик на ссылку или что угодно
var el = $(this).attr('href');
var elWrapped = $(el);
var offsetTop = 0; //вместо 90 можно указать любой offset
scrollToDiv(elWrapped, offsetTop); 

return false;
});
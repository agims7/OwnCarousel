count = 0;
id = parseInt($('.active').attr('id'));

$('#container .item').each(function () {
    count++;
    li = '<li id="' + count + '"></li>';
    $('.dots ul').append(li);
});

$('.dots ul li').on('click', function() {
    id = $(this).attr('id');
  updateItem();
});

$('.fa-arrow-right').on('click', function() {
  setIdRight();
  removeClasses();
  $('.item:nth-of-type('+id+')').addClass("active animated FadeInRight");
  $('li:nth-of-type('+id+')').addClass("activeDot");
});

$('.fa-arrow-left').on('click', function() {
  setIdLeft();
  removeClasses();
  $('.item:nth-of-type('+id+')').addClass("active animated FadeInLeft");
  $('li:nth-of-type('+id+')').addClass("activeDot");
});

function updateItem() {
  removeClasses();
    $('.item:nth-of-type('+id+')').addClass("active animated FadeIn");
    $('li:nth-of-type('+id+')').addClass("activeDot");
}

function setIdRight() {
    id++;
    if (id > count) {id = 1;}
}

function setIdLeft() {
    id--;
    if (id < 1) {id = 4;}
}

function removeClasses() {
    $('.item').removeClass( "active animated FadeInRight FadeInLeft FadeIn");
    $('.dots li').removeClass( "activeDot");
}

function initialize() {
  function SetFirstActiveDot() {
    $(".dots ul").find("li:first").addClass("activeDot");
  }
  SetFirstActiveDot();
}

function slideLoop() {
  setIdRight();
  removeClasses();
  $('.item:nth-of-type('+id+')').addClass("active animated FadeIn");
  $('li:nth-of-type('+id+')').addClass("activeDot");
}

setInterval(slideLoop, 5000);
initialize();
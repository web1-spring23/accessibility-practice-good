
$("#popup-container").ready(function(){

   $("button#yes").focus();
});

$('.faq-question').click(function(){
    $(this).children("p").slideToggle(500); 
    var button = $(this).children("#faq-button");
    button.toggleClass("closed open");
    if(button.attr('aria-expanded')== 'false') {
      button.attr('aria-expanded', 'true');
    }
    else {
      button.attr('aria-expanded', 'false');
    }
 });

 $('button#yes').click(function(){
    $('#popup-container').css('display', 'none');
    $('#skip-to-content').focus();
 });

 $('.nav-item').click(function() {
  var button = $(this);
  button.attr('aria-expanded', 'true');
  var navItem = $(this).next();
   navItem.toggleClass('menu-expand');
   navItem.children().last().children().blur(function() {
    console.log('blur');
    navItem.removeClass('menu-expand');
    button.attr('aria-expanded', 'false');
   });
 });
function tickets(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = [];
}

function Cost(s, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}
alert();
$(document).ready(function () {
  $("form#new-ticket").submit(function(event){
    event.preventDefault();
    debugger
    var age = $("#new-last-name").val();
    var time = $("input:checkbox[name=time]:checked").val();
    var movie = $("#movieInput").val();
  })
//alert();
});









//
//
// $('#another-location').keypress(function(event){
//         var keycode = (event.keyCode ? event.keyCode : event.which);
//         if(keycode == '13'){
//            alert('You pressed a "enter" key in textbox, here submit your form');
//         }
//     });
//



// function Contact(first, last){
//   this.firstName = first;
//   this.lastName = last;
// }
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
// // user interface logic
// $(document).ready(function(){
//   $("form#new-contact").submit(function(event){
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//     $(".contact").last().click(function() {
//     $("#show-contact").toggle();
//     $("#show-contact h2").text(newContact.fullName());
//     $(".first-name").text(newContact.firstName);
//     $(".last-name").text(newContact.lastName);});
//   });
// });
//

function showing(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

function Cost(s, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

//User interface face
$(document).ready(function () {
  $("form#new-ticket").submit(function(event){
    event.preventDefault();
    var inputMovie = $("#movieInput").val();
    var inputTime = $("input:checkbox[name=time]:checked").val();
    var inputAge = $("#ageInput").val();
    var newShowing = new Showing(inputMovie, inputTime, inputAge);
  })
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

//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//     $(".contact").last().click(function() {
//     $("#show-contact").toggle();
//     $("#show-contact h2").text(newContact.fullName());
//     $(".first-name").text(newContact.firstName);
//     $(".last-name").text(newContact.lastName);});
//   });
// });
//

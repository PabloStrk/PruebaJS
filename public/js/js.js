

//Iniciar

$(function() {

  $('a').click(function(event) {
    if ($(this).attr('href') == '#') {
      event.preventDefault();  //
    };
  });


  $(".twiteos").on('click', '.twit__heart', function(event) {
    event.preventDefault();  // Previene evento

    $(this).addClass('twit__fav');

    var counter = $(this).next(),
        newCounter = parseInt(counter.text()) + 1;

    counter.text(newCounter);

  });
  

  // Se obtienen los datos
  $('form').submit(function(event) {
    event.preventDefault(); 

    var data = $(this).serializeArray(),
        image = data[0].value,
        quote = data[1].value;

    

 var random = Math.floor((Math.random() * 100) + 1);

    var twit = `<article class="twit eliminar`+random+`">\
        <img class="twit__image" src="images/`+image+`" alt="author" />\

        <div class="twit__border">\
          <div class="twit__contenido">\
            ${quote}\
          </div>\

          <div class="twit__detalles">\
            <div class="twit__count twit__heart"><a href='#'><i class="fas fa-heart"></i></a></div>\
            <div class="twit__count">0</div>\
            <div class="twit__count twit__eliminar"><a href='#' onclick="eliminar(`+random+`);"><i class="far fa-trash-alt"></i></a></div>\
          </div>\

        </div>\
      </article>`

    // Para agregar otro twit
    $(twit).prependTo('.twiteos').hide().fadeIn(500);

    $(this)[0].reset();

    $(this).children(":first-child").attr('src', 'images/vader_profile.jpeg');
  });
});
function eliminar(id){
    $('.eliminar'+id).fadeOut(500); 
    setTimeout(function() {
      $('.eliminar'+id).remove(); 
    }, 500);
  }

 
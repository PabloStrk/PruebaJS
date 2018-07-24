// 01: inicializar con evento ready
$(function() {

  $('a').click(function(event) {
    if ($(this).attr('href') == '#') {
      event.preventDefault();  // prevenir evento de los logos vacíos
    };
  });

  // 02: Añadir/eliminar la clase .boardTuits__heart--liked al hacer click sobre .boardTuits__heart
  $(".twiteos").on('click', '.twit__heart', function(event) {
    event.preventDefault();  // prevenir evento

    $(this).addClass('twit__heart--liked');

    var counter = $(this).next(),  // obtengo el elemento con el número de likes
        newCounter = parseInt(counter.text()) + 1;  // obtengo el string, se convierte a number y se suma 1

    counter.text(newCounter);  // se actualiza el string

  });
  

  // 05: Obtener data del form y crear tuit
  $('form').submit(function(event) {
    event.preventDefault();  // prevenir evento

    var data = $(this).serializeArray(),  // obtener data
        image = data[0].value,
        quote = data[1].value;

    

 var ramdon = Math.floor((Math.random() * 100) + 1);

    var twit = `<article class="twit eliminar`+ramdon+`">\
        <img class="twit__image" src="images/`+image+`" alt="author" />\

        <div class="twit__border">\
          <div class="twit__quote">\
            ${quote}\
          </div>\

          <div class="twit__features">\
            <div class="twit__item twit__heart"><a href='#'><i class="fas fa-heart"></i></a></div>\
            <div class="twit__item">0</div>\
            <div class="twit__item twit__trash"><a href='#' onclick="eliminar(`+ramdon+`);"><i class="far fa-trash-alt"></i></a></div>\
          </div>\

        </div>\
      </article>`

    $(twit).prependTo('.twiteos').hide().fadeIn(500); // agregar twit

    $(this)[0].reset();  // limpiar form

    $(this).children(":first-child").attr('src', 'images/vader_profile.jpeg');
  });
});
function eliminar(id){
    $('.eliminar'+id).fadeOut(500); 
    setTimeout(function() {
      $('.eliminar'+id).remove(); 
    }, 500);
  }

 
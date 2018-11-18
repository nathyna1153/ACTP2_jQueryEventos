$(document).ready(function(){

	$(".cards").on( 'click', '.card', function(e){
		$(this).toggleClass("card--open");
        e.preventDefault();
	});
	

    $(".cards").on( 'click', '.card__like', function(){
       $(this).toggleClass("card__like--red");
       return false;
    });

    $(".cards").on( 'click', '.card__follow-btn', function(){
       

       if($(this).hasClass( "card__follow-btn--following" )){
       		$(this).text("Seguir");
       }else{
       		$(this).text("Siguiendo");
       }
       $(this).toggleClass("card__follow-btn--following");
       return false;
    });

    $("#image").change(function(e) {
    	var imagen = $(event.target).val();
    	$(".create__image").children('img').attr('src',`assets/images/squared/${ imagen }`);
	});

	$("#author").change(function(e) {
    	var autor = $(event.target).val();
    	$(".create__profile").children('img').attr('src',`assets/images/profiles/${ autor }`);
	});

	$( ".create__form" ).submit(function( event ) {

	  var imagen  = $('#image').children(':selected').text();
	  var imagen_val  = $('#image').children(':selected').val();
	  var autor  = $('#author').children(':selected').text();
	  var autor_val  = $('#author').children(':selected').val();
	  var titulo = $("#name").val();
	  var followers = $("#followers").val();
	  var likes = $("#likes").val();
	  var following = $("#following").val();
	  // alert(imagen + ' '+ autor + ' ' + titulo );

	  var elemento_clon = $( ".card" ).first().clone();

	  elemento_clon.find(".card__img").attr('src',`assets/images/squared/${ imagen_val }`);
	  elemento_clon.find(".card__profile").attr('src',`assets/images/profiles/${ autor_val }`);
	  elemento_clon.find(".card__title").children("h2").text(`${ titulo }`);
	  elemento_clon.find(".card__author-name").text(`${ autor }`);
	  elemento_clon.find(".social__number").eq(0).text(`${ followers }`);
	  elemento_clon.find(".social__number").eq(1).text(`${ likes }`);
	  elemento_clon.find(".social__number").eq(2).text(`${ following }`);
	  elemento_clon.find(".card__like.card__like--red").attr('class','card__like');
	  
	  $(".cards").append(elemento_clon);
	  			
	  $("#name").val("");
	  $("#followers").val("");
	  $("#likes").val("");
	  $("#following").val("");
	  $('#image').val("uk.png");
	  $('#author').val("uk.png");
	  $(".create__image").children('img').attr('src','assets/images/squared/uk.png');
	  $(".create__profile").children('img').attr('src','assets/images/profiles/uk.png');

	  event.preventDefault();
	});
});
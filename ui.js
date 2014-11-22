 $( ".content" ).fadeTo(2000 , 1, function() {});
 
 $( "input" ).blur(function() {
	calc();
});

$( ".pre_select .options div" ).click(function() {
	$(this).parent("div").prev("input").val($(this).text());
});

$( ".pre_select #1 div" ).click(function() {
	if ($(this).text() == "ABS") {
		$("#value_dichte").val("1120");
		calc();
	} else if ($(this).text() == "PLA") {
		$("#value_dichte").val("1430");
		calc();
	}
});





function open(id, n) {
	if (n < 50) {
		$( "#" + id ).css( "max-height", n + "px");
		setTimeout("open("+ id +", " + (n + 2) +")", 1);
	}
}

function close(id) {
	if ($( "#" + id ).css( "max-height").replace("px", "") > 0) {
		$( "#" + id ).css( "max-height", $( "#" + id ).css( "max-height").replace("px", "") - 2 + "px");
		setTimeout("close("+ id +")", 1);
	} else {
		$( "#" + id ).css("display", "none");
		$( "#" + id ).prev("input").css( "-webkit-border-bottom-left-radius", "30px  30px" );
		$( "#" + id ).prev("input").css( "-webkit-border-bottom-right-radius", "30px 30px" );
		$( "#" + id ).prev("input").css( "-moz-border-radius-bottomleft", "30px 30px" );
		$( "#" + id ).prev("input").css( "-moz-border-radius-bottomright", "30px 30px" );
		$( "#" + id ).prev("input").css( "border-bottom-left-radius", "30px 30px" );
		$( "#" + id ).prev("input").css( "border-bottom-right-radius", "30px 30px" );
	}
}

$( "input" ).focus(function() {
$( this ).css( "box-shadow", "0px 0px 15px #362833" );

if ( $(this).attr("class") == "dropdown" ) {
	$( this ).css( "-webkit-border-bottom-left-radius", "0px 30px" );
	$( this ).css( "-webkit-border-bottom-right-radius", "0px 30px" );
	$( this ).css( "-moz-border-radius-bottomleft", "0px 30px" );
	$( this ).css( "-moz-border-radius-bottomright", "0px 30px" );
	$( this ).css( "border-bottom-left-radius", "0px 30px" );
	$( this ).css( "border-bottom-right-radius", "0px 30px" );
	$(this).next( "div" ).css("display", "block");
	open($( this ).next( "div" ).attr( "id" ), 0);
}
});

$( "input" ).blur(function() {
//$( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
if ( $(this).attr("class") == "dropdown" ) {
	close($( this ).next( "div" ).attr( "id" ));
}
$(this).css( "box-shadow", "0px 0px 0px #362833" );
});
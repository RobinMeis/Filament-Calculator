function calc() {
	all_entered = true;
	$( "input" ).each(function( index ) {
		if ($( this ).val() == "" && index != 0) {
			all_entered = false;
		}
	});
	
	if (all_entered == true) {
		$("#value_durchmesser").val($("#value_dichte").val().replace(",","."));
		$("#value_durchmesser").val($("#value_durchmesser").val().replace(",","."));
		$("#value_durchmesser").val($("#value_gewicht").val().replace(",","."));
		$("#value_durchmesser").val($("#value_preis").val().replace(",","."));
	
		volumen = Math.PI * Math.pow(($("#value_durchmesser").val() / 2), 2) * $("#value_laenge").val();
		gewicht = volumen / 1000000000 * $("#value_dichte").val() * 1000;
		preis_pro_gramm = $("#value_preis").val() / $("#value_gewicht").val();
		preis = preis_pro_gramm * gewicht;
	
		$("#calc_volumen").html(volumen.toFixed(2) + " mm&sup3;");
		$("#calc_gewicht").html(gewicht.toFixed(2) + " g");
		$("#calc_preis_pro_gramm").html(preis_pro_gramm + " &euro;");
		$("#calc_preis").html(preis.toFixed(4) + " &euro;");
	}
}

calc();
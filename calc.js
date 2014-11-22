function calc() {
	all_entered = true;
	$( "input" ).each(function( index ) {
		if ($( this ).val() == "" && index != 0) {
			all_entered = false;
		}
	});
	
	if (all_entered == true) {
		volumen = Math.PI * Math.pow(($("#value_durchmesser").val() / 2), 2) * $("#value_laenge").val();
		gewicht = volumen / 1000000000 * $("#value_dichte").val() * 1000;
		preis_pro_gramm = $("#value_preis").val() / $("#value_gewicht").val();
		preis = preis_pro_gramm * gewicht;
	
		$("#calc_volumen").text(volumen.toFixed(2) + " mm&sup3;");
		$("#calc_gewicht").text(gewicht.toFixed(2) + " g");
		$("#calc_preis_pro_gramm").text(preis_pro_gramm + " &euro;");
		$("#calc_preis").text(preis.toFixed(4) + " &euro;");
	}
}
var m = jQuery.noConflict();
m(document).ready(function(){
	//alert("document ready");
});
//Sending data with GET method
m("#log-btnget").click(function(){
	var params = m("form#log-form").serialize();
	//alert("campos dentro de la variable : "+params);
	m.ajax({
				//type: "POST",
				url: "http://sitiowebdeprueba.dx.am/phonegap/acceso.php",
				//url: "acceso.php",
				dataType:'jsonp',
				data: params,
				statusCode: {
					404: function() {
						alert("page not found");
					}
				},
				success: function(respuesta){
					console.log(respuesta);
					m.each(respuesta,function(id,dt){
						console.log(id +':'+dt);
						m("#log-form").after(id +':'+dt+"</br>");
					});
				}
			});
});
//Sending data with POST method
m("#log-btnpost").click(function(){
	var fdata = m("form#log-form").serialize();
	var sending = m.post('http://sitiowebdeprueba.dx.am/phonegap/acceso.php',fdata,function(data){
		console.log(data);
		if (sending=="f") {
			m.mobile.changePage("#pagina2",{transition:'slide'});
		}else{
			m.mobile.changePage("#pageError",{transition:'pop'});
		}
	}); 
	
});
	

var m = jQuery.noConflict();
m(document).ready(function(){
});
m("#log-btn").click(function(){
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
	

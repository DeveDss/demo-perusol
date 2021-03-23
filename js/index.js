let botonmsn1=document.querySelector('.boton-msn1');
botonmsn1.addEventListener('click',function(){
	window.open('https://api.whatsapp.com/send?phone=+51979735996&text=Hola%20Perusol%20,%20estoy%20interesado%20en%20un%20Sistema%20de%20Riego%20Solar', '_blank');
})
document.querySelector('.scrool1').addEventListener('click',function(){
	document.querySelector('#prooyectos').scrollIntoView({
		behavior: 'smooth'
	});
});
document.querySelector('.scrool2').addEventListener('click',function(){
	document.querySelector('#seervicios').scrollIntoView({
		behavior: 'smooth'
	});
});
document.querySelector('.scrool3').addEventListener('click',function(){
	document.querySelector('#infoo').scrollIntoView({
		behavior: 'smooth'
	});
});
document.querySelector('.scrool4').addEventListener('click',function(){
	document.querySelector('#ubicaacion').scrollIntoView({
		behavior: 'smooth'
	});
});
document.querySelector('.scrool5').addEventListener('click',function(){
	document.querySelector('#gaaleria').scrollIntoView({
		behavior: 'smooth'
	});
});
document.querySelector('.scrool6').addEventListener('click',function(){
	window.scrollTo({ top: 1000000000000, behavior: 'smooth' });
});
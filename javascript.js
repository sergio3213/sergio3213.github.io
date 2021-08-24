$(document).ready(function(){
	cont=1;
	$("#div-seta-direita").click(function(){
		if(cont==1){
			$("#sub-sub-div-carosel").animate({'right':"27em"},500);
			cont=cont+1;
		}else
		
		if(cont==2){
			
			$("#sub-sub-div-carosel").animate({'right':"54em"},500);
		}else
		
		if(cont==3){
			$("#sub-sub-div-carosel").animate({'right':"25em"},500);
		}
		
		
	});
})

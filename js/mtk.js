

/*0元免费试听  模态框*/
;$(function(){
		$(".ymfst").click(function(){
			$(".model").fadeIn();
			$(".mask").fadeIn();
			showModel();
	
			$(window).resize(function(){
				showModel();
			});
		});
		function showModel(){
			
			var vW=$(window).width();
			var vH=$(window).height();
			var mW=$(".model").outerWidth();
			var mH=$(".model").outerHeight();
			$(".model").css({'left':(vW-mW)/2+"px",'top':(vH-mH)/2+"px"});
		}
		$(".close").click(function(){
			$(".model").hide();
			$(".mask").hide();
		
		});
		$(".qued").click(function(){
			$(".model").hide();
			$(".mask").hide();
		
		});
		$(document).keydown(function(e){
			if(e.keyCode==27){
//				$(".model").hide();
//				$(".mask").hide();
				$(".close").trigger("click");

			}
		});

	});

/*免费预约  模态框*/
$(function(){
	$(".open").click(function(){
		$(".xinxi").fadeIn();
		$(".zhezc").fadeIn();
		showModel();
		
		$(window).resize(function(){
			showModel();
		});
	});
	function showModel(){
		var vW=$(window).width();
		var vH=$(window).height();
		var mW=$(".xinxi").outerWidth();
		var mH=$(".xinxi").outerHeight();
		$(".xinxi").css({'left':(vW-mW)/2+"px",'top':(vH-mH)/2+"px"});
		}
		$(".gb").click(function(){
			$(".xinxi").hide();
			$(".zhezc").hide();
			
		});
			
			
});

$(function(){	
	$(".erwm img").hide();
	$(".wxh").mouseover(function(){
		$(".erwm img").show();
	}).mouseout(function(){
		$(".erwm img").hide();			
	});
});	

//	回到顶部
$(function(){
	$(".gotop").on("click",function(){
		$("body,html").animate({"scrollTop":0},500)	
	});
});
			
					
		













/*选项卡*/
$(".ul_father li").mouseover(function() {
	$(this).css({
		"background": "#ff000e",
		"color": "white"
	}).siblings().css({
		"background": "white",
		"color": "#ff000e"
	});
	$(".sub").hide().eq($(this).index()).show();
});



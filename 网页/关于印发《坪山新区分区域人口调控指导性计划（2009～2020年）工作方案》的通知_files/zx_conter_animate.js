$(document).ready(function(){
	// ��������������Ԫ�ص���ͣ����Ч��	
	$(".list_name").each(function(i){
		$(this).hover(function(){
			$(this).addClass("hover");
			$(this).find(".xx_con").fadeIn();
			},function(){
			 $(this).find(".xx_con").stop(true);
			$(this).find(".xx_con").fadeOut();
			$(this).removeClass("hover");
		});
	});
	$(".more").click(function(){
		 $(".conter").css({height:'auto'});
		 $(".more").hide();
		});
	$(".app_more").click(function(){
		 $(".applist").css({height:'auto'});
		 $(".app_more").hide();
		});
    $("#sr").click(function(){
        $("#tc").toggle();
    });
	var sFocus=$("#sr").is(":focus"); 
	var tFocus=$("#tc").is(":focus");
	
	$(document).mouseup(function(e){
	  var _con = $("#tc");   
	  if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
		$("#tc").hide();
  }
});

$('.inactive').click(function(){
if($(this).is(".inactive")){
			
	if($(this).is(".slidermenu")){
		$(this).removeClass("slidermenu");
		
		}
	else{$(this).addClass("slidermenu");
			}
	}
		if($(this).siblings('ul').css('display')=='none'){
			$(this).parent('li').siblings('li').removeClass('inactives');
			$(this).addClass('inactives');
			$(this).siblings('ul').slideDown(100).children('li');
			
		}else{
			//����������+��
			$(this).removeClass('inactives');
			//��������˵����Ӳ˵�����
			$(this).siblings('ul').slideUp(100);
			//���������Ӳ˵����+��
			$(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
			//��������˵����Ӳ˵�����
			$(this).siblings('ul').children('li').children('ul').slideUp(100);

			//����ͬ���˵�ֻ����һ����չ���ģ�-����ʾ��
			$(this).siblings('ul').children('li').children('a').removeClass('inactives');
		}
	})





		$(".font a").eq(0).click(function(){
			$(".news_cont_d_wrap").css("font-size","18px");
					$(".news_cont_d_wrap div").css("font-size","18px");
					$(".news_cont_d_wrap p").css("font-size","18px");
					$(".news_cont_d_wrap span").css("font-size","18px");
				
		});
		$(".font a").eq(1).click(function(){
			$(".news_cont_d_wrap").css("font-size","16px");
					$(".news_cont_d_wrap div").css("font-size","14px");
					$(".news_cont_d_wrap p").css("font-size","14px");
					$(".news_cont_d_wrap span").css("font-size","14px");
					
		});
		$(".font a").eq(2).click(function(){
			$(".news_cont_d_wrap").css("font-size","12px");
					$(".news_cont_d_wrap div").css("font-size","12px");
					$(".news_cont_d_wrap p").css("font-size","12px");
					$(".news_cont_d_wrap span").css("font-size","12px");
					
		});

$(".color a").click(function(){
	var bgcolor=$(this).css("background-color");
	$(".news_cont_d_wrap").css("background-color",bgcolor)
	});

slide("#sliderNav", 0, -252, 500);
	
});



function slide(navigation_id, pad_out, pad_in, time){

	// ����Ŀ��·��
	var list_elements = navigation_id + " li.sliderTag";
	var link_elements = list_elements + " a";

	// ��������������Ԫ�ص���ͣ����Ч��	
	$(link_elements).each(function(i){
		$(this).hover(function(){
			if($(this).is(".slidermenu")){
				}
			else{
				$(this).animate({ left: pad_out }, time);}
			
		},function(){
			if($(this).is(".slidermenu")){
				
				}
			else{
			 $(this).stop(true);
			$(this).animate({ left: pad_in }, time);}
		});
	});

}

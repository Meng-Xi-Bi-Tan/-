// JavaScript Document
//大：20px  中：16px  小：12px
$(function(){
    var iBig=20;
	var iMid=16;
	var iSmall=12;
	$('#fontBig').click(function(){
		$('.txtCon').css({fontSize:iBig+'px',lineHeight:'36px'});						 
	})
	$('#fontMid').click(function(){
		$('.txtCon').css({fontSize:iMid+'px',lineHeight:'30px'});						 
	})
	$('#fontSmall').click(function(){
		$('.txtCon').css({fontSize:iSmall+'px',lineHeight:'24px'});						 
	})
});
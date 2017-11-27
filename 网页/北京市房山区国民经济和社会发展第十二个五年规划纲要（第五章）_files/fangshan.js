// JavaScript Document
//日期代码
function writeDateInfo()
{
        var day="";
        var month="";
        var ampm="";
        var ampmhour="";
        var year="";
        mydate=new Date();
        mymonth=mydate.getMonth()+1;
        myday= mydate.getDate();
        myyear= mydate.getYear();
        year=(myyear > 200) ? myyear : 1900 + myyear;
        document.write(year+'年'+mymonth+'月'+myday+'日');
} 

//选项卡切换
function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var tmo=document.getElementById("bmore"+m).getElementsByTagName("strong");
 var mli=document.getElementById("main"+m).getElementsByTagName("ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover":"";
  mli[i].style.display=i==n?"block":"none";
  tmo[i].className=i==n?"current02":"";
 }
}

//二维码弹出效果
function erweima()
{
	var oEwmMin  = document.getElementById('ewm_min');
	var oEwmMax  = document.getElementById('ewm_max');
	oEwmMin.onmouseover = function ()
	{
		oEwmMax.style.display = 'block';
	};
	oEwmMin.onmouseout = function ()
	{
		oEwmMax.style.display = 'none';
	};
}


$(function(){
  $.ajax({
      url : 'http://www.beijing.gov.cn/sy/hsyj/pushAlarm_5926.jsonp',
      dataType : "jsonp",
      scriptCharset:'gb2312',
      jsonp : "pushInfoJsonpCallBack",
      jsonpCallback:"pushInfoJsonpCallBack",
      success : function(data) {
        if(data.length<1){
          $("#hsyjxx").css('display','none'); 
        }else{
        $.each(data,function(i,json){
        $("#hsyjxx").append('<ul class="left">'+json.title+'</ul>');
        $("#hsyjxx").append('<ul class="content"><a href="'+json.link+'" target="_blank">'+json.content+'</a></ul>');
        $("#hsyjxx").append('<ul class="gb"><img src="http://www.beijing.gov.cn/images/wza2010/index/hsyjxx_gb_20150415.jpg" width="18" height="55" title="关闭红色预警信息" alt="关闭红色预警信息" class="close" ></ul>');
        $("#hsyjxx").find(".close").bind("click", function (){
          $("#hsyjxx").css('display','none'); 
        });
          
        })
        }
      },
       error:function(){
               alert('fail');
        }
    });
  //红色预警信息关闭
  })

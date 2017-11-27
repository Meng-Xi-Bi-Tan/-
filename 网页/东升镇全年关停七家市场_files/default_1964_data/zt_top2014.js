//----------------------------------------------------------------------
//@files:	首都之窗专题头部输出js文件
//@brief: 	专题公用头部输出
//@author:	wangying
//@date:	2014/05/22
//----------------------------------------------------------------------
function checkForm(){
	var temp = searchForm.temp.value;
	var database = searchForm.database.value;
	if(temp==null || temp==""){
		alert("请输入搜索条件");
	}
	else{
		var url="http://so.beijing.gov.cn/Query?qt="+encodeURIComponent(temp)+"&database="+encodeURIComponent(database);
		window.open(url);
	}
	return false;

}
document.writeln("<link type=\"text/css\" rel=\"stylesheet\" href=\"http://www.beijing.gov.cn/images/jspic/headerfooter.css\" IGNOREAPD=\"1\" />");
document.writeln("<style>#top_bg { margin:0 auto; width:100%; height:45px; background: url(http://www.beijing.gov.cn/images/jspic/top_bg.gif) repeat-x left top;}#top { margin:0 auto; width:1002px; height:42px; background: url(http://www.beijing.gov.cn/images/jspic/top_bg.gif) repeat-x left top; line-height:41px; padding-top:3px; }.top_home { float:left; width:140px; padding-left:60px; background:url(http://www.beijing.gov.cn/images/jspic/logo.gif) no-repeat 13px 4px; }.top_home li{ font-size:12px; color:#000000;line-height:41px!important; }.searchul { float:left; width:300px; height:34px; }.searchul li { float:left; padding-top:7px; height:27px; line-height:27px; }*+.search li { padding-top:0px;}.keyworddefault { border:#c1c1c1 1px solid; width:200px; height:25px; padding-left:5px; line-height:25px; font-size:12px; color:#000000; }*+li.searchbtn { padding-top:7px; }.top_nav { float:right; width:320px; }.top_nav li { float:left; background:url(http://www.beijing.gov.cn/images/jspic/line.gif) no-repeat left center; padding:0px 10px;line-height:41px!important; font-size:12px; color:#000000; }.top_nav .notopbg { background:none; }</style>");
document.writeln("<div id=\"top_bg\"><div id=\"top\"><ul class=\"top_home\">");
document.writeln("      <li><a href=\"http://www.beijing.gov.cn/\" target=\"_blank\" title=\"返回首都之窗首页\">返回首都之窗首页</a></li></ul>");
document.writeln("    <ul class=\"searchul\"><form name=\"searchForm\" method=\"get\" id=\"search\" action=\"\" target=\"_blank\" onSubmit=\"return checkForm()\"><input name=\"database\" type=\"hidden\" id=\"database\" value=\"bj\"/>");
document.writeln("    <li><input name=\"temp\" id=\"keyword\" type=\"text\" value=\"\" class=\"keyworddefault\" title=\"全文搜索关键字\" /></li>");
document.writeln("    <li class=\"searchbtn\"><input name=\"image23\" value=\"搜索\" id=\"searchbutton\" type=\"image\" src=\"http://www.beijing.gov.cn/images/jspic/search_btn.gif\" width=\"62\" height=\"27\" title=\"点击搜索\" alt=\"搜索\" /></li></form></ul><ul class=\"top_nav\">");
document.writeln("      <li class=\"notopbg\"><a href=\"http://www.beijing.gov.cn/\" target=\"_blank\" title=\"首页\">首页</a></li>");
document.writeln("      <li><a href=\"http://zhengwu.beijing.gov.cn/\" target=\"_blank\" title=\"政务信息\">政务信息</a></li>");
document.writeln("      <li><a href=\"http://hudong.beijing.gov.cn/\" target=\"_blank\" title=\"政民互动\">政民互动</a></li>");
document.writeln("      <li><a href=\"http://banshi.beijing.gov.cn/\" target=\"_blank\" title=\"政务服务\">政务服务</a></li>");
document.writeln("      <li><a href=\"http://renwen.beijing.gov.cn/\" target=\"_blank\" title=\"人文北京\">人文北京</a></li>");
document.writeln("</ul></div></div>");

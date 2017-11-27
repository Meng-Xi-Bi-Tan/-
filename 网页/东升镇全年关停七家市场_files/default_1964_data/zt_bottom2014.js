//----------------------------------------------------------------------
//@files:	首都之窗专题尾部输出js文件
//@brief: 	专题公用尾部输出
//@author:	wangying
//@date:	2014/05/22
//----------------------------------------------------------------------
document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"http://www.beijing.gov.cn/images/jspic/headerfooter.css\" IGNOREAPD=\"1\" />");
document.write("<style>.dzjgbox{ position:absolute; left:45px; top:20px; width:80px; height:80px;}</style>");
document.write("<div id=\"footer\" style=\"position:relative;\"><ul>");
document.write("    <li class=\"noseparator\"><a href=\"http://www.beijing.gov.cn/zdxx/t1430933.htm\" title=\"关于我们\" target=\"_blank\">关于我们</a></li><li><a href=\"http://www.beijing.gov.cn/zdxx/zddt/\" title=\"站点地图\" target=\"_blank\">站点地图</a></li><li><a href=\"http://www.beijing.gov.cn/zdxx/t709204.htm\" title=\"法律声明\" target=\"_blank\">法律声明</a></li>");
document.write("  </ul><div class=\"footerinfo\"> <span>主办：北京市人民政府 版权所有</span><span>承办：北京市经济和信息化委员会</span> <span><a href=\"http://www.miibeian.gov.cn/\" title=\"京ICP备05060933号\" target=\"_blank\">京ICP备05060933号</a></span> <span>运行管理：首都之窗运行管理中心</span><br /><span>京公网安备 110105000722</span> <span>地址：北京市朝阳区北辰西路数字北京大厦南八层</span> <span>传真：84371700</span><br/><span style=\"color:#999999\">最佳浏览效果建议使用IE10以上版本或其他浏览器</span> </div>");
document.write("<div class=\"dzjgbox\"><script type=\"text/javascript\">document.write(unescape(\"%3Cspan id=\'_ideConac\' %3E%3C/span%3E%3Cscript src=\'http://dcs.conac.cn/js/01/000/0000/60429971/CA010000000604299710004.js\' type=\'text/javascript\'%3E%3C/script%3E\"));</script></div>");

document.write("<script ignoreapd='1' type='text/javascript' src='http://static.gridsumdissector.com/js/Clients/GWD-800003-C99186/gs.js'></script>");
document.write(unescape("%3Cscript id='tr_statobj' src='http://yhfx.beijing.gov.cn/webdig.js?z=12' type='text/javascript'%3E%3C/script%3E"));

var obj=document.getElementById("tr_statobj");
if(window.ActiveXObject){
	run();
}
else
	document.write(unescape("%3Cscript type='text/javascript'%3E wd_paramtracker('_wdxid=000000000000000000000000000000000000000000');%3C/script%3E"));

function run(){
	if(obj.readyState=='complete'){
		wd_paramtracker('_wdxid=000000000000000000000000000000000000000000');
	}
	else{
		window.setTimeout(run,50);
	}
}
//----------------------------------------------------------------------
//@files:	�׶�֮��ר��β�����js�ļ�
//@brief: 	ר�⹫��β�����
//@author:	wangying
//@date:	2014/05/22
//----------------------------------------------------------------------
document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"http://www.beijing.gov.cn/images/jspic/headerfooter.css\" IGNOREAPD=\"1\" />");
document.write("<style>.dzjgbox{ position:absolute; left:45px; top:20px; width:80px; height:80px;}</style>");
document.write("<div id=\"footer\" style=\"position:relative;\"><ul>");
document.write("    <li class=\"noseparator\"><a href=\"http://www.beijing.gov.cn/zdxx/t1430933.htm\" title=\"��������\" target=\"_blank\">��������</a></li><li><a href=\"http://www.beijing.gov.cn/zdxx/zddt/\" title=\"վ���ͼ\" target=\"_blank\">վ���ͼ</a></li><li><a href=\"http://www.beijing.gov.cn/zdxx/t709204.htm\" title=\"��������\" target=\"_blank\">��������</a></li>");
document.write("  </ul><div class=\"footerinfo\"> <span>���죺�������������� ��Ȩ����</span><span>�а죺�����о��ú���Ϣ��ίԱ��</span> <span><a href=\"http://www.miibeian.gov.cn/\" title=\"��ICP��05060933��\" target=\"_blank\">��ICP��05060933��</a></span> <span>���й����׶�֮�����й�������</span><br /><span>���������� 110105000722</span> <span>��ַ�������г�����������·���ֱ��������ϰ˲�</span> <span>���棺84371700</span><br/><span style=\"color:#999999\">������Ч������ʹ��IE10���ϰ汾�����������</span> </div>");
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
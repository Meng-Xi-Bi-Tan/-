//导航变化、子导航显示
function navshow(){
	var mainnav = document.getElementById("mainnav");
	var ali = mainnav.getElementsByTagName("li");
	for (i = 0; i < ali.length; i++) {
		ali[i].onmouseover = function () {
			this.getElementsByTagName("a")[0].className = "mainnav_cur";
			if(this.getElementsByTagName("div")[0])
			{
				this.getElementsByTagName("div")[0].style.display="block";
			}
		};
		ali[i].onmouseout = function () {
			this.getElementsByTagName("a")[0].className = "";
			if(this.getElementsByTagName("div")[0])
			{
				this.getElementsByTagName("div")[0].style.display="none";
			}
		};
	}
}

//日期
today=new Date();
function initArray(){
this.length=initArray.arguments.length
for(var i=0;i<this.length;i++)
this[i+1]=initArray.arguments[i]  }
var d=new initArray("星期日","星期一","星期二","星期三","星期四","星期五","星期六");

//加入收藏
function addFavorite()
{
  if (document.all)
    {
       window.external.addFavorite('http://www.bjghw.gov.cn/','北京市规划委员会');
    }
    else if (window.sidebar)
    {
       window.sidebar.addPanel('北京市规划委员会', 'http://www.bjghw.gov.cn/', "");
    }
}

//设为首页
function setHomePage()
{
	if (document.all)
    {
        document.body.style.behavior='url(#default#homepage)';
        document.body.setHomePage('http://www.bjghw.gov.cn/');
    }
    else if (window.sidebar)
    {
		if(window.netscape)
		{
			try
			{ 
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
			} 
			catch (e) 
			{ 
				alert( "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true" ); 
			}
		}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage','http://www.bjghw.gov.cn/');
	}
}
//头文件htm
var content1 = '<script src="../../../../styles/swfobject_modified.js" type="text/javascript"></script>'
+'<table border="0" align="center" cellpadding="0" cellspacing="0" class="table"><tr><td class="header">';
var content2 = '</td>'
+'<td align="right" class="header font_blue"><a href="javascript:void(0)" onclick="setHomePage()">设为首页</a>&nbsp;|&nbsp;<a href="javascript:void(0)" onclick="addFavorite()">加入收藏</a>&nbsp;|&nbsp;<a href="#">邮件订阅</a></td>'
+'</tr>'
+'</table>'
+'<table border="0" align="center" cellpadding="0" cellspacing="0" class="table">'
+'<tr>'
+'<td><object id="FlashID" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="960" height="141">'
+'<param name="movie" value="../../../../images/substation/changping/images/banner.swf" />'
+'<param name="quality" value="high" />'
+'<param name="wmode" value="opaque" />'
+'<param name="swfversion" value="9.0.45.0" />'
+'<!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 -->'
+'<param name="expressinstall" value="../../../../styles/expressInstall.swf" />'
+'<!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 -->'
+'<!--[if !IE]>-->'
+'<object type="application/x-shockwave-flash" data="../../../../images/substation/changping/images/banner.swf" width="960" height="141">'
+'<!--<![endif]-->'
+'<param name="quality" value="high" />'
+'<param name="wmode" value="opaque" />'
+'<param name="swfversion" value="9.0.45.0" />'
+'<param name="expressinstall" value="../../../../styles/expressInstall.swf" />'
+'<!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 -->'
+'<div>'
+'<h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4>'
+'<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" /></a></p>'
+'</div>'
+'<!--[if !IE]>-->'
+'</object>'
+'<!--<![endif]-->'
+'</object></td>'
+'</tr>'
+'</table>'
+'<script type="text/javascript">'
+'swfobject.registerObject("FlashID");'
+'</script>'
+'<table border="0" cellpadding="0" cellspacing="0" class="table">'
+'<tr>'
+'<td width="636" class="nav"><table border="0" cellspacing="0" cellpadding="0">'
+'<tr>'
+'<td><a href="http://shy.bjghw.gov.cn/web/static/catalogs/catalog_fj_cp/fj_cp.html" target="_top" alt="首页">首　 页</a></td>'
+'<td><a href="http://shy.bjghw.gov.cn/web/static/catalogs/catalog_170000/170000.html" target="_top" alt="政务信息">政务信息</a></td>'
+'<td><a href="http://shy.bjghw.gov.cn/web/static/catalogs/catalog_170100/170100.html" target="_top" alt="公共服务">公共服务</a></td>'
+'<td><a href="http://shy.bjghw.gov.cn/web/static/catalogs/catalog_170200/170200.html" target="_top" alt="公众参与">公众参与</a></td>'
+'<td><a href="http://shy.bjghw.gov.cn/web/static/catalogs/catalog_170300/170300.html" target="_top" alt="政策法规">政策法规</a></td>'
+'<td><a href="http://www.bjchp.gov.cn/publish/portal0/tab88/" target="_blank" alt="昌平特色">昌平特色</a></td>'
+'</tr>'
+'</table></td>'
+'<td width="336" align="center" class="nav"><table border="0" cellspacing="0" cellpadding="0">'
+'<form id="form1" name="form1" method="post" action="">'
+'<tr>'
+'<td><img src="../../../../images/substation/changping/images/pic_005.gif" width="36" height="36" /></td>'
+'<td><input type="text" name="textfield" id="textfield" style="width:150px; height:18px; border:#D2D0D0 1px solid;" /></td>'
+'<td width="100" align="center"><input type="image" name="imageField" id="imageField" src="../../../../images/substation/changping/images/pic_006.gif" />'
+'</td>'
+'</tr>'
+'</form>'
+'</table></td>'
+'</tr>'
+'</table>'
+'<table border="0" cellpadding="0" cellspacing="0" class="table">'
+'<tr>'
+'<td class="nav_bg"><img src="../../../../images/substation/changping/images/pic_004.gif" width="4" height="5" /></td>'
+'</tr>'
+'</table>';
document.write(content1,today.getFullYear(),"年",today.getMonth()+1,"月",today.getDate(),"日  ",d[today.getDay()+1],content2); 
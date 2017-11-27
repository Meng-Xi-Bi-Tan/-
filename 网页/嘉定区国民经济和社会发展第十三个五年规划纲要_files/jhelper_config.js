//------------------------------------------------------------------------------------
//无障碍快捷键及工具条调用JS
//Version：V1.0
//Author：ivan
//Date：2013-07-31
//------------------------------------------------------------------------------------

function declareConfig() {
	JHelperConfig = new Object();
	//定义网页body里面最外层DIV ID
	JHelperConfig.mainBox = "container";

	//无障碍操作说明链接地址
	JHelperConfig.wzaHelp = "http://www.shgrain.gov.cn/foodnet/website/czsm.html";

	// 以下是网页区域标识，快捷键导航时使用
	// 无障碍操作说明ID//读屏软件语音接口：已定位到无障碍帮助
	JHelperConfig.AccessHelp = 'accesshelp';
	JHelperConfig.AccessHelpTitle = "已定位到无障碍帮助";

	//主导航区ID//读屏软件语音接口：已定位到网站导航
	JHelperConfig.MainNavigation = 'accessNull';
	JHelperConfig.MainNavigationTitle = "本网站无此快捷键";

	//中国上海服务引导区//读屏软件语音接口：已跳转到网站服务引导区
	JHelperConfig.HeaderGuide = 'accessNull';
	JHelperConfig.HeaderGuideTitle = "本网站无此快捷键";

	//主要内容区ID//读屏软件语音接口：已跳转到主要内容区
	JHelperConfig.MainContent = 'main';
	JHelperConfig.MainContentTitle = "已跳转到主要内容区";

	//网站地图区ID//读屏软件语音接口：已跳转到网站地图
	JHelperConfig.SiteMap = 'accessNull';
	JHelperConfig.SiteMapTitle = "本网站无此快捷键";

	//搜索区ID//读屏软件语音接口：已跳转到搜索区域
	JHelperConfig.SearchForm = 'search';
	JHelperConfig.SearchFormTitle = "本网站无此快捷键";

	//头部内容区ID//读屏软件语音接口：已跳转到头部内容区域
	JHelperConfig.HeadContent = 'header';
	JHelperConfig.HeadContentTitle = "已跳转到头部内容区域";

	//底部内容区ID//读屏软件语音接口：已跳转到底部内容区域
	JHelperConfig.BottomContent = 'footer';
	JHelperConfig.BottomContentTitle = "已跳转到底部内容区域";

	//网页左栏区ID//读屏软件语音接口：已跳转网页左栏区域
	JHelperConfig.LeftContent = 'upsidebar';
	JHelperConfig.LeftContentTitle = "已跳转网页左栏区域";

	//网页中间区ID//读屏软件语音接口：已跳转到中间结构区域
	JHelperConfig.MiddleContent = 'downsidebar';
	JHelperConfig.MiddleContentTitle = "已跳转网页左栏区域";

	//网页右栏区ID//读屏软件语音接口：已跳转到网页右栏区域
	JHelperConfig.RightContent = 'accessNull';
	JHelperConfig.RightContentTitle = "本网站无此快捷键";

	//栏目分组标记 H2 或 H3 或 H4
	JHelperConfig.GroupTagNameH2 = 'H2';
	JHelperConfig.GroupTagNameH3 = 'H3';
	JHelperConfig.GroupTagNameH4 = 'H4';
}
//------------------------------------------------------------------------------------
//���ϰ���ݼ�������������JS
//Version��V1.0
//Author��ivan
//Date��2013-07-31
//------------------------------------------------------------------------------------

function declareConfig() {
	JHelperConfig = new Object();
	//������ҳbody���������DIV ID
	JHelperConfig.mainBox = "container";

	//���ϰ�����˵�����ӵ�ַ
	JHelperConfig.wzaHelp = "http://www.shgrain.gov.cn/foodnet/website/czsm.html";

	// ��������ҳ�����ʶ����ݼ�����ʱʹ��
	// ���ϰ�����˵��ID//������������ӿڣ��Ѷ�λ�����ϰ�����
	JHelperConfig.AccessHelp = 'accesshelp';
	JHelperConfig.AccessHelpTitle = "�Ѷ�λ�����ϰ�����";

	//��������ID//������������ӿڣ��Ѷ�λ����վ����
	JHelperConfig.MainNavigation = 'accessNull';
	JHelperConfig.MainNavigationTitle = "����վ�޴˿�ݼ�";

	//�й��Ϻ�����������//������������ӿڣ�����ת����վ����������
	JHelperConfig.HeaderGuide = 'accessNull';
	JHelperConfig.HeaderGuideTitle = "����վ�޴˿�ݼ�";

	//��Ҫ������ID//������������ӿڣ�����ת����Ҫ������
	JHelperConfig.MainContent = 'main';
	JHelperConfig.MainContentTitle = "����ת����Ҫ������";

	//��վ��ͼ��ID//������������ӿڣ�����ת����վ��ͼ
	JHelperConfig.SiteMap = 'accessNull';
	JHelperConfig.SiteMapTitle = "����վ�޴˿�ݼ�";

	//������ID//������������ӿڣ�����ת����������
	JHelperConfig.SearchForm = 'search';
	JHelperConfig.SearchFormTitle = "����վ�޴˿�ݼ�";

	//ͷ��������ID//������������ӿڣ�����ת��ͷ����������
	JHelperConfig.HeadContent = 'header';
	JHelperConfig.HeadContentTitle = "����ת��ͷ����������";

	//�ײ�������ID//������������ӿڣ�����ת���ײ���������
	JHelperConfig.BottomContent = 'footer';
	JHelperConfig.BottomContentTitle = "����ת���ײ���������";

	//��ҳ������ID//������������ӿڣ�����ת��ҳ��������
	JHelperConfig.LeftContent = 'upsidebar';
	JHelperConfig.LeftContentTitle = "����ת��ҳ��������";

	//��ҳ�м���ID//������������ӿڣ�����ת���м�ṹ����
	JHelperConfig.MiddleContent = 'downsidebar';
	JHelperConfig.MiddleContentTitle = "����ת��ҳ��������";

	//��ҳ������ID//������������ӿڣ�����ת����ҳ��������
	JHelperConfig.RightContent = 'accessNull';
	JHelperConfig.RightContentTitle = "����վ�޴˿�ݼ�";

	//��Ŀ������ H2 �� H3 �� H4
	JHelperConfig.GroupTagNameH2 = 'H2';
	JHelperConfig.GroupTagNameH3 = 'H3';
	JHelperConfig.GroupTagNameH4 = 'H4';
}
//书签
function showtab(m,n,count){
if(m==1){
		for(var i=1;i<=count;i++){
		if (i==n){			
			getObject('tab_'+m+'_'+i).style.display='';
			getObject('td_'+m+'_'+i).className="menu_cur";
			}
		else {
			getObject('tab_'+m+'_'+i).style.display='none';
			getObject('td_'+m+'_'+i).className="menu";
			}
	}
}
if(m==2){
		for(var i=1;i<=count;i++){
		if (i==n){			
			getObject('tab_'+m+'_'+i).style.display='';
			getObject('td_'+m+'_'+i).className="menu2_cur";
			}
		else {
			getObject('tab_'+m+'_'+i).style.display='none';
			getObject('td_'+m+'_'+i).className="menu2";
			}
	}
}
}
function getObject(objectId) {
    if(document.getElementById && document.getElementById(objectId)) {
	// W3C DOM
	return document.getElementById(objectId);
    } else if (document.all && document.all(objectId)) {
	// MSIE 4 DOM
	return document.all(objectId);
    } else if (document.layers && document.layers[objectId]) {
	// NN 4 DOM.. note: this won't find nested layers
	return document.layers[objectId];
    } else {
	return false;
    }
} // getObject




//图片变换
var cpAD=new Array(); 
var cpADlink=new Array(); 
var Textc=new Array(); 
var adNum=5; //定义了5个数组
var theTimer;
 
cpAD[0]='images/temp_002.gif'; //链接图片
cpADlink[0]='#'; //链接URL
Textc[0]='昌平十三陵项目...1';
 
cpAD[1]='images/temp_001.gif'; 
cpADlink[1]='#'; 
Textc[1]='昌平十三陵项目...2';

cpAD[2]='images/temp_002.gif'; 
cpADlink[2]='#'; 
Textc[2]='昌平十三陵项目...3';

cpAD[3]='images/temp_001.gif'; 
cpADlink[3]='#'; 
Textc[3]='昌平十三陵项目...4';

cpAD[4]='images/temp_002.gif'; 
cpADlink[4]='#'; 
Textc[4]='昌平十三陵项目...5';

var preloadedimages=new Array(); 
for (i=1;i<cpAD.length;i++){ 
preloadedimages[i]=new Image(); 
preloadedimages[i].src=cpAD[i];
} 
 
//跳转的URL地址
function jump2url()
{ 
jumpUrl=cpADlink[adNum]; 
jumpTarget=''; 
if (jumpUrl != '')
{ 
if (jumpTarget != '')
window.open(jumpUrl,jumpTarget); 
else location.href=jumpUrl; 
} 
}
 
//图片变化的函数
function clearclass(){
for(i=0;i<cpAD.length;i++){
document.getElementById("img"+i).className="bigoff";
}
}
function changeimg(n)
{
adNum=n;
window.clearInterval(theTimer);
adNum=adNum-1;
nextAd();
}
//当点击时直接跳转
function nextAd(){ 
if(adNum<cpAD.length-1){
adNum++;
}
else {
adNum=0;
}
setTransition(); 
document.images.cpADrush.src=cpAD[adNum]; 
playTransition(); 
//定义了轮换时间 5s
theTimer=setTimeout("nextAd()", 8000); 
document.getElementById("textCon").innerHTML='<a href="'+cpADlink[adNum]+'">'+Textc[adNum]+'</a>';
clearclass();
document.getElementById("img"+adNum).className="bigon";
} 
 
function setTransition(){ 
if (document.all){ 
cpADrush.filters.revealTrans.Transition=23; 
cpADrush.filters.revealTrans.apply(); 
} 
} 
function playTransition(){ 
if (document.all) 
cpADrush.filters.revealTrans.play() 
} 
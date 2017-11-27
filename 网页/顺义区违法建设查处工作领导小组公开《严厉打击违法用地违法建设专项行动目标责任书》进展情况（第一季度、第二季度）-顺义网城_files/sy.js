function search_click(){
document.getElementById ("keywords").value="";
}

function menu(index)
{
for (var i=1;i<=8;i++)
{
document.getElementById ("div_menu"+i).style.display  ="none";
document.getElementById ("menu_"+i).className="";
}
document.getElementById ("div_menu"+index).style.display  ="block";
document.getElementById ("menu_"+index).className="menu_on";
}
function gonggao(index)
{
for (var i=1;i<=5;i++)
{
document.getElementById ("div_gonggao"+i).style.display  ="none";
document.getElementById ("gonggao_"+i).className="";
}
document.getElementById ("div_gonggao"+index).style.display  ="block";
document.getElementById ("gonggao_"+index).className="left_gonggao_tab_on";
}

function dongtai(index)
{
for (var i=1;i<=5;i++)
{
document.getElementById ("div_dongtai"+i).style.display  ="none";
document.getElementById ("dongtai_"+i).className="";
}
document.getElementById ("div_dongtai"+index).style.display  ="block";
document.getElementById ("dongtai_"+index).className="center_dongtai_tab_on";
}

function xinxi(index)
{
for (var i=1;i<=4;i++)
{
document.getElementById ("div_xinxi"+i).style.display  ="none";
document.getElementById ("xinxi_"+i).className="center_news_tab_off";
}
document.getElementById ("div_xinxi"+index).style.display  ="block";
document.getElementById ("xinxi_"+index).className="center_news_tab_on";
}

function gongkai(index)
{
for (var i=1;i<=5;i++)
{
document.getElementById ("div_gongkai"+i).style.display  ="none";
document.getElementById ("gongkai_"+i).className="";
if (i==5){
document.getElementById ("gongkai_5").className="shierwu";
}
}
document.getElementById ("div_gongkai"+index).style.display  ="block";
document.getElementById ("gongkai_"+index).className="left_xxgk_tab_on";
if (index==5){
document.getElementById ("gongkai_5").className="left_xxgk_tab_on_srw";
}
}

function paihang(index)
{
for (var i=1;i<=2;i++)
{
document.getElementById ("div_paihang"+i).style.display  ="none";
document.getElementById ("paihang_"+i).className="fwph_tab_off";
}
document.getElementById ("div_paihang"+index).style.display  ="block";
document.getElementById ("paihang_"+index).className="fwph_tab_on";
}

function lkjj(index)
{
for (var i=1;i<=6;i++)
{
document.getElementById ("div_lkjj"+i).style.display  ="none";
document.getElementById ("lkjj_"+i).className="";
}
document.getElementById ("div_lkjj"+index).style.display  ="block";
document.getElementById ("lkjj_"+index).className="center_lkjj_tab_on";
}

function bsq(index)
{
for (var i=1;i<=5;i++)
{
document.getElementById ("div_bsq"+i).style.display  ="none";
document.getElementById ("bsq_"+i).className="";
}
document.getElementById ("div_bsq"+index).style.display  ="block";
document.getElementById ("bsq_"+index).className="center_bsq_tab_on";
}

function zdgc(index)
{
for (var i=1;i<=5;i++)
{
document.getElementById ("div_zdgc"+i).style.display  ="none";
document.getElementById ("zdgc_"+i).className="";
}
document.getElementById ("div_zdgc"+index).style.display  ="block";
document.getElementById ("zdgc_"+index).className="left_zdgc_title_on";
}

function jzjz(index)
{
for (var i=1;i<=6;i++)
{
document.getElementById ("div_jzjz"+i).style.display  ="none";
document.getElementById ("jzjz_"+i).className="";
}
document.getElementById ("div_jzjz"+index).style.display  ="block";
document.getElementById ("jzjz_"+index).className="left_jzjz_title_on";
}

function zwgg(index)
{
for (var i=1;i<=3;i++)
{
document.getElementById ("div_zwgg"+i).style.display  ="none";
document.getElementById ("zwgg_"+i).className="right_zwgg_title_off";
}
document.getElementById ("div_zwgg"+index).style.display  ="block";
document.getElementById ("zwgg_"+index).className="right_zwgg_title_on";
}


function yzsy(index)
{
for (var i=1;i<=6;i++)
{
document.getElementById ("div_yzsy"+i).style.display  ="none";
document.getElementById ("yzsy_"+i).className="";
}
document.getElementById ("div_yzsy"+index).style.display  ="block";
document.getElementById ("yzsy_"+index).className="left_yzsy_tab_on";
}


function xzxk(index)
{
for (var i=1;i<=3;i++)
{
document.getElementById ("div_xzxk"+i).style.display  ="none";
document.getElementById ("xzxk_"+i).className="left_xzxk_title_tab_off";
}
document.getElementById ("div_xzxk"+index).style.display  ="block";
document.getElementById ("xzxk_"+index).className="left_xzxk_title_tab_on";
}


function zfwj(index)
{
for (var i=1;i<=2;i++)
{
document.getElementById ("div_zfwj"+i).style.display  ="none";
document.getElementById ("zfwj_"+i).className="left_xzxk_title_tab_off";
}
document.getElementById ("div_zfwj"+index).style.display  ="block";
document.getElementById ("zfwj_"+index).className="left_xzxk_title_tab_on";
}


function czxx(index)
{
for (var i=1;i<=3;i++)
{
document.getElementById ("div_czxx"+i).style.display  ="none";
document.getElementById ("czxx_"+i).className="left_xzxk_title_tab_off";
}
document.getElementById ("div_czxx"+index).style.display  ="block";
document.getElementById ("czxx_"+index).className="left_xzxk_title_tab_on";
}


function zcfg(index)
{
for (var i=1;i<=3;i++)
{
document.getElementById ("div_zcfg"+i).style.display  ="none";
document.getElementById ("zcfg_"+i).className="left_xzxk_title_tab_off";
}
document.getElementById ("div_zcfg"+index).style.display  ="block";
document.getElementById ("zcfg_"+index).className="left_xzxk_title_tab_on";
}


function bmzw(index)
{
for (var i=1;i<=3;i++)
{
document.getElementById ("div_bmzw"+i).style.display  ="none";
document.getElementById ("bmzw_"+i).className="left_xzxk_title_tab_off";
}
document.getElementById ("div_bmzw"+index).style.display  ="block";
document.getElementById ("bmzw_"+index).className="left_xzxk_title_tab_on";
}

function cxjs(index)
{
for (var i=1;i<=4;i++)
{
document.getElementById ("div_cxjs"+i).style.display  ="none";
document.getElementById ("cxjs_"+i).className="";
}
document.getElementById ("div_cxjs"+index).style.display  ="block";
document.getElementById ("cxjs_"+index).className="left_cxjs_tab_on";
}


function chaxun(index)
{
for (var i=1;i<=6;i++)
{
document.getElementById ("div_chaxun"+i).style.display  ="none";
document.getElementById ("chaxun_"+i).className="chaxun_tab_off";
}
document.getElementById ("div_chaxun"+index).style.display  ="block";
document.getElementById ("chaxun_"+index).className="chaxun_tab_on";
}



function syqwhhd(index)
{
for (var i=1;i<=3;i++)
{
document.getElementById ("div_syqwhhd"+i).style.display  ="none";
document.getElementById ("syqwhhd_"+i).className="left_whhd_tab_off";
}
document.getElementById ("div_syqwhhd"+index).style.display  ="block";
document.getElementById ("syqwhhd_"+index).className="left_whhd_tab_on";
}



function fwzwhyc(index)
{
for (var i=1;i<=3;i++)
{
document.getElementById ("div_fwzwhyc"+i).style.display  ="none";
document.getElementById ("fwzwhyc_"+i).className="left_whhd_tab_off";
}
document.getElementById ("div_fwzwhyc"+index).style.display  ="block";
document.getElementById ("fwzwhyc_"+index).className="left_whhd_tab_on";
}

function tab96156(index)
{
for (var i=1;i<=5;i++)
{
document.getElementById ("div_tab96156_"+i).style.display  ="none";
document.getElementById ("tab96156_"+i).className="tab96156_off";
}
document.getElementById ("div_tab96156_"+index).style.display  ="block";
document.getElementById ("tab96156_"+index).className="tab96156_on";
}


function smsh_tab(index)
{
for (var i=1;i<=4;i++)
{
document.getElementById ("div_smsh_tab_"+i).style.display  ="none";
document.getElementById ("smsh_tab_"+i).className="smsh_tab_off";
}
document.getElementById ("div_smsh_tab_"+index).style.display  ="block";
document.getElementById ("smsh_tab_"+index).className="smsh_tab_on";
}

function search_tab(index)
{
for (var i=1;i<=2;i++)
{
document.getElementById ("div_search_"+i).style.display  ="none";
document.getElementById ("search_tab_"+i).className="sycx_tab_off";
}
document.getElementById ("div_search_"+index).style.display  ="block";
document.getElementById ("search_tab_"+index).className="sycx_tab_on";
}

function jyjg(index)
{
for (var i=1;i<=8;i++)
{
document.getElementById ("div_jyjg"+i).style.display  ="none";
document.getElementById ("jyjg_"+i).className="jyjg_tab";
}
document.getElementById ("div_jyjg"+index).style.display  ="block";
document.getElementById ("jyjg_"+index).className="jyjg_tab_select";
}


function xgzc(index)
{
for (var i=1;i<=2;i++)
{
document.getElementById ("div_xgzc"+i).style.display  ="none";
document.getElementById ("xgzc_"+i).className="jyxgzc_tab";
}
document.getElementById ("div_xgzc"+index).style.display  ="block";
document.getElementById ("xgzc_"+index).className="jyxgzc_tab_select";
}

function shbz(index)
{
for (var i=1;i<=6;i++)
{
document.getElementById ("div_shbz"+i).style.display  ="none";
document.getElementById ("shbz_"+i).className="shbz_tab";
}
document.getElementById ("div_shbz"+index).style.display  ="block";
document.getElementById ("shbz_"+index).className="shbz_tab_select";
}


function shjz(index)
{
for (var i=1;i<=7;i++)
{
document.getElementById ("div_shjz"+i).style.display  ="none";
document.getElementById ("shjz_"+i).className="shjz_tab";
}
document.getElementById ("div_shjz"+index).style.display  ="block";
document.getElementById ("shjz_"+index).className="shjz_tab_select";
}


function shbzs(index)
{
for (var i=1;i<=2;i++)
{
document.getElementById ("div_shbzs"+i).style.display  ="none";
document.getElementById ("shbzs_"+i).className="shbzs_tab";
}
document.getElementById ("div_shbzs"+index).style.display  ="block";
document.getElementById ("shbzs_"+index).className="shbzs_tab_select";
}


function flzs(index)
{
for (var i=1;i<=7;i++)
{
document.getElementById ("div_flzs"+i).style.display  ="none";
document.getElementById ("flzs_"+i).className="left_flzs_tab_off";
}
document.getElementById ("div_flzs"+index).style.display  ="block";
document.getElementById ("flzs_"+index).className="left_flzs_tab_on";
}



function ldjyzd(index)
{
for (var i=1;i<=6;i++)
{
document.getElementById ("div_ldjyzd"+i).style.display  ="none";
document.getElementById ("ldjyzd_"+i).className="";
}
document.getElementById ("div_ldjyzd"+index).style.display  ="block";
document.getElementById ("ldjyzd_"+index).className="left_ldjyzd_tab_on";
}




function zzcy(index)
{
for (var i=1;i<=4;i++)
{
document.getElementById ("div_zzcy"+i).style.display  ="none";
document.getElementById ("zzcy_"+i).className="";
}
document.getElementById ("div_zzcy"+index).style.display  ="block";
document.getElementById ("zzcy_"+index).className="left_zzcy_tab_on";
}

function sbcx(index)
{
for (var i=1;i<=2;i++)
{
document.getElementById ("div_sbcx"+i).style.display  ="none";
document.getElementById ("sbcx_"+i).className="right_chaxun_tab_off";
}
document.getElementById ("div_sbcx"+index).style.display  ="block";
document.getElementById ("sbcx_"+index).className="right_chaxun_tab_on";
}
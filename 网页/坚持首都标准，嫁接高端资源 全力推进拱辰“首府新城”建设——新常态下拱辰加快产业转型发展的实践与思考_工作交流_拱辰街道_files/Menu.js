function expand(s)
{
  var td = s;
  var d = td.getElementsByTagName("div").item(0);
  td.className = "";
  d.className = "menuHover";
}
function collapse(s)
{
  var td = s;
  var d = td.getElementsByTagName("div").item(0);
  td.className = "";
  d.className = "menuNormal";
}
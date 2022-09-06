console.log("Welcome to the console?")
async function request_1(file,id){
  let time = performance.now()
  let x = await fetch (file + "?" + time);
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Name" + "</th>"+ "<th>" + "Site Prices" + "</th>" + "<th>" + "Discord Prices" + "</th>" + "</tr>"; 
  for (g in myArr) {
    let name = myArr[g].name;
    nameE = name.replace(/ /g,"%20");
    name = name.replace(/%27/g,"\'")
    let link = "https://steamcommunity.com/market/listings/252490/"+nameE;
  	txt = txt + "<tr>" + "<td><a target=_blank href="+link+">"+ name + "</a></td>"+ "<td>$" + myArr[g].sitePrice + "</td>" + "<td>$" + myArr[g].discordPrice + "</td>" + "</tr>"; 
  }
 document.getElementById(id).innerHTML = "<input type=text id=search placeholder=Type to search> <table id=table>" + txt + "</table>";
}
var $rows = $('#table tr');
$('#search').keyup(function() {

  var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
    reg = RegExp(val, 'i'),
    text;

  $rows.show().filter(function() {
    text = $(this).text().replace(/\s+/g, ' ');
    return !reg.test(text);
  }).hide();
});


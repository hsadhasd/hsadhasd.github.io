console.log("Welcome to the console?")
async function request_1(file,id){
  document.getElementById(id).innerHTML = "Loading Prices...";
  let time = performance.now()
  let x = await fetch (file + "?" + time);
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Name" + "</th>"+ "<th>" + "Site Prices" + "</th>" + "</tr>"; 
  for (g in myArr) {
    let name = myArr[g].name;
    nameE = name.replace(/ /g,"%20");
    name = name.replace(/%27/g,"\'")
    let link = "https://steamcommunity.com/market/listings/252490/"+nameE;
  	txt = txt + "<tr>" + "<td><a target=_blank href="+link+">"+ name + "</a></td>"+ "<td>$" + myArr[g].buy + "</td>"+"</tr>"; 
  }
 document.getElementById(id).innerHTML = "<table>" + txt + "</table>";
}
async function request_2(file,id){
  document.getElementById(id).innerHTML = "Loading Status...";
  let time = performance.now()
  let x = await fetch (file + "?" + time);
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  console.log(z)
  const myArr = JSON.parse(z);
  txt = ""
  if (myArr.csdeals === "True") {
    txt = txt + "<a style=color:green target=_blank href=https://cs.deals/market/rust/>cs.deals</a>/"
  }
  else {
    txt = txt + "<a style=color:red target=_blank href=https://cs.deals/market/rust/>cs.deals</a>/"
  }
  if (myArr.dmarket === "True") {
    txt = txt + "<a style=color:green target=_blank href=https://dmarket.com/ingame-items/item-list/rust-skins>dmarket.com</a>/"
  }
  else {
     txt = txt + "<a style=color:red target=_blank href=https://dmarket.com/ingame-items/item-list/rust-skins>dmarket.com</a>/"
  }
  if (myArr.skinport === "True") {
    txt = txt + "<a style=color:green target=_blank href=https://skinport.com/rust>skinport.com</a>"
  }
  else {
    txt = txt + "<a style=color:red target=_blank href=https://skinport.com/rust>skinport.com</a>"
  }
  document.getElementById(id).innerHTML = "<p>"+txt+"</p>";
}
request_2("api/status.txt","status")
request_1("api/prices.txt","priceTable")

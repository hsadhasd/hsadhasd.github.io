console.log("Loaded Javascript")
async function request_1(file,id){
  document.getElementById(id).innerHTML = "Loading Prices...";
  let time = performance.now()
  let x = await fetch('api/prices.json?'+time, {method: "GET",headers: {"Content-type": 'application/json'}})
  let y = await x.text();
  const myArr = JSON.parse(y);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Num" + "</th>" + "<th>" + "Name" + "</th>"+ "<th>" + "Buy" + "</th>"  + "<th>" + "Sell" + "</th>" + "<th>" + "Stock" + "</th>" + "</tr>"; 
  for (g in myArr) {
    let name = myArr[g].name;
    nameE = name.replace(/ /g,"%20");
    name = name.replace(/%27/g,"\'")
    let link = "https://steamcommunity.com/market/listings/252490/"+nameE;
  	txt = txt + "<tr>" + "<td>" + g + "</td>" + "<td><a target=_blank href="+link+">"+ name + "</a></td>"+ "<td>$" + myArr[g].buy + "</td>"+ "<td>$" + myArr[g].sell + "</td>"+ "<td>" + myArr[g].stock + "</td>"+"</tr>"; 
  }
 document.getElementById(id).innerHTML = "<table>" + txt + "</table>";
}
async function request_2(file,id){
  document.getElementById(id).innerHTML = "Loading Status...";
  let time = performance.now()
  let x = await fetch('api/status.json?'+time, {method: "GET",headers: {"Content-type": 'application/json'}})
  let y = await x.text();
  const myArr = JSON.parse(z);
  txt = ""
  if (myArr.csdeals.status === "True") {
    txt = txt + "<a title=Online style=color:green target=_blank href=https://cs.deals/market/rust/>cs.deals</a>("+"<a title=Balance on cs.deals>$"+myArr.csdeals.balance+"</a>"+")/"
  }
  else {
    txt = txt + "<a title=Offline style=color:red target=_blank href=https://cs.deals/market/rust/>cs.deals</a>("+"<a title=Balance on cs.deals>$"+myArr.csdeals.balance+"</a>"+")/"
  }
  if (myArr.dmarket.status === "True") {
    txt = txt + "<a title=Online style=color:green target=_blank href=https://dmarket.com/ingame-items/item-list/rust-skins>dmarket.com</a>("+"<a title=Balance on dmarket.com>$"+myArr.dmarket.balance+"</a>"+")/"
  }
  else {
    txt = txt + "<a title=Offline style=color:red target=_blank href=https://dmarket.com/ingame-items/item-list/rust-skins>dmarket.coms</a>("+"<a title=Balance on dmarket.com>$"+myArr.dmarket.balance+"</a>"+")/"
  }
  if (myArr.skinport.status === "True") {
    txt = txt + "<a title=Online style=color:green target=_blank href=https://skinport.com/rust>skinport.com</a>("+"<a title=Balance on skinport.com>$"+myArr.skinport.balance+"</a>"+")"
  }
  else {
    txt = txt + "<a title=Offline style=color:red target=_blank href=https://skinport.com/rust>skinport.com</a>("+"<a title=Balance on skinport.com>$"+myArr.skinport.balance+"</a>"+")"
  }
  document.getElementById(id).innerHTML = "<p>"+txt+"</p>";
}

async function request_refresh(id){
  console.log(id)
  document.getElementById(id).innerHTML = "Loading...";
  await request_2("api/status.json","status")
  await request_1("api/prices.json","priceTable")
  document.getElementById(id).innerHTML = "Refresh";
}

fetch('api/prices.json', {method: "GET",headers: {"Content-type": 'application/json'}
})
.then(response => response.json()) 
.then(json => console.log(json)); 

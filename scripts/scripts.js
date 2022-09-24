console.log("Loaded Javascript")
async function request_1(file,id){
  document.getElementById(id).innerHTML = "Loading Prices...";
  let time = performance.now()
  let x = await fetch('api/prices.json?'+time, {method: "GET",headers: {"Content-type": 'application/json'}})
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Num" + "</th>" + "<th>" + "Name" + "</th>"+ "<th>" + "Buy" + "</th>"  + "<th>" + "Sell" + "</th>" + "</tr>"; 
  for (g in myArr.items) {
    let g = g + 1
    let name = myArr.items[g].name;
    nameE = name.replace(/ /g,"%20");
    name = name.replace(/%27/g,"\'")
    let link = "https://steamcommunity.com/market/listings/252490/"+nameE;
    txt = txt + "<tr>" + "<td>" + g + "</td>" + "<td><a target=_blank href="+link+">"+ name + "</a></td>" + "<td>$" + myArr.items[g].buy + "</td>"+ "<td>$" + myArr.items[g].sell + "</td>" +"</tr>"; 
  }
 document.getElementById(id).innerHTML = "<table>" + txt + "</table>";
}
async function request_2(file,id){
  document.getElementById(id).innerHTML = "Loading Status...";
  let time = performance.now()
  let x = await fetch('api/status.json?'+time, {method: "GET",headers: {"Content-type": 'application/json'}})
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  txt = ""
  if (myArr.csdeals.status === "True") {
    txt = txt + "<a title=Online style=color:green target=_blank href=https://cs.deals/market/rust/>cs.deals</a>("+"<a title=Balance on cs.deals>$"+myArr.csdeals.balance+"</a>"+")/"
  }
  else {
    txt = txt + "<a title=Offline style=color:red target=_blank href=https://cs.deals/market/rust/>cs.deals</a>("+"<a title=Balance on cs.deals>$"+myArr.csdeals.balance+"</a>"+")/"
  }
async function request_refresh(id){
  console.log(id)
  document.getElementById(id).innerHTML = "Loading...";
  await request_2("api/status.json","status")
  await request_1("api/prices.json","priceTable")
  document.getElementById(id).innerHTML = "Refresh";
}
request_refresh("button")

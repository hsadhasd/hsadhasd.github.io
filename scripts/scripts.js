console.log("Loaded Javascript")
async function request_1(file,id){
  document.getElementById(id).innerHTML = "Loading Prices...";
  let time = performance.now()
  let x = await fetch('api/prices.json?'+time, {method: "GET",headers: {"Content-type": 'application/json'}})
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Num" + "</th>"+ "<th>" + "Image" + "</th>" + "<th>" + "Name" + "</th>"+ "<th>" + "Buy" + "</th>"  + "<th>" + "Sell" + "</th>"+ "<th>" + "Change(%)" + "</th>"+ "<th>" + "Cut" + "</th>" + "<th>" + "Stock" + "</th>" + "</tr>"; 
  for (g in myArr.items) {
    let name = myArr.items[g].name;
    nameE = name.replace(/ /g,"%20");
    name = name.replace(/%27/g,"\'")
    let link = "https://steamcommunity.com/market/listings/252490/"+nameE;
    if (myArr.items[g].change_buy === 1) {
  	  txt = txt + "<tr>" + "<td>" + g + "</td>" + "<td>" + "<a target=_blank href="+link+">"+"<img src=https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f height=35 width=35></img></a>" + "</td>" + "<td><a target=_blank href="+link+">"+ name + "</a></td>"+ "<td>$" + myArr.items[g].buy + "</td>"+ "<td>$" + myArr.items[g].sell + "</td>"+ "<td><a style=color:light-blue>" + myArr.items[g].change_buy + "</a></td>"+ "<td>" + myArr.items[g].cut + "</td>" + "<td>" + myArr.items[g].stock + "</td>"+"</tr>"; 
    }
    if (myArr.items[g].change_buy > 1) {
  	  txt = txt + "<tr>" + "<td>" + g + "</td>" + "<td>" + "<a target=_blank href="+link+">"+"<img src=https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f height=35 width=35></img></a>" + "</td>" + "<td><a target=_blank href="+link+">"+ name + "</a></td>"+ "<td>$" + myArr.items[g].buy + "</td>"+ "<td>$" + myArr.items[g].sell + "</td>"+ "<td><a style=color:light-green>" + myArr.items[g].change_buy + "</a></td>"+ "<td>" + myArr.items[g].cut + "</td>" + "<td>" + myArr.items[g].stock + "</td>"+"</tr>"; 
    }
    if (myArr.items[g].change_buy < 1) {
  	  txt = txt + "<tr>" + "<td>" + g + "</td>" + "<td>" + "<a target=_blank href="+link+">"+"<img src=https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfDY0jhyo8DEiv5daPq0_qrw_QfG9DKWskiE/360fx360f height=35 width=35></img></a>" + "</td>" + "<td><a target=_blank href="+link+">"+ name + "</a></td>"+ "<td>$" + myArr.items[g].buy + "</td>"+ "<td>$" + myArr.items[g].sell + "</td>"+ "<td><a style=color:light-red>" + myArr.items[g].change_buy + "</a></td>"+ "<td>" + myArr.items[g].cut + "</td>" + "<td>" + myArr.items[g].stock + "</td>"+"</tr>"; 
    }
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
request_refresh("button")

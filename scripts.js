console.log("Welcome to the console?")
async function request_1(file,id){
  let x = await fetch (file);
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Market Name" + "</th>"+ "<th>" + "Market Price" + "</th>" + "</tr>"; 
  for (g in myArr) {
    let name = myArr[g].name;
    nameE = name.replace(/ /g,"%20");
    name = name.replace(/%27/g,"\'")
    let link = "https://steamcommunity.com/market/listings/252490/"+nameE;
  	txt = txt + "<tr>" + "<td><a target=_blank href="+link+">" + name + "</a></td>"+ "<td>$" + myArr[g].price + "</td>" + "</tr>"; 
  }
 document.getElementById(id).innerHTML = "<table>" + txt + "</table>";
}
request_1("api/RustSkinPrices.txt","demo")  

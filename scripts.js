console.log("Welcome to the console?")
async function request_1(file,id){
  let x = await fetch (file);
  let y = await x.text();
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Market Name" + "</th>"+ "<th>" + "Market Price" + "</th>" + "</tr>"; 
  for (g in myArr) {
  	txt = txt + "<tr>" + "<td href="https://steamcommunity.com/market/listings/252490/${myArr[g].name}">" + myArr[g].name + "</td>"+ "<td>$" + myArr[g].price + "</td>" + "</tr>"; 
  }
 document.getElementById(id).innerHTML = "<table>" + txt + "</table>";
}
request_1("api/RustSkinPrices.txt","demo")  

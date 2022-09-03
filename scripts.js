console.log("WHY ARE YOU LOOKING HERE?")
async function request_1(file,id){
  let x = await fetch (file);
  let y = await x.text();
  console.log(y);
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  console.log(myArr[0].name);
  let txt = ""
  txt = txt + "<tr>" + "<th>" + "Market Name" + "</th>"+ "<th>" + "Market Price" + "</th>" + "</tr>"; 
  for (g in myArr) {
  	txt = txt + "<tr>" + "<th>" + myArr[g].name + "</th>"+ "<th>" + myArr[g].price + "</th>" + "</tr>"; 
  }
 document.getElementById(id).innerHTML = "<table>" + txt + "</table>";
}
request_1("api/RustSkinPrices.txt","demo")  

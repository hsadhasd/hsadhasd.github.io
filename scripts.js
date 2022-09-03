console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  console.log(y);
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  console.log(myArr[0].name);
  let txt = ""
  for (g in myArr) {
  txt += myArr[g].name + "<br>"; 
  }
 document.getElementById(id).innerHTML =txt;
}
request("api/RustSkinPrices.txt","demo")  

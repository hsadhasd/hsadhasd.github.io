console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  y.replace(/&quot;/ig,'"');
  console.log(y[0])
  const myArr = JSON.parse(y);
  console.log(myArr)
 document.getElementById(id).innerHTML = z
}
request("api/RustSkinPrices.txt","demo")  

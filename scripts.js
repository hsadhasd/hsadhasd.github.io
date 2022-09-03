console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  let z = y.replace(/&quot;/ig,'"');
  console.log(z)
  const myArr = JSON.parse(z);
  console.log(myArr)
 document.getElementById(id).innerHTML = myArr
}
request("api/RustSkinPrices.txt","demo")  

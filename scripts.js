console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  console.log(y)
  const myArr = JSON.parse(y);
 document.getElementById(id).innerHTML = z
}
request("api/RustSkinPrices.txt","demo")  

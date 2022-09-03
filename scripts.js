console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  document.getElementById(id).innerHTML = y;
}
request("api/RustSkinPrices.txt","demo")  

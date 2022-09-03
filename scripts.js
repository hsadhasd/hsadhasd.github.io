console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  for (const [key, value] of Object.entries(y)) {
    document.getElementById(id).innerHTML = (key, value)
    console.log(key, value);
  }
}
request("api/RustSkinPrices.txt","demo")  

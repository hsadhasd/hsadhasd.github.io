console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  let z;
  for (const [key, value] of Object.entries(JSON.parse(y))) {
    z = z + key
    console.log(key, value);
  }
 document.getElementById(id).innerHTML = "check console"
}
request("api/RustSkinPrices.txt","demo")  

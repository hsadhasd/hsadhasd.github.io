console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await JSON.parse(x.text());
  let z;
  for (const [key, value] of Object.entries(y)) {
    z = z + key
    console.log(key, value);
  }
 console.log(z)
 document.getElementById(id).innerHTML = "check console"
}
request("api/RustSkinPrices.txt","demo")  

console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  let z = "<table>";
  for (const [key, value] of Object.entries(JSON.parse(y))) {
    z = z + key
    console.log(key, value);
  }
 z = z + "<table>"
 console.log(z)
 document.getElementById(id).innerHTML = z
}
request("api/RustSkinPrices.txt","demo")  

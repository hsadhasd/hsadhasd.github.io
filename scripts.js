console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  let z = JSON.parse(y)
  var arrayLength = z.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log(z[i]);
  }
 document.getElementById(id).innerHTML = z
}
request("api/RustSkinPrices.txt","demo")  

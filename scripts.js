console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  var arrayLength = JSON.parse(y.length);
  for (var i = 0; i < arrayLength; i++) {
    console.log(JSON.parse(y)[i]);
  }
 document.getElementById(id).innerHTML = z
}
request("api/RustSkinPrices.txt","demo")  

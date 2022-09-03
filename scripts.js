console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  let y = JSON.parse(x)
  var arrayLength = y.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log(y[i]);
 document.getElementById(id).innerHTML = y
}
request("api/RustSkinPrices.txt","demo")  

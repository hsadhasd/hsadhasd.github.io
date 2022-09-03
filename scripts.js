async function request(file,id){
  let x;
  x = fetch (file)then(y => document.getElementById(id).innerHTML = y);;
  x = x.text()
  document.getElementById(id).innerHTML = x
}
request("api/RustSkinPrices.txt","demo")  

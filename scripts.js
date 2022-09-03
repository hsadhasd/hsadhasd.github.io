async function request(file,id){
  let x;
  x = fetch (file);
  x = x.text();
  document.getElementById(id).innerHTML = x;
}
request("api/RustSkinPrices.txt","demo")  

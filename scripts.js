async function request(file,id){
  fetch (file).then(x => x.text()).then(y => document.getElementById(id).innerHTML = y);;
}
request("api/RustSkinPrices.txt","demo")  

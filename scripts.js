async function request(file,id){
  fetch (file).then(x => x.text()).then(y => document.getElementById(id).innerHTML = y);;
}
request("ajax_info.txt","demo")

window.onload = init;


function init() {
  // alert('wellcom');

 let btnS =  document.getElementById('btnSearch');
 btnS.addEventListener("click", search);

}
 function search() {

    //alert()
  let url=  "https://www.google.com/search?q=site%3Asoja.ir+"+ document.getElementById('txtSearch').value;
  alert(url);
   window.open(url); 
}

var inner_hourly = document.getElementById("hourly_charg");
  var inner_monthly = document.getElementById("monthly_charge");
  var hourly = inner_hourly.innerHTML;
  var monthly = inner_monthly.innerHTML;
  var num_size = document.getElementById("num_size");
  var geg_size = num_size.innerHTML;







var k = 0;



function move(btnNum, num) {  

  var geg = document.getElementsByClassName("btn_" + btnNum)[0].getElementsByClassName("gb")[0];
    console.log(parseInt(geg.innerHTML));   

    num_size.innerHTML = parseInt(geg.innerHTML);
  console.log(inner_hourly.innerHTML, inner_monthly.innerHTML);
  inner_hourly.innerHTML = parseInt(geg.innerHTML) * Number(hourly);
  inner_monthly.innerHTML = parseInt(geg.innerHTML) * Number(monthly);




	    	      
  if (k == 0) {
    k = 1;
    var elem = document.getElementById("myBar");
    var btn_current = document.getElementsByClassName("btn_" + btnNum)[0];
    var gbAll = document.getElementsByClassName("gb");
    var gb = document.getElementsByClassName("btn_" + btnNum)[0].getElementsByClassName("gb")[0];
    console.log(gb);
    var myProgress = document.getElementById("myProgress");
    myProgress.style.height = "5px";
    var width = 0;
    var id = setInterval(frame, 10);


    

 var btnAll = document.getElementsByClassName("btn");
	    	for (let i = 0; i < btnAll.length; i++) {
	    		console.log(btnAll.length, i, gbAll.length);
	    		if (btnNum != i+1) {
		    		btnAll[i].style.height = "5px";
	        		btnAll[i].style.width = "10px";
	        		btnAll[i].style.top = "0px";
	   		        btnAll[i].style.backgroundColor = "grey";
		            btnAll[i].style.borderRadius = "unset"; 
		            gbAll[i].style.marginTop = "22px";
   		    	}
	    	}   


    var selected_size = document.getElementsByClassName("selected_size")[0];
    console.log(selected_size);
    function frame() {
      if (width >= num) {
        clearInterval(id);
        k = 0;
      } else {
      	width++;        
        elem.style.width = width + "%";
        btn_current.style.borderRadius = "34px";
        btn_current.style.height = "25px";
        btn_current.style.width = "25px";
        btn_current.style.border = "unset";
        btn_current.style.backgroundColor = "#4e81d5";
        btn_current.style.position = "absolute";
        btn_current.style.top = "-10px";
        btn_current.style.left = num-1 + "%";
        gb.style.marginTop = "32px";
        if (btnNum != 1) {
          gb.style.marginLeft = "1px";
        }       
        selected_size.style.left = (btnNum * 9.09) - 11 + "%";

      }
    }
  }
}




/* =============  Show which Navbar link is active  ====================*/

var active = document.getElementsByClassName('nav_name');

for(var i = 0; i < active.length; i++) {

  active[i].addEventListener("click", function(event){
    for (let i = 0; i < active.length; i++) {
      active[i].nextElementSibling.style.display = "none";
    }
  this.nextElementSibling.style.display = "block";
});
}


/* ===============  Checkbox and footer appears  ===============================  */

var choise_provider = document.getElementsByClassName("choise_provider")[0].getElementsByTagName("div");
console.log(choise_provider);
var footer_charge = document.getElementsByClassName("footer_charge")[0];
for(var i = 0; i < choise_provider.length; i++) {
  choise_provider[i].addEventListener("click", function(event){
    for (let i = 0; i < choise_provider.length; i++) {
      choise_provider[i].getElementsByClassName("check_circle")[0].style.display = "none";
    }
  this.getElementsByClassName("check_circle")[0].style.display = "block";
  footer_charge.style.display = "block";

});
}



// ===========================================================================================


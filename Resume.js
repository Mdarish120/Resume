    

    function loadwk(){
    var newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cv-wk");

     newNode.classList.add("mt-2");
     newNode.setAttribute("placeholder","Enter here");
         newNode.setAttribute("row",3);
         var target=document.getElementById("wk");
         var btn=document.getElementById("wk-btn");
         target.insertBefore(newNode , btn);
}



 function loadpk(){
    var newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cv-pk");

     newNode.classList.add("mt-2");
     newNode.setAttribute("placeholder","Enter here");
         newNode.setAttribute("row",3);
         var target=document.getElementById("pk");
         var btn=document.getElementById("pk-btn");
         target.insertBefore(newNode , btn);
}

function loadtk(){
    var newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cv-tk");

     newNode.classList.add("mt-2");
     newNode.setAttribute("placeholder","Enter here");
         newNode.setAttribute("row",3);
         var target=document.getElementById("tk");
         var btn=document.getElementById("tk-btn");
         target.insertBefore(newNode , btn);
}

function loadak(){
    var newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cv-ak");

     newNode.classList.add("mt-2");
     newNode.setAttribute("placeholder","Enter here");
         newNode.setAttribute("row",3);
         var target=document.getElementById("ak");
         var btn=document.getElementById("ak-btn");
         target.insertBefore(newNode , btn);
}


   // Generate CV

  function grnerate(){

	console.log("hiiiiii");


  	document.getElementById("tp-name").innerHTML=document.getElementById("name").value;
  	document.getElementById("tp-phone").innerHTML=document.getElementById("phone").value;
  		document.getElementById("tp-address").innerHTML=document.getElementById("address").value;
      	document.getElementById("tp-email").innerHTML=document.getElementById("email").value;
      		document.getElementById("tp-self").innerHTML=document.getElementById("self").value;
      			document.getElementById("tp-fb").innerHTML=document.getElementById("fb").value;
      				document.getElementById("tp-git").innerHTML=document.getElementById("git").value;
      					document.getElementById("tp-link").innerHTML=document.getElementById("link").value;
      						document.getElementById("tp-post").innerHTML=document.getElementById("post").value;



      						// Work Experience

      				   var wk=document.getElementsByClassName("cv-wk");
      				   let str="";
      				   for(let e of wk){
      				   	str=str+`<li> ${e.value}</li>`;

      				   }

      				   document.getElementById("tp-wk").innerHTML=str;

      				   // Project

      				   var pk=document.getElementsByClassName("cv-pk");
      				   let str1="";
      				   for(let e of pk){
      				   	str1=str1+`<li> ${e.value}</li>`;

      				   }

      				   document.getElementById("tp-pk").innerHTML=str1;

                 // Technical

                 var tk=document.getElementsByClassName("cv-tk");
      				   let str2="";
      				   for(let e of tk){
      				   	str2=str2+`<li> ${e.value}</li>`;

      				   }

      				   document.getElementById("tp-tk").innerHTML=str2;

      				   // Acedemic 

      				   var ak=document.getElementsByClassName("cv-ak");
      				   let str3="";
      				   for(let e of ak){
      				   	str3=str3+`<li> ${e.value}</li>`;

      				   }

      				   document.getElementById("tp-ak").innerHTML=str3;

      				   // Upload Img
      				let  file = document.getElementById("pic").files[0];
      				let reader =new FileReader();
      				reader.readAsDataURL(file);
      				reader.onloadend=function(){
      					document.getElementById("tp-pic").src=reader.result;
      				};



      				         document.getElementById("cv-form").style.display="none";
      				   document.getElementById("tp-form").style.display="block";





  }
 
function printcv(){
	window.print();
};


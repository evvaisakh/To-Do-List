// Get the button:
var mybutton=document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var todobutton=document.getElementById("todobutton");
var tasknumber=document.getElementById("tasknumber");
var tasklist=document.getElementById("tasklist")
var validate=document.getElementById("checkbox")
todobutton.addEventListener("click",retrieve);
// data retrievel from API
function retrieve(){
    var xhtml=new XMLHttpRequest();
    var output1="";
    var output2="";
    var output3="";
    xhtml.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var jdata=JSON.parse(this.responseText);
            for(var i=0;i<jdata.length;i++){
                output1 += `${jdata[i].id}<br>`;
                output2 +=`<li>${jdata[i].title}</li>`;
                if(jdata[i].completed==true){
                    output3 +=`<input type="checkbox" checked disabled><br>`
                }else{
                    output3 +=`<input type="checkbox" id="mycheck" onclick="checker()"><br>`  
                }
            }
            tasknumber.innerHTML=output1;
            tasklist.innerHTML=output2;
            validate.innerHTML=output3;
        }
    }
xhtml.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhtml.send();
}
// Count Validation using callback
var count=0;
function checker(){
var mycheck=document.getElementById("mycheck");
 var promise=new Promise(function(resolve,reject){
    if(mycheck.checked==true){
        count++
        resolve(count)
    }else{
        reject("error")
    }
})
promise
.then(function(i){
  if(i==5){
    alert("Congrats. 5 Tasks have been Successfully Completed");    
  }
})
}
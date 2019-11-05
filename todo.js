var btnAdd=document.getElementById("add-task")
var toDoInput=document.getElementById("to-do-input")
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var completebtn=document.getElementsByClassName("btn-complete");
var deletebtn=document.getElementsByTagName("btn-delete");
var span=document.getElementsByTagName("span");

function createListElement() {
    var li = document.createElement("li"); // creates an element "li"
    // var span =document.createElement("span");//create span
     //span.className="item-to-do"; //add calss to span
     //span.appendChild(itemToDo); //add input to itemto do
     //li.appendChild(span); //add item to do to list li

    var completebtn = document.createElement("button");//create btn complete
        completebtn.className="btn-complete";

   
        completebtn.appendChild(document.createTextNode("complete"));
    
        li.appendChild(completebtn);

    var deletebtn = document.createElement("button");//create btn delete
        deletebtn.className="btn-delete";
        deletebtn.appendChild(document.createTextNode("delete"));


        li.appendChild(deletebtn);
        console.log(deletebtn)        
      
       // li.appendChild(document.createTextNode(toDoInput.value)); //makes text from input field the li text
      

        var span =document.createElement("span");//create span
        span.className="item-to-do"; //add calss to span
        span.innerHTML=toDoInput.value
        li.appendChild(span)

        ul.appendChild(li); //adds li to ul
     
        toDoInput.value = ""; //Reset text input field
     
        completebtn.addEventListener("click",function itemCompleted(e){
        
         var par= e.target.parentElement;
           var spanT=par.lastChild;
           spanT.style.textDecoration="line-through";
        }
        )
    
    
        deletebtn.addEventListener("click",function deleteX(e){
            var par= e.target.parentElement;
        
            par.style.display="none";
       
           }
           )
    
    
    
    
    }


     



  
        
        
        
        





    function addNewitem(){
        if (toDoInput.value === " ") { 
            createListElement();
        }
    }
  // function itemCompleted(e){

   //var par= e.target.parentElement


   //console.log(par)
   //   document.getElementsByClassName("").style.textDecoration="overline";





   
       
      // function deleteListItem(){
       
//deletebtn.addEventListener("click", deleteListItem);
  



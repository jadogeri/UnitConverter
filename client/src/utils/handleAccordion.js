  // Accordions
  export const handleAccordion = (id,service) => {
    var x = document.getElementById(id);
    var list = document.getElementsByClassName(service);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
    for (let i = 0; i <list.length; i++){
      if(id !== list[i].id){
          //       console.log("id in ==",id," , id from classname === ", list[i].id)

          if (list[i].className.indexOf("w3-show") == -1) {
         // do nothing
          } else { 
            list[i].className = list[i].className.replace(" w3-show", "");
          }
      }
    }

  }

  

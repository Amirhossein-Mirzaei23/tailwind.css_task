
    function addclass_nav(){
      let nav=document.getElementById("navi")
      nav.classList.remove("hidden")
      //let h1=document.getElementById("h1-1")
     // h1.classList.add("w-8/12")
    }
    function removeclass_nav(){
        let nav=document.getElementById("navi")
      nav.classList.add("hidden")
    }
    function addclass_buttom(){
        let nav=document.getElementById("nav-button")
        nav.classList.add("hidden")
    }
    //function removeclass_buttom(){
    //    let nav=document.getElementById("nav-button")
    //    nav.classList.remove("hidden")
    //}
    //function addclass_dropdown(){
    //  let dropdown=document.getElementById("dropdown")
    //  dropdown.classList.remove("hidden")
    //  dropdown.classList.contains
    //}
    //function removeclass_dropdown(){
    //  let dropdown=document.getElementById("dropdown")
    //  dropdown.classList.add("hidden")
    //}
    function addclass_dropdown(){
      let dropdown=document.getElementById("dropdown")
      if (dropdown.classList.contains("hidden")){
        dropdown.classList.remove("hidden")
      }
      else{
        dropdown.classList.add("hidden")
      }
    }
    function rotate_svg(){
      let svg=document.getElementById("svg")
      if (svg.classList.contains("rotate-180")){
        svg.classList.remove("rotate-180")
      }
      else{
        svg.classList.add("rotate-180")
      }
    }
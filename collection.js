var searchbar = document.getElementById("search")
var container = document.getElementById("products")
var productlist = container.querySelectorAll("div")

searchbar.addEventListener("keyup", function(){
    var enteredvalue = event.target.value.toUpperCase()
    for( var i=0; i<productlist.length; i++)
    {
        var name = productlist[i].querySelector("p").textContent
        if(name.toUpperCase().indexOf(enteredvalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})
// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
console.log(btn1);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal1.style.display = "block";
    modal.style.display= "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {    
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal1) {
    modal.style.display = "none";
    modal1.style.display = "none";
  }

}
var room,adult,children,from,till,diff;
function check(){
    room=document.getElementById("room").value;
    adult=document.getElementById("adults").value;
    children=document.getElementById("children").value;
    from=document.getElementById("check-in").value;
    till=document.getElementById("check-out").value;
    till = Number(new Date(till));
    from = Number(new Date(from));
    till=till/(60*60*24*1000);
    from=from/(60*60*24*1000);
    diff=till-from;
    console.log(room);
    console.log(adult);
    console.log(children);
    console.log(diff);
}



//document.getElementById("d1").innerHTML=`
/*<div>
    hello
    
    <div style="color: pink">
        wachu doing
    </div>
</div>`;*/
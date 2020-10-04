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
var room,adult,children,from,till,diff,name;
var spa1,spa2,spa3,spa4,spa5;
var x;
// When the user clicks on the button, open the modal
btn.onclick = function() {
    var i=check();
    if(i==1)
    modal.style.display = "block";
}
btn1.onclick = function() {
    var cc=check2();
    var n,y,m,d;
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    x = m + "/" + d + "/" + y;
    modal1.style.display = "block";
    modal.style.display= "none";
    var reciept=Math.floor((Math.random()*10000));
    var unique=Math.floor(Math.random()*25430000);
    var dys=diff*80;
    var total=dys+200+spa1*35+spa2*50+spa3*15+spa4*50;
    document.getElementById("d1").innerHTML=`
    <div style="margin:0;">
        <div class="invoice-box">
            <table cellpadding="0" cellspacing="0">
                <tr class="top">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td class="title">
                                    Earthern Nights
                                </td>
                                
                                <td>
                                    Invoice #:${reciept} <br>
                                    Created:${x}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <tr class="information">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td>
                                    Earthern nights<br>
                                    31 Greta Lane<br>
                                    Martian Colony - 4
                                </td>
                                
                                <td>
                                    ${name}<br>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <tr class="heading">
                    <td>
                        Payment Method
                    </td>
                    
                    <td>
                        Online
                    </td>
                </tr>
                
                <tr class="details">
                    <td>
                        Ref. ID
                    </td>
                    
                    <td>
                        ${unique}
                    </td>
                </tr>
                
                <tr class="heading">
                    <td>
                        Item
                    </td>
                    
                    <td>
                        Price
                    </td>
                </tr>
                
                <tr class="item">
                    <td>
                        Base charge
                    </td>
                    
                    <td>
                        $200.00
                    </td>
                </tr>
                
                <tr class="item">
                    <td>
                        Days (${diff} days)
                    </td>
                    
                    <td>
                        $${dys}.00
                    </td>
                </tr>
                <tr class="item">
                    <td>
                        Starry nights
                    </td>
                    
                    <td>
                        $${spa1*35}.00
                    </td>
                </tr>
                <tr class="item">
                    <td>
                        Space Walk
                    </td>
                
                    <td>
                        $${spa2*50}.00
                    </td>
                </tr>
                <tr class="item">
                    <td>
                        Buffet
                    </td>
                
                    <td>
                        $${spa3*15}.00
                    </td>
                </tr>
                <tr class="item last">
                    <td>
                        Spa
                    </td>
                    
                    <td>
                        $${spa4*50}.00
                    </td>
                </tr>
                
                <tr class="total">
                    <td></td>
                    
                    <td>
                       Total: $${total}.00
                    </td>
                </tr>
            </table>
        </div>
    </div>
    `;
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

function check(){
    name=document.getElementById("name").value;
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
    if(room==0){
        window.alert("please select a room before continuing");
        return(0);
    }
    else if(name==""){
        window.alert("We dont currently accept the `nameless`")
    }
    else if(diff<0){
        window.alert("please put proper dates P.S. Time machine has not be made yet")
        return(0);
    }
    else if(diff==0){
        window.alert("Minimum days of stay is 1, checkout is only at 12 noon")
        return(0);
    }
    else if(adult==0&&children!=0){
        window.alert("We dont allow children to stay without adults except for special cases, please contact us for more information")
        return(0);
    }
    else if(adult==0&&children==0){
        window.alert("Please select atleast 1 adult. P.S. if you are a ghost you're free to lurk around")
        return(0);
    }
    else{
        return(1);
    }
}
function check2(){
        spa1=document.getElementById("s1").checked;
    spa2=document.getElementById("s2").checked;
    spa3=document.getElementById("s3").checked;
    spa4=document.getElementById("s4").checked;
    console.log(spa1);
    console.log("Ready!");
    console.log(spa2);
    return(0);
}

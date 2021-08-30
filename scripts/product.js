let statusTemplate = `
<div class="my-container"  style="border-style: outset;">
    <div class="col-sm-8 "> 
        <h2>Current Records</h2>
        <div class="row" style="padding: 10px;">
            <div class="col-sm-2" style="margin: 30px;">
                <div class="card" style="width:200px ; height: 270px;" >
                    <img class="card-img-top" src="Diesel.jfif" alt="Card image" style="width:100%">
                    <div class="card-body">
                      <h4 class="card-title">Disel</h4>
                      <h5>Available:2500</h5>
                      <h5>Demand:500</h5>
                      <p>(till tomorrow EOD)</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-sm-2" style="margin: 30px;">
                <div class="card" style="width:200px ;height: 270px;" >
                    <img class="card-img-top" src="lpg.jfif" alt="Card image" style="width:100%">
                    <div class="card-body">
                      <h4 class="card-title">LPG</h4>
                      <h5>Available:2500</h5>
                      <h5>Demand:500</h5>
                      <p>(till tomorrow EOD)</p>
                      
                    </div>
                  </div>
            </div>
            <div class="col-sm-2" style="margin: 30px;">
                <div class="card" style="width:200px;height: 270px; " >
                    <img class="card-img-top" src="cng.jfif" alt="Card image" style="width:100%">
                    <div class="card-body">
                      <h4 class="card-title">CNG</h4>
                      <h5>Available:2500</h5>
                      <h5>Demand:500</h5>
                      <p>(till tomorrow EOD)</p>
                      
                    </div>
                  </div>
            </div>
        </div>
      
        
    
<div>
`

let formatTemplate =`
<div class="container" style="border-style: outset;">
    
    <form class="form-horizontal" >
      <div class="form-group">
          
        <div class="col-sm-10" style="padding: 10px;" >  
            <input type="text" class="form-control" id="name" placeholder="Enter supplier name" name="name">
            <div id="name_warning"></div>
        </div>
        
        <div class="col-sm-10" style="padding: 10px;">  
            <input type="text" class="form-control" id="email" placeholder="Enter supplier email" name="email">
            <div id="email_warning"></div>
        </div>
        
        <div class="col-sm-10" style="padding: 10px;">
        
            <select class="form-control" id="product-type">
            <option>Diesel</option>
            <option>CNG</option>
            <option>LPG</option>
            </select>
        </div>
    
      
      
        
        <div class="col-sm-10" style="padding: 10px;">          
          <input type="number" class="form-control" id="quant" placeholder="Enter quantity" name="pwd">
        </div>
      
      
      <div class="col-sm-10" style="padding: 10px;">  
        <textarea class="form-control" id="note" placeholder="Enter Note" name=""></textarea>
      </div>
      <div class="form-group ">        
        <div class="col-sm-offset-2 col-sm-10 my-container ">
        <div id="submit_warning"></div>
          <button type="button" class="btn btn-primary " id="append">Submit</button>
        </div>
      </div>
    </form>
</div>
</div>
`
var myList=[
    {
        'name': 'Siddhesh',
        'email':'sid@gmail.com',
        'type':'lpg',
        'quantity':'10'
    },
    {
      'name': 'Raja',
      'email':'raja@gmail.com',
      'type':'cng',
      'quantity':'20'
  },
  {
    'name': 'Jon',
    'email':'jon@gmail.com',
    'type':'Diesel',
    'quantity':'3'
},
{
  'name': 'Reva',
  'email':'reva@gmail.com',
  'type':'lpg',
  'quantity':'32'
}
]
let tableTemplate =
`
<table class="table table-striped">
    <thead>
      <tr>
        <th>Suppliername</th>
        <th>SupplierEmail</th>
        <th>Type</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody id="rows">

  </table>

`
$(document).ready(function(){
$("#container").html(formatTemplate);


$(document).on("click" , "#addbutton" , function(){
  $("#container").html(formatTemplate);
})

$(document).on("click" , "#statusbutton" , function(){
  $("#container").html(statusTemplate);
})

$(document).on("click" ,"#historybutton",function(){
  $("#container").html(tableTemplate);
   renderList();
})

$(document).on("click" ,"#append" , function(){
  $("#submit_warning").html(" ");
  if(document.getElementById("quant").value && isEmail(document.getElementById("email").value) && isName(document.getElementById("name").value)){
    console.log("hi");
    console.log(myList);
    myList.unshift({
        'name':document.getElementById('name').value,
        'email':document.getElementById('email').value,
        'type':document.getElementById('product-type').value,
        'quantity':document.getElementById('quant').value
    })
    document.getElementById("name").value="";
    document.getElementById('email').value="";
    document.getElementById('quant').value="";
  }
  else{
    $("#submit_warning").html(`<h6 style="color: red">fill all feilds and enter proper details</h6>`);
  }
  
})

$(document).on("change" , "#name" , function(){
  if(isName(document.getElementById("name").value))
  {
   
    $("#name_warning").html(" ");
  }
  else{
    console.log("Nop")
    $("#name_warning").html(`<h6 style="color: red">enter proper name</h6>`);
  }
})


$(document).on("change","#email", function(){
  if(isEmail(document.getElementById("email").value)){
      $("#email_warning").html(" ");
    
       }
      else{ 
       $("#email_warning").html(`<h6 style="color: red">enter valid email</h6>`);
      }
})
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function isName(name){
  var regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(name);
}
function render(index){
    console.log("rendering")
    var newName=myList[0].Fistname;
    var newRow = document.createElement("tr");
    var newCell1 = document.createElement("td");
    var newCell2 = document.createElement("td");
    var newCell3 = document.createElement("td");
    var newCell4 = document.createElement("td");
    newCell1.innerHTML=myList[index].name;
    newCell2.innerHTML=myList[index].email;
    newCell3.innerHTML=myList[index].quantity;
    newCell4.innerHTML=myList[index].type;
    newRow.append(newCell1);
    newRow.append(newCell2);
    newRow.append(newCell3);
    newRow.append(newCell4);
    document.getElementById("rows").appendChild(newRow);


}
function renderList(){
    document.getElementById("rows").innerHTML = "";
    for(var i=0;i<myList.length;i++) {
        render(i);
    }

}

})
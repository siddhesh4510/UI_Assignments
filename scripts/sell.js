
var xValues = ["Jan","Feb","Mar","April","May","Jun","July","Aug"];
var yValues = [7,8,12,9,9,9,10,11];
    let diesel=`<div class="container" id="dContainer">
    <div class="row">
        <div class="col-sm-3">
            <h1>Diesel</h1>
        </div>
        <div class="col-sm-9">
            <canvas id="lineDeisel" style="width:100%;max-width:600px"></canvas>
        </div>
    </div>
</div>`
let lpg=`<div class="container" id="lContainer">
    <div class="row">
        <div class="col-sm-3">
            <h1>LPG</h1> 
        </div>
        <div class="col-sm-9">
            <canvas id="lineLPG" style="width:100%;max-width:600px"></canvas>
        </div>
    </div>
</div>`
let cng=`<div class="container" id="cContainer">
    <div class="row">
        <div class="col-sm-3">
             <h1>CNG</h1> 
        </div>
        <div class="col-sm-9">
            <canvas id="lineCNG" style="width:100%;max-width:600px"></canvas>
        </div>
    </div>
</div>`
    $("#toRender").html(diesel);
    $("#lContainer").css("display","none");
    $("#cContainer").css("display","none");
    $("#lButton").click(
        function(){
            $("#toRender").html(lpg);
            var yValues = [13,11,12,9,9,9,10,8];
                new Chart("lineLPG", {
                type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yValues
                    }]
                },
                options: {
                    legend: {display: false},
                    scales: {
                    yAxes: [{ticks: {min: 6, max:16}}],
                    }
                }
                });


        }
    )
    $("#dButton").click(function(){
        $("#toRender").html(diesel);
        var yValues = [7,8,12,9,9,9,10,11];
            
                new Chart("lineDeisel", {
                type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yValues
                    }]
                },
                options: {
                    legend: {display: false},
                    scales: {
                    yAxes: [{ticks: {min: 6, max:16}}],
                    }
                }
                });
    })
    $("#cButton").click(function () {

        $("#toRender").html(cng);
        var yValues = [8,11,10,10,11,12,12,13];
            new Chart("lineCNG", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
                }]
            },
            options: {
                legend: {display: false},
                scales: {
                yAxes: [{ticks: {min: 6, max:16}}],
                }
            }
            });
    })
    var xValues = ["Diesel","LPG","CNG"];
    var yValues = [5500, 4900,1300 ];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797"
    ];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Our Production of this year"
        }
      }
    });
    var xValues = ["Jan","Feb","Mar","April","May","Jun","July","Aug"];
var yValues = [7,8,12,9,9,9,10,11];

new Chart("lineDeisel", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
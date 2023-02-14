<template lang="">
   <div>
      <div class="card card-revenue-budget">
         <div class="row mx-0">
            <div class="col-md-8 col-12 revenue-report-wrapper">
               <div class="d-sm-flex justify-content-between align-items-center mb-3">
                  <h4 class="card-title mb-50 mb-sm-0">Jobs Listing Report</h4>
                  <div class="d-flex align-items-center">
                     <div class="d-flex align-items-center me-2">
                        <span class="bullet bullet-primary font-small-3 me-50 cursor-pointer"></span>
                        <span>Earning</span>
                     </div>
                     <div class="d-flex align-items-center ms-75">
                        <span class="bullet bullet-warning font-small-3 me-50 cursor-pointer"></span>
                        <span>Expense</span>
                     </div>
                  </div>
               </div>
               <div :id="`revenue-report-chart${index}`"></div>
            </div>
            <div class="col-md-4 col-12 budget-wrapper">

               <h2 class="mb-25">$25,852</h2>
               <div class="d-flex justify-content-center">
                  <span class="fw-bolder me-25">Budget:</span>
                  <span>56,800</span>
               </div>
               <div id="budget-chart"></div>
               <button type="button" class="btn btn-primary">Increase Budget</button>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
    props:['index'],
    methods:{
         loadChart(){
        let  r = document.querySelector("#revenue-report-chart"+this.index);
        let f, b = "#f3f3f3",a = "#EBEBEB",n = "#b9b9c3";
         (f = {
            chart: { height: 230, stacked: !0, type: "bar", toolbar: { show: !1 } },
            plotOptions: { bar: { columnWidth: "17%", endingShape: "rounded" }, distributed: !0 },
            colors: [window.colors.solid.primary, window.colors.solid.warning],
            series: [
                { name: "Earning", data: [95, 177, 284, 256, 105, 63, 168, 218, 72] },
                { name: "Expense", data: [-145, -80, -60, -180, -100, -60, -85, -75, -100] },
            ],
            dataLabels: { enabled: !1 },
            legend: { show: !1 },
            grid: { padding: { top: -20, bottom: -10 }, yaxis: { lines: { show: !1 } } },
            xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], labels: { style: { colors: n, fontSize: "0.86rem" } }, axisTicks: { show: !1 }, axisBorder: { show: !1 } },
            yaxis: { labels: { style: { colors: n, fontSize: "0.86rem" } } },
        }),
        new ApexCharts(r, f).render();
        }
    },
    mounted(){
        this.loadChart();
    }
   }
</script>
<style lang="">
</style>

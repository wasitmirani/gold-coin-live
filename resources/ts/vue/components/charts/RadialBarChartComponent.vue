<template lang="">
    <div>
      <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title">{{heading}}</h4>
            <i data-feather="help-circle" class="font-medium-3 text-muted cursor-pointer"></i>
            </div>
            <div class="card-body p-0">
            <div :id="`goal-overview-radial-bar-chart${this.index}`" class="my-2"></div>
            <div class="row border-top text-center mx-0">
                <div class="col-6 border-end py-1" v-for="item in data" :key="item.id">
                <p class="card-text text-muted mb-0">{{item.label}}</p>
                <h3 class="fw-bolder mb-0">{{item.value}}</h3>
                </div>

            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['index','heading','data'],
    methods: {
     getPercentage(value,total){
        return (value/total)*100;
     },
     async loadChart(){
        let  y = document.querySelector(`#goal-overview-radial-bar-chart${this.index}`);
        let m;
       ( m = {
            chart: { height: 245, type: "radialBar", sparkline: { enabled: !0 }, dropShadow: { enabled: !0, blur: 3, left: 1, top: 1, opacity: 0.1 } },
            colors: ["#51e5a8"],
            plotOptions: {
                radialBar: {
                    offsetY: -10,
                    startAngle: -150,
                    endAngle: 150,
                    hollow: { size: "77%" },
                    track: { background: "#ebe9f1", strokeWidth: "50%" },
                    dataLabels: { name: { show: !1 }, value: { color: "#5e5873", fontSize: "2.86rem", fontWeight: "600" } },
                },
            },
            fill: { type: "gradient", gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: [window.colors.solid.success], inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 100] } },
            series: this.data.map(item => this.getPercentage(item.value,this.data.reduce((total,item) => total + item.value,0))),
            stroke: { lineCap: "round" },
            grid: { padding: { bottom: 30 } },
        }),
        new ApexCharts(y, m).render();
        }
    },
    mounted() {
        this.loadChart();
    },
}
</script>
<style lang="">

</style>

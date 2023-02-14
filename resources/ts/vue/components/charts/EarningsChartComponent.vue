<template lang="">
    <div>
           <div class="card earnings-card">
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h4 class="card-title mb-1">{{heading}}</h4>
                  <div class="font-small-2">This Month</div>
                  <h5 class="mb-1">${{revenue}}</h5>
                  <p class="card-text text-muted font-small-2">
                    <!-- <span class="fw-bolder">68.2%</span><span> more earnings than last month.</span> -->
                  </p>
                </div>
                <div class="col-6">
                  <div :id="`earnings-chart${index}`"></div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
    props: ['index', 'heading', 'data','revenue'],
    methods: {
        getPercentage(value, total) {
            return (value / total) * 100;
        },
        async loadChart() {
            let q = document.querySelector("#earnings-chart"+this.index);

                let e;
            (e = {
                chart: { type: "donut", height: 120, toolbar: { show: !1 } },
                dataLabels: { enabled: !1 },
                series: this.data.series,
                legend: { show: !1 },
                comparedResult: [2, -3, 8],
                labels: this.data.labels,
                stroke: { width: 0 },
                colors: ["#28c76f66", "#28c76f33", window.colors.solid.success],
                grid: { padding: { right: -20, bottom: -8, left: -20 } },
                plotOptions: {
                    pie: {
                        startAngle: -10,
                        donut: {
                            labels: {
                                show: !0,
                                name: { offsetY: 15 },
                                value: {
                                    offsetY: -15,
                                    formatter: function (a) {
                                        return parseInt(a) + "%";
                                    },
                                },
                                total: {
                                    show: !0,
                                    offsetY: 15,
                                    label: this.data.labels[0],
                                    formatter: function (a) {
                                        return "53%";
                                    },
                                },
                            },
                        },
                    },
                },
                responsive: [
                    { breakpoint: 1325, options: { chart: { height: 100 } } },
                    { breakpoint: 1200, options: { chart: { height: 120 } } },
                    { breakpoint: 1045, options: { chart: { height: 100 } } },
                    { breakpoint: 992, options: { chart: { height: 120 } } },
                ],
            }),
                new ApexCharts(q, e).render();
        }
    },
    mounted() {
        this.loadChart();
    },
}
</script>
<style lang="">

</style>

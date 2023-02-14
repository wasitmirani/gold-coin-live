<template>
    <apexchart  width="600" type="bar" :options="this.chart_options" :series="this.chart_series"></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    props: ['chart_options','chart_series'],
    components: {
        apexchart: VueApexCharts,
    },
    data(){
        return{
            options: {
                chart: {
                    id: 'vuechart-example'
                    },
                xaxis: {
                    categories: this.chart_options,
                    type: 'datetime',
                    },
                    fill: {
                    colors: ['#fac840', '#E91E63', '#9C27B0']
                    }
                },
                series: [{
                    name: 'series-1',
                    data: this.chart_series
                }]
        }
    },
    mounted(){
        console.log('dd', this.chart_options)
        console.log('chart_series', this.chart_series)
    }
}
</script>

<style>

</style>
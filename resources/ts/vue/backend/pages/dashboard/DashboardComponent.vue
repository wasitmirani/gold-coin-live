<template >

        <div class="row">
            <!-- View sales -->
            <div class="col-xl-4 mb-4 col-lg-5 col-12">
                <div class="card">
                    <div class="d-flex align-items-end row">
                        <div class="col-7">
                            <div class="card-body text-nowrap">
                                <h5 class="card-title mb-0">Hi, {{user?.name}}! 👋</h5>
                                <p class="mb-2">welcome to pharma digital goldcoin</p>
                                <!-- <h4 class="text-primary mb-1">$48.9k</h4> -->
                                <!-- <router-link to='my-transitions' class="btn btn-primary">View Sales</router-link> -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- View sales -->

       


        </div>
</template>
<script>

import PaymentChart from "./PaymentChart.vue"
export default {
    components:{ PaymentChart},
    data(){
      return {
        user:{name:"Wasit",email:"test@example.com"},
        analytics: {},
        payment_chart_date: [],
        payment_chart_sales: [],
        loading: true,

     }
    },
    methods:{
        getAnalytics(){
            axios.get('/dashboard/get-analytics').then(response => {
                     this.analytics = response.data.analytics;
                     this.payment_chart_date =  response.data.payment_charge.map(function (elem) {
                        return moment(elem.date).format("MMM-DD");
                        });
                     this.payment_chart_sales = response.data.payment_charge.map(function (elem) {
                            return elem.payment_charge;
                        });
                        console.log('payment_chart_date', this.payment_chart_date)
                        console.log('payment_chart_sales', this.payment_chart_sales)
                     this.loading= false;
                 }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })
        }
    },
    mounted(){
        this.getAnalytics()
    }
}
</script>
<style >

</style>

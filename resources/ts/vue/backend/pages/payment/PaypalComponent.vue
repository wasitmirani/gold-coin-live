<template >
    <div class="row justify-content-center">

        <div class="col-6 ">
            <div class="card h-100">
                <div class="card-body">
                    <form  v-on:submit.prevent="OnSubmit">

                        <div class="d-flex flex-wrap gap-2 justify-content-between mb-3">
                            <h5 class="text-uppercase">paypal Payment Method integration</h5>
                            <label class="switcher show-status-text">
                                <div class="form-check form-switch mb-2">
                                    <input v-model="paypal.mode" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Mode</label>
                                  </div>
                            </label>
                        </div>
                        <center class="mb-3">
                            <img src="/assets/images/paypal.png" alt="">
                        </center>
                        <div class="mb-3">
                            <label class="d-flex title-color">Choose environment</label>
                            <select v-model="paypal.env" class="js-example-responsive form-control" name="environment">
                                <option value="sandbox" selected="">Sandbox</option>
                                <option value="live">Live</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="d-flex title-color">Paypal ClientID</label>
                            <input type="text" v-model="paypal.clientid" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="d-flex title-color">Paypal Secret
                            </label>
                            <input type="text"  v-model="paypal.secret"  class="form-control" name="api_key" />
                        </div>
                        <div class="mt-3 d-flex flex-wrap justify-content-end gap-10">
                            <button type="submit" class="btn btn-primary px-4 text-uppercase">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
data:()=>({
    paypal:{},
}),
methods:{
    getpaypal(){
        axios.get('/payment-integration/paypal').then((res)=>{
            this.paypal = res.data.payment?.credentials;
        });
    },
    OnSubmit(){
        axios.post('/payment-integration/paypal',this.paypal).then((res)=>{
            this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
        });
    }
},
mounted() {
        this.getpaypal();
},
}
</script>
<style lang="">

</style>

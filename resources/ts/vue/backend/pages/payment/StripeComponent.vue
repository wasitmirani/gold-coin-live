<template >
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card h-100">
                <div class="card-body">
                    <form  v-on:submit.prevent="OnSubmit">

                        <div class="d-flex flex-wrap gap-2 justify-content-between mb-3">
                            <h5 class="text-uppercase">Stripe Payment Method integration</h5>
                            <label class="switcher show-status-text">
                                <div class="form-check form-switch mb-2">
                                    <input v-model="stripe.mode" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Mode</label>
                                  </div>
                            </label>
                        </div>
                        <center class="mb-3">
                            <img src="/assets/images/stripe.png" alt="">
                        </center>
                        <div class="mb-3">
                            <label class="d-flex title-color">Choose environment</label>
                            <select v-model="stripe.env" class="js-example-responsive form-control" name="environment">
                                <option value="sandbox" selected="">Sandbox</option>
                                <option value="live">Live</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="d-flex title-color">Published key</label>
                            <input type="text" v-model="stripe.published_key" class="form-control" name="published_key" />
                        </div>
                        <div class="mb-3">
                            <label class="d-flex title-color">Api key</label>
                            <input type="text"  v-model="stripe.api_key"  class="form-control" name="api_key" />
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
    stripe:{},
}),
methods:{
    getStripe(){
        axios.get('/payment-integration/stripe').then((res)=>{
        let data= res.data.payment?.credentials;
        if(data){
            this.stripe=data;
        }
        });
    },
    OnSubmit(){
        axios.post('/payment-integration/stripe',this.stripe).then((res)=>{
            this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
        });
    }
},
mounted() {
        this.getStripe();
},
}
</script>
<style lang="">

</style>

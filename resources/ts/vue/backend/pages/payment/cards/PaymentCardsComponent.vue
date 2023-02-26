<template >
    <breadcrumb active_name="My Payment Cards"></breadcrumb>
    <div class="row g-4 mb-4">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Payment Methods</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <form v-on:submit.prevent="onSubmit" id="creditCardForm"
                                class="row g-3 fv-plugins-bootstrap5 fv-plugins-framework fv-plugins-icon-container">
                                <div class="col-12 mb-2">
                                    <div class="form-check form-check-inline">
                                        <input name="collapsible-payment" class="form-check-input" type="radio" value=""
                                            id="collapsible-payment-cc" checked="">
                                        <label class="form-check-label" for="collapsible-payment-cc">Credit/Debit/ATM
                                            Card</label>
                                    </div>
                                    <!-- <div class="form-check form-check-inline">
                            <input name="collapsible-payment" class="form-check-input" type="radio" value="" id="collapsible-payment-cash">
                            <label class="form-check-label" for="collapsible-payment-cash">Paypal account</label>
                          </div> -->
                                </div>
                                <div class="col-12">
                                    <label class="form-label w-100" for="paymentCard">Card Number</label>
                                    <div class="input-group input-group-merge has-validation">
                                        <input id="paymentCard" name="paymentCard" class="form-control credit-card-mask"
                                            type="text" v-model="card.credentials.card_number" placeholder="1356 3215 6548 7898"
                                            aria-describedby="paymentCard2">
                                        <span class="input-group-text cursor-pointer p-1" id="paymentCard2"><span
                                                class="card-type"></span></span>
                                    </div>
                                    <div class="fv-plugins-message-container invalid-feedback"></div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label" for="paymentName">Name</label>
                                    <input type="text" v-model="card.credentials.name" id="paymentName" class="form-control"
                                        placeholder="John Doe">
                                </div>
                                <div class="col-6 col-md-3">
                                    <label class="form-label" for="paymentExpiryDate">Exp. Date</label>
                                    <input type="text" v-model="card.credentials.exp_date" id="paymentExpiryDate"
                                        class="form-control expiry-date-mask" placeholder="MM/YY">
                                </div>
                                <div class="col-6 col-md-3">
                                    <label class="form-label" for="paymentCvv">CVV Code</label>
                                    <div class="input-group input-group-merge">
                                        <input type="text" v-model="card.credentials.cvv" id="paymentCvv"
                                            class="form-control cvv-code-mask" maxlength="3" placeholder="654">
                                        <span class="input-group-text cursor-pointer" id="paymentCvv2"><i
                                                class="ti ti-help text-muted" data-bs-toggle="tooltip"
                                                data-bs-placement="top" aria-label="Card Verification Value"
                                                data-bs-original-title="Card Verification Value"></i></span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="switch">
                                        <input type="checkbox" v-model="card.primary_card" class="switch-input">
                                        <span class="switch-toggle-slider">
                                            <span class="switch-on"></span>
                                            <span class="switch-off"></span>
                                        </span>
                                        <span class="switch-label">Save card for future primary?</span>
                                    </label>
                                </div>
                                <div class="col-12 mt-4">
                                    <button v-if="!edit_mode" type="submit"
                                        class="btn btn-primary me-sm-3 me-1 waves-effect waves-light">Save
                                        Changes</button>
                                        <button v-else type="submit"
                                        class="btn btn-success me-sm-3 me-1 waves-effect waves-light">Update
                                        Changes</button>
                                    <button type="reset" class="btn btn-label-secondary waves-effect">Cancel</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 mt-5 mt-md-0">
                            <h6>My Cards</h6>
                            <div class="added-cards">
                                <div class="cardMaster bg-lighter p-3 rounded mb-3" v-for="item in cards" :key="item.id">
                                    <div class="d-flex justify-content-between flex-sm-row flex-column">
                                        <div class="card-information me-2">
                                            <!-- <img class="mb-3 img-fluid" :src="`/assets/images/${getImageType(item)}`" -->
                                                <!-- alt="> -->
                                            <div class="d-flex align-items-center mb-2 flex-wrap gap-2">
                                                <p class="mb-0 me-2">{{item.credentials.name}}</p>
                                                <span class="badge bg-label-dark" v-if="item.primary_card==1">Primary</span>
                                            </div>
                                            <span class="card-number">∗∗∗∗ ∗∗∗∗ {{item.credentials.card_number.substr(item.credentials.card_number.length - 4)}}</span>
                                        </div>
                                        <div class="d-flex flex-column text-start text-lg-end">
                                            <div class="d-flex order-sm-0 order-1 mt-sm-0 mt-3">
                                                <a role="button"   @click="editItem(item)"   class="text-dark"><i class="ti ti-edit ti-sm me-2"></i></a>
                                                <a role="button" @click="deleteItem(item)" class="text-danger delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a>
                                            </div>
                                            <small class="mt-sm-auto mt-2 order-sm-1 order-0">Card expires at
                                                {{item.credentials.exp_date}}</small>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    components: { breadcrumb },
    data: () => ({
        card: {
            credentials:{},
        },
        cards: {

        },
        edit_mode:false,
        errors:[],

    }),
    methods: {
        getImageType(item){
            console.log(item);
            switch (item.card_type) {
                case "Mastercard":
                    return "mastercard.png";
                    break;
                case "Visa":
                    return "visa.png";
                    break;

                default:
                    break;
            }
        },
        restForm(){
            this.card={
                credentials:{},
            };
            this.edit_mode=false;
        },
        editItem(item){
            this.edit_mode=true;
            this.card=item;
        },
        deleteItem(item){
                 Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                  if (result.isConfirmed) {
                         axios.delete(`payment-card/${item.id}`).then((res)=>{


                              this.$root.alertNotify(res.status,'Destroyed Successfuly','info',res.data);
                              this.getCards();
                           })
                  }
                  })

             },
      async  onSubmit(){
        this.card.card_type=this.GetCardType( this.card.credentials.card_number);
            if(!this.edit_mode){

                 await axios.post('/payment-card', this.card).then((res)=>{
                  this.$emit("created", this.card);
                  this.$root.alertNotify(res.status,'Created Successfuly','success',res.data);
                  this.restForm();
                  this.getCards();
                  }).catch((err)=>{
                    this.errors = err.response.data;
                          this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                  })
              } else{
                await axios.put('/payment-card/' + this.card?.id, this.card).then((res)=>{

                    this.$emit("updated", this.card);
                    this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
                    this.restForm();
                    this.getCards();
                }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })
            }
        },
        getCards(){
            axios.get('/payment-card').then((res)=>{
                this.cards=res.data.cards;
            });
        },
        GetCardType(number) {
            // visa
            var re = new RegExp("^4");
            if (number.match(re) != null)
                return "Visa";

            // Mastercard
            // Updated for Mastercard 2017 BINs expansion
            if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
                return "Mastercard";

            // AMEX
            re = new RegExp("^3[47]");
            if (number.match(re) != null)
                return "AMEX";

            // Discover
            re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
            if (number.match(re) != null)
                return "Discover";

            // Diners
            re = new RegExp("^36");
            if (number.match(re) != null)
                return "Diners";

            // Diners - Carte Blanche
            re = new RegExp("^30[0-5]");
            if (number.match(re) != null)
                return "Diners - Carte Blanche";

            // JCB
            re = new RegExp("^35(2[89]|[3-8][0-9])");
            if (number.match(re) != null)
                return "JCB";

            // Visa Electron
            re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
            if (number.match(re) != null)
                return "Visa Electron";

            return "N/A";
        }
    },
    mounted() {
        this.getCards();
    },
}
</script>
<style lang="">

</style>

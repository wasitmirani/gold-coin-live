<template >
    <form v-on:submit.prevent="onSubmit">
        <div class="row">
            <div class="col-md-12 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Wallet ID*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'wallet_id')}`"
                    v-model="invoice.wallet_id" placeholder="Enter Wallet ID"  />
                <validate-input :errors="errors?.errors" value="wallet_id"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Invoice To*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'invoice_to')}`"
                    v-model="invoice.invoice_to" placeholder="Enter invoice to email"  />
                <validate-input :errors="errors?.errors" value="invoice_to"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Recipient Email*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'recipient_email')}`"
                    v-model="invoice.recipient_email" placeholder="Enter recipient email"  />
                <validate-input :errors="errors?.errors" value="recipient_email"></validate-input>
            </div>
            <div class="col-12 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Address</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'address')}`"
                    v-model="invoice.address" placeholder="Enter Address"  />
                <validate-input :errors="errors?.errors" value="address"></validate-input>
            </div>
            <div class="col-12 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Description</label>
                <textarea rows="3" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                    v-model="invoice.description" placeholder="Enter description"  />
                <validate-input :errors="errors?.errors" value="description"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label for="currency" class="form-label">Currency</label>
                  <div class="position-relative">
                    <select id="currency" v-model="invoice.currency" class="select2 form-select select2-hidden-accessible" data-select2-id="currency" tabindex="-1" aria-hidden="true">
                    <option value="" data-select2-id="8">Select Currency</option>
                    <option value="usd">USD</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                    <option value="bitcoin">Bitcoin</option>
                  </select>
                  <validate-input :errors="errors?.errors" value="currency"></validate-input>
                </div>
            </div>
            <div class="row mb-2" v-for="(item,index) in items" :key="index">
                <div class="col-md-5 col-sm-12 mb-1">
                    <label class="form-label" for="accountFirstName">item Name</label>
                    <!-- ${this.$root.appendValidateClass(errors?.errors, 'address')} -->
                    <input type="text" :class="`form-control `" v-model="items[index].name" placeholder="Enter item name"  />
                    <!-- <validate-input :errors="errors?.errors" value="address"></validate-input> -->
                </div>
                <div class="col-md-5 col-sm-12 mb-1">
                    <label class="form-label" for="accountFirstName">item Amount</label>
                    <!-- ${this.$root.appendValidateClass(errors?.errors, 'address')} -->
                    <input type="text" :class="`form-control `" v-model="items[index].amount" placeholder="Enter item amount"  />
                    <!-- <validate-input :errors="errors?.errors" value="address"></validate-input> -->
                </div>
                <div class="col-md-2 col-sm-12 ">
                    <div class=" align-self-end text-end" style="    margin-top: 24px;">
                        <button  type="button"  v-if="  index != Object.keys(items).length - 1 "   @click="removeItem(index)" class="btn btn-icon btn-danger waves-effect">
                            <span class="ti ti-square-x"></span>
                          </button>
                        <button type="button" v-else  @click="addItem" class="btn btn-icon btn-primary waves-effect">
                            <span class="ti ti-plus"></span>
                          </button>

                    </div>

                </div>

            </div>
            <hr>
            <div class="row">

                <div class="col-12" v-if="!edit_mode">
                                 <button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Submit</button>
                                 <button type="reset" data-bs-dismiss="modal" class="btn btn-outline-danger waves-effect">Close</button>
                             </div>
                             <div class="col-12" v-else>
                                 <button type="submit" class="btn btn-success me-1 waves-effect waves-float waves-light">Update</button>
                            </div>
            </div>
        </div>
    </form>

</template>
<script>
 import ValidateInput from "../../components/ValidateInputComponent.vue";
export default {
    props:['edit_mode','form'],
    components:{ValidateInput},
    data:()=>({
    invoice:{},
    errors:{},
    items:[{
       name:"",
       amount:0,
    }],
    }),
    methods: {
        addItem(){
            this.items.push({
                name:"",
                amount:0,
            })
        },
        restForm(){
            this.invoice={};
            this.items=[{
               name:"",
               amount:0,
            }];
        },
        removeItem(key){
            this.items = this.items.filter((todo, index) => {
                return index !== key
            });
        },

        async  onSubmit(){
                let data={...this.invoice,items:this.items};
              if(!this.edit_mode){
                 await axios.post('/invoice', data).then((res)=>{
                  this.$emit("created", data);
                  this.$root.alertNotify(res.status,'Created Successfuly','success',res.data);
                  this.restForm();
                  }).catch((err)=>{
                    this.errors = err.response.data;
                          this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                  })
              } else{
                this.invoice.items=this.items;
                await axios.put('/invoice/' + this.form.id, this.invoice).then((res)=>{

                    this.$emit("updated", this.invoice);
                    this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
                    this.restForm();
                }).catch((err)=>{
                    this.errors = err.response.data;
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })
            }
          },
    },
    watch: {
      form(collection) {

       if (collection == null) {

          return this.restForm();
        }
        if (collection) {

          if(collection.items)
           this.items=collection.items;
          this.invoice = collection;

        } else {
          this.restForm();
        }
       }
      },

}
</script>
<style lang="">

</style>

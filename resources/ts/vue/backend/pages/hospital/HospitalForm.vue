<template >
    <form v-on:submit.prevent="onSubmit">
        <div class="row">
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital Name</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`"
                    v-model="hospital.name" placeholder="Enter Hospital Name"  />
                <validate-input :errors="errors?.errors" value="name"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital Email*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`"
                    v-model="hospital.email" placeholder="Enter hospital email"  />
                <validate-input :errors="errors?.errors" value="email"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital Phone Number*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'phone')}`"
                    v-model="hospital.phone" placeholder="Enter hospital phone"  />
                <validate-input :errors="errors?.errors" value="phone"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital site*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'site')}`"
                    v-model="hospital.site" placeholder="Enter hospital website"  />
                <validate-input :errors="errors?.errors" value="site"></validate-input>
            </div>
            <div class="col-12 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital Address</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'address')}`"
                    v-model="hospital.address" placeholder="Enter Address"  />
                <validate-input :errors="errors?.errors" value="address"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital city*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'city')}`"
                    v-model="hospital.city" placeholder="Enter hospital city"  />
                <validate-input :errors="errors?.errors" value="city"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital country*</label>
                <input type="text" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'country')}`"
                    v-model="hospital.country" placeholder="Enter hospital country"  />
                <validate-input :errors="errors?.errors" value="country"></validate-input>
            </div>
            <div class="col-md-6 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Hospital Logo*</label>
                <upload-media v-if="updateImage" class="round" server="/hospital-thumbnail-upload" @media="Media" ref="upload-media"/>

            </div>

            <div class="col-12 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Terms & Conditions</label>
                <textarea rows="3" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'terms_conditions')}`"
                    v-model="hospital.terms_conditions" placeholder="Enter Terms & Conditions"  />
                <validate-input :errors="errors?.errors" value="terms_conditions"></validate-input>
            </div>
            <div class="col-12 col-sm-12 mb-1">
                <label class="form-label" for="accountFirstName">Description</label>
                <textarea rows="3" :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                    v-model="hospital.description" placeholder="Enter description"  />
                <validate-input :errors="errors?.errors" value="description"></validate-input>
            </div>
            <hr class="mt-4">
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
 import { UploadMedia, UpdateMedia } from "vue-media-upload";
export default {
    props:['edit_mode','form'],
    components:{ValidateInput,UploadMedia},
    data:()=>({
    hospital:{},
    media:[],
    errors:{},
    }),
    mounted() {
    if(this.edit_mode){
      this.hospital=this.form;
    }
  },
    methods: {
        Media(value){
            if(this.media.length > 1){
                this.media.splice(0,1);
                if(this.$refs['upload-media'] != undefined)
                    this.$refs['upload-media'].reset();
            }
            this.media = [];
            this.media = value;
            if(this.media){
                console.log(this?.$refs['upload-media'].media);
                // console.log(this.$refs?.upload-media?.media);
                this.app_settings.thumbnail = this.media[0]?.name;
            }


        },
        addItem(){
            this.items.push({
                name:"",
                amount:0,
            })
        },
        restForm(){
            this.hospital={};
            this.items=[{
               name:"",
               amount:0,
            }];
        },

        async  onSubmit(){
                let data={...this.hospital,items:this.items};
              if(!this.edit_mode){
                 await axios.post('/hospital', data).then((res)=>{
                  this.$emit("created", data);
                  this.$root.alertNotify(res.status,'Created Successfuly','success',res.data);
                  this.restForm();
                  }).catch((err)=>{
                    this.errors = err.response.data;
                          this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                  })
              } else{
                this.hospital.items=this.items;
                await axios.put('/hospital/' + this.form.id, this.hospital).then((res)=>{
                    this.$router.push("/portal/hospitals" );
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
          this.hospital = collection;

        } else {
          this.restForm();
        }
       }
      },

}
</script>
<style lang="">

</style>

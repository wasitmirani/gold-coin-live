<template>
  <div>
    <div class="row pd-40">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title text-muted">Platform Base Data</h4>
            </div>
            <loader-box v-if="loading"></loader-box>
            <div v-else class="card-body">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="row">
                            <div class="col-sm-3 mb-1">

                                <label class="col-form-label" for="first-name">Company Image</label>

                            </div>
                            <div class="col-sm-9 mb-1">
                                <upload-media v-if="updateImage" class="round" server="/app-thumbnail-upload" @media="Media" ref="upload-media">
                                </upload-media>
                                <div v-else class="profile-img app-setting-image">
                                    <img class="round" :src="`${url}/img/app/${this.app_settings?.thumbnail}`" height="150" width="150" alt="img-placeholder" />
                                    <i @click="updateImage = true" class="fa fa-close ml-4 cursor-pointer"></i>
                                </div>
                            </div>
                        </div>
                        <form class="form form-horizontal" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Company Name</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="company-name" class="form-control" name="company_name" v-model="app_settings.company_name" placeholder="Company Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Tax ID</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="tax_id" class="form-control" name="tax_id" v-model="app_settings.tax_id" placeholder="Tax Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">VAT No</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="vat_no" class="form-control" name="vat_no" v-model="app_settings.vat_no" placeholder="VAT No" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">HBR No</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="hbr_no" class="form-control" name="hbr_no" v-model="app_settings.hbr_no" placeholder="HBR No" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Provisional Client</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="number" id="provisional_client" class="form-control" name="provisional_client" v-model="app_settings.provisional_client" placeholder="Provisional Client" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Provisional Contractor</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="number" id="provisional_contractor" class="form-control" name="provisional_contractor" v-model="app_settings.provisional_contractor" placeholder="Provisional Contractor" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Handling Fee</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="number" id="handling_fee" class="form-control" name="handling_fee" v-model="app_settings.handling_fee" placeholder="Handling Fee" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 offset-sm-3">
                                    <button type="submit" class="
                        btn btn-primary
                        me-1
                          waves-effect waves-float waves-light float-right
                      ">
                                        Submit
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <h2>Address <i class="fa fa-plus-circle"></i></h2>
                        <form class="form form-horizontal" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Country Name</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <!-- <input
                                              type="text"
                                              id="country"
                                              class="form-control"
                                              name="country"
                                              v-model="app_settings.country"
                                              placeholder="Country Name"
                                            /> -->
                                            <select class="form-select" id="selectDefault" v-model="app_settings.country">
                                                <option v-for="(country, index) in countries" :key="index" :value="country.country_code">{{country.country_name}}</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Street / House No</label>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" id="street" class="form-control" name="street" v-model="app_settings.street" placeholder="Street" />
                                        </div>
                                        <div class="col-sm-3">
                                            <input type="text" id="house_no" class="form-control" name="house_no" v-model="app_settings.house_no" placeholder="House No" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Zip code / Town</label>
                                        </div>
                                        <div class="col-sm-3">
                                            <input type="text" id="zip_code" class="form-control" name="zip_code" v-model="app_settings.zip_code" placeholder="Zip code" />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" id="town" class="form-control" name="town" v-model="app_settings.town" placeholder="Town" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">State</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="state" class="form-control" name="state" v-model="app_settings.state" placeholder="State" />
                                        </div>
                                    </div>
                                    <div class="form-check form-check-primary form-switch">
                                        <input type="checkbox" name="use_as_billing" v-model="app_settings.use_as_billing" :checked="app_settings.use_as_billing == 1" class="form-check-input mt-6" id="customSwitch3">
                                        <label class="col-form-label" for="first-name">Use as billing address?</label>
                                    </div>
                                </div>
                                <div class="col-sm-9 offset-sm-3">
                                    <button type="submit" class="
                        btn btn-primary
                        me-1
                          waves-effect waves-float waves-light float-right
                      ">
                                        Submit
                                    </button>

                                </div>
                            </div>
                        </form>

                        <h2>Contact <i class="fa fa-plus-circle"></i></h2>
                        <form class="form form-horizontal" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Billing E-mail</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="billing_email" class="form-control" name="billing_email" v-model="app_settings.billing_email" placeholder="Billing E-mail" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Support Email</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="support_email" class="form-control" name="support_email" v-model="app_settings.support_email" placeholder="Support Email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Phone</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="phone" class="form-control" name="phone" v-model="app_settings.phone" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-1 row">
                                        <div class="col-sm-3">
                                            <label class="col-form-label" for="first-name">Mobile</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" id="mobile" class="form-control" name="mobile" v-model="app_settings.mobile" placeholder="Mobile" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 offset-sm-3">
                                    <button type="submit" class="
                        btn btn-primary
                        me-1
                          waves-effect waves-float waves-light float-right
                      ">
                                        Submit
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { UploadMedia, UpdateMedia } from "vue-media-upload";
import LoaderBox from "../../components/LoaderBoxComponent.vue";
export default {
  components: { UploadMedia, LoaderBox},
  data() {
    return {
      app_settings: {},
      media: [],
      url:this.hosturl,
      api_url: '/app-thumbnail-upload',
      updateImage: false,
      loading: false,
      countries: [],
    };
  },

  methods:{
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
        async onSubmit(){
            this.loading = true;
           await axios.post('dashboard/app-settings', this.app_settings).then((res)=>{
                this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
                this.getAppSettings();
                this.loading = false

           }).catch((err)=>{
                 this.$root.alertNotify(err.response.status,null,'error', err.response.data);
           })
        },

        getAppSettings(){
             this.loading = true;
            axios.get('dashboard/app-settings').then((res)=>{
              this.app_settings = res.data.app_settings;
              this.countries = res.data.countries;
                  this.loading = false
           })
        }



  },
  mounted() {
    this.getAppSettings()
  },
};
</script>

<style>
.image-container .images-preview{
    height: 100px !important;
    width: 130px !important;
    border: 1px solid #e1e1e1;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
}
</style>

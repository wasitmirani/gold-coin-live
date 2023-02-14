<template >
    <div class="col-md-12">

        <div class="card mb-4">
          <h5 class="card-header">Add User Details</h5>
          <!-- Account -->
          <div class="card-body">
            <div class="d-flex align-items-start align-items-sm-center gap-4">

              <div class="button-wrapper">

                <upload-media
                server="/upload/user-thumbanail"
                @media='Media'
                ref="upload-media"
                >
              </upload-media>

                <div class="text-muted">Allowed JPG, GIF or PNG. Max size of 800K</div>
              </div>
            </div>
          </div>
          <hr class="my-0">
          <div class="card-body">
            <form id="formAccountSettings"  v-on:submit.prevent="onSubmit" class="fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
              <div class="row">
                <div class="mb-3 col-md-6 fv-plugins-icon-container">
                  <label for="firstName" class="form-label">Full Name</label>
                  <input type="text" v-model="user.name"
                    :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`"
                    placeholder="Full Name" />
                <validate-input :errors="errors?.errors" value="name"></validate-input>
                </div>

                <div class="mb-3 col-md-6">
                  <label for="email" class="form-label">E-mail</label>
                  <input  :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`" type="text" v-model="user.email" id="email" name="email"  placeholder="john.doe@example.com">
                  <validate-input :errors="errors?.errors" value="email"></validate-input>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6 form-password-toggle fv-plugins-icon-container">
                    <label class="form-label" for="newPassword"> Password</label>
                    <div class="input-group input-group-merge has-validation">
                      <input :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'password')}`" v-model="user.password" type="password" id="newPassword" name="newPassword" placeholder="············">
                      <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>
                    </div>


                    <validate-input :errors="errors?.errors" value="password"></validate-input>
                  </div>

                  <div class="mb-3 col-md-6 form-password-toggle fv-plugins-icon-container">
                    <label class="form-label" for="confirmPassword">Confirm  Password</label>
                    <div class="input-group input-group-merge has-validation">
                      <input v-model="user.password_confirmation" class="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="············">
                      <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i>
                      </span>
                    </div><div class="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <div class="col-12 mb-4">
                    <h6>Password Requirements:</h6>
                    <ul class="ps-3 mb-0">
                      <li class="mb-1">Minimum 8 characters long - the more, the better</li>
                      <li class="mb-1">At least one lowercase character</li>
                      <li>At least one number, symbol, or whitespace character</li>
                    </ul>
                  </div>

                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label" for="phoneNumber">Phone Number</label>
                  <div class="input-group input-group-merge">
                    <!-- <span class="input-group-text">US (+1)</span> -->
                    <input type="text" id="phoneNumber" v-model="user.phone" name="phoneNumber"  :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'phone')}`" placeholder="202 555 0111">

                    <validate-input :errors="errors?.errors" value="phone"></validate-input>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                    <label class="form-label" for="accountFirstName">Roles</label>
                      <VueMultiselect  :limit="3" v-model="user.roles" :options="roles"  :multiple="false" :taggable="true" :close-on-select="true" tag-placeholder="Add this as role" placeholder="Search role" label="name" track-by="id"/>
                </div>
                <div class="mb-3 col-md-6">
                    <label class="form-label" for="accountFirstName">Hospital</label>
                      <VueMultiselect  :limit="3" v-model="user.hospital" :options="hospitals"  :multiple="false" :taggable="true" :close-on-select="true" tag-placeholder="Add this as hospital" placeholder="Search hospital" label="name" track-by="id"/>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="address" class="form-label">Address</label>

                  <input type="text" id="phoneNumber" v-model="user.address" name="phoneNumber"  :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'address')}`" placeholder="Address">

                  <validate-input :errors="errors?.errors" value="address"></validate-input>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="state" class="form-label">City</label>
                  <input class="form-control" type="text" v-model="user.city" id="state" name="state" placeholder="San ">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="state" class="form-label">State</label>
                  <input class="form-control" type="text" v-model="user.state" id="state" name="state" placeholder="California">
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label" for="country">Country</label>
                  <div class="position-relative">
                    <select v-model="user.country" id="country" class="select2 form-select select2-hidden-accessible" data-select2-id="country" tabindex="-1" aria-hidden="true">
                    <option value="" data-select2-id="2">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select></div>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="language" class="form-label">Language</label>
                  <div class="position-relative">
                    <select id="language"  v-model="user.language"  :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'language')}`" data-select2-id="language" tabindex="-1" aria-hidden="true">
                    <option value="" data-select2-id="4">Select Language</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="pt">Portuguese</option>
                  </select>
                  <validate-input :errors="errors?.errors" value="language"></validate-input>
                </div>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="timeZones" class="form-label">Timezone</label>
                  <div class="position-relative">
                    <select id="timeZones" v-model="user.timezone" class="select2 form-select select2-hidden-accessible" data-select2-id="timeZones" tabindex="-1" aria-hidden="true">
                    <option value="" data-select2-id="6">Select Timezone</option>
                    <option value="-12">(GMT-12:00) International Date Line West</option>
                    <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                    <option value="-10">(GMT-10:00) Hawaii</option>
                    <option value="-9">(GMT-09:00) Alaska</option>
                    <option value="-8">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                    <option value="-8">(GMT-08:00) Tijuana, Baja California</option>
                    <option value="-7">(GMT-07:00) Arizona</option>
                    <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                    <option value="-7">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                    <option value="-6">(GMT-06:00) Central America</option>
                    <option value="-6">(GMT-06:00) Central Time (US &amp; Canada)</option>
                    <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                    <option value="-6">(GMT-06:00) Saskatchewan</option>
                    <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                    <option value="-5">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                    <option value="-5">(GMT-05:00) Indiana (East)</option>
                    <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                    <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                  </select></div>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="currency" class="form-label">Currency</label>
                  <div class="position-relative">
                    <select id="currency" v-model="user.currency" class="select2 form-select select2-hidden-accessible" data-select2-id="currency" tabindex="-1" aria-hidden="true">
                    <option value="" data-select2-id="8">Select Currency</option>
                    <option value="usd">USD</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                    <option value="bitcoin">Bitcoin</option>
                  </select></div>
                </div>
              </div>
              <div class="mt-2">
                <button type="submit" class="btn btn-primary me-2 waves-effect waves-light" v-if="!edit_mode">Submit</button>
                <button type="submit" class="btn btn-success me-2 waves-effect waves-light" v-else>Update</button>
                <button type="reset" class="btn btn-label-secondary waves-effect">Cancel</button>
              </div>
           </form>
          </div>
          <!-- /Account -->
        </div>

      </div>
</template>
<script>
import { UploadMedia, UpdateMedia } from 'vue-media-upload';
import ValidateInput from "../../components/ValidateInputComponent.vue";
import VueMultiselect from 'vue-multiselect'
export default {
  props:['edit_mode','form'],
  components: {
    UploadMedia,
    UpdateMedia,
    ValidateInput,
    VueMultiselect
  },
  data:()=>({
    user:{},
    media:[],
    roles:[],
    errors:[],
    hospitals:[],
    // url:this.hosturl,
  }),
  methods: {
    restForm(){
            this.user={};
        },
      async  onSubmit(){
            if(!this.edit_mode){
               await axios.post('/user', this.user).then((res)=>{
                this.$router.push("/portal/users" );
                this.$root.alertNotify(res.status,'Created Successfuly','success',res.data);
                this.restForm();
                }).catch((err)=>{
                  this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);

                })
            } else{
              await axios.put('/user/' + this.form.id, this.user).then((res)=>{
                this.$router.push("/portal/users" );
                  this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
                //   this.restForm();
              }).catch((err)=>{
                this.$router.push("/users" );
                  this.$root.alertNotify(err.response.status,null,'error', err.response.data);
              })
          }
      },
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
                this.user.thumbnail = this.media[0]?.name;
            }
        },
        restForm(){
            this.wastage={};
        },
        getRoles(){
            axios.get('/roles').then((res)=>{
                this.roles=res.data.roles;
            });
        },
        getHospitals(){
            axios.get('/hospitals').then((res)=>{
                this.hospitals=res.data.hospitals;
            });
        },
        onSavedMedia(media){
            console.log(media);
        },
  },
  mounted() {
  this.getRoles();
  this.getHospitals();
    if(this.edit_mode){
      this.user=this.form;
    }
  },

}
</script>
<style lang="">

</style>

<template >
   <div>
    <div class="row">
        <div class="col-xl-12 col-lg-12 pd-40">

            <ul class="nav nav-pills card-header-pills" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="homeIcon-tab" data-bs-toggle="tab" href="#homeIcon" aria-controls="home" role="tab" aria-selected="true">
                Account
                </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profileIcon-tab" data-bs-toggle="tab" href="#profileIcon" aria-controls="profile" role="tab" aria-selected="false">
                Security</a>
                </li>

                <!-- <li class="nav-item">
              <a class="nav-link" id="aboutIcon-tab" data-bs-toggle="tab" href="#aboutIcon" aria-controls="about" role="tab" aria-selected="false">
              Account
              </a>
            </li> -->
            </ul>
            <div class="tab-content mt-4">
                <div class="tab-pane active" id="homeIcon" aria-labelledby="homeIcon-tab" role="tabpanel">


                    <div class="card-header border-bottom">
                        <h4 class="card-title">Profile Details</h4>
                    </div>
                    <div class="card-body py-2 my-25">
                        <!-- header section -->
                        <div class="d-flex">
                            <a href="#" class="me-25">
                                <img :src="auth_user.thumbnail" id="account-upload-img" class="uploadedAvatar rounded me-50" alt="profile image" height="100" width="100">
                            </a>
                            <!-- upload and reset button -->
                            <div class="d-flex align-items-end mt-75 ms-1">
                                <div>
                                    <label for="account-upload" class="btn btn-sm btn-primary mb-75 me-75 waves-effect waves-float waves-light">Upload</label>
                                    <input type="file" id="account-upload" hidden="" accept="image/*">
                                    <button type="button" id="account-reset" class="btn btn-sm btn-outline-secondary mb-75 waves-effect">Reset</button>
                                    <p class="mb-0">Allowed file types: png, jpg, jpeg.</p>
                                </div>
                            </div>
                            <!--/ upload and reset button -->
                        </div>
                        <!--/ header section -->

                        <!-- form -->
                        <errors-component :errors="errors" />
                        <form class="validate-form mt-2 pt-50" novalidate="novalidate" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="accountFirstName">Full Name</label>
                                    <input type="text" class="form-control" id="accountFirstName" name="firstName" placeholder="John" v-model="auth_user.name" data-msg="Please enter first name">
                                </div>
                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="accountLastName">Email Address</label>
                                    <input type="email" class="form-control" data-msg="Please enter email" v-model="auth_user.email">
                                </div>


                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label">Phone Number</label>
                                    <input type="text" class="form-control" v-model="auth_user.phone">
                                </div>

                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="accountAddress">Bio</label>
                                    <input type="text" class="form-control" id="accountAddress" v-model="auth_user.bio">
                                </div>
                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="accountState">Meta Title</label>
                                    <input type="text" class="form-control" id="accountState" name="state" v-model="auth_user.meta_title">
                                </div>
                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="accountZipCode">Meta description</label>
                                    <input type="text" class="form-control account-zip-code" id="accountZipCode" v-model="auth_user.meta_description">
                                </div>



                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary mt-1 me-1 waves-effect waves-float waves-light">Save changes</button>

                                </div>
                            </div>
                        </form>
                        <!--/ form -->
                    </div>


                    <div class="card-header border-bottom">
                        <h4 class="card-title">Delete Account</h4>
                    </div>
                    <div class="card-body py-2 my-25">
                        <div class="alert alert-warning">
                            <h4 class="alert-heading">Are you sure you want to delete your account?</h4>
                            <div class="alert-body fw-normal">
                                Once you delete your account, there is no going back. Please be certain.
                            </div>
                        </div>

                        <form id="formAccountDeactivation" class="validate-form" onsubmit="return false" novalidate="novalidate">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="accountActivation" id="accountActivation" data-msg="Please confirm you want to delete account">
                                <label class="form-check-label font-small-3" for="accountActivation">
                                    I confirm my account deactivation
                                </label>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-danger deactivate-account mt-1 waves-effect waves-float waves-light">Deactivate Account</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="tab-pane" id="profileIcon" aria-labelledby="profileIcon-tab" role="tabpanel">

                    <div class="card-header border-bottom">
                        <h4 class="card-title">Change Password</h4>
                    </div>
                    <div class="card-body pt-1">
                        <!-- form -->
                        <errors-component :errors="errors" />
                        <form class="validate-form" novalidate="novalidate" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="account-old-password">Current password</label>
                                    <div class="input-group form-password-toggle input-group-merge">
                                        <input type="password" class="form-control" required="true" v-model="auth_user.current_password" name="password" placeholder="Enter current password" data-msg="Please current password">
                                        <div class="input-group-text cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="account-new-password">New Password</label>
                                    <div class="input-group form-password-toggle input-group-merge">
                                        <input type="password" id="account-new-password" required v-model="auth_user.password" name="new-password" class="form-control" placeholder="Enter new password">
                                        <div class="input-group-text cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-1">
                                    <label class="form-label" for="account-retype-new-password">Retype New Password</label>
                                    <div class="input-group form-password-toggle input-group-merge">
                                        <input type="password" required v-model="auth_user.password_confirmation" class="form-control" id="account-retype-new-password" name="confirm-new-password" placeholder="Confirm your new password">
                                        <div class="input-group-text cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <p class="fw-bolder">Password requirements:</p>
                                    <ul class="ps-1 ms-25">
                                        <li class="mb-50">Minimum 8 characters long - the more, the better</li>
                                        <li class="mb-50">At least one lowercase character</li>
                                        <li>At least one number, symbol, or whitespace character</li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary me-1 mt-1 waves-effect waves-float waves-light">Save changes</button>

                                </div>
                            </div>
                        </form>
                        <!--/ form -->
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="disabledIcon" aria-labelledby="disabledIcon-tab" role="tabpanel">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam.
                </p>
            </div>
            <div class="tab-pane" id="aboutIcon" aria-labelledby="aboutIcon-tab" role="tabpanel">
                <p>
                    Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie halvah oat cake cotton candy sweet roll.
                    Cotton candy sweet roll donut ice cream.
                </p>
                <p>
                    Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
                </p>
            </div>
        </div>
    </div>

</div>

</template>
<script>
import ErrorsComponent from "../../layouts/components/ErrorsComponent.vue";
export default {
    components: {
        ErrorsComponent
    },
    data(){
        return{
             url:this.hosturl,
             auth_user:user,
             errors:[],
        };
    },
    methods:{
        async onSubmit(){
         await   axios.post('/update-auth-user',this.auth_user).then(res=>{
             this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
            }).catch((err)=>{
                 this.errors=err.response.data;
                 this.$root.alertNotify(err.response.status,null,'error', err.response.data);
           })
        },
        deactivateAccount(){
            this.$http.delete(this.url+'/api/user/'+this.auth_user.id).then(response=>{
                this.$router.push('/login');
            });
        }
    },
}
</script>
<style lang="">

</style>

<template>
    <div>
          <form v-on:submit.prevent="onSubmit">
              <div class="row">
          <div class="col-12 col-sm-12 mb-1">
                  <label class="form-label" for="accountFirstName">Role Name*</label>
                  <input  type="text"  :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`" v-model="role.name"  placeholder="Enter role name"  data-msg="Please enter name"/>

              <validate-input :errors="errors?.errors" value="name"></validate-input>

                </div>
          <hr class=" mb-2">
          <div class="col-12 col-sm-12 mb-1">
            <h5 class="card-header mb-4">Basic Permissions List</h5>
          <div class="row">
            <div class="col-12 permission-pendings" v-if="permissions.length<1">
                <div class="alert alert-warning" role="alert">
                    Empty! <a href="#" class="alert-link"> permissions are not available  </a>
                  </div>
            </div>
           <div v-else class="col-6 permission-pendings" v-for="permission in permissions" :key="permission.id">
               <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="selected_permissions" :id="`inlineCheckbox${permission.id}`" :value="permission.id"  />
               <strong> <label class="form-check-label" :for="`inlineCheckbox${permission.id}`">{{permission.name}}</label></strong>
              </div>
          </div>
          </div>

           <!-- <Multiselect v-model="role.users"   :createTag="true"      mode="tags" label="name"  placeholder="Choose a user"  :minChars="1"   :searchable="true"   :options="getUsers()" /> -->
          </div>
            <hr>
             <div class="col-12" v-if="!editmode">
                              <button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Submit</button>
                              <button type="reset" data-bs-dismiss="modal" class="btn btn-outline-danger waves-effect">Close</button>
                          </div>
                          <div class="col-12" v-else>
                              <button type="submit" class="btn btn-success me-1 waves-effect waves-float waves-light">Update</button>
                          </div>

      </div>
          </form>
    </div>
  </template>

  <script>
  import VueMultiselect from 'vue-multiselect'
  import ValidateInput from "../../components/ValidateInputComponent.vue";
  export default {

      components:{VueMultiselect,ValidateInput},
      props:['editmode','editForm','permissions'],
       name: 'RoleForm',
      data(){
          return {
              role: {},
              selected_permissions:[],
              errors: {},

          }
      },
       watch: {
      editForm(collection) {

       if (collection == null) {

          return this.restForm();
        }
        if (collection) {
              console.log("reset",collection);
          this.selected_permissions=collection?.permissions?.map((permission)=>permission.id);
          this.role = collection;

        } else {
           console.log("reset",collection);
          this.restForm();
        }

        this.selected_permissions=[];
       }
      },
      methods: {

          restForm(){
              this.role = {};
              this.selected_permissions=[];
          },
          async  onSubmit(){
               this.role.permissions=this.selected_permissions;
              if(!this.editmode){
                 await axios.post('/role', this.role).then((res)=>{
                  this.$emit("created", this.role);
                  this.$root.alertNotify(res.status,'Created Successfuly','success',res.data);
                  this.restForm();
                  }).catch((err)=>{
                    this.errors = err.response.data;
                          this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                  })
              } else{
                await axios.put('/role/' + this.editForm.id, this.role).then((res)=>{

                    this.$emit("updated", this.role);
                    this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
                    this.restForm();
                }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })
            }
          },
          getUsers(){
              console.log("getUsers",this.users);
              // return this.users?.map((x)=>{
              //     return {
              //         value:x.id,
              //         name:x.name,
              //     }
              //  })
          }
      },
      created(){
          this.getUsers();

      }

  }
  </script>

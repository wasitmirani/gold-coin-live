<template>
    <div>
          <form v-on:submit.prevent="onSubmit">
              <div class="row">
          <div class="col-12 col-sm-12 col-md-6 mb-1">
                  <label class="form-label" for="accountFirstName">Permission Name*</label>
                  <input  type="text" class="form-control" v-model="permission.name"  placeholder="Enter  name"  data-msg="Please enter name"/>
          </div>
          <div class="col-12 col-sm-12 col-md-6 mb-1">
              <label class="form-label" for="accountFirstName">Users</label>
                <VueMultiselect  :limit="3" v-model="permission.users" :options="users"  :multiple="true" :taggable="true" :close-on-select="true" tag-placeholder="Add this as  user" placeholder="Search name" label="name" track-by="id"/>
          </div>
            <div class="col-12 col-sm-12 col-md-6 mb-1">
              <label class="form-label" for="accountFirstName">Roles</label>
                <VueMultiselect  :limit="3" v-model="permission.roles" :options="roles"  :multiple="true" :taggable="true" :close-on-select="true" tag-placeholder="Add this as role" placeholder="Search role" label="name" track-by="id"/>
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
  export default {

      components:{VueMultiselect},
      props:['editmode','editForm','users','roles'],
       name: 'PermissionForm',
      data(){
          return {
              permission: {},
          }
      },
       watch: {
      editForm(collection) {
       if (collection == null) {

          return this.restForm();
        }
        if (collection) {

          this.permission = collection;

        } else {

          this.restForm();
        }
       }
      },
      methods: {
        
          restForm(){
              this.permission = {};
          },
          async  onSubmit(){
              if(!this.editmode){
                 await axios.post('/permission', this.permission).then((res)=>{
                  this.$emit("created", this.permission);
                  this.$root.alertNotify(res.status,'Created Successfuly','success',res.data);
                  this.restForm();
                  }).catch((err)=>{
                          this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                  })
              } else{
                await axios.put('/permission/' + this.editForm.id, this.permission).then((res)=>{

                    this.$emit("updated", this.permission);
                    this.$root.alertNotify(res.status,'Updated Successfuly','success',res.data);
                  //   this.restForm();
                }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })
            }
          },

      },


  }
  </script>
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>
  <style>

  </style>

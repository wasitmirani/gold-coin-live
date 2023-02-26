<template>
    <div>
        <breadcrumb active_name="Permissions List" :previous="[{name:'Users',link:'/portal/users'}]" ></breadcrumb>
        <div class="row">
          <div class="d-flex justify-content-between align-items-center mb-3">
              <div>
                  <h5 class="card-title">Permissions List</h5>
              </div>
              <div>
                  <a  role="button" style="float:right"   @click="modalOpen"  class="dt-button add-new btn btn-primary"
                    type="button">
                    <span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i>
                      <span class="d-none d-sm-inline-block"> New Permission</span></span>
                    </a>
              </div>
          </div>

                 <div class="card">

          <div class="card-body border-bottom">

          <div class="row">
               <div class="col-xl-4 col-md-6 col-12">
                <search-input label="Search By Permission" :apiurl="'/permission?page=' +this.page_num" v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getpermissions()" v-on:filterData="filterData($event)" ></search-input>
              </div>

          </div>
          </div>
          <div class="card-datatable table-responsive pt-0">
              <loader-box v-if="loading"></loader-box>
              <permission-table v-else :permissions="this.permissions" :query="query" :getPermissions="getPermissions" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)"/>
          </div>

           </div>
          </div>


               <!-- Modal to add new permission starts-->
           <div class="modal fade text-start" id="modal_id" tabindex="-1" aria-labelledby="myModalLabel17" aria-modal="true" permission="dialog">
              <div class="modal-dialog modal-dialog-centered modal-lg">
               <div class="modal-content">

                    <div class="modal-header bg-transparent">
                        <button type="button"   @click="closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>


                <div class="modal-body px-sm-5 mx-50 pb-4 ">
                     <h4 class="text-center mb-1" id="myModalLabel17">
                    {{ editmode ? "Update Permission" : "Add  Permission" }}
                  </h4>
                       <permission-form   :users="users" :roles="roles"  :editmode="editmode"  :permissions="permissions" :editForm="permission" v-on:created="closeModal($event)" v-on:updated="closeModal($event)"></permission-form>
                    </div>
                 </div>
              </div>
           </div>
           <!-- Modal to add new permission Ends-->
    </div>
  </template>

  <script>
  import SearchInput from "../../components/SearchBoxComponent.vue";
  import Avatar from "../../components/AvatarComponent.vue";
  import Breadcrumb from "../../components/BreadcrumbComponent.vue";
  import LoaderBox from "../../components/LoaderBoxComponent.vue";
  import PermissionForm  from "./PermissionForm.vue";
  import PermissionTable from "./PermissionTable.vue";
  export default {
         components: {SearchInput,PermissionForm,LoaderBox,Breadcrumb,Avatar,PermissionTable},
          data(){
          return{
              permissions:{},
              permission:{},
              users:[],
              roles:[],
              loading:false,
              query:"",
              editmode:false,
              page_num:1,

          }
      },
         methods:{
          modalOpen(){
                 this.editmode=false;
                 console.log("modalOpen");
                 this.resetForm();
                 $('#modal_id').modal('show');
             },

              resetForm(){
                  this.permission={};
              },
             closeModal(item) {

                 if (item) {
                     this.getPermissions();
                     $("#modal_id").modal("hide");

                 }
                 else {
                      $("#modal_id").modal("hide");

                 }
             },
              isQuery(query) {
                 return (this.query = query);
              },
              filterData(data){
                  this.permissions = data.permissions;
              },
              loadingStart(value) {
                 this.loading = value;
              },
             editItem(item) {
                  this.editmode = true;
                  this.permission = item;
                  $("#modal_id").modal("show");
             },
             deleteItem(item){
                console.log(item);
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
                         axios.delete(`permission/${item?.id}`).then((res)=>{
                              this.$root.alertNotify(res.status,'Destroyed Successfuly','info',res.data);
                              this.getPermissions();
                           })
                  }
                  })

             },
             getPermissions(page=1){
                 this.loading= true;
                 this.page_num = page;
                 axios.get('/permission?page='+page+"&query="+this.query).then(response => {
                     this.permissions = response.data.permissions;
                     this.users=response.data.users;
                     this.roles=response.data.roles;
                    this.loading= false;
                 }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })

             },

         },
         mounted(){
             this.getPermissions();


         }
  }
  </script>

  <style>

  </style>

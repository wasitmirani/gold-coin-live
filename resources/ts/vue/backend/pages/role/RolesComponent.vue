<template>
    <div>
         <breadcrumb active_name="Roles List" :previous="[{name:'Users',link:'/portal/users'}]" ></breadcrumb>
          <div class="row">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 class="card-title">Roles List</h5>
                </div>
                <div>
                    <a  role="button" style="float:right"   @click="modalOpen"  class="dt-button add-new btn btn-primary"
                      type="button">
                      <span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i>
                        <span class="d-none d-sm-inline-block"> New Role</span></span>
                      </a>
                </div>
            </div>
                 <div class="card">

          <div class="card-body border-bottom">
          <div class="row">
               <div class="col-xl-4 col-md-6 col-12">
                <search-input label="Search By Name" :apiurl="'/role?page=' +this.page_num" v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getRoles()" v-on:filterData="filterData($event)" ></search-input>
              </div>



          </div>
          </div>
          <div class="card-datatable table-responsive pt-0">
              <loader-box v-if="loading"></loader-box>
              <role-table v-else :roles="this.roles" :query="query" :getRoles="getRole" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)"/>
          </div>

           </div>
          </div>


               <!-- Modal to add new role starts-->
           <div class="modal fade text-start" id="modal_id" tabindex="-1" aria-labelledby="myModalLabel17" aria-modal="true" role="dialog">
              <div class="modal-dialog modal-dialog-centered modal-lg">
               <div class="modal-content">

                    <div class="modal-header bg-transparent">
                        <button type="button"   @click="closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>


                <div class="modal-body px-sm-5 ">
                     <h4 class="text-center mb-1" id="myModalLabel17">
                    {{ editmode ? "Edit Role" : "Add  Role" }}
                  </h4>
                       <role-form    :editmode="editmode"  :permissions="permissions" :editForm="role" v-on:created="closeModal($event)" v-on:updated="closeModal($event)"></role-form>
                    </div>
                 </div>
              </div>
           </div>
           <!-- Modal to add new role Ends-->
    </div>
  </template>

  <script>
  import SearchInput from "../../components/SearchBoxComponent.vue";
  import GroupAvatar from "../../components/GroupAvatarComponent.vue";
  import Breadcrumb from "../../components/BreadcrumbComponent.vue";
  import LoaderBox from "../../components/LoaderBoxComponent.vue";
  import RoleForm from "./RoleForm.vue";
  import RoleTable from "./RoleTable.vue";
  export default {
         components: {SearchInput,RoleForm,LoaderBox,Breadcrumb,GroupAvatar,RoleTable},
      data(){
          return {
              url:this.hosturl,
              roles:{},
              permissions:[],
              role:{},
              page_num:1,
              loading:false,
              editmode:false,
              query:"",
          }
      },
      methods:{
             modalOpen(){

                  this.resetForm();
                 $('#modal_id').modal('show');
             },
             resetForm(){
              this.role={};
               this.editmode=false;
             },
             closeModal(item) {
              // console.log(item.length);
                 if (item) {
                     this.getRoles();
                     $("#modal_id").modal("hide");

                 }
                 else {
                      $("#modal_id").modal("hide");

                 }
             },
            async copyRole(role){

               await  console.log(navigator.clipboard);
             },
              isQuery(query) {
                 return (this.query = query);
              },
              filterData(data){
                  this.roles = data.roles;
              },
              loadingStart(value) {
                 this.loading = value;
              },
             editItem(item) {
                  this.editmode = true;
                  this.role = item;
                  $("#modal_id").modal("show");
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
                         axios.delete(`role/${item.id}`).then((res)=>{


                              this.$root.alertNotify(res.status,'Destroyed Successfuly','info',res.data);
                              this.getRoles();
                           })
                  }
                  })

             },
          getRoles(page=1){
                 this.loading= true;
                 this.page_num = page;
                 axios.get('/role?page='+page+"&query="+this.query).then(response => {
                     this.roles = response.data.roles;
                      this.permissions=response.data.permissions;
                      this.loading= false;
                 }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })

             },
      },
      mounted() {
         this.getRoles();
      },
  }
  </script>


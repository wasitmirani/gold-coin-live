<template>
    <div>
         <breadcrumb active_name="Wallet Transitions" :previous="[{name:'My wallet',link:'/portal/my-wallet'}]" ></breadcrumb>
          <div class="row">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 class="card-title">Latest Wallet Transitions</h5>
                </div>
                <div>
                    <!-- <a  role="button" style="float:right"   @click="modalOpen"  class="dt-button add-new btn btn-primary"
                      type="button">
                      <span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i>
                        <span class="d-none d-sm-inline-block"> New Role</span></span>
                      </a> -->
                </div>
            </div>
                 <div class="card">

          <div class="card-body border-bottom">
          <div class="row">
               <div class="col-xl-4 col-md-6 col-12">
                <search-input label="Search By transition ID" :apiurl="'/wallet-transition?page=' +this.page_num" v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getTransitions()" v-on:filterData="filterData($event)" ></search-input>
              </div>
          </div>
          </div>
          <div class="card-datatable table-responsive pt-0">
              <loader-box v-if="loading"></loader-box>
              <wallet-history-table v-else :transitions="this.transitions" :query="query" :getTransitions="getTransitions" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)"/>
          </div>

           </div>
          </div>
    </div>
  </template>

  <script>
  import SearchInput from "../../components/SearchBoxComponent.vue";
  import Breadcrumb from "../../components/BreadcrumbComponent.vue";
  import LoaderBox from "../../components/LoaderBoxComponent.vue";
  import WalletHistoryTable from "./WalletHistoryTable.vue";
  export default {
         components: {SearchInput,LoaderBox,Breadcrumb,WalletHistoryTable},
      data(){
          return {
              url:this.hosturl,
              transitions:{},
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
                     this.getTransitions();
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
                  this.transitions = data.transitions;
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
                              this.getTransitions();
                           })
                  }
                  })

             },
          getTransitions(page=1){
                 this.loading= true;
                 this.page_num = page;
                 axios.get('/role?page='+page+"&query="+this.query).then(response => {
                     this.transitions = response.data.transitions;
                      this.permissions=response.data.permissions;
                      this.loading= false;
                 }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })

             },
      },
      mounted() {
         this.getTransitions();
      },
  }
  </script>


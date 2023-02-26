<template>
    <div>
         <breadcrumb active_name="transitions List"  ></breadcrumb>
          <div class="row">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 class="card-title">Latest Transitions</h5>
                </div>
                <div>
                </div>
            </div>
                 <div class="card">

          <div class="card-body border-bottom">
          <div class="row">
               <div class="col-xl-4 col-md-6 col-12">
                <search-input label="Search By Invoice No" :apiurl="'/transactions?page=' +this.page_num" v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="gettransitions()" v-on:filterData="filterData($event)" ></search-input>
              </div>
          </div>
          </div>
          <div class="card-datatable table-responsive pt-0">
              <loader-box v-if="loading"></loader-box>
              <transitions-table v-else :transitions="this.transitions" :query="query" :gettransitions="getinvoice" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)"/>
          </div>

           </div>
          </div>


               <!-- Modal to add new invoice starts-->
           <div class="modal fade text-start" id="modal_id" tabindex="-1" aria-labelledby="myModalLabel17" aria-modal="true" invoice="dialog">
              <div class="modal-dialog modal-dialog-centered modal-lg">
               <div class="modal-content">

                    <div class="modal-header bg-transparent">
                        <button type="button"   @click="closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>


                <div class="modal-body px-sm-5 ">
                     <h4 class="text-center mb-1" id="myModalLabel17">
                    {{ edit_mode ? "Edit Invoice" : "Create Invoice" }}
                  </h4>

                    </div>
                 </div>
              </div>
           </div>
           <!-- Modal to add new invoice Ends-->
    </div>
  </template>

  <script>
  import SearchInput from "../../components/SearchBoxComponent.vue";
  import GroupAvatar from "../../components/GroupAvatarComponent.vue";
  import Breadcrumb from "../../components/BreadcrumbComponent.vue";
  import LoaderBox from "../../components/LoaderBoxComponent.vue";
  import TransitionsTable from "./transactionsTable.vue";
  export default {
         components: {SearchInput,LoaderBox,Breadcrumb,GroupAvatar,TransitionsTable},
      data(){
          return {
              url:this.hosturl,
              transitions:{},
              permissions:[],
              invoice:{},
              page_num:1,
              loading:false,
              edit_mode:false,
              query:"",
          }
      },
      methods:{


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
                  this.edit_mode = true;
                  this.invoice = item;
                  $("#modal_id").modal("show");
             },

          gettransitions(page=1){
                 this.loading= true;
                 this.page_num = page;
                 axios.get('/my-transactions?page='+page+"&query="+this.query).then(response => {
                     this.transitions = response.data.transitions;
                      this.loading= false;
                 }).catch((err)=>{
                    this.$root.alertNotify(err.response.status,null,'error', err.response.data);
                })

             },
      },
      mounted() {
         const created=this.$route.query.create;
         if(created){
            this.modalOpen();
         }
         this.gettransitions();
      },
  }
  </script>


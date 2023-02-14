<template>
    <div>
         <breadcrumb active_name="invoices List"  ></breadcrumb>
          <div class="row">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 class="card-title">Lastest Invoices</h5>
                </div>
                <div>
                    <a  invoice="button" style="float:right"   @click="modalOpen"  class="dt-button add-new btn btn-primary"
                      type="button">
                      <span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i>
                        <span class="d-none d-sm-inline-block"> Create Invoice</span></span>
                      </a>
                </div>
            </div>
                 <div class="card">

          <div class="card-body border-bottom">
          <div class="row">
               <div class="col-xl-4 col-md-6 col-12">
                <search-input label="Search By Invoice No" :apiurl="'/invoice?page=' +this.page_num" v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getinvoices()" v-on:filterData="filterData($event)" ></search-input>
              </div>



          </div>
          </div>
          <div class="card-datatable table-responsive pt-0">
              <loader-box v-if="loading"></loader-box>
              <invoice-table v-else :invoices="this.invoices" :query="query" :getinvoices="getinvoice" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)"/>
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
                       <invoice-form    :edit_mode="edit_mode"   :form="invoice" v-on:created="closeModal($event)" v-on:updated="closeModal($event)"></invoice-form >
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
  import InvoiceForm from "./InvoiceForm.vue";
  import InvoiceTable from "./InvoiceTable.vue";
  export default {
         components: {SearchInput,InvoiceForm,LoaderBox,Breadcrumb,GroupAvatar,InvoiceTable},
      data(){
          return {
              url:this.hosturl,
              invoices:{},
              permissions:[],
              invoice:{},
              page_num:1,
              loading:false,
              edit_mode:false,
              query:"",
          }
      },
      methods:{
             modalOpen(){

                  this.resetForm();
                 $('#modal_id').modal('show');
             },
             resetForm(){
              this.invoice={};
               this.edit_mode=false;
             },
             closeModal(item) {
              // console.log(item.length);
                 if (item) {
                     this.getinvoices();
                     $("#modal_id").modal("hide");

                 }
                 else {
                      $("#modal_id").modal("hide");

                 }
             },
            async copyinvoice(invoice){

               await  console.log(navigator.clipboard);
             },
              isQuery(query) {
                 return (this.query = query);
              },
              filterData(data){
                  this.invoices = data.invoices;
              },
              loadingStart(value) {
                 this.loading = value;
              },
             editItem(item) {
                  this.edit_mode = true;
                  this.invoice = item;
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
                         axios.delete(`invoice/${item.id}`).then((res)=>{


                              this.$root.alertNotify(res.status,'Destroyed Successfuly','info',res.data);
                              this.getinvoices();
                           })
                  }
                  })

             },
          getinvoices(page=1){
                 this.loading= true;
                 this.page_num = page;
                 axios.get('/invoice?page='+page+"&query="+this.query).then(response => {
                     this.invoices = response.data.invoices;
                      this.permissions=response.data.permissions;
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
         this.getinvoices();
      },
  }
  </script>


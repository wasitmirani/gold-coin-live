<template>
    <div>
        <table class="invoice-list-table table">
              <thead class="table-light">
              <tr>

                  <th>Invoice</th>
                  <th>Invoice To</th>
                  <th>Email </th>
                  <th>Amout </th>
                  <th> Approved Status </th>
                  <th>Pay Status </th>
                  <th> Status </th>

                  <th>Created At</th>
                  <th>Actions</th>
              </tr>
              </thead>
                <tbody>
                      <tr v-for="invoice  in invoices.data"  :key="invoice.id">

                        <td class="sorting_1">
                          <div class="d-flex justify-content-left align-items-center">
                              <div class="avatar-wrapper"><div class="avatar  me-1">
                                  <avatar :name="`0`+invoice.id"></avatar>

                                  </div>
                              </div>
                          <div class="d-flex flex-column">
                              <a style="margin-left: 10px;
                              margin-top: 9px;" role="button"  @click="editItem(invoice)" class="invoice_name text-truncate text-body">
                                <span class="fw-bolder">{{invoice.invoice_number}}</span>


                                </a>


                            </div></div>
                          </td>
                          <td>
                                {{ invoice.invoice_to }}
                          </td>
                          <td>
                            {{ invoice.recipient_email }}
                         </td>
                         <td>
                            {{ invoice.amount }}
                            <small>{{invoice.currency}}</small>
                         </td>
                         <td>
                            <span v-if="invoice.approved==1" class="badge rounded-pill bg-label-success">approved</span>
                            <span v-else class="badge rounded-pill bg-label-danger">unapproved</span>
                         </td>
                         <td>
                            <span v-if="invoice.pay_status=='paid'" class="badge rounded-pill bg-label-success">paid</span>
                            <span v-else class="badge rounded-pill bg-label-danger">unpaid</span>
                         </td>
                         <td>
                            <span v-if="invoice.status=='created'" class="badge rounded-pill bg-success">created</span>
                            <span v-else class="badge rounded-pill bg-danger">close</span>
                         </td>
                          <td>{{$filters.DateTimeFormat(invoice.created_at)}}</td>
                          <td >
                            <a v-if="myinvoice" invoice="button"   @click="approvedItem(invoice)"   class="text-dark"><i class="ti ti-check ti-sm me-2"></i></a>
                            <div v-else>
                                <a invoice="button"   @click="editItem(invoice)"   class="text-dark"><i class="ti ti-link ti-sm me-2"></i></a>
                                |
                                <a  invoice="button"   @click="editItem(invoice)"   class="text-dark"><i class="ti ti-edit ti-sm me-2"></i></a>
                                  |
                                <a  invoice="button" @click="deleteItem(invoice)" class="text-danger delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a>
                            </div>

                          </td>
                      </tr>
                  </tbody>
              </table>

          <table-footer :rows="invoices" :getData="getinvoices"></table-footer>
    </div>
  </template>

  <script>
  import TableFooter from "../../components/TableFooterComponent.vue";
  import Avatar from "../../components/AvatarComponent.vue";
  export default {
  components:{TableFooter,Avatar},
  props:['invoices','getinvoices','myinvoice'],
  methods: {
          approvedItem(item){
            return this.$emit("approvedItem", item);
          },
          deleteItem: function (item) {
              return this.$emit("deleteItem", item);
          },
          editItem: function (item) {
              // console.log(item);
              return this.$emit("editItem", item);
          }
      }
  }
  </script>

  <style>

  </style>

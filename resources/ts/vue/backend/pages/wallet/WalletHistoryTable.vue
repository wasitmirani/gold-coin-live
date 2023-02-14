<template>
    <div>
        <table class="transition-list-table table">
              <thead class="table-light">
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Charge</th>
                <th>Remarks</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
              </thead>
                <tbody>
                        <!-- /v-if="transitions.data?.length<1" -->
                      <tr v-if="!transitions?.data">
                        <td :colspan="8">
                          <empty-data message="Wallet Transitions data has not found in records"></empty-data>
                        </td>
                      </tr>
                      <tr v-for="transition  in transitions?.data"  :key="transition.id">

                        <td class="sorting_1">
                          <div class="d-flex justify-content-left align-items-center">
                              <div class="avatar-wrapper"><div class="avatar  me-1">
                                  <avatar :name="`0`+transition.id"></avatar>
                                  </div>
                              </div>
                          <div class="d-flex flex-column">
                              <a style="margin-left: 10px;
                              margin-top: 9px;" transition="button"  @click="editItem(transition)" class="transition_name text-truncate text-body">
                                <span class="fw-bolder">{{transition.transition_id}}</span>


                                </a>
                                </div>
                                </div>
                          </td>
                          <td>{{$filters.DateFormat(transition.created_at)}}</td>
                          <td>{{transition.amount }} {{transition.currency}}</td>
                          <td>{{transition.charge }} </td>
                          <td>{{transition.remarks }} </td>
                          <td>{{transition.status }} </td>

                          <td>{{$filters.DateTimeFormat(transition.created_at)}}</td>
                          <td >
                             <a role="button"   @click="editItem(transition)"   class="text-dark"><i class="ti ti-edit ti-sm me-2"></i></a>
                             <a role="button" @click="deleteItem(item)" class="text-danger delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a>
                          </td>
                      </tr>
                  </tbody>
              </table>

          <table-footer :rows="transitions" :getData="getTransitions"></table-footer>
    </div>
  </template>

  <script>
  import TableFooter from "../../components/TableFooterComponent.vue";
  import Avatar from "../../components/AvatarComponent.vue";
  import EmptyData from "../../components/EmptyDataComponent.vue";
  export default {
  components:{TableFooter,Avatar,EmptyData},
  props:{
      transitions: {
          type: Array,
          required: true
      },
      getTransitions: {
          type: Function,
          required: true
      },

  },
  methods: {
          deleteItem: function (item) {
              return this.$emit("deleteItem", item);
          },
          editItem: function (item) {
              // console.log(item);
              return this.$emit("editItem", item);
          }
      },
      mounted() {
        this.transitions.data=[];
      },
  }
  </script>

  <style>

  </style>

<template>
    <div>
        <table class="transition-list-table table">
              <thead class="table-light">
              <tr>

                  <th>Transition ID</th>
                  <th>Gold GM</th>
                  <th>Buying Amount </th>
                  <th>Amout</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th>Created At</th>
              </tr>
              </thead>
                <tbody>
                      <tr v-for="transition  in transitions.data"  :key="transition.id">

                        <td class="sorting_1">
                          <div class="d-flex justify-content-left align-items-center">
                              <div class="avatar-wrapper"><div class="avatar  me-1">
                                  <avatar :name="`0`+transition.id"></avatar>

                                  </div>
                              </div>
                          <div class="d-flex flex-column">
                              <a style="margin-left: 10px;
                              margin-top: 9px;" role="button"  @click="editItem(transition)" class="transition_name text-truncate text-body">
                                <span class="fw-bolder">{{transition?.slug}}</span>
                                </a>
                            </div></div>
                          </td>
                          <td>
                            <span class="fw-bolder">{{transition?.package.name}}</span> /
                                {{ transition.package.unit_cost }} gm
                          </td>
                          <td>
                            {{ transition.buying_rate }}
                         </td>
                         <td>
                            {{ transition.amount }}

                         </td>
                         <td>
                            <span v-if="transition.status=='success'" class="badge rounded-pill bg-label-success">success</span>
                            <span v-else class="badge rounded-pill bg-label-danger">failed</span>
                         </td>
                         <td>
                           {{ transition.type }}
                         </td>
                          <td>{{$filters.DateTimeFormat(transition.created_at)}}</td>

                      </tr>
                  </tbody>
              </table>

          <table-footer :rows="transitions" :getData="gettransitions"></table-footer>
    </div>
  </template>

  <script>
  import TableFooter from "../../components/TableFooterComponent.vue";
  import Avatar from "../../components/AvatarComponent.vue";
  export default {
  components:{TableFooter,Avatar},
  props:['transitions','gettransitions','mytransition'],
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

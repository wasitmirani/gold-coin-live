<template>
    <div>
        <table class="permission-list-table table">
              <thead class="table-light">
              <tr>

                  <th>Permission</th>
                  <th>ASSIGNED TO</th>
                  <th>Created</th>
                  <th>Actions</th>
              </tr>
              </thead>
                <tbody>
                      <tr v-for="permission  in permissions.data"  :key="permission.id">

                        <td class="sorting_1">
                          <div class="d-flex justify-content-left align-items-center">
                              <div class="avatar-wrapper"><div class="avatar  me-1">
                                  <avatar :name="permission.name"></avatar>

                                  </div>
                              </div>
                          <div class="d-flex flex-column">
                              <a role="button"  @click="editItem(permission)" class="permission_name text-truncate text-body">
                                <span class="fw-bolder">{{permission.name}}</span></a>
                                </div></div>
                          </td>
                          <td >
                              <group-avatar :list="permission.roles"></group-avatar>
                          </td>
                          <!-- <td > <span class="badge badge-glow bg-success">Active</span></td> -->

                          <td>{{$filters.DateTimeFormat(permission.created_at)}}</td>
                          <td >
                            <a role="button"   @click="editItem(role)"   class="text-dark"><i class="ti ti-edit ti-sm me-2"></i></a>
                             <a role="button" @click="deleteItem(item)" class="text-danger delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a>
                          </td>
                      </tr>
                  </tbody>
      </table>

          <table-footer :rows="permissions" :getData="getPermissions"></table-footer>
    </div>
  </template>

  <script>
  import TableFooter from "../../components/TableFooterComponent.vue";
  import Avatar from "../../components/AvatarComponent.vue";
  import GroupAvatar from "../../components/GroupAvatarComponent.vue";
  export default {
  components:{TableFooter,Avatar,GroupAvatar},
  props:{
      permissions: {
          type: Array,
          required: true
      },
      getPermissions: {
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
      }
  }
  </script>


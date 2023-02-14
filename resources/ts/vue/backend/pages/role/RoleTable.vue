<template>
    <div>
        <table class="role-list-table table">
              <thead class="table-light">
              <tr>

                  <th>Role</th>
                  <th>Permissions</th>

                  <th>Created At</th>
                  <th>Actions</th>
              </tr>
              </thead>
                <tbody>
                      <tr v-for="role  in roles.data"  :key="role.id">

                        <td class="sorting_1">
                          <div class="d-flex justify-content-left align-items-center">
                              <div class="avatar-wrapper"><div class="avatar  me-1">
                                  <avatar :name="role.name"></avatar>
                                  <!-- <img src="../../../app-assets/images/avatars/2.png" alt="Avatar" height="32" width="32"> -->
                                  </div>
                              </div>
                          <div class="d-flex flex-column">
                              <a style="margin-left: 10px;
                              margin-top: 9px;" role="button"  @click="editItem(role)" class="role_name text-truncate text-body">
                                <span class="fw-bolder">{{role.name}}</span>


                                </a>


                            </div></div>
                          </td>
                          <td>  <div class="avatar-group">
                              <group-avatar :list="role.permissions" v-if="role?.permissions"></group-avatar>
                                                            | <span class="badge bg-label-dark">{{role?.permissions?.length}}</span>
                              </div>

                          </td>

                          <td>{{$filters.DateTimeFormat(role.created_at)}}</td>
                          <td >


                             <a role="button"   @click="editItem(role)"   class="text-dark"><i class="ti ti-edit ti-sm me-2"></i></a>
                             <a role="button" @click="deleteItem(role)" class="text-danger delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a>
                          </td>
                      </tr>
                  </tbody>
              </table>

          <table-footer :rows="roles" :getData="getRoles"></table-footer>
    </div>
  </template>

  <script>
  import TableFooter from "../../components/TableFooterComponent.vue";
  import Avatar from "../../components/AvatarComponent.vue";
  import GroupAvatar from "../../components/GroupAvatarComponent.vue";
  export default {
  components:{TableFooter,Avatar,GroupAvatar},
  props:{
      roles: {
          type: Array,
          required: true
      },
      getRoles: {
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

  <style>

  </style>

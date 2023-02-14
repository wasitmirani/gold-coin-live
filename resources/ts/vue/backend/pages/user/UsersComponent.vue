<template>
    <breadcrumb active_name="Users"></breadcrumb>
    <div class="row g-4 mb-4">
        <div class="col-sm-6 col-xl-3">
            <stat-card heading="Total" :value="users.total"
            :total="users.total" color="dark"
             subheading="Total Users"
             icon="ti ti-user ti-sm"/>
          </div>
          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Active" :value="users.total"
            :total="users.total" color="success"
             subheading="Active Users"
             icon="ti ti-user ti-sm"/>
          </div>
          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Deactive" :value="0"
            :total="users.total" color="danger"
             subheading=" Deactive Users"
             icon="ti ti-user ti-sm"/>
          </div>

          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Pending" :value="0"
            :total="users.total" color="warning"
             subheading=" Pending Users"
             icon="ti ti-user ti-sm"/>
          </div>
    </div>
    <div class="row g-4 mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
                <h5 class="card-title">Users List</h5>
            </div>
            <div>
                <router-link style="float:right"   to="/portal/user/create" class="dt-button add-new btn btn-primary"
                  type="button">
                  <span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i>
                    <span class="d-none d-sm-inline-block">Add New User</span></span>
                </router-link>
            </div>
        </div>
        <div class="card">
            <div class="card-header border-bottom">
                <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                    <div class="col-md-5 user_role">
                        <search-box class="ml-2" label="Search by name" :apiurl="'/user?page=' + this.page_num"
                            v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getUsers()"
                            v-on:filterData="filterData($event)">
                        </search-box>
                    </div>

                </div>
            </div>
            <div class="card-datatable table-responsive">
                <UserTable :headers="headers" :users="users" v-on:deleteItem="deleteItem($event)" />
            </div>


        </div>
    </div>
</template>
<script>
import UserTable from "./UserTable.vue";
import breadcrumb from "../../components/BreadcrumbComponent.vue";
import SearchBox from "../../components/SearchBoxComponent.vue";
import StatCard from "../../components/StatCardComponent.vue";
export default {
    name: "StudentListComponent",
    components: { UserTable, breadcrumb, SearchBox,StatCard },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Full Name', value: 'name' },
            { text: 'Email', value: 'email' },
            { text: 'phone', value: 'phone' },
            { text: 'Role', value: 'role' },
            { text: 'City', value: 'city' },
            { text: 'Country', value: 'country' },
            { text: 'Status', value: 'Status' },
            { text: 'Created', value: 'Created' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        users:[],
        user: {},
        roles: [],
        packages: [],
        search_plan: "",
        search_role: "",
        search_status: "",
        loading: false,
        query: "",
        edit_mode: false,
        page_num: 1,
    }),
    methods: {
        loadingStart(value) {
            this.loading = value;
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.users = data.users;

        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/user/${item.id}`).then((res) => {
                        this.$root.alertNotify(
                            res.status,
                            "Destroyed Successfuly",
                            "info",
                            res.data
                        );
                        this.getUsers();
                    }).catch((err) => {
                        this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                    });
                }
            });
        },
        getUsers(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get("/user?page=" +page +"&query=" +this.query +"&role=" +this.search_role +"&package="
                    +this.search_plan +"&status=" +this.search_status).then((response) => {
                this.users = response.data.users;
                this.roles = response.data.roles;
                this.packages = response.data.packages;
                this.loading = false;
                })
                .catch((err) => {
                this.$root.alertNotify(
                    err.response.status,
                    null,
                    "error",
                    err.response.data
                );
                });
            },
    },
    mounted() {
        this.getUsers();
    }
}
</script>

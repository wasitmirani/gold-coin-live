<template>
    <breadcrumb active_name="Add New User" :previous="[{name:'Users',link:'/users'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <UserForm />
            </div>
        </div>
</template>
<script>
import UserForm from "./UserForm.vue";
import breadcrumb from "../../components/BreadcrumbComponent.vue";
export default {
    name: "UserCreate",
    components: { UserForm,breadcrumb },
    data: () => ({
    }),
    mounted() {
    },
}
</script>

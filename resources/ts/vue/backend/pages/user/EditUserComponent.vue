<template>
    <breadcrumb active_name="Update User" :previous="[{name:'Users',link:'/users'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <UserForm  v-if="edit_mode" :form="form" :edit_mode="edit_mode"/>
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
        edit_mode: false,
        form:{},
        slug:"",
    }),
    methods:{
        getUser(id){
                axios.get('/user/'+id).then((res)=>{
                    this.form=res.data.user;
                    this.edit_mode=true;
                }).catch((err)=>{
            this.errors=err.response.data;
            this.$root.alertNotify(err.response.status,null,"error",err.response.data);
            this.$router.push('/portal/users');
        });
        }
    },
    mounted() {
        // this.slug=this.$route.params.uid;
        
        this.getUser(this.$route.params.uid);
    }
}
</script>

<template>
    <breadcrumb active_name="Update Hospital" :previous="[{name:'Hospitals',link:'/hospitals'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <HospitalForm  v-if="edit_mode" :form="form" :edit_mode="edit_mode"/>
            </div>
        </div>
</template>
<script>
import HospitalForm from "./HospitalForm.vue"
import breadcrumb from "../../components/BreadcrumbComponent.vue";
export default {
    name: "UserCreate",
    components: { HospitalForm,breadcrumb },
    data: () => ({
        edit_mode: false,
        form:{},
        slug:"",
    }),
    methods:{
        getUser(id){
                axios.get('/hospital/'+id).then((res)=>{
                    this.form=res.data.hospital;
                    this.edit_mode=true;
                }).catch((err)=>{
            this.errors=err.response.data;
            this.$root.alertNotify(err.response.status,null,"error",err.response.data);
            this.$router.push('/portal/hospitals');
        });
        }
    },
    mounted() {
        // this.slug=this.$route.params.uid;
        
        this.getUser(this.$route.params.uid);
    }
}
</script>

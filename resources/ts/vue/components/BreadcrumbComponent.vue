<template>
  <div>
          <div class="content-wrapper container-xxl p-0">
        <div class="content-header row">
          <div class="content-header-left col-md-9 col-12 mb-2">
         <div class="row breadcrumbs-top">
              <div class="col-12">
                <h2 class="content-header-title float-start mb-0">{{active_name}}</h2>
                <div class="breadcrumb-wrapper">
                  <ol class="breadcrumb">

                      <li class="breadcrumb-item"><router-link  to="/portal/dashboard" >Dashboard</router-link></li>
                      <li class="breadcrumb-item" v-for="item in previous" :key="item.id" >
                                                <router-link :to="item.link">{{item.name}}</router-link>
                     </li>
                    <li class="breadcrumb-item active">{{active_name}}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            </div>
            </div>
 </div>
  </div>

</template>

<script>
export default {
props: {
     active_name:{
         type: String,
          required: true
     },
     previous:{
         type:Array,
         required: false,
     }
 }
}
</script>

<style>

</style>

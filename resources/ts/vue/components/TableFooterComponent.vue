<template>
<!-- 
<div class="col-sm-12" style="    margin-left: 15px;
    margin-bottom: 15px !important;">
                <div>
                    <p class="mb-sm-0">Showing {{rows?.current_page}} to {{rows?.per_page}} of {{rows?.total}} entries</p>
                </div>
            </div> -->
         <div class="d-flex justify-content-between mx-2 ">
            <div class="col-sm-12 col-md-6">
                <Pagination :data="rows" @pagination-change-page="getData" />
            </div>
            </div>

</template>

<script>
import LaravelVuePagination from 'laravel-vue-pagination'
export default {

props:{
    rows: {
        type: Array,
        required: true
    },
    getData: {
        type: Function,
        required: true
    }
},
components:{'Pagination':LaravelVuePagination},
}
</script>

<style>

</style>

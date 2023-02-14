<template>
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

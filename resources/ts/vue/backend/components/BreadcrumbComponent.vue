<template>



    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);"><router-link to="/dashboard">Dashboard</router-link></a>
          </li>

          <li class="breadcrumb-item" v-for="item in previous" :key="item.id">
            <router-link :to="`/portal${item.link}`">{{ item.name }}</router-link>
        </li>
          <li class="breadcrumb-item active">{{ active_name }}</li>
        </ol>
      </nav>

</template>

<script>
export default {
    props: {
        active_name: {
            type: String,
            required: true
        },
        previous: {
            type: Array,
            required: false,
        }
    }
}
</script>

<style>

</style>

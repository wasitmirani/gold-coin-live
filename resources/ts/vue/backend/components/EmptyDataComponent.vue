<template >
    <div class="alert alert-warning d-flex align-items-center" role="alert">
        <span class="alert-icon text-warning me-2">
          <i class="ti ti-info-circle ti-xs"></i>

        </span>
        No Rows! {{ message }}
      </div>
</template>
<script>
export default {
props:['message']

}
</script>
<style lang="">

</style>

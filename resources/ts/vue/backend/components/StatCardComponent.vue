<template >
    <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-start justify-content-between">
            <div class="content-left">
              <span>{{heading}}</span>
              <div class="d-flex align-items-center my-1">
                <h4 class="mb-0 me-2">{{value}} {{ currency }} </h4>
                <span :class="`text-${color}`">{{getPercentage()}}%</span>
              </div>
              <span>{{subheading}}</span>
            </div>
            <span :class="`badge bg-label-${color} rounded p-2`">
              <i  :class="icon"></i>
            </span>
          </div>
        </div>
      </div>
</template>
<script>
export default {
props:['heading','subheading','value','total','icon','color','currency'],
methods: {
    getPercentage(){
      return  Math.round((this.value/this.total) * 100);
    }
},
}
</script>
<style lang="">

</style>

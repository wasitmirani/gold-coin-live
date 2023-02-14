<template>


        <div class=" avatar-group ">
          <div class="avatar" v-for="item in list.slice(0,2)">
            <avatar  :name="item.name"></avatar>

          </div>

          <!-- <div class="avatar">
            <span class="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="3 more">+3</span>
          </div> -->
     </div>
</template>

<script>
import Avatar from "./AvatarComponent.vue";
export default {
    props:['list'],
    components:{Avatar},

}
</script>



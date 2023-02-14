<template>
    <ul class="list-unstyled d-flex align-items-center avatar-group mb-0" v-if="list">
                    <li v-for="item in list.slice(0,2)" :key="item.id" data-bs-toggle="tooltip" data-popup="tooltip-custom"
                    data-bs-placement="top" :title="item.name"
                    class="avatar avatar-sm pull-up">
                        <avatar :name="item.name"></avatar>
                    </li>

    </ul>
</template>

<script>
import Avatar from "./AvatarComponent.vue";
export default {
    props:['list'],
    components:{Avatar},

}
</script>

<style>
.avatar-group .avatar .avatar-content {
    background-color: transparent !important;
}
</style>

<template>
	    <cropper
            class="cropper"
            :src="img"
            :stencil-props="{
                aspectRatio: 16/9
            }"
            @change="change"
        />
</template>
<script>
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
	props: ['img'],
    components: {
		Cropper,
	},

	
	methods: {
		change({ coordinates, canvas }) {
			console.log(coordinates, canvas)
         
			this.$emit('change', { coordinates, canvas });
		
		}
	},
}
</script>
<style scoped>
.cropper {
	height: 600px;
	width: 600px;
	background: #DDD;
}
</style>


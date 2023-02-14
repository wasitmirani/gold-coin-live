<template>

    <div :class="`avatar  ${getColor()}  avatar-md`"  v-if="!img">
              <div class="avatar-content" v-if="name">{{name.slice(0, 2).toUpperCase()}}</div>
      </div>
      <div :style="style" :class="`${classname ? classname : 'avatar  avatar-lg'}`" v-if="img">
              <img :src="setImg(img)" alt="avatar" />
       </div>
</template>

<script>
export default {
      props:['name','img','classname','style','fullurl'],
       data(){
        return {
            url:this.hosturl,
        }
    },
    methods:{
        setImg(img){
            if(this.fullurl){
                return img;
            }
            else {
                return this.url + '/' + img;
            }
        },
        getColor(){
            const colors=["bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info","bg-dark"];
            return colors[Math.floor(Math.random()*colors.length)];
        }
    },
}
</script>

<style>

</style>

<template>

       <div class="avatar me-2">
        <span :class="`avatar-initial rounded-circle ${getColor()}`">{{name.slice(0, 2).toUpperCase()}}</span>
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

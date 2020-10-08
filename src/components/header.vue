<template>
  <div class="header">
    <div>
        <slot name="left"><i class="el-icon-back"></i></slot>
    </div>
    <div>
        <slot name="title">城市</slot>
    </div>
    <div>
        <slot name="right"><i class="el-icon-setting"></i></slot>
    </div>
    
  </div>
</template>


<script>
export default {
    name: '',
    data () {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    //方法
    methods: {

    }
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    padding:0 10px;
    height: 50px;
    line-height: 50px;
    background-color: cornflowerblue;
    color: white;
}
</style>
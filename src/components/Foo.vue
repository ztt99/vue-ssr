<template>
  <div>Foo
{{this.$store.state.name}}

  </div>
</template>

<script>
export default {
  /**
   * ayncData是页面级的方法
   * 服务端渲染只支持create，为了让服务端支持mounted ，自定义一个方法
   */
  asyncData(store){
    return  store.dispatch('setName','ztttt')
  },
  mounted(){
  }
}
</script>

<style>
div{
    color:red
}
</style>
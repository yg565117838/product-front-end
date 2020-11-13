<template>
  <div>123</div>
</template>

<script>
  export default {
    name: 'index',
    created() {
      this.$axios.get('?id=456').then(res=>{
        console.log(res)
      })
    }
  }
</script>

<style>

</style>

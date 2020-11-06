<template>
  <div>123</div>
</template>

<script>
  export default {
    name: 'index',
    created() {
      console.log(this)
      this.$axios.get('/fsdfdsf')
    }
  }
</script>

<style>

</style>

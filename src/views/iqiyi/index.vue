<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ name }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '爱奇艺队列管理'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

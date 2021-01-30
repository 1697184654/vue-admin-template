<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="同步分集ID">
        <el-input type="textarea" v-model="form.item_ids"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">开始同步</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { syncItem } from '@/api/youku'

export default {
  data() {
    return {
      form: {
        item_ids: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.form.item_ids.split('\n').forEach(function(id, index) {
        syncItem({ 'id': id, 'source_type': 'YOUKU' }).catch(err => {
          console.error(id, err.message())
        })
        console.log('Item Join Queue Finished!', index, id)
      })
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

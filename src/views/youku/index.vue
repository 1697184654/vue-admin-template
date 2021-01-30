<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ name }} - {{ queueObj.incrQueueItemCount }}</div>
  </div>
</template>

<script>

import { getQueueLen } from '@/api/youku'

export default {
  data() {
    return {
      name: '优酷队列管理',
      queueObj: {
        incrQueueEpisodeCount: 0,
        incrQueueItemCount: 0,
        incrQueueMediaCount: 0,
        incrQueueShortVideoAllCount: 0,
        incrQueueShortVideoUpdateCount: 0
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      getQueueLen().then(response => {
        this.queueObj.incrQueueEpisodeCount = response.incr_queue_episode_count
        this.queueObj.incrQueueItemCount = response.incr_queue_item_count
        this.queueObj.incrQueueMediaCount = response.incr_queue_media_count
        this.queueObj.incrQueueShortVideoAllCount = response.incr_queue_short_video_all_count
        this.queueObj.incrQueueShortVideoUpdateCount = response.incr_queue_short_video_update_count
        console.info(this.queueObj)
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

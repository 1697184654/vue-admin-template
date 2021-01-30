import request from '@/utils/request'

export function getQueueLen() {
  return request({
    url: '/data/iqiyi/queue/count',
    method: 'get'
  })
}

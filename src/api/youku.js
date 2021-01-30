import request from '@/utils/request'

export function getQueueLen() {
  return request({
    url: '/data/youku/queue/count',
    method: 'get'
  })
}

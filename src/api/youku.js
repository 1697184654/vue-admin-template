import request from '@/utils/request'

export function getQueueLen() {
  return request({
    url: '/data/youku/queue/count',
    method: 'get'
  })
}

export function syncItem(param) {
  return request({
    url: '/data/youku/sync/episode',
    method: 'get',
    params: param
  })
}

import request from '@/utils/request.js'
const Qs = require('qs')

const url = 'link'

// 生成短网址
export function generate(data) {
  return request({
    url: url + '/generate',
    method: 'post',
    data: Qs.stringify(data)
  })
}

// 生成短网址
export function restore(data) {
  return request({
    url: url + '/restore',
    method: 'post',
    data: Qs.stringify(data)
  })
}

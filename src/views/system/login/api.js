import { request } from '@/api/service'

export function SYS_USER_LOGIN (data) {
  return request({
    url: 'admin/login/',
    method: 'post',
    data
  })
}

export function SYS_USER_LOGOUT (data) {
  return request({
    url: 'admin/logout/',
    method: 'post',
    data
  })
}

export function getCaptcha () {
  return request({
    url: 'api/captcha/',
    method: 'get'
  })
}

export function getCaptchaStatus () {
  return request({
    url: 'api/captcha/status/',
    method: 'get'
  })
}

import errorCode from '@/enums/errorCode'
import { message } from 'antd'
import axios from 'axios'
import { history } from 'umi'

const loginPath = '/user/login'

export default function initAxios() {
	const jumpLogin = () => {
		history.push(`${loginPath}?from=${history.location.pathname}`)
	}

	axios.defaults.baseURL = 'http://127.0.0.1:7001'

	// 配置请求拦截
	axios.interceptors.request.use(
		(config) => {
			const newConfig = {
				...config,
			}
			const token = localStorage.getItem('token')
			if (!token && history.location.pathname !== loginPath) {
				jumpLogin()
				return newConfig
			}
			newConfig.headers = {
				Accept: 'application/json;charset=utf-8',
				'Content-type': 'application/json;charset=utf-8',
				'Accept-Language': 'zh-CN',
			}
			if (token) {
				newConfig.headers['auth-token'] = token
			}
			return newConfig
		},
		(error) => {
			return Promise.reject(error)
		},
	)

	// 响应拦截
	axios.interceptors.response.use(
		(response) => {
			const { data } = response
			if (response.status !== errorCode.SUCCESS || data.code !== errorCode.SUCCESS) {
				// 如果登录失效，跳转到登录页面
				if (data.code === errorCode.FORBIDDEN && history.location.pathname !== loginPath) {
					localStorage.clear()
					jumpLogin()
				}
				message.error(data.message || '请求错误')
				return response.data
			}
			return response.data
		},
		(error) => {
			return Promise.reject(error)
		},
	)
}

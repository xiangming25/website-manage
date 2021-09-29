import axios from 'axios'

// 登录
export async function login(body: API.LoginParams) {
	return axios.post('/api/user/login', body)
}

// 获取当前的用
export async function currentUser() {
	return axios.get<Response<API.CurrentUser>>('/api/user/detail')
}

// 退出登录
export async function logout() {
	return axios.post('/api/user/logout')
}
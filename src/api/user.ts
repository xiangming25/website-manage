import axios from 'axios'

// 登录
export async function login(body: API.LoginParams) {
	// return axios.post('/api/user/login', {
	//   data: body
	// })
	return Promise.resolve({
		code: 200,
		message: '登录成功！',
		data: body,
	})
}

// 获取当前的用
export async function currentUser() {
	// return axios.get<API.Response<API.CurrentUser>>('/api/user/detail')
	return Promise.resolve({
		code: 200,
		data: {
			name: '张三',
			avatar: '',
			phone: 13912345678
		},
	})
}

// 退出登录
export async function logout() {
	// return axios.post('/api/user/logout')
	return Promise.resolve({
		code: 200,
		message: '退出成功！',
	})
}
import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { history, useModel } from 'umi'
import { login } from '@/api/user'

import styles from './index.less'
import errorCode from '@/enums/errorCode'

const Login: React.FC = () => {
	const [submitting, setSubmitting] = useState(false)
	const { initialState, setInitialState } = useModel('@@initialState')

	const fetchUserInfo = async () => {
		const userInfo = await initialState?.fetchUserInfo?.()
		if (userInfo) {
			await setInitialState((s) => ({
				...s,
				currentUser: userInfo,
			}))
		}
	}

	const handleSubmit = async (values: API.LoginParams) => {
		setSubmitting(true)
		try {
			// 登录
			const res = await login({ ...values })
			if (res.code === errorCode.SUCCESS) {
				message.success('登录成功！')
				localStorage.setItem('token', res.data.token)
				await fetchUserInfo()
				/** 此方法会跳转到 redirect 参数所在的位置 */
				if (!history) return
				const { query } = history.location
				const { redirect } = query as { redirect: string }
				history.push(redirect || '/')
				return
			}
		} catch (error) {
		}
		setSubmitting(false)
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className="mb-30 align-center">用户登录</h2>
				<Form
					name="basic"
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={handleSubmit}
					autoComplete="off"
				>
					<Form.Item
						label="用户名"
						name="username"
						rules={[{ required: true, message: '请输入用户名!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="密码"
						name="password"
						rules={[{ required: true, message: '请输入密码!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 6, span: 16 }}>
						<Button type="primary" htmlType="submit" loading={submitting}>
								登录
						</Button>
						<Button className="ml-20">注册</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default Login

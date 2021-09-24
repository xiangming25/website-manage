import { useRef } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import type { ActionType } from '@ant-design/pro-table'
import ProTable from '@ant-design/pro-table'
import request from 'umi-request'
import columns from './columns'

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

export default () => {
	const actionRef = useRef<ActionType>()
	return (
		<ProTable<GithubIssueItem>
			columns={columns}
			actionRef={actionRef}
			request={async (params = {}) => {
				return request<{
          data: GithubIssueItem[];
        }>('https://proapi.azurewebsites.net/github/issues', {
        	params,
        })
			}}
			columnsState={{
				persistenceKey: 'pro-table',
				persistenceType: 'localStorage',
			}}
			rowKey="id"
			pagination={{
				pageSize: 10,
			}}
			dateFormatter="string"
			toolBarRender={() => [
				<Button key="button" icon={<PlusOutlined />} type="primary">
          新建
				</Button>,
			]}
			options={false}
			search={{
				defaultCollapsed: false
			}}
		/>
	)
}
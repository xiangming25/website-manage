import type { ProColumns} from "@ant-design/pro-table"
import { Space, Tag } from "antd"

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

const columns: ProColumns<GithubIssueItem>[] = [
	{
		dataIndex: 'index',
		valueType: 'indexBorder',
		width: 48,
	},
	{
		title: '标题',
		dataIndex: 'title',
		copyable: true,
		ellipsis: true,
		tip: '标题过长会自动收缩',
	},
	{
		title: '状态',
		dataIndex: 'state',
	},
	{
		title: '标签',
		dataIndex: 'labels',
		render: (_, record) => (
			<Space>
				{record.labels.map(({ name, color }) => (
					<Tag color={color} key={name}>
						{name}
					</Tag>
				))}
			</Space>
		),
	},
	{
		title: '创建时间',
		key: 'showTime',
		dataIndex: 'created_at',
		valueType: 'dateTime',
	},
	{
		title: '操作',
		valueType: 'option',
		render: (text, record) => [
			<a
				key="editable"
				onClick={() => {}}
			>
        编辑
			</a>,
			<a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
			</a>,
		],
	},
]

export default columns

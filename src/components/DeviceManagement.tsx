'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/app/common.css';
import { Table, Button, Input, Space, Popconfirm, message, Modal, Form } from 'antd';
import { SearchOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface DeviceData {
  key: string;
  deviceId: string;
  firmwareVersion: string;
  macAddress: string;
  updateTime: string;
  status: string;
  notes?: string;
}

const DeviceManagement: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newMacAddress, setNewMacAddress] = useState('');
  const [data, setData] = useState<DeviceData[]>([
    {
      key: '1',
      deviceId: 'DEV001',
      firmwareVersion: '0.9.9',
      macAddress: 'b4:3a:45:a5:80:40',
      updateTime: '2025-03-01 16:36:43',
      status: '在线',
      notes: '测试设备'
    },
  ]);

  const handleDelete = (key: string) => {
    const newData = data.filter(item => item.key !== key);
    setData(newData);
    message.success('设备已删除');
  };

  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    if (!newMacAddress.trim()) {
      message.error('请输入MAC地址');
      return;
    }

    // 验证MAC地址格式
    const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    if (!macAddressRegex.test(newMacAddress)) {
      message.error('请输入正确的MAC地址格式，例如：00:1A:2B:3C:4D:5E');
      return;
    }

    const newDevice: DeviceData = {
      key: Date.now().toString(),
      deviceId: `DEV${Date.now().toString().slice(-4)}`,
      firmwareVersion: '1.0.0',
      macAddress: newMacAddress,
      updateTime: new Date().toLocaleString(),
      status: '在线',
      notes: '新添加设备'
    };

    setData([...data, newDevice]);
    setNewMacAddress('');
    setIsModalVisible(false);
    message.success('设备添加成功');
  };

  const handleModalCancel = () => {
    setNewMacAddress('');
    setIsModalVisible(false);
  };

  const filteredData = data.filter(record =>
    Object.values(record).some(val =>
      val?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const getResponsiveColumns = () => {
    const baseColumns: ColumnsType<DeviceData> = [
    {
      title: '设备ID',
      dataIndex: 'deviceId',
      key: 'deviceId',
      sorter: (a, b) => a.deviceId.localeCompare(b.deviceId),
    },
    {
      title: '固件版本',
      dataIndex: 'firmwareVersion',
      key: 'firmwareVersion',
      sorter: (a, b) => a.firmwareVersion.localeCompare(b.firmwareVersion),
    },
    {
      title: 'MAC地址',
      dataIndex: 'macAddress',
      key: 'macAddress',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      sorter: (a, b) => new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime(),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '在线', value: '在线' },
        { text: '离线', value: '离线' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: '备注',
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="small" className="flex flex-nowrap">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => message.info('编辑功能待实现')}
            className="min-w-[32px] h-[32px] p-0"
          />
          <Popconfirm
            title="确定要删除这个设备吗？"
            onConfirm={() => handleDelete(record.key)}
            okText="确定"
            cancelText="取消"
          >
            <Button 
              type="text" 
              danger 
              icon={<DeleteOutlined />} 
              className="min-w-[32px] h-[32px] p-0"
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

    // 根据屏幕宽度调整显示的列
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return baseColumns.map(col => ({
        ...col,
        ellipsis: true,
        width: col.key === 'action' ? 80 : undefined
      }));
    }
    return baseColumns;
  };

  const [columns, setColumns] = useState<ColumnsType<DeviceData>>(getResponsiveColumns());

  return (
    <div className="container-chrild">
        <div className="breadcrumb">
            <span>控制台</span>
            <span>/</span>
            <span onClick={() => router.back()}>智能体</span>
            <span>/</span>
            <span>设备列表</span>
        </div>
        <div className="content-wrapper">

      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Input
          placeholder="搜索设备..."
          prefix={<SearchOutlined />}
          onChange={e => setSearchText(e.target.value)}
          className="w-full sm:w-[200px]"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
          className="w-full sm:w-auto"
        >
          添加设备
        </Button>
      </div>
      <Table
        columns={getResponsiveColumns()}
        dataSource={filteredData}
        scroll={{ x: 'max-content' }}
        pagination={{
          total: filteredData.length,
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          size: 'small',
          className: 'my-custom-pagination'
        }}
        className="overflow-x-auto mb-14"
      />

      <Modal
        title="添加设备"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="确定"
        cancelText="取消"
      >
        <Form layout="vertical">
          <Form.Item
            label="MAC地址"
            required
            rules={[
              { required: true, message: '请输入MAC地址' },
              {
                pattern: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
                message: '请输入正确的MAC地址格式，例如：00:1A:2B:3C:4D:5E'
              }
            ]}
          >
            <Input
              placeholder="请输入MAC地址（例如：00:1A:2B:3C:4D:5E）"
              value={newMacAddress}
              onChange={(e) => setNewMacAddress(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
    </div>
  );
};

export default DeviceManagement;
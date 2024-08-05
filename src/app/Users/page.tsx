"use client";

import React, { useEffect, useState } from 'react';

import CustomTable from '@/components/List/List';
import SideMenu from '@/components/SideMenu/SideMenu';

import { Spin } from 'antd';
import type { ColumnsType } from 'antd/es/table';

//Tipagem dos dados a serem recebidos para população da tabela
interface UserType {
  key: React.Key;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

// Definindo as colunas da tabela
const columns: ColumnsType<UserType> = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (avatar) => <img src={avatar} alt="avatar" style={{ width: 50, borderRadius: '50%' }} />,
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    sorter: (a, b) => a.first_name.localeCompare(b.first_name),
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    sorter: (a, b) => a.last_name.localeCompare(b.last_name),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

export default function Page() {

  const [data, setData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://reqres.in/api/users?per_page=20');
          const json = await response.json();
          const users = json.data.map((user: any) => ({
            key: user.id,
            ...user,
          }));
          setData(users);
        } catch (error) {
          console.error('Erro ao buscar usuários:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, 5000);
  }, []);

  return (
    <SideMenu>
      <div style={styles.container}>
        {loading ? (
          <Spin tip="Loading..." />
        ) : (
          <CustomTable<UserType> columns={columns} data={data} />
        )}
      </div>
    </SideMenu>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
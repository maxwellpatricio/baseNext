"use client";
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface CustomTableProps<T> {
    columns: ColumnsType<T>;
    data: T[];
}

export default function CustomTable<T extends { key: React.Key }>({ columns, data }: CustomTableProps<T>) {
    return (
        <Table<T>
            columns={columns}
            dataSource={data}
            rowKey="key"
            style={styles.table}
            scroll={{ y: 500 }} // Ativa o scroll vertical
        />
    );
};

const styles = {
    table: {
        display: "flex",
        margin: "0 auto",
        // border: "1px solid red"
    }
};
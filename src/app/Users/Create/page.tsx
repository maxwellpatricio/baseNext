"use client"
import React, { useState } from 'react';
import SideMenu from '@/components/SideMenu/SideMenu';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    Switch,
} from 'antd';

const App: React.FC = () => {

    return (
        <SideMenu>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Input">
                    <Input />
                </Form.Item>

                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>

                <Form.Item label="Switch" valuePropName="checked">
                    <Switch checked />
                </Form.Item>

                <Form.Item>
                    <Button>Enviar</Button>
                </Form.Item>
            </Form>
        </SideMenu>
    );
};

export default App;
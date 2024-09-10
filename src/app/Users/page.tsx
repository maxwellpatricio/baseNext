"use client"
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Column from 'react-data-table-component';
import axios from 'axios';
import Header from '@/components/Header/Header';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    name: string;
    email: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [pending, setPending] = useState(true);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    // const filteredItems:
    //     User[] = users.filter(
    //         item => item.first_name && item.first_name.toLowerCase().includes(filterText.toLowerCase())
    //     );

    // const columns: typeof Column<User>[] = [
    //     {
    //         name: 'ID',
    //         selector: (row: User) => row.id,
    //         sortable: true,
    //     },
    //     {
    //         name: 'Nome',
    //         selector: (row: User) => `${row.first_name} ${row.last_name}`,
    //         sortable: true,
    //     },
    //     {
    //         name: 'Email',
    //         selector: (row: User) => row.email,
    //         sortable: true,
    //     },
    // ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users');
                setUsers(response.data.data);

                setPending(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {pending ? (
                <div>Carregando...</div>
            ) : (
                <>
                    <Header />
                    <DataTable
                        title="Lista de Usuários"
                        columns={columns}
                        data={data}
                    />
                </>
            )}
        </div>
    );
};

export default Users;
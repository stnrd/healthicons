'use client';
import React, { useState } from 'react';
import { BloodBag, Diabetes } from 'healthicons-react';
import { HealthIconsProvider } from 'healthicons-react'
import { BloodPressureMonitor } from 'healthicons-react/filled-24px'
import metadata from '../node_modules/healthicons-react/updated-meta-data.json';

const getIcon = (name: string) => {
    const component = require(`healthicons-react`)[name];
    return component;
}

const getMaterialIcon = (name: string) => {
    const component = require(`healthicons-react/filled-24px`)[name];
    return component;
}

export default function Home() {
    const [search, setSearch] = useState('')

    const filteredData = metadata.filter(item =>
        Object.values(item).some(s => String(s).toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <>
            <BloodBag fill='red' height={36} width={36} />
            <HealthIconsProvider
                iconProps={{
                    color: '#1E441E',
                    strokeWidth: 1,
                    width: '6rem',
                    height: '6rem',
                }}
            >
                <Diabetes fill='currentColor' />
            </HealthIconsProvider>
            <BloodPressureMonitor fill='red' height={36} width={36} />
            <div>
                <label htmlFor="search" style={{ marginRight: '10px' }}>Search:</label>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search"
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Component Name</th>
                            <th>Icon</th>
                            <th>24px(Material)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => {
                            const Icon = getIcon(item.component_name);
                            const MaterialIcon = getMaterialIcon(item.component_name);
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.category}</td>
                                    <td>{item.title}</td>
                                    <td>{item.component_name}</td>
                                    <td>
                                        <Icon />
                                    </td>
                                    <td>
                                        {
                                            !MaterialIcon ? "Not added" : <MaterialIcon />
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
};
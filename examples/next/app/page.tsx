'use client';
import { BloodBag, Diabetes } from 'healthicons-react';
import { HealthIconsProvider } from 'healthicons-react'


export default function Home() {
    return (
        <>
            <BloodBag fill='red' height={36} width={36} />
            <HealthIconsProvider
                iconProps={{
                    color: '#1E441E',
                    strokeWidth: 1,
                    width: '2em',
                    height: '2em',
                }}
            >
                <Diabetes fill='currentColor' />
            </HealthIconsProvider>
        </>
    )
};
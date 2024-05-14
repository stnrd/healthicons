'use client';
import { BloodBag, DiabetesPeople } from 'healthicons-react/dist/filled';
import {HealthIconsProvider } from 'healthicons-react/dist/HealthIconsContext'


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
                <DiabetesPeople fill='currentColor'/>
            </HealthIconsProvider>
        </>
    )
};
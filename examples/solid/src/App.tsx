import {
  BloodBag,
  BloodBagOutline24px,
  HealthIconsProvider,
} from 'healthicons-solid-js';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <BloodBag width={36} height={36} color="#1E441E" />
      <HealthIconsProvider
        iconProps={{
          color: '#1E441E',
          width: '2em',
          height: '2em',
        }}
      >
        <BloodBagOutline24px />
      </HealthIconsProvider>
    </div>
  );
}

<script setup lang="ts">
import {
  Database,
  HealthiconsProvider,
  BloodBag,
  OxygenTank,
  ChartPie,
  BloodBagFilled24px
} from 'healthicons-vue';
</script>

<template>
  <div style="color: #1E441E">
    <Database />
  </div>
    <OxygenTank color="red" fill="currentColor" height="36" width="36" />
    <BloodBag />
    <BloodBagFilled24px />

  <HealthiconsProvider
    :icon-props="{
      'color': '#1E441E',
      'stroke-width': 1,
      'width': '2em',
      'height': '2em',
    }"
  >
    <SomeOtherContainer>
      <ChartPie />
    </SomeOtherContainer>
  </HealthiconsProvider>
</template>
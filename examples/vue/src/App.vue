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
  <Database />
  <OxygenTank color="red" height="36" width="36" />
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
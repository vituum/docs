<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Vituum is free and open source. If you like what Vituum tries to do and want to support the development, please consider becoming a sponsor."
    action-text="Become a sponsor"
    action-link="mailto:lubomir.blazek@newlogic.cz"
    :data="data"
  />
</template>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-JFTXYZ6Q63"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('consent', 'default', { 'ad_storage': 'denied', 'analytics_storage': 'denied' });

gtag('config', 'G-JFTXYZ6Q63');
</script>

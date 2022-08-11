<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Vituum is free and open source. Mainly maintained by Newlogic Digital. Please consider sponsoring us, if you like what Vituum tries to do and want to support the development."
    action-text="Become a sponsor"
    action-link="mailto:info@newlogic.cz"
    :data="data"
  />
</template>

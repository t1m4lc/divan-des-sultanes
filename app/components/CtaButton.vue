<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  to?: string
  href?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'gold'
  size?: 'default' | 'sm' | 'lg' | 'xl'
  arrow?: boolean
}>()
</script>

<template>
  <Button
    v-if="!to && !href"
    :variant="variant || 'gold'"
    :size="size || 'lg'"
    class="font-bold tracking-wide"
  >
    <slot />
    <ArrowRight v-if="arrow" class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
  </Button>

  <NuxtLink v-else-if="to" :to="to" class="group">
    <Button
      :variant="variant || 'gold'"
      :size="size || 'lg'"
      class="font-bold tracking-wide"
      as="span"
    >
      <slot />
      <ArrowRight v-if="arrow" class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Button>
  </NuxtLink>

  <a v-else-if="href" :href="href" target="_blank" rel="noopener" class="group">
    <Button
      :variant="variant || 'gold'"
      :size="size || 'lg'"
      class="font-bold tracking-wide"
      as="span"
    >
      <slot />
      <ArrowRight v-if="arrow" class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Button>
  </a>
</template>

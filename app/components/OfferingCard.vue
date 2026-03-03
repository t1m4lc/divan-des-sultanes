<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  titre: string
  description: string
  to: string
  linkLabel?: string
}>()
</script>

<template>
  <Card class="card-premium rounded-xl group relative overflow-hidden">
    <!-- Top gold accent line -->
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
    <CardHeader class="pt-7">
      <div class="h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-gold-500 mb-4 group-hover:w-24 transition-all duration-500" />
      <CardTitle class="text-xl group-hover:text-emerald-700 transition-colors duration-300">{{ titre }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-muted-foreground leading-relaxed mb-6">{{ description }}</p>
      <NuxtLink
        :to="to"
        class="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-gold-700 transition-colors duration-300"
      >
        {{ linkLabel || 'Découvrir' }}
        <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </NuxtLink>
    </CardContent>
  </Card>
</template>

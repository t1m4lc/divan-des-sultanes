<script setup lang="ts">
defineProps<{
  prix: string
  details?: string
}>()
</script>

<template>
  <Card class="bg-gradient-to-b from-warm-50 to-emerald-50/40 border-emerald-200/60 text-center relative overflow-hidden shadow-warm-md hover:shadow-warm-lg transition-all duration-400 rounded-xl">
    <!-- Premium gold top bar -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500" />
    <CardHeader class="pt-10 pb-4">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-gold-700 mb-2">Investissement</p>
      <CardTitle class="text-3xl md:text-4xl font-heading text-emerald-800">{{ prix }}</CardTitle>
      <CardDescription v-if="details" class="mt-1">{{ details }}</CardDescription>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>

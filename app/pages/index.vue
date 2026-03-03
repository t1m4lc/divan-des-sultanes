<script setup lang="ts">
useSeoMeta({
  title: 'Divan des Sultanes — Coaching de leadership au féminin',
  ogTitle: 'Divan des Sultanes — Coaching de leadership au féminin',
  description: 'Un espace vivant pour penser autrement sa manière de diriger, d\'habiter le pouvoir, de traverser les responsabilités.',
  ogDescription: 'Un espace vivant pour penser autrement sa manière de diriger, d\'habiter le pouvoir, de traverser les responsabilités.',
  ogImage: '/img/1.jpg',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection image="/img/1.jpg" image-alt="Vue inspirante — Divan des Sultanes">
      <p class="text-gold-300 text-sm md:text-base font-semibold uppercase tracking-[0.25em] mb-5">Coaching de leadership au féminin</p>
      <h1 class="text-white mb-6 hero-text-shadow">Le Divan des Sultanes</h1>
      <p class="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
        Un espace vivant pour penser autrement sa manière de diriger,
        d'habiter le pouvoir, de traverser les responsabilités.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <CtaButton to="/odyssee" arrow>
          Découvrir l'Odyssée
        </CtaButton>
        <CtaButton to="/contact" variant="secondary">
          Prendre contact
        </CtaButton>
      </div>
    </HeroSection>

    <!-- Intro -->
    <section class="section-spacing bg-warm-section">
      <div class="container-page prose-divan max-w-3xl mx-auto text-center">
        <h2 class="heading-gold">Le Divan des Sultanes est un espace vivant.</h2>
        <p class="text-lg">Un lieu pour déposer ce qui pèse</p>
        <p class="text-lg">et écouter ce qui cherche à se dire.</p>
        <p class="text-lg">
          Un lieu pour penser autrement sa manière de diriger,<br>
          d'habiter le pouvoir,<br>
          de traverser les responsabilités.
        </p>
        <p class="text-lg">Ici, on ne vient pas apprendre à faire plus.</p>
        <p class="text-lg font-semibold text-foreground">On vient apprendre à être autrement.</p>
      </div>
    </section>

    <!-- Accompagnements -->
    <section class="section-spacing">
      <div class="container-page">
        <div class="mb-20">
          <h2 class="text-center mb-4 heading-gold">Accompagnements individuels</h2>
          <p class="text-center text-muted-foreground max-w-xl mx-auto mb-14">
            Trois formes, une même intention : se déplacer, se confronter et se transformer.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OfferingCard
              titre="L'Odyssée"
              description="Une traversée initiatique sur 9 mois. Un parcours collectif, exigeant, transformateur. Un déplacement intérieur durable."
              to="/odyssee"
            />

            <OfferingCard
              titre="L'Atelier des Sultanes"
              description="Des espaces d'exploration : cercles, co-développement, expérimentations. Penser ensemble. Se confronter. Déplacer ses angles morts."
              to="/atelier"
            />

            <OfferingCard
              titre="Le Coaching individuel"
              description="Un espace confidentiel pour traverser une tension, une décision, un seuil. Un travail précis sur la posture et la responsabilité."
              to="/coaching"
            />
          </div>
        </div>

        <!-- Entreprises -->
        <div>
          <h2 class="text-center mb-4 heading-gold">Entreprises & Organisations</h2>
          <p class="text-center text-muted-foreground max-w-xl mx-auto mb-14">
            Des accompagnements sur mesure pour transformer les pratiques de leadership.
          </p>

          <div class="max-w-2xl mx-auto">
            <OfferingCard
              titre="Entreprises & Organisations"
              description="Des accompagnements sur mesure pour les équipes dirigeantes. Créer des environnements où exigence et humanité coexistent."
              to="/entreprises"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- À l'origine du Divan -->
    <section class="section-spacing bg-cream-section">
      <div class="container-page">
        <h2 class="text-center mb-14 heading-gold">À l'origine du Divan</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          <!-- Portrait -->
          <div class="lg:col-span-2">
            <NuxtImg
              src="/img/2.jpg"
              alt="Anna Alcaide Villanueva — Fondatrice du Divan des Sultanes"
              class="rounded-2xl w-full object-cover aspect-[3/4] shadow-warm-lg"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <!-- Bio -->
          <div class="lg:col-span-3 prose-divan">
            <p class="text-lg font-semibold text-foreground">Je suis Anna Alcaide Villanueva.</p>
            <p>J'ai longtemps travaillé dans l'hôtellerie haut de gamme.</p>
            <p>J'ai été cheffe de cuisine. Puis directrice de restauration. Puis professeur en lycée gastronomique.</p>
            <p>J'ai connu la pression du service. L'exigence absolue. La responsabilité qui ne se délègue pas. La maîtrise comme condition de survie.</p>
            <p><strong>Je sais ce que c'est que tenir.</strong></p>
            <p>Puis un déplacement s'est opéré. Un travail intérieur. Un changement de posture.</p>
            <p>Je suis aujourd'hui coach professionnelle certifiée, Coach & Team®.</p>
            <p>Depuis plus de dix ans, j'accompagne des dirigeants et des managers dans les zones où le leadership devient exigeant : pouvoir, contrôle, solitude, responsabilité.</p>
            <p>Je ne parle pas d'un endroit théorique. <strong>Je parle d'un endroit traversé.</strong></p>
            <p>Aujourd'hui, j'aide les femmes et les dirigeants à habiter leur responsabilité autrement. À ne plus confondre puissance et dureté. À transformer leur manière de diriger, sans perdre leur exigence.</p>
            <p>Le Divan est né de cette trajectoire.</p>

            <div class="mt-10 flex flex-wrap gap-2.5">
              <Badge variant="secondary" class="border border-gold-200/50 bg-warm-50">Coach & Team®</Badge>
              <Badge variant="secondary" class="border border-gold-200/50 bg-warm-50">Élément Humain (Will Schutz)</Badge>
              <Badge variant="secondary" class="border border-gold-200/50 bg-warm-50">Co-développement</Badge>
              <Badge variant="secondary" class="border border-gold-200/50 bg-warm-50">Intelligence émotionnelle</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="relative overflow-hidden">
      <NuxtImg
        src="/img/3.jpg"
        alt="Rejoindre le Divan des Sultanes"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        sizes="100vw"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-emerald-950/50" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      <div class="relative z-10 container-page py-24 md:py-32 text-center">
        <p class="text-gold-300 text-sm font-semibold uppercase tracking-[0.25em] mb-4">Le premier pas</p>
        <h2 class="text-white mb-5 text-3xl md:text-4xl">Prête à vous déplacer ?</h2>
        <p class="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Le Divan est un lieu de rencontre. Un premier échange peut tout changer.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <CtaButton to="/odyssee" arrow>
            L'Odyssée
          </CtaButton>
          <CtaButton to="/contact" variant="secondary">
            Entrer en contact
          </CtaButton>
        </div>
      </div>
    </section>
  </div>
</template>

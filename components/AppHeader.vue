<template>
  <header class="flex flex-col sticky top-0 z-50">
    <nav class="w-full px-10 py-4 flex flex-row justify-between items-center bg-white">
      <!-- Logo -->
      <NuxtLink
        id="logo"
        to="/"
        class="font-bold text-2xl sm:text-3xl"
      >
        <span class="text-[#0e7490]">RIKI</span> VC
      </NuxtLink>
      <!-- Links -->
      <!-- Desktop: Nav Links -->
      <NavLinks />
      <!-- Small Devices: Menu Button -->

      <MenuBtn
        v-if="!isMenuOpen"
        class="lg:hidden"
        @click="menuFunction"
      />
      <CloseBtn
        v-if="isMenuOpen"
        class="lg:hidden"
        @click="menuFunction"
      />

    </nav>
    <!-- Blue Line -->
    <div class="bg-[#0e7490] h-5"></div>
  </header>
  <!-- Small Devices: Menu  -->
  <Transition name="slide-left">
    <Menu
      v-if="isMenuOpen"
      @menu-link-clicked="menuFunction"
    />
  </Transition>
</template>
  
<script setup>
const isMenuOpen = ref(false)
let menuFunction = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
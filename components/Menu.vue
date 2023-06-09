<template>
    <div
        v-if="isMenuOpen"
        class="flex flex-col fixed w-screen h-screen bg-white/70 backdrop-blur-xl p-10 z-40"
    >
        <ul
            class="flex flex-col items-center gap-6 font-semibold text-xl text-center"
        >
            <li class="transition hover:text-[#0e7490]" @click="closeMenu">
                <NuxtLink to="/persons">Persons</NuxtLink>
            </li>
            <li class="transition hover:text-[#0e7490]" @click="closeMenu">
                <NuxtLink to="/projects" :class="{ 'project-link': isProjectRoute }">Projects</NuxtLink>
            </li>
            <li class="transition hover:text-[#0e7490]" @click="closeMenu">
                <NuxtLink to="/areas">Areas</NuxtLink>
            </li>
            <li class="transition hover:text-[#0e7490]" @click="closeMenu">
                <NuxtLink to="/about">About Us</NuxtLink>
            </li>
            <li class="transition hover:text-[#0e7490]" @click="closeMenu">
                <NuxtLink to="/contact">Contact Us</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const emits = defineEmits(['menuLinkClicked'])
const isMenuOpen = ref(true)
let closeMenu = () => {
    isMenuOpen.value = false
    emits('menuLinkClicked', true)
}
</script>

<script>
export default {
  computed: {
    isProjectRoute() {
      return (
        this.$route.path.toString() === '/projects' ||
        this.$route.path.toString() === '/projects/most-relevant-projects' ||
        this.$route.path.startsWith('/projects/projects-by-area')
      );
    }
  }
};
</script>
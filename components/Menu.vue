<template>
    <div
        v-if="isMenuOpen"
        class="flex flex-col fixed w-screen h-screen bg-white/70 backdrop-blur-xl p-10 z-40"
    >
        <ul
            class="flex flex-col items-center gap-6 font-semibold text-lg text-center"
        >
            <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                <NuxtLink to="/persons">All Persons</NuxtLink>
            </li>
            <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                <NuxtLink to="/projects">All Projects</NuxtLink>
            </li>
            <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                <NuxtLink to="/projects/most-relevant-projects">
                    Most Relevant Projects
                </NuxtLink>
            </li>
            <li>
                <h2 class="underline">Projects By Area</h2>
                <ul class="flex flex-col gap-2 text-base font-medium mt-3">
                    <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                        <NuxtLink to="/projects/projects-by-area/environment">Environment</NuxtLink>
                    </li>
                    <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                        <NuxtLink to="/projects/projects-by-area/health">Health</NuxtLink>
                    </li>
                    <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                        <NuxtLink to="/projects/projects-by-area/tech">Tech</NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                <NuxtLink to="/areas">All Areas</NuxtLink>
            </li>
            <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
                <NuxtLink to="/about">About Us</NuxtLink>
            </li>
            <li class="transition hover:text-[#FF8F52]" @click="closeMenu">
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
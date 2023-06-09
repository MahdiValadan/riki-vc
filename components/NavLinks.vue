<template>
    <ul class="hidden lg:flex flex-row items-center gap-7 font-semibold text-xl">
        <li class="transition hover:text-[#0e7490]">
            <NuxtLink to="/persons">Persons</NuxtLink>
        </li>
        <li class="transition hover:text-[#0e7490]">
            <NuxtLink to="/projects" :class="{ 'project-link': isProjectRoute }">Projects</NuxtLink>
        </li>
        <li class="transition hover:text-[#0e7490]">
            <NuxtLink to="/areas">Areas</NuxtLink>
        </li>
        <li class="transition hover:text-[#0e7490]">
            <NuxtLink to="/about">About Us</NuxtLink>
        </li>
        <li class="transition hover:text-[#0e7490]">
            <NuxtLink to="/contact">Contact Us</NuxtLink>
        </li>
    </ul>
</template>

<script>
export default {
  computed: {
    isProjectRoute() {
      return (
        this.$route.path.startsWith('/projects') ||
        this.$route.matched.some(route => route.name === 'ProjectPages')
      );
    }
  }
};
</script>

<style>
.project-link {
  color: #0e7490;
  font-weight: bold;
}
</style>







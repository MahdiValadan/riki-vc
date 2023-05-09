<template>
  <header class="flex flex-col sticky top-0 font-roboto">
    <nav class="w-full px-10 py-4 flex flex-row justify-between items-center bg-white">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="font-bold text-lg md:text-3xl"
      >
        <span class="text-[#FF8F52]">RIKI</span> VC
      </NuxtLink>
      <!-- Links -->
      <ul class="font-medium text-xs md:text-base flex flex-row items-center gap-7">
        <li class="transition hover:text-[#FF8F52]">
          <NuxtLink to="/persons">All Persons</NuxtLink>
        </li>
        <li class="transition hover:text-[#FF8F52]">
          <NuxtLink to="/projects">All Projects</NuxtLink>
        </li>
        <li class="transition hover:text-[#FF8F52]">
          <NuxtLink to="/areas">All Areas</NuxtLink>
        </li>
        <li class="transition hover:text-[#FF8F52]">
          <NuxtLink to="/about">About Us</NuxtLink>
        </li>
        <li class="transition hover:text-[#FF8F52]">
          <NuxtLink to="/contact">Contact Us</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="bg-[#FF8F52] h-6"></div>
  </header>
</template>
  
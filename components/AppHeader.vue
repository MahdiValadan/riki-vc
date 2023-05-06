<template>
  <header class="flex flex-col sticky top-0 font-roboto">
    <nav class="w-full px-16 py-4 flex flex-row justify-between items-center bg-white">
      <NuxtLink
        to="/"
        class="font-bold text-4xl"
      >
        <span class="text-[#FF8F52]">RIKI</span> VC
      </NuxtLink>
      <ul class="font-bold text-lg leading-7 flex flex-row items-center gap-12 py-0">
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
  
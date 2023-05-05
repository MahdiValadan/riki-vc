<template>
    <header class="w-screen flex flex-col sticky top-0">
      <nav class="w-full px-16 py-4 flex flex-row justify-between items-center bg-white">
        <NuxtLink to="/" class="font-bold text-xl">
            <span class="text-[#FF8F52]">RIKI</span> VC
        </NuxtLink>
        <ul class="flex flex-row gap-8 font-medium">
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/persons">All Persons</NuxtLink></li>
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/projects">All Projects</NuxtLink></li>
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/areas">All Areas</NuxtLink></li>
        </ul>
      </nav>
      <div class="bg-[#FF8F52] h-6"></div>
    </header>
  </template>
  
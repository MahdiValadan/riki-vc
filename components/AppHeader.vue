<template>
    <header class="flex flex-col sticky top-0">
      <nav class="w-full px-16 py-4 flex flex-row justify-between items-center bg-white" style="height: 100px;">
        <NuxtLink to="/" class="font-bold text-xl">
          <div class="text-4xl">
            <span class="text-[#FF8F52]">RIKI</span> VC
          </div>
        </NuxtLink>
        <ul class="flex flex-row gap-8 font-bold text-lg leading-7 items-center py-0">
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/persons">All Persons</NuxtLink></li>
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/projects">All Projects</NuxtLink></li>
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/areas">All Areas</NuxtLink></li>
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/about">About us</NuxtLink></li>
          <li class="transition hover:text-[#FF8F52]"><NuxtLink to="/contact">Contact us</NuxtLink></li>
        </ul>
      </nav>
      <div class="bg-[#FF8F52] h-6"></div>
    </header>
  </template>
  
<template>
    <!-- Main Container -->
    <div class="flex flex-row min-h-screen">
        <!-- Side Menu -->
        <div id="side-menu" class="w-2/12 bg-white p-6">
            <ul class="flex flex-col gap-4 font-medium">
                <li class="transition hover:text-[#FF8F52]">
                    <NuxtLink to="/projects">All Projects</NuxtLink>
                </li>
                <li class="transition hover:text-[#FF8F52]">
                    <NuxtLink to="/projects/most-relevant-projects">Most Relevant Projects</NuxtLink>
                </li>
                <li class="transition hover:text-[#FF8F52]">
                    <NuxtLink to="/projects/projects-by-area">Projects By Area</NuxtLink>
                </li>
            </ul>
        </div>
        <!-- project container -->
        <div id="projects-container" class="w-10/12 flex flex-col items-center p-6">
            <h1 class="text-xl border-black border-y-2 mb-8">All Projects</h1>
            <div class="flex flex-row justify-center flex-wrap gap-6 w-full">
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <div class="w-1/5"></div>
                <div class="w-1/5"></div>
                <div class="w-1/5"></div>

                
            </div>

        </div>
    </div>
</template>
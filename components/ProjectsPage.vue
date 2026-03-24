<template>
    <!-- Main Container -->
    <div class="flex flex-row min-h-screen">
        <!-- Side Menu -->
        <!-- <Transition name="slide"> -->
        <div
            id="side-menu"
            class="fixed w-screen h-full lg:static lg:w-72 lg:h-auto bg-white/70 backdrop-blur-xl
                    py-6 px-10 z-30"
            v-if="active"
        >
            <ul class="flex flex-col gap-4 font-medium text-lg">

                <!-- Small Device close Button -->
                <CloseBtnAlt
                    class="self-start mb-4 lg:hidden"
                    @click="sideMenuFunction"
                />

                <li class="transition hover:text-[#0e7490]">
                    <NuxtLink to="/projects">
                        All Projects
                    </NuxtLink>
                </li>
                <li class="transition hover:text-[#0e7490]">
                    <NuxtLink to="/projects/most-relevant-projects">
                        Most Relevant Projects
                    </NuxtLink>
                </li>
                <li>
                    Projects By Area
                    <ul class="flex flex-col gap-2 text:base font-medium mt-2 ml-6">
                        <li
                            class="transition hover:text-[#0e7490]"
                            v-for="area in areas"
                            :key="area.name"
                        >
                            <NuxtLink :to="'/projects/projects-by-area/' + area.name.toLowerCase()">
                                {{ area.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- </Transition> -->
        <!-- project container -->
        <div
            id="projects-container"
            class="flex flex-col items-center w-full lg:w-10/12 p-6"
        >
            <!-- Small Devices Side Menu Button -->
            <MenuBtnAlt
                class="self-start lg:hidden"
                @click="sideMenuFunction"
            />

            <Subtitle :text="title" />

            <AlertError
                class="sticky"
                v-if="error"
                msg="Server connection error. Try it again later."
            />


            <Loading v-if="isLoading" />

            <Transition name="slide">
                <div
                    v-if="!isLoading"
                    class="flex flex-row justify-center flex-wrap gap-8 w-full mt-7"
                >
                    <Project
                        v-for="project in projectsList"
                        :key="project.id"
                        :project="project"
                    />
                    <div class="w-60"></div>
                    <div class="w-60"></div>
                    <div class="w-60"></div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<!-- SCRIPT -->
<script setup>

let projectsList = []
let areas = []
let isLoading = ref(true)
let error = ref(false)
let active = ref(false)

let props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'All Projects'
    },
    area: String
})

function sideMenuFunction() {
    active.value = !active.value
}

function handleResize() {
    if (window.innerWidth >= 1024) {
        active.value = true
    } else {
        active.value = false
    }
}

try {
    const fetchedAreas = await $fetch('/api/areas')
    areas = [...fetchedAreas].sort((left, right) => left.name.localeCompare(right.name))
} catch {
    error.value = true
}

// Mounted 
onMounted(async () => {

    // check display size
    window.addEventListener('resize', handleResize);
    handleResize();

    try {
        if (props.title === 'Most Relevant Projects') {
            projectsList = await $fetch('/api/projects', {
                query: { mostRelevant: 'true' }
            })
        } else {
            const query = props.area ? { area: props.area } : undefined
            projectsList = await $fetch('/api/projects', { query })
        }
    } catch {
        error.value = true
    }

    isLoading.value = false
})

</script>

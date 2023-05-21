<template>
    <!-- Main Container -->
    <div class="flex flex-row min-h-screen">
        <!-- Side Menu -->
        <div
            id="side-menu"
            class="fixed w-screen h-full lg:static lg:w-64 lg:h-auto bg-white p-6 "
            :style="{
                display: active ? 'block' : 'none'
            }"
        >
            <ul class="flex flex-col gap-4 font-medium text-lg">

                <!-- Small Device close Button -->
                <CloseBtnAlt
                    class="self-start mb-4 lg:hidden"
                    @click="sideMenuFunction"
                />

                <li class="transition hover:text-[#f97316]">
                    <NuxtLink to="/projects">
                        All Projects
                    </NuxtLink>
                </li>
                <li class="transition hover:text-[#f97316]">
                    <NuxtLink to="/projects/most-relevant-projects">
                        Most Relevant Projects
                    </NuxtLink>
                </li>
                <li>
                    Projects By Area
                    <ul class="flex flex-col gap-2 text:base font-medium mt-2 ml-6">
                        <li
                            class="transition hover:text-[#f97316]"
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
            <Loading v-if="isLoading" />
            <div class="flex flex-row justify-center flex-wrap gap-8 w-full mt-7">
                <Project
                    v-for="project in projectsList"
                    :key="project.id"
                    :project="project"
                />
                <div class="w-60"></div>
                <div class="w-60"></div>
                <div class="w-60"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
let projectsList = []
let areas = []
let isLoading = ref(true)
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

onMounted(async () => {

    // check display size
    window.addEventListener('resize', handleResize);
    handleResize();

    // getting areas from database
    const supabase = useSupabaseClient()
    let { data: fetchedAreas, error: areasError } = await supabase.from('areas').select('name').order('name', { ascending: true })
    areas = fetchedAreas

    if (areasError) {
        alert('Error: Server Connection')
    }

    // define variables for getting projects from database
    let { data, error } = {}

    // Project By Area
    if (props.area) {
        ({ data, error } = await supabase.from('projects').select('*, areas(name)'))
        if (error) {
            alert('Error: Server Connection')
        } else if (data) {
            let list = data
            for (let project of list) {
                for (let areaOfProject of project.areas) {
                    if (areaOfProject.name === props.area) {
                        projectsList.push(project)
                    }
                }
            }
        }
    }

    // Other Projects
    else {
        switch (props.title) {
            // All Projects
            case 'All Projects':
                ({ data, error } = await supabase.from('projects').select('*, areas(name)'))
                if (error) {
                    alert('Error: Server Connection')
                } else if (data) {
                    projectsList = data
                }
                break;
            // Most Relevant Projects
            case 'Most Relevant Projects':
                ({ data, error } = await supabase.from('projects').select('*, areas(name)').eq('isMR', true))
                if (error) {
                    alert('Error: Server Connection')
                } else if (data) {
                    projectsList = data
                }
                break;
            default:
                ({ data, error } = await supabase.from('projects, areas(name)').select('*'))
                if (error) {
                    alert('Error: Server Connection')
                } else if (data) {
                    projectsList = data
                }
                break;
        }
    }
    isLoading.value = false
})

</script>
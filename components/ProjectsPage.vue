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
            <ul class="flex flex-col gap-4 font-medium text-lg lg:text-base">

                <!-- Small Device close Button -->
                <CloseBtnAlt
                    class="self-start mb-4 lg:hidden"
                    @click="sideMenuFunction"
                />

                <li class="transition hover:text-[#FF8F52]">
                    <NuxtLink to="/projects">
                        All Projects
                    </NuxtLink>
                </li>
                <li class="transition hover:text-[#FF8F52]">
                    <NuxtLink to="/projects/most-relevant-projects">
                        Most Relevant Projects
                    </NuxtLink>
                </li>
                <li>
                    Projects By Area
                    <ul class="flex flex-col gap-2 text:base lg:text-sm font-medium mt-2 ml-6">
                        <li class="transition hover:text-[#FF8F52]">
                            <NuxtLink to="/projects/projects-by-area/environment">Environment</NuxtLink>
                        </li>
                        <li class="transition hover:text-[#FF8F52]">
                            <NuxtLink to="/projects/projects-by-area/health">Health</NuxtLink>
                        </li>
                        <li class="transition hover:text-[#FF8F52]">
                            <NuxtLink to="/projects/projects-by-area/tech">Tech</NuxtLink>
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

            <SmallSubtitle :text="title" />
            <Loading v-if="isLoading" />
            <div class="flex flex-row justify-center flex-wrap gap-8 w-full mt-10">
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

<script>
export default {
    data() {
        return {
            projectsList: [],
            isLoading: true,
            active: false,
        }
    },
    props: {
        title: {
            type: String,
            required: true,
            default: 'All Projects'
        },
        area: String
    },
    methods: {
        sideMenuFunction() {
            this.active = !this.active
        },
        handleResize() {
            if (window.innerWidth >= 1024) {
                this.active = true
            } else {
                this.active = false
            }
        }
    },
    async mounted() {
        // check display size
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        const supabase = useSupabaseClient()
        let { data, error } = {}

        // Project By Area
        if (this.area) {
            ({ data, error } = await supabase.from('projects').select('*, areas(name)'))
            if (error) {
                alert('Error: Server Connection')
            } else if (data) {
                let list = data
                for (let project of list) {
                    for (let area of project.areas) {
                        if (area.name === this.area) {
                            this.projectsList.push(project)
                        }
                    }
                }
            }
        }
        // Other Projects
        else {
            switch (this.title) {
                // All Projects
                case 'All Projects':
                    ({ data, error } = await supabase.from('projects').select('*, areas(name)'))
                    if (error) {
                        alert('Error: Server Connection')
                    } else if (data) {
                        this.projectsList = data
                    }
                    break;
                // Most Relevant Projects
                case 'Most Relevant Projects':
                    ({ data, error } = await supabase.from('projects').select('*, areas(name)').eq('isMR', true))
                    if (error) {
                        alert('Error: Server Connection')
                    } else if (data) {
                        this.projectsList = data
                    }
                    break;
                default:
                    ({ data, error } = await supabase.from('projects, areas(name)').select('*'))
                    if (error) {
                        alert('Error: Server Connection')
                    } else if (data) {
                        this.projectsList = data
                    }
                    break;
            }
        }
        this.isLoading = false
    }
}
</script>
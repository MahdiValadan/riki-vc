<template>
    <!-- Main Container -->
    <div class="flex flex-row min-h-screen">
        <!-- Side Menu -->
        <div
            id="side-menu"
            class="w-2/12 bg-white p-6"
        >
            <ul class="flex flex-col gap-4 font-medium">
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
                    <ul class="flex flex-col gap-2 text-sm font-medium mt-2 ml-6">
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
            class="w-10/12 flex flex-col items-center p-6"
        >
            <h1 class="text-2xl border-black border-y-2 mb-12">{{ title }}</h1>
            <div class="flex flex-row justify-center flex-wrap gap-6 w-full">
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
            projectsList: []
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
    async mounted() {
        const supabase = useSupabaseClient()
        let { data, error } = {}
        if (this.area) {
            ({ data, error } = await supabase.from('projects').select('*').eq('area', this.area))
            if (error) {
                alert('Error: Server Connection')
            } else if (data) {
                this.projectsList = data
            }
        }
        else {
            switch (this.title) {
                case 'All Projects':
                    ({ data, error } = await supabase.from('projects').select('*'))
                    if (error) {
                        alert('Error: Server Connection')
                    } else if (data) {
                        this.projectsList = data
                    }
                    break;
                case 'Most Relevant Projects':
                    ({ data, error } = await supabase.from('projects').select('*').eq('isMR', true))
                    if (error) {
                        alert('Error: Server Connection')
                    } else if (data) {
                        this.projectsList = data
                    }
                    break;
                default:
                    ({ data, error } = await supabase.from('projects').select('*'))
                    if (error) {
                        alert('Error: Server Connection')
                    } else if (data) {
                        this.projectsList = data
                    }
                    break;
            }
        }

    }
}
</script>
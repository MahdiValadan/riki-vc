<template>
    <div class="flex flex-col min-h-screen items-center py-20">
        <!-- Box -->
        <div class="flex flex-row flex-wrap bg-white w-9/12 min-h-[500px] rounded-md shadow-md">
            <!-- Left Side -->
            <div class="w-full md:w-6/12 py-8 px-12">
                <Loading v-if="isLoading" class="self-center" />

                <img class="border-4 border-[#0e7490] rounded" :src="'/images/projects/' + project.image + '.jpg'"
                    alt="project image">
            </div>
            <!-- Right Side -->
            <div class="flex flex-col gap-4 w-full md:w-6/12 p-8">
                <Loading v-if="isLoading" class="self-center" />

                <h2 class="text-black">
                    <span class="font-bold">Project Name: </span>
                    {{ project.name }}
                </h2>
                <h2 class="text-black font-bold">
                    <span class="font-bold">Project Areas: </span>
                    <NuxtLink v-for="area in project.areas" :key="area.name" :to="'/areas/' + area.id"
                        class="text-orange-400">
                        {{ area.name }}
                        <span class="text-black" v-if="project.areas.indexOf(area) !== project.areas.length - 1">
                            &
                        </span>
                    </NuxtLink>
                </h2>
                <h2 class="text-black font-bold">
                    <span class="font-bold text-black">Project Manager: </span>
                    <NuxtLink :to="'/persons/' + project.person.id" class="text-orange-400">
                        {{ project.person.name }}
                    </NuxtLink>
                </h2>
                <p class="text-black text-justify">
                    <span class="font-bold">Project Info: </span>
                    {{ project.info }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

useSeoMeta({
  title: 'RIKI VC | Project',
  description: 'Project page of RIKI Venture Capital which gives general information about specific project of the website',
  lang: "en"
})

const route = useRoute()
const projectID = route.params.project
let project = {}
const supabase = useSupabaseClient()
let isLoading = true
let { data, error } = await supabase.from('projects').select('*, person(id, name), areas(id, name)').eq('id', projectID)
if (error) {
    alert('Server Error')
} else if (data) {
    project = data[0]
}
isLoading = false
</script>
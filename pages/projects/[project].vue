<template>
    <div class="flex flex-col min-h-screen items-center pt-5 pb-14">
        <Subtitle :text="'Project: ' + project.name" class="mb-12"/>
        <!-- Box -->
        <div class="flex flex-row flex-wrap gap-y-10 gap-x-[8%] bg-white w-9/12 rounded-md shadow-md p-10">
            <!-- Left Side -->
            <div class="w-full sm:w-8/12 lg:w-5/12 m-auto lg:m-0">
                <Loading
                    v-if="isLoading"
                    class="self-center"
                />

                <img
                    class="border-4 border-[#0e7490] rounded"
                    :src="'/images/projects/' + project.image + '.jpg'"
                    alt="project image"
                >
            </div>

            <!-- Right Side -->
            <div class="flex flex-col gap-7 w-full lg:w-6/12 text-black text-base sm:text-lg">

                <Loading
                    v-if="isLoading"
                    class="self-center"
                />

                <!-- AREAS -->
                <div class="font-bold">
                    <h2 class="font-bold mb-3">Project Areas: </h2>
                    <LinkButton
                        v-for="area in project.areas"
                        :key="area.name"
                        :to="'/areas/' + area.id"
                        :buttonText="area.name"
                        :link="'/areas/' + area.id"
                        class="mr-3"
                    />
                </div>

                <!-- MANAGER -->
                <div class="font-bold">
                    <h2 class="font-bold mb-1">Project Manager: </h2>
                    <NuxtLink
                        :to="'/persons/' + project.person.id"
                        class="text-[#0e7490]"
                    >
                        {{ project.person.name }}
                    </NuxtLink>
                </div>
                
                <!-- INFO -->
                <div class="">
                    <h2 class="font-bold mb-1">Project Info: </h2>
                    <p class="text-sm sm:text-lg">
                        {{ project.info }}
                    </p>
                </div>

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
    alert('Error: Server Connection')
} else if (data) {
    project = data[0]
}
isLoading = false
</script>
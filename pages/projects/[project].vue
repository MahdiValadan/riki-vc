<template>
    <div class="flex flex-col min-h-screen items-center pt-5 pb-14 mt-16">
        <!-- <Subtitle :text="'Project: ' + project.name" class="mb-12"/> -->
        <!-- Box -->
        <div class="flex flex-col items-center flex-wrap gap-16 gap-x-[8%] bg-white w-9/12 rounded-md shadow-md p-10">
            <!-- top -->
            <div class="flex flex-row items-center flex-wrap gap-x-[8%] gap-10 w-full rounded-md">
                <!-- Left Side -->
                <div class="flex flex-col items-center w-full sm:w-8/12 lg:w-5/12 m-auto lg:m-0 gap-3">
                    <Loading v-if="isLoading" class="self-center" />

                    <img class="border-4 border-[#0e7490] rounded" :src="'/images/projects/' + project.image + '.jpg'"
                        alt="project image">
                    <LinkButton class="items-center" link="" buttonText="Visit site"></LinkButton>
                </div>

                <!-- Right Side -->
                <div class="flex flex-col gap-7 w-full lg:w-6/12 text-black text-base sm:text-lg">

                    <Loading v-if="isLoading" class="self-center" />

                    <!-- AREAS -->
                    <div class="font-bold">
                        <h2 class="font-bold mb-7 text-4xl">{{ project.name }}</h2>
                        <p class="font-normal sm:text-lg mb-10">
                            {{ project.company_desc }}
                        </p>
                        <h2 class="font-bold mb-3">Areas: </h2>
                        <LinkButton v-for="area in project.areas" :key="area.name" :to="'/areas/' + area.id"
                            :buttonText="area.name" :link="'/areas/' + area.id" class="mr-3" />
                    </div>

                    <!-- MANAGER -->
                    <div class="font-bold">
                        <h2 class="font-bold mb-1">Manager: </h2>
                        <NuxtLink :to="'/persons/' + project.person.id" class="text-[#0e7490]">
                            {{ project.person.name }}
                        </NuxtLink>
                    </div>

                    <!-- INFO -->
                    <!-- <div class="">
                    <h2 class="font-bold mb-1">Info: </h2>
                    <p class="text-sm sm:text-lg">
                        {{ project.info }}
                    </p>
                </div> -->

                </div>
            </div>
            <!-- bottom -->
            <div id="project-detail-info" class="flex flex-col gap-5 items-center w-full">
                <h2 id="project info title" class="text-2xl font-bold w-full items-start">The impact of {{ project.name }}
                </h2>
                <div id="detail text" class="whitespace-pre-line mb-14">
                    {{ project.desc_content }}
                </div>

                <div v-if="project.desc_data != null">
                    <div id="number data" class="w-full flex flex-col items-center justify-between sm:flex-row">
                        <div id="1-data" class="data-container flex flex-col items-center w-1/3 sm:w-full">
                            <div id="number1" class="text-[#0e7490] text-7xl">
                                {{ project.desc_data[0] }}
                            </div>
                            <div id="data1" class="">
                                {{ project.desc_data[1] }}
                            </div>
                        </div>
                        <div id="2-data" class="data-container flex flex-col items-center w-1/3 sm:w-full">
                            <div id="number2" class="text-[#0e7490] text-7xl">
                                {{ project.desc_data[2] }}
                            </div>
                            <div id="data2" class="">
                                {{ project.desc_data[3] }}
                            </div>
                        </div>
                        <div id="3-data" class="data-container flex flex-col items-center w-1/3 sm:w-full">
                            <div id="number3" class="text-[#0e7490] text-7xl">
                                {{ project.desc_data[4] }}
                            </div>
                            <div id="data3" class="">
                                {{ project.desc_data[5] }}
                            </div>
                        </div>
                    </div>
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

<style>
.data-container {
    min-height: 120px;
}
</style>
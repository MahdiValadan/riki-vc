<template>
    <Breadcrumb
        pre="Projects"
        :current="'Project: ' + project.name"
    />

    <div class="flex flex-col min-h-screen items-center pt-5 pb-14 mt-8">
        <!-- <Subtitle :text="'Project: ' + project.name" class="mb-12"/> -->
        <!-- Box -->
        <div
            class="flex flex-col items-center flex-wrap gap-20 gap-x-[8%] bg-white w-10/12 rounded-md shadow-md p-7 sm:p-10">
            <!-- top -->
            <div class="flex flex-row items-center flex-wrap gap-x-[8%] gap-10 w-full rounded-md">
                <!-- Left Side -->
                <div class="flex flex-col items-center w-full sm:w-8/12 lg:w-5/12 m-auto lg:m-0 gap-3">
                    <Loading
                        v-if="isLoading"
                        class="self-center"
                    />

                    <img
                        class="border-4 border-[#0e7490] rounded p-3"
                        :src="'/images/projects/' + project.image + '.jpg'"
                        alt="project image"
                    >
                    <LinkButton
                        class="mt-4"
                        :link="project.link"
                        buttonText="Visit site"
                    ></LinkButton>
                </div>

                <!-- Right Side -->
                <div class="flex flex-col gap-7 w-full lg:w-6/12 text-black text-base sm:text-lg">

                    <Loading
                        v-if="isLoading"
                        class="self-center"
                    />

                    <div class="">
                        <!-- NAME -->
                        <h2 class="font-bold mb-7 text-3xl sm:text-4xl">{{ project.name }}</h2>
                        <!-- DESCRIPTION -->
                        <p class="font-normal sm:text-lg mb-10">
                            {{ project.company_desc }}
                        </p>
                        <!-- AREAS -->
                        <h2 class="font-bold mb-3 text-xl">Areas: </h2>
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
                    <div class="mt-5">
                        <h2 class="font-bold mb-1 text-xl">Manager: </h2>
                        <NuxtLink
                            :to="'/persons/' + project.person.id"
                            class="text-[#0e7490] text-lg font-bold "
                        >
                            {{ project.person.name }}
                        </NuxtLink>
                    </div>

                </div>

            </div>

            <!-- bottom -->
            <div
                id="project-detail-info"
                class="flex flex-col gap-5 items-center w-full"
            >
                <!-- CONTENT -->
                <h2
                    id="project info title"
                    class="text-2xl font-bold w-full"
                >
                    The impact of {{ project.name }}
                </h2>
                <div
                    id="detail text"
                    class="whitespace-pre-line mb-14 text-base w-full"
                >
                    {{ project.desc_content }}
                </div>
                <!-- DATA -->
                <div
                    id="number data"
                    class="w-full flex flex-col items-center justify-between gap-y-20 gap-x-28
                lg:flex-row lg:justify-center pt-5 pb-20"
                >
                    <!-- 1 -->
                    <div
                        id="1-data"
                        class="flex flex-col items-center text-center"
                    >
                        <div
                            id="number1"
                            class="text-[#0e7490] text-4xl sm:text-6xl"
                        >
                            {{ project.desc_data[0] }}
                        </div>
                        <div
                            id="data1"
                            class=""
                        >
                            {{ project.desc_data[1] }}
                        </div>
                    </div>
                    <!-- 2 -->
                    <div
                        id="2-data"
                        class="flex flex-col items-center text-center"
                    >
                        <div
                            id="number2"
                            class="text-[#0e7490] text-4xl sm:text-6xl"
                        >
                            {{ project.desc_data[2] }}
                        </div>
                        <div
                            id="data2"
                            class=""
                        >
                            {{ project.desc_data[3] }}
                        </div>
                    </div>
                    <!-- 3 -->
                    <div
                        id="3-data"
                        class="flex flex-col items-center text-center"
                    >
                        <div
                            id="number3"
                            class="text-[#0e7490] text-4xl sm:text-6xl"
                        >
                            {{ project.desc_data[4] }}
                        </div>
                        <div
                            id="data3"
                            class=""
                        >
                            {{ project.desc_data[5] }}
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
if (isNaN(projectID)) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
let project = {}

let isLoading = true

const supabase = useSupabaseClient()
let { data, error } = await supabase.from('projects').select('*, person(id, name), areas(id, name)').eq('id', projectID)
if (error) {
    // alert('Error: Server Connection')
    throw createError({ statusCode: 500, statusMessage: 'Server Error' })
}
else if (data[0]) {
    project = data[0]
}
else {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
isLoading = false

</script>
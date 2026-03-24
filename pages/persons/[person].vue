<template>
    <Breadcrumb
        pre="Persons"
        :current="'Person: ' + person.name"
    />
    <div
        lang="en"
        class="flex flex-col min-h-screen items-center py-8"
    >
        <!-- Box -->
        <div class="flex flex-row flex-wrap bg-white w-9/12 min-h-[500px] rounded-md shadow-md">
            <!-- Left Side -->
            <div
                id="image"
                class="w-full md:w-6/12 py-8 px-12"
            >
                <img
                    :src="person.image"
                    alt="project image"
                >
            </div>
            <!-- Right Side -->
            <div class="flex flex-col gap-6 w-full md:w-6/12 p-8">
                <h2
                    id="name"
                    class="text-3xl text-black font-bold"
                >
                    {{ person.name }}
                </h2>
                <h2
                    id="role"
                    class="text-[#0e7490] text-xl"
                >
                    {{ person.role }}
                </h2>
                <h2 class="text-black">
                    <div
                        id="managed_projects"
                        class="flex flex-col gap-3"
                    >
                        <span class="font-bold text-xl">Project Manager of:</span>
                        <div
                            id="project_buttons"
                            class="flex flex-center gap-3"
                        >
                            <LinkButton
                                v-for="project in managedProjects"
                                :key="project.id"
                                :buttonText="project.name"
                                :link="`/projects/${project.id}`"
                            ></LinkButton>
                        </div>
                    </div>
                </h2>
                <p
                    id="cv"
                    class="text-black sm:text-justify text-sm sm:text-base"
                >
                    {{ person.cv }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

// SEO
useSeoMeta({
    title: 'RIKI VC | Person',
    description: ' Person page of RIKI Venture Capital which gives information about all Members',
    lang: "en"
})

// GET Route Params
const route = useRoute()
const personId = route.params.person

if (isNaN(personId)) {
    throw createError({ statusCode: 404, statusMessage: 'Person not found' })
}
// 
let person = {}
let managedProjects = []

try {
    const fetchedPerson = await $fetch(`/api/persons/${personId}`)
    person = fetchedPerson
    managedProjects = fetchedPerson.projects
} catch (error) {
    if (error?.statusCode === 404 || error?.response?.status === 404) {
        throw createError({ statusCode: 404, statusMessage: 'Person not found' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Server Error' })
}
</script>

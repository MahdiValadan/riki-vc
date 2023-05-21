<template>
    <div lang="en" class="flex flex-col min-h-screen items-center py-20">
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
                    class="text-[#f97316]"
                >
                    {{ person.role }}
                </h2>
                <h2 class="text-black">
                    <div
                        id="managering_projects"
                        class="flex flex-col gap-2"
                    >
                        <span class="font-bold">Project Manager of:</span>
                        <div
                            id="project_buttons"
                            class="flex flex-center gap-3"
                        >
                            <OrangeButton
                                v-for="(projectName, index) in projectNames"
                                :key="index"
                                :buttonText="projectName"
                                :link="`/projects/${index}`"
                            ></OrangeButton>
                        </div>
                    </div>
                </h2>
                <p
                    id="cv"
                    class="text-black text-justify"
                >
                    {{ person.cv }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'RIKI VC | Person',
  description: ' Person page of RIKI Venture Capital which gives information about all Members',
  lang: "en"
})
const route = useRoute()
const personId = route.params.person
let person = {}
let projectNames = {}
const supabase = useSupabaseClient()
let { data, error } = await supabase.from('person').select('*').eq('id', personId)
if (error) {
    alert('Error: ' + error)
} else if (data) {
    person = data[0]
    let { data: projectsData, error: projectsError } = await supabase.from('projects').select('*').eq('person_id', personId)

    if (projectsError) {
        console.error('Error getting project names:', projectsError.message)
    }

    projectNames = projectsData.reduce((acc, project) => {
        acc[project.id] = project.name;
        return acc;
    }, {});

    console.log('Project names:', projectNames)
}
</script>
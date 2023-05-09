<template>
    <div class="flex flex-col min-h-screen items-center py-20">
        <!-- Box -->
        <div class="flex flex-row flex-wrap bg-white w-9/12 min-h-[500px] rounded-md shadow-md">
            <!-- Left Side -->
            <div class="w-full md:w-6/12 py-8 px-12">
                <img
                    class="border-2 border-[#FF8F52] rounded"
                    :src="'/images/projects/' + project.image + '.jpg'"
                    alt="project image"
                >
            </div>
            <!-- Right Side -->
            <div class="flex flex-col gap-4 w-full md:w-6/12 p-8">
                <h2 class="text-black"> 
                    <span class="font-bold">Project Name: </span>
                    {{project.name}}
                </h2>
                <h2 class="text-black"> 
                    <span class="font-bold">Project Area: </span>
                    {{project.area}}
                </h2>
                <h2 class="text-black"> 
                    <span class="font-bold">Project Manager: </span>
                    {{ }}
                </h2>
                <h2 class="text-black"> 
                    <span class="font-bold">Project Info: </span>
                    {{ project.info}}
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const projectID = route.params.project
let project = {}
const supabase = useSupabaseClient()
let { data, error } = await supabase.from('projects').select('*').eq('id', projectID)
if (error) {
    alert('Error')
} else if (data) {
    project = data[0]
}
</script>
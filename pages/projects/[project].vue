<template>
    <div class="flex flex-row h-screen justify-center items-center">
        <div class="bg-white w-5/6 h-4/6">
           <h1 class="text-black">{{ project.name }}</h1> 
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
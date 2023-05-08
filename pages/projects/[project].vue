<template>
    <div class="flex flex-row min-h-screen">
        <div>
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
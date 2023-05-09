<template>
    <div
        class="flex flex-col min-h-screen items-center py-20 bg-center bg-[length:100%_100%]"
        :style="{ 'backgroundImage': `url(${backgroundUrl})` }"
    >
        <!-- Box -->
        <div
        class="flex flex-col items-center bg-white/70 backdrop-blur-xl w-10/12 md:w-1/2
        min-h-[500px] p-10 gap-10 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold">{{ area.name }} Area</h2>
            <p class="text-xl font-medium text-justify"> {{ area.info }} </p>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const areaID = route.params.area
const supabase = useSupabaseClient()
let area = {}
let backgroundUrl = ""
let { data, error } = await supabase.from('areas').select('*').eq('id', areaID)
if (error) {
    alert('Error: Server Connection')
} else if (data) {
    area = data[0]
    backgroundUrl = '/images/areas/' + area.image
}
</script>

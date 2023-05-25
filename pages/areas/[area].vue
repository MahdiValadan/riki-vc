<template>
    <div class="flex flex-col min-h-screen bg-center bg-[length:100%_100%]"
        :style="{ 'backgroundImage': `url(${backgroundUrl})` }">
        <div id="backArea" class="pt-5">
            <NuxtLink class="text-[#0e7490] text-2xl font-bold mx-10 whitespace-pre-wrap" to="/areas">
                {{ backButtonText }}
            </NuxtLink>
        </div>
        <div class="flex flex-col min-h-screen py-20 items-center">
            <!-- Box -->
            <div class="flex flex-col items-center bg-white/70 backdrop-blur-xl w-10/12 md:w-1/2
                min-h-[500px] p-10 gap-10 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold">{{ area.name }} Area</h2>
                <p class="text-sm sm:text-xl font-medium text-center sm:text-justify"> {{ area.info }} </p>
                <LinkButton class="mt-auto" :link="'/projects/projects-by-area/' + area.name.toLowerCase()"
                    button-text="Link to Projects by this Area" />
            </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'RIKI VC | Area',
    description: 'Area page of RIKI Venture Capital which gives information about specific area '
})
const route = useRoute()
const areaID = route.params.area
const supabase = useSupabaseClient()
let area = {}
let backgroundUrl = ""
let backButtonText = "<  Areas"

let { data, error } = await supabase.from('areas').select('*').eq('id', areaID)
if (error) {
    alert('Error: Server Connection')
} else if (data) {
    area = data[0]
    backgroundUrl = '/images/areas/' + area.image
}

</script>

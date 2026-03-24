<template>
    <div
        class="flex flex-col min-h-screen bg-center bg-[length:100%_100%]"
        :style="{ 'backgroundImage': `url(${backgroundUrl})` }"
    >
        <Breadcrumb
            pre="Areas"
            :current="'Area: ' + area.name"
            :is-colored=true
        />
        <div class="flex flex-col min-h-screen py-8 items-center">
            <!-- Box -->
            <div
                class="flex flex-col items-center bg-white/70 backdrop-blur-xl w-10/12 lg:w-7/12 min-h-[500px] p-10 gap-10 rounded-lg shadow-md">
                <h2 class="text-2xl sm:text-3xl font-bold">
                    {{ area.name }} Area
                </h2>
                <p class="text-sm sm:text-lg text-left sm:text-justify">
                    {{ area.info }}
                </p>
                <LinkButton
                    class="mt-auto"
                    :link="'/projects/projects-by-area/' + area.name.toLowerCase()"
                    button-text="Link to Projects by this Area"
                />
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
if (isNaN(areaID)) {
    throw createError({ statusCode: 404, statusMessage: 'Area not found' })
}
let area = {}
let backgroundUrl = ""

try {
    area = await $fetch(`/api/areas/${areaID}`)
    backgroundUrl = '/images/areas/' + area.image
} catch (error) {
    if (error?.statusCode === 404 || error?.response?.status === 404) {
        throw createError({ statusCode: 404, statusMessage: 'Area not found' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Server Error' })
}

</script>

<template>
    <NuxtLink
        :to="url"
        :id="'area_' + area.name"
        class="bg-[##f97316] text-white w-80 h-80 hover:animate-pulse shadow-lg"
    >
        <img
            :src="'/images/areas/' + area.image"
            alt="area image"
            class="h-5/6"
        >
        <div class="flex justify-center items-center h-1/6">
            <h2 class="text-lg text-center font-bold">{{ area.name }}</h2>
            <!-- <p class="text-sm my-1">{{ area.info }}</p> -->
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    area: {
        type: Object,
        required: true,
    },
})

let url = props.area.id
url = '/areas/' + url
</script>
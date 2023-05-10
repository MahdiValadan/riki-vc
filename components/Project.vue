<template>
    <NuxtLink
        :to="url"
        id="project"
        class="bg-[#FF8F52] text-white w-60 h-64 shadow-lg hover:animate-pulse"
    >
        <img
            :src="'/images/projects/' + project.image + '.jpg'"
            alt="project image"
        >
        <div class="p-4">
            <h2 class="text-lg font-bold">{{ project.name }}</h2>
            <h3 class="text-sm font-semibold mt-2">{{ project.area }}</h3>
            <!-- <p class="text-sm my-1">{{ project.info }}</p> -->
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})
// let url = props.project.name.replace(/\s+/g, '-').toLowerCase();
let url = props.project.id
url = '/projects/' + url
</script>
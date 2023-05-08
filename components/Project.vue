<template>
    <div
        id="project"
        class="bg-[#FF8F52] text-white w-60 "
    >
        <img
            :src="'/images/projects/'+project.image+'.jpg'"
            alt="project image"
        >
        <div class="p-4">
            <h2 class="text-lg font-bold">{{ project.name }}</h2>
            <h3 class="text-base">{{ project.area }}</h3>
            <p class="text-sm my-2 text-justify">{{ project.info }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        project: {
            type: Object,
            required: true,
        },
    }
}
</script>
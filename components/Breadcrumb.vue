<template>
    <!-- <div
        id="breadcrumb-container"
        class="flex flex-row items-center justify-center gap-2 bg-slate-700 text-slate-50 border
            border-slate-800 py-3 px-5 rounded-lg w-80 mx-10 mt-5"
    >
        <NuxtLink :to="'/' + pre">{{ pre }}</NuxtLink>
        <span> > </span>
        <span class="text-slate-300">{{ current }}</span>
    </div> -->
    <div
        id="breadcrumb"
        class="flex flex-row items-center my-5 mx-10 px-5"
    >
        <NuxtLink
            class="text-cyan-600 text-2xl font-bold"
            :to="'/' + pre.toLowerCase()"
        >
            &lt {{ pre }}
        </NuxtLink>
    </div>
</template>

<script setup>
let props = defineProps({
    pre: {
        type: String,
        required: true
    },
    current: {
        type: String,
        required: true
    }
})
</script>
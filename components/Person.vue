<template>
    <div id="person" class="w-60 bg-white">
        <img :src="'/images/people/'+picture" alt="">
        <div class="p-4">
            <h2 class="text-lg font-bold">{{ name }}</h2>
            <h3 class="text-base">{{ role }}</h3>
            <p class="text-sm my-2 text-justify">{{ cv }}</p>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        cv: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        }
    }
}
</script>

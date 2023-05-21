<template>
   <NuxtLink :id="'person_' + personInfo.id" :to="personUrl" class="w-72 bg-white hover:animate-pulse">
    <img :id="'profile_' + personInfo.id" :src="personInfo.image" alt="">
        <div :id="'info_' + personInfo.id" class="p-4">

            <h2 class="text-2xl font-bold">{{ personInfo.name }}</h2>
            <br/>
            <h3 class="text-xs font-bold">{{ personInfo.role }}</h3>
        </div>
    </NuxtLink>
</template>


<script>

export default {
    props: {
        personInfo: {
            type: Object,
            require: true
        }
    },
    computed: {
        personUrl() {
            return `/persons/${this.personInfo.id}`
        }
    }
}
</script>

<script setup>
useSeoMeta({
  title: 'RIKI VC | Persons',
  description: ' Area page of RIKI Venture Capital which gives information about all persons',
  lang: "en"
})</script>

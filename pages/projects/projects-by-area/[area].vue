<template>
    <ProjectsPage
        :title="'Projects By ' + area + ' Area'"
        :area="area"
    />
</template>

<script setup>

useSeoMeta({
  title: 'RIKI VC | Projects by Area',
  description: 'Projects by Area page of RIKI Venture Capital which gives information about specific area projects',
  lang: "en"
})
// get area from 
const route = useRoute()
let area = route.params.area
// make area capital case
area = area.charAt(0).toUpperCase() + area.slice(1)
</script>
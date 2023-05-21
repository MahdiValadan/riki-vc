<template>
    <ProjectsPage
        :title="'Projects By ' + area + ' Area'"
        :area="area"
    />
</template>

<script setup>
// get area from 
const route = useRoute()
let area = route.params.area
// make area capital case
area = area.charAt(0).toUpperCase() + area.slice(1)
</script>
<template>
    <ProjectsPage
        :title="'Projects By ' + area + ' Area'"
        :area="area"
    />
</template>

<script setup>
const route = useRoute()
let area = route.params.area
area = area.charAt(0).toUpperCase() + area.slice(1)
</script>
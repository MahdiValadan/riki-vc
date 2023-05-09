<template>
    <!-- Main Container -->
    <div class="flex flex-col items-center min-h-screen">
        <SmallSubtitle text="All Areas" />
        <!-- area container -->
        <div
            id="areas-container"
            class="w-10/12 flex flex-row items-center p-6"
        >
            <div class="flex flex-row justify-center flex-wrap gap-6 w-full">
                <Area
                    v-for="area in areasList"
                    :key="area.id"
                    :area="area"
                />
                <div class="w-80"></div>
                <div class="w-80"></div>
                <div class="w-80"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
let areasList = []
let { data, error } = await supabase.from('areas').select('*')
if (error) {
    alert('Error: Server Connection')
} else if (data) {
    areasList = data
}
</script>
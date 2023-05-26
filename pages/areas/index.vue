<template>
    <!-- Main Container -->
    <div
        id="all_areas_container"
        class="flex flex-col justify-center items-center pt-5 pb-14"
    >
        <div class="flex flex-col items-center min-h-screen">
            <Subtitle text="All Areas" />

            <Loading v-if="isLoading"></Loading>

            <!-- area container -->
            <Transition name="slide">

                <div
                    v-if="!isLoading"
                    id="areas-container"
                    class="w-11/12 flex flex-row items-center p-6"
                >
                    <div class="flex flex-row justify-center flex-wrap gap-8 w-full">
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
            </Transition>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'RIKI VC | Areas',
    description: ' Areas page of RIKI Venture Capital which gives information about all areas'
})

const supabase = useSupabaseClient()
let areasList = []
let isLoading = ref(true)

onMounted(async () => {
    let { data, error } = await supabase.from('areas').select('*')
    isLoading.value = false
    if (error) {
        alert('Error: Server Connection')
    } else if (data) {
        areasList = data
    }
})

</script>
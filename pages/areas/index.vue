<template>
    <!-- Main Container -->
    <div
        id="all_areas_container"
        class="flex flex-col items-center pt-5 pb-14 min-h-screen"
    >

        <div class="flex flex-col items-center justify-center">
            <Subtitle text="All Areas" />

            <AlertError
                class="sticky"
                v-if="error"
                msg="Server connection error. Try it again later."
            />

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
let error = ref(false)
onMounted(async () => {
    let { data, error: areaError } = await supabase.from('areas').select('*')

    if (data) {
        areasList = data
    } else if (areaError) {
        error.value = true
    }

    isLoading.value = false
})

</script>
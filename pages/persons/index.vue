<template>
    <!-- Main Container -->
    <div
        id="all_persons_container"
        class="flex flex-col items-center pt-5 pb-14 min-h-screen"
    >
        <!-- title  -->
        <div id="all_persons_title">
            <Subtitle :text="personTitle"></Subtitle>
        </div>

        <Loading v-if="isLoading"></Loading>

        <!-- members info -->
        <Transition name="slide">

            <div
                v-if="!isLoading"
                id="all_persons_list"
                class="flex flex-row justify-center flex-wrap gap-6 w-full mt-7"
            >
                <person
                    v-for="person in personList"
                    :key="person.id"
                    :personInfo="person"
                />
                <div class="w-72"></div>
                <div class="w-72"></div>
                <div class="w-72"></div>
                <div class="w-72"></div>
                <div class="w-72"></div>
                <div class="w-72"></div>
            </div>
        </Transition>
    </div>
</template>

<!-- SCRIPT -->
<script setup>

useSeoMeta({
    title: 'RIKI VC | Persons',
    description: 'Persons page of RIKI Venture Capital which gives information about all persons',
    lang: "en"
})

let personTitle = 'All Members'
let personList = []
let isLoading = ref(true)

onMounted(async () => {
    const supabase = useSupabaseClient()
    let { data, error } = await supabase.from('person').select('*').order('id', { ascending: true })
    if (error) {
        alert('Error: Server Connection')
    } else if (data) {
        personList = data
    }
    isLoading.value = false
})

</script>

<!-- STYLE -->
<style scoped>
.slide-enter-active {
    transition: all 0.6s ease;
}

.slide-leave-active {
    transition: all 0.6s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(100vh);
}
</style>
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

        <AlertError
            class="sticky"
            v-if="error"
            msg="Server connection error. Try it again later"
        />

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
let error = ref(false)

onMounted(async () => {
    const supabase = useSupabaseClient()
    let { data, error: errorPerson } = await supabase.from('person').select('id, name, image, role').order('id', { ascending: true })
    if (data) {
        personList = data
    } else if (errorPerson) {
        error.value = true
    }
    isLoading.value = false
})

</script>
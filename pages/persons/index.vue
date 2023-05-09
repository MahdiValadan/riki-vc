<template>
    <!-- Main Container -->
    <div id="all_persons_container" class="flex flex-col justify-center items-center bg-gray-200 pt-5 pl-28 pr-28 pb-14">
        <!-- title  -->
        <div id="all_persons_title">
            <smallSubtitle :text="personTitle"></smallSubtitle>
        </div>
        <!-- members info -->
        <div id="all_persons_list" class="flex flex-row justify-center flex-wrap gap-6 w-full">
            <person v-for="person in personList" :key="person.id" :personInfo="person"/>
        </div>
    </div>
</template>

<script>
import smallSubtitle from '~/components/SmallSubtitle.vue';
import person from '~/components/Person.vue';

export default {
    components: {
        smallSubtitle,
        person,
    },
    data() {

        return {
            personTitle: 'All Members',
            personList: []
        }
    },
    async mounted() {
        const supabase = useSupabaseClient();
        let { data, error } = {};
        ({ data, error } = await supabase.from('person').select('*'));
        if (error) {
            alert('Error: Server Connection');
        } else if (data) {
            this.personList = data;
        }
    }
}
</script>
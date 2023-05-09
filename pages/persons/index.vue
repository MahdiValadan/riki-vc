<template>
    <!-- Main Container -->
    <div class="flex flex-col justify-center items-center bg-gray-200 pt-5 pl-28 pr-28 pb-14">
        <!-- title  -->
        <div>
            <smallSubtitle :text="memberTitle"></smallSubtitle>
        </div>
        <!-- members info -->
        <div class="flex flex-row justify-center flex-wrap gap-6 w-full">
            <person v-for="person in membersList" :key="person.id" :memberInfo="person"/>
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
            memberTitle: 'All Members',
            //baseUrl: '~/assets/images/people/',
            membersList: []
        }
    },
    async mounted() {
        const supabase = useSupabaseClient();
        let { data, error } = {};
        ({ data, error } = await supabase.from('member').select('*'));
        if (error) {
            alert('Error: Server Connection');
        } else if (data) {
            this.membersList = data;
        }
    }
}
</script>
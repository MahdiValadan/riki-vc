<template>
    <!-- Main Container -->
    <div class="flex flex-col items-center bg-gray-200 pt-5 pl-28 pr-28 pb-14">
        <!-- title  -->
        <div>
            <smallSubtitle :text="memberTitle"></smallSubtitle>
        </div>
        <!-- members info -->
        <div class="flex flex-row justify-center flex-wrap gap-6 w-full">
            <person v-for="person in teamMembers" :key="person.id" :name="person.name" :role="person.role" :cv="person.cv"
                :picture="baseUrl+person.picture" />
        </div>
    </div>
</template>

<script>
import smallSubtitle from '~/components/small-Subtitle.vue';
import person from '~/components/Person.vue';

export default {
    components: {
        smallSubtitle,
        person,
    },
    data() {

        return {
            memberTitle: 'All Members',
            baseUrl: '~/assets/images/people/',
            teamMembers: [
                { id: 1, name: 'Luciano Balbo', role: 'Developer', cv: 'short cv', picture: 'Luciano_Balbo_02.jpg' },
                { id: 2, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 3, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 4, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 5, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 6, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 7, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 8, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 9, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 10, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 11, name: 'Lorenzo Allevi', role: 'Designer', cv: 'jane_cv.pdf', picture: 'Luciano_Balbo_02.jpg' },
                { id: 12, name: 'Raffaele Fedele', role: 'Marketer', cv: 'bob_cv.pdf', picture: 'Luciano_Balbo_02.jpg' }
            ]
        }
    }
}
</script>
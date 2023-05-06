
<template>
    <AppBody>
        <div class="title-container">
            <Subtitle :text="introTitle" />
        </div>
        <div>
            <img src="~/assets/images/intro_pic.jpg"/>
        </div>

        <div class="title-container">
            <Subtitle :text="teamTitle" />
        </div>
    </AppBody>
</template>

<script>
import Subtitle from '~/components/Subtitle.vue';

export default {
    components: {
        Subtitle
    },
    data() {
        return {
            introTitle: 'INTRO',
            teamTitle: 'TEAM'
        }
    }
}
</script>
<template>
    <div class="flex flex-col items-center bg-gray-200 pt-14 pl-28 pr-28 pb-14">
        <div class="title-container">
            <Subtitle :text="introTitle" />
        </div>
        <div class="size-style bg-white rounded-lg min-h-screen flex flex-col items-center pb-14 shadow-md mx-1 my-1">
            <p class="font-roboto font-semibold text-black text-5xl leading-59 pt-20 pb-14">Fueling Innovation: Where Vision Meets
                Capital</p>
            <p class="font-normal text-lg leading-8 text-justify text-gray-600 pl-32 pr-32 pb-14">Welcome to our venture capital website,
                where we are dedicated to fueling innovation and driving growth. Our
                mission is to support and invest in the most promising startups and entrepreneurs, helping them achieve
                their potential and make a positive impact on the world. With our deep expertise and vast network of
                resources, we are uniquely positioned to identify and nurture the next generation of game-changing
                companies. Join us on this exciting journey and be a part of shaping the future of technology and beyond.
            </p>
            <img class="w-full" src="~/assets/images/home/home_intro.jpg"/>
            <div class="w-full flex flex-col justify-start pt-20 pl-20 pr-32 pb-14">
                <p class="font-extrabold text-4xl leading-14">Our Motivation:</p>
                <div class="flex flex-row justify-between pt-12 font-bold text-5xl text-orange-500">
                    <p>PROSPERITY</p>
                    <p>ABUNDANCE</p>
                    <p>FORTUNE</p>
                </div>
            </div>
        </div>
        

        <div class="title-container">
            <Subtitle :text="teamTitle" />
        </div>
    </div>
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

<style>
.size-style {
    width: 78vw;
}
</style>
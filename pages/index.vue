<template>
    <div class="flex flex-col items-center bg-gray-200 pt-5 pl-28 pr-28 pb-14">
        <div class="title-container">
            <Subtitle :text="introTitle" />
        </div>
        <div class="size-style bg-white rounded-lg min-h-screen flex flex-col items-center pb-14 shadow-md mx-1 my-1">
            <p class="font-roboto font-semibold text-black text-5xl leading-59 pt-20 pb-14">Fueling Innovation: Where Vision
                Meets
                Capital</p>
            <p class="font-normal text-lg leading-8 text-justify text-gray-600 pl-32 pr-32 pb-14">Welcome to our venture
                capital website,
                where we are dedicated to fueling innovation and driving growth. Our
                mission is to support and invest in the most promising startups and entrepreneurs, helping them achieve
                their potential and make a positive impact on the world. With our deep expertise and vast network of
                resources, we are uniquely positioned to identify and nurture the next generation of game-changing
                companies. Join us on this exciting journey and be a part of shaping the future of technology and beyond.
            </p>
            <img class="w-full" src="~/assets/images/home/home_intro.jpg" />
            <div class="w-full flex flex-col justify-start pt-20 pl-20 pr-32 pb-14">
                <p class="font-extrabold text-4xl leading-14">Our Motivation:</p>
                <div class="flex flex-row justify-between pt-12 font-bold text-5xl text-[#FF8F52]">
                    <p>PROSPERITY</p>
                    <p>ABUNDANCE</p>
                    <p>FORTUNE</p>
                </div>
            </div>
        </div>


        <div class="title-container mt-20">
            <Subtitle :text="teamTitle" />
        </div>
        <div class="size-style bg-white rounded-lg min-h-screen flex flex-row items-center px-10 py-16 shadow-md mx-1 my-1">
            <img class="w-3/5" src="~/assets/images/home/team.jpg" />
            <div class="flex flex-col justify-end">
                <p class="font-normal text-base leading-7 text-justify text-gray-600 pl-10 pb-14">Our venture capital
                    team
                    comprises seasoned professionals with a wealth of experience in finance, technology, and
                    entrepreneurship.
                    We work closely with our portfolio companies to provide strategic guidance, operational support. Our
                    team's
                    collaborative approach fosters innovation and creativity, and we are always on the lookout for new ideas
                    and
                    opportunities that have the potential to transform markets and change the world. Together, we bring a
                    wealth
                    of knowledge and expertise to every investment we make, and we are dedicated to helping our portfolio
                    companies achieve their full potential.At our venture capital firm, we prioritize teamwork and
                    collaboration
                    in everything we do. Our team of experienced professionals brings diverse perspectives and expertise to
                    the
                    table, working together to identify and support the most promising investment opportunities and help our
                    portfolio companies thrive.
                </p>
                <div class="flex justify-end">
                    <OrangeButton text="Discover Team" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Subtitle from '~/components/Subtitle.vue';
import OrangeButton from '~/components/OrangeButton.vue';

export default {
    components: {
        Subtitle,
        OrangeButton
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
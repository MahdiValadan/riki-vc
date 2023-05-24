<template>
    <!-- Main container -->
    <div class="flex flex-col items-center bg-gray-200 pt-5 pb-14 px-28">
        <!-- intro title -->
        <div>
            <Subtitle :text="introTitle" />
        </div>
        <!-- intro panel -->
        <div class="size-style bg-white rounded-lg min-h-screen flex flex-col items-center pb-14 shadow-md mx-1 my-5">
            <p class="font-semibold text-black text-2xl sm:text-5xl text-center pt-20
            pb-14 px-10 sm:px-32">
                Fueling Innovations
                <br>
                Where Vision Meets Capital
            </p>
            <p
                lang=en
                class="text-base sm:text-xl leading-8 text-center sm:text-justify text-gray-600 px-10 sm:px-32 pb-14"
            >
                Welcome to our venture
                capital website,
                where we are dedicated to fueling innovation and driving growth. Our
                mission is to support and invest in the most promising startups and entrepreneurs, helping them achieve
                their potential and make a positive impact on the world. With our deep expertise and vast network of
                resources, we are uniquely positioned to identify and nurture the next generation of game-changing
                companies. Join us on this exciting journey and be a part of shaping the future of technology and beyond.
            </p>
            <img
                class="w-full"
                src="~/assets/images/home/home_intro.jpg"
                alt="intro"
            />
            <div class="w-full flex flex-col justify-start pt-20 px-10 sm:px-20 pb-14">
                <p class="font-extrabold text-2xl sm:text-4xl leading-14">Our Motivation:</p>
                <div
                    class="flex flex-row flex-wrap gap-8 sm:justify-between pt-12 font-bold text-2xl sm:text-4xl text-[#0e7490] break-all">
                    <p lang=en>PROSPERITY</p>
                    <p lang=en>ABUNDANCE</p>
                    <p lang=en>FORTUNE</p>
                </div>
            </div>
        </div>

        <!-- team title -->
        <div class="mt-7">
            <Subtitle :text="teamTitle" />
        </div>
        <!-- team panel -->
        <div
            class="size-style bg-white rounded-lg min-h-screen flex flex-col items-center px-10 py-16 shadow-md mx-1 my-5 sm:flex-row gap-10">
            <img
                class="w-full sm:w-3/5"
                src="~/assets/images/home/team.jpg"
                alt="team"
            />
            <div class="flex flex-col justify-end">
                <p
                    lang=en
                    class="font-normal text-sm sm:text-lg leading-7 text-center sm:text-justify text-gray-600 pb-14"
                >Our venture capital
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
                <!-- this button goes to All Persons tab -->
                <div class="flex justify-center sm:justify-end">
                    <LinkButton
                        link="/persons"
                        buttonText="Discover Team"
                    />
                </div>
            </div>
        </div>
    </div>
</template>



<script setup >
let introTitle = 'INTRO'
let teamTitle = 'TEAM'
useSeoMeta({
    title: 'RIKI VC | Home',
    description: 'Home page of RIKI Venture Capital serves as a welcoming introduction',
    lang: "en"
})
</script>

<style>
.size-style {
    width: 78vw;
}
</style>
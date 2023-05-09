<template>
    <div id="person" class="w-72 bg-white">
        <img id="profile" :src="memberInfo.image" alt="">
        <div id="info" class="p-4">
            <h2 class="text-2xl font-bold">{{ memberInfo.name }}</h2>
            <br/>
            <h3 class="text-xs font-bold">{{ memberInfo.role }}</h3>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        memberInfo: {
            type: Object,
            require: true
        }
    }
}
</script>

<template>
    <div class="app">
        <div>
            <img :src="`/api/canvas`" alt="canvas">
        </div>
    </div>
</template>

<style>
body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;

    background: #111;
}

img {
    position: fixed;
    left: calc(50% - 400px);
    top: calc(50% - 300px);
}
</style>

<script setup>
    useMeta({
        title: 'k1tzu MAIL',
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, maximum-scale=1',
            }
        ]
    })
</script>
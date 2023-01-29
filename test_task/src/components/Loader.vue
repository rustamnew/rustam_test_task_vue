<template>
    <div class="loader">
        <img src="../assets/preloader.gif" alt="loading">
    </div>
</template>

<script>
export default {
    name: "LoaderGif"
}
</script>

<style>
    .loader {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
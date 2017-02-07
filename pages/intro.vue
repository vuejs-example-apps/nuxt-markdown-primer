<template>
<div class="page" :id="page.id">
    <h1 class="title">{{ page.title }}</h1>
    <div class="content" v-html="page.content"/>
</div>
</template>

<script>
export default {
    computed: {
        page () { return this.$store.state.pages.intro }
    }
}
</script>

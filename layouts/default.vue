<template>
<div class="layout">
    <nav class="header-nav">
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/intro">Intro</nuxt-link>        
    </nav>
    <nuxt class="content"/>
    <div class="footer">
        <div class="meta">Nuxt Marked Primer</div>
        <div class="copyright">&copy; <a href="https://gbezyuk.github.io">Grigoriy Bezyuk</a> 2017</div>
    </div>
</div>
</template>

<style lang="stylus">
html, body
    margin 0
    padding 0
</style>

<style lang="stylus" scoped>
.header-nav
    border-bottom 1px solid violet

    a
        display inline-block
        padding 1em
    
        &:hover
            background-color violet
            color white

        &.nuxt-link-active
            background-color darkviolet
            color white
.content
    padding 1em

.footer
    background-color darkviolet
    color white
    padding 1em

    a
        color white
</style>
<script setup lang="ts">
import { provide } from 'vue'
import HelloWorld from './HelloWorld.vue'

provide('message', 'Hello')
</script>

<template>
    <HelloWorld />
</template>

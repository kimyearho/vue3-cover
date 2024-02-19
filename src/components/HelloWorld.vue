<script setup lang="ts">
import { inject } from 'vue'

const message = inject('message', 'Default')
</script>

<template>{{ message }} World !</template>

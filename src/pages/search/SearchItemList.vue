<script setup lang="ts">
import useFetch from '@/hooks/useFetcher'
import { reactive } from 'vue'
import { ref } from 'vue'

const { data, isPending, isSuccess, isError, error } = useFetch('queryKey', {
    url: '/api/search',
    params: {
        part: 'snippet',
        q: 'Most Epic Music',
        type: 'video,playlist,channel',
        maxResults: 20,
        safeSearch: 'strict',
        key: 'AIzaSyBGf5faKOkeLceCwRfN0fv4LJ1CWKrjG-U',
    },
})
const ytItems = reactive(data)
</script>

<template>
    <v-card class="mx-auto" max-width="450">
        <v-toolbar color="cyan-lighten-1">
            <v-btn variant="text" icon="mdi-menu"></v-btn>
            <v-toolbar-title>Inbox</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn variant="text" icon="mdi-magnify"></v-btn>
        </v-toolbar>

        <v-list v-if="isSuccess">
            <v-list-item v-for="(item, i) in data?.items" :key="i" :value="item" color="primary" rounded="xl">
                <template v-slot:prepend>
                    <v-avatar size="56px">
                        <v-img alt="Avatar" :src="item.snippet.thumbnails.medium.url"></v-img>
                    </v-avatar>
                </template>

                <v-list-item-title v-html="item.snippet.title"></v-list-item-title>
            </v-list-item>
            <!-- <template v-slot:subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
            </template> -->
        </v-list>
    </v-card>
</template>

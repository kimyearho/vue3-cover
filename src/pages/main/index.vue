<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@/components/Parent.vue'
import useFetch from '@/hooks/useFetcher'
import { computed } from 'vue'

// Custom hook
const { data, isPending, isSuccess, isError, error } = useFetch('queryKey', {
    url: '/users/records',
    params: {},
})

const count = ref<number>(0)
const num1 = ref<number>(50)
const num2 = ref<number>(10)

const sum = computed(() => num1.value + num2.value)

const increment = () => {
    count.value++
}
</script>

<template>
    <!-- {{ (count as number).toFixed(1) }} -->
    <!-- <button @click="increment">증가</button> -->

    <v-row no-gutters>
        <v-col>
            <!-- <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet> -->
        </v-col>

        <v-col cols="2">
            <h1>This is App</h1>
            <HelloWorld />
            <br />
            <br />
            <v-sheet class="pa-2 ma-2">
                <v-text-field label="값1" variant="outlined" v-model.number="num1"></v-text-field>
                <v-text-field label="값2" variant="outlined" v-model.number="num2"></v-text-field>
                <!-- <v-btn prepend-icon="$vuetify"> 합산 </v-btn> -->
            </v-sheet>
            <v-sheet class="pa-2 ma-2">
                <div>
                    <span>computed sum:</span> <br />
                    <h3>{{ sum }}</h3>
                </div>
            </v-sheet>
            <br />
            <br />

            <v-sheet class="pa-2 ma-2">
                <h2>사용자 리스트 (useQuery)</h2>
                <div v-if="isPending"><h1>Loading...</h1></div>
                <div v-else-if="isError">An error has occurred: {{ error }}</div>
                <div v-else>
                    <ul v-if="isSuccess">
                        <li v-for="item in data.items" :key="item.id">
                            <a>{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </v-sheet>
        </v-col>

        <v-col>
            <!-- <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet> -->
        </v-col>
    </v-row>
</template>

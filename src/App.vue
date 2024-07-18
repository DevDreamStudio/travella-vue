<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <transition name="fade-router" v-if="loaded">
                <component :is="Component" :key="$route.path" />
            </transition>
            <Loader v-else />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
const loaded: Ref<boolean> = ref(false);
onMounted(() => {
    loaded.value = true;
});
</script>

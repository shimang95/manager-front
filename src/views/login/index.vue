<template>
    <div>
        {{ msg }}
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('登录页')
</script>
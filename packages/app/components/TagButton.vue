<template>
    <button :class="{ 'bg-gray-900 text-white': isActive, 'bg-gray-200 text-gray-900': !isActive }" :title="tag.name"
        class="py-1 px-2 border-none cursor-pointer flex items-center gap-2" @click="handleClick">
        <img :src="isActive ? '/enabled.webp' : '/disabled.webp'"
            :alt="isActive ? 'Activé' : 'Désactivé'" class="h-5"
        />
        {{ tag.name }}
    </button>
</template>

<script lang="ts">
export default {
    props: {
        tag: Object,
        isActive: Boolean,
    },
    emits: ['click'],
    methods: {
        handleClick() {
            this.$emit('click', this.tag.slug);
        }
    }
}
</script>
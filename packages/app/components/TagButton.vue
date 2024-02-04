<template>
    <button :class="{ 'tag-button-active': isActive, 'tag-button': !isActive }" :title="tag.name"
        class="tag-button-base py-1 px-2 cursor-pointer flex items-center gap-2" @click="handleClick">
        <img :src="isActive ? '/enabled.webp' : '/disabled.webp'"
            :alt="isActive ? 'Activé' : 'Désactivé'" class="h-5"
        />
        <span class="tag-text">{{ tag.name }}</span>
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

<style scoped>
.tag-button-base {
    display: inline-block;
    border: none;
    outline: none;
    font-family: 'Monocraft';
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
}

.tag-button {
    background-color: #8B8B8B;
    color: white;
    box-shadow: 3px 3px 0px #666;
}

.tag-button-active {
    background-color: #5C5C5C;
    color: white;
    box-shadow: 1px 1px 0px #333;
}

.tag-text {
    text-shadow: 1px 1px #333;
}
</style>
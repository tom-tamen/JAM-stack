<script setup>

    const props = defineProps(['craft', 'items', 'output']);

    const getItemImage = (itemId) => {
        const item = props.items.find(item => item.item.id === itemId);
        return item ? item.item.image.url : '';
    };

    const getItemName = (itemId) => {
        const item = props.items.find(item => item.item.id === itemId);
        return item ? item.item.name : '';
    };

</script>


<template>
    <div class="crafting-container">
        <h2 class="crafting-text">Crafting</h2>
        <div class="crafting-zone">
            <div class="crafting-grid">
                <div v-for="(cell, index) in craft" :key="index" class="crafting-cell">
                    <img v-if="cell !== 0" :src="getItemImage(cell)" :alt="getItemName(cell)" class="crafting-item"/>
                </div>
            </div>
            <img src="/craft-arrow.webp" alt="crafting arrow" class="crafting-image"/>
            <div class="crafting-output">
                <img :src="output" alt="crafting output" class="crafting-item-output"/>
            </div>
        </div>
    </div>
</template>

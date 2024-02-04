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

<style scoped>
.crafting-grid {
	display: grid;
	grid-template-columns: repeat(3, 36px);
	grid-template-rows: repeat(3, 36px);
	gap: 4px;
}

.crafting-cell,
.crafting-output {
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #8B8B8B;
	border: 2px solid #373737;
	border-right-color: #FFF;
	border-bottom-color: #FFF;
}

.crafting-container {
	display: flex;
	flex-direction: column;
	background: #C6C6C6;
	border: 2px solid #373737;
	border-right-color: #FFF;
	border-bottom-color: #FFF;
	padding: 30px;
	width: fit-content;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}

.crafting-zone {
	display: flex;
	flex-direction: row;
	gap: 20px;
	align-items: center;
}

.crafting-output {
	width: 54px;
	height: 54px;
}

.crafting-item,
.crafting-item-output {
	width: 34px;
	height: 34px;
}

.crafting-item-output {
	width: 34px;
	height: 34px;
	padding: 2px;
}

.crafting-item-output:hover {
	background-color: #c5c5c5;
}


.crafting-text {
	font-size: 16px;
	color: #373737;
	font-family: 'Monocraft';
	margin: 0 0 3px 0;
	font-weight: normal;
}
</style>
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

const getItemDescription = (itemId) => {
    const item = props.items.find(item => item.item.id === itemId);
    return item ? item.item.description : '';
};

</script>


<template>
    <div class="crafting-container">
        <h2 class="crafting-text">Crafting</h2>
        <div class="crafting-zone">
            <div class="crafting-grid">
                <div v-for="(cell, index) in craft" :key="index" class="crafting-cell">
                    <img v-if="cell !== 0" :src="getItemImage(cell)" :alt="getItemName(cell)" class="crafting-item" />
                    <div v-if="cell !== 0" class="hover-card">
                        <h4>{{ getItemName(cell) }}</h4>
                        <p>{{ getItemDescription(cell) }}</p>
                    </div>
                </div>
            </div>
            <img src="/craft-arrow.webp" alt="crafting arrow" class="crafting-image" />
            <div class="crafting-output">
                <img :src="output" alt="crafting output" class="crafting-item-output" />
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

.crafting-cell{
    position: relative;
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

.hover-card {
    display: none;
    position: absolute;
    background-color: #3C3C3C; /* Dark background */
    border: 2px solid #8B8B8B; /* Lighter border */
    border-radius: 4px;
    padding: 10px;
    width: 200px;
    z-index: 100;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    left: 50%;
    transform: translateX(-50%);
    bottom: 100%;
    margin-bottom: 5px;
    
}

.crafting-cell:hover .hover-card {
    display: block;
}


.hover-card{
    font-family: "Monocraft";
    color: #FFF;
}

.hover-card h4 {
    font-size: 1em;
    margin: 0;
    padding: 0.5em;
    background-color: #4C4C4C;
    border-bottom: 2px solid #8B8B8B;
    font-weight: normal;
}

.hover-card p {
    font-size: 0.8em;
    margin: 0;
    padding: 0.5em;
}

@media screen and (max-width: 600px){
    
    .crafting-container{
        width: fit-content;
        padding: 20px;
    }
}
</style>
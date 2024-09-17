<script setup lang="ts">
    import { Part } from '@/models/Parts'; 
    import { ref, computed, type Ref} from 'vue';
    import { BASE_URL } from '../services/service.config';

    type PartProps = {
        parts: Array<Part>;
        position: "left"|"right"|"top"|"bottom"|"center"
    }

    const props = defineProps<PartProps>();

    const model = defineModel<Part|null>();

    const partIndex:Ref<number> = ref(0);

    const changeIndex = (next: boolean) => {
        const newIndex = next ? partIndex.value + 1 : partIndex.value - 1;

        if(newIndex < 0){
            partIndex.value = (props.parts.length - 1);
        }
        else if(newIndex > (props.parts.length-1)) {
            partIndex.value = 0;
        }
        else {
            partIndex.value = newIndex;
        }

        model.value = props.parts[partIndex.value];
    }
</script>

<template>
    <div :class="`part ${props.position}`">
        <img :src="BASE_URL + props.parts[partIndex].src" />
        <button v-on:click="changeIndex(false)" class="prev-selector"></button>
        <button v-on:click="changeIndex(true)" class="next-selector"></button>
    </div>
</template>

<style lang="scss">
$part-width: 165px;
$part-height: 165px;
.part {
    position: relative;
    width: $part-width;
    height: $part-height;
    border: 3px solid var(--app-part-border);

    img {
        width: $part-width;
        height: $part-height;
    }

    button {
        position: absolute;
        z-index: 1;
        top: -3px;
        width: 25px;
        height: 171px;
    }

    .prev-selector {
        left: -28px;        
    }

    .next-selector {
        right: -28px;

    }
}
//"left"|"right"|"top"|"bottom"|"center"
.top {
    border-bottom: none;
}

.left{
    border-right: none;
    
    img {
        transform: rotate(-90deg);
    }

    .next-selector {
        top: auto;
        bottom: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }

    .prev-selector {
        top: -28px;
        left: -3px;
        width: 144px;
        height: 25px;      
    }

}


.right {
    border-left: none;
        
    img {
        transform: rotate(90deg);
    }

    .next-selector {
        top: auto;
        bottom: -28px;
        left: 24px;
        width: 144px;
        height: 25px;
    }

    .prev-selector {
        top: -28px;
        left: 24px;
        width: 144px;
        height: 25px;      
    }
}

.bottom {
    border-top: none;
}

.center {
    border: none;
    
    button {
        opacity: 0.6;
    }
}

.top > .prev-selector::after,
.bottom > .prev-selector::after,
.center > .prev-selector::after {
    content: "\25C4";
}

.top > .next-selector::after,
.bottom > .next-selector::after,
.center > .next-selector::after {
    content: "\25BA";
}

//

.left > .prev-selector::after,
.right > .prev-selector::after {
    content: "\25B2";
}

.left > .next-selector::after,
.right > .next-selector::after {
    content: "\25BC";
}
</style>
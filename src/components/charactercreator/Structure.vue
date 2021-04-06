<template>
    <div>
        <div class="options">
            <div v-for="(name, i) in structureLabels" :key="i" class="option">
                <div class="labelContainer">
                    <div class="label">
                        {{ getStructureLabel(i) }}
                    </div>
                    <div class="value">
                        {{ parseFloat(data.structure[i]).toFixed(1) }} | 1.0
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" min="-1" max="1" step="0.1" v-model.number="data.structure[i]"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    props: ['data'],
    computed: {
        ...mapState('charactercreator', [
            'structureLabels'
        ])
    },
    methods: {
        setParameter(parameter, value) {
            this.data[parameter] = value;
            this.$emit('update-character');
        },
        getStructureLabel (i) {
            return this.structureLabels[i]
        }
    },
    watch: {
        'data.structure': function(newVal, oldVal) {
            this.$emit('update-character');
        }
    }
}
</script>

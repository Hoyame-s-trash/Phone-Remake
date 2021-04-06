<template>
    <div>
        <div class="options">

            <!-- Torso -->
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Haut
                    </div>
                    <div class="value">
                        {{ data.torso }} | {{ maxTorso }}
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" :min="0" :max="maxTorso" v-model.number="data.torso" :step="1" @input="e => handleChange(e, 'torso', 'drawable', 1)" />
                </div>

                <div class="labelContainer" v-if="maxTorsoTextures > 0">
                    <div class="label">
                        Texture du haut
                    </div>
                    <div class="value">
                        {{ data.torsoTextures }} | {{ maxTorsoTextures }}
                    </div>
                </div>
                <div class="inputHolder" v-if="maxTorsoTextures > 0">
                    <input type="range" :min="0" :max="maxTorsoTextures" v-model.number="data.torsoTextures" :step="1" @input="e => handleChange(e, 'torso', 'texture', 1)" />
                </div>
            </div>
            <!-- Torso end -->

            <!-- Torso2 -->
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Maillot de corp
                    </div>
                    <div class="value">
                        {{ data.torso2 }} | {{ maxTorso2 }}
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" :min="0" :max="maxTorso2" v-model.number="data.torso2" :step="1" @input="e => handleChange(e, 'torso2', 'drawable', 1)" />
                </div>

                <div class="labelContainer" v-if="maxTorso2Textures > 0">
                    <div class="label">
                        Texture du maillot de corp
                    </div>
                    <div class="value">
                        {{ data.torso2Textures }} | {{ maxTorso2Textures }}
                    </div>
                </div>
                <div class="inputHolder" v-if="maxTorso2Textures > 0">
                    <input type="range" :min="0" :max="maxTorso2Textures" v-model.number="data.torso2Textures" :step="1" @input="e => handleChange(e, 'torso2', 'texture', 1)" />
                </div>
            </div>
            <!-- Torso2 end -->

            <!-- Hands -->
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Bras
                    </div>
                    <div class="value">
                        {{ data.hands }} | {{ maxHands }}
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" :min="0" :max="maxHands" v-model.number="data.hands" :step="1" @input="e => handleChange(e, 'hands', 'drawable', 1)" />
                </div>
            </div>
            <!-- Hands end -->

            <!-- Pants -->
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Pantalon
                    </div>
                    <div class="value">
                        {{ data.pants }} | {{ maxPants }}
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" :min="0" :max="maxPants" v-model.number="data.pants" :step="1" @input="e => handleChange(e, 'pants', 'drawable', 1)" />
                </div>

                <div class="labelContainer" v-if="maxPantsTextures > 0">
                    <div class="label">
                        Texture du pantalon
                    </div>
                    <div class="value">
                        {{ data.pantsTextures }} | {{ maxPantsTextures }}
                    </div>
                </div>
                <div class="inputHolder" v-if="maxPantsTextures > 0">
                    <input type="range" :min="0" :max="maxPantsTextures" v-model.number="data.pantsTextures" :step="1" @input="e => handleChange(e, 'pants', 'texture', 1)" />
                </div>
            </div>
            <!-- Pants end -->

            <!-- Shoes -->
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Chaussures
                    </div>
                    <div class="value">
                        {{ data.shoes }} | {{ maxShoes }}
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" :min="0" :max="maxShoes" v-model.number="data.shoes" :step="1" @input="e => handleChange(e, 'shoes', 'drawable', 1)" />
                </div>

                <div class="labelContainer" v-if="maxShoesTextures > 0">
                    <div class="label">
                        Texture des chaussures
                    </div>
                    <div class="value">
                        {{ data.shoesTextures }} | {{ maxShoesTextures }}
                    </div>
                </div>
                <div class="inputHolder" v-if="maxShoesTextures > 0">
                    <input type="range" :min="0" :max="maxShoesTextures" v-model.number="data.shoesTextures" :step="1" @input="e => handleChange(e, 'shoes', 'texture', 1)" />
                </div>
            </div>
            <!-- Shoes end -->
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    props: {
        data: Object,
        clothes: Object
    },
    computed: {
        ...mapState('charactercreator', [
            'maxTorso',
            'maxTorso2',
            'maxHands',
            'maxTorsoTextures',
            'maxTorso2Textures',
            'maxPants',
            'maxPantsTextures',
            'maxShoes',
            'maxShoesTextures'
        ])
    },
    methods: {
        ...mapActions('charactercreator', [
            'setMaxTorsoTextures',
            'setMaxTorso2Textures',
            'setMaxPantsTextures',
            'setMaxShoesTextures'
        ]),
        handleChange (e, index, parameter, i) {
            const value = e.target.value
            this.clothes[index][parameter] = value
            this.$emit('update-character')
        },
        updateMaxTextures (parameter) {
            if (parameter === 'torsoTextures') {
                this.$ipc.send("accounts:GetMaxTextures", (max) => {
                    this.setMaxTorsoTextures(max)
                }, 11, this.data.torso)
            } else if (parameter === 'torso2Textures') {
                this.$ipc.send("accounts:GetMaxTextures", (max) => {
                    this.setMaxTorso2Textures(max)
                }, 8, this.data.torso2)
            } else if (parameter === 'pantsTextures') {
                this.$ipc.send("accounts:GetMaxTextures", (max) => {
                    this.setMaxPantsTextures(max)
                }, 4, this.data.pants)
            } else if (parameter === 'shoesTextures') {
                this.$ipc.send("accounts:GetMaxTextures", (max) => {
                    this.setMaxShoesTextures(max)
                }, 6, this.data.shoes)
            }
        }
    },
    watch: {
        'data.torso': function (newVal, oldVal) {
            this.updateMaxTextures('torsoTextures')
            this.data.torsoTextures = 0
            this.$emit('update-character')
        },
        'data.torsoTextures': function (newVal, oldVal) {
            this.$emit('update-character')
        },
        'data.torso2': function (newVal, oldVal) {
            this.updateMaxTextures('torso2Textures')
            this.data.torso2Textures = 0
            this.$emit('update-character')
        },
        'data.torso2Textures': function (newVal, oldVal) {
            this.$emit('update-character')
        },
        'data.pants': function (newVal, oldVal) {
            this.updateMaxTextures('pantsTextures')
            this.data.pantsTextures = 0
            this.$emit('update-character')
        },
        'data.pantsTextures': function (newVal, oldVal) {
            this.$emit('update-character')
        },
        'data.shoes': function (newVal, oldVal) {
            this.updateMaxTextures('shoesTextures')
            this.data.shoesTextures = 0
            this.$emit('update-character')
        },
        'data.shoesTextures': function (newVal, oldVal) {
            this.$emit('update-character')
        }
    },
    mounted () {
        this.updateMaxTextures('torsoTextures')
        this.updateMaxTextures('torso2Textures')
        this.updateMaxTextures('pantsTextures')
        this.updateMaxTextures('shoesTextures')
        this.$emit('update-character')
    }
}
</script>

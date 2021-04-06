<template>
    <div>
        <div class="options">
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Sexe du personnage
                    </div>
                    <div class="value">
                        {{ data.sex === 0 ? 'Femme' : 'Homme' }}
                    </div>
                </div>
                <div class="split">
                    <button @click="setParameter('sex', 0)" :class="isActive('sex', 0)">Femme</button>
                    <button @click="setParameter('sex', 1)" :class="isActive('sex', 1)">Homme</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Visage du père
                    </div>
                    <div class="value">
                        {{ data.faceFather }} | 45
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('faceFather', 0, 45, 1)">&#8249;</button>
                    <span> {{ getFaceNames(data.faceFather) }}</span>
                    <button class="arrowRight" @click="incrementParameter('faceFather', 0, 45, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Couleur de peau du père
                    </div>
                    <div class="value">
                        {{ data.skinFather }} | 45
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('skinFather', 0, 45, 1)">&#8249;</button>
                    <span> {{ getFaceNames(data.skinFather) }}</span>
                    <button class="arrowRight" @click="incrementParameter('skinFather', 0, 45, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Visage de la mère
                    </div>
                    <div class="value">
                        {{ data.faceMother }} | 45
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('faceMother', 0, 45, 1)">&#8249;</button>
                    <span> {{ getFaceNames(data.faceMother) }}</span>
                    <button class="arrowRight" @click="incrementParameter('faceMother', 0, 45, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Couleur de peau de la mère
                    </div>
                    <div class="value">
                        {{ data.skinMother }} | 45
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('skinMother', 0, 45, 1)">&#8249;</button>
                    <span> {{ getFaceNames(data.skinMother) }}</span>
                    <button class="arrowRight" @click="incrementParameter('skinMother', 0, 45, 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                       Mélange des visages
                    </div>
                    <div class="value">
                        {{ parseFloat(data.faceMix).toFixed(1) }} | 1.0
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" min="0" max="1" step="0.1" v-model.number="data.faceMix"/>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                       Mélange des couleurs de peau
                    </div>
                    <div class="value">
                        {{ parseFloat(data.skinMix).toFixed(1) }} | 1.0
                    </div>
                </div>
                <div class="inputHolder">
                    <input type="range" min="0.0" max="1.0" step="0.1" v-model.number="data.skinMix"/>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Couleur des yeux
                    </div>
                    <div class="value">
                        {{ data.eyes }} | 30
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('eyes', 0, 30, 1)">&#8249;</button>
                    <span> {{ data.eyes }} </span>
                    <button class="arrowRight" @click="incrementParameter('eyes', 0, 30, 1)">&#8250;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    props: ['data', 'clothes'],
    computed: {
        ...mapState('charactercreator', [
            'faceNames'
        ])
    },
    methods: {
        isActive(parameter, value) {
            if (this.data[parameter] === value) {
                return { active: true }
            }

            return { active: false }
        },
        setParameter(parameter, value) {
            if (parameter === 'sex') {
                if (value === 0) {
                    this.data.faceFather = 33
                    this.data.faceMother = 45
                    this.data.skinFather = 45
                    this.data.skinMother = 45
                    this.data.skinMix = 0.5
                    this.data.faceMix = 0.5
                    this.data.hair = 0
                    this.data.facialHair = 0
                    this.data.facialHairColor1 = 0
                    this.data.eyebrows = 0

                    this.clothes.torso.drawable = 15
                    this.clothes.torso.texture = 0
                    this.clothes.torso2.drawable = 15
                    this.clothes.torso2.texture = 0
                    this.clothes.hands.drawable = 15
                    this.clothes.pants.drawable = 14
                    this.clothes.pants.texture = 0
                    this.clothes.shoes.drawable = 35
                    this.clothes.shoes.texture = 0
                } else {
                    this.data.faceMother = 0
                    this.data.faceFather = 0
                    this.data.skinFather = 0
                    this.data.skinMother = 0
                    this.data.skinMix = 0.5
                    this.data.faceMix = 0.5
                    this.data.hair = 0
                    this.data.facialHair = 0
                    this.data.facialHairColor1 = 0
                    this.data.eyebrows = 0

                    this.clothes.torso.drawable = 15
                    this.clothes.torso.texture = 0
                    this.clothes.torso2.drawable = 57
                    this.clothes.torso2.texture = 0
                    this.clothes.hands.drawable = 15
                    this.clothes.pants.drawable = 14
                    this.clothes.pants.texture = 0
                    this.clothes.shoes.drawable = 34
                    this.clothes.shoes.texture = 0
                }
            }

            if (isNaN(value)) {
                this.data[parameter] = value
            } else {
                this.data[parameter] = parseFloat(value)
            }

            this.$emit('update-character')
        },
        decrementParameter(parameter, min, max, incrementValue) {
            this.data[parameter] -= incrementValue

            if (this.data[parameter] < min) {
                this.data[parameter] = max
            }

            this.$emit('update-character')
        },
        incrementParameter(parameter, min, max, incrementValue) {
            this.data[parameter] += incrementValue

            if (this.data[parameter] > max) {
                this.data[parameter] = min
            }

            this.$emit('update-character')
        },
        getFaceNames (data) {
            return this.faceNames[data]
        }
    },
    watch: {
        'data.faceMix': function(newVal, oldVal) {
            this.$emit('update-character')
        },
        'data.skinMix': function(newVal, oldVal) {
            this.$emit('update-character')
        }
    }
}
</script>

<template>
    <div>
        <div class="options">
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Coupe de cheveux
                    </div>
                    <div class="value">
                        {{ (data.sex === 0) ? currentFemaleHair : currentMaleHair }} | {{ getHairCount() }}
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter2('hair')">&#8249;</button>
                    <span> {{ data.sex === 0 ? getFemaleHair() : getMaleHair() }}</span>
                    <button class="arrowRight" @click="incrementParameter2('hair')">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Couleur de la coupe
                    </div>
                    <div class="value">
                        {{ data.hairColor1 }} | {{ getColorCount() }}
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('hairColor1', 0, getColorCount(), 1)">&#8249;</button>
                    <span> {{ getHairColor(data.hairColor1) }}</span>
                    <button class="arrowRight" @click="incrementParameter('hairColor1', 0, getColorCount(), 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Couleur des pointes
                    </div>
                    <div class="value">
                        {{ data.hairColor2 }} | {{ getColorCount() }}
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('hairColor2', 0, getColorCount(), 1)">&#8249;</button>
                    <span> {{ getHairColor(data.hairColor2) }}</span>
                    <button class="arrowRight" @click="incrementParameter('hairColor2', 0, getColorCount(), 1)">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Style des sourcils
                    </div>
                    <div class="value">
                        {{ currentEyebrow }} | {{ getEyebrowsCount() }}
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter2('eyebrows')">&#8249;</button>
                    <span> {{ getEyebrowNames() }}</span>
                    <button class="arrowRight" @click="incrementParameter2('eyebrows')">&#8250;</button>
                </div>
            </div>
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Couleur des sourcils
                    </div>
                    <div class="value">
                        {{ data.eyebrowsColor1 }} | {{ getColorCount() }}
                    </div>
                </div>
                <div class="controls">
                    <button class="arrowLeft" @click="decrementParameter('eyebrowsColor1', 0, getColorCount(), 1)">&#8249;</button>
                    <span> {{ getHairColor(data.eyebrowsColor1) }}</span>
                    <button class="arrowRight" @click="incrementParameter('eyebrowsColor1', 0, getColorCount(), 1)">&#8250;</button>
                </div>
            </div>
            <template v-if="data.sex !== 0">
                <div class="option">
                    <div class="labelContainer">
                        <div class="label">
                            Style de la barbe
                        </div>
                        <div class="value">
                            {{ currentFacialHair }} | {{ getFacialCount() }}
                        </div>
                    </div>
                    <div class="controls">
                        <button class="arrowLeft" @click="decrementParameter2('facialHair')">&#8249;</button>
                        <span> {{ getFacialHair() }}</span>
                        <button class="arrowRight" @click="incrementParameter2('facialHair')">&#8250;</button>
                    </div>
                </div>
                <div class="option">
                    <div class="labelContainer">
                        <div class="label">
                            Opacité de la barbe
                        </div>
                        <div class="value">
                            {{ data.facialHairOpacity.toFixed(1) }} | {{ 1.0 }}
                        </div>
                    </div>
                    <div class="controls">
                        <button class="arrowLeft" @click="decrementParameter('facialHairOpacity', 0, 1, 0.1)">&#8249;</button>
                        <span> {{ data.facialHairOpacity.toFixed(1) }} </span>
                        <button class="arrowRight" @click="incrementParameter('facialHairOpacity', 0, 1, 0.1)">&#8250;</button>
                    </div>
                </div>
                <div class="option">
                    <div class="labelContainer">
                        <div class="label">
                            Couleur de la barbe
                        </div>
                        <div class="value">
                            {{ data.facialHairColor1 }} | {{ getColorCount() }}
                        </div>
                    </div>
                    <div class="controls">
                        <button class="arrowLeft" @click="decrementParameter('facialHairColor1', 0, getColorCount(), 1)">&#8249;</button>
                        <span>{{ getHairColor(data.facialHairColor1) }}</span>
                        <button class="arrowRight" @click="incrementParameter('facialHairColor1', 0, getColorCount(), 1)">&#8250;</button>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['data'],
    computed: {
        ...mapState('charactercreator', [
            'maleHair',
            'femaleHair',
            'eyebrows',
            'facialHair',
            'hairColors',
            'overlayColors'
        ])
    },
    data () {
        return {
            currentMaleHair: 0,
            currentFemaleHair: 0,
            currentEyebrow: 0,
            currentFacialHair: 0
        }
    },
    methods: {
        getHairCount () {
            if (this.data.sex === 0) {
                return this.femaleHair.length - 1
            }

            return this.maleHair.length - 1
        },
        getColorCount () {
            return this.hairColors.length - 1
        },
        getFacialCount () {
            return this.facialHair.length - 1
        },
        getEyebrowsCount () {
            return this.eyebrows.length - 1
        },
        setParameter (parameter, value) {
            this.data[parameter] = value
            this.$emit('update-character')
        },
        decrementParameter (parameter, min, max, incrementValue) {
            this.data[parameter] -= incrementValue

            if (this.data[parameter] < min) {
                this.data[parameter] = max
            }

            this.$emit('update-character')
        },
        incrementParameter (parameter, min, max, incrementValue) {
            this.data[parameter] += incrementValue

            if (this.data[parameter] > max) {
                this.data[parameter] = min
            }

            this.$emit('update-character')
        },
        decrementParameter2 (parameter) {
            if (parameter === 'hair') {
                (this.data.sex === 0) ? this.currentFemaleHair-- : this.currentMaleHair--

                if ((this.data.sex === 0) ? this.currentFemaleHair < 0 : this.currentMaleHair < 0) {
                    (this.data.sex === 0) ? this.currentFemaleHair = this.getHairCount() : this.currentMaleHair = this.getHairCount()
                }

                this.data.hair = (this.data.sex === 0) ? this.femaleHair[this.currentFemaleHair].id : this.maleHair[this.currentMaleHair].id
            } else if (parameter === 'eyebrows') {
                this.currentEyebrow--

                if (this.currentEyebrow < 0) {
                    this.currentEyebrow = this.getEyebrowsCount()
                }

                this.data.eyebrows = this.eyebrows[this.currentEyebrow].id
            } else if (parameter === 'facialHair') {
                this.currentFacialHair--

                if (this.currentFacialHair < 0) {
                    this.currentFacialHair = this.getFacialCount()
                }

                this.data.facialHair = this.facialHair[this.currentFacialHair].id
            }

            this.$emit('update-character')
        },
        incrementParameter2 (parameter) {
            if (parameter === 'hair') {
                (this.data.sex === 0) ? this.currentFemaleHair++ : this.currentMaleHair++

                if ((this.data.sex === 0) ? this.currentFemaleHair > this.getHairCount() : this.currentMaleHair > this.getHairCount()) {
                    (this.data.sex === 0) ? this.currentFemaleHair = 0 : this.currentMaleHair = 0
                }

                this.data.hair = (this.data.sex === 0) ? this.femaleHair[this.currentFemaleHair].id : this.maleHair[this.currentMaleHair].id
            } else if (parameter === 'eyebrows') {
                this.currentEyebrow++

                if (this.currentEyebrow > this.getEyebrowsCount()) {
                    this.currentEyebrow = 0
                }

                this.data.eyebrows = this.eyebrows[this.currentEyebrow].id
            } else if (parameter === 'facialHair') {
                this.currentFacialHair++

                if (this.currentFacialHair > this.getFacialCount()) {
                    this.currentFacialHair = 0
                }

                this.data.facialHair = this.facialHair[this.currentFacialHair].id
            }

            this.$emit('update-character')
        },
        handleChange (e, parameter, index) {
            const value = parseFloat(e.target.value)
            this.data.colorOverlays[index][parameter] = value
            this.$emit('update-character')
        },
        getMaleHair () {
            return this.maleHair[this.currentMaleHair].name
        },
        getFemaleHair () {
            return this.femaleHair[this.currentFemaleHair].name
        },
        getHairColor (i) {
            return this.hairColors[i]
        },
        getFacialHair () {
            return this.facialHair[this.currentFacialHair].name
        },
        getOverlayColors (i) {
            return this.overlayColors[i]
        },
        getEyebrowNames () {
            return this.eyebrows[this.currentEyebrow].name
        }
    },
    mounted () {
        this.currentMaleHair = this.data.hair
        this.currentFemaleHair = this.data.hair
        this.currentFacialHair = this.data.facialHair
        this.currentEyebrow = this.data.eyebrows
    }
}
</script>

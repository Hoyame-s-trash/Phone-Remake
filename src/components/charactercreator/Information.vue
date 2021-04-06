<template>
    <div>
        <div class="options">
            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Prénom
                    </div>
                    <div class="value">
                        {{ data.firstName }}
                    </div>
                </div>

                <input type="text" v-model="data.firstName" @input="e => handleChange(e, 'firstName')" class="input_text" />
            </div>

            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Nom
                    </div>
                    <div class="value">
                        {{ data.lastName }}
                    </div>
                </div>

                <input type="text" v-model="data.lastName" @input="e => handleChange(e, 'lastName')" class="input_text" />
            </div>

            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Age
                    </div>
                    <div class="value">
                        {{ data.age }}
                    </div>
                </div>

                <input type="number" v-model.number="data.age" @input="e => handleChange(e, 'age')" class="input_text" />
            </div>

            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Taille (en cm)
                    </div>
                    <div class="value">
                        {{ data.height }}
                    </div>
                </div>

                <input type="number" v-model.number="data.height" @input="e => handleChange(e, 'height')" class="input_text" />
            </div>

            <div class="option">
                <div class="labelContainer">
                    <div class="label">
                        Poid (en kg)
                    </div>
                    <div class="value">
                        {{ data.weight }}
                    </div>
                </div>

                <input type="number" v-model.number="data.weight" @input="e => handleChange(e, 'weight')" class="input_text" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        handleChange(e, parameter) {
            this.data[parameter] = e.target.value
            this.$emit('update-character')
        }
    }
}
</script>

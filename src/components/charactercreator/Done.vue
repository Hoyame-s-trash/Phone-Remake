<template>
    <div>
        <div class="options">
            <p>Êtes-vous sur de vouloir sauvegarder ce personnage?</p>

            <div class="error" v-if="error !== undefined">
                {{ error }}
            </div>

            <div class="option">
                <button class="full" @click="saveCharacter" style="margin-bottom: 12px">Confirmer</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'clothes'],
    data () {
        return {
            error: undefined
        }
    },
    methods: {
        saveCharacter() {
            this.error = undefined
            if (this.data.sex === 0) {
                this.data.facialHair = 29;
                this.data.facialHairColor1 = 0;
            }

            if (
                this.data.firstName === undefined || this.data.firstName === '' &&
                this.data.lastName === undefined || this.data.lastName === ''
            ) {
                return this.error = "Votre personnage doit avoir un nom et un prénom"
            }

            this.$eventManager.callGameEvent2({ type: "server", name: "accounts:CreateCharacter" }, this.data, this.clothes)
        }
    }
}
</script>

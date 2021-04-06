const state = {
    faceNames: [],
    maleHair: [],
    femaleHair: [],
    eyebrows: [],
    facialHair: [],
    hairColors: [],
    overlayColors: [],
    opacityOverlays: [],
    colorOverlays: [],
    structureLabels: [],
    maleHairOverlays: {},
    femaleHairOverlays: {},
    maxTorso: 0,
    maxTorsoTextures: 0,
    maxTorso2: 0,
    maxTorso2Textures: 0,
    maxHands: 0,
    maxPants: 0,
    maxPantsTextures: 0,
    maxShoes: 0,
    maxShoesTextures: 0
}

const getters = {

}

const actions = {
    setFaceNames: ({ commit }, payload) => {
        commit('appendFaceNames', payload)
    },
    setMaleHair: ({ commit }, payload) => {
        commit('appendMaleHair', payload)
    },
    setFemaleHair: ({ commit }, payload) => {
        commit('appendFemaleHair', payload)
    },
    setEyebrows: ({ commit }, payload) => {
        commit('appendEyebrows', payload)
    },
    setFacialHair: ({ commit }, payload) => {
        commit('appendFacialHair', payload)
    },
    setHairColors: ({ commit }, payload) => {
        commit('appendHairColors', payload)
    },
    setOverlayColors: ({ commit }, payload) => {
        commit('appendOverlayColors', payload)
    },
    setOpacityOverlays: ({ commit }, payload) => {
        commit('appendOpacityOverlays', payload)
    },
    setColorOverlays: ({ commit }, payload) => {
        commit('appendColorOverlays', payload)
    },
    setStructureLabels: ({ commit }, payload) => {
        commit('appendStructureLabels', payload)
    },
    setMaleHairOverlays: ({ commit }, payload) => {
        commit('appendMaleHairOverlays', payload)
    },
    setFemaleHairOverlays: ({ commit }, payload) => {
        commit('appendFemaleHairOverlays', payload)
    },
    setMaxTorso: ({ commit }, payload) => {
        commit('appendMaxTorso', payload)
    },
    setMaxTorsoTextures: ({ commit }, payload) => {
        commit('appendMaxTorsoTextures', payload)
    },
    setMaxTorso2: ({ commit }, payload) => {
        commit('appendMaxTorso2', payload)
    },
    setMaxTorso2Textures: ({ commit }, payload) => {
        commit('appendMaxTorso2Textures', payload)
    },
    setMaxHands: ({ commit }, payload) => {
        commit('appendMaxHands', payload)
    },
    setMaxPants: ({ commit }, payload) => {
        commit('appendMaxPants', payload)
    },
    setMaxPantsTextures: ({ commit }, payload) => {
        commit('appendMaxPantsTextures', payload)
    },
    setMaxShoes: ({ commit }, payload) => {
        commit('appendMaxShoes', payload)
    },
    setMaxShoesTextures: ({ commit }, payload) => {
        commit('appendMaxShoesTextures', payload)
    }
}

const mutations = {
    appendFaceNames: (state, payload) => {
        state.faceNames = payload
    },
    appendMaleHair: (state, payload) => {
        state.maleHair = payload
    },
    appendFemaleHair: (state, payload) => {
        state.femaleHair = payload
    },
    appendEyebrows: (state, payload) => {
        state.eyebrows = payload
    },
    appendFacialHair: (state, payload) => {
        state.facialHair = payload
    },
    appendHairColors: (state, payload) => {
        state.hairColors = payload
    },
    appendOverlayColors: (state, payload) => {
        state.overlayColors = payload
    },
    appendOpacityOverlays: (state, payload) => {
        state.opacityOverlays = payload
    },
    appendColorOverlays: (state, payload) => {
        state.colorOverlays = payload
    },
    appendStructureLabels: (state, payload) => {
        state.structureLabels = payload
    },
    appendMaleHairOverlays: (state, payload) => {
        state.maleHairOverlays = payload
    },
    appendFemaleHairOverlays: (state, payload) => {
        state.femaleHairOverlays = payload
    },
    appendMaxTorso: (state, payload) => {
        state.maxTorso = payload
    },
    appendMaxTorsoTextures: (state, payload) => {
        state.maxTorsoTextures = payload
    },
    appendMaxTorso2: (state, payload) => {
        state.maxTorso2 = payload
    },
    appendMaxTorso2Textures: (state, payload) => {
        state.maxTorso2Textures = payload
    },
    appendMaxHands: (state, payload) => {
        state.maxHands = payload
    },
    appendMaxPants: (state, payload) => {
        state.maxPants = payload
    },
    appendMaxPantsTextures: (state, payload) => {
        state.maxPantsTextures = payload
    },
    appendMaxShoes: (state, payload) => {
        state.maxShoes = payload
    },
    appendMaxShoesTextures: (state, payload) => {
        state.maxShoesTextures = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
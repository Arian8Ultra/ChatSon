import create from "zustand";

const useAbilityStore = create((set, get) => ({
    abilities: ['edit'],
    addAbility: (string) => set({ abilities: abilities.push(string) }),
    addAbilityArray: (array) => set({ abilities: abilities.concat(array) }),
}));

export default useAbilityStore;

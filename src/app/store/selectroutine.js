import {create} from 'zustand';

const useStore = create((set) => ({
  bodyPartsOptions: [],
  objectivesOptions: [],
  selectedValues: {
    bodyPart: null,
    objective: null,
  },
  setBodyPartsOptions: (options) => set({ bodyPartsOptions: options }),
  setObjectivesOptions: (options) => set({ objectivesOptions: options }),
  setSelectedValues: (values) => set({ selectedValues: values }),
}));

export default useStore;
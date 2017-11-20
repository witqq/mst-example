import {types} from "mobx-state-tree";

export const CntStore = types.model({
  count: types.optional(types.number, 0)
}).actions(self => {
  return {
    increment: () => self.count++
  }
});

export type CntStore = typeof CntStore.Type;
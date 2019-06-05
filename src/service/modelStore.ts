import { ModelStore } from 'exredux';

export const modelStore = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: []
});

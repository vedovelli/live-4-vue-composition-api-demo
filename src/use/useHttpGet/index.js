import axios from "axios";
import { toRefs, reactive } from "vue";

export const useHttpGet = endpoint => {
  const state = reactive({
    data: {},
    loading: true,
    error: null
  });

  axios
    .get(endpoint)
    .then(({ data }) => {
      state.data = data;
    })
    .catch(({ response: { data } }) => {
      state.error = data;
    })
    .finally(() => {
      state.loading = false;
    });

  return toRefs(state);
};

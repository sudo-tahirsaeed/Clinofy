<template>
  <div class="card flex justify-content-center">
    <Dialog
      style=""
      v-model:visible="statesx"
      modal
      header="  "
      :style="{ width: '25rem' }"
    >
      <div
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <h2
          style="
            color: #de294c;
            text-align: center;
            margin-bottom: 10px;
            margin-top: 10px;
          "
        >
          Sorry
        </h2>
        <p style="text-align: center; margin: 13px; margin-top: 10px">
          {{ msgx }}
        </p>
      </div>
      <div class="flex justify-content-center gap-3 mb-3">
        <Button
          style="padding: 7px; background-color: #de294c; border: none"
          type="button"
          label="Close"
          @click="closeDialog()"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
</script>
<script>
import { defineComponent } from "vue"; // Import defineComponent

export default defineComponent({
  emits: ["updateDB"],
  props: {
    states: Boolean, // Define the message prop
    msg: String,
  },
  watch: {
    states: function (newVal) {
      // watch it
      this.statesx = newVal;
    },
    msg: function (newVal) {
      // watch it
      this.msgx = newVal;
    },
  },
  setup() {
    // Import the components and return them along with the message prop
    return {
      Dialog,
      Button,
    };
  },

  methods: {
    closeDialog() {
      this.$emit("updateDB");
    },
  },
  data(props) {
    console.log(props.states);
    return {
      statesx: props.states,
      msgx: props.msg,
    };
  },
});
</script>

<style scoped>
.card flex justify-content-center {
  padding: 10px !important;
  background-color: black;
}
</style>

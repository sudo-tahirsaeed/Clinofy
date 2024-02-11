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
        <h1
          style="
            color: #de294c;
            text-align: center;
            margin-bottom: 5px;
            margin-top: 5px;
            font-size: 22px;
          "
        >
          Remarks for Patient
        </h1>
        <div style="padding: 10px; margin-left: 10px">
          <h2
            style="
              color: #000000;
              text-align: left;
              margin-bottom: 5px;
              margin-top: 5px;
              font-size: 14px;
            "
          >
            Remarks
          </h2>
          <Textarea
            style="padding: 5px"
            v-model="value"
            autoResize
            rows="10"
            cols="40"
          />
        </div>
      </div>
      <div class="flex justify-content-center gap-3 mb-3">
        <Button
          style="padding: 7px; background-color: #de294c; border: none"
          type="button"
          label="Mark as Done"
          @click="closeDialog()"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
</script>
<script>
import { defineComponent, ref } from "vue"; // Import defineComponent

export default defineComponent({
  emits: ["doneRemarks"],
  props: {
    states: Boolean, // Define the message prop
  },
  watch: {
    states: function (newVal) {
      // watch it
      this.statesx = newVal;
    },
  },
  setup() {
    // Import the components and return them along with the message prop
    return {
      Dialog,
      Button,
      Textarea,
    };
  },

  methods: {
    closeDialog() {
      this.$emit("doneRemarks", this.value);
    },
  },
  data(props) {
    var value = ref("");
    console.log(props.states);
    return {
      statesx: props.states,
      value,
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

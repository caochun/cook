<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['recipe'],
  emits: ['confirm'],
})
</script>

<template>
  <div class="modal-container">
    <div class="modal-body">
      <h2>{{ recipe }}</h2>
      <div class="modal-action">
        <button class="modal-button" @click="$emit('confirm')">
          OK
        </button>
      </div>
    </div>
  </div>
</template>

  <style>
    .modal-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #cececeb5;
    }
    .modal-body {
      background-color: #fff;
      border: 2px solid #74a2cf;
      border-radius: 10px;
      text-align: center;
      padding: 20px 40px;
      min-width: 250px;
      display: flex;
      flex-direction: column;
    }
    .modal-action {
      display: flex;
      flex-direction: row;
      gap: 40px;
      justify-content: center;
    }
    .modal-button {
      cursor: pointer;
      height: 30px;
      padding: 0 25px;
      border: 2px solid #74a2cf;
      border-radius: 5px;
      background-color: #80b2e4;
      color: #fff;
    }
    .modal-close {
      cursor: pointer;
      position: relative;
      align-self: end;
      right: -33px;
      top: -17px;
    }
  </style>

<template lang="pug">
.video-track
    input(
        type="range", 
        min="0", 
        max="100", 
        step="1", 
        :value="percentage.toFixed(1)", 
        @input="onInput"
        )
</template>
  
  <script>
  export default {
    name: "VideoTrack",
    props: {
      percentage: { type: Number, required: true },
    },
    methods: {
      onInput(e) {
        this.$emit("seek", e.target.value);
      },
    },
  };
  </script>
  
  <style>
  input[type="range"] {
    position: relative;
    height: 5px;
    top: -1px;
    overflow: hidden;
    width: 100%;
    -webkit-appearance: none;
    background-color: #FF5924;
    border-radius: 5px;
  }
  
  input[type="range"]:focus {
    outline: none;
  }
  
  input[type="range"]::-webkit-slider-runnable-track {
    height: 5px;
    -webkit-appearance: none;
    color: #333;
    margin-top: -1px;
  }

  input[type="range"]::-moz-range-track {
    height: 5px;
    color: #333;
    margin-top: -1px;
  }

  input[type="range"]::-ms-track {
    height: 5px;
    color: #333;
    margin-top: -1px;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    width: 8px;
    -webkit-appearance: none;
    height: 8px;
    cursor: pointer;
    background: #333;
    box-shadow: -700px 0 0 700px #333;
  }

  input[type="range"]::-moz-range-thumb {
    width: 10px;
    height: 5px;
    cursor: pointer;
    background: #333;
    box-shadow: -700px 0 0 700px #333;
    border: 8px solid #333;
  }

  input[type="range"]::-ms-thumb {
    width: 8px;
    height: 8px;
    cursor: pointer;
    background: #333;
    box-shadow: -700px 0 0 700px #333;
  }

  
  </style>
  
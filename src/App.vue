<template>
<div>
  <tempo />
  <shifthead />
  <chooseyourride />
  <safety />
  <howitworks />
  <contactinfo />
  <shiftfooter />
</div>
</template>

<script>
import shifthead from './components/shifthead';
import chooseyourride from './components/chooseyourride';
import safety from './components/safety';
import howitworks from './components/howitworks';
import contactinfo from './components/contactinfo';
import shiftfooter from './components/shiftfooter';
import Tempo from './components/tempo';

export default {
  name: 'App',

  components: {
    shifthead,
    chooseyourride,
    safety,
    howitworks,
    contactinfo,
    shiftfooter,
    Tempo
  },
};
</script>

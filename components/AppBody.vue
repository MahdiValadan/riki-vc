<template>
  <div class="app-body">
    <!-- your page content here -->
    <slot></slot>
  </div>
</template>
  
<style>
.app-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F2F2F2;

  padding-top: 35px;
  padding-left: 115px;
  padding-right: 115px;
  padding-bottom: 60px;
}
</style>
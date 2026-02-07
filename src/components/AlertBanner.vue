<template>
  <div class="alert-banner">
    <p>{{ $t('alert.scheduleNotice1') }}</p>
    <p>{{ $t('alert.scheduleNotice2') }}</p>
    <p>{{ $t('alert.scheduleNotice3') }}</p>
  </div>
</template>

<style scoped>
.alert-banner {
  background-color: #fef3c7;
  border-bottom: 2px solid #f59e0b;
  color: #92400e;
  text-align: center;
  padding: 0.75rem 2rem;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 99;
}

.alert-banner p {
  margin: 0.25rem 0;
}

@media (max-width: 768px) {
  .alert-banner {
    top: 62px;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
}
</style>

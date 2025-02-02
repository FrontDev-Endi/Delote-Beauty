<template>
  <div class="content">
    <h1 class="title">Contacts</h1>
    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330086.4953343978!2d29.765053081649302!3d59.94034692300954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a6f9d%3A0xfa47ca5a4725c9e4!2sSaint%20Petersburg%2C%20St%20Petersburg!5e1!3m2!1sen!2sru!4v1738344465976!5m2!1sen!2sru"
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="footer">
      <div class="contact">
        <h1>Contacts</h1>
        <p>+0 (000)000-00-00</p>
        <p>+0 (000)000-00-00</p>
      </div>
      <div class="operating-mode">
        <h1>Operating mode</h1>
        <p>Monday - Friday</p>
        <p>10:00 - 21:00</p>
      </div>
      <div class="contact">
        <h1>Contacts</h1>
        <p>+0 (000)000-00-00</p>
        <p>+0 (000)000-00-00</p>
      </div>
      <div class="operating-mode">
        <h1>Operating mode</h1>
        <p>Monday - Friday</p>
        <p>10:00 - 21:00</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: 700;
    margin-top: calc(var(--index) * 2.7);
    margin-bottom: calc(var(--index) * 2.7);
    font-size: calc(var(--index) * 1.7);
    line-height: 58px;
    text-align: center;
    color: #fff;
  }
  .map {
    width: calc(var(--index) * 40);
    height: calc(var(--index) * 20);
    margin-left: auto;
    margin-right: auto;
  }
  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: calc(var(--index) * 2.7);
    gap: calc(var(--index) * 6.5);
    .contact {
      display: flex;
      flex-direction: column;
      gap: 15px;
      gap: calc(var(--index) * 0.3);
      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #fff;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
      }
    }
    .operating-mode {
      display: flex;
      flex-direction: column;
      gap: 15px;
      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #fff;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
      }
    }
  }
}
@media (max-width: 650px) {
  .content {
    .map {
      width: calc(var(--index) * 30);
      height: calc(var(--index) * 17);
    }
  }
}

@media (max-width: 425px) {
  .content {
    .map {
      width: calc(var(--index) * 26);
      height: calc(var(--index) * 20);
    }
  }
}
</style>

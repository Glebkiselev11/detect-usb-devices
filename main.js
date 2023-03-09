const { app } = require('electron');
const systeminformation = require('systeminformation')

const usb = require('usb');

app.whenReady().then(async () => {
  const devices = await systeminformation.usb();
  const updated = devices.map(({ id, name, type, vendor }) => ({
    id,
    name,
    type: type !== '' ? type : undefined,
    vendor,
    detectionDate: new Date()
  }));

  console.log(updated);


  const customWebUSB = new usb.WebUSB({
    // Bypass cheking for authorised devices
    allowAllDevices: true
  });

  customWebUSB.getDevices().then(devices => {
    console.log('---------------usb---------------')

    devices.forEach((w) => {
      console.log(w.device.deviceAddress);
    })
  });
});


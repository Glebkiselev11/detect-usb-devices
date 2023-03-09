const { app } = require('electron');
const systeminformation = require('systeminformation')
const usb = require('usb');


app.whenReady().then(() => {
  systeminformation.usb().then(data => {
    console.log('--------------si---------------')
    console.log(data)
  });



  const customWebUSB = new usb.WebUSB({
    // Bypass cheking for authorised devices
    allowAllDevices: true
  });

  customWebUSB.getDevices().then(devices => {
    console.log('---------------usb---------------')

    devices.forEach((w) => {

      console.log(w);
      // console.log(w.productName);
    })
  });
});


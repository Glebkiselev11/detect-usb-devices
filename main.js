const { app } = require('electron');
const systeminformation = require('systeminformation')


// const customWebUSB = new usb.WebUSB({
//   // Bypass cheking for authorised devices
//   allowAllDevices: true
// });

// customWebUSB.getDevices().then(devices => {
//   // console.log();


//   devices.forEach((w) => {

//     console.log(w);
//     console.log(w.productName);
//   })
// });


// const devices = usb.getDeviceList();


// console.log(usb.usb)

// Iterate over each device and check if it is a keyboard or a mouse
// devices.forEach(function(device) {
//   const interfaces = device.interfaces;

//   if (interfaces) {
//     interfaces.forEach(function(iface) {
//       console.log(iface.descriptor.bInterfaceProtocol)

//       if (iface.descriptor.bInterfaceClass === usb.usb.LIBUSB_CLASS_HID) {
//         if (iface.descriptor.bInterfaceProtocol === 1) {
//           console.log('Keyboard:', device.productId);
//           // usb.webusb.requestDevice({
//           //   filters: [{}]
//           // })

          
//         } else if (iface.descriptor.bInterfaceSubClass === usb.usb.LIBUSB_CLASS_HID_MOUSE) {
//           console.log('Mouse:', device.deviceDescriptor.iProduct);
//         }
//       }
//     });
//   }

// })

app.whenReady().then(() => {
  systeminformation.usb().then(data => console.log(data));
});


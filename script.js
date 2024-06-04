const checkPermission = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No support for service worker!');
  }
  if (!('Notification' in window)) {
    throw new Error('No support fro notification API');
  }
};

const registerSW = async () => {
  const registration = await navigator.serviceWorker.register('sw.js');
  return registration;
};

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission !== 'granted') {
    throw new Error('Notification permission not granted');
  } else {
    new Notification('Trying first notification ');
  }
};

const main = async () => {
  checkPermission();
  const reg = await registerSW();
  reg.showNotification('here go your message');
};
main();

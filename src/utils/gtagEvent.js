export default function (event = 'click', data) {
  window.gtag('event', event, { ...data });
}

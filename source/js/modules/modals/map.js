export function initMap(id) {
  const {ymaps} = window;
  if (typeof ymaps === 'undefined') {
    return;
  }
  ymaps.ready(() => {

    let myMap = new ymaps.Map(id, {
      center: [59.938635, 30.323118],
      zoom: 16,
      controls: [],

    });
    let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {

      iconLayout: 'default#image',

      iconImageHref: '../img/sprite/marker.svg',

      iconSize: [18, 22],

      iconImageOffset: [-28, 55],
    });
    myMap.geoObjects
        .add(myPlacemark);
  });
}

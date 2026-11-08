import { useEffect, useRef } from 'react';
import * as leaf from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Offer } from '../../mocks/offers';

type MapProps = {
  city: Offer['city'];
  offers: Offer[];
};

const pinIcon = leaf.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({ city, offers }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    const map = leaf.map(mapRef.current).setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom
    );

    leaf.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors',
      }
    ).addTo(map);

    offers.forEach((offer) => {
      leaf.marker(
        [offer.location.latitude, offer.location.longitude],
        { icon: pinIcon }
      ).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [city, offers]);

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
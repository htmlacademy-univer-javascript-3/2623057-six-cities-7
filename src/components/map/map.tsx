import { useEffect, useRef } from 'react';
import * as leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Offer } from '../../mocks/offers';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import useMap from './use-map';

type MapProps = {
  city: Offer['city'];
  offers: Offer[];
  activeOfferId: string | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({ city, offers, activeOfferId }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map === null) {
      return;
    }

    const markersLayer = leaflet.layerGroup().addTo(map);

    offers.forEach((offer) => {
      leaflet.marker(
        [offer.location.latitude, offer.location.longitude],
        {
          icon: offer.id === activeOfferId
            ? currentCustomIcon
            : defaultCustomIcon,
        }
      ).addTo(markersLayer);
    });

    return () => {
      markersLayer.remove();
    };
  }, [activeOfferId, map, offers]);

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;

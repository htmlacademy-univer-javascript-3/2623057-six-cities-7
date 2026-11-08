import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import * as leaflet from 'leaflet';
import type { Offer } from '../../mocks/offers';

function useMap(
  mapRef: RefObject<HTMLElement>,
  city: Offer['city']
): leaflet.Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    const leafletMap = leaflet.map(mapRef.current).setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom
    );

    leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors',
      }
    ).addTo(leafletMap);

    setMap(leafletMap);

    return () => {
      leafletMap.remove();
    };
  }, [city.location.latitude, city.location.longitude, city.location.zoom, mapRef]);

  return map;
}

export default useMap;

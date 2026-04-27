import { useEffect, useRef, useState } from 'react';

const GoogleMap = ({ 
  center = { lat: 18.566255, lng: 73.87574 }, 
  zoom = 140, 
  mapId = "AIzaSyD7cUEhj8htSDek0QDT3yA3ig1qTumn3bw",
  height = "2**************************00px",
  className = ""
}) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Google Maps API is already loaded
    const checkGoogleMaps = () => {
      if (window.google && window.google.maps) {
        return true;
      }
      // Check for gmp-map web component
      if (window.gmpMapElement) {
        return true;
      }
      return false;
    };

    // If Google Maps is not loaded, wait for it
    if (!checkGoogleMaps()) {
      const checkInterval = setInterval(() => {
        if (checkGoogleMaps()) {
          clearInterval(checkInterval);
          setMapLoaded(true);
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        if (!checkGoogleMaps()) {
          setError('Google Maps failed to load');
        }
      }, 10000);

      return () => clearInterval(checkInterval);
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;
    if (!window.google || !window.google.maps) return;

    // Create the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
      mapId: mapId,
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      gestureHandling: 'greedy',
    });

    // Add a marker
    new window.google.maps.Marker({
      position: center,
      map: map,
      title: 'Location',
    });

    return () => {
      // Cleanup
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [mapLoaded, center, zoom, mapId]);

  // If Google Maps API is not loaded, show loading or use fallback
  if (!mapLoaded) {
    return (
      <div 
        style={{ height }} 
        className={`rounded-lg bg-gray-100 flex items-center justify-center ${className}`}
      >
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        style={{ height }} 
        className={`rounded-lg bg-gray-100 flex items-center justify-center ${className}`}
      >
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      style={{ height }} 
      className={`rounded-lg ${className}`}
    />
  );
};

export default GoogleMap;
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface SurfSpot {
  name: string;
  lat: number;
  lng: number;
  region: string;
}

// Popular surf spots across the US
const SURF_SPOTS: SurfSpot[] = [
  // Texas
  { name: "Surfside", lat: 28.9525, lng: -95.2938, region: "Texas" },
  { name: "South Padre Island", lat: 26.1118, lng: -97.1681, region: "Texas" },
  { name: "Port Aransas", lat: 27.8339, lng: -97.0611, region: "Texas" },
  // California
  { name: "Blacks Beach", lat: 32.8892, lng: -117.2530, region: "California" },
  { name: "Huntington Beach", lat: 33.6603, lng: -117.9992, region: "California" },
  { name: "Malibu", lat: 34.0259, lng: -118.7798, region: "California" },
  { name: "Trestles", lat: 33.3817, lng: -117.5883, region: "California" },
  { name: "Rincon", lat: 34.3742, lng: -119.4760, region: "California" },
  { name: "Steamer Lane", lat: 36.9514, lng: -122.0264, region: "California" },
  { name: "Ocean Beach SF", lat: 37.7594, lng: -122.5107, region: "California" },
  { name: "Mavericks", lat: 37.4953, lng: -122.4961, region: "California" },
  // Florida
  { name: "Cocoa Beach", lat: 28.3200, lng: -80.6076, region: "Florida" },
  { name: "Sebastian Inlet", lat: 27.8525, lng: -80.4498, region: "Florida" },
  { name: "New Smyrna Beach", lat: 29.0258, lng: -80.9270, region: "Florida" },
  { name: "Jacksonville Beach", lat: 30.2947, lng: -81.3931, region: "Florida" },
  // East Coast
  { name: "Outer Banks", lat: 35.9582, lng: -75.6201, region: "North Carolina" },
  { name: "Virginia Beach", lat: 36.8529, lng: -75.9780, region: "Virginia" },
  { name: "Ocean City MD", lat: 38.3365, lng: -75.0849, region: "Maryland" },
  { name: "Long Beach Island", lat: 39.6579, lng: -74.1910, region: "New Jersey" },
  { name: "Montauk", lat: 41.0360, lng: -71.9545, region: "New York" },
  { name: "Narragansett", lat: 41.4301, lng: -71.4495, region: "Rhode Island" },
  // Hawaii
  { name: "Pipeline", lat: 21.6650, lng: -158.0539, region: "Hawaii" },
  { name: "Waikiki", lat: 21.2760, lng: -157.8270, region: "Hawaii" },
  { name: "Sunset Beach", lat: 21.6780, lng: -158.0420, region: "Hawaii" },
  // Pacific Northwest
  { name: "Westport", lat: 46.8901, lng: -124.1045, region: "Washington" },
  { name: "Cannon Beach", lat: 45.8918, lng: -123.9615, region: "Oregon" },
  // Default fallback
  { name: "your local break", lat: 0, lng: 0, region: "Unknown" },
];

interface LocationContextType {
  spot: SurfSpot;
  isLoading: boolean;
  hasPermission: boolean | null;
  requestLocation: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function findNearestSpot(lat: number, lng: number): SurfSpot {
  let nearest = SURF_SPOTS[0];
  let minDistance = Infinity;

  for (const spot of SURF_SPOTS) {
    if (spot.name === "your local break") continue;
    const distance = calculateDistance(lat, lng, spot.lat, spot.lng);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = spot;
    }
  }

  return nearest;
}

// Default spot before location is determined (Blacks Beach, San Diego)
const DEFAULT_SPOT = SURF_SPOTS.find(s => s.name === "Blacks Beach") || SURF_SPOTS[0];

export function LocationProvider({ children }: { children: ReactNode }) {
  const [spot, setSpot] = useState<SurfSpot>(DEFAULT_SPOT);
  const [isLoading, setIsLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nearest = findNearestSpot(position.coords.latitude, position.coords.longitude);
        setSpot(nearest);
        setHasPermission(true);
        setIsLoading(false);
      },
      () => {
        setHasPermission(false);
        setIsLoading(false);
      },
      { timeout: 10000, maximumAge: 300000 }
    );
  };

  useEffect(() => {
    // Auto-request location on mount
    requestLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ spot, isLoading, hasPermission, requestLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}

export function useSpotName() {
  const { spot } = useLocation();
  return spot.name;
}

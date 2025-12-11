import { useState } from "react";
import { MapPin, Navigation, Search, Check, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Select,
  Badge,
} from "../components/ui";

interface SpotOption {
  id: string;
  name: string;
  region: string;
  buoyId: string;
  buoyName: string;
  lat: number;
  lon: number;
}

const popularSpots: SpotOption[] = [
  {
    id: "1",
    name: "Surfside Beach",
    region: "Texas Gulf Coast",
    buoyId: "42035",
    buoyName: "Galveston",
    lat: 29.0469,
    lon: -95.2882,
  },
  {
    id: "2",
    name: "Galveston (61st St)",
    region: "Texas Gulf Coast",
    buoyId: "42035",
    buoyName: "Galveston",
    lat: 29.2874,
    lon: -94.8031,
  },
  {
    id: "3",
    name: "South Padre Island",
    region: "Texas Gulf Coast",
    buoyId: "42020",
    buoyName: "South Padre",
    lat: 26.1118,
    lon: -97.1681,
  },
  {
    id: "4",
    name: "Bob Hall Pier",
    region: "Texas Gulf Coast",
    buoyId: "42020",
    buoyName: "Corpus Christi",
    lat: 27.5816,
    lon: -97.2185,
  },
];

const buoyOptions = [
  { value: "42035", label: "42035 - Galveston (22nm SE)" },
  { value: "42020", label: "42020 - Corpus Christi (50nm SE)" },
  { value: "42019", label: "42019 - Freeport (60nm S)" },
  { value: "42001", label: "42001 - Mid Gulf (180nm S)" },
];

export function SpotPage() {
  const [selectedSpot, setSelectedSpot] = useState<SpotOption | null>(
    popularSpots[0]
  );
  const [customMode, setCustomMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [customSpot, setCustomSpot] = useState({
    name: "",
    lat: "",
    lon: "",
    buoyId: "42035",
  });
  // Removed homeAddress - now in AccountPage

  const filteredSpots = popularSpots.filter(
    (spot) =>
      spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">My Spots</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
          Configure your home breaks and nearby buoy for accurate alerts.
        </p>
      </div>

      {/* Current Selection */}
      {selectedSpot && !customMode && (
        <Card className="mb-6 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold">{selectedSpot.name}</h3>
                    <Badge variant="success">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedSpot.region}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-2 break-all">
                    Buoy: {selectedSpot.buoyId} ({selectedSpot.buoyName}) •{" "}
                    {selectedSpot.lat.toFixed(4)}, {selectedSpot.lon.toFixed(4)}
                  </p>
                </div>
              </div>
              <a
                href={`https://www.ndbc.noaa.gov/station_page.php?station=${selectedSpot.buoyId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 shrink-0"
              >
                View Buoy <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mode Toggle */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={!customMode ? "default" : "outline"}
          onClick={() => setCustomMode(false)}
          size="sm"
          className="flex-1 sm:flex-none"
        >
          <MapPin className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Popular </span>Spots
        </Button>
        <Button
          variant={customMode ? "default" : "outline"}
          onClick={() => setCustomMode(true)}
          size="sm"
          className="flex-1 sm:flex-none"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Custom<span className="hidden sm:inline"> Location</span>
        </Button>
      </div>

      {!customMode ? (
        <>
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search spots..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Spots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSpots.map((spot) => (
              <Card
                key={spot.id}
                className={`cursor-pointer transition-all hover:border-zinc-600 ${
                  selectedSpot?.id === spot.id ? "border-primary" : ""
                }`}
                onClick={() => setSelectedSpot(spot)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold">{spot.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {spot.region}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mt-2">
                        Buoy: {spot.buoyId}
                      </p>
                    </div>
                    {selectedSpot?.id === spot.id && (
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        /* Custom Location Form */
        <Card>
          <CardHeader>
            <CardTitle>Custom Location</CardTitle>
            <CardDescription>
              Enter coordinates for any surf spot and assign a nearby buoy.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Spot Name
              </label>
              <Input
                placeholder="e.g., My Secret Spot"
                value={customSpot.name}
                onChange={(e) =>
                  setCustomSpot({ ...customSpot, name: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Latitude
                </label>
                <Input
                  placeholder="29.0469"
                  value={customSpot.lat}
                  onChange={(e) =>
                    setCustomSpot({ ...customSpot, lat: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Longitude
                </label>
                <Input
                  placeholder="-95.2882"
                  value={customSpot.lon}
                  onChange={(e) =>
                    setCustomSpot({ ...customSpot, lon: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Nearest Buoy
              </label>
              <Select
                options={buoyOptions}
                value={customSpot.buoyId}
                onChange={(v) => setCustomSpot({ ...customSpot, buoyId: v })}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Choose the buoy closest to your spot for accurate swell data.
              </p>
            </div>

            <Button className="mt-4">
              <MapPin className="w-4 h-4 mr-2" />
              Save Custom Spot
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Save */}
      <div className="mt-8 flex justify-end">
        <Button size="lg">Save Changes</Button>
      </div>
    </div>
  );
}

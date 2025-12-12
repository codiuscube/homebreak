# Home Break

The invisible surf check. No apps to check. No forecasts to analyze. Just texts from your surf buddy when it's actually worth the drive.

## Vision

Home Break is a lightweight, "invisible" surf alert system that runs in the background and texts you only when your spot is actually firing. It combines real data (NOAA buoys, Open-Meteo) with a personality engine to deliver alerts that feel like a text from a local buddy.

**The Trust Metric**: Users don't double-check Surfline after receiving a Home Break alert. They just grab their keys.

## Marketing Site Features

The marketing site is built with React + Vite + Tailwind CSS and includes:

### Location-Aware Personalization
- Automatically detects user's location via browser geolocation
- Finds the nearest surf spot from 25+ popular spots across the US
- All marketing content dynamically updates with the user's local spot name
- Default: Blacks Beach (San Diego) if location unavailable

### Smart Triggers Carousel
Interactive carousel showcasing the three alert types with hype-inducing surf photography and example text message bubbles.

### Coming Soon Mode
- On localhost: Full navigation enabled for development
- On production (Vercel/custom domain): Action buttons show "Coming Soon" modal

## How It Works

### Smart Triggers

| Trigger                   | Time                    | Purpose                                                                                               |
| ------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| **Night Before Hype**     | 8:00 PM (user timezone) | Checks tomorrow's forecast against your triggers. Get hyped or sleep in.                              |
| **Morning Reality Check** | 6:00 AM (user timezone) | Live buoy validation + real-time traffic estimates so you know exactly when to leave.                 |
| **Pop-Up Alert**          | Every 2 hours           | Catches wind switches or sudden pulse arrivals. Know exactly how long to drop everything and go.      |

### Anti-Spam Logic

The Pop-Up Alert runs frequently, so we prevent notification fatigue:

- **Cooldown Period**: If an alert is sent for a specific tier (e.g., "Good"), suppress further alerts for that spot for 6 hours
- **Tier Upgrades Only**: Cooldown is bypassed if conditions upgrade to a higher tier (e.g., "Good" → "Epic")

### Graceful Degradation

NOAA buoys go offline frequently. When that happens:

- System does not fail
- Alerts send based on weather model only
- AI message includes disclaimer: _"Buoy 42035 is offline, so we're flying blind on ground truth, but the models look solid."_

## Features

- **You Define the Vibe** - Dial in your perfect conditions. Set custom ranges for wave height, swell period, swell direction, wind speed, and more.
- **Multiple Spots, One App** - Monitor all your go-to breaks simultaneously with different triggers for each spot.
- **Your Surf Buddy** - Pick your vibe: Stoked Local (hyped buddy energy), Chill Surfer (laid back), Data Nerd (just the facts), or Hype Beast (maximum send).
- **No Spam, Only Signals** - Cross-references forecasts with real-time NOAA buoy data. Smart cooldowns mean you only hear from us when it matters.
- **Traffic Integration** - Real-time drive time estimates included in every alert.
- **Pause Alerts** - Simple toggle to snooze when traveling or injured
- **SMS Compliance** - Handles STOP commands automatically

## Tech Stack

| Layer            | Technology                     |
| ---------------- | ------------------------------ |
| Frontend         | React + Vite + Tailwind CSS    |
| Backend          | TBD (Serverless)               |
| Database         | Supabase (Postgres + Auth)     |
| AI               | Claude Haiku 4.5               |
| Weather          | Open-Meteo Marine API          |
| Buoys            | NOAA Raw Text Files            |
| Traffic          | Google Distance Matrix API     |
| SMS              | Twilio                         |
| Hosting          | Vercel                         |

## Data Model

### User Profile

- `time_zone` - For localized trigger times
- `home_address` - For traffic/drive time calculations
- `sms_enabled` - Toggled false on STOP reply
- `alerts_paused` - Manual snooze toggle

### Spot Configuration

- Location (lat/lon)
- Spot name (from global database or custom)
- Nearest NOAA buoy ID (auto-suggested)
- Tiered triggers with custom criteria

## Spot Picker UX

Users can find their spot in three ways:

1. **Search** - Type spot name, autocomplete from global surf spot database (~1000+ spots)
2. **Browse** - Filter by region/country
3. **Create Custom** - Drop a pin or enter coordinates for unlisted spots

When a spot is selected or created:

- System auto-suggests the nearest active NOAA buoy for validation
- User can override buoy selection if preferred

**Data Source**: Global surf spot database with name, lat/lng, country (e.g., [surf-spots gist](https://gist.github.com/naotokui/01c384bf58ca43261eafe6a5e2ad6e85))

## Alert Criteria (Open-Meteo Marine API)

Users can set thresholds on any combination of these parameters:

### Wave Data

| Parameter          | Description             | Unit    |
| ------------------ | ----------------------- | ------- |
| `wave_height`      | Combined wave height    | ft/m    |
| `wave_period`      | Combined wave period    | seconds |
| `wave_direction`   | Combined wave direction | degrees |
| `wave_peak_period` | Peak wave period        | seconds |

### Swell Data (Primary)

| Parameter                | Description               | Unit    |
| ------------------------ | ------------------------- | ------- |
| `swell_wave_height`      | Primary swell height      | ft/m    |
| `swell_wave_period`      | Primary swell period      | seconds |
| `swell_wave_direction`   | Primary swell direction   | degrees |
| `swell_wave_peak_period` | Primary swell peak period | seconds |

### Swell Data (Secondary/Tertiary)

| Parameter                        | Description               | Unit    |
| -------------------------------- | ------------------------- | ------- |
| `secondary_swell_wave_height`    | Secondary swell height    | ft/m    |
| `secondary_swell_wave_period`    | Secondary swell period    | seconds |
| `secondary_swell_wave_direction` | Secondary swell direction | degrees |
| `tertiary_swell_wave_height`     | Tertiary swell height     | ft/m    |
| `tertiary_swell_wave_period`     | Tertiary swell period     | seconds |
| `tertiary_swell_wave_direction`  | Tertiary swell direction  | degrees |

### Wind Waves

| Parameter             | Description                | Unit    |
| --------------------- | -------------------------- | ------- |
| `wind_wave_height`    | Wind-generated wave height | ft/m    |
| `wind_wave_period`    | Wind wave period           | seconds |
| `wind_wave_direction` | Wind wave direction        | degrees |

### Ocean Conditions

| Parameter                 | Description               | Unit      |
| ------------------------- | ------------------------- | --------- |
| `sea_level_height_msl`    | Sea level including tides | meters    |
| `sea_surface_temperature` | Water temperature         | °F/°C     |
| `ocean_current_velocity`  | Current speed             | knots/mph |
| `ocean_current_direction` | Current direction         | degrees   |

### Example Trigger Config

```json
{
  "name": "Dawn Patrol",
  "criteria": {
    "swell_wave_height": { "min": 4 },
    "swell_wave_period": { "min": 10 },
    "wind_wave_height": { "max": 2 },
    "swell_wave_direction": { "min": 270, "max": 315 }
  }
}
```

## API Routes

```
GET  /api/cron/check-surf    # The heartbeat (runs hourly, checks user timezones)
POST /api/user/config        # Save triggers
GET  /api/user/history       # Past alerts
POST /api/webhook/sms        # Handle STOP replies
```

## MVP Scope

- [ ] Auth: Google/Email via Supabase + phone verification
- [ ] Dashboard: Create/edit alerts with tiered triggers
- [ ] Data Engine: Open-Meteo + NOAA integration
- [ ] Triggers: Night Before, Morning Reality, Pop-Up with cooldowns
- [ ] Personality Engine: Claude Haiku 4.5 message generation
- [ ] Notifications: SMS via Twilio with STOP handling
- [ ] Timezone Support: Per-user timezone storage
- [ ] Traffic Integration: Home address input + Google Distance Matrix for drive time in alerts

## Post-MVP

- [ ] Share Alert: Forward AI hype text to friends
- [ ] Community Vibes: Import spot settings from other users

## Success Criteria

| Metric           | Target                                              |
| ---------------- | --------------------------------------------------- |
| Signal-to-Noise  | Zero false positive alerts                          |
| Buddy Feel       | Users describe texts as sounding like a real friend |
| Zero Maintenance | Set it and forget it                                |
| Cost Per Alert   | < $0.01 (covered by supporter donations)            |
| Infrastructure   | Near $0 using free tiers                            |

## Project Structure

```
homebreak-project/
├── frontend/                    # React + Vite marketing site & dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── landing/         # Landing page components (Hero, Features, HowItWorks, etc.)
│   │   │   ├── dashboard/       # Dashboard components (Sidebar, Layout)
│   │   │   └── ui/              # Shared UI components (Button, Card, Modal, etc.)
│   │   ├── contexts/            # React contexts (Theme, Location)
│   │   ├── pages/               # Page components
│   │   ├── utils/               # Utility functions
│   │   └── App.tsx              # Main app with routing
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Development

```bash
# Install dependencies
cd frontend
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

MIT

# Home Break - Frontend Prototype

The invisible surf alert. No ads, no social feeds, no noise - just a personalized AI buddy that texts you when your spot is actually firing.

## Overview

Home Break is a surf alert system that monitors conditions and sends you SMS notifications when waves match your personal triggers. It uses real-time NOAA buoy data, Open-Meteo forecasts, and AI-powered messaging (Claude 4.5) to deliver alerts that sound like a local buddy telling you to get out there.

## Features

### Dashboard

- Cross-spot overview - Monitor conditions across all your configured spots at a glance
- Real-time conditions - Wave height, period, swell direction, wind, and water temp from NOAA buoys
- Status indicators - Epic/Good/Fair/Poor based on your triggers
- Recent alerts - View your notification history across all spots

### Spots

- Configure your home breakss with NOAA buoy integration
- Custom locations with lat/lon coordinates
- Optional home address for traffic estimates in alerts
- Buoy data only appears when a buoy is assigned

### Triggers (per spot)

- Condition levels: Fair, Good, or Epic
- Wave height: Min/max range
- Wave period: Minimum threshold
- Swell direction: Select acceptable compass directions
- Wind direction: Select acceptable directions (offshore = clean)
- Max wind speed: Upper limit for conditions

### Alert Schedule

- **Night Before Hype** (8 PM) - Checks tomorrow's forecast against triggers
- **Morning Reality Check** (6 AM) - Validates live buoy data + traffic estimate
- **Pop-Up Alerts** (every 2 hours) - Catches sudden condition changes

All alerts include buoy data and only fire when conditions match triggers - no spam.

### Personality

- Stoked Local - Hyped-up buddy
- Chill Surfer - Laid back vibes
- Data Nerd - Just the numbers
- Hype Beast - Maximum energy

## Pricing

### Free Tier ($0/month)

- 1 spot
- 1 trigger
- 5 SMS alerts per month
- Email fallback for Night Before alerts after SMS limit

### Unlimited Tier ($5/month)

- Unlimited spots
- Unlimited triggers
- Unlimited SMS alerts
- All alert types

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React icons

## Project Structure

```
src/
├── components/
│   ├── dashboard/     # Dashboard layout and sidebar
│   ├── landing/       # Landing page components
│   └── ui/           # Reusable UI components
├── pages/
│   ├── LandingPage.tsx
│   ├── DashboardOverview.tsx
│   ├── TriggersPage.tsx
│   ├── SpotPage.tsx
│   ├── AlertsPage.tsx
│   ├── PersonalityPage.tsx
│   └── AccountPage.tsx
├── types/
│   └── index.ts
├── App.tsx
└── index.css
```

## Getting Started

```bash
npm install
npm run dev
```

## Routes

- `/` - Landing page
- `/dashboard` - Dashboard overview
- `/dashboard/spot` - Manage spots and buoys
- `/dashboard/triggers` - Configure triggers per spot
- `/dashboard/alerts` - Alert schedule settings
- `/dashboard/personality` - Personality selection
- `/dashboard/account` - Account settings and subscription

## Notes

This is a frontend prototype for UX exploration. Backend services (buoy data, SMS delivery, AI messaging) are not yet implemented.

Key UX decisions:

- Buoy data only appears when assigned to a spot
- All alerts require conditions to match triggers
- Traffic estimates included in all alert types
- Free tier: email fallback for Night Before after 5 SMS
- Cross-spot dashboard with expandable details

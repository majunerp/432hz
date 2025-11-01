# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **432 Hz frequency generation and download platform** built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The platform allows users to generate, play, and download audio files tuned to 432 Hz frequency for meditation, relaxation, and sound healing purposes.

**Domain**: 432-hz.org
**Business Model**: Ad-supported free platform
**Target Market**: European and North American users interested in alternative tuning and sound healing

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS 4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (via next/font)

## Architecture

### App Router Structure
- Uses Next.js App Router (`app/` directory)
- `app/layout.tsx`: Root layout with font configuration and metadata
- `app/page.tsx`: Home page component
- `app/globals.css`: Global styles with Tailwind directives

### Path Aliases
- `@/*` maps to root directory (configured in tsconfig.json)
- Example: `import Component from '@/components/Component'`

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- JSX: react-jsx (React 19 automatic runtime)
- Module resolution: bundler

## Key Features to Implement

Based on the PRD requirements, the platform should include:

1. **Audio Generation**: Generate pure 432 Hz sine wave tones
2. **Format Support**: MP3, WAV, FLAC downloads
3. **No Registration**: Anonymous usage without user accounts
4. **Privacy-First**: No personal data collection
5. **Multi-Language**: Support for international users (primarily English)
6. **Ad Integration**: Space for non-intrusive advertising

## Competitor Analysis

Primary competitor: 432hzsound.com
- Offers similar functionality (generation + download)
- No login required
- Multiple format support
- Privacy-focused approach

Our differentiation should focus on:
- Better UX/UI design
- Additional features (custom duration, waveform types, mixing)
- Educational content about 432 Hz
- Community features (optional)

## Important Notes

- This is a fresh Next.js project - most features need to be built from scratch
- Focus on Web Audio API for client-side audio generation
- Consider using libraries like Tone.js or Web Audio API directly
- Ensure all audio processing happens client-side (no server-side audio processing needed)
- Plan for ad placement that doesn't interfere with user experience
- Include proper disclaimers about therapeutic claims (not medical treatment)

## Deployment

- Optimized for Vercel deployment (Next.js native platform)
- Static generation where possible for better performance
- Consider edge functions for any dynamic features

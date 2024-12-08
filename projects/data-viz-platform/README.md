# Data Visualization Dashboard

A mock data visualization platform built with React, TypeScript, and Vite, featuring interactive charts, variable management, and real-time data visualization capabilities.

## 🚀 Features

### Core Components
- **Dashboard View**
  - Interactive graph visualization with tooltips
  - KPI cards with real-time metrics
  - Variable management system
  - Responsive layout design

- **Variables Management**
  - Slide-over modal interface
  - Category-based variable organization
  - Active/inactive state management
  - Tooltip system for variable details
  - Search functionality

- **Authentication System**
  - Email/Password authentication
  - Protected routes
  - Session management
  - User state persistence

### Key Interactions
- 🔄 Real-time graph updates
- 💡 Contextual tooltips
- ✨ Variable toggling system
- 🔐 Secure authentication flow

## 🛠️ Technical Stack

- **Frontend Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 6.0.1
- **Styling:** 
  - Tailwind CSS for utility-first styling
  - CSS Modules for component-specific styles
- **Animation:** Framer Motion for smooth transitions
- **Authentication:** Firebase Auth
- **Icons:** Lucide React
- **Charts:** Recharts for data visualization


## 📁 Project Structure

```
data-viz-platform/
├─ src/
│  ├─ components/    # UI components
│  ├─ features/      # Feature logic
│  ├─ hooks/         # Custom hooks
│  ├─ pages/         # Page components
│  ├─ state/         # State management
│  ├─ styles/        # Global styles
│  ├─ utils/         # Utilities
│  ├─ App.tsx        # Root component
│  └─ main.tsx       # Entry point
├─ public/
└─ [config files]
```

## 🤔 Technical Decisions & Trade-offs

### Chosen Technologies
- **Styling:** Utility-first CSS with Tailwind
- **TypeScript:** Enhanced type safety and maintainability
- **Firebase Auth:** Quick integration and scalability

### Current Limitations
- 📊 Uses mock data (needs real data integration)
- ⚠️ Basic error handling (needs enhancement)
- 🌐 Modern browser focus (needs broader support)

## ⏱️ Development Timeline

| Phase | Time |
|-------|------|
| Initial Setup | ~30 minutes |
| Replicating Design | ~4-5 hours |
| State & Interactions | ~1 hour |
| Styling & Animations | ~1 hour |
| Review & Documentation | ~1 hours |

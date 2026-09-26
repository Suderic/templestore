# Templestore — User Journeys & Logic Flowcharts

This document outlines the operational flowcharts, decision trees, and interaction lifecycles implemented throughout Templestore.

---

## 1. Complete Marketplace Navigation & Discovery Flow

```mermaid
flowchart TD
    Start([User Visits Templestore]) --> Home["Landing Page (/)"]
    
    Home --> ActionChoice{User Action}
    ActionChoice -->|Click 'Explore Templates'| Gallery["Template Gallery (/templates)"]
    ActionChoice -->|Click 'How It Works'| ScrollHow["Smooth Scroll to #how-it-works"]
    ActionChoice -->|Click 'User Dashboard'| DashCheck{Authenticated?}
    ActionChoice -->|Click 'Featured Card'| Detail["Template Detail (/templates/[slug])"]
    
    Gallery --> FilterAction["Filter by Category (SaaS, Website, Mobile) / Search / Sort"]
    FilterAction --> ClickCard["Click Template Card"]
    ClickCard --> Detail
    
    Detail --> DetailAction{User Decision}
    DetailAction -->|Click 'View Live Demo'| Demo["Alder & Ash Demo (/demo/alder-ash)"]
    DetailAction -->|Click 'Buy via QR Code'| QRModal["Dynamic QR Payment Modal"]
    DetailAction -->|Click 'Buy Directly'| DirectModal["Credit Card Checkout Modal"]
    DetailAction -->|Click 'Contact Us'| ContactModal["Inquiry Modal"]

    DashCheck -->|Yes| Dashboard["User Dashboard (/dashboard)"]
    DashCheck -->|No| SignIn["Sign In (/auth/signin)"]
```

---

## 2. Dynamic QR-Code Purchasing Flow

```mermaid
flowchart TD
    OpenQR["User Clicks 'Buy via QR Code'"] --> RenderModal["Generate Dynamic QR Code via qrcode.react"]
    RenderModal --> SelectCurrency["User Selects Currency (USDT / USDC / ETH)"]
    SelectCurrency --> UpdatePayload["QR Payload Updates with Dynamic Address & Amount"]
    
    UpdatePayload --> TimerRun["15:00 Countdown Timer Begins"]
    
    TimerRun --> UserDecision{User Action}
    UserDecision -->|Click 'Copy Address'| Copy["Address Copied to Clipboard with Visual Checkmark"]
    UserDecision -->|Timer Reaches 00:00| Expire["Show 'QR Code Expired' Alert + Regenerate Button"]
    UserDecision -->|Click 'Simulate Payment & Verify'| TriggerSim["Start Simulation Loader"]

    TriggerSim --> Verify["Payment Confirmed (Status 200 OK)"]
    Verify --> Confetti["🎉 Fire canvas-confetti Explosion"]
    Confetti --> GenLicense["Generate Unique Commercial License Key (e.g. ALDER-PRO-9842)"]
    GenLicense --> SyncAuth["Sync Purchase to AuthContext in-memory state"]
    SyncAuth --> SuccessCard["Show Success State with Download Link & Dashboard CTA"]
    SuccessCard --> ViewDash["User Navigates to /dashboard"]
```

---

## 3. Direct Credit Card Checkout Flow

```mermaid
flowchart TD
    OpenDirect["User Clicks 'Buy Directly (Checkout)'"] --> OpenModal["Open DirectCheckoutModal"]
    OpenModal --> FillForm["User Enters Cardholder Name, 16-digit Card, Expiry, CVV"]
    FillForm --> Validate["Client-Side Validation Check"]
    
    Validate -->|Invalid Form| ShowError["Highlight Invalid Fields in Red"]
    Validate -->|Valid Form| SubmitPay["Click 'Complete Purchase'"]
    
    SubmitPay --> Loading["Simulate 1.2s Gateway Processing"]
    Loading --> GenReceipt["Generate Order ID (ORD-XXXX-AA) & License Key"]
    GenReceipt --> PushPurchase["Append to AuthContext purchases list"]
    PushPurchase --> ConfirmationScreen["Show Order Complete Screen with Printable Invoice"]
```

---

## 4. Alder & Ash 5-Step Resort Reservation Flow

This flowchart governs the interactive booking engine on `/demo/alder-ash`:

```mermaid
flowchart TD
    ClickBook["User Clicks 'Book Your Stay' or 'Reserve'"] --> Step1["Step 1: Select Stay Style"]
    
    Step1 --> ChooseType{"Select Guest Category"}
    ChooseType -->|Solo Retreat| SetSolo["Room: Solo Cabin ($210/nt) | Guests: 1"]
    ChooseType -->|Couple / Pair| SetCouple["Room: Creekside Suite ($395/nt) | Guests: 2"]
    ChooseType -->|Family / Group| SetGroup["Room: Family Cabin ($540/nt) | Guests: 4"]
    
    SetSolo --> Step2["Step 2: Dates & Room Customization"]
    SetCouple --> Step2
    SetGroup --> Step2
    
    Step2 --> CalcDates["User selects Check-in and Check-out"]
    CalcDates --> LivePrice["Calculate Nights = (CheckOut - CheckIn)"]
    LivePrice --> SelectRoom["User can switch between any of the 6 cabins"]
    SelectRoom --> Step3["Step 3: Curated Add-ons"]
    
    Step3 --> ToggleAddons["User toggles optional add-ons:
      - Nordic Cedar Sauna ($40)
      - Geothermal Tub Soak ($60)
      - Guided Dawn Hike ($45)
      - Sourdough & Wine Basket ($35)"]
    ToggleAddons --> Subtotal["Update Total: (Rate * Nights) + AddOnsTotal"]
    Subtotal --> Step4["Step 4: Guest Details"]
    
    Step4 --> EnterInfo["User inputs: Full Name, Email, Phone, Dietary Requests"]
    EnterInfo --> CheckReq{Name & Email Provided?}
    CheckReq -->|No| Prompt["Show validation toast"]
    CheckReq -->|Yes| Step5["Step 5: Instant Confirmation"]
    
    Step5 --> GenResId["Generate Reservation ID (ALDER-RES-XXXX)"]
    GenResId --> ConfCard["Display Receipt Breakdown & Dates"]
    ConfCard --> CalDownload["Click 'Add to Calendar' -> Trigger Success Toast"]
```

---

## 5. User Authentication & Dashboard Protected Route Flow

```mermaid
flowchart TD
    UserArrival["User Enters /dashboard"] --> CheckAuth{Is User Authenticated?}
    
    CheckAuth -->|No| RedirectAuth["Redirect to /auth/signin?redirect=/dashboard"]
    RedirectAuth --> AuthPage["Display Sign In Form + 1-Click Seed Account Buttons"]
    
    AuthPage --> AuthChoice{Action}
    AuthChoice -->|Enter Email & Password| ManualLogin["Authenticate Credentials against SEED_USERS"]
    AuthChoice -->|Click 'Alex Designer'| Seed1["Auto-fill & Login as Alex Designer (usr-001)"]
    AuthChoice -->|Click 'Sarah Developer'| Seed2["Auto-fill & Login as Sarah Developer (usr-002)"]
    
    ManualLogin --> SetSession["Set User Session in AuthContext"]
    Seed1 --> SetSession
    Seed2 --> SetSession
    
    SetSession --> DashboardRoute["Mount /dashboard"]
    CheckAuth -->|Yes| DashboardRoute
    
    DashboardRoute --> RenderDashboard["Display User Profile, Purchased Templates, License Keys"]
    RenderDashboard --> UserActions{User Action}
    UserActions -->|Click 'Copy Key'| CopyKey["Key Copied to Clipboard"]
    UserActions -->|Click 'Download Source'| DownloadZIP["Simulate ZIP Package Download"]
    UserActions -->|Click 'View Receipt'| OpenReceipt["Render Printable Invoice Modal"]
```

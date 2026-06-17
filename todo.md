# ICSE Master — Project TODO

## Branding & Theme
- [x] Update theme colors to Vriti edusoft indigo/blue palette
- [x] Generate custom app logo (ICSE Master branded)
- [x] Update app.config.ts with app name and logo URL
- [x] Update splash screen and icons

## Authentication
- [x] Onboarding screen (3-slide carousel)
- [x] Login screen (OAuth via Manus)
- [x] Register screen (OAuth via Manus)
- [x] Auth backend routes (OAuth callback, logout, me)
- [x] Session token storage with SecureStore
- [x] Auth state management and protected routes

## Database & Backend
- [x] Database schema: users, student_profiles, subjects, chapters, tests, questions, test_attempts, chapter_progress
- [x] Seed 34 ICSE subjects (Class 6-10)
- [x] Seed 19 chapters with notes and key points
- [x] Seed 13 practice tests
- [x] Seed 60 MCQ questions with explanations
- [x] Backend API routes for subjects, chapters, tests, progress
- [x] Student profile CRUD
- [x] Chapter progress tracking (visited + completed)
- [x] Test submission and scoring
- [x] Dashboard stats (tests taken, avg score, chapters completed)

## Core Screens
- [x] Dashboard (Home) screen with greeting, stats, quick access
- [x] Subjects tab with class selector (6-10) and subject grid
- [x] Subject Detail screen with chapter list and completion status
- [x] Chapter Detail screen with key points and study notes
- [x] Practice Tests tab with class + difficulty filter and test cards
- [x] Test Screen with MCQ, timer, navigation dots, and progress bar
- [x] Test Result screen with grade, score, and performance feedback
- [x] Progress tab with stats, score bar, and test history
- [x] Profile tab with student info, grade selector, and settings

## Navigation
- [x] Bottom tab bar (Home, Subjects, Tests, Progress, Profile)
- [x] Stack navigation for Subject Detail, Chapter Detail, Test screens
- [x] Auth flow routing (redirect to login if not authenticated)

## Features
- [x] Test score history
- [x] Chapter completion tracking
- [x] Dark mode support (via theme provider)
- [x] Haptic feedback on tab interactions
- [x] Difficulty filter for tests (easy/medium/hard)
- [x] Color-coded subjects per subject type
- [x] Auto-submit test when timer expires

## Enhancements (Round 2)
- [x] Fix brand name: Vritti → Vriti everywhere in codebase
- [x] Expand ICSE seed content (36 chapters, 160 questions across all subjects)
- [x] PDF study notes viewer (file upload backend + in-app PDF viewer per chapter)
- [x] Push notification study reminders (daily alerts with time picker in Profile screen)

## Enhancements (Round 3)
- [x] Bookmark/Favourite: DB table, API routes, star button on chapters and tests
- [x] Bookmarks tab/section on Dashboard showing saved chapters and tests
- [x] Leaderboard screen: top students per class/subject, backend aggregation
- [x] Leaderboard tab in bottom navigation
- [x] Secure PPT viewer: upload PPT per chapter, rendered via secure Google Docs viewer
- [x] PPT slides rendered as non-downloadable images (no download/copy option)

## Admin / Teacher Panel
- [ ] Admin role field in users table (isAdmin flag)
- [ ] Admin login detection and routing to admin panel
- [ ] Admin dashboard with content stats (subjects, chapters, tests, questions count)
- [ ] Subjects management: list, add, edit, delete subjects
- [ ] Chapters management: list, add, edit, delete chapters per subject
- [ ] Chapter content editor: notes, key points, PDF upload, PPT upload
- [ ] Tests management: list, add, edit, delete tests
- [ ] Questions management: add, edit, delete MCQ questions per test
- [ ] Admin backend API routes (protected, admin-only)
- [ ] Admin navigation (separate tab layout or stack)
- [ ] Access control: non-admin users cannot access admin routes

## Enhancements (Round 4 — Major Features)
- [ ] DB: Extended student profile fields (school, DOB, coaching, address, city, pincode, parents name)
- [ ] DB: Class lock flag on student profile (gradeLockedAt, lockedGrade)
- [ ] DB: Trial tracking (trialStartedAt, trialTestsUsed, isPaid, paidAt, paidGrade)
- [ ] DB: Login activity log table (userId, ip, location, device, timestamp)
- [ ] DB: Chapter resources table (chapterId, type, title, url, isProtected)
- [ ] DB: Payment/invoice table
- [ ] Extended profile screen after registration (school, DOB, coaching, address, city, pincode, parents name)
- [ ] Class lock: prevent grade change after registration; show locked grade only
- [ ] Admin-only class transfer with marksheet upload proof
- [ ] Class-locked content: disable all other standards in subjects/tests tabs
- [ ] Remove PDF/PPT upload from student chapter view (admin-only)
- [ ] Chapter-end resources section: MCQ test link, chapter test PDF, Question Bank, PYQs, Sample Papers
- [ ] All chapter resources: non-downloadable, screenshot-protected WebView
- [ ] 7-day free trial: view content + max 3 tests, then payment prompt
- [ ] Payment prompt screen with plan details
- [ ] Payment flow: invoice generation + T&C on payment + standard activation
- [ ] Login activity log: record IP, location, device on every login
- [ ] Login activity screen in admin panel
- [ ] Static pages: About ICSE Master, Terms of Service, Privacy Policy
- [ ] Admin backend panel link accessible from app
- [ ] Admin panel: full CRUD screens for subjects, chapters, tests, questions
- [ ] Admin panel: user management + class transfer approval

## Admin Class Transfer Screen
- [x] Admin transfers screen with Pending / Approved / Rejected tabs
- [x] View student details and marksheet proof per request
- [x] Approve / Reject with admin notes and confirmation modal
- [x] Student-side transfer request form (from Profile screen)
- [x] Student can upload marksheet as proof (PDF or image)
- [x] Transfer status and history visible to student in Profile
- [x] Marksheet upload route added to classTransfer router
- [x] transfer-request route registered in root layout

## Admin User Management Screen
- [ ] Search users by name or email
- [ ] View user profile details (school, grade, trial/paid status)
- [ ] Assign or revoke admin role with confirmation
- [ ] Visual distinction between admin and regular users
- [ ] Pagination for large user lists
- [ ] User detail modal with full profile info

## Suspend Account Feature
- [ ] Add isSuspended, suspendedReason, suspendedAt columns to users table
- [ ] Backend: suspendUser and reactivateUser API routes (admin-protected)
- [ ] Admin user detail modal: Suspend/Reactivate button with reason input
- [ ] Suspended badge visible on user card and detail modal
- [ ] Block suspended students from accessing the app (show suspension screen)
- [ ] Suspension reason and date visible to admin in user detail

## Bug Fixes (Critical)
- [x] Fix trial gate: students should freely browse subjects/tests during 7-day trial; only block after trial expires OR 3 tests used
- [x] Fix admin login: include user role in /api/auth/me response so admin panel works
- [x] Auto-promote vritiedusoft@gmail.com to admin on first sign-in
- [x] Fix admin panel OAuth: reuse existing working callback, pass state to redirect back to admin panel

## Build & Deployment
- [x] Create eas.json for EAS Build (APK generation)
- [x] Add extra config section to app.config.ts for production API URL
- [x] Update constants/oauth.ts to use expo-constants extra config as fallback for native builds

## Feature Updates (April 2026 Batch)
- [x] Fix "Sign in with Manus" button label → "Sign In"
- [x] Fix fresh device: new install should start with fresh trial (no grade pre-selected, no trial consumed)
- [x] Update Contact Us: email=icsemaster@vritiedusoft.com, website=Vritiedusoft.com
- [x] Login activity tracking: record each login in DB; admin panel shows daily stats (online students, tests taken, chapters read, payments, failed payments)
- [x] Terms of Service: update footer to "Last updated April, 2026 © 2026 Vriti Edusoft All Rights Reserved"
- [x] Merge Progress + Leaderboard into one tab; add new "E-Notes" tab with non-downloadable ebook viewer
- [x] Test question number bar: show 1-10, 11-20 etc. in rows, not all in one line
- [x] Profile persistence: save profile to DB so it survives logout/login; show in admin student dashboard
- [x] Standard filtering: show only subscribed standard's subjects/tests; clicking other standards shows payment page
- [x] Test timer: 60 seconds per question, total time = questions × 60s, show countdown progress bar; result shows time taken
- [x] Test result: varied performance messages with inspiring quotes; show correct/wrong answers with correct answer highlighted and explanation
- [x] Fix admin panel login loop: after OAuth login, redirects back to login screen instead of dashboard

## Admin Panel Subject & Chapter Management (April 2026)
- [x] Fix admin panel: Add Subject form working (name, grade, icon/color)
- [x] Fix admin panel: Add Chapter form working (title, subject, notes, key points)
- [x] Admin panel: Upload PDF notes per chapter
- [x] Admin panel: Upload PPT slides per chapter
- [x] Replace all alert() in admin panel with persistent error banners (errors were disappearing)
- [x] Fix all broken API calls in admin panel sections
- [x] Add nirudeep@gmail.com as admin (both DB update + AUTO_ADMIN_EMAILS list)

## Feature Batch (April 2026 — Round 2)
- [x] Fix test timer: countdown must visually decrease in real-time (currently stuck/not showing consumption)
- [x] Admin questions: grade/subject/chapter filter before adding questions
- [x] Admin questions: math equation editor (CodeCogs/MathLive) for question text and options
- [x] Admin questions: bulk CSV upload of questions per chapter
- [x] Student activity tracking: capture chapter views, test attempts, login events in DB
- [x] Admin student detail: click student name → full activity timeline, subscription info, usage stats
- [x] Admin questions: bulk CSV upload — upload CSV, preview rows, map to grade/subject/chapter/test, import all at once

## Feature Batch (April 2026 — Round 3)
- [ ] Fix admin questions: chapters not loading in cascading Grade→Subject→Chapter filter
- [ ] Admin suspend student: suspend/reactivate with reason from student detail modal
- [ ] In-app suspension screen: block suspended students with reason displayed
- [ ] Test creation: support single-chapter / multiple-chapter / all-chapters scope
- [ ] Test creation: chapter scope selector in test modal (radio: Single Chapter / Multi-Chapter / All Chapters)


## E-Notes Shopping Cart (April 2026 — Round 4)
- [x] DB: Add price field to e_notes table
- [x] DB: Create purchases table (userId, eNoteId, purchasedAt, price)
- [x] DB: Create cart table (userId, eNoteId, addedAt)
- [x] Backend: API endpoint to add e-note to cart
- [x] Backend: API endpoint to remove e-note from cart
- [x] Backend: API endpoint to get user's cart
- [x] Backend: API endpoint to get user's purchases
- [x] Backend: API endpoint to checkout (create purchase records)
- [x] Student UI: E-notes list with price and "Add to Cart" button
- [x] Student UI: Shopping cart screen with item management (add/remove)
- [x] Student UI: Cart summary with total price and discount code input
- [x] Student UI: Checkout screen with order confirmation
- [x] Student UI: View-only e-notes reader with DRM protection (no download/copy/screenshot)
- [ ] Student UI: Show only purchased e-notes in e-notes tab (access control)
- [ ] Razorpay integration setup (payment gateway, webhook handlers)


## Admin E-Notes Management Panel (April 2026 — Round 5)
- [x] Backend: Admin CRUD endpoints for e-notes (create, read, update, delete) - already existed
- [x] Backend: Admin endpoint to list all e-notes with filters - already existed
- [x] Backend: Updated API to support price field in add/update endpoints
- [x] Admin UI: E-notes list with search by title, grade filter, status filter
- [x] Admin UI: Add E-Note form (title, description, grade, subject, price, active status)
- [x] Admin UI: Edit E-Note form (update all fields including price)
- [x] Admin UI: Publish/Unpublish toggle for e-notes (isActive checkbox)
- [x] Admin UI: Delete e-note with confirmation
- [x] Admin UI: View e-note details in modal
- [x] Admin UI: Client-side filtering with real-time search
- [ ] Admin UI: PDF upload with file validation and storage
- [ ] Admin UI: Bulk actions (publish/unpublish/delete multiple)


## PDF Upload Feature for E-Notes (April 2026 — Round 6)
- [x] Backend: S3 upload endpoint for PDF files (enotes.uploadPdf)
- [x] Backend: File validation (PDF only, max 50MB)
- [x] Backend: Generate unique file names with timestamp
- [x] Admin UI: PDF upload input with drag-and-drop support
- [x] Admin UI: File validation on client side (type, size)
- [x] Admin UI: Progress bar during upload
- [x] Admin UI: Error messages for failed uploads
- [x] Admin UI: Success notification with file URL
- [x] Admin UI: Tab system to toggle between upload and URL options
- [ ] Admin UI: Preview uploaded PDF in modal


## Admin Analytics Dashboard (April 2026 — Round 7)
- [x] Backend: Analytics endpoint for sales summary (total sales, revenue, avg price)
- [x] Backend: Analytics endpoint for sales by date (daily/weekly/monthly)
- [x] Backend: Analytics endpoint for revenue by grade
- [x] Backend: Analytics endpoint for top e-notes by sales
- [x] Backend: Analytics endpoint for recent purchases
- [x] Admin UI: Analytics dashboard section in sidebar
- [x] Admin UI: Key metrics cards (Total Sales, Revenue, Avg Price, Unique Customers)
- [x] Admin UI: Sales trend chart (Chart.js dual-axis line chart)
- [x] Admin UI: Revenue by grade doughnut chart
- [x] Admin UI: Top e-notes table with sales count and revenue
- [x] Admin UI: Recent purchases table with student names and dates
- [x] Admin UI: Date range filter (last 7/30/90 days with refresh)
- [ ] Admin UI: Export analytics data (CSV)


## Real-Time Sale Notifications (April 2026 — Round 8)
- [x] Backend: WebSocket server setup for real-time connections
- [x] Backend: Emit purchase events to connected admins via WebSocket
- [x] Backend: Track active admin connections with userId mapping
- [x] Admin UI: WebSocket client connection and event listener
- [x] Admin UI: Toast notification component for new sales (green gradient)
- [x] Admin UI: Notification history/log table in modal
- [x] Admin UI: Sound alert toggle with Web Audio API beep
- [x] Admin UI: Notification badge counter in sidebar (red)
- [x] Admin UI: Notification settings (sound enable/disable toggle)
- [x] Admin UI: Clear notification history button


## Bug Fixes (April 2026 — Round 9)
- [x] Fix: Test creation fails with questionCount = 0 - removed hardcoded value, let DB default apply
- [x] Fix: Admin UI not calculating question count before save - not needed, DB handles default
- [ ] Fix: Validate question count is > 0 before allowing test save (optional enhancement)


## Bulk Question Import Feature (April 2026 — Round 10)
- [x] Backend: CSV parsing endpoint with validation (questions.parseCSV)
- [x] Backend: Batch question insertion endpoint (questions.bulkCreate)
- [x] Admin UI: CSV file upload with drag-and-drop
- [x] Admin UI: CSV preview table with validation errors
- [x] Admin UI: Import progress bar and confirmation
- [x] Admin UI: Import summary with success/error counts
- [x] Admin UI: Download CSV template button
- [x] Admin UI: Batch import with 100 questions per batch


## Import History Tracking (April 2026 — Round 11)
- [x] DB: Create import_logs table (userId, testId, fileName, status, totalRows, validCount, errorCount, createdAt)
- [x] DB: Create import_errors table (importLogId, rowNumber, errorMessage)
- [x] Backend: Log CSV imports with metadata (createImportLog, completeImportLog, failImportLog)
- [x] Backend: API endpoint to get import history (importHistory.list)
- [x] Backend: API endpoint to get detailed import log with errors (importHistory.details)
- [x] Backend: API endpoint for statistics (importHistory.stats)
- [x] Admin UI: Import history page in sidebar with nav item
- [x] Admin UI: Import history table with status badges (completed, failed, pending)
- [x] Admin UI: Detailed import log modal with error table
- [x] Admin UI: Statistics cards (total imports, successful, failed, success rate)


## Razorpay Payment Gateway Integration (April 2026 — Round 12)
- [x] Setup: Add Razorpay API keys to environment variables (RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET)
- [x] Backend: Install razorpay npm package (v2.9.6)
- [x] Backend: Create Razorpay service module (server/_core/razorpay.ts)
- [x] Backend: Create payment order endpoint (payments.createOrder)
- [x] Backend: Create payment verification endpoint (payments.verifyPayment)
- [x] Backend: Signature verification with HMAC SHA256
- [x] Student UI: Update checkout to call Razorpay payment endpoint
- [x] Student UI: Integrate Razorpay Checkout modal (web)
- [x] Student UI: Handle payment success/failure callbacks
- [x] Student UI: Show payment status and order confirmation
- [x] Student UI: Native payment simulation for testing
- [ ] Testing: Test successful payment flow with real Razorpay account
- [ ] Testing: Test failed payment recovery
- [ ] Testing: Test webhook payment verification


## Invoice Generation & Email (April 2026 — Round 13)
- [x] Setup: Install nodemailer for email service
- [x] Setup: Configure SMTP credentials (Gmail - info@vritiedusoft.com)
- [x] Backend: Create invoice PDF generation module (server/_core/invoice.ts)
- [x] Backend: Invoice template with itemized e-notes, prices, total
- [x] Backend: Create email service module with SMTP configuration (server/_core/email.ts)
- [x] Backend: Email template with invoice attachment
- [x] Backend: Trigger invoice email after payment verification (automatic)
- [x] Backend: Generate unique invoice numbers (INV-YYYYMM-XXXX format)
- [x] Backend: Send HTML email with PDF attachment
- [x] Testing: Build verification successful
- [ ] Testing: Test email delivery with real SMTP
- [ ] Testing: Test invoice PDF generation with sample data


## Student Invoice Dashboard & Admin Management (April 2026 — Round 14)
- [x] Backend: Create invoices table to store generated invoices
- [x] Backend: Invoice retrieval endpoint for students (invoices.getStudentInvoices)
- [x] Backend: Admin invoice resend endpoint (invoices.resendInvoice)
- [x] Backend: Invoice template settings table (invoiceSettings)
- [x] Backend: Admin endpoint to update invoice template settings (invoices.updateSettings)
- [x] Backend: Invoice template retrieval endpoint (invoices.getSettings)
- [x] Backend: Admin endpoint to list all invoices (invoices.getAllInvoices)
- [ ] Student UI: Invoice history screen with list of past invoices
- [ ] Student UI: Download invoice PDF button for each invoice
- [ ] Student UI: Filter invoices by date range and amount
- [ ] Admin UI: Invoice management section in admin panel
- [ ] Admin UI: List of all student invoices with resend button
- [ ] Admin UI: Invoice template customization form (logo upload, footer text)

## Navigation Restructuring (April 2026 — Round 15)
- [x] Remove Cart and Purchases tabs from bottom tab bar
- [x] Keep only 5 tabs: Home, Subjects, Tests, Progress, E-Notes, Profile
- [x] Convert Cart screen to modal component (CartModal)
- [x] Convert Purchases screen to modal component (PurchasesModal)
- [x] Add Cart icon to E-Notes header with badge
- [x] Add Purchases icon to E-Notes header
- [x] Test navigation flow and tab bar display
- [ ] Save checkpoint with updated navigation


## E-Notes Access Control (April 2026 — Round 16)
- [x] Backend: Create endpoint to get student's purchased e-note IDs (purchases.getPurchasedIds)
- [x] Backend: Update enotes.list to accept optional filter for purchased-only view
- [x] Frontend: Fetch purchased e-note IDs on E-Notes screen load
- [x] Frontend: Show two views: "Available" (all e-notes) and "My Purchases" (purchased only)
- [x] Frontend: Lock unpurchased e-notes with "Add to Cart" button visible
- [x] Frontend: Show purchased e-notes with "View" button instead of "Add to Cart"
- [x] Frontend: Prevent adding duplicate items to cart (check if already in cart or purchased)
- [x] Frontend: Show purchase status badge on each e-note card
- [x] Test access control flow end-to-end
- [ ] Save checkpoint with access control implemented


## Bug Fixes (April 2026 — Round 17)
- [x] Fix: App crash when clicking on e-notes due to missing URL validation
- [x] Add: Error handling for WebView URL loading failures
- [x] Add: Error message display when e-note URL is unavailable

- [x] Fix: Database orderBy syntax error in getEnotesByGrade function
- [x] Fix: Database orderBy syntax error in getEnotesAdmin function

- [x] Fix: App configuration syntax errors in app.config.ts
- [x] Fix: Added missing versionCode and buildNumber for Android/iOS
- [x] Fix: Updated Android build architecture to arm64-v8a only
- [x] Fix: Added targetSdkVersion 34 for Android compatibility

- [x] Fix: Admin panel e-notes query error - added proper SELECT fields
- [x] Fix: Added LEFT JOIN with subjects table to get subject names
- [x] Fix: Added error handling and logging to getEnotesAdmin function


## OAuth Authentication Debugging (April 2026 — Round 18)
- [x] Add detailed error logging to OAuth mobile endpoint
- [x] Improve error messages to include specific failure reasons
- [x] Verify deep linking configuration in app.config.ts

- [x] Fix: Corrected orderBy syntax in getEnotesAdmin - use asc() with multiple columns


## Android OAuth Authentication Fix (April 2026 — Round 19)
- [x] Add pathPrefix to Android intentFilter for /oauth deep link path
- [x] Add Platform import and logging to OAuth callback for Android debugging
- [x] Log full params and platform info in OAuth callback handler


## Account Deletion Feature (April 2026 — Round 17)
- [x] Backend: Create deleteUserAccount endpoint that removes user and all related data
- [x] Backend: Delete user's cart, purchases, bookmarks, test attempts, chapter progress, and login activity
- [x] Backend: Ensure referential integrity - handle cascade deletes properly
- [x] Frontend: Add "Delete Account" button to profile page
- [x] Frontend: Show confirmation dialog with warning about data loss
- [x] Frontend: Clear session token and logout after successful deletion
- [x] Frontend: Redirect to login page after account deletion
- [ ] Test: Verify all user data is properly deleted from database
- [ ] Test: Verify user cannot login after account deletion


## Gradle Build Fix (April 2026 — Round 18)
- [x] Fix: react-native-gesture-handler Gradle dependency resolution error
- [x] Fix: Update eas.json with NDK version and Gradle command configuration
- [x] Fix: Added NDK 25.1.8937393 to all build profiles (development, preview, production)
- [x] Fix: Added Gradle environment variables for AndroidX, Jetifier, and SDK versions
- [x] Fix: Set explicit compileSdkVersion, targetSdkVersion, minSdkVersion in eas.json
- [ ] Test: Verify Android APK builds successfully with updated eas.json


## Student Invoice Dashboard & Admin Invoice Management (April 2026 — Round 19)
- [x] Backend: Create invoices.getStudentInvoices endpoint with pagination and filters
- [x] Backend: Create invoices.getInvoiceDetails endpoint to get single invoice
- [x] Backend: Create invoices.downloadInvoice endpoint to generate PDF
- [x] Backend: Create invoices.resendInvoice endpoint for admins
- [x] Backend: Create invoices.getSettings endpoint for template customization
- [x] Backend: Create invoices.updateSettings endpoint for admins to customize templates
- [x] Frontend: Create student invoices screen with list of past invoices
- [x] Frontend: Add date range filter for invoices
- [x] Frontend: Add amount range filter for invoices
- [x] Frontend: Add search by e-note title functionality
- [x] Frontend: Add PDF download button for each invoice
- [x] Frontend: Add invoice detail modal/screen
- [x] Admin: Create invoice management section in admin panel
- [x] Admin: Display all student invoices with student name and details
- [x] Admin: Add resend invoice button with confirmation
- [x] Admin: Create template customization form (logo upload, footer text)
- [x] Admin: Add preview of customized invoice template
- [ ] Testing: Verify invoice generation and PDF download
- [ ] Testing: Verify admin can resend invoices
- [ ] Testing: Verify template customization works

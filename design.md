# ICSE Master — Mobile App Design

## Brand Identity
- **App Name**: ICSE Master
- **Company**: Vriti edusoft — Teaching and Learning Solution Provider
- **Primary Color**: Deep Indigo Blue `#3D4DB7` (matching Vriti edusoft logo)
- **Accent Color**: Flame Orange `#F97316` (energy, motivation)
- **Background (Light)**: `#F8F9FF` (soft blue-white)
- **Background (Dark)**: `#0F1023`
- **Surface (Light)**: `#FFFFFF`
- **Surface (Dark)**: `#1A1D3A`
- **Success**: `#22C55E`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`
- **Typography**: System font (SF Pro on iOS, Roboto on Android)

---

## Screen List

| # | Screen | Route | Description |
|---|--------|-------|-------------|
| 1 | Onboarding | `/onboarding` | 3-slide intro carousel with app features |
| 2 | Login | `/auth/login` | Email + password login |
| 3 | Register | `/auth/register` | Name, class, email, password registration |
| 4 | Dashboard (Home) | `/(tabs)/` | Greeting, progress summary, quick-access cards |
| 5 | Subjects | `/(tabs)/subjects` | Grid of ICSE subjects by class |
| 6 | Subject Detail | `/subject/[id]` | Chapters list for a subject |
| 7 | Chapter Detail | `/chapter/[id]` | Study notes, key concepts, summary |
| 8 | Practice Tests | `/(tabs)/tests` | List of available tests by subject/chapter |
| 9 | Test Screen | `/test/[id]` | MCQ test with timer |
| 10 | Test Result | `/test/[id]/result` | Score, correct/wrong breakdown |
| 11 | Progress | `/(tabs)/progress` | Charts, streaks, subject-wise scores |
| 12 | Profile | `/(tabs)/profile` | Student info, class, settings, logout |

---

## Primary Content and Functionality

### Onboarding (3 slides)
- Slide 1: "Master ICSE with Confidence" — illustration + tagline
- Slide 2: "Practice with Smart Tests" — quiz illustration
- Slide 3: "Track Your Progress" — chart illustration
- CTA: "Get Started" → Login/Register

### Authentication
- **Login**: Email, Password, "Forgot Password" link, "Sign Up" link
- **Register**: Full Name, Class (6–10), Email, Password, Confirm Password
- Validation with inline error messages
- JWT-based auth stored in SecureStore

### Dashboard (Home Tab)
- Greeting: "Good Morning, [Name]!" with avatar
- Today's study streak badge
- Quick stats: Tests taken, Avg. score, Study time
- "Continue Learning" card (last visited chapter)
- "Recommended Tests" horizontal scroll
- "Subjects" quick-access grid (4 subjects)

### Subjects Tab
- Class selector (Class 6–10) at top
- Grid layout: Subject cards with icon, name, chapter count
- ICSE Subjects: English, Mathematics, Physics, Chemistry, Biology, History & Civics, Geography, Computer Science

### Subject Detail
- Subject header with color-coded banner
- Chapter list with completion status (✓ / ○)
- Tap chapter → Chapter Detail

### Chapter Detail
- Chapter title and subject breadcrumb
- Tabbed view: "Notes" | "Key Points" | "Practice"
- Notes: Scrollable rich text content
- Key Points: Bullet list of important facts
- Practice: Quick link to chapter-specific test

### Practice Tests Tab
- Filter: By Subject, By Class, By Difficulty
- Test cards: Title, subject tag, question count, time limit, difficulty badge
- "Start Test" button

### Test Screen
- Progress bar (Q1/20)
- Timer countdown
- Question text + 4 MCQ options
- "Next" / "Submit" buttons
- Haptic feedback on selection

### Test Result
- Score circle (e.g., 85%)
- "Excellent!" / "Good Job!" / "Keep Practicing" message
- Correct/Wrong/Skipped breakdown
- Review answers button
- "Try Again" and "Back to Tests" buttons

### Progress Tab
- Weekly activity chart (bar chart)
- Subject-wise performance (horizontal bars)
- Test history list (last 10 tests)
- Streak counter and badges

### Profile Tab
- Avatar with initials
- Student name, class, email
- Settings: Notifications toggle, Dark mode toggle
- "About ICSE Master" link
- Logout button

---

## Key User Flows

### Flow 1: New Student Onboarding
Splash → Onboarding (3 slides) → Register → Dashboard

### Flow 2: Returning Student
Splash → Login → Dashboard → Continue Learning

### Flow 3: Study Session
Dashboard → Subjects Tab → Subject Detail → Chapter Detail → Notes/Key Points

### Flow 4: Take a Practice Test
Tests Tab → Select Test → Test Screen (MCQ) → Submit → Test Result → Review Answers

### Flow 5: Check Progress
Progress Tab → View weekly chart → Subject scores → Test history

---

## Tab Bar (Bottom Navigation)
| Tab | Icon | Screen |
|-----|------|--------|
| Home | house.fill | Dashboard |
| Subjects | book.fill | Subjects |
| Tests | checkmark.circle.fill | Practice Tests |
| Progress | chart.bar.fill | Progress |
| Profile | person.fill | Profile |

---

## Data Models

### User
```
id, name, email, passwordHash, class (6-10), createdAt, lastLoginAt
```

### Subject
```
id, name, class, icon, color, description, chapterCount
```

### Chapter
```
id, subjectId, title, order, notes, keyPoints (JSON array)
```

### Test
```
id, title, subjectId, chapterId (optional), class, difficulty, timeLimit, questionCount
```

### Question
```
id, testId, text, options (JSON array of 4), correctOption (0-3), explanation
```

### TestAttempt
```
id, userId, testId, score, totalQuestions, timeTaken, completedAt, answers (JSON)
```

### Progress
```
userId, subjectId, chaptersCompleted, lastStudied, studyStreak
```

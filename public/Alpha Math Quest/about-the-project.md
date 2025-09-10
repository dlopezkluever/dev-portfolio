# **Product Requirements Document: Zearn-based Math Learning Application**

## **1\. Introduction**

This document outlines the updated requirements for a Zearn-based math learning application designed for children. The application will function as a new feature within the larger Timeback Learning Management System (LMS). Its primary purpose is to provide a seamless, engaging, and personalized learning experience for students from Kindergarten through 8th grade by presenting a progression of mini-lessons and games based on their current skill level. The application will be a web-based portal integrated directly into the Timeback LMS, with a strong focus on a child-centric user experience. **This project is focused exclusively on building the child's view, with no parent view required in this phase.**

## **2\. Project Goals**

* **Seamless Integration:** Perfectly integrate with the Timeback LMS for data exchange, authentication, and user progression. This includes matching student roster data and dynamically updating a student's learning path.  
* **Engaging User Experience:** Create a simple, intuitive, and visually appealing interface for young learners.  
* **Personalized Learning Path:** Dynamically present lessons and games based on a student's placement scores and ongoing progress, as managed by the Timeback LMS.  
* **Gamified Learning:** Incorporate rewards, badges, and other gamification elements to motivate students by utilizing Timeback's systems.  
* **Agile Development:** Implement a phased approach, starting with front-end development using a JSON prototype, then migrating to a backend that integrates with Timeback and QTI XML-based content.

## **3\. Scope**

The scope of this project includes the development of a web application built with React and Vite for Alpha School that will:

* Integrate with the Timeback LMS.  
* Display a personalized learning dashboard for each student.  
* Host and launch interactive mini-lessons and games.  
* Track and report student progress back to the Timeback LMS.  
* Provide a "Badges" page to showcase earned accomplishments.  
* Handle the ingestion of QTI XML-based content and store it in a structured format for delivery to the user.

## **4\. Key Features & Requirements**

### **4.1. Technical Integration with Timeback LMS**

* **Data Flow:** The application must be capable of a two-way data flow with the Timeback LMS.  
  * **Inbound Data:** The application will receive student data (name, school, current grade level, lesson/mission placement, etc.) from Timeback upon launch.  
  * **Outbound Data:** The application will send data back to Timeback regarding completed mini-lessons, completed lessons, and any earned rewards or XP.  
* **Authentication:** The application will not have its own sign-in process. A child's authenticated status will be handled by the Timeback LMS. Clicking the "Zearn" link within Timeback will launch our application and pass the necessary user data.  
* **Student Roster and Placement:** The integration will use a unique student ID from Timeback to obtain the class roster. Students will be automatically placed in the correct grade, mission, lesson, and mini-lesson based on their math placement scores from Timeback, with no manual configuration required by a teacher or administrator. The placement score will set a student to the first mini-lesson of the first lesson of the first mission for their assigned grade.  
* **Endpoints & Rewards System:**  
  * **QTI:** The QTI endpoint within Timeback may be used to store the questions and content for mini-lessons.  
  * **Caliper:** The Caliper endpoints within Timeback must be "hooked up" to reward students with experience points when they complete activities on the site.

### **4.2. Content Strategy & Game Structure**

This section outlines the updated content generation strategy. The project has pivoted away from web scraping. The new focus is to build a Minimum Viable Product (MVP) centered on the first mission of Grade 1.

*   **MVP Scope:**
    *   **Grade Level:** Grade 1
    *   **Mission:** Mission 1 (Addition and Subtraction)
    *   **Lessons:** 10 lessons.
    *   **Mini-Lessons:** 4 mini-lessons per lesson.

*   **Mini-Lesson Types:** The MVP will feature four distinct types of interactive mini-lessons.
    *   **1. Blast Off!:** A fast-paced, multiple-choice quiz with a space theme. Students solve fill-in-the-blank math problems.
    *   **2. Bonds!:** An interactive lesson on number bonds where students type the missing number into a diagram using an on-screen keypad.
    *   **3. Story Time!:** A word problem game where students use drag-and-drop to manipulate visual assets (e.g., apples, birds) to solve problems.
    *   **4. Sprint:** A timed, 1-minute challenge where students answer as many addition problems as possible, followed by a mandatory review and revision of incorrect answers.

*   **Data Progression:** The ultimate goal is for the application to ingest and parse QTI v3-compliant XML files to populate these mini-lessons. However, the initial development phase will use a simpler JSON structure for rapid prototyping.

### **4.3. User Interface and Navigation**

* **Entry Point:** Children will access the application by clicking a "Zearn" link within the Timeback LMS.  
* **Main Landing Page (Homepage):**  
  * The page will have a clean and inviting design.  
  * **Left Sidebar:**  
    * Displays the student's name (`Hi Daniel`).  
    * Displays the student's school (`Alpha School`).  
    * Navigation links: A highlighted `Next Up` button to return to the main lesson card, and a simpler `Badges` button to navigate to the badges page.  
  * **Main Content Area (Big White Box):**  
    * The main lesson card will be prominently displayed at the top.  
    * This card will show a graphic of the mini-lesson, its title, and a `Start` button.  
    * Below the main card, a small informational section will describe the lesson's learning objective (e.g., "Adding & Subtracting").  
* **Mini-Lesson Page:**  
  * Clicking the `Start` button on the main card will redirect the user to the mini-lesson interface, as shown in `mini-lesson-ex.PNG`, `mini-lesson-ex-2.PNG`, and `mini-lesson-ex-3.PNG`.  
  * This page will first display instructions for the mini-game/lesson before presenting the interactive content.  
  * The user interface of the mini-lessons will primarily involve clicking buttons to perform actions, such as answering multiple-choice, short-response, or fill-in-the-blank questions.  
    * **Motivational Mascot:** A fun, cute little mascot will appear at two key points during the mini-lessons to provide motivation:  
* **Beginning of Lesson:** The mascot will "poke in" from the side of the screen at the start of each mini-lesson with a motivational quote pulled from a `starting-lesson-message.csv` file.
* **Midway Point:** The mascot will reappear roughly halfway through the mini-lesson with a motivational quote pulled from a `midway-lesson-message.csv` file.
* **Display Behavior:** The mascot overlays on the side of the screen and never appears in front of or blocks the main content card/box containing the mini-lesson.
* The mascot and its message will disappear after a few seconds  
  * **Completion Celebration:** Upon completion (as shown in `mini-lesson-ex-3.PNG`), the user will see a celebration screen with "Mathalicious!" or "Mathnificant!" message before being automatically redirected back to the main landing page.  
* **Progression Display:**  
  * Upon returning to the landing page after completing a mini-lesson, the completed card will slide down and be marked with a "COMPLETED\!" status, as seen in `landing-2-post-mini-lesson-complete.PNG`.  
  * **Review Functionality:** A "Review" button will appear on completed lesson cards, allowing students to replay completed lessons.
  * **Review Access Limitation:** Once a student progresses to the next lesson, they can no longer access the mini-games of previous lessons.
  * The next mini-lesson in the sequence will automatically take the top position, ready for the child to begin.  
* **Lesson Completion Pop-up:**  
  * After a student completes all five mini-lessons within a single lesson, a pop-up will appear with the message: "Lesson Complete\! Great Job\! Ready to go to the next lesson?" and a "Let's Go\!" button.  
  * Clicking this button will advance the student to the next lesson.

### **4.4. Student Progression and Placement**

* **Initial Placement:** 
  * **First-Time Users:** Students will be placed at Lesson 1, Mission 1 of their assigned grade level based on their math placement score from the Timeback LMS.
  * **Returning Users:** Students will continue from their exact previous position, unless their grade placement has been updated.
* **Grade Placement Verification (Phase 3 Implementation):** Every time a user opens the application, the system will check if their current grade level placement matches their previous session:
  * **Same Grade:** Student continues from exact previous position (lesson, mission, mini-lesson)
  * **Grade Level Updated:** Student is automatically moved to Lesson 1, Mission 1 of the new grade level
* **Progression Rules:**
  * **Mission Progression:** Students must complete all lessons in a mission (in order) to advance to the next mission
  * **Grade Progression:** Students must complete all missions in a grade to advance to the next grade level
  * **External Grade Advancement:** Grade level progression can only occur via external assessment results stored in Timeback (students cannot advance grades by completing in-app content alone)
* **Seamless Progression:** The application must remember the student's exact position (mini-lesson, lesson, mission, and grade) and direct them to that specific point every time they open the application. The internal data structure for this will be `{ grade: [number], mission: [number], lesson: [number], miniLesson: [number] }`.

### **4.5. Game/Activity Content and Nature**

* **Design Consistency:** The mini-lessons will have a consistent visual style across different grades, with a "exactly the same" graphical appearance. The complexity and content of the math problems will increase for higher grades.  
* **Activity Type:** The mini-lessons are best described as a "fun format for doing math problems" rather than traditional games. They are "little games" that are "not too complex" and feature "some animation, but barely," resembling a "picture" or a "PowerPoint." For the most part they are just simple math problems, though some are interactive games that involve dragining items, filling out blanks, etc.  
* **Example Problem:** A typical problem might be multiplying by 8 (scale 1 to 8\) to find the length of a frame, with the correct answer being 40\.

### **4.6. Badges Feature**

* **Badges Page:** A dedicated page, accessible from the `Badges` link in the sidebar, will display all badges a student has earned.  
* **Badge Earning Criteria:** The application will award badges for completing every 10 lessons (equivalent to 50 mini-lessons total).
* **Badge Notifications:** When a badge is earned, a small pop-up notification will appear on the landing page ("Next Up" page) after completing the qualifying mini-lesson.
* **Badge Persistence:** Badges are stored permanently with the student profile and remain accessible across sessions and grade level changes.
* **Timeback Integration:** The system will also integrate with Timeback for XP and rewards beyond the badge system.

## **5\. UI Guide**

The design of the application features a soft, playful neumorphic aesthetic that creates a tactile, child-friendly learning environment. The interface uses gentle shadows, raised and inset elements, and smooth animations to make every interaction feel like touching soft, malleable materials. This creates an engaging, lovable experience that invites exploration and learning.

### **5.1. General Design Theme**

* **Design Philosophy:** Soft neumorphic design with elements that appear to be gently extruded from or pressed into the background, creating a three-dimensional, tactile experience.
* **Color Palette:** 
  * **Primary Colors:** Bright yellow (`#F9D342` - slightly desaturated for better contrast), light backgrounds (`#F5F5F5`), and rich green (`#4CAF50`)
  * **Brand Colors:** Vibrant Zearn colors including orange, blue, purple, and pink, all with improved contrast ratios
  * **Neutral Tones:** Soft grays and off-whites for backgrounds and muted elements
* **Typography:** Clean Inter font family with enhanced spacing and readability for young users. Font weights range from medium to bold for better hierarchy.
* **Shadows & Depth:** Subtle inner and outer shadows create the neumorphic effect:
  * **Raised Elements:** Cards, buttons, and interactive components with soft highlights and shadows
  * **Inset Elements:** Input areas, progress bars, and pressed states with inverted shadow effects
  * **Colored Shadows:** Brand-colored shadows that match the element's theme (blue shadows for blue elements, etc.)
* **Border Radius:** Generous rounded corners (16px-20px) throughout for a soft, friendly appearance
* **Animations:** Smooth, bouncy transitions with gentle scaling effects and color changes
* **Background:** Subtle radial gradient pattern with very low opacity brand colors for texture without distraction

### **5.2. Page-Specific UI**

#### **A. Main Landing Page**

* **Header:** 
  * **Design:** Soft neumorphic header with gradient background and raised appearance
  * **Logo:** Zearn "Z" in a rounded, elevated container with brand-colored neumorphic shadow
  * **Typography:** Bold, tracking-adjusted "ZEARN" text
  * **Mobile:** Responsive hamburger menu with neumorphic styling
* **Sidebar:**
  * **Background:** Soft gradient from background to secondary colors with inset appearance
  * **User Info Section:** 
    * Contained in a raised card with gradient background
    * "Hi [Student Name]" with sparkle icon for delight
    * School name in muted text
    * "View Progress →" link with hover color transitions
  * **Navigation:** 
    * Neumorphic buttons that change from soft/inset to highlighted/raised based on active state
    * `Next Up` button uses navigation variant (yellow gradient with dark text for contrast)
    * `Badges` button uses soft variant when inactive
  * **Footer:** Small inset container with calendar icon and "Today's Learning" text
* **Main Content Area:**
  * **Background:** Large white container with soft neumorphic raised shadow
  * **Progress Indicator:** 
    * Raised container with gradient background
    * Step indicators: Circular elements with neumorphic effects
    * Completed steps: Green gradient with raised appearance and slight scale
    * Current step: Blue gradient with gentle pulse animation (2.5s duration to avoid strobing)
    * Future steps: Inset appearance with hover effects
    * Progress connectors: Small raised or inset bars between steps
  * **Lesson Cards:** 
    * **Active Cards:** Soft gradient backgrounds with subtle brand colors, raised neumorphic shadows
    * **Hover Effects:** Gentle scaling (1.02x) and enhanced colored shadows
    * **Graphics:** Lesson type icons with neumorphic effects and hover scaling
    * **Badges:** Brand-colored with proper contrast (yellow badges use dark text)
    * **Buttons:** "Start" button with blue gradient and white text for maximum contrast
  * **Completed Cards:** Muted gradient with inset appearance to show completion
  * **Learning Objective:** Card with gradient background, raised appearance, and interactive hover effects

#### **B. Mini-Lesson Page**

* **Header:** 
  * **Design:** Gradient background with neumorphic raised effect
  * **Logo:** Enhanced Zearn logo with hover scaling animation
  * **Lesson Title:** Contained in inset container with gradient background
  * **Sign Out:** Soft variant button for non-primary action
* **Game Background:** 
  * **Preserved Purple Gradient:** The beautiful purple-to-pink gradient background is maintained for mini-lessons
  * **Content Cards:** High-contrast white cards with strong neumorphic shadows for clear content separation
* **Interactive Elements:**
  * **Buttons:** Consistent neumorphic styling with appropriate variants (start, complete, etc.)
  * **Progress Elements:** Number blocks and math elements with raised appearance
  * **Answer Options:** Interactive elements with hover and active states
* **Progress Bar:** 
  * **Container:** Inset background with muted appearance
  * **Progress Fill:** Orange gradient with raised effect and smooth transitions
  * **Animation:** 700ms smooth easing for satisfying feedback
* **Completion Screen:**
  * **Celebration:** Maintained celebratory design with enhanced neumorphic elements
  * **Buttons:** Consistent styling with the rest of the application

### **5.3. Neumorphic Design System**

#### **Component States:**
* **Default:** Soft raised appearance with subtle shadows
* **Hover:** Gentle lift effect (2px translation) with enhanced shadows
* **Active/Pressed:** Inset appearance with inverted shadows
* **Disabled:** Reduced opacity with maintained neumorphic effects

#### **Color-Coded Elements:**
* **Yellow Elements:** Navigation buttons, primary actions (with dark text for contrast)
* **Blue Elements:** Start buttons, current progress indicators
* **Green Elements:** Completed states, success indicators
* **Purple Elements:** Special lessons, brand elements
* **Orange Elements:** Lesson types, progress fills

#### **Responsive Behavior:**
* **Mobile:** All neumorphic effects scale appropriately
* **Touch Targets:** Generous sizing (44px minimum) with clear visual feedback
* **Spacing:** Fluid spacing that adapts to screen size while maintaining visual hierarchy

### **5.4. Accessibility & Contrast**

* **Text Contrast:** All text meets WCAG AA standards with improved contrast ratios
* **Color Combinations:** Eliminated problematic white-on-yellow combinations
* **Animation:** Reduced motion options respected, gentle animations that don't cause eye strain
* **Focus States:** Clear focus indicators with neumorphic styling
* **Touch Feedback:** Immediate visual feedback for all interactive elements

This neumorphic design creates a warm, inviting learning environment where children feel like they're interacting with physical, tactile learning materials rather than flat digital interfaces.

## **6\. Implementation Strategy**

This project will be implemented in a new, clearly defined four-phase approach. The immediate goal is to create a functional MVP for the first 10 lessons of Grade 1, Mission 1.

### **Phase 1: Dynamic Content Loading with JSON Prototype**

*   **Objective:** Build the skeletal UI and functionality for the four core mini-lesson types, making them capable of rendering content dynamically.
*   **Scope:**
    *   Implement the user interface and game logic for "Blast Off!", "Bonds!", "Story Time!", and "Sprint".
    *   Develop a data-loading mechanism that reads from a local JSON file (`public/data/lesson1.json`) to populate the mini-lessons.
    *   Ensure all four mini-lesson types are fully functional using the JSON data structure.
*   **Rationale:** This approach allows for rapid front-end development and testing of the game mechanics in parallel with the finalization of the complex QTI XML data format.

### **Phase 2: Transition to QTI XML**

*   **Objective:** Convert the data source from JSON to the required QTI-compliant XML format and update the application to parse it.
*   **Scope:**
    *   Define and create the final QTI v3 XML structure that corresponds to the initial JSON prototype (`lesson1.json`).
    *   Refactor the application's data-loading functions to fetch and parse the QTI XML files instead of JSON.
    *   Map the parsed XML data to the existing front-end components to ensure the mini-lessons function identically to the JSON prototype.

### **Phase 3: Core Feature Implementation**

*   **Objective:** Build out the remaining engagement and progression features required by the PRD.
*   **Scope:**
    *   **Motivational Mascot:** Implement the animated mascot that appears at the beginning and midway point of lessons.
    *   **Badge Earning Logic:** Implement the system for awarding badges upon completion of every 10 lessons.
    *   **Student Placement Logic:** Implement the rules for initial and returning user placement.
    *   **Progress Tracking & Reporting:** Implement the logic to track student progress and prepare it for reporting back to the Timeback LMS.

### **Phase 4: Timeback LMS Integration**

*   **Objective:** Connect the standalone application to the live Timeback LMS environment.
*   **Scope:**
    *   **Authentication:** Integrate with Timeback's authentication system.
    *   **Database Integration:** Connect to the Timeback database, using it as the source for the QTI XML data and for storing student progress.
    *   **LMS Endpoints:** Integrate with necessary Timeback endpoints, such as Caliper for XP rewards and OneRoster for student data.

## **7\. Technical Specifications (To be detailed later)**

This section will be populated once the API specifications for the Timeback LMS are finalized. It will include detailed information about API endpoints, request/response formats, and authentication protocols.

## **8\. Risks and Mitigation**

* **Risk: Fragile User Matching:** The initial plan to match users by first and last names is unreliable and could lead to data discrepancies.  
  * **Mitigation:** We will use a unique student ID provided by the Timeback LMS for all user-related data synchronization. This will be a primary requirement for the OneRoster integration.  
* **Risk: Timeback API Delays:** The project's phased approach is contingent on the Timeback APIs being ready for integration in Phase 4. If they are not, this could cause a significant project delay.  
  * **Mitigation:** The development team will continue to build out a robust, self-contained front-end in Phases 1-3, which will allow us to showcase the user experience and iterate on the UI while awaiting backend readiness.  
* **Risk: Complex XML to QTI Formatting:** The process of creating a QTI v3 compliant XML structure is complex and must be precise for the LMS to interpret it correctly.  
  * **Mitigation:** In Phase 2, we will develop a robust XML structure based on the QTI specification and our defined JSON data types. The structure will be validated before proceeding to the implementation of the parsing logic.

## **9\. Current Implementation Status**

This section documents the current state of the application and identifies critical work needed before proceeding with the new implementation plan.

### **9.1. Completed Implementation**

**✅ Complete UI Infrastructure & Design System**
* React 18 + Vite development environment with TypeScript
* TailwindCSS configuration with custom Zearn brand colors (`--zearn-yellow`, `--zearn-orange`, `--zearn-blue`, `--zearn-green`, `--zearn-purple`, `--zearn-pink`)
* Comprehensive neumorphic design system with soft shadows, raised/inset effects, and child-friendly aesthetics
* ShadCN UI component library fully integrated with 40+ pre-built components
* Responsive design infrastructure with mobile (`useIsMobile` hook) and desktop layouts
* Custom animations and transitions (bounce-in, float, pulse-slow, slide-in)

**✅ Main Application Architecture**
* React Router setup with proper routing structure
* Main Dashboard component serving as the application entry point
* Component-based architecture with clear separation of concerns
* Mock data structures for students and lessons
* State management using React hooks (`useState`, `useEffect`)

**✅ Student Dashboard Interface (Landing Page)**
* **Header Component (`ZearnHeader.tsx`):** Zearn branding, logo, and navigation elements
* **Sidebar Navigation (`ZearnSidebar.tsx`):** Student info display, "Next Up" and "Badges" navigation buttons
* **Mobile Sidebar (`MobileSidebar.tsx`):** Responsive mobile navigation
* **Progress Indicator (`ProgressIndicator.tsx`):** Visual step tracking (A, B, C, D, E) with completion states
* **Lesson Cards (`LessonCard.tsx`):** Interactive cards for different lesson types with graphics and start buttons
* **Learning Objective (`LearningObjective.tsx`):** Display of current lesson objectives
* **Mock Data Integration:** Student name (Daniel), school (Alpha School), lesson progression

**✅ Mini-Lesson Interface & Navigation Flow**
* **Complete Mini-Lesson Component (`MiniLessonInterface.tsx`):** Full-screen lesson interface with 5-step progression
* **Lesson Flow Logic:** Navigation from dashboard → mini-lesson → back to dashboard
* **Progress Tracking:** Real-time progress bar and step indicators
* **Completion Celebration:** "Zearned it!" completion screen with automatic redirect
* **State Management:** Proper handling of lesson completion, progress updates, and navigation

**✅ Visual Design Implementation**
* **Lesson Type Graphics:** Custom visual elements for Number Gym, Blast, Learning Lab, Tower of Power
* **Color-Coded Lesson Types:** Each lesson type has distinct brand colors and styling
* **Neumorphic Effects:** Raised, inset, and colored shadow effects throughout
* **Brand Consistency:** Zearn color palette properly implemented across all components
* **Accessibility Considerations:** Proper contrast ratios and touch target sizing

**✅ Badges System Foundation**
* **Badges Page Structure:** Basic placeholder page accessible from sidebar
* **Navigation Integration:** Proper routing between home and badges views
* **UI Framework:** Ready for badges display and earning logic

### **9.2. Current Data Structure & Mock Implementation**

**Student Data Structure:**
```typescript
const mockStudent = {
  name: "Daniel",
  school: "Alpha School", 
  currentLesson: "1",
  currentStep: 1, // A=1, B=2, C=3, D=4, E=5
  completedSteps: [] as number[]
};
```

**Lesson Data Structure:**
```typescript
const allLessons = [
  {
    id: "number-gym-1",
    title: "Number Gym", 
    description: "Add and Subtract Small Numbers",
    type: "number-gym" as const,
    step: 1 // Step A
  },
  // ... 4 more lessons for steps B, C, D, E
];
```

### **9.3. Critical Issue: Hard-Coded Mini-Lesson Content**

**⚠️ BLOCKING ISSUE FOR CONTENT GENERATION**

The current mini-lesson implementation in `MiniLessonInterface.tsx` contains completely hard-coded content that must be replaced before implementing either content generation approach:

**Current Hard-Coded Implementation:**
* **Fixed 5-Step Structure:** All mini-lessons follow the same "Make 15" math problem (8 + 7 = 15)
* **Static JSX Content:** Each step (1-5) is hard-coded as conditional JSX elements
* **No Dynamic Loading:** Zero capability to load content from external sources
* **Single Lesson Type:** Only supports one specific lesson format

**Specific Hard-Coded Elements:**
* Step 1: Welcome message with 10 visual blocks
* Step 2: Counting exercise with grouped blocks (8 + 7)
* Step 3: Math equation presentation (8 + 7 = ?)
* Step 4: Answer reveal (8 + 7 = 15)
* Step 5: Celebration message with emoji

**Content Location:** Lines 96-178 in `src/components/MiniLessonInterface.tsx`

### **9.4. Required Pre-Content Generation Work**

**🔥 CRITICAL: Content System Restructure (Required for Phase 1)**

Before proper implementation of the new phased plan can begin, the following restructure is essential:

**1. Dynamic Content Loading Architecture**
*   Replace hard-coded JSX in `MiniLessonInterface.tsx` with a fully dynamic content rendering system.
*   Create flexible content data structures that can accommodate the four specified mini-lesson types.
*   Implement a content loader service that can fetch and parse the `lesson1.json` file for the Phase 1 prototype. This service will later be adapted for QTI XML in Phase 2.
*   Design a flexible rendering system capable of handling different question types (multiple choice, drag-and-drop, etc.).

**2. Content Data Structure Design**
*   Finalize the JSON schema for lesson content to support the four mini-lesson types as detailed in `_docs/mini_lesson_description.md`.

**3. Question Type Abstraction**
*   Create reusable question components for the various interaction models:
    *   Multiple choice questions
    *   Fill-in-the-blank inputs
    *   Drag-and-drop interactions
    *   Answer validation logic

**4. Content Management System**
*   Establish a clear file-based content loading system for the Phase 1 JSON prototype.
*   Ensure the system includes content validation and error handling.
*   Build a scalable structure that anticipates the future transition to QTI XML.

### **9.5. Ready for Integration**

**✅ Infrastructure Ready for Phased Integration**
*   Component architecture supports easy data source swapping (JSON to XML).
*   State management ready for real student data.
*   UI components designed for dynamic content.
*   Routing system ready for authentication flow.
*   Progress tracking system ready for Timeback integration.

**✅ Design System Complete**
*   All PRD UI requirements implemented.
*   Neumorphic design system matches specifications.
*   Mobile and desktop responsiveness achieved.
*   Brand consistency with Zearn requirements.

### **9.6. Next Immediate Priority**

**🎯 IMMEDIATE ACTION REQUIRED: Content System Restructure**

The hard-coded mini-lesson content is the primary blocker for Phase 1. The dynamic content restructure must be completed first, as it will:

1.  **Enable Phase 1:** Provide the foundation for the JSON-based prototype.
2.  **Support All 4 Mini-Lesson Types:** Create the flexible architecture needed for each game.
3.  **Prepare for Phase 2:** Build the system that will eventually be adapted for QTI XML parsing.
4.  **Allow Content Scaling:** Enable the 10 lessons required for the MVP.

**Without this restructure, the new implementation plan cannot begin, as there is currently no mechanism to dynamically load and render the different lesson types from a data source.**

This content system restructure is the immediate next development task.


----


# **Product Requirements Document: Zearn-based Math Learning Application**

## **1. Introduction**

This document outlines the updated requirements for a Zearn-based math learning application designed for children. The application will function as a new feature within the larger Timeback Learning Management System (LMS). Its primary purpose is to provide a seamless, engaging, and personalized learning experience for students from Kindergarten through 8th grade by presenting a progression of mini-lessons and games based on their current skill level. The application will be a web-based portal integrated directly into the Timeback LMS, with a strong focus on a child-centric user experience. **This project is focused exclusively on building the child's view, with no parent view required in this phase.**

## **2. Project Goals**

* **Seamless Integration:** Perfectly integrate with the Timeback LMS for data exchange, authentication, and user progression. This includes matching student roster data and dynamically updating a student's learning path.  
* **Engaging User Experience:** Create a simple, intuitive, and visually appealing interface for young learners.  
* **Personalized Learning Path:** Dynamically present lessons and games based on a student's placement scores and ongoing progress, as managed by the Timeback LMS.  
* **Gamified Learning:** Incorporate rewards, badges, and other gamification elements to motivate students by utilizing Timeback's systems.  
* **Agile Development:** Implement a phased approach, starting with front-end development and dummy data, then migrating to a backend that integrates with Timeback and generated content.

## **3. Scope**

The scope of this project includes the development of a web application built with React and Vite for Alpha School that will:

* Integrate with the Timeback LMS.  
* Display a personalized learning dashboard for each student.  
* Host and launch interactive mini-lessons and games.  
* Track and report student progress back to the Timeback LMS.  
* Provide a "Badges" page to showcase earned accomplishments.  
* Handle the ingestion of generated content and store it in a structured format for delivery to the user.

## **4. Key Features & Requirements**

### **4.1. Technical Integration with Timeback LMS**

* **Data Flow:** The application must be capable of a two-way data flow with the Timeback LMS.  
  * **Inbound Data:** The application will receive student data (name, school, current grade level, lesson/mission placement, etc.) from Timeback upon launch.  
  * **Outbound Data:** The application will send data back to Timeback regarding completed mini-lessons, completed lessons, and any earned rewards or XP.  
* **Authentication:** The application will not have its own sign-in process. A child's authenticated status will be handled by the Timeback LMS. Clicking the "Zearn" link within Timeback will launch our application and pass the necessary user data.  
* **Student Roster and Placement:** The integration will use a unique student ID from Timeback to obtain the class roster. Students will be automatically placed in the correct grade, mission, lesson, and mini-lesson based on their math placement scores from Timeback, with no manual configuration required by a teacher or administrator. The placement score will set a student to the first mini-lesson of the first lesson of the first mission for their assigned grade.  
* **Endpoints & Rewards System:**  
  * **QTI:** The QTI endpoint within Timeback may be used to store the questions and content for mini-lessons.  
  * **Caliper:** The Caliper endpoints within Timeback must be "hooked up" to reward students with experience points when they complete activities on the site.

### **4.2. Content Strategy & Game Structure**

This section outlines the updated content generation strategy for the project.

* **Content Hierarchy:** The application will be built to support a structured learning path with the following hierarchy. The data structure must accommodate this even though we are only building the child's view.  
  * **Grade Levels:** K-8  
  * **Missions:** Approximately 6 per grade, representing major learning objectives.  
  * **Lessons:** Approximately 30 per mission.  
  * **Mini-Lessons/Games:** Approximately 5 per lesson.  
* **Content Generation Strategy:**  
  * **Primary Path: JSON to XML Conversion:** The primary method for content generation will be to create skeletal frameworks of reusable mini-lesson types and populate them with content from JSON files, which will then be converted to XML for delivery.  
    * **Developer Note:** For each of the mini-lesson types, refer to the corresponding guide for implementation details:  
      * **Number Gym:** A speed or skill-based math game. Refer to `number-gym-guide.md`.  
      * **Blast:** A fill-in-the-blank math question game. Refer to `blast-off-guide.md`.  
      * **Learning Lab:** An interactive drag-and-drop problem-solving game. Refer to `learning-lab-guide.md`.  
      * **Tower of Power:** A TBD math game with a specific mechanic. Refer to `tower-of-power-guide.md`.  
      * **Lesson Recap:** A quiz that recaps a mix of math problems (fill-in-the-blank, drag-and-drop, multiple choice). Refer to `lesson-recap.md`.

### **4.3. User Interface and Navigation**

* **Entry Point:** Children will access the application by clicking a "Zearn" link within the Timeback LMS.  
* **Main Landing Page (Homepage):**  
  * The page will have a clean and inviting design.  
  * **Left Sidebar:**  
    * Displays the student's name (`Hi Daniel`).  
    * Displays the student's school (`Alpha School`).  
    * Navigation links: A highlighted `Next Up` button to return to the main lesson card, and a simpler `Badges` button to navigate to the badges page.  
  * **Main Content Area (Big White Box):**  
    * The main lesson card will be prominently displayed at the top.  
    * This card will show a graphic of the mini-lesson, its title, and a `Start` button.  
    * Below the main card, a small informational section will describe the lesson's learning objective (e.g., "Adding & Subtracting").  
* **Mini-Lesson Page:**  
  * Clicking the `Start` button on the main card will redirect the user to the mini-lesson interface, as shown in `mini-lesson-ex.PNG`, `mini-lesson-ex-2.PNG`, and `mini-lesson-ex-3.PNG`.  
  * This page will first display instructions for the mini-game/lesson before presenting the interactive content.  
  * The user interface of the mini-lessons will primarily involve clicking buttons to perform actions, such as answering multiple-choice, short-response, or fill-in-the-blank questions.  
    * **Motivational Mascot:** A fun, cute little mascot will appear at two key points during the mini-lessons to provide motivation:  
* **Beginning of Lesson:** The mascot will "poke in" from the side of the screen at the start of each mini-lesson with a motivational quote pulled from a `starting-lesson-message.csv` file.
* **Midway Point:** The mascot will reappear roughly halfway through the mini-lesson with a motivational quote pulled from a `midway-lesson-message.csv` file.
* **Display Behavior:** The mascot overlays on the side of the screen and never appears in front of or blocks the main content card/box containing the mini-lesson.
* The mascot and its message will disappear after a few seconds  
  * **Completion Celebration:** Upon completion (as shown in `mini-lesson-ex-3.PNG`), the user will see a celebration screen with "Mathalicious!" or "Mathnificant!" message before being automatically redirected back to the main landing page.  
* **Progression Display:**  
  * Upon returning to the landing page after completing a mini-lesson, the completed card will slide down and be marked with a "COMPLETED!" status, as seen in `landing-2-post-mini-lesson-complete.PNG`.  
  * **Review Functionality:** A "Review" button will appear on completed lesson cards, allowing students to replay completed lessons.
  * **Review Access Limitation:** Once a student progresses to the next lesson, they can no longer access the mini-games of previous lessons.
  * The next mini-lesson in the sequence will automatically take the top position, ready for the child to begin.  
* **Lesson Completion Pop-up:**  
  * After a student completes all five mini-lessons within a single lesson, a pop-up will appear with the message: "Lesson Complete! Great Job! Ready to go to the next lesson?" and a "Let's Go!" button.  
  * Clicking this button will advance the student to the next lesson.

### **4.4. Student Progression and Placement**

* **Initial Placement:** 
  * **First-Time Users:** Students will be placed at Lesson 1, Mission 1 of their assigned grade level based on their math placement score from the Timeback LMS.
  * **Returning Users:** Students will continue from their exact previous position, unless their grade placement has been updated.
* **Grade Placement Verification (Phase 3 Implementation):** Every time a user opens the application, the system will check if their current grade level placement matches their previous session:
  * **Same Grade:** Student continues from exact previous position (lesson, mission, mini-lesson)
  * **Grade Level Updated:** Student is automatically moved to Lesson 1, Mission 1 of the new grade level
* **Progression Rules:**
  * **Mission Progression:** Students must complete all lessons in a mission (in order) to advance to the next mission
  * **Grade Progression:** Students must complete all missions in a grade to advance to the next grade level
  * **External Grade Advancement:** Grade level progression can only occur via external assessment results stored in Timeback (students cannot advance grades by completing in-app content alone)
* **Seamless Progression:** The application must remember the student's exact position (mini-lesson, lesson, mission, and grade) and direct them to that specific point every time they open the application. The internal data structure for this will be `{ grade: [number], mission: [number], lesson: [number], miniLesson: [number] }`.

### **4.5. Game/Activity Content and Nature**

* **Design Consistency:** The mini-lessons will have a consistent visual style across different grades, with a "exactly the same" graphical appearance. The complexity and content of the math problems will increase for higher grades.  
* **Activity Type:** The mini-lessons are best described as a "fun format for doing math problems" rather than traditional games. They are "little games" that are "not too complex" and feature "some animation, but barely," resembling a "picture" or a "PowerPoint." For the most part they are just simple math problems, though some are interactive games that involve dragining items, filling out blanks, etc.  
* **Example Problem:** A typical problem might be multiplying by 8 (scale 1 to 8) to find the length of a frame, with the correct answer being 40.

### **4.6. Badges Feature**

* **Badges Page:** A dedicated page, accessible from the `Badges` link in the sidebar, will display all badges a student has earned.  
* **Badge Earning Criteria:** The application will award badges for completing every 10 lessons (equivalent to 50 mini-lessons total).
* **Badge Notifications:** When a badge is earned, a small pop-up notification will appear on the landing page ("Next Up" page) after completing the qualifying mini-lesson.
* **Badge Persistence:** Badges are stored permanently with the student profile and remain accessible across sessions and grade level changes.
* **Timeback Integration:** The system will also integrate with Timeback for XP and rewards beyond the badge system.

## **5. Implementation Strategy**

This project will be implemented in three distinct phases due to the concurrent development of the Timeback LMS by other teams.

### **Phase 1: Standalone User Experience (Front-End First)**

* **Objective:** Create the core user experience as a standalone web application.  
* **Scope:** For this phase, we will not implement a full authentication system.  
* **Core Functionality:** The focus is on building out the basic front-end functionality. This includes the ability for a user to navigate the landing page and work through a couple of games to complete an entire lesson, which consists of five mini-lessons or mini-games.  
* **Data Handling:** Initially, we will use simple dummy questions and data stored in a local JSON file to ensure a smoother transition to a more standardized format later. These dummy questions will represent various problem types (e.g., multiple-choice, fill-in-the-blank, drag-and-drop) and will be structured to align with the expected input for the five mini-lesson types (Number Gym, Blast, Learning Lab, Tower of Power, Lesson Recap). The local JSON file will contain a structured representation of a sample mission's content, including multiple lessons, each with its five mini-lessons. This JSON will be directly imported or fetched by the React application during development, allowing the front-end to render dynamic content without a live backend connection.  
* **Rationale:** This phased approach is necessary because the back-end development is not yet complete. It is crucial to acknowledge this limitation in documentation (PRD and implementation phases) and understand that the data structure will need to be changed later to accommodate the final back-end.

### **Phase 2: Data Structure Standardization (QTI XML)**

* **Objective:** Transition from dummy data to a standardized format for questions.  
* **Standard:** We will focus on making the questions conform to the QTI standard using XML.  
* **Functionality:** We will develop the capability for parsing this XML data into presentable questions that can be displayed on the screen. It is noted from previous discussions that QTI is an endpoint that stores question banks, and questions might be stored in this format.

### **Phase 3: Back-End Integration**

* **Objective:** Connect the developed front-end to the larger system and integrate core functionalities.  
* **Database Connection:** The front-end (built in Phase 1) will be connected to the Timeback database.  
* **Event Integration:** Events such as XP (experience points) rewards and authentication will be integrated. From previous discussions, it's known that all sign-in and authentication will occur when children first sign into Timeback, meaning the Zearn-based application itself does not require authentication to be built. Also, XP, rewards, and clocks are existing features within Timeback that need to be incorporated. Caliper is also identified as a set of endpoints used to reward students with XP points upon completing activities.  
* **User Roster Integration:** The final step in this phase will be getting user information from the Timeback roster. This is dependent on other team members completing their fixes, as the entire Timeback setup is currently not fully functional. Timeback has a single roster endpoint that tracks students, and the system will pull this data by using a unique student ID.

**Note:** The four major integrations to be concerned with in Phase 3 are: Auth, QTI, OneRoster, & Caliper.

## **6. Current Implementation Status**

This section documents the current state of the application and identifies critical work needed before proceeding with content generation.

### **6.1. Completed Implementation**

**✅ Complete UI Infrastructure & Design System**
* React 18 + Vite development environment with TypeScript
* TailwindCSS configuration with custom Zearn brand colors
* Comprehensive neumorphic design system with soft shadows, raised/inset effects, and child-friendly aesthetics
* ShadCN UI component library fully integrated with 40+ pre-built components
* Responsive design infrastructure with mobile and desktop layouts
* Custom animations and transitions

**✅ Main Application Architecture**
* React Router setup with proper routing structure
* Main Dashboard component serving as the application entry point
* Component-based architecture with clear separation of concerns
* Mock data structures for students and lessons
* State management using React hooks

**✅ Student Dashboard Interface (Landing Page)**
* Header Component: Zearn branding, logo, and navigation elements
* Sidebar Navigation: Student info display, "Next Up" and "Badges" navigation buttons
* Mobile Sidebar: Responsive mobile navigation
* Progress Indicator: Visual step tracking (A, B, C, D, E) with completion states
* Lesson Cards: Interactive cards for different lesson types with graphics and start buttons
* Learning Objective: Display of current lesson objectives
* Mock Data Integration: Student name (Daniel), school (Alpha School), lesson progression

**✅ Mini-Lesson Interface & Navigation Flow**
* Complete Mini-Lesson Component: Full-screen lesson interface with 5-step progression
* Lesson Flow Logic: Navigation from dashboard → mini-lesson → back to dashboard
* Progress Tracking: Real-time progress bar and step indicators
* Completion Celebration: "Zearned it!" completion screen with automatic redirect
* State Management: Proper handling of lesson completion, progress updates, and navigation

**✅ Visual Design Implementation**
* Lesson Type Graphics: Custom visual elements for Number Gym, Blast, Learning Lab, Tower of Power
* Color-Coded Lesson Types: Each lesson type has distinct brand colors and styling
* Neumorphic Effects: Raised, inset, and colored shadow effects throughout
* Brand Consistency: Zearn color palette properly implemented across all components
* Accessibility Considerations: Proper contrast ratios and touch target sizing

**✅ Badges System Foundation**
* Badges Page Structure: Basic placeholder page accessible from sidebar
* Navigation Integration: Proper routing between home and badges views
* UI Framework: Ready for badges display and earning logic

### **6.2. Critical Issue: Hard-Coded Mini-Lesson Content**

**⚠️ BLOCKING ISSUE FOR CONTENT GENERATION**

The current mini-lesson implementation in `MiniLessonInterface.tsx` contains completely hard-coded content that must be replaced before implementing the content generation approach:

**Current Hard-Coded Implementation:**
* **Fixed 5-Step Structure:** All mini-lessons follow the same "Make 15" math problem (8 + 7 = 15)
* **Static JSX Content:** Each step (1-5) is hard-coded as conditional JSX elements
* **No Dynamic Loading:** Zero capability to load content from external sources
* **Single Lesson Type:** Only supports one specific lesson format

**Specific Hard-Coded Elements:**
* Step 1: Welcome message with 10 visual blocks
* Step 2: Counting exercise with grouped blocks (8 + 7)
* Step 3: Math equation presentation (8 + 7 = ?)
* Step 4: Answer reveal (8 + 7 = 15)
* Step 5: Celebration message with emoji

### **6.3. Required Pre-Content Generation Work**

**🔥 CRITICAL: Content System Restructure (Required Before Phase 1B)**

Before implementing the content generation approach, the following restructure is essential:

**1. Dynamic Content Loading Architecture**
* Replace hard-coded JSX with dynamic content rendering
* Create content data structures that can accommodate multiple lesson types
* Implement content loader service for JSON files (Phase 1), later QTI XML (Phase 2)
* Design flexible rendering system for different question types

**2. Content Data Structure Design**
* JSON schema for lesson content that supports all 5 mini-lesson types:
  * **Number Gym:** Speed/skill-based math games
  * **Blast:** Fill-in-the-blank questions
  * **Learning Lab:** Drag-and-drop problem-solving
  * **Tower of Power:** TBD math game mechanics
  * **Lesson Recap:** Mixed question types (multiple choice, drag-and-drop, fill-in-the-blank)

**3. Question Type Abstraction**
* Create reusable question components for:
  * Multiple choice questions
  * Fill-in-the-blank inputs
  * Drag-and-drop interactions
  * Visual block manipulations
  * Answer validation logic

**4. Content Management System**
* File-based content loading for Phase 1 (JSON files)
* Content validation and error handling
* Progress tracking for dynamic content
* Scalable structure for future QTI XML integration

**Recommended Implementation Approach:**
1. **Create Content Interface:** Define TypeScript interfaces for lesson content structure
2. **Build Content Loader:** Service to fetch and parse lesson data from JSON files
3. **Refactor MiniLessonInterface:** Replace hard-coded content with dynamic rendering
4. **Create Sample Content:** JSON files with multiple lesson examples
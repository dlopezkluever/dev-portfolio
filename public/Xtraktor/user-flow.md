# **Insight Extractor \- User Flow Document**

### **1\. Introduction**

This document describes the step-by-step user journey for the **Insight Extractor** desktop application. The flow is designed to be simple, intuitive, and focused on minimizing user effort while maximizing the value of the automated summary.

It covers two primary scenarios:

1. Processing a new audio/video file.  
2. Accessing and reviewing a previously generated summary from the history.

### **2\. Core User Flow: Processing a New Recording**

This is the primary path a user will take to get a summary from a new file.

**Step 1: Launching the Application**

* The user launches the Insight Extractor application from their Windows Start Menu or desktop shortcut.  
* The application opens to a clean, single window. The main area prominently features a **drag-and-drop zone**, clearly labeled with text like "Drop your meeting, lesson, or speech file here."  
* A side panel displays the "History" view, which may be empty on the first launch.

**Step 2: Submitting a File**

* The user locates their recording file (e.g., `Project-Kickoff.mp4` or `History-Lecture.mp3`) in their file explorer.  
* They **drag the file** from the explorer and **drop it** onto the designated zone in the application window.

**Step 3: Background Processing (App in Focus)**

* Immediately upon file drop, the UI updates to provide feedback:  
  * The main content area is replaced with a **"Processing..."** status message and a loading animation (like a spinner).  
  * The text might read: "Uploading and transcribing your file. This may take a few minutes..."  
* **Behind the scenes:** The Electron app sends the file to the local n8n workflow's webhook. The n8n workflow begins its multi-step process (transcription \-\> AI analysis \-\> saving to Firebase). The user does not see or interact with n8n directly.

**Step 4: Viewing the Results**

* Once the n8n workflow is complete, it sends the structured JSON data back to the Electron app.  
* The app's UI automatically updates, replacing the "Processing..." message with the formatted results:  
  * **Summary:** A clean, bulleted list of key points.  
  * **Action Items / Key Points:** A checklist-style section.  
  * **Full Transcript:** The complete, searchable text of the recording.  
* A new entry for this summary simultaneously appears at the top of the "History" panel.

### **3\. Secondary User Flow: Accessing History**

This flow describes how a user interacts with previously processed content.

**Step 1: Opening the App**

* The user launches the application.  
* The app automatically fetches the list of past summaries from Firebase and populates the **History panel** with the titles (e.g., original filenames).

**Step 2: Selecting a Past Summary**

* The user scans the History panel and **clicks on the title** of a previous summary they wish to review (e.g., `Project-Kickoff.mp4`).

**Step 3: Displaying the Archived Result**

* The main content area instantly updates to display the selected summary's data (summary, action items, and transcript), which is pulled directly from Firebase.  
* The interaction is fast, as no new processing is required. The user can easily switch between different historical summaries.

### **4\. Background Interaction**

This describes the user experience when the app is not the primary focus.

* After a user drops a file to begin processing (Core Flow, Step 3), they are free to **minimize the application window** or switch to another task (e.g., check email, browse the web).  
* The n8n workflow continues to run **independently in the background**.  
* The user can continue their work without interruption.  
* When they return to the Insight Extractor app later, they will find that the "Processing..." message has been replaced by the final, formatted summary. This asynchronous operation is a key benefit of the desktop app/n8n architecture.


# **Project Requirements Document: Xtrakor v2.0**

### **1\. Project Vision & Introduction**

**1.1. The Problem:** Professionals, students, and lifelong learners consume a vast amount of content daily through various media: meetings, lectures, dense books, technical articles, and insightful speeches. This consumption is often passive, leading to poor knowledge retention. The core challenge is bridging the gap between simply consuming information and actively understanding, synthesizing, and retaining it.

**1.2. The Solution:** **"Xtractor"** is a multi-modal knowledge tool for Windows. It moves beyond simple summarization to become a personal learning engine. The application allows users to extract key insights from both spoken content (audio/video) and written content (books/articles). Crucially, it then empowers users to synthesize this knowledge by generating custom quizzes based on multiple sources, transforming passive consumption into active, reinforced learning.

**1.3. Alignment with FlowGenius Rubric:**

* **Solving a personal productivity problem:** It automates the extraction of knowledge and provides a novel solution for knowledge retention.  
* **Leveraging intelligent automation:** It uses **n8n** for three distinct, powerful background workflows (Audio, Text, and Quiz Synthesis).  
* **Harnessing desktop advantages:** It provides a unified native interface for handling local files (audio, PDFs, epubs) and managing a persistent knowledge base.  
* **Creating something you'll actually use:** It's a practical tool for anyone looking to learn more effectively from the content they already consume.

### **2\. Target Platform & Technology Stack**

* **Operating System:** Windows  
* **Desktop Framework:** **Electron** (using HTML, CSS, JavaScript/TypeScript)  
* **AI Workflow Framework:** **n8n** (running locally)  
* **Backend/Database:** **Firebase** (Firestore for the central knowledge base)  
* **AI Integration:** OpenAI API (Whisper, GPT series) and/or Claude API.

### **3\. Core Features & User Stories**

The application will be structured as a central hub leading to three primary tools.

#### **Feature 1: Application Hub & Navigation**

* **Description:** On launch, the user is presented with a clean landing page to select their desired tool.  
* **User Story:** As a user, I want to see a clear choice between "Xtract from Audio/Video," "Xtract from Text," and "Quiz Yourself" so I can easily navigate to the function I need.

#### **Feature 2: Audio/Video Xtraktion**

* **Description:** The tool for processing spoken content.  
* **User Story:** As a user, I want to drag and drop an audio or video file to receive a full transcript, a concise summary, and a list of key points or action items.

#### **Feature 3: Text Xtraktion (Book & Article Mode)**

* **Description:** A powerful tool for distilling written content. It will handle both short articles and entire books, including those with dense or archaic prose.  
* **User Stories:**  
  * As a user reading an online article, I want to paste its URL to get a summary and its core arguments extracted.  
  * As a user tackling a dense book (PDF/ePub), I want to upload the file and receive a chapter-by-chapter summary and key quotes, plus an overall thesis, to help me grasp complex ideas.

#### **Feature 4: Knowledge Synthesis (Quiz Engine)**

* **Description:** The capstone feature that turns extracted information into a learning tool.  
* **User Story:** As a user, I want to select multiple items from my saved history (e.g., a book chapter and a related speech) and have the app generate a single, comprehensive quiz that tests my ability to connect ideas between the sources.

#### **Feature 5: Persistence & Knowledge Hub**

* **Description:** A centralized backend powered by Firebase that stores all extracted content.  
* **User Story:** As a user, I want all my extracted insights from all sources saved automatically, so I can review them later and use them as the foundation for creating quizzes.

### **4\. n8n Workflow Designs**

The application will rely on three distinct n8n workflows.

#### **Workflow A: Audio/Video Xtraction**

* **Trigger:** Webhook receives an audio/video file from the Electron app.  
* **Process:**  
  1. **Transcribe:** The file is sent to the Whisper API.  
  2. **Analyze:** The transcript is sent to a GPT/Claude node for summarization and action item extraction into a JSON format.  
  3. **Store:** The resulting JSON is saved as a new document in the `xtractions` Firestore collection.  
  4. **Respond:** The JSON is sent back to the app for immediate display.

#### **Workflow B: Text Xtraktion**

* **Trigger:** Webhook receives a file (PDF/ePub) or a URL.  
* **Process:**  
  1. **Route:** A Switch node directs the flow based on input type.  
  2. **Extract Text:**  
     * **URL:** A "Scrape Website" node extracts article text.  
     * **File:** An "Execute Command" or similar node extracts all text from the file.  
  3. **Chunk (for books):** If the text is large, a "Split in Batches" node breaks it into manageable chunks (e.g., chapters).  
  4. **Analyze:**  
     * **Articles:** The text is sent to an AI node for a one-shot summary.  
     * **Books:** The workflow loops through each chunk, sending it to an AI node for a chapter summary. After the loop, all chapter summaries are sent to another AI node to generate the overall thesis.  
  5. **Store & Respond:** The final structured JSON (with chapter breakdowns for books) is saved to Firestore and sent back to the app.

#### **Workflow C: Quiz Engine**

* **Trigger:** Webhook receives an array of document IDs from the app (corresponding to items in Firestore).  
* **Process:**  
  1. **Fetch Data:** The workflow loops through the IDs and uses the Firebase node to retrieve the summary/key points for each selected item.  
  2. **Aggregate:** All the fetched text is combined into a single context block.  
  3. **Generate Quiz (AI):** The aggregated block is sent to an AI node with a detailed prompt to create a synthesized quiz (multiple choice and short response) in Markdown format.  
  4. **Respond:** The final Markdown text is sent back to the Electron app for rendering.

### **5\. Success Criteria**

The v2.0 project will be considered successful when:

* The user can choose between the three primary tools from a landing page.  
* The Text Xtraction workflow can successfully process both URLs and large PDF files, providing chapter-by-chapter summaries for books.  
* The Firebase backend correctly stores and retrieves data from all extraction types.  
* The Quiz Engine can successfully generate a synthesized quiz from at least two different sources (e.g., one audio, one text).  
* The entire application is intuitive and provides a cohesive user experience
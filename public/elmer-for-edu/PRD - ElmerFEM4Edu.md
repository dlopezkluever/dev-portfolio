# **Product Requirement Document: Educational Web Platform for FEA using Dockerized Elmer FEM**

**Document Version:** 1.1  
**Updated:** 2025-01-24 - Added explicit local deployment model clarifications 

## **1\. Introduction**

This Product Requirement Document (PRD) outlines the features and technical specifications for an "Educational Web Platform for FEA using Dockerized Elmer FEM." The primary goal is to create a simplified, local web interface that enables high school students to learn Finite Element Analysis (FEA) using the Elmer FEM software. By leveraging Docker, we aim to provide an accessible and contained learning environment, eliminating the complexities of cloud deployment and external authentication.

This document serves as a comprehensive guide for the development team (specifically, for a Junior Engineer like Cursor AI) to build the specified features. It includes detailed requirements, technical considerations, and references to the Elmer FEM codebase and architecture as described in the "ElmerFEM-DeepWiki-Guide.md"

## **1.1 Deployment Model: Local Educational Platform**

**⚠️ CRITICAL: This is a LOCAL-ONLY educational platform, NOT a cloud-based service.**

### **Student/Teacher Setup Process:**
1. **Clone GitHub Repository**: Students and teachers download the ElmerFEM repository containing all educational platform components
2. **Run Docker Compose**: Execute `docker compose up` to start all services locally
3. **Access Web Interface**: Open browser to `http://localhost:3000` (frontend) and `http://localhost:8000` (backend API)
4. **Complete Learning Activities**: All simulations run locally within Docker containers

### **Key Deployment Characteristics:**
- ✅ **No Internet Required**: Once cloned, runs completely offline
- ✅ **No User Accounts**: No authentication, login, or user management systems
- ✅ **No Cloud Services**: No external databases, APIs, or cloud deployment
- ✅ **No Data Persistence**: Session-based usage, results stored temporarily in container
- ✅ **Self-Contained**: All templates, materials, and scenarios included in repository
- ✅ **Privacy Safe**: No student data leaves the local machine
- ✅ **Classroom Ready**: Same experience on every computer, easy lab setup

### **Educational Benefits of Local Deployment:**
- **Teacher Control**: Complete control over software versions and content
- **Consistent Environment**: Identical experience across all student machines
- **No Setup Complexity**: Simple `git clone` + `docker compose up` workflow
- **Offline Capability**: Works without internet connectivity after initial setup
- **Cost-Free**: No ongoing hosting, licensing, or subscription costs
- **Privacy Compliant**: Meets all educational privacy requirements automatically

**This deployment model is fundamental to the educational mission and must be maintained throughout all development decisions.**

## **1.2 Project Summary: What We're Building**

We are developing a **student-friendly web interface** that sits on top of the existing Dockerized Elmer FEM software distribution. This platform transforms the traditional, complex Elmer FEM experience into an **intuitive, streamlined learning environment** specifically designed for first-time FEA users.

**Core Concept:** Instead of students struggling with command-line interfaces, complex SIF file syntax, and technical setup procedures, they will interact with Elmer FEM through a modern web browser featuring:

* **Large, Clear Interface Elements:** Bigger buttons, prominent actions, and unambiguous navigation designed for educational use
* **Guided Workflow:** Step-by-step progression from template selection through results analysis, eliminating guesswork
* **Educational Abstraction:** Complex FEA concepts presented through simplified forms, pre-built templates, and visual feedback
* **Real-time Guidance:** Immediate validation, progress monitoring, and contextual help throughout the simulation process

**The Transformation:** We're taking the powerful but intimidating Elmer FEM software and wrapping it in an educational web interface that makes finite element analysis accessible to high school students. The underlying computational engine remains unchanged—we're simply providing a more approachable pathway to FEA learning through modern web UI/UX design principles.

**Success Metric:** A student with basic physics knowledge should be able to complete their first successful FEA simulation within 15 minutes of launching the platform, understanding what they've accomplished and why the results matter.

## **2\. Project Goals & Vision**

* **Vision:** To empower high school students with an intuitive, hands-on introduction to Finite Element Analysis by creating a modern, **locally-deployed** educational web interface that makes the powerful Elmer FEM software accessible to beginners.  

* **Primary Goal:** Transform the learning barrier from "too complex to start" to "easy to begin, engaging to continue" by building a web-based educational layer on top of Dockerized Elmer FEM that runs **entirely on the student's local machine**.

* **Key Educational Objectives:**  
  * **Accessibility First:** Replace command-line complexity with large, clear buttons and guided workflows that welcome first-time FEA users
  * **Learning-Focused Design:** Provide immediate feedback, educational templates, and visual progress indicators that reinforce FEA concepts  
  * **Streamlined Workflow:** Enable students to complete meaningful FEA simulations through an intuitive step-by-step process
  * **Educational Abstraction:** Hide technical complexity (SIF files, command-line operations) behind a user-friendly web interface while maintaining computational accuracy

* **Technical Implementation Goals:**  
  * Utilize Docker to encapsulate Elmer FEM, ensuring consistent and isolated **local environments** across different student setups
  * Create a React-based web interface with educational UI/UX principles (large interactive elements, clear visual feedback) served **locally via Docker**
  * Implement real-time simulation monitoring with progress indicators and status updates **within the local container environment**
  * Provide pre-built simulation templates and material libraries **embedded in the repository** for immediate hands-on learning
  * Develop interactive 3D result visualization for engaging analysis and understanding **running in the local browser**
  * Integrate with the Elmer FEM Fortran codebase for at least three enhanced features (progress monitoring, material library support, input validation) **without requiring external services**

## **3\. Target Audience**

**Primary Users:** High school students (ages 15-18) encountering Finite Element Analysis for the first time. These users typically have:
* Basic physics and mathematics knowledge but no prior FEA experience
* Comfort with web browsers and standard computer interfaces
* Limited patience for complex setup procedures or technical barriers
* Strong preference for visual, interactive learning over text-based instruction

**Secondary Users:** High school physics and engineering teachers who need:
* An accessible tool to introduce FEA concepts without extensive technical training
* Reliable, consistent software behavior across different classroom environments  
* Clear educational progression from simple to more complex simulations
* Minimal setup and maintenance requirements

**Design Imperative:** The platform must prioritize **ease of first use** over advanced functionality. Every interface element should assume the user has never seen FEA software before and guide them toward successful completion of their first simulation.

## **4\. Architecture Overview**

The platform creates an **educational web interface layer** on top of the existing Dockerized Elmer FEM distribution, running **entirely on the user's local machine** without requiring cloud services, external databases, user authentication, or complex installation procedures.

**Three-Layer Local Educational Architecture:**

* **Educational Web Interface (Frontend):** A React.js single-page application designed specifically for student learning, featuring large buttons, clear visual feedback, guided workflows, and educational abstractions that hide technical complexity. **Served locally at http://localhost:3000**
* **Educational API Layer (Backend):** A Python-based server (Flask or FastAPI) that translates student-friendly web interactions into proper Elmer FEM input files (SIF generation), manages Docker container operations, and provides real-time feedback on simulation progress. **Running locally at http://localhost:8000**  
* **Computational Engine:** The unmodified Elmer FEM software suite running within a Docker container, providing the same reliable finite element analysis capabilities used by professional engineers worldwide. **Executing locally within isolated Docker environment**

**Local Educational Workflow:** Student Local Browser → Local Frontend (localhost:3000) → Local Backend API (localhost:8000) → Local Docker Container → ElmerSolver Execution → Local Results Storage → Local Browser Visualization

**Key Benefits:** 
- **Complete Local Control:** Students and teachers have full control over their learning environment
- **Privacy Guaranteed:** No student data ever leaves the local machine
- **Classroom Ready:** Consistent experience across all computers with simple setup
- **Cost-Free Operation:** No ongoing hosting or service costs for educational institutions
- **Offline Capable:** Works without internet connectivity after initial repository clone

## **5\. Features and Requirements**

This section details the six core features to be implemented. Each feature includes its description, user stories, technical requirements, and specific integration points with the Elmer FEM codebase.

### **5.1. Feature 1: Local Docker-Based Web User Interface (Core Enabler)**

* **Description:** This is the foundational feature. It involves building a simple React frontend for user input and a Python backend to manage communication with a Docker container running ElmerSolver. The web UI will provide forms for basic FEA parameters, the backend will generate Solver Input Files (SIF), execute Docker commands, and parse results. Students will download ElmerFEM, build the Docker image, and run the web interface locally.  
* **User Stories:**  
  * As a student, I want to download and set up the Elmer FEM educational platform on my local machine easily.  
  * As a student, I want to input basic simulation parameters through a web form instead of directly editing SIF files.  
  * As a student, I want to initiate an Elmer FEM simulation via a button click on the web interface.  
* **Technical Requirements:**  
  * **Frontend (React.js):**  
    * Develop a responsive web interface for inputting simulation parameters.  
    * Initial forms should support basic 2D heat transfer or structural mechanics problems (e.g., defining simple geometries, applying loads/temperatures, setting boundary conditions).  
    * Implement client-side validation for form inputs (e.g., ensuring numerical values are entered where expected).  
    * Display a clear "Run Simulation" button.  
  * **Backend (Python \- Flask/FastAPI):**  
    * Create API endpoints to receive simulation parameters from the frontend.  
    * Implement logic to dynamically generate Elmer SIF files based on the received parameters. Refer to Elmer's "Input and Output" section in the Deep Wiki Guide, specifically how SIF files define `Simulation parameters`, `Constants`, `Body definitions`, `Material properties`, `Equation definitions`, `Boundary conditions`, `Initial conditions`, and `Solver specifications`. (`fem/src/Lists.F90` and `fem/src/ModelDescription.F90` are relevant for input handling and loading).  
    * Implement functionality to execute Docker commands: `docker build -f docker/elmer.dockerfile -t elmerfem .` (for initial setup) and `docker run -v <local_working_dir>:/usr/src/elmerfem/work elmerfem ElmerSolver case.sif` (for running simulations). The backend must manage temporary directories for SIF files and output.  
    * Provide API endpoints to retrieve simulation results and status.  
  * **Docker Integration:**  
    * Utilize the existing `docker/elmer.dockerfile` provided by ElmerFEM for building the container image.  
    * Ensure proper volume mounting (`-v`) between the local host (where SIFs are generated and results are stored) and the Docker container's working directory.  
* **Fortran Interaction:** This feature orchestrates the execution of `ElmerSolver.F90` within the Docker container by providing it with the necessary SIF files and processing its generated output. While no direct modification to `ElmerSolver.F90` is required for this base functionality, it is the primary consumer of its execution.

### **5.2. Feature 2: Simulation Progress Bar / Real-Time Monitoring**

* **Description:** Implement a progress bar in the web interface that shows the real-time status of a running simulation. This requires modifying `ElmerSolver.F90` to output intermediate progress data, which the Python backend can then stream to the React frontend via an API and WebSockets.  
* **User Stories:**  
  * As a student, I want to see the progress of my simulation so I know it's still running and how far along it is.  
  * As a student, I want to be notified if the simulation encounters an error or completes successfully.  
* **Technical Requirements:**  
  * **Fortran Modification (`ElmerSolver.F90`):**  
    * Identify key loops within `ElmerSolver.F90` (e.g., time stepping loop, nonlinear iteration loop, matrix assembly loop as described in "Solver Framework" and "Matrix Assembly Process" sections of Deep Wiki Guide).  
    * Add `WRITE` statements within these loops to output progress information (e.g., current time step, iteration number, convergence status, percentage complete) to a designated log file or standard output.  
    * Consider using Elmer's internal timing utilities (`CPUTime()`, `RealTime()`) from `fem/src/ElmerSolver.F90` for more detailed progress reporting.  
  * **Backend (Python):**  
    * Implement a mechanism (e.g., tailing the log file, capturing standard output from Docker) to continuously read the progress data generated by `ElmerSolver.F90`.  
    * Set up a WebSocket endpoint to stream this progress data to the frontend in real-time.  
    * Handle parsing of the Fortran output to extract meaningful progress metrics.  
  * **Frontend (React.js):**  
    * Establish a WebSocket connection to the backend.  
    * Display a dynamic progress bar or status messages based on the received data.  
    * Show completion or error messages when the simulation finishes.  
* **Fortran Interaction:** **Direct modification to `ElmerSolver.F90`** to expose internal simulation progress. This fulfills one of the three required Fortran codebase interactions.

### **5.3. Feature 3: Default Material Library**

* **Description:** Create a pre-defined JSON file containing properties for common materials relevant to introductory FEA (e.g., steel, aluminum, simple plastics). The web interface will allow students to select materials from this library. `ModelDescription.F90` and `Types.F90` will need to be extended to load these default materials into the simulation.  
* **User Stories:**  
  * As a student, I want to easily select common materials for my simulation without having to manually enter properties.  
  * As a student, I want to see the properties of a selected material before applying it to my simulation.  
* **Technical Requirements:**  
  * **Data File:**  
    * Create a `materials.json` file in a well-defined location (e.g., `backend/data/materials.json`).  
    * Each material entry should include properties relevant to basic heat transfer or structural problems (e.g., Young's Modulus, Poisson's Ratio, Thermal Conductivity, Density).  
  * **Frontend (React.js):**  
    * Implement a dropdown or selection component for materials.  
    * When a material is selected, display its properties in a read-only format.  
  * **Backend (Python):**  
    * Create an API endpoint to serve the `materials.json` file to the frontend.  
    * When generating the SIF file (Feature 1), ensure that the selected material properties are correctly written into the `Material` section of the SIF, following Elmer's SIF syntax.  
  * **Fortran Modification (`ModelDescription.F90`, `Types.F90`):**  
    * Modify `ModelDescription.F90` (which handles model definition and input file loading) to recognize and correctly parse material properties when they are defined in the SIF using a new, simplified keyword or structure for default materials.  
    * Ensure `Types.F90` (which defines core data structures like `Model_t`) can properly store these material properties within the `Model_t` structure. This might involve extending existing data structures or adding new ones if necessary to accommodate the simplified material definitions.  
* **Fortran Interaction:** **Direct modification to `ModelDescription.F90` and `Types.F90`** to support loading of simplified material definitions from SIF files. This fulfills the second required Fortran codebase interaction.

### **5.4. Feature 4: Basic SIF Input Validation**

* **Description:** Implement client-side (JavaScript) and server-side (Python) validation for the basic SIF inputs provided by the user in the web interface. The validation rules will be based on `SOLVER.KEYWORDS` rules from Elmer FEM. Display clear warnings in the React interface if inputs are invalid. Interface with `Lists.F90` to access or verify these validation rules.  
* **User Stories:**  
  * As a student, I want to know immediately if I've entered an invalid value.  
  * As a student, I want clear messages explaining what input is expected.  
* **Technical Requirements:**  
  * **Frontend (React.js):**  
    * Implement client-side validation for all input fields (e.g., number ranges, required fields, valid string formats).  
    * Display immediate, user-friendly error messages next to invalid input fields.  
  * **Backend (Python):**  
    * Implement server-side validation for all incoming simulation parameters. This is crucial as client-side validation can be bypassed.  
    * Reference Elmer's `SOLVER.KEYWORDS` (as mentioned in the Deep Wiki Guide under "Physics Modules Hierarchy") to understand expected parameter types and ranges for the chosen basic solvers (e.g., "Heat Equation" or "Stress Analysis").  
    * Return specific error messages to the frontend if validation fails.  
  * **Fortran Interaction (`Lists.F90`):**  
    * Investigate `Lists.F90` (specifically the `Input and Output` section of the Deep Wiki Guide) to understand how Elmer processes input parameters and keywords.  
    * While direct modification to `Lists.F90` might be complex, the requirement is to *interface* with it. This means leveraging existing structures or functions in `Lists.F90` (or related input parsing modules) to *extract* or *verify* the expected data types and constraints for SIF keywords. This could involve calling a Fortran function that returns metadata about expected input, or carefully analyzing the Fortran source to derive validation rules for the Python backend.  
* **Fortran Interaction:** **Interfacing with `Lists.F90`** to derive or verify validation rules for SIF inputs. This fulfills the third required Fortran codebase interaction.

### **5.5. Feature 5: Pre-Built Simulation Templates**

* **Description:** Provide a selection of simplified, pre-configured simulation templates (e.g., "Heat Transfer in a Rod," "Simple Cantilever Beam," "Plate with Hole Stress Analysis"). Students can select a template, and the web interface will pre-fill parameters or guide them through minimal inputs, generating the appropriate SIF file for ElmerSolver.  
* **User Stories:**  
  * As a student, I want to quickly set up a common FEA problem without starting from scratch.  
  * As a student, I want to understand the basic parameters for a given simulation type.  
* **Technical Requirements:**  
  * **Data File:**  
    * Create a `templates.json` file in the backend (e.g., `backend/data/templates.json`).  
    * Each template entry should include:  
      * `name`: Display name (e.g., "Heat Transfer in a Rod").  
      * `description`: Brief explanation of the problem.  
      * `predefined_parameters`: A JSON object containing default values for inputs (e.g., rod length, boundary temperatures, material ID).  
      * `required_inputs`: A list of parameters the user *must* provide (if any).  
      * `sif_structure_template`: A partial SIF structure or a clear mapping for the backend to generate the full SIF.  
  * **Backend (Python):**  
    * Create an API endpoint to serve the `templates.json` file to the frontend.  
    * When a template is selected, the backend will use its `sif_structure_template` and user inputs to generate the final SIF file.  
  * **Frontend (React.js):**  
    * Display a "Select Template" section with a list of available templates.  
    * When a template is selected, dynamically populate the input forms with `predefined_parameters` and highlight `required_inputs`.  
* **Fortran Interaction:** None directly. This feature primarily involves Python backend logic for SIF generation and React frontend design.

### **5.6. Feature 6: Basic Interactive 3D Result Visualization**

* **Description:** After a simulation completes, the web interface will display basic interactive 3D visualizations of the results (e.g., temperature distribution, stress contours). The Python backend will parse Elmer's result files (e.g., VTK files) and serve relevant data to the React frontend, which can use a JavaScript library (like Plotly.js or a simple Three.js setup) for rendering.  
* **User Stories:**  
  * As a student, I want to see a visual representation of my simulation results.  
  * As a student, I want to be able to rotate and zoom the 3D result to examine it from different angles.  
* **Technical Requirements:**  
  * **Backend (Python):**  
    * Identify the standard output format for Elmer FEM results (e.g., VTK files, as mentioned in "Input and Output" section of Deep Wiki Guide).  
    * Implement a Python parser to read and extract relevant data (e.g., node coordinates, element connectivity, scalar field values like temperature or displacement) from these result files.  
    * Transform the extracted data into a JSON format suitable for web visualization.  
    * Create an API endpoint to serve this processed result data to the frontend.  
  * **Frontend (React.js):**  
    * Integrate a JavaScript 3D visualization library (e.g., Plotly.js for simple contour plots, or Three.js for more custom 3D rendering).  
    * Render the parsed simulation results as a basic 3D model with color mapping for scalar fields (e.g., red for high temperature, blue for low temperature).  
    * Implement basic interactive controls: rotate, zoom, pan.  
    * Ensure a placeholder or loading indicator is displayed while results are being fetched and rendered.  
* **Fortran Interaction:** None directly. This feature consumes the output files generated by ElmerSolver, which is written in Fortran.

## **6\. Technical Stack**

* **Frontend:** React.js, HTML, CSS (Tailwind CSS recommended for rapid UI development).  
* **Backend:** Python (Flask or FastAPI), potentially with libraries for file parsing (e.g., `meshio` for VTK).  
* **Containerization:** Docker.  
* **Communication:** REST APIs (for initial requests), WebSockets (for real-time progress).  
* **Visualization Libraries:** Plotly.js or Three.js (for 3D rendering).

## **7\. Development Guidelines for Cursor AI (Junior Engineer)**

* **Code Structure:** Maintain a clear separation of concerns between frontend, backend, and Docker-related scripts.  
* **Modularity:** Break down features into smaller, manageable components/functions.  
* **Error Handling:** Implement robust error handling on both frontend and backend to provide meaningful feedback to the user and for debugging.  
* **Logging:** Ensure sufficient logging in the backend to trace simulation execution and potential issues.  
* **Testing:** Implement unit tests for backend logic (SIF generation, result parsing) and consider basic integration tests for the full stack.  
* **Documentation:** Document your code thoroughly with comments. Explain your thought process, especially for Fortran modifications and complex logic.  
* **AI Utilization:** Document how you use AI tools (like Cursor AI itself, or others) for code analysis, generation, and optimization. Specifically, note how AI helps in understanding Fortran code, generating React components, Python API wrappers, and Docker configurations.

## **8\. Success Metrics**

* All six features are implemented and functional.  
* The web platform can successfully run at least two basic FEA simulations (e.g., heat transfer, structural mechanics) from template selection.  
* The progress bar accurately reflects simulation status.  
* Basic input validation prevents common errors.  
* 3D visualization accurately displays results.  
* The solution is easily deployable locally via Docker.  
* At least three features demonstrate interaction with the Fortran codebase.

## **9\. Future Considerations (Out of Scope for this PRD)**

* More advanced physics solvers.  
* Complex geometry creation.  
* Mesh generation within the web UI.  
* **Cloud deployment options** (platform must remain local-only for educational use)
* **User authentication and multi-user support** (not needed for local educational deployment)
* **External databases or APIs** (all data must remain local for privacy and simplicity)
* **Internet-dependent features** (platform must work offline after initial setup)

**Note:** The local deployment model is a core architectural decision that should not be changed. Cloud deployment would introduce complexity, cost, privacy concerns, and infrastructure dependencies that conflict with the educational mission of this platform.


NOTE: Project was pivoted midway through to focus on implementong the visoin detailed from here on out (everything below):

# **Final Product Requirements Document: Educational Web Platform for ElmerFEM**

**Document Version:** 2.0  
**Date:** January 2025  
**Purpose:** Master Document for Complete Platform Development

---

## **Table of Contents**

1. [Executive Summary](#1-executive-summary)
2. [Project Vision & Educational Goals](#2-project-vision--educational-goals)
3. [Current State Analysis](#3-current-state-analysis)
4. [Current Problems & Technical Debt](#4-current-problems--technical-debt)
5. [Phase 1: Complete Simulation Workflows (Immediate)](#5-phase-1-complete-simulation-workflows-immediate)
6. [Phase 2: Educational Content & Assessment](#6-phase-2-educational-content--assessment)
7. [Phase 3: Extended Features & Polish](#7-phase-3-extended-features--polish)
8. [Technical Architecture & Implementation Details](#8-technical-architecture--implementation-details)
9. [Docker Container Strategy](#9-docker-container-strategy)
10. [UI/UX Design Specifications](#10-uiux-design-specifications)
11. [Testing & Quality Assurance](#11-testing--quality-assurance)
12. [Success Metrics & Validation](#12-success-metrics--validation)

---

## **1. Executive Summary**

The Educational Web Platform for ElmerFEM transforms the powerful but complex ElmerFEM finite element analysis software into an accessible, student-friendly learning tool. This document serves as the comprehensive guide for completing the platform development, addressing current technical challenges, and implementing the full educational vision.

**Core Mission:** Enable high school students to learn Finite Element Analysis (FEA) through hands-on experimentation using a simplified, visually-engaging web interface that runs entirely on their local machines.

**Current Status:** 74% of planned tasks completed, with core infrastructure operational but critical workflow integration pending.

**Critical Path:** Resolve Docker container communication issues, integrate mesh preview with simulation workflow, and implement real-time progress streaming to deliver a complete educational experience.

---

## **2. Project Vision & Educational Goals**

### **2.1 Educational Philosophy**

The platform embodies a **"Learning by Doing"** philosophy, where students discover FEA concepts through interactive experimentation rather than passive instruction. Every interface element, workflow decision, and feature prioritization serves this educational mission.

### **2.2 Target Audience**

**Primary Users:**
- **High School Students (Ages 15-18):** First-time FEA users with basic physics knowledge
- **Characteristics:** Limited patience for setup, strong preference for visual learning, need immediate feedback
- **Success Metric:** Complete first simulation within 15 minutes of launch

**Secondary Users:**
- **High School Teachers:** Need reliable, consistent software for classroom deployment
- **Requirements:** Zero maintenance, predictable behavior, educational documentation
- **Success Metric:** Deploy to 30-student lab in under 20 minutes

### **2.3 Core Educational Objectives**

1. **Demystify FEA:** Transform intimidating command-line tools into approachable visual interfaces
2. **Encourage Exploration:** Provide safe environment for experimentation with immediate visual feedback
3. **Build Intuition:** Connect abstract mathematical concepts to visual results students can understand
4. **Foster Confidence:** Guide students from simple examples to custom simulations progressively

### **2.4 Deployment Model**

**Strictly Local-Only Platform:**
- **No Cloud Services:** All computation happens on student's machine
- **No Authentication:** No user accounts, logins, or data tracking
- **No Internet Required:** Works completely offline after initial download
- **Privacy First:** No student data ever leaves their computer
- **Simple Setup:** `git clone` → `docker compose up` → Open browser

---

## **3. Current State Analysis**

### **3.1 Completed Components (Tasks 1-6, 9, 13-25)**

#### **3.1.1 Infrastructure & Toolchain (Tasks 1-3)**
- **✅ Repository Structure:** Frontend and backend workspaces integrated into ElmerFEM repository
- **✅ Docker Compose Environment:** Multi-service setup with backend, frontend, and ElmerFEM containers
- **✅ Backend Core API:** FastAPI service with job orchestration, async execution, and Docker wrapper
- **✅ Health Monitoring:** Container health checks and status endpoints operational

#### **3.1.2 Simulation Engine (Task 4)**
- **✅ SIF Generation:** Jinja2-based templating system for dynamic Solver Input File creation
- **✅ Physics Support:** Templates for heat transfer and structural mechanics simulations
- **✅ Parameter Mapping:** Robust conversion from UI inputs to ElmerFEM-compatible formats
- **✅ Unit Conversion:** Automatic handling of user-friendly units to SI units

#### **3.1.3 User Interface (Task 5)**
- **✅ React Frontend:** Clean neumorphism design with Tailwind CSS and daisyUI
- **✅ Form System:** Dynamic parameter forms with react-hook-form and Zod validation
- **✅ Navigation:** Home page, parameter forms, progress monitoring, and results display
- **✅ API Integration:** Axios-based client with proper error handling

#### **3.1.4 Material Library System (Task 6)**
- **✅ Material Database:** JSON-based storage with 8 predefined materials (Steel, Aluminum, Copper, etc.)
- **✅ Backend Service:** Material loading, validation, and API exposure
- **✅ Frontend Integration:** Material selector dropdown with properties modal
- **✅ SIF Integration:** Automatic injection of material properties into generated solver files

#### **3.1.5 Advanced Mesh Generation (Tasks 13-25)**
This represents our most sophisticated technical achievement, consolidating multiple tasks into a comprehensive mesh generation system:

**Core Fortran Library:**
- **✅ Educational Mesh Generator:** High-performance Fortran 2008 module with C interoperability
- **✅ Geometry Support:** Rectangle, Circle, Annulus, and L-shape mesh generation
- **✅ Mesh Quality:** Aspect ratio, skewness, and angle calculations with Laplacian smoothing
- **✅ Boundary Layers:** Adaptive element sizing with geometric progression (ratio 1.2)
- **✅ Performance:** Sub-2-second generation for meshes up to 160,000 elements

**Python Integration:**
- **✅ ctypes Bindings:** Clean Python wrapper for Fortran library
- **✅ Educational Mesh Service:** Backend service replacing temporary mesh generator
- **✅ Validation Layer:** Pydantic v2 models for geometry parameter validation
- **✅ File Generation:** ElmerFEM-compatible mesh files (header, nodes, elements, boundary)

**REST API Extensions:**
- **✅ Mesh Endpoints:** `/simulations/{id}/mesh` for generation, `/mesh/preview` for visualization
- **✅ WebSocket Support:** Real-time mesh generation status updates
- **✅ OpenAPI Documentation:** Complete API specification for mesh operations

**Frontend Visualization:**
- **✅ Geometry Input UI:** Visual shape selection with parameter controls
- **✅ Three.js Integration:** WebGL-based 3D mesh preview with quality heat maps
- **✅ Interactive Controls:** OrbitControls for rotation, zoom, and pan
- **✅ Redux State Management:** Consistent geometry parameter handling across components

#### **3.1.6 Fortran Modifications (Task 9)**
- **✅ Progress Instrumentation:** Modified ElmerSolver.F90 to emit parseable progress lines
- **✅ Conditional Output:** ProgressOutput flag for enabling/disabling progress reporting
- **⚠️ Docker Image Update:** Code changes complete but Docker image rebuild deferred

### **3.2 Current Capabilities**

**What Works Today:**
1. **Complete UI Flow:** Students can navigate from home → select simulation → configure parameters
2. **Material Selection:** Choose from 8 predefined materials with full property viewing
3. **Mesh Generation:** Create high-quality meshes for 4 geometry types with customizable density
4. **Mesh Visualization:** Interactive 3D preview with quality metrics and heat mapping
5. **Backend Processing:** Job submission, SIF generation, and basic result handling
6. **Docker Infrastructure:** All services defined and health-monitored

**What's Missing:**
1. **End-to-End Simulation:** Cannot complete full simulation due to container communication issues
2. **Integrated Workflow:** Mesh preview disconnected from simulation process
3. **Real-Time Progress:** WebSocket infrastructure incomplete
4. **Results Visualization:** No 3D FEA results display capability
5. **Educational Content:** No explanatory materials or assessment features

---

## **4. Current Problems & Technical Debt**

### **4.1 Critical Issue: Docker Container Communication**

**Problem Description:**
The backend service successfully detects the ElmerFEM container (`elmer_available: true`) but fails to execute simulations, resulting in "Server error" messages. This stems from a fundamental mismatch in how the backend communicates with the containerized ElmerFEM service.

**Root Causes:**
1. **Path Mapping Issues:** Backend generates files in local paths that don't map correctly to container volumes
2. **Workspace Volume Misconfiguration:** The shared workspace volume isn't properly synchronized
3. **Execution Context Mismatch:** Docker compose exec commands fail due to working directory issues
4. **Network Isolation:** Backend running outside Docker network can't properly orchestrate container

**Impact:**
- Students cannot run any simulations
- Material library works but serves no practical purpose
- Mesh generation completes but results aren't used
- Entire educational workflow blocked

### **4.2 Workflow Integration Gaps**

**Mesh Preview Isolation:**
- Mesh generation and preview exist as standalone features
- No connection between mesh creation and simulation execution
- Students must manually navigate between disconnected pages
- Loss of context and parameters between steps

**Missing User Journey:**
Currently, students experience:
1. Fill out form → 2. Click "Run Simulation" → 3. See error → 4. Dead end

Should experience:
1. Fill out form → 2. Click "Run Simulation" → 3. See mesh preview with progress → 4. View results

### **4.3 Incomplete Feature Integration**

**Task 7 (Fortran Material Library):** Not started
- ElmerFEM cannot read materials from our JSON library
- Requires MaterialLib.F90 module development
- Needs FSON JSON parser integration
- Critical for material library to actually affect simulations

**Task 8 (Input Validation):** Not started
- No validation against ElmerFEM's actual parameter constraints
- Students can submit invalid values that cause solver failures
- Requires KeywordsDump utility to extract validation rules

**Task 10 (Progress Streaming):** Not started
- Progress instrumentation complete but unused
- No WebSocket infrastructure for real-time updates
- Students see static progress bar with no actual information

**Task 11 (Results Visualization):** Not started
- No ability to parse VTK output files
- No 3D visualization of simulation results
- Students cannot see or understand their simulation outcomes

### **4.4 Technical Debt Summary**

1. **Architectural Mismatch:** Backend designed for Docker-to-Docker communication but running host-to-Docker
2. **Feature Silos:** Excellent individual components that don't form cohesive workflow
3. **Incomplete Fortran Integration:** Only 1 of 3 required Fortran modifications completed
4. **Missing Validation Layer:** No protection against invalid inputs
5. **No Real-Time Feedback:** Static UI with no live updates during simulation

---

## **5. Phase 1: Complete Simulation Workflows (Immediate)**

### **5.1 Fix Docker Container Communication**

**Objective:** Enable full simulation execution from UI through to results

**Approach 1: Unified Docker Deployment (Recommended)**
- Modify backend to run exclusively within Docker compose environment
- Ensure all services share same network and volume contexts
- Implement proper volume mounting for workspace synchronization
- Test with simple heat transfer simulation end-to-end

**Implementation Steps:**
1. Update `docker-compose.yml` to ensure backend runs inside Docker network
2. Fix volume mappings to share workspace between backend and elmer containers
3. Implement proper path translation for cross-container file access
4. Add integration tests to verify simulation execution

**Success Criteria:**
- Backend health check shows `elmer_available: true`
- Simulation submission returns job ID without errors
- ElmerSolver executes within container successfully
- Result files generated in shared workspace

### **5.2 Integrate Mesh Preview with Simulation Workflow**

**Objective:** Create unified mesh generation and progress monitoring page

**New Unified Page Design:**
```
┌─────────────────────────────────────────────────────────────┐
│  Simulation Progress & Mesh Visualization                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────────────────────┐ │
│  │ Progress Bar (25%)   │  │                              │ │
│  │ ▓▓▓▓▓░░░░░░░░░░░░░ │  │   [See Results] (disabled)   │ │
│  └─────────────────────┘  └──────────────────────────────┘ │
│                                                             │
│  Status: Generating mesh...                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ • Mesh generation started                            │   │
│  │ • Creating 5,000 elements                            │   │
│  │ • Applying quality optimization                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │              3D Mesh Visualization                   │   │
│  │                                                      │   │
│  │                 [Interactive                         │   │
│  │                  Three.js Mesh                       │   │
│  │                  Preview Here
            (how it is currently )]                       │   │
│  │                                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Mesh Quality Metrics:(how it is currently )          │   │
│  │ • Elements: 5,000                                    │   │
│  │ • Nodes: 2,651                                       │   │
│  │ • Max Aspect Ratio: 1.52                             │   │
│  │ • Quality Score: Excellent                           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Educational Info. (similar to it's current form ):  │   │
│  │                                                      │   │
│  │ Mesh generation is the first step in FEA. The       │   │
│  │ computer divides your shape into small elements...   │   │
│  │ [Read more about meshing ▼]                         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Implementation Requirements:**
1. **Merge Components:** Combine MeshPreview and ProgressPage into unified SimulationPage
2. **State Management:** Use Redux to maintain simulation state across components
3. **Conditional Rendering:** Show mesh during generation, maintain display during solving
4. **Educational Context:** Add expandable sections explaining each phase
5. **Result Navigation:** Enable "See Results" button only after completion

### **5.3 Implement Real-Time Progress Streaming (Task 10)**

**Objective:** Provide live feedback during simulation execution

**Backend Implementation:**
```python
# WebSocket endpoint for progress streaming
@app.websocket("/ws/simulations/{simulation_id}")
async def simulation_progress(websocket: WebSocket, simulation_id: str):
    await websocket.accept()
    
    # Subscribe to simulation progress events
    async for progress_event in monitor_simulation(simulation_id):
        await websocket.send_json({
            "type": "progress",
            "data": {
                "percentage": progress_event.percentage,
                "stage": progress_event.stage,
                "message": progress_event.message,
                "timestamp": progress_event.timestamp
            }
        })
```

**Frontend Implementation:**
```typescript
// React hook for simulation progress
export function useSimulationProgress(simulationId: string) {
    const [progress, setProgress] = useState<ProgressData>({
        percentage: 0,
        stage: 'initializing',
        messages: []
    });

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:8000/ws/simulations/${simulationId}`);
        
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setProgress(prev => ({
                percentage: data.data.percentage,
                stage: data.data.stage,
                messages: [...prev.messages, data.data.message]
            }));
        };

        return () => ws.close();
    }, [simulationId]);

    return progress;
}
```

**Progress Stages:**
1. **Initialization** (0-10%): Setting up workspace, validating parameters
2. **Mesh Generation** (10-30%): Creating geometry, generating elements
3. **Solver Preparation** (30-40%): Writing SIF file, preparing ElmerSolver
4. **Solving** (40-90%): Iterative solution with substep progress
5. **Post-Processing** (90-100%): Generating output files, preparing visualization

### **5.4 Develop Results Visualization Page (Task 12)**

**Objective:** Display simulation results with interactive 3D visualization

**Page Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  Simulation Results - Heat Transfer Analysis                 │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────────────────────┐ │
│  │ Simulation Summary  │  │ Actions:                     │ │
│  │ • Status: Complete  │  │ [Download Report] [New Sim]  │ │
│  │ • Runtime: 45s      │  └──────────────────────────────┘ │
│  │ • Converged: Yes    │                                    │
│  └─────────────────────┘                                    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                 3D Result Visualization               │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │                                                │  │   │
│  │  │         [Plotly 3D Mesh with                   │  │   │
│  │  │          Temperature Contours]                 │  │   │
│  │  │                                                │  │   │
│  │  │  Legend: ▓▓▓▓ 100°C  ░░░░ 20°C               │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │                                                      │   │
│  │  View: [Temperature] [Heat Flux] [Gradient]         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Key Findings:                                        │   │
│  │ • Maximum temperature: 98.5°C at right boundary      │   │
│  │ • Minimum temperature: 21.2°C at left boundary       │   │
│  │ • Heat flux: 2.5 kW/m² (uniform distribution)        │   │
│  │ • Steady state reached after 15 iterations           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Understanding Your Results:                          │   │
│  │                                                      │   │
│  │ The color gradient shows how heat flows through     │   │
│  │ your material. Red areas are hot, blue areas are    │   │
│  │ cold. The smooth transition indicates good thermal   │   │
│  │ conductivity... [Read more ▼]                       │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### **5.5 Report Download Feature**

**Objective:** Generate downloadable PDF reports with simulation details

**Report Contents:**
1. **Cover Page:** Student name, simulation title, date/time
2. **Input Summary:** All parameters, material properties, boundary conditions
3. **Mesh Visualization:** Three different angle captures of the mesh
4. **Results Visualization:** Three different angle captures of the results
5. **Data Tables:** Key numerical results in tabular format
6. **Educational Notes:** Brief explanation of what the results mean


### **5.6 Complete Workflow Integration**

**User Journey Implementation:**

1. **Parameter Form Submission:**
   - Validate all inputs
   - Submit to backend API
   - Receive job ID
   - Navigate to unified progress/mesh page

2. **Progress & Mesh Page:**
   - Immediately start mesh generation
   - Display real-time progress via WebSocket
   - Show 3D mesh preview once generated
   - Continue showing progress through solving phase
   - Enable "See Results" button upon completion

3. **Results Page:**
   - Load and parse VTU results
   - Display interactive 3D visualization, with metrics of calculations done in simulation, and a heat map option
   - Show key findings and educational content
   - Provide download options

**State Management:**
```typescript
// Redux slice for simulation workflow
const simulationSlice = createSlice({
    name: 'simulation',
    initialState: {
        currentJob: null,
        parameters: {},
        meshData: null,
        progress: { percentage: 0, stage: 'idle' },
        results: null,
        error: null
    },
    reducers: {
        startSimulation: (state, action) => {
            state.currentJob = action.payload.jobId;
            state.parameters = action.payload.parameters;
            state.progress = { percentage: 0, stage: 'initializing' };
        },
        updateProgress: (state, action) => {
            state.progress = action.payload;
        },
        setMeshData: (state, action) => {
            state.meshData = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
            state.progress = { percentage: 100, stage: 'complete' };
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.progress.stage = 'failed';
        }
    }
});
```

---

## **6. Phase 2: Educational Content & Assessment**

### **6.1 "Understanding FEA" Navigation Tab**

**Objective:** Provide comprehensive educational content about FEA principles

**Content Structure:**

#### **6.1.1 Introduction to FEA**
- What is Finite Element Analysis?
- Why engineers use FEA
- Real-world applications (bridges, aircraft, medical devices)
- Historical context and development

#### **6.1.2 Mathematical Foundations**
- **Discretization Concepts:**
  - Dividing continuous domains into finite elements
  - Shape functions and interpolation
  - Assembly of global system

- **Governing Equations:**
  - Heat Transfer: ∇·(k∇T) + Q = ρc∂T/∂t
  - Structural: ∇·σ + f = ρü
  - Detailed explanations with visual aids

#### **6.1.3 Heat Transfer Analysis**
- **Physical Principles:**
  - Conduction, convection, radiation
  - Fourier's law of heat conduction
  - Boundary conditions explained

- **Calculation Examples:**
  ```
  Heat Flux: q = -k × ∇T
  
  Where:
  q = heat flux (W/m²)
  k = thermal conductivity (W/m·K)
  ∇T = temperature gradient (K/m)
  ```

- **Interactive Demonstrations:**
  - Animated heat flow through materials
  - Effect of different conductivities
  - Steady-state vs. transient analysis

#### **6.1.4 Structural Mechanics**
- **Stress and Strain:**
  - Normal stress: σ = F/A
  - Strain: ε = ΔL/L
  - Hooke's Law: σ = E × ε

- **Types of Loading:**
  - Tension and compression
  - Bending and torsion
  - Combined loading scenarios

- **Failure Criteria:**
  - Von Mises stress
  - Maximum principal stress
  - Safety factors

#### **6.1.5 Mesh Quality & Convergence**
- **Element Types:**
  - Linear vs. quadratic elements
  - Triangular vs. quadrilateral
  - 2D vs. 3D elements

- **Quality Metrics:**
  - Aspect ratio importance
  - Skewness effects
  - Optimal element shapes

- **Convergence Studies:**
  - Why mesh refinement matters
  - h-refinement vs. p-refinement
  - Interpreting convergence plots

### **6.2 Interactive Quiz System**

**Objective:** Assess student understanding with engaging, educational quizzes

#### **6.2.1 Quiz Architecture**

**Question Pool Structure:**
```typescript
interface QuizQuestion {
    id: string;
    category: 'heat_transfer' | 'structural' | 'mesh' | 'general';
    difficulty: 'easy' | 'medium' | 'hard';
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    relatedConcept: string;
    visualAid?: string; // Path to diagram/image
}

// Example question pool
const questionPool: QuizQuestion[] = [
    {
        id: "ht_001",
        category: "heat_transfer",
        difficulty: "easy",
        question: "What is the SI unit of thermal conductivity?",
        options: [
            "W/m²·K",
            "W/m·K",
            "J/kg·K",
            "W/K"
        ],
        correctAnswer: 1,
        explanation: "Thermal conductivity (k) is measured in Watts per meter-Kelvin (W/m·K). It represents the rate of heat transfer through a material per unit thickness per unit temperature difference.",
        relatedConcept: "Fourier's Law"
    },
    {
        id: "struct_001",
        category: "structural",
        difficulty: "medium",
        question: "A steel rod with cross-sectional area 100 mm² is subjected to a tensile force of 20 kN. What is the normal stress?",
        options: [
            "20 MPa",
            "200 MPa",
            "2000 MPa",
            "0.2 MPa"
        ],
        correctAnswer: 1,
        explanation: "Stress = Force / Area = 20,000 N / 100 mm² = 20,000 N / 0.0001 m² = 200 × 10⁶ Pa = 200 MPa",
        relatedConcept: "Normal Stress Calculation"
    }
];
```

#### **6.2.2 Quiz Component Implementation**

```typescript
export function FEAQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [attemptCount, setAttemptCount] = useState(1);
    const [showResults, setShowResults] = useState(false);
    const [studentName, setStudentName] = useState('');
    
    // Generate random quiz from pool
    const quiz = useMemo(() => {
        return generateRandomQuiz(questionPool, {
            totalQuestions: 10,
            distribution: {
                easy: 3,
                medium: 5,
                hard: 2
            }
        });
    }, [attemptCount]);
    
    const handleSubmit = () => {
        if (attemptCount >= 3) {
            alert("Maximum attempts reached. Please review the material and try again later.");
            return;
        }
        setShowResults(true);
    };
    
    const handleRetake = () => {
        setAttemptCount(prev => prev + 1);
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setShowResults(false);
    };
    
    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h2>FEA Concepts Quiz</h2>
                <div className="attempt-counter">
                    Attempt {attemptCount} of 3
                </div>
            </div>
            
            {!showResults ? (
                <QuizQuestion
                    question={quiz[currentQuestion]}
                    onAnswer={(answer) => {
                        setSelectedAnswers([...selectedAnswers, answer]);
                        if (currentQuestion < quiz.length - 1) {
                            setCurrentQuestion(prev => prev + 1);
                        }
                    }}
                />
            ) : (
                <QuizResults
                    quiz={quiz}
                    answers={selectedAnswers}
                    studentName={studentName}
                    attemptNumber={attemptCount}
                    onRetake={handleRetake}
                    onDownload={generateQuizReport}
                />
            )}
        </div>
    );
}
```

#### **6.2.3 Quiz Report Generation**

```typescript
async function generateQuizReport(
    quiz: QuizQuestion[],
    answers: number[],
    studentName: string,
    attemptNumber: number
): Promise<void> {
    const score = calculateScore(quiz, answers);
    const percentage = (score / quiz.length) * 100;
    
    const report = {
        studentName,
        date: new Date().toISOString(),
        attemptNumber,
        score: `${score}/${quiz.length}`,
        percentage: `${percentage.toFixed(1)}%`,
        questions: quiz.map((q, idx) => ({
            question: q.question,
            studentAnswer: q.options[answers[idx]],
            correctAnswer: q.options[q.correctAnswer],
            isCorrect: answers[idx] === q.correctAnswer,
            explanation: q.explanation
        }))
    };
    
    // Generate PDF
    const pdf = await generatePDF(report);
    downloadFile(pdf, `FEA_Quiz_${studentName}_Attempt${attemptNumber}.pdf`);
}
```

### **6.3 Educational Integration Throughout UI**

**Contextual Help System:**
- Tooltips on every parameter explaining physical meaning
- "Learn More" links to relevant Understanding FEA sections
- Example values with explanations
- Common mistakes warnings

**Progressive Disclosure:**
- Basic mode: Simplified options for beginners
- Advanced mode: Full parameter control
- Guided tutorials for first-time users
- Complexity indicators on options

---

## **7. Phase 3: Extended Features & Polish**

### **7.1 Expanded Predefined Shapes**

**Objective:** Add more complex, real-world shapes for advanced learning

#### **7.1.1 New Geometry Types**

**Implementation Pattern:**
```fortran
! In educational_mesh_generator.F90
subroutine GenerateBridgeMesh(params, output_dir) bind(C)
    type(GeometryParams), intent(in) :: params
    character(len=*), intent(in) :: output_dir
    
    ! Bridge-specific parameters
    real(dp) :: span_length, deck_width, pier_height
    real(dp) :: cable_diameter, tower_height
    
    ! Generate bridge geometry with:
    ! - Deck mesh (fine elements for stress concentration)
    ! - Pier meshes (coarser elements)
    ! - Cable elements (1D beam elements)
    ! - Foundation blocks (3D solid elements)
    
end subroutine GenerateBridgeMesh
```

**New Shapes to Implement:**
1. **Simple Bridge:** Beam bridge with supports
2. **I-Beam:** Classic structural member
3. **Pressure Vessel:** Cylindrical tank with end caps
4. **Gear Tooth:** Single tooth for stress analysis
5. **Building Frame:** 2D frame structure
6. **Wing Section:** Simplified airfoil
7. **Pipe Junction:** T-junction for flow analysis

**UI Integration:**
```typescript
const advancedShapes = [
    {
        id: 'bridge',
        name: 'Simple Bridge',
        icon: <BridgeIcon />,
        parameters: ['span', 'width', 'supportType'],
        educational: 'Learn how bridges distribute loads'
    },
    {
        id: 'ibeam',
        name: 'I-Beam Section',
        icon: <IBeamIcon />,
        parameters: ['height', 'flangeWidth', 'webThickness'],
        educational: 'Understand why I-beams are so strong'
    }
    // ... more shapes
];
```

### **7.2 CAD File Import**

**Objective:** Allow students to test their own designs

#### **7.2.1 Supported Formats**
- **STL:** Most common 3D printing format
- **STEP:** Standard CAD exchange format
- **IGES:** Legacy but still common
- **OBJ:** Simple mesh format

#### **7.2.2 Import Workflow**

```typescript
// Frontend upload component
export function CADUpload({ onGeometryLoaded }: Props) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState<GeometryPreview | null>(null);
    
    const handleFileUpload = async (file: File) => {
        setUploading(true);
        
        try {
            // Upload to backend
            const formData = new FormData();
            formData.append('cadFile', file);
            
            const response = await apiClient.post('/api/geometry/upload', formData);
            
            // Get preview data
            const previewData = await apiClient.get(
                `/api/geometry/${response.data.geometryId}/preview`
            );
            
            setPreview(previewData.data);
        } catch (error) {
            showError('Failed to process CAD file. Please check the format.');
        } finally {
            setUploading(false);
        }
    };
    
    return (
        <div className="cad-upload-container">
            <Dropzone
                accept={{
                    'model/stl': ['.stl'],
                    'model/step': ['.step', '.stp'],
                    'model/iges': ['.iges', '.igs'],
                    'model/obj': ['.obj']
                }}
                onDrop={handleFileUpload}
            >
                <p>Drop your CAD file here or click to browse</p>
                <p className="text-sm text-gray-500">
                    Supported formats: STL, STEP, IGES, OBJ (max 50MB)
                </p>
            </Dropzone>
            
            {preview && (
                <GeometryPreview
                    data={preview}
                    onConfirm={() => onGeometryLoaded(preview)}
                    onCancel={() => setPreview(null)}
                />
            )}
        </div>
    );
}
```

#### **7.2.3 Backend Processing**

```python
from trimesh import load_mesh
import pyvista as pv

class CADProcessor:
    """Process uploaded CAD files for FEA"""
    
    async def process_upload(
        self, 
        file: UploadFile,
        max_size_mb: float = 50
    ) -> GeometryData:
        """Convert CAD file to FEA-ready geometry"""
        
        # Validate file size
        if file.size > max_size_mb * 1024 * 1024:
            raise ValueError(f"File too large. Maximum size: {max_size_mb}MB")
        
        # Load geometry
        with tempfile.NamedTemporaryFile(suffix=file.filename) as tmp:
            content = await file.read()
            tmp.write(content)
            tmp.flush()
            
            # Use trimesh for initial loading
            mesh = load_mesh(tmp.name)
            
            # Convert to PyVista for processing
            pv_mesh = pv.wrap(mesh)
            
            # Simplify if needed
            if pv_mesh.n_cells > 100000:
                pv_mesh = pv_mesh.decimate(0.5)
            
            # Extract geometry data
            return GeometryData(
                vertices=pv_mesh.points.tolist(),
                faces=pv_mesh.faces.reshape(-1, 4)[:, 1:].tolist(),
                bounds=pv_mesh.bounds,
                volume=pv_mesh.volume,
                surface_area=pv_mesh.area
            )
```

### **7.3 Custom README.md**

**Objective:** Professional repository documentation

```markdown
# ElmerFEM Educational Web Platform

<div align="center">
  <img src="docs/images/platform-banner.png" alt="ElmerFEM Educational Platform" width="800">
  
  [![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
  [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
  [![Fortran](https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white)](https://fortran-lang.org/)
</div>

## 🎓 Empowering Students to Learn Finite Element Analysis

Transform complex engineering simulations into interactive learning experiences. This educational platform makes ElmerFEM accessible to high school students through an intuitive web interface, guided workflows, and real-time visualization.

## 🚀 Getting Started

### Prerequisites
- Docker Desktop installed ([Download here](https://www.docker.com/products/docker-desktop))
- Git installed ([Download here](https://git-scm.com/))
- 8GB RAM minimum, 16GB recommended
- 10GB free disk space

### Quick Start (5 minutes)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elmerfem-edu.git
   cd elmerfem-edu
   ```

2. **Start the platform**
   ```bash
   docker compose up
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

That's it! No complex setup, no configuration files, no cloud accounts needed.

## 🎯 What Can You Do?

### For Students
- **Run Your First Simulation in Minutes**: Choose from pre-built templates for heat transfer and structural analysis
- **Visualize in 3D**: See your mesh and results in interactive 3D views
- **Learn by Doing**: Understand FEA concepts through hands-on experimentation
- **Track Progress**: Real-time feedback shows exactly what's happening during simulation

### For Teachers
- **Zero Maintenance**: Once installed, it just works - no IT support needed
- **Consistent Experience**: Every student sees the same interface and gets the same results
- **Privacy First**: All computation happens locally - no student data leaves the classroom
- **Educational Focus**: Built specifically for learning, not research

## 📚 Platform Features

### 🔥 Heat Transfer Simulations
- Steady-state and transient analysis
- Multiple boundary condition types
- Material library with common materials
- Temperature distribution visualization

### 🏗️ Structural Mechanics
- Static stress analysis
- Displacement calculations
- Force and pressure loading
- Von Mises stress visualization

### 🎨 Interactive 3D Visualization
- Real-time mesh preview
- Quality metrics display
- Result contour plots
- Multiple view angles

### 📊 Educational Tools
- Step-by-step guided workflows
- Built-in FEA concept explanations
- Interactive knowledge quiz
- Downloadable reports

## 🏗️ Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  React Frontend │────▶│ FastAPI Backend │────▶│ ElmerFEM Solver │
│   (Port 3000)   │     │   (Port 8000)   │     │    (Docker)     │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                        │                        │
        └────────────────────────┴────────────────────────┘
                        Shared Docker Network
```

## 🛠️ Development Setup

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
poetry install
poetry run uvicorn app.main:app --reload
```

### Running Tests
```bash
# Frontend tests
cd frontend && npm test

# Backend tests  
cd backend && poetry run pytest

# End-to-end tests
npm run test:e2e
```

## 📖 Documentation

- [User Guide](docs/user-guide.md) - Complete guide for students and teachers
- [Developer Guide](docs/developer-guide.md) - Architecture and contribution guidelines
- [API Documentation](http://localhost:8000/docs) - Interactive API documentation
- [Troubleshooting](docs/troubleshooting.md) - Common issues and solutions

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Areas We Need Help
- Additional simulation templates
- More educational content
- UI/UX improvements
- Documentation translations
- Bug fixes and testing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- ElmerFEM team for the powerful simulation engine
- Our educational advisors for curriculum guidance
- Student testers for invaluable feedback
- Open source community for amazing tools

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/elmerfem-edu/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/elmerfem-edu/discussions)
- **Email**: education@elmerfem-platform.org

---

<div align="center">
  Made with ❤️ for students learning FEA
</div>
```

### **7.4 Robust Input Validation (Task 8)**

**Objective:** Prevent invalid inputs using ElmerFEM's actual constraints

#### **7.4.1 Keywords Extraction Utility**

```fortran
! KeywordsDump.F90
PROGRAM KeywordsDump
    USE Lists
    USE Messages
    IMPLICIT NONE
    
    ! Output JSON with all keyword constraints
    CALL OutputKeywordsAsJSON()
    
CONTAINS
    SUBROUTINE OutputKeywordsAsJSON()
        ! Extract from SOLVER.KEYWORDS
        WRITE(*,'(A)') '{'
        WRITE(*,'(A)') '  "keywords": ['
        
        ! Temperature constraints
        WRITE(*,'(A)') '    {'
        WRITE(*,'(A)') '      "name": "Temperature",'
        WRITE(*,'(A)') '      "type": "Real",'
        WRITE(*,'(A)') '      "min": 0.0,'
        WRITE(*,'(A)') '      "max": 6000.0,'
        WRITE(*,'(A)') '      "unit": "Kelvin",'
        WRITE(*,'(A)') '      "description": "Absolute temperature"'
        WRITE(*,'(A)') '    },'
        
        ! ... more keywords
        
        WRITE(*,'(A)') '  ]'
        WRITE(*,'(A)') '}'
    END SUBROUTINE
END PROGRAM
```

#### **7.4.2 Validation Integration**

```python
# Backend validation using extracted keywords
class KeywordValidator:
    def __init__(self, keywords_path: Path):
        with open(keywords_path) as f:
            self.keywords = json.load(f)['keywords']
        
        # Build Pydantic models dynamically
        self.validators = {}
        for kw in self.keywords:
            self.validators[kw['name']] = self._create_validator(kw)
    
    def _create_validator(self, keyword: dict):
        constraints = {}
        if 'min' in keyword:
            constraints['ge'] = keyword['min']
        if 'max' in keyword:
            constraints['le'] = keyword['max']
        
        return pydantic.create_model(
            f"{keyword['name']}Validator",
            value=(keyword['type'], Field(**constraints))
        )
```

### **7.5 Automated Testing & CI (Task 12)**

**Objective:** Ensure platform reliability through comprehensive testing

#### **7.5.1 GitHub Actions Workflow**

```yaml
name: Educational Platform CI/CD

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  frontend-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          cd frontend
          npm ci
          
      - name: Run tests with coverage
        run: |
          cd frontend
          npm run test:coverage
          
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./frontend/coverage/lcov.info
          flags: frontend

  backend-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
          
      - name: Install Poetry
        uses: snok/install-poetry@v1
        
      - name: Install dependencies
        run: |
          cd backend
          poetry install
          
      - name: Run tests with coverage
        run: |
          cd backend
          poetry run pytest --cov=app --cov-report=xml
          
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./backend/coverage.xml
          flags: backend

  integration-tests:
    runs-on: ubuntu-latest
    needs: [frontend-tests, backend-tests]
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker images
        run: docker compose build
        
      - name: Run integration tests
        run: |
          docker compose up -d
          sleep 30  # Wait for services
          docker compose exec -T backend pytest tests/integration
          
      - name: Test educational scenarios
        run: |
          # Test heat transfer simulation
          ./scripts/test-simulation.sh heat_transfer
          
          # Test structural simulation  
          ./scripts/test-simulation.sh structural
          
          # Verify mesh generation
          ./scripts/test-mesh-generation.sh

  build-and-publish:
    runs-on: ubuntu-latest
    needs: integration-tests
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
        
      - name: Login to GitHub Container Registry
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          
      - name: Build and push images
        run: |
          docker compose build
          docker compose push
          
      - name: Create release artifacts
        run: |
          ./scripts/create-release.sh
          
      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: elmerfem-edu-${{ github.sha }}
          path: dist/
```

---

## **8. Technical Architecture & Implementation Details**

### **8.1 System Architecture**

```
┌─────────────────────────────────────────────────────────────────┐
│                        User's Local Machine                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────┐ │
│  │   Web Browser   │  │  Docker Desktop │  │     GitHub     │ │
│  │                 │  │                 │  │                │ │
│  │  localhost:3000 │  │  Runs all       │  │  Source code   │ │
│  │                 │  │  containers     │  │  repository    │ │
│  └────────┬────────┘  └────────┬────────┘  └────────────────┘ │
│           │                     │                               │
│           │                     │                               │
│  ┌────────▼─────────────────────▼────────────────────────────┐ │
│  │                   Docker Compose Network                   │ │
│  ├────────────────────────────────────────────────────────────┤ │
│  │                                                            │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐ │ │
│  │  │   Frontend   │  │   Backend    │  │    ElmerFEM     │ │ │
│  │  │  Container   │  │  Container   │  │   Container     │ │ │
│  │  │              │  │              │  │                 │ │ │
│  │  │  React App   │◄─┤  FastAPI     │◄─┤  Solver Engine  │ │ │
│  │  │  Port 3000   │  │  Port 8000   │  │  Mesh Generator │ │ │
│  │  │              │  │              │  │                 │ │ │
│  │  └──────────────┘  └──────┬───────┘  └─────────────────┘ │ │
│  │                            │                               │ │
│  │                     ┌──────▼───────┐                      │ │
│  │                     │   Shared     │                      │ │
│  │                     │   Volume     │                      │ │
│  │                     │              │                      │ │
│  │                     │ /workspace   │                      │ │
│  │                     └──────────────┘                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### **8.2 Data Flow Architecture**

```
User Input → Frontend Validation → API Request → Backend Processing
    ↓                                                    ↓
    ↓                                          Parameter Validation
    ↓                                                    ↓
    ↓                                            SIF Generation
    ↓                                                    ↓
    ↓                                          Mesh Generation
    ↓                                                    ↓
    ↓                                        ElmerSolver Execution
    ↓                                                    ↓
    ↓                                          Result Parsing
    ↓                                                    ↓
    └──────── WebSocket Updates ──────────► Progress Display
                                                     ↓
                                            3D Visualization
```

### **8.3 Component Interactions**

#### **8.3.1 Frontend Components**
```typescript
// Component hierarchy
<App>
  <NavigationBar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/form" element={<ParameterForm />} />
    <Route path="/simulation/:id" element={<SimulationPage />} />
    <Route path="/result/:id" element={<ResultPage />} />
    <Route path="/materials" element={<MaterialLibrary />} />
    <Route path="/learn" element={<UnderstandingFEA />} />
    <Route path="/quiz" element={<FEAQuiz />} />
  </Routes>
</App>

// State management
<Provider store={store}>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
```

#### **8.3.2 Backend Services**
```python
# Service layer architecture
class BackendArchitecture:
    """Core backend service organization"""
    
    # API Layer
    api_routers = [
        SimulationsRouter,    # /api/simulations
        MaterialsRouter,      # /api/materials
        MeshRouter,          # /api/mesh
        GeometryRouter,      # /api/geometry
    ]
    
    # Service Layer
    services = [
        MaterialsService,     # Material library management
        MeshService,         # Mesh generation orchestration
        SIFEngine,           # SIF file generation
        DockerWrapper,       # Container orchestration
        JobLauncher,         # Async job execution
    ]
    
    # Data Layer
    models = [
        SimulationParams,    # Input validation
        MaterialData,        # Material properties
        GeometryData,        # Geometry definitions
        MeshQuality,         # Quality metrics
        JobStatus,           # Execution tracking
    ]
```

### **8.4 Technology Stack Details**

#### **Frontend Stack**
- **React 18.2**: Component library with hooks
- **TypeScript 5.0**: Type safety and developer experience
- **Vite 4.4**: Build tool and dev server
- **Tailwind CSS 3.3**: Utility-first styling
- **daisyUI 3.5**: Component library for neumorphism
- **Redux Toolkit 1.9**: State management
- **React Hook Form 7.45**: Form handling
- **Zod 3.22**: Schema validation
- **Axios 1.5**: HTTP client
- **Three.js 0.156**: 3D graphics
- **Plotly.js 2.26**: Scientific visualization
- **React Router 6.15**: Client-side routing

#### **Backend Stack**
- **Python 3.11**: Core language
- **FastAPI 0.103**: Web framework
- **Pydantic 2.4**: Data validation
- **Jinja2 3.1**: Template engine
- **Poetry**: Dependency management
- **structlog 23.1**: Structured logging
- **meshio 5.3**: Mesh file I/O
- **numpy 1.25**: Numerical operations
- **asyncio**: Async execution

#### **Infrastructure**
- **Docker 24.0**: Containerization
- **Docker Compose 2.20**: Multi-container orchestration
- **GitHub Actions**: CI/CD pipeline
- **pytest 7.4**: Python testing
- **Jest 29.6**: JavaScript testing
- **Cypress 13.2**: E2E testing

---

## **9. Docker Container Strategy**

### **9.1 Current Issues Analysis**

The current Docker setup has fundamental architectural mismatches:

1. **Backend Execution Context**: Backend runs on host, expects Docker-in-Docker
2. **Volume Mapping**: Workspace volume not properly shared
3. **Network Isolation**: Services can't communicate effectively
4. **Path Translation**: File paths don't translate between contexts

### **9.2 Recommended Solution: Unified Container Architecture**

```yaml
# Revised docker-compose.yml
version: '3.8'

services:
  # Backend runs INSIDE Docker network
  backend:
    build: 
      context: ./backend
      dockerfile: Dockerfile
    working_dir: /app
    ports:
      - "8000:8000"
    environment:
      - ENVIRONMENT=development
      - DOCKER_HOST=unix:///var/run/docker.sock
      - WORKSPACE_PATH=/workspace
    volumes:
      - workspace:/workspace
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./backend:/app  # For development hot-reload
    networks:
      - simnet
    depends_on:
      elmer:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 10s
      timeout: 5s
      retries: 3
    command: ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

  # Frontend with proper build process
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
      target: development  # Use development stage
    ports:
      - "3000:3000"
    environment:
      - VITE_BACKEND_URL=http://backend:8000
    volumes:
      - ./frontend:/app
      - /app/node_modules  # Prevent node_modules overlap
    depends_on:
      - backend
    networks:
      - simnet
    command: ["npm", "run", "dev", "--", "--host"]

  # ElmerFEM with proper workspace access
  elmer:
    build:
      context: .
      dockerfile: docker/elmer.dockerfile
      args:
        - ENABLE_PROGRESS_OUTPUT=true
    volumes:
      - workspace:/workspace
      - ./elmer/share:/usr/local/share/elmerfem  # Material library access
    working_dir: /workspace
    networks:
      - simnet
    healthcheck:
      test: ["CMD", "ElmerSolver", "--version"]
      interval: 30s
      timeout: 10s
      retries: 3
    # Keep container running
    command: ["tail", "-f", "/dev/null"]

volumes:
  workspace:
    driver: local

networks:
  simnet:
    driver: bridge
```

### **9.3 Backend Dockerfile Improvements**

```dockerfile
# backend/Dockerfile
FROM python:3.11-slim AS base

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    gfortran \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Poetry
RUN pip install poetry==1.6.1
RUN poetry config virtualenvs.create false

# Copy dependency files
COPY pyproject.toml poetry.lock ./

# Install dependencies
RUN poetry install --no-interaction --no-ansi

# Copy application code
COPY . .

# Build Fortran mesh generator
RUN cd mesh_generator && \
    gfortran -shared -fPIC -O3 \
    -o educational_mesh_generator.so \
    educational_mesh_generator.F90

# Development stage
FROM base AS development
ENV PYTHONUNBUFFERED=1
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

# Production stage
FROM base AS production
RUN poetry install --no-dev --no-interaction --no-ansi
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### **9.4 Frontend Dockerfile**

```dockerfile
# frontend/Dockerfile
FROM node:18-alpine AS base

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@8

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy application code
COPY . .

# Development stage
FROM base AS development
EXPOSE 3000
CMD ["pnpm", "dev", "--host"]

# Build stage
FROM base AS build
RUN pnpm build

# Production stage
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### **9.5 Migration Path**

1. **Stop Current Services**
   ```bash
   docker compose down
   docker system prune -f
   ```

2. **Update Configuration Files**
   - Apply new docker-compose.yml
   - Update Dockerfiles
   - Fix volume paths in backend code

3. **Rebuild Everything**
   ```bash
   docker compose build --no-cache
   docker compose up
   ```

4. **Verify Integration**
   - Check health endpoints
   - Run test simulation
   - Verify file generation

---

## **10. UI/UX Design Specifications**

### **10.1 Design System**

#### **10.1.1 Color Palette**
```css
:root {
  /* Base Colors - Clean Neumorphism */
  --color-background: #f0f0f0;
  --color-surface: #ffffff;
  --color-surface-raised: #ffffff;
  --color-surface-sunken: #e8e8e8;
  
  /* Text Colors */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-muted: #999999;
  
  /* Accent Colors - Used Sparingly */
  --color-primary: #3b82f6;      /* Blue */
  --color-success: #10b981;      /* Green */
  --color-warning: #f59e0b;      /* Amber */
  --color-error: #ef4444;        /* Red */
  
  /* Shadows for Neumorphism */
  --shadow-raised: 
    6px 6px 12px rgba(0, 0, 0, 0.1),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
  --shadow-sunken:
    inset 6px 6px 12px rgba(0, 0, 0, 0.1),
    inset -6px -6px 12px rgba(255, 255, 255, 0.8);
  --shadow-hover:
    8px 8px 16px rgba(0, 0, 0, 0.15),
    -8px -8px 16px rgba(255, 255, 255, 0.9);
}
```

#### **10.1.2 Typography**
```css
/* Font Stack */
@font-face {
  font-family: 'Enter';
  src: url('/fonts/enter.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: 'Enter', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-primary);
}

/* Type Scale */
.text-xs { font-size: 0.75rem; }    /* 12px */
.text-sm { font-size: 0.875rem; }   /* 14px */
.text-base { font-size: 1rem; }     /* 16px */
.text-lg { font-size: 1.125rem; }   /* 18px */
.text-xl { font-size: 1.25rem; }    /* 20px */
.text-2xl { font-size: 1.5rem; }    /* 24px */
.text-3xl { font-size: 1.875rem; }  /* 30px */
.text-4xl { font-size: 2.25rem; }   /* 36px */
```

#### **10.1.3 Component Styling**
```css
/* Neumorphic Button */
.btn-neumorphic {
  padding: 1rem 2rem;
  background: var(--color-surface);
  border: none;
  border-radius: 1rem;
  box-shadow: var(--shadow-raised);
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 500;
}

.btn-neumorphic:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.btn-neumorphic:active {
  box-shadow: var(--shadow-sunken);
  transform: translateY(0);
}

/* Neumorphic Card */
.card-neumorphic {
  padding: 2rem;
  background: var(--color-surface);
  border-radius: 1.5rem;
  box-shadow: var(--shadow-raised);
}

/* Neumorphic Input */
.input-neumorphic {
  padding: 0.75rem 1.25rem;
  background: var(--color-surface-sunken);
  border: none;
  border-radius: 0.75rem;
  box-shadow: var(--shadow-sunken);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.input-neumorphic:focus {
  outline: none;
  box-shadow: 
    var(--shadow-sunken),
    0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

### **10.2 Component Library**

#### **10.2.1 Navigation Component**
```typescript
export function NavigationBar() {
  return (
    <nav className="navbar-neumorphic">
      <div className="navbar-content">
        <div className="navbar-brand">
          <h1 className="text-2xl font-bold">ElmerFEM Simulator</h1>
        </div>
        
        <div className="navbar-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/materials" className="nav-link">
            Material Library
          </NavLink>
          <NavLink to="/learn" className="nav-link">
            Understanding FEA
          </NavLink>
          <NavLink to="/help" className="nav-link">
            Help
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
```

#### **10.2.2 Simulation Card Component**
```typescript
interface SimulationCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  onClick: () => void;
}

export function SimulationCard({
  title,
  description,
  icon,
  difficulty,
  onClick
}: SimulationCardProps) {
  return (
    <div className="card-neumorphic simulation-card" onClick={onClick}>
      <div className="card-icon">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-secondary mt-2">{description}</p>
      
      <div className="card-footer">
        <span className={`difficulty-badge ${difficulty}`}>
          {difficulty}
        </span>
        <button className="btn-neumorphic btn-sm">
          Start Simulation →
        </button>
      </div>
    </div>
  );
}
```

### **10.3 Responsive Layouts**

```css
/* Desktop-First Grid System */
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive Breakpoints (Desktop-First) */
@media (max-width: 1280px) {
  .xl\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 1024px) {
  .lg\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .md\:grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
}
```

### **10.4 Animation & Interactions**

```css
/* Smooth Transitions */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Loading Animation */
@keyframes pulse-neumorphic {
  0%, 100% {
    box-shadow: var(--shadow-raised);
  }
  50% {
    box-shadow: var(--shadow-sunken);
  }
}

.loading-neumorphic {
  animation: pulse-neumorphic 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Progress Bar Animation */
@keyframes progress-fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(var(--progress));
  }
}

.progress-bar-fill {
  transform-origin: left;
  animation: progress-fill 0.5s ease-out forwards;
}
```

---

## **11. Testing & Quality Assurance**

### **11.1 Testing Strategy**

#### **11.1.1 Unit Testing**
```typescript
// Frontend unit test example
describe('MaterialSelector', () => {
  it('should display all materials from the API', async () => {
    const mockMaterials = [
      { id: 'steel', name: 'Steel', E: 210e9, nu: 0.3 },
      { id: 'aluminum', name: 'Aluminum', E: 70e9, nu: 0.33 }
    ];
    
    server.use(
      rest.get('/api/materials', (req, res, ctx) => {
        return res(ctx.json({ materials: mockMaterials }));
      })
    );
    
    render(<MaterialSelector onChange={jest.fn()} />);
    
    await waitFor(() => {
      expect(screen.getByText('Steel')).toBeInTheDocument();
      expect(screen.getByText('Aluminum')).toBeInTheDocument();
    });
  });
});
```

```python
# Backend unit test example
def test_sif_generation_heat_transfer():
    """Test SIF generation for heat transfer simulation"""
    params = SimulationParams(
        simulation_type="heat_transfer",
        geometry_type="box",
        dimensions={"length": 1.0, "width": 1.0, "height": 1.0},
        material_id="steel",
        mesh_density=0.1,
        boundary_conditions=[
            BoundaryCondition(
                type="temperature",
                location="left",
                value=100.0
            ),
            BoundaryCondition(
                type="temperature",
                location="right",
                value=20.0
            )
        ]
    )
    
    sif_content = generate_sif(params)
    
    assert "Simulation Type = Steady State" in sif_content
    assert "Equation = Heat Equation" in sif_content
    assert "Material = steel" in sif_content
    assert "Temperature = 100.0" in sif_content
```

#### **11.1.2 Integration Testing**
```python
# API integration test
async def test_simulation_workflow():
    """Test complete simulation workflow"""
    async with AsyncClient(app=app, base_url="http://test") as client:
        # Submit simulation
        response = await client.post(
            "/api/simulations",
            json={
                "simulation_type": "heat_transfer",
                "geometry_type": "box",
                "dimensions": {"length": 1.0, "width": 1.0, "height": 1.0},
                "material_id": "steel",
                "mesh_density": 0.1,
                "boundary_conditions": [
                    {"type": "temperature", "location": "left", "value": 100.0},
                    {"type": "temperature", "location": "right", "value": 20.0}
                ]
            }
        )
        assert response.status_code == 200
        job_id = response.json()["job_id"]
        
        # Check status
        response = await client.get(f"/api/simulations/{job_id}/status")
        assert response.json()["status"] in ["pending", "running", "completed"]
        
        # Wait for completion
        await wait_for_completion(client, job_id, timeout=60)
        
        # Get results
        response = await client.get(f"/api/simulations/{job_id}/result")
        assert response.status_code == 200
```

#### **11.1.3 End-to-End Testing**
```typescript
// Cypress E2E test
describe('Heat Transfer Simulation', () => {
  it('should complete a full simulation workflow', () => {
    // Start at home page
    cy.visit('/');
    
    // Select heat transfer
    cy.contains('Heat Transfer').click();
    
    // Fill out form
    cy.get('[data-testid="geometry-select"]').select('box');
    cy.get('[data-testid="length-input"]').type('2');
    cy.get('[data-testid="width-input"]').type('2');
    cy.get('[data-testid="height-input"]').type('1');
    
    // Select material
    cy.get('[data-testid="material-select"]').select('steel');
    
    // Set boundary conditions
    cy.get('[data-testid="temp-left"]').type('100');
    cy.get('[data-testid="temp-right"]').type('20');
    
    // Run simulation
    cy.get('[data-testid="run-simulation"]').click();
    
    // Verify progress page
    cy.url().should('include', '/simulation/');
    cy.contains('Generating mesh').should('be.visible');
    
    // Wait for completion
    cy.contains('See Results', { timeout: 60000 }).click();
    
    // Verify results
    cy.url().should('include', '/result/');
    cy.contains('Simulation Complete').should('be.visible');
    cy.get('[data-testid="3d-visualization"]').should('be.visible');
  });
});
```

### **11.2 Performance Testing**

```typescript
// Performance benchmarks
describe('Performance Benchmarks', () => {
  it('should generate mesh in under 2 seconds', async () => {
    const start = performance.now();
    
    const response = await apiClient.post('/api/mesh/generate', {
      geometry_type: 'rectangle',
      nx: 100,
      ny: 100
    });
    
    const duration = performance.now() - start;
    
    expect(response.status).toBe(200);
    expect(duration).toBeLessThan(2000); // 2 seconds
  });
  
  it('should render 10k element mesh at 60fps', () => {
    const mesh = generateTestMesh(10000);
    const scene = new THREE.Scene();
    
    // Add mesh to scene
    scene.add(mesh);
    
    // Measure frame time
    const frameTime = measureFrameTime(scene);
    
    expect(frameTime).toBeLessThan(16.67); // 60fps = 16.67ms per frame
  });
});
```

### **11.3 Accessibility Testing**

```typescript
// Accessibility tests
describe('Accessibility', () => {
  it('should have proper ARIA labels', () => {
    render(<ParameterForm />);
    
    expect(screen.getByLabelText('Length')).toBeInTheDocument();
    expect(screen.getByLabelText('Material')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Run Simulation' })).toBeInTheDocument();
  });
  
  it('should be keyboard navigable', () => {
    render(<ParameterForm />);
    
    // Tab through form
    userEvent.tab();
    expect(screen.getByLabelText('Length')).toHaveFocus();
    
    userEvent.tab();
    expect(screen.getByLabelText('Width')).toHaveFocus();
    
    // Submit with Enter
    userEvent.keyboard('{Enter}');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
```

---

## **12. Success Metrics & Validation**

### **12.1 Educational Success Metrics**

1. **Time to First Simulation**
   - Target: < 15 minutes from first launch
   - Measurement: Track from home page load to first result view
   - Current: Not measurable (workflow incomplete)

2. **Completion Rate**
   - Target: > 80% of started simulations reach results
   - Measurement: Track job starts vs. completions
   - Current: 0% (simulations fail)

3. **Learning Engagement**
   - Target: > 50% of users access educational content
   - Measurement: Track "Understanding FEA" page views
   - Current: Not implemented

4. **Quiz Performance**
   - Target: Average score improvement > 20% between attempts
   - Measurement: Compare attempt scores
   - Current: Not implemented

### **12.2 Technical Success Metrics**

1. **Performance Benchmarks**
   - Mesh Generation: < 2s for standard geometries
   - Page Load: < 3s for all pages
   - API Response: < 500ms for non-compute endpoints
   - Memory Usage: < 500MB browser, < 1GB backend

2. **Reliability Metrics**
   - Uptime: 99.9% (local availability)
   - Error Rate: < 1% of API calls
   - Recovery Time: < 30s from container restart

3. **Code Quality**
   - Test Coverage: > 80% for both frontend and backend
   - Type Coverage: 100% TypeScript strict mode
   - Linting: Zero errors, < 10 warnings

### **12.3 Validation Plan**

#### **Phase 1 Validation (Immediate)**
1. **Docker Integration Test**
   - Successfully run heat transfer simulation end-to-end
   - Verify file generation in correct locations
   - Confirm result parsing and display

2. **Workflow Validation**
   - Complete user journey without manual intervention
   - Verify all UI elements functional
   - Test error recovery scenarios

3. **Performance Validation**
   - Measure actual vs. target metrics
   - Identify bottlenecks
   - Optimize critical paths

#### **Phase 2 Validation (Educational)**
1. **Classroom Testing**
   - Deploy to test classroom (10-15 students)
   - Observe usage patterns
   - Collect teacher feedback

2. **Learning Outcomes**
   - Pre/post quiz scores
   - Time to concept understanding
   - Student confidence surveys

#### **Phase 3 Validation (Scale)**
1. **Load Testing**
   - Simulate 30 concurrent users
   - Measure resource usage
   - Verify performance under load

2. **Cross-Platform Testing**
   - Windows 10/11
   - macOS 12+
   - Ubuntu 22.04+
   - Different Docker versions

---

## **Conclusion**

This Final PRD represents the complete vision for the Educational Web Platform for ElmerFEM. By addressing the current technical challenges, implementing the missing workflow components, and adding the educational features, we will create a transformative learning tool that makes finite element analysis accessible to high school students worldwide.

The immediate priority is resolving the Docker container communication issues to enable end-to-end simulation workflows. Once this foundation is solid, the educational features and extended capabilities can be built on top, creating a comprehensive platform that serves both immediate educational needs and future expansion possibilities.

Success will be measured not just in technical metrics, but in the confidence and understanding gained by students who previously thought FEA was beyond their reach. By maintaining focus on the educational mission while building robust technical infrastructure, this platform will bridge the gap between professional engineering tools and classroom learning. 

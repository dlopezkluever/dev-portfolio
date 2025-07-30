# 🎤 **Xtraktor** - AI-Powered Multi-Modal Insight Extractor

> Transform your meetings, lectures, speeches, articles, and books into actionable insights with the power of AI

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows-lightgrey.svg)](https://www.microsoft.com/windows)
[![Electron](https://img.shields.io/badge/Electron-Latest-47848F.svg)](https://electronjs.org/)

---

## 🎯 **What is Xtraktor?**

**Xtraktor** is a revolutionary Windows desktop application that eliminates the tedious task of manually reviewing hours of recorded content and dense written materials. Whether you're a busy professional drowning in meeting recordings, a student trying to extract key points from lectures and textbooks, or anyone who regularly consumes spoken and written content, Xtraktor automatically transforms your audio, video, and text files into structured, actionable insights.

### **The Problem We Solve**

Every day, professionals, students, and lifelong learners consume countless hours of both spoken and written content:
- 📊 **Business professionals** attend back-to-back meetings with important decisions buried in hours of discussion
- 🎓 **Students** record lectures AND struggle through dense textbooks and academic papers
- 💼 **Consultants and researchers** conduct interviews AND analyze lengthy reports and documentation
- 🚀 **Entrepreneurs** participate in investor calls AND need to digest market research and industry reports
- 📚 **Lifelong learners** consume podcasts, audiobooks, AND want to extract insights from articles and books

**The traditional solution?** Manually re-listening to recordings, re-reading books, taking scattered notes, and hoping you didn't miss anything critical. This process is time-consuming, inconsistent, and frankly, soul-crushing.

**Our solution?** A unified AI-powered platform that handles it all - drag, drop, or paste, and let AI do the heavy lifting.

---

## 👥 **Who Is This For?**

### **🏢 Business Professionals**
- **Project Managers** who need to extract action items from stakeholder meetings AND analyze project documentation
- **Sales Teams** who want to review client calls AND process competitive intelligence reports
- **Executives** who need quick summaries of lengthy board meetings AND industry analysis reports
- **Remote Workers** who attend multiple video conferences AND need to stay current with industry publications

### **🎓 Students & Educators**
- **University Students** who record lectures AND need structured study materials from dense textbooks
- **Graduate Researchers** who conduct interviews AND analyze academic papers and literature
- **Online Learners** who consume educational content AND want to extract insights from supplementary readings
- **Teachers** who want to review lesson effectiveness AND stay current with educational resources

### **💡 Content Creators & Researchers**
- **Podcasters** who need show notes from interviews AND research topics from multiple sources
- **Journalists** who conduct interviews AND need to digest background materials and reports
- **Market Researchers** who analyze focus groups AND process industry reports and case studies
- **Consultants** who document client sessions AND analyze competitive intelligence materials

---

## ✨ **The Xtraktor Experience**

### **🎬 Your Journey in 3 Simple Steps**

**1. 📁 Choose Your Content Type**
From the professional "Analyst's Desk" interface, select your extraction tool:
- **Audio & Video Extraction**: For meetings, lectures, interviews, and presentations
- **Text Extraction**: For articles, books, PDFs, and web content

**2. ☕ Input Your Content**
- **Audio/Video**: Simply drag any audio or video file (MP3, WAV, M4A, MP4) into the interface
- **Text Sources**: Either drag files (PDF, ePub, TXT) or paste any article URL for instant processing

**3. 📋 Get Your Insights**
Return to find your content transformed into:
- **🎯 Executive Summary**: Key topics and concepts in bullet-point format
- **📚 Chapter Analysis**: For books, detailed chapter-by-chapter breakdowns with key quotes
- **🔗 Article Insights**: For web articles, core arguments and key points extraction
- **✅ Action Items**: Clear tasks with assignees and deadlines (when mentioned)
- **📝 Full Transcript**: Searchable, complete text of your audio/video content
- **💾 Smart History**: All your insights saved and easily accessible for future reference

### **🌟 What Makes The Experience Special**

**⚡ Multi-Modal Intelligence**
One platform handles everything - from podcast episodes to research papers, from meeting recordings to entire books. No more switching between different tools.

**🎨 Professional "Analyst's Desk" Design**
A beautiful, skeuomorphic interface that feels like working at a premium analyst's workspace, complete with leather textures and brushed metal accents.

**🧠 Content-Aware Processing**
The AI automatically detects content type and adjusts processing accordingly - short articles get different treatment than dense academic books.

**📖 Advanced Book Analysis**
For lengthy documents, Xtraktor intelligently chunks content into chapters, providing both individual chapter summaries and overall thesis analysis.

**🔄 Works in the Background**
Drop your files or paste URLs and continue with your work. The AI processes everything in the background using sophisticated n8n workflows.

**🔒 Privacy First**
Your sensitive content stays on your machine. No uploads to unknown cloud services for the core processing.

---

## 🚀 **Key Features**

### **🎙️ Audio & Video Processing**
- **Universal Format Support**: MP3, WAV, M4A, MP4, and more
- **Professional Transcription**: Powered by OpenAI Whisper for industry-leading accuracy
- **Context-Aware Summaries**: Meetings, lectures, interviews, presentations - each handled appropriately
- **Action Item Extraction**: Automatically identifies tasks, deadlines, and responsible parties

### **📚 Text & Document Intelligence**
- **Multi-Format Support**: PDF, ePub, TXT files plus direct URL processing
- **Smart Content Detection**: Automatically distinguishes between books, articles, and short-form content
- **Chapter-by-Chapter Analysis**: For books, intelligent chunking with individual chapter summaries
- **Quote Extraction**: Identifies and highlights the most significant passages
- **Web Article Processing**: Direct URL input for instant article analysis

### **🧠 Advanced AI Processing**
- **Dual Input Methods**: Both file upload and URL processing in elegant tabbed interface
- **Content-Adaptive Analysis**: Different AI prompts and processing for different content types
- **Intelligent Chunking**: Breaks long content into manageable pieces for optimal AI analysis
- **Synthesis Capabilities**: Combines insights from multiple sources for comprehensive understanding

### **📚 Knowledge Management**
- **Unified History**: All extractions (audio, video, text) stored in one searchable interface
- **Persistent Storage**: Firebase-powered backend ensures your insights are never lost
- **Cross-Reference Ready**: Prepared for future quiz generation and knowledge synthesis features

### **⚙️ Professional Infrastructure**
- **n8n Automation**: Sophisticated background workflows for different content types
- **Robust Error Handling**: Graceful handling of different file types and processing errors
- **Responsive Design**: Beautiful interface that works across different screen sizes
- **Keyboard Shortcuts**: Power-user features for efficient navigation

---

## 🛠️ **Technology Stack**

**Frontend**: Electron with professional HTML5, CSS3, and JavaScript
**UI Design**: Custom skeuomorphic "Analyst's Desk" theme with leather and metal textures
**AI Workflows**: n8n automation engine with dual workflows (Audio + Text)
**Transcription**: OpenAI Whisper API
**Text Analysis**: OpenAI GPT-4 API with content-specific prompts
**Text Extraction**: Advanced PDF parsing and web scraping capabilities  
**Storage**: Firebase Firestore for persistent knowledge management
**Platform**: Windows Desktop (10/11)

---

## 📋 **Prerequisites**

Before installing Xtraktor, ensure you have:
- **Windows 10/11** (64-bit)
- **Node.js** (v16 or higher)
- **OpenAI API Key** (for transcription and analysis)
- **Internet Connection** (for AI processing)
- **n8n** (for workflow automation)

---

## ⚡ **Quick Start**

### **1. Clone & Install**
```bash
git clone https://github.com/yourusername/xtraktor.git
cd xtraktor
npm install
```

### **2. Set Up n8n Workflows**
```bash
# Install n8n globally
npm install -g n8n

# Start n8n with text processing capabilities
npm run n8n
```

### **3. Configure Workflows**
1. Open n8n at `http://localhost:5678`
2. Import both the Audio and Text extraction workflows
3. Add your OpenAI API key to the credential store
4. Configure text processing dependencies (PDF parsing, web scraping)

### **4. Launch Xtraktor**
```bash
npm start
```

### **5. Start Extracting Insights!**
- Choose your content type from the landing page
- Drag files or paste URLs
- Watch the AI transform your content into actionable insights

---

## 🎯 **Usage Examples**

### **📊 Business Meeting Analysis**
**Input**: 45-minute quarterly planning meeting recording
**Output**: 
- Executive summary of key decisions and strategic direction
- Action items with owners and deadlines
- Full searchable transcript for reference

### **🎓 Academic Research**
**Input**: Dense 300-page academic PDF on economics
**Output**:
- Overall thesis and core arguments
- Chapter-by-chapter summaries with key concepts
- Most significant quotes and supporting evidence
- Structured insights ready for research synthesis

### **📰 Market Intelligence**
**Input**: Industry analysis article URL
**Output**:
- Core arguments and market trends identified
- Key statistics and projections highlighted
- Strategic implications clearly outlined

### **🎤 Interview Content Extraction**
**Input**: 30-minute customer research interview
**Output**:
- Summary of main themes and customer pain points
- Actionable insights for product development
- Searchable transcript with important quotes

---

## 🗺️ **Roadmap**

### **Phase 1: Multi-Modal Core** ✅
- Professional landing page with tool selection
- Advanced text extraction with URL and file support
- Enhanced audio/video processing
- Unified results display and history

### **Phase 2: Knowledge Synthesis** 🔄 
- Quiz generation from multiple sources
- Cross-reference capabilities between audio and text insights
- Advanced search and filtering across all content types
- Export capabilities (PDF, Word, etc.)

### **Phase 3: Advanced Intelligence** 📋
- Speaker identification and diarization
- Custom analysis templates for different domains
- Batch processing capabilities
- Integration with note-taking applications

### **Phase 4: Enterprise Features** 🏢
- Team collaboration and sharing
- Advanced security and compliance features
- API for third-party integrations
- Custom AI model training options

---

## 🤝 **Contributing**

We welcome contributions from the community! Whether you're fixing bugs, improving documentation, adding new content type support, or enhancing the AI processing capabilities, your help makes Xtraktor better for everyone.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 **Support**

Having issues or questions? We're here to help!

- 📧 **Email**: support@xtraktor.app
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/xtraktor/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/xtraktor/discussions)

---

## 🙏 **Acknowledgments**

- **OpenAI** for providing the incredible Whisper and GPT APIs
- **n8n** for the powerful workflow automation platform  
- **Electron** for enabling beautiful cross-platform desktop applications
- **Firebase** for reliable cloud infrastructure
- **The open-source community** for PDF parsing and web scraping tools

---

**Ready to transform how you consume ALL types of content?** 

[Download Xtraktor](https://github.com/yourusername/xtraktor/releases) and start extracting insights from your first audio file, video recording, article, or book in under 3 minutes.

*Built with ❤️ for everyone who believes their time is too valuable to spend manually processing content when AI can do it better.* 
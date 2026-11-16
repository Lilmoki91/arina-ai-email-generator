# Arina AI Email Generator

A smart, mobile-friendly email generator built with vanilla HTML, CSS, and JavaScript. It helps users create professional emails quickly using AI-generated suggestions, predefined templates, tone selection, multilingual support, and export actions such as copy, download, and email sending.

## Overview

Arina AI Email Generator is designed to simplify the email writing process for personal, business, and organizational communication. Users can enter a subject, recipient information, sender name, additional details, and optional custom instructions, then generate a polished email in seconds.

The application includes:

- AI-assisted email generation
- Quick templates for common email scenarios
- Malay and English language support
- Custom tone options (formal, semi-formal, friendly, urgent, marketing, transactional)
- Image and Google Drive link insertion
- Email history saved in the browser
- Responsive UI optimized for mobile use

## Features

### AI-Powered Email Generation
Generate complete, structured emails based on user input and optional custom prompts.

### Ready-to-Use Templates
Includes templates for:

- Leave requests
- Meeting requests
- Complaints
- Thank-you notes
- Follow-ups
- Apologies
- Promotions
- Invoices

### Multi-Language Support
Supports:

- Bahasa Melayu
- English

### Customizable Tone
Users can choose from multiple tone styles depending on the communication purpose.

### Productivity Tools
- Edit generated emails inline
- Copy text to clipboard
- Download as HTML
- Open in default mail client
- Save and reload previous emails from history

### Responsive UI
The app is built with a mobile-first design and works well on phones and desktops.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage for saved history
- External libraries via CDN:
  - Font Awesome
  - Google Fonts

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── LICENSE
├── README.md
└── assets/ (if added later)
```

## Getting Started

### Prerequisites

- A modern web browser
- Internet access (for CDN assets and AI worker access)

### Run Locally

You can run the project either by opening the HTML file directly in a browser or by serving it locally.

#### Option 1: Open directly

Open `index.html` in your browser.

#### Option 2: Run a local server

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Configuration

The app uses a worker endpoint for AI generation. You can configure the API target in `script.js`:

```javascript
const WORKER_URL = "https://your-worker-endpoint.example";
```

Make sure the endpoint returns a JSON response with the expected structure.

## Usage

1. Enter the email subject or purpose.
2. Add recipient, sender name, and additional details if needed.
3. Select the preferred tone and email language.
4. Optionally add a custom prompt for more specific instructions.
5. Click the generate button.
6. Review, edit, copy, download, or send the generated email.

## Example Workflow

- Subject: Leave Application
- Recipient: HR Manager
- Tone: Formal
- Language: English
- Additional Details: Employee ID, leave dates, reason
- Result: A structured professional email draft is generated automatically.

## Browser Compatibility

This project is intended for modern browsers such as:

- Chrome
- Edge
- Firefox
- Safari

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## Author

Arina AI Email Generator

## Notes

This app is a lightweight front-end prototype that leverages an AI worker or backend endpoint for generation. For production-grade deployments, consider adding:

- user authentication
- API key security
- server-side validation
- rate limiting
- analytics and logging

---

Built with a focus on simplicity, productivity, and professional email communication.

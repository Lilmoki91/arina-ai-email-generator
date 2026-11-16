// ==============================================
// WORKER URL
// ==============================================
const WORKER_URL = "https://my-secure-key-api-production.taihaulengcai.workers.dev";

async function callDoubleDuoAI(prompt) {
    const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });
    if (!res.ok) {
        const errText = await res.text().catch(() => "");
        throw new Error(`Worker error ${res.status}: ${errText}`);
    }
    const data = await res.json();
    if (data.status !== "success" || !data.text) {
        throw new Error(data.error || "Tiada respons dari AI");
    }
    return { text: data.text, model: data.model };
}

// ==================== TRANSLATIONS ====================
const translations = {
    ms: {
        tagline: "Penjana E-mel Pintar",
        formTitle: "Butiran E-mel",
        formSubtitle: "Isi maklumat di bawah untuk menjana e-mel profesional",
        labelRecipient: "Penerima",
        placeholderRecipient: "cth: Pengurus HR, Encik Ahmad",
        labelSubject: "Subjek / Tujuan",
        placeholderSubject: "cth: Permohonan Cuti, Permintaan Mesyuarat",
        labelTone: "Nada",
        toneFormal: "Formal",
        toneSemiFormal: "Separa Formal",
        toneFriendly: "Mesra",
        toneUrgent: "Urgent",
        toneMarketing: "Pemasaran",
        toneTransactional: "Transaksional",
        labelLanguage: "Bahasa E-mel",
        langMalay: "Bahasa Melayu",
        langEnglish: "English",
        labelSender: "Nama Pengirim",
        placeholderSender: "cth: Ali bin Abu",
        labelDetails: "Butiran Tambahan",
        placeholderDetails: "Masukkan butiran tambahan yang perlu disertakan...",
        labelPrompt: "Arahan Khas (Prompt)",
        placeholderPrompt: "cth: Tulis e-mel dalam gaya santai, tambah diskaun 20%...",
        btnGenerate: "✨ Jana E-mel",
        generating: "⏳ Sedang menjana...",
        templatesTitle: "Templat Pantas",
        templatesSubtitle: "Pilih templat untuk mula dengan cepat",
        tplLeave: "Mohon Cuti",
        tplMeeting: "Permintaan Mesyuarat",
        tplComplaint: "Aduan",
        tplThanks: "Ucapan Terima Kasih",
        tplFollowup: "Susulan",
        tplApology: "Permohonan Maaf",
        tplPromo: "Promosi / Jualan",
        tplInvoice: "Invois / Resit",
        outputTitle: "E-mel Dijana",
        outputSubtitle: "E-mel anda akan dipaparkan di sini",
        outputEmpty: "Isi borang dan tekan \"Jana E-mel\"",
        labelDriveLink: "Pautan Google Drive",
        placeholderDriveLink: "https://drive.google.com/...",
        btnAddDriveLink: "Tambah",
        emailTo: "Kepada:",
        emailSubject: "Subjek:",
        btnEdit: "Edit",
        btnSave: "Simpan",
        btnCopy: "Salin",
        btnRegenerate: "Jana",
        btnDownload: "Muat Turun",
        btnSend: "Hantar",
        btnUploadImage: "Tambah Gambar",
        btnClear: "Padam",
        historyTitle: "Sejarah",
        historySubtitle: "E-mel yang telah dijana sebelum ini",
        historyEmpty: "Belum ada e-mel dijana",
        toastCopied: "E-mel berjaya disalin!",
        toastDownloaded: "E-mel berjaya dimuat turun!",
        toastImageAdded: "Gambar ditambah!",
        toastImageRemoved: "Gambar dipadam!",
        toastError: "Ralat berlaku. Sila cuba lagi.",
        toastFillFields: "Sila isi sekurang-kurangnya subjek e-mel.",
        toastDriveLinkAdded: "Pautan Google Drive ditambah!",
        toastDriveLinkInvalid: "Sila masukkan URL Google Drive yang sah.",
        navHome: "Utama",
        navImages: "Gambar",
        navTemplates: "Templat",
        navHistory: "Sejarah",
        btnDrive: "Drive",
        guideTitle: "Panduan Penggunaan",
        guide: {
            step1Title: "Isi Butiran",
            step1Desc: "Masukkan subjek, penerima, nama pengirim, dan butiran tambahan yang diperlukan.",
            step2Title: "Pilih Nada & Bahasa",
            step2Desc: "Pilih nada e-mel (formal, mesra, urgent, dll.) dan bahasa e-mel yang diingini.",
            step3Title: "Tambah Arahan Khas",
            step3Desc: "Gunakan ruangan prompt untuk memberi arahan tambahan seperti diskaun, gaya penulisan, atau maklumat khas.",
            step4Title: "Jana E-mel",
            step4Desc: "Tekan butang \"✨ Jana E-mel\" dan tunggu seketika untuk melihat hasil e-mel profesional anda.",
            step5Title: "Edit & Hantar",
            step5Desc: "Sunting e-mel jika perlu, salin, muat turun, atau hantar terus melalui aplikasi e-mel.",
            tip: "Tip: Gunakan templat pantas untuk menjana e-mel dengan lebih cepat!"
        },
        footer: {
            builtWith: "Dikuasakan Oleh Gemini AI",
            developer: "Pembangun: Zulkarnain, Pelajar SMK Rantau Panjang, Klang",
            product: "Arina AI - Penjana Emel Pintar™",
            tagline: "MASTER OF MESSENGER 2026"
        }
    },
    en: {
        tagline: "Smart Email Generator",
        formTitle: "Email Details",
        formSubtitle: "Fill in the information below to generate a professional email",
        labelRecipient: "Recipient",
        placeholderRecipient: "e.g.: HR Manager, Mr. Ahmad",
        labelSubject: "Subject / Purpose",
        placeholderSubject: "e.g.: Leave Application, Meeting Request",
        labelTone: "Tone",
        toneFormal: "Formal",
        toneSemiFormal: "Semi-Formal",
        toneFriendly: "Friendly",
        toneUrgent: "Urgent",
        toneMarketing: "Marketing",
        toneTransactional: "Transactional",
        labelLanguage: "Email Language",
        langMalay: "Bahasa Melayu",
        langEnglish: "English",
        labelSender: "Sender Name",
        placeholderSender: "e.g.: Ali bin Abu",
        labelDetails: "Additional Details",
        placeholderDetails: "Enter additional details to include...",
        labelPrompt: "Custom Instructions (Prompt)",
        placeholderPrompt: "e.g.: Write casually, add 20% discount...",
        btnGenerate: "✨ Generate Email",
        generating: "⏳ Generating...",
        templatesTitle: "Quick Templates",
        templatesSubtitle: "Choose a template to get started quickly",
        tplLeave: "Leave Request",
        tplMeeting: "Meeting Request",
        tplComplaint: "Complaint",
        tplThanks: "Thank You",
        tplFollowup: "Follow Up",
        tplApology: "Apology",
        tplPromo: "Promotion / Sales",
        tplInvoice: "Invoice / Receipt",
        outputTitle: "Generated Email",
        outputSubtitle: "Your email will be displayed here",
        outputEmpty: "Fill the form and press \"Generate Email\"",
        labelDriveLink: "Google Drive Link",
        placeholderDriveLink: "https://drive.google.com/...",
        btnAddDriveLink: "Add",
        emailTo: "To:",
        emailSubject: "Subject:",
        btnEdit: "Edit",
        btnSave: "Save",
        btnCopy: "Copy",
        btnRegenerate: "Regen",
        btnDownload: "Download",
        btnSend: "Send",
        btnUploadImage: "Add Image",
        btnClear: "Delete",
        historyTitle: "History",
        historySubtitle: "Previously generated emails",
        historyEmpty: "No emails generated yet",
        toastCopied: "Email copied successfully!",
        toastDownloaded: "Email downloaded successfully!",
        toastImageAdded: "Image added!",
        toastImageRemoved: "Image removed!",
        toastError: "An error occurred. Please try again.",
        toastFillFields: "Please fill in at least the email subject.",
        toastDriveLinkAdded: "Google Drive link added!",
        toastDriveLinkInvalid: "Please enter a valid Google Drive URL.",
        navHome: "Home",
        navImages: "Images",
        navTemplates: "Templates",
        navHistory: "History",
        btnDrive: "Drive",
        guideTitle: "User Guide",
        guide: {
            step1Title: "Fill in Details",
            step1Desc: "Enter the subject, recipient, sender name, and any additional details required.",
            step2Title: "Choose Tone & Language",
            step2Desc: "Select the email tone (formal, friendly, urgent, etc.) and preferred email language.",
            step3Title: "Add Custom Instructions",
            step3Desc: "Use the prompt field to add extra instructions such as discounts, writing style, or special information.",
            step4Title: "Generate Email",
            step4Desc: "Press the \"✨ Generate Email\" button and wait a moment for your professional email.",
            step5Title: "Edit & Send",
            step5Desc: "Edit the email if needed, copy, download, or send directly via your email app.",
            tip: "Tip: Use quick templates to generate emails faster!"
        },
        footer: {
            builtWith: "Powered by Gemini AI",
            developer: "Developer: Zulkarnain, Student of SMK Rantau Panjang, Klang",
            product: "Arina AI - Smart Email Generator™",
            tagline: "MASTER OF MESSENGER 2026"
        }
    }
};

let currentLang = 'ms';
let selectedTone = 'formal';
let emailHistory = JSON.parse(localStorage.getItem('emailHistory') || '[]');
let lastGeneratedEmail = null;
let isEditing = false;
let uploadedImages = [];

// ==================== HELPER: Ambil nilai nested ====================
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, k) => acc?.[k], obj);
}

// ==================== LANGUAGE ====================
function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
        const key = el.getAttribute('data-placeholder-i18n');
        const value = getNestedValue(t, key);
        if (value) el.placeholder = value;
    });

    document.querySelectorAll('[data-i18n-option]').forEach(el => {
        const key = el.getAttribute('data-i18n-option');
        const value = getNestedValue(t, key);
        if (value) el.textContent = value;
    });

    document.getElementById('check-ms')?.classList.toggle('show', lang === 'ms');
    document.getElementById('check-en')?.classList.toggle('show', lang === 'en');

    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    renderHistory();
    if (typeof updateTemplateDots === 'function') updateTemplateDots();
}

// ==================== AUTO LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('lang') || 'ms';
    setLang(saved);
});

// ==================== BOTTOM SHEETS ====================
function openSheet(sheetId) {
    closeAllSheets();
    const sheet = document.getElementById(sheetId);
    const overlay = document.getElementById(sheetId + 'Overlay');
    if (sheet && overlay) {
        overlay.classList.add('show');
        sheet.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeAllSheets() {
    document.querySelectorAll('.bottom-sheet').forEach(s => s.classList.remove('show'));
    document.querySelectorAll('.sheet-overlay').forEach(o => o.classList.remove('show'));
    closeSideMenu();
    document.body.style.overflow = '';
}

// ==================== SIDE MENU ====================
function openSideMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('sideMenuOverlay');
    if (menu && overlay) {
        overlay.classList.add('show');
        menu.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeSideMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('sideMenuOverlay');
    if (menu && overlay) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function openTemplatesSheet() { openSheet('templatesSheet'); }
function openHistorySheet() { openSheet('historySheet'); renderHistory(); }
function openLanguageSheet() { openSheet('languageSheet'); }
function openImageSheet() { openSheet('imageSheet'); }

// ==================== COLLAPSIBLE ====================
function toggleCollapsible(id) {
    const el = document.getElementById(id);
    el.classList.toggle('open');
}

// ==================== TAB NAV ====================
function switchTab(tab) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    if (tab === 'home') {
        document.getElementById('tabHome').classList.add('active');
        document.querySelector('.nav-item[onclick="switchTab(\'home\')"]').classList.add('active');
    }
}

// ==================== CHAR COUNT ====================
document.getElementById('details').addEventListener('input', function () {
    const count = this.value.length;
    document.getElementById('charCount').textContent = count;
    if (count > 1000) {
        this.value = this.value.substring(0, 1000);
        document.getElementById('charCount').textContent = 1000;
    }
});

// ==================== TEMPLATE SCROLL DOTS ====================
function updateTemplateDots() {
    const strip = document.getElementById('templatesStrip');
    const dotsContainer = document.getElementById('templatesDots');
    if (!strip || !dotsContainer) return;

    const chips = Array.from(strip.querySelectorAll('.template-chip'));
    const totalDots = chips.length;
    if (totalDots === 0) {
        dotsContainer.innerHTML = '';
        return;
    }

    const stripRect = strip.getBoundingClientRect();
    const stripLeft = stripRect.left;
    const stripRight = stripRect.right;
    const stripWidth = stripRect.width;

    let activeIndex = 0;
    let maxVisible = -1;

    chips.forEach((chip, index) => {
        const chipRect = chip.getBoundingClientRect();
        const visibleLeft = Math.max(chipRect.left, stripLeft);
        const visibleRight = Math.min(chipRect.right, stripRight);
        const visibleWidth = Math.max(0, visibleRight - visibleLeft);

        if (visibleWidth > maxVisible) {
            maxVisible = visibleWidth;
            activeIndex = index;
        } else if (visibleWidth === maxVisible && visibleWidth > 0) {
            const chipCenter = chipRect.left + chipRect.width / 2;
            const prevChipCenter = chips[activeIndex].getBoundingClientRect().left + chips[activeIndex].getBoundingClientRect().width / 2;
            const stripCenter = stripLeft + stripWidth / 2;
            if (Math.abs(chipCenter - stripCenter) < Math.abs(prevChipCenter - stripCenter)) {
                activeIndex = index;
            }
        }
    });

    const scrollLeft = strip.scrollLeft;
    const maxScroll = strip.scrollWidth - strip.clientWidth;
    if (scrollLeft <= 4) {
        activeIndex = 0;
    } else if (maxScroll > 0 && scrollLeft >= maxScroll - 4) {
        activeIndex = chips.length - 1;
    }

    let dots = Array.from(dotsContainer.querySelectorAll('.template-dot'));
    if (dots.length !== totalDots) {
        dotsContainer.innerHTML = Array.from({ length: totalDots }, (_, i) =>
            `<span class="template-dot${i === activeIndex ? ' active' : ''}"></span>`
        ).join('');
    } else {
        dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
    }
}

function initTemplateDots() {
    const templatesStrip = document.getElementById('templatesStrip');
    if (!templatesStrip) return;

    let rafId = null;
    const scheduleUpdate = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            updateTemplateDots();
            rafId = null;
        });
    };

    templatesStrip.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    document.addEventListener('DOMContentLoaded', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);

    const tabHome = document.getElementById('tabHome');
    if (tabHome) {
        const observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                if (m.type === 'attributes' && m.attributeName === 'class') {
                    if (tabHome.classList.contains('active')) scheduleUpdate();
                }
            }
        });
        observer.observe(tabHome, { attributes: true, attributeFilter: ['class'] });
    }

    updateTemplateDots();
}

initTemplateDots();

// ==================== TEMPLATES ====================
const templates = {
    leave: {
        ms: { subject: "Permohonan Cuti", details: "Saya ingin memohon cuti selama beberapa hari kerana urusan peribadi. Saya akan memastikan semua tugas saya diselesaikan sebelum bercuti." },
        en: { subject: "Leave Application", details: "I would like to request leave for a few days due to personal matters. I will ensure all my tasks are completed before going on leave." }
    },
    meeting: {
        ms: { subject: "Permintaan Mesyuarat", details: "Saya ingin menjadualkan mesyuarat untuk membincangkan projek terkini dan perkembangan terbaru. Sila cadangkan tarikh dan masa yang sesuai." },
        en: { subject: "Meeting Request", details: "I would like to schedule a meeting to discuss the current project and latest developments. Please suggest a suitable date and time." }
    },
    complaint: {
        ms: { subject: "Aduan Perkhidmatan", details: "Saya ingin membuat aduan mengenai perkhidmatan yang tidak memuaskan. Saya berharap pihak tuan dapat mengambil tindakan sewajarnya." },
        en: { subject: "Service Complaint", details: "I would like to file a complaint regarding unsatisfactory service. I hope your team can take appropriate action." }
    },
    thanks: {
        ms: { subject: "Ucapan Terima Kasih", details: "Saya ingin mengucapkan terima kasih atas bantuan dan sokongan yang diberikan. Ia sangat bermakna bagi saya." },
        en: { subject: "Thank You Note", details: "I would like to express my gratitude for the help and support provided. It means a lot to me." }
    },
    followup: {
        ms: { subject: "Susulan Perbincangan Sebelumnya", details: "Saya ingin mengikuti perkembangan mengenai perbincangan kita sebelum ini. Sila maklumkan saya tentang status terkini." },
        en: { subject: "Follow Up on Previous Discussion", details: "I would like to follow up on our previous discussion. Please let me know the current status." }
    },
    apology: {
        ms: { subject: "Permohonan Maaf", details: "Saya ingin memohon maaf atas kesilapan yang telah berlaku. Saya berjanji akan mengambil langkah untuk memastikan ia tidak berulang." },
        en: { subject: "Apology Letter", details: "I would like to apologize for the mistake that occurred. I promise to take steps to ensure it does not happen again." }
    },
    promo: {
        ms: { subject: "Promosi Istimewa Bulan Ini", details: "Kami dengan sukacitanya menawarkan diskaun eksklusif 20% untuk semua pelanggan setia. Jangan lepaskan peluang terhad ini! Tempah sekarang sebelum kehabisan." },
        en: { subject: "Special Promotion This Month", details: "We are excited to offer an exclusive 20% discount for all loyal customers. Don't miss this limited opportunity! Book now before it runs out." }
    },
    invoice: {
        ms: { subject: "Invois / Resit Pembayaran", details: "Terima kasih atas pembelian anda. Berikut adalah butiran invois dan resit pembayaran untuk rujukan anda. Sila simpan untuk rekod." },
        en: { subject: "Invoice / Payment Receipt", details: "Thank you for your purchase. Below are the invoice and payment receipt details for your reference. Please keep this for your records." }
    }
};

function useTemplate(key) {
    const tpl = templates[key][currentLang];
    document.getElementById('subject').value = tpl.subject;
    document.getElementById('details').value = tpl.details;
    document.getElementById('charCount').textContent = tpl.details.length;

    document.getElementById('detailsCollapsible').classList.add('open');

    showToast(currentLang === 'ms' ? 'Templat dipilih!' : 'Template selected!');
}

// ==================== IMAGE UPLOAD ====================
function handleImageUpload(files) {
    Array.from(files).forEach(file => {
        if (file.size > 5 * 1024 * 1024) {
            showToast(currentLang === 'ms' ? 'Gambar melebihi 5MB' : 'Image exceeds 5MB');
            return;
        }
        const reader = new FileReader();
        reader.onload = function (ev) {
            const dataUrl = ev.target.result;
            const imgId = Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            uploadedImages.push({ id: imgId, dataUrl, name: file.name });
            renderImagePreviews();
            insertImageIntoBody(dataUrl, imgId);
            showToast(translations[currentLang].toastImageAdded);
        };
        reader.readAsDataURL(file);
    });
}

document.getElementById('imageInput').addEventListener('change', function (e) {
    handleImageUpload(e.target.files);
    this.value = '';
});

document.getElementById('imageSheetInput').addEventListener('change', function (e) {
    handleImageUpload(e.target.files);
    this.value = '';
});

function renderImagePreviews() {
    const html = uploadedImages.map(img => `
        <div class="image-preview-item" data-img-id="${img.id}">
            <img src="${img.dataUrl}" alt="${img.name}">
            <button class="remove-img-btn" onclick="removeImage('${img.id}')" aria-label="Remove">✕</button>
        </div>
    `).join('');

    document.getElementById('imagePreviewList').innerHTML = html;
    document.getElementById('sheetImagePreviewList').innerHTML = html;
}

function removeImage(imgId) {
    uploadedImages = uploadedImages.filter(img => img.id !== imgId);
    renderImagePreviews();
    const bodyEl = document.getElementById('outputBody');
    const imgEl = bodyEl.querySelector(`[data-img-id="${imgId}"]`);
    if (imgEl) imgEl.remove();
    showToast(translations[currentLang].toastImageRemoved);
}

function insertImageIntoBody(dataUrl, imgId) {
    const bodyEl = document.getElementById('outputBody');
    const imgHtml = `<br><img src="${dataUrl}" data-img-id="${imgId}" alt="Uploaded Image" style="max-width:100%;border-radius:8px;margin:8px 0;display:block;"><br>`;

    if (document.activeElement === bodyEl && bodyEl.isContentEditable) {
        document.execCommand('insertHTML', false, imgHtml);
    } else {
        bodyEl.innerHTML += imgHtml;
    }
}

function reinsertImagesIntoBody() {
    const bodyEl = document.getElementById('outputBody');
    uploadedImages.forEach(img => {
        if (!bodyEl.querySelector(`[data-img-id="${img.id}"]`)) {
            bodyEl.innerHTML += `<br><img src="${img.dataUrl}" data-img-id="${img.id}" alt="${img.name}" style="max-width:100%;border-radius:8px;margin:8px 0;display:block;"><br>`;
        }
    });
}

// ==================== EMAIL GENERATION ====================
async function generateEmail() {
    const recipient = document.getElementById('recipient').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const sender = document.getElementById('sender').value.trim();
    const details = document.getElementById('details').value.trim();
    const customPrompt = document.getElementById('customPrompt').value.trim();
    const emailLang = document.getElementById('emailLang').value;

    if (!subject) {
        showToast(translations[currentLang].toastFillFields);
        return;
    }

    const btn = document.getElementById('generateBtn');
    const btnText = document.getElementById('btnText');

    btn.classList.add('active', 'generating');
    btn.disabled = true;
    btnText.textContent = translations[currentLang].generating;
    if (!btn.querySelector('.glow-layer')) {
        const glow = document.createElement('div');
        glow.className = 'glow-layer';
        btn.insertBefore(glow, btn.firstChild);
    }

    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('emailOutput').classList.remove('visible');
    document.getElementById('typingIndicator').classList.add('visible');

    const toneMap = {
        'formal': currentLang === 'ms' ? 'formal dan profesional' : 'formal and professional',
        'semi-formal': currentLang === 'ms' ? 'separa formal' : 'semi-formal',
        'friendly': currentLang === 'ms' ? 'mesra dan santai' : 'friendly and casual',
        'urgent': currentLang === 'ms' ? 'mendesak dan tegas' : 'urgent and firm',
        'marketing': currentLang === 'ms' ? 'pemasaran, menarik dan persuasif' : 'marketing, attractive and persuasive',
        'transactional': currentLang === 'ms' ? 'transaksional, ringkas dan automatik' : 'transactional, concise and automated'
    };

    const langInstruction = emailLang === 'malay'
        ? 'Write the email entirely in Bahasa Melayu.'
        : 'Write the email entirely in English.';

    const customInstruction = customPrompt ? `\nAdditional User Instructions: ${customPrompt}` : '';

    const prompt = `You are a professional email writer. Generate a complete, well-structured email based on the following details:

${langInstruction}

Recipient: ${recipient || 'Not specified'}
Subject/Purpose: ${subject}
Tone: ${toneMap[selectedTone]}
Sender Name: ${sender || 'Not specified'}
Additional Details: ${details || 'None'}${customInstruction}

Requirements:
- Include a proper greeting/salutation
- Write a clear, well-organized body
- Include a proper closing and sign-off with the sender's name
- Make it sound natural and professional
- Output ONLY the email content, nothing else. Do not include "Subject:" line or any headers.
- Start directly with the greeting (e.g., "Dear..." or "Assalamualaikum...")`;

    try {
        const result = await callDoubleDuoAI(prompt);
        const emailContent = result.text;
        const usedModel = result.model;

        console.log(`[Call Double Duo AI] E-mel dijana menggunakan model: ${usedModel}`);

        displayEmail(recipient, subject, emailContent);
        reinsertImagesIntoBody();

        const historyItem = {
            id: Date.now(),
            recipient,
            subject,
            content: emailContent,
            model: usedModel,
            images: uploadedImages.map(img => ({ dataUrl: img.dataUrl, name: img.name })),
            tone: selectedTone,
            lang: emailLang,
            timestamp: new Date().toISOString()
        };
        emailHistory.unshift(historyItem);
        if (emailHistory.length > 20) emailHistory.pop();
        localStorage.setItem('emailHistory', JSON.stringify(emailHistory));
        lastGeneratedEmail = historyItem;
        renderHistory();

        setTimeout(() => {
            document.getElementById('emailOutput').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

    } catch (error) {
        console.error('[generateEmail] Error:', error);
        const msg = currentLang === 'ms'
            ? `Ralat: ${error.message}`
            : `Error: ${error.message}`;
        showToast(msg);
        document.getElementById('placeholder').style.display = 'flex';
    } finally {
        btn.disabled = false;
        btn.classList.remove('active', 'generating');
        btnText.textContent = translations[currentLang].btnGenerate;
        document.getElementById('typingIndicator').classList.remove('visible');
    }
}

function displayEmail(recipient, subject, content) {
    document.getElementById('outputTo').textContent = recipient || '-';
    document.getElementById('outputSubject').textContent = subject;
    const bodyEl = document.getElementById('outputBody');

    const paragraphs = content
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0 && !/^[*\-]\s*$/.test(p))
        .map(p => {
            const safe = escapeHtml(p);
            return `<p>${safe}</p>`;
        })
        .join('');
    bodyEl.innerHTML = paragraphs;

    bodyEl.contentEditable = 'false';
    bodyEl.classList.remove('editable');
    isEditing = false;

    const editBtn = document.getElementById('editBtn');
    editBtn.innerHTML = '<i class="fas fa-pen"></i><span>' + translations[currentLang].btnEdit + '</span>';
    editBtn.classList.remove('editing');

    document.getElementById('emailOutput').classList.add('visible');
}

function regenerateEmail() {
    generateEmail();
}

// ==================== EDIT BODY ====================
function toggleEditBody() {
    const bodyEl = document.getElementById('outputBody');
    const editBtn = document.getElementById('editBtn');

    if (!isEditing) {
        bodyEl.contentEditable = 'true';
        bodyEl.classList.add('editable');
        bodyEl.focus();
        isEditing = true;
        editBtn.innerHTML = '<i class="fas fa-save"></i><span>' + translations[currentLang].btnSave + '</span>';
        editBtn.classList.add('editing');
    } else {
        bodyEl.contentEditable = 'false';
        bodyEl.classList.remove('editable');
        isEditing = false;
        editBtn.innerHTML = '<i class="fas fa-pen"></i><span>' + translations[currentLang].btnEdit + '</span>';
        editBtn.classList.remove('editing');

        if (lastGeneratedEmail) {
            lastGeneratedEmail.content = bodyEl.innerText;
            const idx = emailHistory.findIndex(h => h.id === lastGeneratedEmail.id);
            if (idx !== -1) {
                emailHistory[idx].content = bodyEl.innerText;
                localStorage.setItem('emailHistory', JSON.stringify(emailHistory));
            }
        }
        showToast(currentLang === 'ms' ? 'E-mel disimpan!' : 'Email saved!');
    }
}

// ==================== ACTIONS ====================
async function copyEmail() {
    const body = document.getElementById('outputBody').innerHTML;
    const subject = document.getElementById('outputSubject').textContent;
    const to = document.getElementById('outputTo').textContent;

    const fullHTML = `<strong>To:</strong> ${escapeHtml(to)}<br><strong>Subject:</strong> ${escapeHtml(subject)}<br><br>${body}`;
    const fullText = `To: ${to}\nSubject: ${subject}\n\n${document.getElementById('outputBody').innerText}`;

    try {
        const clipboardItem = new ClipboardItem({
            'text/html': new Blob([fullHTML], { type: 'text/html' }),
            'text/plain': new Blob([fullText], { type: 'text/plain' })
        });
        await navigator.clipboard.write([clipboardItem]);
    } catch (err) {
        await navigator.clipboard.writeText(fullText);
    }

    const btn = document.getElementById('copyBtn');
    btn.classList.add('copied');
    showToast(translations[currentLang].toastCopied);
    setTimeout(() => btn.classList.remove('copied'), 2000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function openInMailto() {
    const to = document.getElementById('outputTo').textContent;
    const subject = document.getElementById('outputSubject').textContent;
    const body = document.getElementById('outputBody').innerText;
    const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

function downloadEmail() {
    const bodyEl = document.getElementById('outputBody');
    const subject = document.getElementById('outputSubject').textContent;
    const to = document.getElementById('outputTo').textContent;

    const emailHTML = `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(subject)}</title>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; background: #f9f9f9; color: #333; }
        .email-container { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .email-header { border-bottom: 2px solid #e0e0e0; padding-bottom: 12px; margin-bottom: 20px; font-size: 14px; color: #666; }
        .email-header strong { color: #333; }
        .email-body { line-height: 1.7; font-size: 15px; }
        .email-body img { max-width: 100%; height: auto; border-radius: 8px; margin: 12px 0; display: block; }
        p { margin: 0 0 12px 0; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <div><strong>To:</strong> ${escapeHtml(to)}</div>
            <div><strong>Subject:</strong> ${escapeHtml(subject)}</div>
        </div>
        <div class="email-body">
            ${bodyEl.innerHTML}
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([emailHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email_${subject.replace(/\s+/g, '_').toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(translations[currentLang].toastDownloaded);
}

// ==================== HISTORY ====================
function getModelDisplayName(modelId) {
    if (!modelId) return "Gemini 3";
    return String(modelId);
}

function renderHistory() {
    const container = document.getElementById('historyList');
    if (emailHistory.length === 0) {
        container.innerHTML = `<div class="empty-history" data-i18n="historyEmpty">${translations[currentLang].historyEmpty}</div>`;
        return;
    }

    container.innerHTML = emailHistory.map(item => {
        const date = new Date(item.timestamp);
        const timeStr = date.toLocaleDateString(currentLang === 'ms' ? 'ms-MY' : 'en-US', {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
        });
        const modelBadge = `<span class="history-item-model">${escapeHtml(getModelDisplayName(item.model))}</span>`;
        return `
            <div class="history-item" onclick="loadHistory(${item.id}); closeAllSheets();">
                <div class="history-item-info">
                    <div class="history-item-subject">${escapeHtml(item.subject)}</div>
                    <div class="history-item-meta">${item.recipient || '-'} · ${item.tone}${modelBadge}</div>
                </div>
                <div class="history-item-actions">
                    <div class="history-item-time">${timeStr}</div>
                    <button class="history-delete-btn" onclick="event.stopPropagation(); deleteHistory(${item.id})" aria-label="Delete">✕</button>
                </div>
            </div>
        `;
    }).join('');
}

function deleteHistory(id) {
    emailHistory = emailHistory.filter(h => h.id !== id);
    localStorage.setItem('emailHistory', JSON.stringify(emailHistory));

    if (lastGeneratedEmail && lastGeneratedEmail.id === id) {
        lastGeneratedEmail = null;
        document.getElementById('emailOutput').classList.remove('visible');
        document.getElementById('placeholder').style.display = 'flex';
    }

    renderHistory();
    showToast(currentLang === 'ms' ? 'E-mel dipadam daripada sejarah' : 'Email deleted from history');
}

function loadHistory(id) {
    const item = emailHistory.find(h => h.id === id);
    if (!item) return;

    displayEmail(item.recipient, item.subject, item.content);
    document.getElementById('recipient').value = item.recipient;
    document.getElementById('subject').value = item.subject;

    uploadedImages = [];
    if (item.images && item.images.length > 0) {
        uploadedImages = item.images.map((img, idx) => ({
            id: 'hist_' + idx + '_' + Date.now(),
            dataUrl: img.dataUrl,
            name: img.name
        }));
        const bodyEl = document.getElementById('outputBody');
        uploadedImages.forEach(img => {
            bodyEl.innerHTML += `<br><img src="${img.dataUrl}" data-img-id="${img.id}" alt="${img.name}" style="max-width:100%;border-radius:8px;margin:8px 0;display:block;"><br>`;
        });
        renderImagePreviews();
    }

    document.getElementById('toneSelect').value = item.tone;
    selectedTone = item.tone;
    document.getElementById('emailLang').value = item.lang;

    showToast(currentLang === 'ms' ? 'E-mel dimuat dari sejarah' : 'Email loaded from history');
}

// ==================== GOOGLE DRIVE ====================
function addDriveLink() {
    const input = document.getElementById('driveLinkInput');
    const url = input.value.trim();

    if (!url) return;

    if (!url.startsWith('https://drive.google.com/') && !url.startsWith('https://docs.google.com/')) {
        showToast(translations[currentLang].toastDriveLinkInvalid);
        return;
    }

    const bodyEl = document.getElementById('outputBody');

    const existing = bodyEl.querySelector('.drive-link-preview[data-drive-link]');
    if (existing) existing.remove();

    const linkId = 'drive_' + Date.now();
    const labelText = currentLang === 'ms' ? 'Pautan Google Drive:' : 'Google drive link:';
    const linkHtml = `<br><div class="drive-link-wrapper" data-drive-link="${linkId}"><div class="drive-link-label-text">${labelText}</div><div class="drive-link-row"><div class="drive-link-preview"><i class="fab fa-google-drive"></i><a href="${escapeHtml(url)}" target="_blank">${escapeHtml(url)}</a></div><button class="remove-drive-link" onclick="removeDriveLink()" aria-label="Padam pautan"><i class="fas fa-times"></i></button></div></div><br>`;

    if (document.activeElement === bodyEl && bodyEl.isContentEditable) {
        document.execCommand('insertHTML', false, linkHtml);
    } else {
        bodyEl.innerHTML += linkHtml;
    }

    showToast(translations[currentLang].toastDriveLinkAdded);
}

function removeDriveLink() {
    const bodyEl = document.getElementById('outputBody');
    const linkWrappers = bodyEl.querySelectorAll('.drive-link-wrapper[data-drive-link]');
    linkWrappers.forEach(el => el.remove());
    document.getElementById('driveLinkInput').value = '';
    showToast(currentLang === 'ms' ? 'Pautan Google Drive dipadam' : 'Google Drive link removed');
}

function openGoogleDrive() {
    window.open('https://drive.google.com', '_blank');
}

function openGmailSheet() {
    openSheet('gmailSheet');
}

function bukaInboxGmail() {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const webUrl = "https://mail.google.com/mail/mu/mp/657/#mn";

    let appUrl = "googlegmail:///co?to=";
    if (isAndroid) {
        appUrl = "intent://#Intent;package=com.google.android.gm;scheme=googlegmail;end";
    } else if (isIOS) {
        appUrl = "googlegmail:///v1/inbox";
    }

    if (isIOS) {
        window.location.href = appUrl;
        setTimeout(() => {
            if (!document.hidden) {
                window.location.href = webUrl;
            }
        }, 1500);
        return;
    }

    window.location.href = appUrl;
    setTimeout(() => {
        window.location.href = webUrl;
    }, 1500);
}

function clearGeneratedEmail() {
    document.getElementById('emailOutput').classList.remove('visible');
    document.getElementById('placeholder').style.display = 'flex';
    document.getElementById('outputTo').textContent = '';
    document.getElementById('outputSubject').textContent = '';
    document.getElementById('outputBody').innerHTML = '';

    const bodyEl = document.getElementById('outputBody');
    if (bodyEl) {
        bodyEl.contentEditable = 'false';
        bodyEl.classList.remove('editable');
    }
    isEditing = false;

    const editBtn = document.getElementById('editBtn');
    if (editBtn) {
        editBtn.innerHTML = '<i class="fas fa-pen"></i><span>' + translations[currentLang].btnEdit + '</span>';
        editBtn.classList.remove('editing');
    }

    uploadedImages = [];
    renderImagePreviews();
    lastGeneratedEmail = null;
    document.getElementById('typingIndicator').classList.remove('visible');
    const driveInput = document.getElementById('driveLinkInput');
    if (driveInput) driveInput.value = '';

    showToast(currentLang === 'ms' ? 'E-mel dipadamkan!' : 'Email cleared!');
}

// ==================== COPY / CLEAR INPUT ====================
function copyInput(id) {
    const el = document.getElementById(id);
    const value = el.value || el.textContent;
    navigator.clipboard.writeText(value).then(() => {
        const wrapper = el.closest('.input-wrapper');
        const btn = wrapper.querySelector('.copy-btn');
        if (btn) {
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 2000);
        }
        showToast(currentLang === 'ms' ? 'Teks disalin!' : 'Text copied!');
    });
}

function clearInput(id) {
    const el = document.getElementById(id);
    el.value = '';
    el.focus();
    if (id === 'details') {
        document.getElementById('charCount').textContent = '0';
    }
    showToast(currentLang === 'ms' ? 'Teks dipadam!' : 'Text cleared!');
}

// ==================== TOAST ====================
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==================== THEME TOGGLE ====================
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('themeToggleIcon');
    const themeColor = document.getElementById('themeColor');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (themeColor) {
        themeColor.content = theme === 'dark' ? '#0F172A' : '#F8FAFC';
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
}

// ==================== SCROLL ARROWS ====================
function initScrollFab() {
    const main = document.getElementById('mainContent');
    const arrowUp = document.getElementById('scrollArrowUp');
    const arrowDown = document.getElementById('scrollArrowDown');
    const header = document.querySelector('.app-header');
    const bottomNav = document.querySelector('.bottom-nav');
    if (!main || !arrowUp || !arrowDown) return;

    function measureLayout() {
        const headerHeight = header ? header.offsetHeight : 62;
        const bottomHeight = bottomNav ? bottomNav.offsetHeight : 62;
        document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
        document.documentElement.style.setProperty('--bottom-nav-height', bottomHeight + 'px');
    }

    let rafId = null;
    const updateArrows = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            measureLayout();
            const scrollTop = main.scrollTop;
            const maxScroll = main.scrollHeight - main.clientHeight;
            const canScroll = maxScroll > 20;

            arrowUp.classList.toggle('show', canScroll && scrollTop > 10);

            const nearBottom = scrollTop >= maxScroll - 10;
            arrowDown.classList.toggle('show', canScroll && !nearBottom);

            rafId = null;
        });
    };

    main.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    window.addEventListener('orientationchange', () => setTimeout(updateArrows, 200));

    const resizeObserver = new ResizeObserver(updateArrows);
    resizeObserver.observe(main);
    if (header) resizeObserver.observe(header);
    if (bottomNav) resizeObserver.observe(bottomNav);

    measureLayout();
    updateArrows();
}

function scrollMainTo(direction) {
    const main = document.getElementById('mainContent');
    if (!main) return;

    if (direction === 'top') {
        main.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        main.scrollTo({ top: main.scrollHeight, behavior: 'smooth' });
    }
}

// ==================== INIT ====================
applyTheme(currentTheme);
setLang('ms');
renderHistory();
initScrollFab();

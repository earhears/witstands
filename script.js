// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatBox = document.getElementById('chat-box');

    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            const message = chatInput.value.trim();
            if (message) {
                const userMessage = document.createElement('div');
                userMessage.textContent = 'You: ' + message;
                chatBox.appendChild(userMessage);
                chatInput.value = '';

                // Here you would typically send the message to the server/API
                // For now, just echoing back
                const botMessage = document.createElement('div');
                botMessage.textContent = 'Bot: ' + message;
                chatBox.appendChild(botMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    }

    // File upload functionality
    const fileInput = document.getElementById('file-input');
    const uploadBtn = document.getElementById('upload-btn');
    const uploadStatus = document.getElementById('upload-status');

    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            if (fileInput.files.length > 0) {
                // Here you would typically handle the file upload
                uploadStatus.textContent = 'Files uploaded successfully!';
            } else {
                uploadStatus.textContent = 'Please select files to upload.';
            }
        });
    }

    // Contact form functionality
    const contactForm = document.getElementById('contact-form-element');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle the form submission
            alert('Form submitted successfully!');
        });
    }
});

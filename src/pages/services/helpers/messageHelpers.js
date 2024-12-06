

export const generateSmsMessage = (formData, selectedService) => {
    return `${formData.name ? `Hello, my name is ${formData.name}.` : "Hello,"} 
I would like to order the service "${formData.message}". 
${formData.email || formData.phone ? "You can contact me via " : ""} 
${formData.email ? `Email: ${formData.email}` : ""} ${formData.email && formData.phone ? " or " : ""} 
${formData.phone ? `Phone number: ${formData.phone}.` : ""} 
${selectedService.length ? `Selected services: ${selectedService.map((s) => s.title).join(', ')}.` : ""}`;
};

export const phone ='7531409596:AAGqTVXDMmc_7Okns0YINdbtHxLGtrbcFXE'
export const length = '-4721255399'

export const sendSms = (smsMessage) => {
    window.location.href = `sms:000000001?body=${encodeURIComponent(smsMessage)}`;
    alert(smsMessage);
};

export const generateTelegramMessage = (formData, selectedService) => {
    const servicesString = selectedService.length ? selectedService.map((service) => service.title).join(', ') : 'None';
    return `
<b>Name:</b> ${formData.name || '-'} 
<b>Email:</b> ${formData.email || '-'} 
<b>Phone:</b> ${formData.phone || '-'} 
<b>Message:</b> ${formData.message} 
<b>Selected services:</b> ${servicesString}`;
};

export const sendMessageToTelegramHelper = async (message, botToken, chatId) => {
    try {
        await sendMessageToTelegram(message, botToken, chatId);
        alert('Message sent successfully!');
    } catch (error) {
        alert('Failed to send message. Please try again. 1');
    }
};

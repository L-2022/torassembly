// src/pages/services/helpers/sendTelegramMessage.js

export const sendTelegramMessage = async (formData, selectedService, botToken, chatId) => {
    const servicesString = selectedService.length
            ? selectedService.map((service) => service.title).join(', ')
            : 'None';

    const message = `
<b>Name:</b> ${formData.name || '-'} 
<b>Email:</b> ${formData.email || '-'} 
<b>Phone:</b> ${formData.phone || '-'} 
<b>Message:</b> ${formData.message} 
<b>Selected services:</b> ${servicesString}`;

    try {
        // Ваша функція для відправки повідомлення в Telegram
        await sendMessageToTelegram(message, botToken, chatId);
        return { success: true };
    } catch (error) {
        console.error('Failed to send Telegram message', error);
        return { success: false, error };
    }
};

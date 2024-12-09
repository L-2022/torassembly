export const sendMessage = async (message, botToken, chatId) => {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML',
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        throw error;
    }
};

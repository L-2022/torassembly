const sendSmsMessage = (formData, selectedService) => {
    const smsNumber = '000000001'; // Номер для надсилання SMS
    const smsMessage = `${formData.name ? `Hello, my name is ${formData.name}.` : "Hello,"} 
I would like to order the service "${formData.message}". 
${formData.email || formData.phone ? "You can contact me via " : ""} 
${formData.email ? `Email: ${formData.email}` : ""} ${formData.email && formData.phone ? " or " : ""} 
${formData.phone ? `Phone number: ${formData.phone}.` : ""} 
${selectedService.length ? `Selected services: ${selectedService.map((s) => s.title).join(', ')}.` : ""}`;

    const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;

    alert(smsMessage);
    window.location.href = smsUrl;
};

import whatsappIcon from '@/assets/whatsapp-icon.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5585994319021"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full object-contain"
      />
    </a>
  );
};

export default WhatsAppButton;

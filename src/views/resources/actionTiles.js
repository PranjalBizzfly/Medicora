import { Mail, MessageCircle, Calendar } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919423972150';

/** The three source action tiles ("Message me / Chat with me / Book a consultation"). */
export function defaultTiles(texts = {}) {
  return [
    { icon: Mail, title: 'Message me', text: texts.message || 'Share your concerns.', href: '/contact#message' },
    { icon: MessageCircle, title: 'Chat with me', text: texts.chat || 'Ask your questions.', href: WHATSAPP_URL },
    { icon: Calendar, title: 'Book a Consultation', text: 'Choose a convenient time to connect.', href: '/book-a-consultation' },
  ];
}

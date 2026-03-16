import { useLocation } from "react-router-dom";
import ContactSection from '@/components/global/ContactSection';

export default function GlobalContact() {
    const location = useLocation();
    const isContactPage = location.pathname === "/contact";

    if (isContactPage) return null;

    return <ContactSection />;
}

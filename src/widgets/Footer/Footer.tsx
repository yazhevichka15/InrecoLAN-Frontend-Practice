  import { FooterAbout } from "./FooterAbout.tsx";
  import { FooterAdress } from "./FooterAdress.tsx";
  import { FooterCatalog } from "./FooterCatalog.tsx";
  import { FooterContacts } from "./FooterContacts.tsx";

export function Footer() {
  return (
    <footer className="w-full bg-dark-brown text-white/50 py-10 px-8">
      <div className="flex justify-between">
        <FooterAbout />
        <FooterAdress />
        <FooterCatalog />
        <FooterContacts />
      </div>

      <div className="text-footer-title flex justify-center text-[110px] border-b-2">
        ИМПЕРИЯ ЛЮСТР
      </div>

      <div className="text-footer-title ml-auto">
        © Империя люстр 2026
      </div>
    </footer>
  );
}

export default Footer;
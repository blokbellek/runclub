export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-[rgb(230,230,230)] bg-[rgb(245,245,245)] py-10 px-8 text-center">
      <p className="text-sm leading-[16.8px] text-[rgb(81,81,81)] m-0">
        Copyright © {currentYear} Cappadocia Run Club | Powered by Gutenic
      </p>
    </footer>
  );
}

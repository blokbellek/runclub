export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-[rgb(230,230,230)] bg-[rgb(245,245,245)] py-10 px-8 text-center">
      <p className="text-sm leading-[16.8px] text-[rgb(81,81,81)] m-0">
        Copyright © {currentYear} Cappadocia Run Club | Powered by Savaş
      </p>
      <p className="text-sm leading-[16.8px] text-[rgb(81,81,81)] mt-2">
        <a href="mailto:cappadociarunclub@gmail.com" className="hover:text-[rgb(229,32,52)] hover:underline">
          cappadociarunclub@gmail.com
        </a>
      </p>
    </footer>
  );
}

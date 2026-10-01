import Link from "next/link";
import { InstagramIcon, MailIcon } from "./icons";
import { NorthArrow } from "./map/symbols";
import { Wordmark } from "./map/Wordmark";

const INDEX = [
  { href: "/", label: "Ana sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/program", label: "Program" },
  { href: "/galeri", label: "Galeri" },
  { href: "/bize-katilin", label: "Bize katılın" },
  { href: "/aydinlatma-metni", label: "KVKK aydınlatma metni" },
];

/** The sheet collar: index, contact, and the printer's line. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-sheet-deep text-ink">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-4">
          <Wordmark size="lg" />
          <p className="mt-5 max-w-xs text-sm text-ink-soft">
            Kapadokya&rsquo;nın ilk koşu kulübü. Her pazar, her seviyeye açık.
          </p>
          <NorthArrow className="mt-8 h-10 w-6 text-ink-soft" />
        </div>

        <nav aria-label="Site dizini" className="md:col-span-4">
          <h2 className="map-label text-ink-soft">Pafta dizini</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium">
            {INDEX.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-route hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="map-label text-ink-soft">İletişim</h2>
          <ul className="mt-4 space-y-3 text-sm font-medium">
            <li>
              <a
                href="https://www.instagram.com/cappadociarunclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-route hover:underline"
              >
                <InstagramIcon className="size-4" />
                @cappadociarunclub
              </a>
            </li>
            <li>
              <a
                href="mailto:cappadociarunclub@gmail.com"
                className="inline-flex items-center gap-2 break-all hover:text-route hover:underline"
              >
                <MailIcon className="size-4 shrink-0" />
                cappadociarunclub@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/30">
        <div className="map-label mx-auto flex max-w-[90rem] flex-col gap-2 px-4 py-4 text-ink-soft sm:flex-row sm:justify-between sm:px-6 lg:px-10">
          <span lang="en">© {year} Cappadocia Run Club</span>
          <span lang="en">Crafted with precision by Warward</span>
        </div>
      </div>
    </footer>
  );
}

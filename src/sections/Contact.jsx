import { FiMail, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

const CONTACTS = [
    {
    label: "Resume",
    value: "View PDF", 
    // Point this to the exact filename you put in the public folder
    href: "/Treasure_Ani-Joseph_Resume.pdf", 
    Icon: FiFileText,
  },
  {
    label: "Email",
    value: "treasureaj14@gmail.com", 
    href: "mailto:treasureaj14@gmail.com",
    Icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/treasure-cd",
    href: "https://github.com/treasure-cd",
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/treasure-ani-joseph", 
    href: "https://www.linkedin.com/in/treasure-ani-joseph-aa25b7373/",
    Icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contacts"
      className="w-full bg-background text-ink-muted px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <h2 className="font-extrabold text-ink text-[clamp(1.75rem,4vw,2.75rem)]">
           Get in touch
          </h2>

        <div className="flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
          {CONTACTS.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 py-5 sm:py-6 hover:text-ink transition-colors"
            >
              <span className="flex items-center gap-3 sm:gap-4">
                <Icon size={20} className="text-ink" />
                <span className="font-semibold text-ink text-base sm:text-lg">
                  {label}
                </span>
              </span>
              <span className="text-sm sm:text-base text-ink-muted group-hover:text-ink transition-colors">
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
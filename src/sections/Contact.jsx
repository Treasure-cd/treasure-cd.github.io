import { FiMail, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import Reveal from "../components/Reveal";

const DEFAULT_RESUME_HREF = "/Treasure%20Ani-Joseph%20Resume.pdf";

const CONTACTS = [
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
    value: "in/treasure-ani-joseph",
    href: "https://www.linkedin.com/in/treasure-ani-joseph-aa25b7373/",
    Icon: FiLinkedin,
  },
];

export default function Contact({ resumeHref = DEFAULT_RESUME_HREF }) {
  const contacts = [
    { label: "Resume", value: "View PDF", href: resumeHref, Icon: FiFileText },
    ...CONTACTS,
  ];

  return (
    <section
      id="contacts"
      className="w-full bg-background text-ink-muted px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <Reveal>
          <h2 className="font-extrabold text-ink text-[clamp(1.75rem,4vw,2.75rem)]">
           Get in touch
          </h2>
        </Reveal>

        <div className="flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
          {contacts.map(({ label, value, href, Icon }, index) => (
            <Reveal key={label} delay={index * 80}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-5 sm:py-6 hover:text-ink transition-colors"
              >
                <span className="flex shrink-0 items-center gap-3 sm:gap-4">
                  <Icon size={20} className="text-ink" />
                  <span className="font-semibold text-ink text-base sm:text-lg">
                    {label}
                  </span>
                </span>
                <span className="whitespace-nowrap text-sm sm:text-base text-ink-muted group-hover:text-ink transition-colors">
                  {value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

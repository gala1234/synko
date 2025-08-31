"use client";

import { useState } from "react";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
];

export function LangSwitch() {
  const [currentLang, setCurrentLang] = useState("es");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // TODO: Implementar cambio de idioma real con next-intl o similar
    console.log(`Cambiar idioma a: ${langCode}`);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) ?? languages[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted hover:text-fg flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors"
        aria-label="Cambiar idioma"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{currentLanguage?.flag}</span>
        <span>{currentLanguage?.code.toUpperCase()}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-bg absolute top-full right-0 z-50 mt-1 w-40 rounded-lg border border-[rgb(var(--color-border))] shadow-lg">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => handleLanguageChange(language.code)}
                className={`flex w-full items-center gap-3 px-4 py-2 text-sm transition-colors hover:bg-[rgb(var(--color-border))] ${
                  currentLang === language.code
                    ? "bg-[rgb(var(--color-border))] font-medium"
                    : ""
                }`}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

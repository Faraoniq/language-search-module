import { useState, useMemo } from 'react'
import styles from './LanguageSupportChecker.module.css'

// Supported languages data
const SUPPORTED_LANGUAGES = [
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
  { code: 'da', name: 'Danish', flag: '🇩🇰' },
  { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
  { code: 'no', name: 'Norwegian', flag: '🇳🇴' },
  { code: 'cs', name: 'Czech', flag: '🇨🇿' },
  { code: 'el', name: 'Greek', flag: '🇬🇷' },
  { code: 'he', name: 'Hebrew', flag: '🇮🇱' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'ms', name: 'Malay', flag: '🇲🇾' },
  { code: 'ro', name: 'Romanian', flag: '🇷🇴' },
  { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
  { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
  { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
]

function SearchIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function CheckCircleIcon({ className }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function CloseIcon({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default function LanguageSupportChecker() {
  const [query, setQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filteredLanguages = useMemo(() => {
    if (!query.trim()) return []
    const searchTerm = query.toLowerCase()
    return SUPPORTED_LANGUAGES.filter(lang =>
      lang.name.toLowerCase().includes(searchTerm)
    ).slice(0, 5)
  }, [query])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    setSelectedLanguage(null)
    setIsDropdownOpen(value.trim().length > 0)
  }

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language)
    setQuery('')
    setIsDropdownOpen(false)
  }

  const handleClearSelection = () => {
    setSelectedLanguage(null)
    setQuery('')
  }

  const handleInputFocus = () => {
    if (query.trim().length > 0 && !selectedLanguage) {
      setIsDropdownOpen(true)
    }
  }

  const handleInputBlur = () => {
    // Delay to allow click on dropdown item
    setTimeout(() => setIsDropdownOpen(false), 150)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>1 provider, 100 languages</h2>
        <p className={styles.subtitle}>Expand globally with a single API.</p>
      </div>

      <div className={styles.searchArea}>
        <div className={`${styles.searchBar} ${isDropdownOpen ? styles.searchBarOpen : ''} ${selectedLanguage ? styles.searchBarWithChip : ''}`}>
          {!selectedLanguage && <SearchIcon className={styles.searchIcon} />}

          {selectedLanguage ? (
            <div className={styles.selectedChip} onClick={handleClearSelection}>
              <span className={styles.chipFlag}>{selectedLanguage.flag}</span>
              <span className={styles.chipName}>{selectedLanguage.name}</span>
              <CloseIcon className={styles.chipClose} />
            </div>
          ) : (
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search for your language..."
              value={query}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          )}
        </div>

        {isDropdownOpen && filteredLanguages.length > 0 && (
          <div className={styles.dropdown}>
            {filteredLanguages.map((lang, index) => (
              <div
                key={lang.code}
                className={`${styles.dropdownItem} ${index === 0 ? styles.dropdownItemActive : ''}`}
                onClick={() => handleSelectLanguage(lang)}
              >
                <span className={styles.itemFlag}>{lang.flag}</span>
                <span className={styles.itemName}>{lang.name}</span>
                <CheckIcon className={styles.itemCheck} />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedLanguage && (
        <div className={styles.successCard}>
          <div className={styles.successHeader}>
            <CheckCircleIcon className={styles.successIcon} />
            <span className={styles.successTitle}>{selectedLanguage.name} is fully supported!</span>
          </div>
          <p className={styles.successDesc}>
            Get started with Gladia's speech-to-text API for {selectedLanguage.name} transcription, translation, and more.
          </p>
          <div className={styles.ctaRow}>
            <a href="#sales" className={styles.ctaPrimary}>
              <span>TALK TO SALES</span>
              <ArrowRightIcon className={styles.ctaArrow} />
            </a>
            <a href="#docs" className={styles.ctaSecondary}>
              <span>VIEW DOCUMENTATION</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

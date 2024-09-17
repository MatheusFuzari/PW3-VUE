import { createI18n } from 'vue-i18n';
import PtBrTranslations from './pt_br.json';
import EnTranslations from './en.json';

export type AvailableLanguages = 'en' | 'br';

export const i18n = createI18n({
    legacy: false,
    locale: 'br',
    messages: {
        en: EnTranslations,
        br: PtBrTranslations
    }
})

export const changeLanguage = (locale: AvailableLanguages) => {
    i18n.global.locale.value = locale;
}
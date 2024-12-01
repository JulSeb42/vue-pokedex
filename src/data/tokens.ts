/*=============================================== Colors ===============================================*/

export enum COLORS {
    BLACK = "var(--color-black)",
    WHITE = "var(--color-white)",
    GRAY_50 = "var(--color-gray-50)",
    GRAY_100 = "var(--color-gray-100)",
    GRAY_200 = "var(--color-gray-200)",
    GRAY_300 = "var(--color-gray-300)",
    GRAY_400 = "var(--color-gray-400)",
    GRAY_500 = "var(--color-gray-500)",
    GRAY_600 = "var(--color-gray-600)",
    GRAY_700 = "var(--color-gray-700)",
    GRAY_800 = "var(--color-gray-800)",
    GRAY_900 = "var(--color-gray-900)",
    PRIMARY_DEFAULT = "var(--color-primary-default)",
    PRIMARY_HOVER = "var(--color-primary-hover)",
    PRIMARY_ACTIVE = "var(--color-primary-active)",
    SUCCESS_DEFAULT = "var(--color-success-default)",
    SUCCESS_HOVER = "var(--color-success-hover)",
    SUCCESS_ACTIVE = "var(--color-success-active)",
    DANGER_DEFAULT = "var(--color-danger-default)",
    DANGER_HOVER = "var(--color-danger-hover)",
    DANGER_ACTIVE = "var(--color-danger-active)",
    WARNING_DEFAULT = "var(--color-warning-default)",
    WARNING_HOVER = "var(--color-warning-hover)",
    WARNING_ACTIVE = "var(--color-warning-active)",
}

export enum OVERLAYS {
    /** rgba(0, 0, 0, 0.5) */ BLACK_50 = "var(--overlay-black-50)",
    /** rgba(0, 0, 0, 0.8) */ BLACK_80 = "var(--overlay-black-80)",
    /** rgba(255, 255, 255, 0.5) */ WHITE_50 = "var(--overlay-white-50)",
    /** rgba(255, 255, 255, 0.8) */ WHITE_80 = "var(--overlay-white-80)",
    /** linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.56) 100%) */ GRADIENT_BLACK = "var(--overlay-gradient-black)",
    /** linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 100%) */ GRADIENT_WHITE = "var(--overlay-gradient-white)",
}

export enum FONT_FAMILIES {
    /** "Lato", sans-serif */ BODY = "var(--font-family-body)",
}

export enum FONT_SIZES {
    /** 5rem */ DISPLAY_H1 = "var(--font-size-display-h1)",
    /** 4rem */ DISPLAY_H2 = "var(--font-size-display-h2)",
    /** 3.5rem */ DISPLAY_H3 = "var(--font-size-display-h3)",
    /** 3rem */ DISPLAY_H4 = "var(--font-size-display-h4)",
    /** 2.5rem */ DISPLAY_H5 = "var(--font-size-display-h5)",
    /** 2.5rem */ H1 = "var(--font-size-h1)",
    /** 2rem */ H2 = "var(--font-size-h2)",
    /** 1.8rem */ H3 = "var(--font-size-h3)",
    /** 1.5rem */ H4 = "var(--font-size-h4)",
    /** 1.3rem */ H5 = "var(--font-size-h5)",
    /** 1.1rem */ H6 = "var(--font-size-h6)",
    /** 1rem */ BODY = "var(--font-size-body)",
    /** 0.875rem */ SMALL = "var(--font-size-small)",
}

export enum FONT_WEIGHTS {
    /** 400 */ REGULAR = "var(--font-weight-regular)",
    /** 700 */ BOLD = "var(--font-weight-bold)",
    /** 900 */ BLACK = "var(--font-weight-black)",
}

export enum SPACERS {
    /** 48px */ XXL = "var(--spacer-xxl)",
    /** 32px */ XL = "var(--spacer-xl)",
    /** 24px */ L = "var(--spacer-l)",
    /** 16px */ M = "var(--spacer-m)",
    /** 12px */ S = "var(--spacer-s)",
    /** 8px */ XS = "var(--spacer-xs)",
    /** 4px */ XXS = "var(--spacer-xxs)",
}

export enum RADIUSES {
    /** 24px */ XXL = "var(--radius-xxl)",
    /** 16px */ XL = "var(--radius-xl)",
    /** 12px */ L = "var(--radius-l)",
    /** 8px */ M = "var(--radius-m)",
    /** 4px */ S = "var(--radius-s)",
    /** 2px */ XS = "var(--radius-xs)",
    /** 99em */ ROUND = "var(--radius-round)",
    /** 50% */ CIRCLE = "var(--radius-circle)",
}

export enum LAYOUTS {
    /** 600px */ MAIN_DEFAULT = "var(--main-default)",
    /** 800px */ MAIN_LARGE = "var(--main-large)",
    /** 400px */ MAIN_FORM = "var(--main-form)",
    /** 100% */ MAIN_FULL = "var(--main-full)",
    /** 250px */ ASIDE_DEFAULT = "var(--aside-default)",
    /** 200px */ ASIDE_SMALL = "var(--aside-small)",
}

export enum TRANSITIONS {
    /** all 200ms ease */ SHORT = "var(--transition-short)",
    /** all 500ms ease */ LONG = "var(--transition-long)",
    /** all 0.5s cubic-bezier(0.25, 0.75, 0, 0.66) */ BEZIER = "var(--transition-bezier)",
    /** all 1000ms ease */ PROGRESS_CIRCLE = "var(--transition-progress-circle)",
}

export enum MEDIA {
    BREAKPOINT_TABLET_LARGE = "(max-width: 1024px)",
    BREAKPOINT_TABLET_SMALL = "(max-width: 768px)",
    BREAKPOINT_MOBILE = "(max-width: 600px)",
    TOUCH = "(hover: none) and (pointer: coarse)",
    HOVER = "(hover: hover)",
    PREFERS_LIGHT = "(prefers-color-scheme: light)",
    PREFERS_DARK = "(prefers-color-scheme: dark)",
}

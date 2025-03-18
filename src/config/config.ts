const TabScreenSize = 768;

const LOCALES = ["ar", "en"];
const DEFAULT_LOCALE = "ar";
type TLang = "ar" | "en";

const TableConfig = {
  defaultPerPage: 10,
  rowsPerPage: [10, 25, 50, 100],
};

export { LOCALES, TableConfig, TabScreenSize, DEFAULT_LOCALE };
export type { TLang };

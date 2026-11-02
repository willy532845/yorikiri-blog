// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import config from "@shConfig";
import { withBase } from "@/lib/url";

export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
export const FAVICON_URL = withBase(config.favicon);

export const DEFAULT_POST_IMAGE = withBase(config.style.defaultPostImage);
export const SEPARATOR = config.style.titleSeparator;

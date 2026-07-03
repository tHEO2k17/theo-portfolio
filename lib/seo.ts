import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

export const OG_IMAGE_PATH = "/og-image.png";
export const OG_IMAGE_WIDTH = 1024;
export const OG_IMAGE_HEIGHT = 682;
export const OG_IMAGE_ALT =
  "Theophilus Paintsil — Software Engineer, Technical Lead, Builder";

export const HOME_DESCRIPTION =
  "Software engineer and technical lead based in Accra, working with teams across Ghana, Europe, and distributed environments. Web, mobile, backend, and cloud.";

export const DEFAULT_OG_IMAGE: NonNullable<
  NonNullable<Metadata["openGraph"]>["images"]
> = [
  {
    url: OG_IMAGE_PATH,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: OG_IMAGE_ALT,
  },
];

type PageSocialMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: NonNullable<Metadata["openGraph"]>["images"];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

function formatOpenGraphTitle(title: string) {
  const suffix = ` | ${SITE_NAME}`;
  if (title.endsWith(suffix) || title.startsWith(`${SITE_NAME} |`)) {
    return title;
  }
  return `${title}${suffix}`;
}

function getImageUrls(
  images: NonNullable<Metadata["openGraph"]>["images"] = DEFAULT_OG_IMAGE
) {
  if (!images) {
    return [OG_IMAGE_PATH];
  }

  const list = Array.isArray(images) ? images : [images];

  return list.map((image) => (typeof image === "string" ? image : image.url));
}

export function getPageSocialMetadata(
  options: PageSocialMetadataOptions
): Pick<Metadata, "openGraph" | "twitter"> {
  const {
    title,
    description,
    path,
    type = "website",
    images = DEFAULT_OG_IMAGE,
    publishedTime,
    modifiedTime,
    authors,
  } = options;

  const openGraphTitle = formatOpenGraphTitle(title);
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;

  return {
    openGraph: {
      title: openGraphTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
      images: getImageUrls(images),
    },
  };
}

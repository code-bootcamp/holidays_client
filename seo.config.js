export default {
  titleTemplate: "%s | holidays",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "apple-touch-icon",
      href: "/appIcons/icon-192x192.png",
    },
    // 추가적인 링크 태그
  ],
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#317EFB",
    },
    {
      name: "description",
      content: "news",
    },
    {
      name: "keywords",
      content: "news",
    },
    {
      name: "application-name",
      content: "name-test",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "apple-name-test",
    },
    // 추가적인 메타 태그
  ],
  openGraph: {
    type: "website",
    site_name: "holidays",
    images: [{ url: "https://example.com/example_square_image.png123123123" }],
  },
  // 동적인 값
  title: "holidays by 12.3",
  description: "Page Description",
};

/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'remark-prism';

interface Window {
  // pageview
  gtag(
    string,
    string,
    { page_path: string }
  )
  // event
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  )
}
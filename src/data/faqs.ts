export { faqItems, type FaqItem, type FaqSegment } from "@/lib/seo";

/** Play page FAQs — also used for JSON-LD on /play */
export const playFaqs = [
  {
    question: "How much does drop-in play cost at Fun Factory?",
    segments: [
      {
        type: "text" as const,
        value:
          "Under 1: $5.00 (free with paying sibling). Ages 1–3: $10. Ages 4–13: $14. Ages 14–17: $10. Pay at the front desk when you arrive.",
      },
    ],
  },
  {
    question: "Is there a time limit on drop-in play?",
    segments: [{ type: "text" as const, value: "No. Fun Factory offers unlimited play time on drop-in visits." }],
  },
  {
    question: "When is the 50% off drop-in discount?",
    segments: [
      {
        type: "text" as const,
        value: "Every Tuesday and Thursday from 3:30 pm (we're open from 12:00 pm).",
      },
    ],
  },
];

/** Birthday party page FAQs */
export const partyFaqs = [
  {
    question: "How far in advance should I book a birthday party?",
    segments: [
      {
        type: "text" as const,
        value:
          "We recommend booking four to six weeks ahead for weekend dates. Weekday parties often have more availability.",
      },
    ],
  },
  {
    question: "Can I add extra children or adults to my party?",
    segments: [
      {
        type: "text" as const,
        value: "Yes. Additional children are $14.99 each and additional adults are $4.99 each.",
      },
    ],
  },
];

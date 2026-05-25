export type RatingSentiment = 'bueno' | 'regular' | 'malo';

export const RATING_SENTIMENT_ORDER: RatingSentiment[] = ['bueno', 'regular', 'malo'];

export const RATING_SENTIMENT_LABEL: Record<RatingSentiment, string> = {
  bueno: 'Bueno',
  regular: 'Regular',
  malo: 'Malo',
};

export interface CandidateRatingSummary {
  bueno: number;
  regular: number;
  malo: number;
}

export const EMPTY_RATING_SUMMARY: CandidateRatingSummary = {
  bueno: 0,
  regular: 0,
  malo: 0,
};

export function hasAnyRatings(summary: CandidateRatingSummary): boolean {
  return summary.bueno > 0 || summary.regular > 0 || summary.malo > 0;
}

export function getPrimaryRatingSentiment(summary: CandidateRatingSummary): RatingSentiment | null {
  for (const sentiment of RATING_SENTIMENT_ORDER) {
    if (summary[sentiment] > 0) return sentiment;
  }
  return null;
}

export function summaryFromSentiments(sentiments: RatingSentiment[]): CandidateRatingSummary {
  return sentiments.reduce<CandidateRatingSummary>(
    (acc, sentiment) => {
      acc[sentiment] += 1;
      return acc;
    },
    { ...EMPTY_RATING_SUMMARY },
  );
}

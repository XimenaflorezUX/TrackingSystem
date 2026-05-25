import {
  RATING_SENTIMENT_LABEL,
  RATING_SENTIMENT_ORDER,
  getPrimaryRatingSentiment,
  type CandidateRatingSummary,
  type RatingSentiment,
} from './candidateRating.types';

export type RatingSentimentTagsVariant = 'table' | 'tab';

interface CandidateRatingSentimentTagsProps {
  summary: CandidateRatingSummary;
  variant?: RatingSentimentTagsVariant;
}

function sentimentClassName(variant: RatingSentimentTagsVariant, sentiment: RatingSentiment): string {
  if (variant === 'tab') {
    return `cp__int-rating-sentiment cp__int-rating-sentiment--${sentiment}`;
  }
  return `cv-table__rating-sentiment cv-table__rating-sentiment--${sentiment}`;
}

export function CandidateRatingSentimentTags({
  summary,
  variant = 'table',
}: CandidateRatingSentimentTagsProps) {
  const sentiments: RatingSentiment[] =
    variant === 'table'
      ? (() => {
          const primary = getPrimaryRatingSentiment(summary);
          return primary ? [primary] : [];
        })()
      : RATING_SENTIMENT_ORDER.filter((sentiment) => summary[sentiment] > 0);

  return (
    <>
      {sentiments.map((sentiment) => {
        const count = summary[sentiment];
        const label = RATING_SENTIMENT_LABEL[sentiment];
        const countSuffix = variant !== 'table' && count > 1 ? ` (${count})` : '';

        return (
          <span
            key={sentiment}
            className={sentimentClassName(variant, sentiment)}
            title={`${String(count)} valoración${count > 1 ? 'es' : ''} ${label.toLowerCase()}`}
          >
            {label}
            {countSuffix}
          </span>
        );
      })}
    </>
  );
}

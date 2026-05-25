import { useEffect, useMemo, useState } from 'react';
import './CandidateProfileClienteInterno.scss';
import type { Candidate } from './CandidatesViewClienteInterno';
import {
  RATING_SENTIMENT_LABEL,
  RATING_SENTIMENT_ORDER,
  type RatingSentiment,
} from './candidateRating.types';
import {
  getEnabledFeedbackTabs,
  getShareUiFlags,
  hasFeedbackPanel,
  readClienteInternoAuthorEmail,
  resolveFeedbackTab,
  type FeedbackTabId,
} from '../../../../session/vacancyShareSession';

// ─── Icons ───────────────────────────────────────────────────────────────────

const IconArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconTickCircle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconDocument = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconEdit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconId = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="6" cy="7" r="1.5" fill="currentColor" />
    <path d="M4 11h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconBirthDate = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconGender = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="5.5" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 13c0-2 1.6-3.5 3.5-3.5S9 11 9 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="11.5" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 13c0-2 1.6-3.5 3.5-3.5S15 11 15 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconCake = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 12h12v2H2v-2z" fill="currentColor" />
    <path d="M3 8h10v4H3V8z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M5 8V6a1 1 0 0 1 2 0v2M9 8V6a1 1 0 0 1 2 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M1.5 4.5L8 9l6.5-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconLocation = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5a4.5 4.5 0 0 1 4.5 4.5c0 3.4-4.5 8.5-4.5 8.5S3.5 9.4 3.5 6A4.5 4.5 0 0 1 8 1.5z" fill="currentColor" />
    <circle cx="8" cy="6" r="1.5" fill="#00162D" />
  </svg>
);

const IconTeacher = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5L1.5 5v2.5L8 11l6.5-3.5V5L8 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M4 8v3.5c0 1.1 1.8 2 4 2s4-.9 4-2V8" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const IconDollar = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 4v8M6 6.5h2.5a1.5 1.5 0 0 1 0 3H6M6 9.5h3a1.5 1.5 0 0 1 0 3H6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconWhatsapp = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5a6.5 6.5 0 0 0-5.6 9.7L1.5 14.5l3.4-1a6.5 6.5 0 1 0 3.1-11.9z" fill="currentColor" />
    <path d="M6 6.5c.2-.5.4-.5.7-.5h.3c.1 0 .2 0 .3.2l.4.9c.1.2 0 .3-.1.5l-.2.2c-.1.1-.1.2 0 .4.3.5.8 1 1.4 1.3.2.1.3.1.4 0l.2-.2c.2-.2.3-.2.5-.1l.9.4c.2.1.2.2.2.3v.3c0 .3-.1.5-.5.7-.3.2-.7.3-1 .2-.5-.2-1.2-.6-1.9-1.3-.7-.7-1.1-1.4-1.3-1.9-.1-.3 0-.7.2-1z" fill="#F0F9FF" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect width="16" height="16" rx="2" fill="#F0F9FF" />
    <path d="M4.5 6.5v5.5M4.5 4.5v.5" stroke="#001B38" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 12V9c0-1 .8-1.5 1.5-1.5S10 8 10 9v3" stroke="#001B38" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 6.5V12" stroke="#001B38" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect width="16" height="16" rx="2" fill="#F0F9FF" />
    <path d="M9 5.5H10.5c.3 0 .5.2.5.5V7H9.5v1.5H11V12H9.5V12.5H8V10.5H6.5V9H8V7.5c0-1.1.9-2 2-2z" fill="#001B38" />
  </svg>
);

interface SidebarRowProps {
  icon?: JSX.Element;
  children: string;
  accent?: boolean;
}

const SidebarRow = ({ icon, children, accent = false }: SidebarRowProps) => (
  <div className={`cp__sidebar-row${accent ? ' cp__sidebar-row--accent' : ''}${icon === undefined ? ' cp__sidebar-row--no-icon' : ''}`}>
    {icon !== undefined ? (
      <span className="cp__sidebar-row-icon" aria-hidden="true">{icon}</span>
    ) : null}
    <span className="cp__sidebar-row-text">{children}</span>
  </div>
);

// ─── Comments panel ───────────────────────────────────────────────────────────

type InternalTab = FeedbackTabId;

const TAB_VALORACIONES_ICON_SRC = '/branding/tab-valoraciones-icon.png';
const TAB_COMENTARIOS_ICON_SRC = '/branding/tab-comentarios-icon.png';

interface InternalTabDef {
  id: InternalTab;
  label: string;
  iconSrc?: string;
}

const INTERNAL_TABS: InternalTabDef[] = [
  { id: 'valoraciones', label: 'Valoraciones', iconSrc: TAB_VALORACIONES_ICON_SRC },
  { id: 'comentarios', label: 'Comentarios', iconSrc: TAB_COMENTARIOS_ICON_SRC },
];

function filterInternalTabs(flags: ReturnType<typeof getShareUiFlags>): InternalTabDef[] {
  const enabledIds = new Set(getEnabledFeedbackTabs(flags));
  return INTERNAL_TABS.filter((tab) => enabledIds.has(tab.id));
}

const COMMENT_MAX = 400;
const RATING_MAX = COMMENT_MAX;
const LOREM_COMMENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.';

const LOREM_RATING = LOREM_COMMENT;

const RATING_SENTIMENT_OPTIONS: { id: RatingSentiment; label: string }[] =
  RATING_SENTIMENT_ORDER.map((id) => ({ id, label: RATING_SENTIMENT_LABEL[id] }));

export type { RatingSentiment };

type CommentAuthorType = 'magneto' | 'cliente-interno';

interface VacancyCommentItem {
  id: string;
  text: string;
  createdAt: Date;
  authorType: CommentAuthorType;
  authorName: string;
  authorEmail: string;
  canEdit: boolean;
  isEdited?: boolean;
}

interface CommentCardProps {
  id: string;
  initials: string;
  authorType: CommentAuthorType;
  authorName: string;
  authorEmail: string;
  date: string;
  text: string;
  vacancyRef?: string;
  canEdit?: boolean;
  isEdited?: boolean;
  onSaveEdit?: (id: string, text: string) => void;
}

function getCommentAuthorLabel(
  authorType: CommentAuthorType,
  authorName: string,
  authorEmail: string,
): string {
  return authorType === 'cliente-interno' ? authorEmail : authorName;
}

function initialsFromEmail(email: string): string {
  const local = email.split('@')[0] ?? email;
  const chars = local.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2);
  return (chars.length >= 2 ? chars : local.slice(0, 2)).toUpperCase();
}

function formatCommentTimestamp(date: Date): string {
  const dateLabel = date.toLocaleDateString('es-CO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeLabel = date
    .toLocaleTimeString('es-CO', { hour: 'numeric', minute: '2-digit', hour12: true })
    .toLowerCase()
    .replace(/\s/g, ' ');
  return `${dateLabel} ${timeLabel}`;
}

type RatingAuthorType = 'magneto' | 'cliente-interno';

interface VacancyRatingItem {
  id: string;
  text: string;
  createdAt: Date;
  sentiment: RatingSentiment;
  authorType: RatingAuthorType;
  authorName: string;
  authorEmail: string;
  canEdit: boolean;
  isEdited?: boolean;
}

function createInitialVacancyRatings(
  guestEmail: string,
  summary: Candidate['ratingSummary'],
): VacancyRatingItem[] {
  const items: VacancyRatingItem[] = [];
  let index = 0;

  const pushRating = (sentiment: RatingSentiment, authorType: RatingAuthorType, canEdit: boolean) => {
    items.push({
      id: `r-demo-${String(index)}`,
      text: LOREM_RATING,
      createdAt: new Date('2025-09-22T14:33:00'),
      sentiment,
      authorType,
      authorName: authorType === 'magneto' ? 'Marcela Muñoz' : '',
      authorEmail: authorType === 'magneto' ? 'marcela.munoz@magneto365.com' : guestEmail,
      canEdit,
    });
    index += 1;
  };

  for (let i = 0; i < summary.bueno; i += 1) {
    pushRating('bueno', i === 0 ? 'magneto' : 'cliente-interno', i > 0);
  }
  for (let i = 0; i < summary.regular; i += 1) {
    pushRating('regular', 'magneto', false);
  }
  for (let i = 0; i < summary.malo; i += 1) {
    pushRating('malo', 'cliente-interno', true);
  }

  return items;
}

function createInitialVacancyComments(guestEmail: string): VacancyCommentItem[] {
  return [
    {
      id: 'c-demo-1',
      text: LOREM_COMMENT,
      createdAt: new Date('2025-09-22T14:33:00'),
      authorType: 'cliente-interno',
      authorName: '',
      authorEmail: guestEmail,
      canEdit: true,
    },
    {
      id: 'c-demo-2',
      text: LOREM_COMMENT,
      createdAt: new Date('2025-09-22T14:33:00'),
      authorType: 'magneto',
      authorName: 'Marcela Muñoz',
      authorEmail: 'marcela.munoz@magneto365.com',
      canEdit: false,
    },
  ];
}

interface RatingCardProps {
  id: string;
  initials: string;
  author: string;
  sentiment: RatingSentiment;
  date: string;
  text: string;
  canEdit?: boolean;
  isEdited?: boolean;
  onSaveEdit?: (id: string, text: string, sentiment: RatingSentiment) => void;
}

const RatingCard = ({
  id,
  initials,
  author,
  sentiment,
  date,
  text,
  canEdit = false,
  isEdited = false,
  onSaveEdit,
}: RatingCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editDraft, setEditDraft] = useState(text);
  const [editSentiment, setEditSentiment] = useState<RatingSentiment>(sentiment);
  const editDraftTrimmed = editDraft.trim();
  const canSaveEdit =
    editDraftTrimmed.length > 0 &&
    (editDraftTrimmed !== text.trim() || editSentiment !== sentiment);

  useEffect(() => {
    if (!isEditing) {
      setEditDraft(text);
      setEditSentiment(sentiment);
    }
  }, [text, sentiment, isEditing]);

  useEffect(() => {
    if (!isEditing) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEditDraft(text);
        setEditSentiment(sentiment);
        setIsEditing(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isEditing, text, sentiment]);

  const handleStartEdit = () => {
    setEditDraft(text);
    setEditSentiment(sentiment);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (!canSaveEdit || onSaveEdit === undefined) return;
    onSaveEdit(id, editDraftTrimmed, editSentiment);
    setIsEditing(false);
  };

  return (
    <li
      className={`cp__int-rating${canEdit ? ' cp__int-rating--editable' : ''}${isEditing ? ' cp__int-rating--editing' : ''}`}
    >
      <div className="cp__int-rating-header">
        <div className="cp__int-rating-meta">
          <div className="cp__int-rating-author-row">
            <div className="cp__int-comment-avatar" aria-hidden="true">{initials}</div>
            <span className="cp__int-comment-author">{author}</span>
            {!isEditing ? (
              <span
                className={`cp__int-rating-sentiment cp__int-rating-sentiment--${sentiment}`}
              >
                {RATING_SENTIMENT_LABEL[sentiment]}
              </span>
            ) : null}
            <span className="cp__int-comment-date">{date}</span>
            {isEdited ? <span className="cp__int-comment-edited-tag">Editado</span> : null}
          </div>
        </div>
        {canEdit && !isEditing ? (
          <button
            type="button"
            className="cp__int-rating-edit"
            aria-label="Editar valoración"
            onClick={handleStartEdit}
          >
            <IconEdit />
          </button>
        ) : null}
      </div>
      {isEditing ? (
        <div className="cp__int-rating-edit-form">
          <fieldset className="cp__int-sentiment cp__int-sentiment--inline">
            <legend className="cp__int-sentiment-legend">¿Cómo valoras al candidato?</legend>
            <div className="cp__int-sentiment-options" role="group" aria-label="Valoración cualitativa">
              {RATING_SENTIMENT_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`cp__int-sentiment-btn cp__int-sentiment-btn--${option.id}${
                    editSentiment === option.id ? ' cp__int-sentiment-btn--active' : ''
                  }`}
                  aria-pressed={editSentiment === option.id}
                  onClick={() => setEditSentiment(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>
          <textarea
            className="cp__int-comment-edit-textarea"
            value={editDraft}
            onChange={(event) => setEditDraft(event.target.value.slice(0, RATING_MAX))}
            maxLength={RATING_MAX}
            rows={4}
            aria-label="Editar valoración"
          />
          <div className="cp__int-comment-edit-footer">
            <span className="cp__int-comment-edit-count">
              <strong>{editDraft.length}</strong> de {RATING_MAX}
            </span>
            <button
              type="button"
              className="cp__int-comment-save-btn"
              disabled={!canSaveEdit}
              onClick={handleSaveEdit}
            >
              Guardar
            </button>
          </div>
        </div>
      ) : (
        <p className="cp__int-rating-body">{text}</p>
      )}
    </li>
  );
};

interface ValoracionesPanelProps {
  draftRating: string;
  draftSentiment: RatingSentiment | null;
  onDraftChange: (value: string) => void;
  onSentimentChange: (value: RatingSentiment) => void;
  currentProcessRatings: VacancyRatingItem[];
  onSaveRating: () => void;
  canSaveRating: boolean;
  onUpdateRating: (id: string, text: string, sentiment: RatingSentiment) => void;
}

const ValoracionesPanel = ({
  draftRating,
  draftSentiment,
  onDraftChange,
  onSentimentChange,
  currentProcessRatings,
  onSaveRating,
  canSaveRating,
  onUpdateRating,
}: ValoracionesPanelProps) => (
  <>
    <div className="cp__int-compose">
      <fieldset className="cp__int-sentiment">
        <legend className="cp__int-sentiment-legend">¿Cómo valoras al candidato?</legend>
        <div className="cp__int-sentiment-options" role="group" aria-label="Valoración cualitativa">
          {RATING_SENTIMENT_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`cp__int-sentiment-btn cp__int-sentiment-btn--${option.id}${
                draftSentiment === option.id ? ' cp__int-sentiment-btn--active' : ''
              }`}
              aria-pressed={draftSentiment === option.id}
              onClick={() => onSentimentChange(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
      <textarea
        className="cp__int-textarea"
        value={draftRating}
        onChange={(e) => onDraftChange(e.target.value.slice(0, RATING_MAX))}
        maxLength={RATING_MAX}
        rows={4}
        aria-label="Escribe una valoración"
        placeholder="Describe brevemente tu valoración del candidato"
      />
      <div className="cp__int-compose-footer">
        <span
          className={`cp__int-compose-limit${draftRating.length < RATING_MAX ? ' cp__int-compose-limit--hidden' : ''}`}
          aria-live="polite"
        >
          Has llegado al límite de caracteres
        </span>
        <span className="cp__int-compose-count">
          <strong>{draftRating.length}</strong> de {RATING_MAX}
        </span>
      </div>
      <button
        type="button"
        className="cp__int-save-btn"
        disabled={!canSaveRating}
        onClick={onSaveRating}
      >
        Guardar valoración
      </button>
    </div>

    <h2 className="cp__int-panel-title">Valoraciones</h2>
    <div className="cp__int-ratings" id="cp-valoraciones">
      <section className="cp__int-section cp__int-section--last">
        <h3 className="cp__int-section-title">Valoraciones del proceso actual</h3>
        <ul className="cp__int-rating-list">
          {currentProcessRatings.map((item) => (
            <RatingCard
              key={item.id}
              id={item.id}
              initials={
                item.authorType === 'cliente-interno'
                  ? initialsFromEmail(item.authorEmail)
                  : item.authorName
                      .split(/\s+/)
                      .map((part) => part[0] ?? '')
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()
              }
              author={
                item.authorType === 'cliente-interno'
                  ? item.authorEmail
                  : item.authorName
              }
              sentiment={item.sentiment}
              date={formatCommentTimestamp(item.createdAt)}
              text={item.text}
              canEdit={item.canEdit}
              isEdited={item.isEdited}
              onSaveEdit={onUpdateRating}
            />
          ))}
        </ul>
      </section>
    </div>
  </>
);

interface ComentariosPanelProps {
  draftComment: string;
  onDraftChange: (value: string) => void;
  comments: VacancyCommentItem[];
  onSaveComment: () => void;
  canSaveComment: boolean;
  onUpdateComment: (id: string, text: string) => void;
}

const ComentariosPanel = ({
  draftComment,
  onDraftChange,
  comments,
  onSaveComment,
  canSaveComment,
  onUpdateComment,
}: ComentariosPanelProps) => (
  <>
    <div className="cp__int-compose">
      <p className="cp__int-compose-hint">
        Deja un comentario, sólo lo verán los usuarios de tu compañía.
      </p>
      <textarea
        className="cp__int-textarea"
        value={draftComment}
        onChange={(e) => onDraftChange(e.target.value.slice(0, COMMENT_MAX))}
        maxLength={COMMENT_MAX}
        rows={4}
        aria-label="Escribe un comentario"
      />
      <div className="cp__int-compose-footer">
        <span
          className={`cp__int-compose-limit${draftComment.length < COMMENT_MAX ? ' cp__int-compose-limit--hidden' : ''}`}
          aria-live="polite"
        >
          Has llegado al límite de caracteres
        </span>
        <span className="cp__int-compose-count">
          <strong>{draftComment.length}</strong> de {COMMENT_MAX}
        </span>
      </div>
      <button
        type="button"
        className="cp__int-save-btn"
        disabled={!canSaveComment}
        onClick={onSaveComment}
      >
        Guardar comentario
      </button>
    </div>

    <div className="cp__int-section cp__int-section--last">
      <h2 className="cp__int-section-title">Comentarios en esta vacante</h2>
      <ul className="cp__int-comment-list">
        {comments.map((item) => (
          <CommentCard
            key={item.id}
            id={item.id}
            initials={
              item.authorType === 'cliente-interno'
                ? initialsFromEmail(item.authorEmail)
                : item.authorName
                    .split(/\s+/)
                    .map((part) => part[0] ?? '')
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()
            }
            authorType={item.authorType}
            authorName={item.authorName}
            authorEmail={item.authorEmail}
            date={formatCommentTimestamp(item.createdAt)}
            text={item.text}
            canEdit={item.canEdit}
            isEdited={item.isEdited}
            onSaveEdit={onUpdateComment}
          />
        ))}
      </ul>
    </div>
  </>
);

const CommentCard = ({
  id,
  initials,
  authorType,
  authorName,
  authorEmail,
  date,
  text,
  vacancyRef,
  canEdit = false,
  isEdited = false,
  onSaveEdit,
}: CommentCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editDraft, setEditDraft] = useState(text);
  const authorLabel = getCommentAuthorLabel(authorType, authorName, authorEmail);
  const editDraftTrimmed = editDraft.trim();
  const canSaveEdit = editDraftTrimmed.length > 0 && editDraftTrimmed !== text.trim();

  useEffect(() => {
    if (!isEditing) {
      setEditDraft(text);
    }
  }, [text, isEditing]);

  useEffect(() => {
    if (!isEditing) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEditDraft(text);
        setIsEditing(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isEditing, text]);

  const handleStartEdit = () => {
    setEditDraft(text);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (!canSaveEdit || onSaveEdit === undefined) return;
    onSaveEdit(id, editDraftTrimmed);
    setIsEditing(false);
  };

  return (
    <li
      className={`cp__int-comment${canEdit ? ' cp__int-comment--editable' : ''}${isEditing ? ' cp__int-comment--editing' : ''}`}
    >
      <div className="cp__int-comment-header">
        <div className="cp__int-comment-avatar" aria-hidden="true">{initials}</div>
        <div className="cp__int-comment-meta">
          <span className="cp__int-comment-author">{authorLabel}</span>
          {vacancyRef ? <span className="cp__int-comment-vacancy">{vacancyRef}</span> : null}
          <span className="cp__int-comment-date">{date}</span>
          {isEdited ? <span className="cp__int-comment-edited-tag">Editado</span> : null}
        </div>
        {canEdit && !isEditing ? (
          <div className="cp__int-comment-actions">
            <button
              type="button"
              className="cp__int-comment-action"
              aria-label="Editar comentario"
              onClick={handleStartEdit}
            >
              <IconEdit />
            </button>
          </div>
        ) : null}
      </div>
      {isEditing ? (
        <div className="cp__int-comment-edit">
          <textarea
            className="cp__int-comment-edit-textarea"
            value={editDraft}
            onChange={(event) => setEditDraft(event.target.value.slice(0, COMMENT_MAX))}
            maxLength={COMMENT_MAX}
            rows={4}
            aria-label="Editar comentario"
          />
          <div className="cp__int-comment-edit-footer">
            <span className="cp__int-comment-edit-count">
              <strong>{editDraft.length}</strong> de {COMMENT_MAX}
            </span>
            <button
              type="button"
              className="cp__int-comment-save-btn"
              disabled={!canSaveEdit}
              onClick={handleSaveEdit}
            >
              Guardar
            </button>
          </div>
        </div>
      ) : (
        <p className="cp__int-comment-body">{text}</p>
      )}
    </li>
  );
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function splitDisplayName(full: string): { first: string; rest: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length <= 1) {
    return { first: full.trim(), rest: '' };
  }
  return { first: parts[0] ?? full.trim(), rest: parts.slice(1).join(' ') };
}

function formatCurrencyCOP(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatSidebarDate(value: string): string {
  const parts = value.trim().split(/[/-]/);
  if (parts.length !== 3) return value;
  const [day, month, year] = parts;
  return `${day?.padStart(2, '0') ?? day} / ${month?.padStart(2, '0') ?? month} / ${year ?? ''}`;
}

function formatSidebarUpdated(dateValue: string): string {
  const parsed = dateValue.includes('/')
    ? dateValue.split('/').reverse().join('-')
    : dateValue;
  const date = new Date(parsed);
  if (Number.isNaN(date.getTime())) {
    return formatSidebarDate(dateValue);
  }
  const dateLabel = date
    .toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' })
    .replace(/\//g, ' / ');
  const timeLabel = date
    .toLocaleTimeString('es-CO', { hour: 'numeric', minute: '2-digit', hour12: true })
    .toLowerCase()
    .replace(/\s/g, ' ');
  return `${dateLabel} - ${timeLabel}`;
}

function formatStudyLevel(level: string): string {
  return level.replace(/\s*\/\s*/g, ' / ');
}

function formatJobCategory(category: string): string {
  return category.split('\n')[0]?.trim() ?? category;
}

function maskPhone(phone: string): string {
  const trimmed = phone.trim();
  if (trimmed.length <= 6) return trimmed;
  return `${trimmed.slice(0, trimmed.length - 6)}******`;
}

function buildDocumentLabel(candidate: Candidate): string {
  if (candidate.documentNumber !== undefined && candidate.documentNumber.length > 0) {
    const type = candidate.documentType ?? 'CC';
    return `${type} ${candidate.documentNumber}`;
  }
  return 'Documento pendiente de integración';
}

function cvFileName(candidateName: string): string {
  const base = candidateName
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '')
    .toLowerCase();
  return `${base || 'hoja_de_vida'}.pdf`;
}

const PROFILE_DESCRIPTION_PLACEHOLDER =
  'Resumen profesional basado en la postulación a la vacante. Aquí se mostrará la descripción del perfil del candidato cuando esté disponible en el sistema.';

const EXPERIENCE_BODY_PLACEHOLDER =
  'Detalle de funciones y logros en este rol. La información completa llegará desde el servicio de candidatos.';

// ─── Props ───────────────────────────────────────────────────────────────────

export type ProfileTabId = 'valoraciones' | 'comentarios';

export interface CandidateProfileClienteInternoProps {
  vacancyTitle: string;
  candidate: Candidate;
  /** Posición 1-based en la lista completa (p. ej. 11 de 62). */
  candidateOrdinal: number;
  totalCandidates: number;
  initialTab?: ProfileTabId;
  onClose: () => void;
  onPreviousCandidate: () => void;
  onNextCandidate: () => void;
  canGoPreviousCandidate: boolean;
  canGoNextCandidate: boolean;
  canAdvanceStage: boolean;
  onAdvanceStage: () => void;
  onDiscard: () => void;
}

const CandidateProfileClienteInterno = ({
  vacancyTitle: _vacancyTitle,
  candidate,
  candidateOrdinal,
  totalCandidates,
  initialTab = 'comentarios',
  onClose,
  onPreviousCandidate,
  onNextCandidate,
  canGoPreviousCandidate,
  canGoNextCandidate,
  canAdvanceStage,
  onAdvanceStage,
  onDiscard,
}: CandidateProfileClienteInternoProps) => {
  const shareUi = getShareUiFlags();
  const availableTabs = useMemo(() => filterInternalTabs(shareUi), [shareUi]);
  const showFeedbackPanel = hasFeedbackPanel(shareUi);
  const [activeTab, setActiveTab] = useState<InternalTab>(() => {
    const resolved = resolveFeedbackTab(initialTab, getShareUiFlags());
    return resolved ?? initialTab;
  });
  const [draftComment, setDraftComment] = useState('');
  const [draftRating, setDraftRating] = useState('');
  const [draftSentiment, setDraftSentiment] = useState<RatingSentiment | null>(null);
  const [vacancyComments, setVacancyComments] = useState<VacancyCommentItem[]>(() =>
    createInitialVacancyComments(readClienteInternoAuthorEmail()),
  );
  const [currentProcessRatings, setCurrentProcessRatings] = useState<VacancyRatingItem[]>(() =>
    createInitialVacancyRatings(readClienteInternoAuthorEmail(), candidate.ratingSummary),
  );

  useEffect(() => {
    setCurrentProcessRatings(
      createInitialVacancyRatings(readClienteInternoAuthorEmail(), candidate.ratingSummary),
    );
  }, [candidate.id]);

  useEffect(() => {
    const resolved = resolveFeedbackTab(initialTab, shareUi);
    if (resolved !== null) {
      setActiveTab(resolved);
    }
  }, [candidate.id, initialTab, shareUi.showGeneralFeedback, shareUi.showRatingFeedback]);

  useEffect(() => {
    if (!availableTabs.some((tab) => tab.id === activeTab) && availableTabs[0] !== undefined) {
      setActiveTab(availableTabs[0].id);
    }
  }, [activeTab, availableTabs]);

  const draftTrimmed = draftComment.trim();
  const canSaveComment = draftTrimmed.length > 0;
  const draftRatingTrimmed = draftRating.trim();
  const canSaveRating = draftRatingTrimmed.length > 0 && draftSentiment !== null;

  const handleUpdateComment = (id: string, text: string) => {
    setVacancyComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, text, isEdited: true } : comment,
      ),
    );
  };

  const handleUpdateRating = (id: string, text: string, sentiment: RatingSentiment) => {
    setCurrentProcessRatings((prev) =>
      prev.map((rating) =>
        rating.id === id ? { ...rating, text, sentiment, isEdited: true } : rating,
      ),
    );
  };

  const handleSaveComment = () => {
    if (!canSaveComment) return;

    const guestEmail = readClienteInternoAuthorEmail();
    setVacancyComments((prev) => [
      {
        id: `c-${String(Date.now())}`,
        text: draftTrimmed,
        createdAt: new Date(),
        authorType: 'cliente-interno',
        authorName: '',
        authorEmail: guestEmail,
        canEdit: true,
      },
      ...prev,
    ]);
    setDraftComment('');
  };

  const handleSaveRating = () => {
    if (!canSaveRating || draftSentiment === null) return;

    const guestEmail = readClienteInternoAuthorEmail();
    setCurrentProcessRatings((prev) => [
      {
        id: `r-${String(Date.now())}`,
        text: draftRatingTrimmed,
        createdAt: new Date(),
        sentiment: draftSentiment,
        authorType: 'cliente-interno',
        authorName: '',
        authorEmail: guestEmail,
        canEdit: true,
      },
      ...prev,
    ]);
    setDraftRating('');
    setDraftSentiment(null);
  };

  const { first, rest } = splitDisplayName(candidate.name);
  const roleLabel = candidate.profession ?? candidate.skills[0] ?? 'Profesión pendiente';
  const updatedLabel = formatSidebarUpdated(candidate.updateDate);
  const birthDateLabel = candidate.birthDate !== undefined
    ? formatSidebarDate(candidate.birthDate)
    : 'Fecha pendiente de integración';
  const emailLabel = shareUi.showContactData
    ? (candidate.email ?? 'Correo pendiente de integración')
    : 'Correo no incluido en el acceso';
  const locationLabel = shareUi.showContactData
    ? (candidate.location ?? 'Ubicación pendiente de integración')
    : 'Ubicación no incluida en el acceso';
  const phoneLabel = candidate.phone !== undefined
    ? (shareUi.showContactData ? candidate.phone : maskPhone(candidate.phone))
    : '+57 300******';
  const linkedInLabel = candidate.linkedIn ?? 'Pendiente de integración';
  const facebookLabel = candidate.facebook ?? 'Pendiente de integración';

  return (
    <div className="cp">
      <header className="cp__header">
        <div className="cp__header-left">
          <button className="cp__header-back" type="button" onClick={onClose} aria-label="Volver a la lista de candidatos">
            <IconArrowLeft />
          </button>
          <h1 className="cp__header-title">Perfil del candidato</h1>
        </div>
        <div className="cp__header-spacer" aria-hidden="true" />
        <button className="cp__header-close" type="button" onClick={onClose} aria-label="Cerrar perfil">
          <IconX />
        </button>
      </header>

      <div className="cp__body">
        <div className="cp__body-inner">
          <div className="cp__hv">
            <div className="cp__toolbar">
              {shareUi.showStageDecisionFeedback ? (
                <div className="cp__toolbar-actions">
                  <button
                    type="button"
                    className="cp__danger-icon"
                    aria-label="Descartar candidato"
                    onClick={onDiscard}
                  >
                    <IconX />
                    Descartar
                  </button>
                  <button
                    type="button"
                    className="cp__primary-pill"
                    onClick={onAdvanceStage}
                    disabled={!canAdvanceStage}
                  >
                    <IconTickCircle />
                    Siguiente etapa
                  </button>
                </div>
              ) : null}
              <div className="cp__toolbar-nav">
                <button
                  type="button"
                  className="cp__ghost-btn"
                  onClick={onPreviousCandidate}
                  disabled={!canGoPreviousCandidate}
                  aria-label="Candidato anterior"
                >
                  <IconArrowLeft />
                  Atrás
                </button>
                <span className="cp__toolbar-count">
                  Candidato {candidateOrdinal} de {totalCandidates}
                </span>
                <button
                  type="button"
                  className="cp__ghost-btn"
                  onClick={onNextCandidate}
                  disabled={!canGoNextCandidate}
                  aria-label="Siguiente candidato"
                >
                  Siguiente
                  <IconArrowRight />
                </button>
              </div>
            </div>

            <div className="cp__content">
              <aside className="cp__sidebar" aria-label="Resumen del candidato">
                <p className="cp__sidebar-updated">Última actualización {updatedLabel}</p>

                <div className="cp__sidebar-hero">
                  <div className="cp__sidebar-photo-wrap">
                    <div className="cp__sidebar-photo" aria-hidden="true">
                      {candidate.photoUrl !== undefined ? (
                        <img src={candidate.photoUrl} alt="" className="cp__sidebar-photo-img" />
                      ) : (
                        candidate.initials
                      )}
                    </div>
                  </div>
                  <div className="cp__sidebar-names">
                    <p className="cp__sidebar-first">{first}</p>
                    {rest ? <p className="cp__sidebar-last">{rest}</p> : null}
                    <p className="cp__sidebar-role">{roleLabel}</p>
                  </div>
                </div>

                <div className="cp__sidebar-sections">
                  <section className="cp__section">
                    <h2 className="cp__section-title">Datos personales</h2>
                    <SidebarRow icon={<IconId />}>{buildDocumentLabel(candidate)}</SidebarRow>
                    <SidebarRow icon={<IconBirthDate />}>{birthDateLabel}</SidebarRow>
                    <SidebarRow icon={<IconGender />}>{candidate.gender}</SidebarRow>
                    <SidebarRow icon={<IconCake />}>{`${candidate.age} años`}</SidebarRow>
                    <SidebarRow icon={<IconMail />}>{emailLabel}</SidebarRow>
                    <SidebarRow icon={<IconLocation />} accent>
                      {locationLabel}
                    </SidebarRow>
                    {shareUi.showContactData ? (
                      <button type="button" className="cp__sidebar-whatsapp">
                        <IconWhatsapp />
                        <span>{phoneLabel}</span>
                      </button>
                    ) : null}
                  </section>

                  <section className="cp__section">
                    <h2 className="cp__section-title">Nivel de estudios</h2>
                    <SidebarRow icon={<IconTeacher />}>{formatStudyLevel(candidate.studyLevel)}</SidebarRow>
                  </section>

                  <section className="cp__section">
                    <h2 className="cp__section-title">Aspiración salarial</h2>
                    <SidebarRow icon={<IconDollar />}>{formatCurrencyCOP(candidate.salaryExpectation)}</SidebarRow>
                  </section>

                  <section className="cp__section">
                    <h2 className="cp__section-title">Categoría</h2>
                    <SidebarRow>{formatJobCategory(candidate.jobCategory)}</SidebarRow>
                  </section>

                  <section className="cp__section">
                    <h2 className="cp__section-title">Redes sociales</h2>
                    <div className="cp__sidebar-social">
                      <div className="cp__sidebar-social-row">
                        <IconLinkedIn />
                        <span className="cp__sidebar-social-text">{linkedInLabel}</span>
                      </div>
                      <div className="cp__sidebar-social-row">
                        <IconFacebook />
                        <span className="cp__sidebar-social-text">{facebookLabel}</span>
                      </div>
                    </div>
                  </section>
                </div>
              </aside>

              <div className="cp__detail">
                {shareUi.showSanitizedCv ? (
                  <section className="cp__card">
                    <h2 className="cp__card-title">CV cargada</h2>
                    <div className="cp__file-row">
                      <IconDocument />
                      <span className="cp__file-name">{cvFileName(candidate.name)}</span>
                      <button type="button" className="cp__download-btn" aria-label="Descargar CV">
                        <span className="cp__download-btn-label">Descargar</span>
                      </button>
                    </div>
                  </section>
                ) : (
                  <section className="cp__card">
                    <h2 className="cp__card-title">CV cargada</h2>
                    <p className="cp__card-text">
                      El CV sanitizado no está incluido en el acceso compartido configurado para esta vacante.
                    </p>
                  </section>
                )}

                <section className="cp__card">
                  <h2 className="cp__card-title">Video presentación</h2>
                  <div className="cp__video-placeholder">Vista previa no disponible</div>
                </section>

                <section className="cp__card">
                  <h2 className="cp__card-title">Descripción del perfil</h2>
                  <p className="cp__card-text">{PROFILE_DESCRIPTION_PLACEHOLDER}</p>
                </section>

                <section className="cp__card">
                  <h2 className="cp__card-title">Experiencia laboral</h2>
                  {candidate.experience.map((org, index) => (
                    <div
                      key={`${org}-${String(index)}`}
                      className={`cp__exp-block${index < candidate.experience.length - 1 ? ' cp__exp-block--bordered' : ''}`}
                    >
                      <h3 className="cp__exp-org">{org}</h3>
                      <p className="cp__exp-role">Rol declarado en postulación</p>
                      <p className="cp__exp-dates">Fechas por integrar</p>
                      <p className="cp__exp-desc">{EXPERIENCE_BODY_PLACEHOLDER}</p>
                    </div>
                  ))}
                </section>

                <section className="cp__card">
                  <h2 className="cp__card-title">Estudios</h2>
                  {candidate.studies.map((title, index) => (
                    <div
                      key={`${title}-${String(index)}`}
                      className={`cp__exp-block${index < candidate.studies.length - 1 ? ' cp__exp-block--bordered' : ''}`}
                    >
                      <h3 className="cp__exp-org">{title}</h3>
                      <p className="cp__exp-dates">Programa académico</p>
                      <p className="cp__exp-desc">Institución e intervalo de fechas pendientes de integración.</p>
                    </div>
                  ))}
                </section>

                <section className="cp__card">
                  <h2 className="cp__card-title">Habilidades</h2>
                  <div className="cp__pill-list">
                    {candidate.skills.map((skill) => (
                      <span key={skill} className="cp__pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="cp__card">
                  <h2 className="cp__card-title">Idiomas</h2>
                  <div className="cp__pill-list">
                    {candidate.languages.map((lang) => (
                      <span key={lang} className="cp__pill">
                        {lang}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="cp__card">
                  <h2 className="cp__card-title">Disponibilidad horaria</h2>
                  <p className="cp__card-text">{candidate.availability}</p>
                </section>
              </div>
            </div>
          </div>

          {showFeedbackPanel ? (
            <aside className="cp__internals" aria-label="Datos internos">
              {availableTabs.length > 1 ? (
                <div className="cp__int-tabs">
                  <div className="cp__int-tabs-scroll" role="tablist" aria-label="Secciones del candidato">
                    {availableTabs.map((tab) => (
                      <button
                        key={tab.id}
                        role="tab"
                        type="button"
                        className={`cp__int-tab${activeTab === tab.id ? ' cp__int-tab--active' : ''}`}
                        aria-selected={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <span className="cp__int-tab-inner">
                          {tab.iconSrc !== undefined ? (
                            <img
                              src={tab.iconSrc}
                              alt=""
                              className="cp__int-tab-icon"
                              width={20}
                              height={20}
                              aria-hidden="true"
                            />
                          ) : null}
                          <span className="cp__int-tab-label">{tab.label}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="cp__int-body" role="tabpanel">
                {activeTab === 'valoraciones' && shareUi.showRatingFeedback ? (
                  <ValoracionesPanel
                    draftRating={draftRating}
                    draftSentiment={draftSentiment}
                    onDraftChange={setDraftRating}
                    onSentimentChange={setDraftSentiment}
                    currentProcessRatings={currentProcessRatings}
                    onSaveRating={handleSaveRating}
                    canSaveRating={canSaveRating}
                    onUpdateRating={handleUpdateRating}
                  />
                ) : shareUi.showGeneralFeedback ? (
                  <ComentariosPanel
                    draftComment={draftComment}
                    onDraftChange={setDraftComment}
                    comments={vacancyComments}
                    onSaveComment={handleSaveComment}
                    canSaveComment={canSaveComment}
                    onUpdateComment={handleUpdateComment}
                  />
                ) : null}
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileClienteInterno;

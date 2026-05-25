import { IAvatar, IRatingBadge } from '@components/UI/atoms';

interface ICandidateProfileAvatar extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>, IAvatar {
    score?: IRatingBadge['score'];
}

export { ICandidateProfileAvatar };

declare enum JobsCardLabelStatusEnum {
    APPLIED = "applied",
    PENDING = "pending",
    REQUIRED = "required"
}
interface IJobCardLabelStatus {
    text: string;
    status: JobsCardLabelStatusType;
}
declare type JobsCardLabelStatusType = `${JobsCardLabelStatusEnum}`;

export { IJobCardLabelStatus, JobsCardLabelStatusEnum, JobsCardLabelStatusType };

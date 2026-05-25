var similarJobTextAdapter = function (job) {
    var text = [
        { value: job.title, fontWeight: 'bold', lineBreak: true },
        {
            value: job.contractType ? "".concat(job.contractType) : String(job.experience),
            fontWeight: 'normal',
            lineBreak: true
        },
        { value: job.salary || '', fontWeight: 'normal', lineBreak: true }
    ];
    return text;
};

export { similarJobTextAdapter };
//# sourceMappingURL=textAdapter.util.js.map

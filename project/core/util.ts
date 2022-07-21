export const stateWithStatus = (sliceInfo) => {
    if (sliceInfo.initialStateWithStatus) {
        for (let i = 0, e = Object.entries(sliceInfo.initialStateWithStatus), l = e.length; i < l; ++i) {
            const [k, v] = e[i];
            if (sliceInfo.initialState[k]) {
                console.error(`${sliceInfo.name} initialState에 존재하던 ${k}를 덮어씁니다.`);
            }
            sliceInfo.initialState[k] = v;
            sliceInfo.initialState[`${k}_status`] = {
                isLoading: false,
                isDone: false,
                isFailure: false,
                error: null,
            };
        }
    }
    return sliceInfo;
};

export const statusCommit = {
    request(status) {
        status.isLoading = true;
        status.isDone = false;
        status.isFailure = false;
    },
    done(status) {
        status.isLoading = false;
        status.isDone = true;
        status.isFailure = false;
    },
    failure(status, error) {
        status.isLoading = false;
        status.isDone = false;
        status.isFailure = true;
        status.error = error;
    },
};
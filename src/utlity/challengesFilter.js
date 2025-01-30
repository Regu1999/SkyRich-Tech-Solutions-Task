export function challengeFilter(challenges, status) {

    return challenges.filter(data => data.status === status)

}
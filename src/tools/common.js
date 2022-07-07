export function convertSecondsToTime(secs) {
  let minutes = Math.floor(secs / 60)
  let seconds = Math.floor(secs % 60)
  return `${minutes?.toString()?.length === 1 ? `0${minutes}` : minutes}:${
    seconds?.toString()?.length === 1 ? `0${seconds}` : seconds
  }`
}

export function getListDuration(list) {
  const secs = list
    ?.map((item) => item['audioDurationInSecond'])
    .reduce((prev, curr) => prev + curr, 0)
  let minutes = Math.floor(secs / 60)
  let seconds = Math.floor(secs % 60)
  return `${minutes} min ${seconds} sec`
}

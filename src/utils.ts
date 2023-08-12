export const dateStringtoDate = (dateString:string):Date => {
  const dateArray = dateString.split("/").map(item => {
    return parseInt(item)
  }).reverse().toString()
  const newDate = new Date(dateArray)  

  return newDate
}
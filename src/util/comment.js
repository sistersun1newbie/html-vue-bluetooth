export function random ({ start = 0, end = 150}) {
  return (start + parseInt(Math.random() * (end - start)))
}

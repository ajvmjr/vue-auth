export const validEmail = email => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return regex.test(String(email).toLowerCase())
}
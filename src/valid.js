export default function validateUsername(username) {
  const regex = /^(?!.*\d{4})(?=.{3,16}$)[\w-]+$/;

  return regex.test(username);
}

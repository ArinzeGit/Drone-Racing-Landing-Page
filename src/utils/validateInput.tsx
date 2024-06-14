interface Props {
  name: string;
  email: string;
}

const validateInput = ({ name, email }: Props) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  let error: Partial<Props> = {};

  if (name === "") {
    error.name = "Name cannot be empty";
  }

  if (email === "") {
    error.email = "Email cannot be empty";
  } else if (!emailPattern.test(email)) {
    error.email = "Looks like this is not a valid email";
  }

  return error;
};

export default validateInput;

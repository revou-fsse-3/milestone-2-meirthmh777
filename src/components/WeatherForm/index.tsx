import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Form, { ISubmitHandler } from "@common/Form";
import Input from "@common/Input";
import * as Yup from "yup";
import Button, { ButtonTypes } from "@common/Button";
import { useNavigate } from "react-router-dom";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = () => {
  const navigate = useNavigate();
  const handleSubmit: ISubmitHandler = (value, action) => {
    const [city] = Object.values(value) as string[];
    // console.log(city);

    navigate(`result?city=${city}`);
    // return redirect("/");
    action.resetForm();
  };

  return (
    <Form
      initialNameValue={{ city: "" }}
      initialSchemas={yupSchemas}
      submitHandler={handleSubmit}
    >
      <Input label="city" />
      <Button
        type="submit"
        ButtonType={ButtonTypes.FiveButton}
        className="rounded-lg font-bold"
      >
        Submit
      </Button>
    </Form>
  );
};

export default index;

const yupSchemas = Yup.object({
  city: Yup.string()
    .min(3, "city must be longer than three characters")
    .required(),
});

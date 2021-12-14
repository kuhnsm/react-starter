import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";
import UserType from "../Models/User";
import { addUser, editUser } from "../Api/Users";
import { useLocation, useNavigate } from "react-router-dom";

export default function User() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.user) {
      const thisUser = location.state.user; //convenience
      setValue("firstName", thisUser.firstName);
      setValue("lastName", thisUser.lastName);
      setValue("gender", thisUser.gender);
      setValue("maritalStatus", thisUser.maritalStatus);
      setValue("birthdate", thisUser.birthdate);
      setValue("salary", thisUser.salary);
      setValue("active", thisUser.active);
      setValue("comments", thisUser.comments);
    }
  }, [location, setValue]);

  function onSubmit(values: UserType) {
    if (location?.state?.user?.id) {
      values.id = location?.state?.user?.id;
      editUser(values);
    } else {
      addUser(values);
    }
    navigate("/users");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.firstName}>
        <FormLabel htmlFor="firstName">First name</FormLabel>
        <Input
          id="firstName"
          placeholder="name"
          {...register("firstName", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.lastName}>
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <Input
          id="lastName"
          placeholder="name"
          {...register("lastName", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.lastName && errors.lastName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.lastName}>
        <FormLabel htmlFor="gender">Gender</FormLabel>
        <Select
          id="gender"
          placeholder="Select option"
          {...register("gender", {
            required: "This is required",
          })}
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </Select>
        <FormErrorMessage>
          {errors.gender && errors.gender.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.maritalStatus}>
        <FormLabel htmlFor="maritalStatus">Marital Status</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio
              {...register("maritalStatus", {
                required: "This is required",
              })}
              id="maritalStatus"
              value="single"
            >
              Single
            </Radio>
            <Radio
              {...register("maritalStatus", {
                required: "This is required",
              })}
              id="maritalStatus"
              value="married"
            >
              Married
            </Radio>
            <Radio
              {...register("maritalStatus", {
                required: "This is required",
              })}
              id="maritalStatus"
              value="divorced"
            >
              Divorced
            </Radio>
            <Radio
              {...register("maritalStatus", {
                required: "This is required",
              })}
              id="maritalStatus"
              value="widow"
            >
              Widow
            </Radio>
          </Stack>
        </RadioGroup>
        <FormErrorMessage>
          {errors.maritalStatus && errors.maritalStatus.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.birthdate}>
        <FormLabel htmlFor="birthdate">Birthdate</FormLabel>
        <Input
          id="birthdate"
          placeholder="name"
          type="date"
          {...register("birthdate", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          {errors.birthdate && errors.birthdate.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.salary}>
        <FormLabel htmlFor="salary">Salary</FormLabel>
        <Input
          id="salary"
          placeholder="salary"
          type="number"
          {...register("salary", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          {errors.salary && errors.salary.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.active}>
        <Checkbox id="active" {...register("active")} defaultIsChecked>
          Active
        </Checkbox>
        <FormErrorMessage>
          {errors.active && errors.active.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.comments}>
        <Textarea
          id="comments"
          {...register("comments")}
          placeholder="Place comments here."
        />
        <FormErrorMessage>
          {errors.comments && errors.comments.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

/*
<select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
*/

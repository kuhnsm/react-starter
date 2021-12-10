import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function User() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(true);
      }, 3000);
    });
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
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

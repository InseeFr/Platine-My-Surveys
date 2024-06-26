import { z } from "zod";

export const addressSchema = z
  .object({
    streetNumber: z.string().optional(),
    repetitionIndex: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val))
      .optional(),
    streetType: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val))
      .optional(),
    streetName: z.string().optional(),
    addressSupplement: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val))
      .optional(),
    specialDistribution: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val))
      .optional(),
    cedexName: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val)),
    cedexCode: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val)),
    cityName: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val)),
    zipCode: z
      .string()
      .nullable()
      .transform(val => (val === null ? "" : val)),
    countryName: z.string().optional().or(z.literal("")),
  })
  .superRefine(({ cedexCode, zipCode, cityName, cedexName }, refinementContext) => {
    if ((cedexCode === undefined || cedexCode === "") && (zipCode === undefined || zipCode === "")) {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Code cedex ou code postal requis",
        path: ["zipCode"],
      });
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Code cedex ou code postal requis",
        path: ["cedexCode"],
      });
    }

    if (cedexCode && cedexCode !== "" && zipCode && zipCode !== "") {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir code postal et code cedex",
        path: ["zipCode"],
      });
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir code postal et code cedex",
        path: ["cedexCode"],
      });
    }

    if (cedexName && cedexName !== "" && cityName && cityName !== "") {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir commune et bureau distributeur",
        path: ["cityName"],
      });
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir commune et bureau distributeur",
        path: ["cedexName"],
      });
    }

    if (cedexCode !== undefined && cedexCode !== "" && (cedexName === undefined || cedexName === "")) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Champs requis",
        path: ["cedexName"],
      });
    }

    if (zipCode !== undefined && zipCode !== "" && (cityName === undefined || cityName === "")) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Champs requis",
        path: ["cityName"],
      });
    }
  });


export const personnalInformationsSchema = z.object({
  civility: z.enum(["Female", "Male", "Undefined"]),
  lastName: z.string().min(2, {message : "not valid"} ),
  firstName: z.string().min(3),
  function: z.string().nullish().transform(val => (val === null ? "" : val)),
  email: z.string().email({message : "not valid"}),
  phone: z
    .string().nullish().transform(val => (val === null ? "" : val)),
  secondPhone: z.string().optional().or(z.literal("")),
  identificationName: z.string().optional(),
  usualCompanyName: z.string().optional(),
  
});


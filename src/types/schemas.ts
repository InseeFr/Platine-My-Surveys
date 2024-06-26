import { z } from "zod";

export const addressSchema = z
  .object({
    streetNumber: z.string().optional(),
    repetitionIndex: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),
    streetType: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),    
    streetName: z.string().nullish().transform(val => (val ?? "")),
    addressSupplement: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),
    specialDistribution: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),
    cedexName: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),
    cedexCode: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),
    cityName: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),
    zipCode: z
      .string()
      .nullish()
      .transform(val => (val ?? "")),
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
  function: z.string().nullish().transform(val => (val ?? "")),
  email: z.string().email({message : "not valid"}),
  phone: z
    .string().nullish().transform(val => (val ?? "")),
  secondPhone: z.string().optional().or(z.literal("")),
  identificationName: z.string().optional(),
  usualCompanyName: z.string().optional(),
  
});


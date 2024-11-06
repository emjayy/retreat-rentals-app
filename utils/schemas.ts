import * as z from "zod";
import { ZodSchema } from "zod";

// Zod validation schemas

// User Profile
export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
});

// Generic function to validate data with Zod schema
export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

// File validation
function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}

// Property
export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(100, {
      message: "Name must be less than 100 characters.",
    }),
  tagline: z
    .string()
    .min(2, {
      message: "Tagline must be at least 2 characters.",
    })
    .max(100, {
      message: "Tagline must be less than 100 characters.",
    }),
  price: z.coerce.number().int().min(0, {
    message: "Price must be a positive number.",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "Description must be between 10 and 1000 words.",
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: "Guest amount must be a positive number.",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "Bedrooms amount must be a positive number.",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "Beds amount must be a positive number.",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "Baths amount must be a positive number.",
  }),
  amenities: z.string(),
});

export const createReviewSchema = z.object({
  propertyId: z.string(),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().min(10).max(1000),
});

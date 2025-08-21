"use client";
import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2Icon } from "lucide-react";
import { toast } from "react-toastify";
import { postMethod } from "@/utils/apiServices";
import { ContactResponse } from "@/utils/responseInterface/contactInterface";
import * as Yup from "yup";
import hi from "@/app/[locale]/lang/hi";
import en from "@/app/[locale]/lang/en";

// Validation schema
const contactValidationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  message: Yup.string().trim().required("Message is required"),
});

// Initial values
const contactInitialValues = {
  name: "",
  email: "",
  message: "",
};

/**
 * ContactForm component renders a localized contact form with name, email, and message fields.
 * Handles form submission using Formik, validates input, and displays success or error toasts.
 * 
 * @param locale - The current locale string ("hi" for Hindi, otherwise defaults to English).
 * 
 * @remarks
 * - Uses Formik for form state management and validation.
 * - Displays localized title and description based on the provided locale.
 * - On successful submission, resets the form and shows a success toast.
 * - On failure, shows an error toast.
 * 
 * @example
 * ```tsx
 * <ContactForm locale="en" />
 * ```
 */
const ContactForm = ({ locale }: { locale: string }) => {
  // Submit handler
  const t = locale === "hi" ? hi : en;
  async function handleContactSubmit(
    values: typeof contactInitialValues,
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) {
    try {
      const submitData = {
        name: values?.name,
        email: values?.email,
        message: values.message,
      };

      const response = (await postMethod(
        `contact`,
        submitData
      )) as ContactResponse;

      if (response?.message && response?.doc?.id) {
        resetForm();
        toast.success("Thank you! Your message has been sent.");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values, helpers) => handleContactSubmit(values, helpers),
  });

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center px-4">
        {/* Left: Info & Illustration */}
        <div className=" md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 text-center md:text-left">
            {t?.contactForm?.title || "Contact Us"}
          </h2>
          <p className="text-lg md:text-xl text-blue-700 mb-6 text-center md:text-left">
            {t?.contactForm?.description ||
              "Have questions or need assistance? Fill out the form below and our team will get back to you shortly."}
          </p>
        </div>
        {/* Right: Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <div>
            <Label className="mb-1" htmlFor="name">
              Name*
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Your Name"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div>
            <Label className="mb-1" htmlFor="email">
              Email*
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="you@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div>
            <Label className="mb-1" htmlFor="message">
              Message*
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="How can we help you?"
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting && <Loader2Icon className="animate-spin" />}
            {formik.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

"use client";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { toast } from "react-hot-toast";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const GetStartedModal = ({ isOpen, onClose, onSuccess }: GetStartedModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    // Basic phone validation: allows digits, spaces, hyphens, parentheses, and + sign
    const phonePattern = /^[\d\s\-\+\(\)]+$/;
    if (!phonePattern.test(phone)) {
      return "Please enter a valid phone number";
    }
    // Remove non-digits for length check
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return "Phone number must be at least 10 digits";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address";
    }
    return undefined;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success("Thank you! We'll get back to you shortly.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
      
      // Notify parent component of successful submission
      if (onSuccess) {
        onSuccess();
      }
      
      // Close modal after successful submission
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key press and body scroll lock
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      // Restore body scroll when modal closes
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-md rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:p-15">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-waterloo transition-colors hover:text-black dark:text-manatee dark:hover:text-white"
          aria-label="Close modal"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Modal content */}
        <h2
          id="modal-title"
          className="mb-7.5 text-2xl font-semibold text-black dark:text-white"
        >
          Get Started
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name field */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-black dark:text-white"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full rounded-lg border px-4 py-3 shadow-solid-2 focus:border-primary focus:outline-none dark:bg-black dark:shadow-none dark:focus:border-primary ${
                errors.name
                  ? "border-red-500 dark:border-red-500"
                  : "border-stroke dark:border-strokedark"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone field */}
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-black dark:text-white"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full rounded-lg border px-4 py-3 shadow-solid-2 focus:border-primary focus:outline-none dark:bg-black dark:shadow-none dark:focus:border-primary ${
                errors.phone
                  ? "border-red-500 dark:border-red-500"
                  : "border-stroke dark:border-strokedark"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-black dark:text-white"
            >
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-lg border px-4 py-3 shadow-solid-2 focus:border-primary focus:outline-none dark:bg-black dark:shadow-none dark:focus:border-primary ${
                errors.email
                  ? "border-red-500 dark:border-red-500"
                  : "border-stroke dark:border-strokedark"
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Message field */}
          <div className="mb-7.5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-black dark:text-white"
            >
              Message <span className="text-sm text-waterloo dark:text-manatee">(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full rounded-lg border px-4 py-3 shadow-solid-2 focus:border-primary focus:outline-none dark:bg-black dark:shadow-none dark:focus:border-primary resize-none ${
                errors.message
                  ? "border-red-500 dark:border-red-500"
                  : "border-stroke dark:border-strokedark"
              }`}
              placeholder="Tell us about your project "
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full border border-stroke px-6 py-3 font-medium text-black duration-300 ease-in-out hover:bg-stroke dark:border-strokedark dark:text-white dark:hover:bg-strokedark"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Submit form"
              className="flex-1 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho disabled:cursor-not-allowed disabled:opacity-50 dark:bg-btndark dark:hover:bg-blackho"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal;


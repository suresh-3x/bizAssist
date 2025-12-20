"use client";
import Image from "next/image";
import React from "react";
import { phoneNumber, phoneNumberLabel } from "./data";

const Contact = () => {
  // Modal State & Hooks
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Hydration fix for Next.js
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]" />
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            {/* Left Column example - add content as needed*/}
            <div className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15">
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Contact us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                <a
                href="mailto:partnership@bizassist.online"
                className="text-blue-500 dark:text-blue-400 underline"
              >
                partnership@bizassist.online
              </a>{" "}
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                <a className="block" href={`tel:${phoneNumber}`}>{phoneNumberLabel}</a>
                </p>
                <button
                  onClick={() => setIsOpen(true)}
                  className="mt-6 w-full rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-black/80 md:w-auto md:self-start"
                >
                  Contact Us
                </button>
              </div>
            </div>
            {/* Add your right/main column here, or re-enable when ready */}
          </div>
        </div>

        {/* Modal: Production Contact Form - PORTAL */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={() => setIsOpen(false)}
          >
            <div
              ref={modalRef}
              className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-black"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <h2 id="contact-modal-title" className="text-xl font-semibold text-black dark:text-white">
                  Contact Us
                </h2>
                <button
                  aria-label="Close modal"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              {/* Form */}
              <form
                className="space-y-4"
                onSubmit={e => {
                  e.preventDefault();
                  // TODO: submit to API
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  minLength={2}
                  className="w-full rounded border px-3 py-2 dark:bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded border px-3 py-2 dark:bg-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  pattern="[0-9+ ]{8,15}"
                  className="w-full rounded border px-3 py-2 dark:bg-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full rounded border px-3 py-2 dark:bg-transparent"
                />
                <button
                  type="submit"
                  className="w-full rounded bg-black py-2 text-white hover:bg-black/80"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;

// app/refund-policy/page.jsx

"use client"; // Enable client-side rendering if necessary

import React from "react";
import Head from "next/head"; // For SEO and meta tags

const RefundPolicy = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | Jovrab Technologies LLP</title>
        <meta
          name="description"
          content="Understand the Refund Policy of Jovrab Technologies LLP, outlining eligibility, request procedures, and other terms related to refunds."
        />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* pt-24 adds top padding to prevent overlap with the fixed header */}
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-700 dark:text-gray-300">
            Refund Policy for Jovrab Technologies LLP
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            Effective Date: April 07, 2024
          </p>

          {/* Refund Policy Sections */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              1. Eligibility for Refunds
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Refunds may be requested if the service provided does not meet the
                agreed-upon specifications outlined in the service agreement.
              </li>
              <li>
                Requests for refunds must be made within 15 days of the service
                completion date.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              2. Requesting a Refund
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              To initiate a refund request, please contact our customer support
              team at{" "}
              <a
                href="mailto:partnership@bizassist.online"
                className="text-blue-500 dark:text-blue-400 underline"
              >
                partnership@bizassist.online
              </a>{" "}
              with the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Your name and contact information</li>
              <li>Service details (description, date of service)</li>
              <li>Reason for the refund request</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              3. Review Process
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Upon receiving your request, we will review it within 10 business
                days.
              </li>
              <li>
                We may reach out for additional information or clarification as
                needed.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              4. Refund Approval
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                If the refund is approved, the amount will be processed back to
                the original payment method within 7-10 business days.
              </li>
              <li>
                If the request is denied, we will provide an explanation of the
                decision.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              5. Non-Refundable Situations
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Refunds will not be issued in the following cases:
                <ul className="list-disc list-inside space-y-2 ml-5">
                  <li>
                    If the service was completed as per the agreed specifications.
                  </li>
                  <li>
                    If the client fails to provide timely feedback or necessary
                    information during the service process.
                  </li>
                  <li>If the service was canceled by the client after commencement.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              6. Changes to the Refund Policy
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Jovrab Technologies LLP reserves the right to modify this refund
              policy at any time. Changes will be communicated via our website
              or directly to clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              7. Contact Information
            </h2>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              For any questions or concerns regarding our refund policy, please
              contact us at:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Email:{" "}
                <a
                  href="mailto:partnership@bizassist.online"
                  className="text-blue-500 dark:text-blue-400 underline"
                >
                  partnership@bizassist.online
                </a>
              </li>
              <li>
                By visiting this page on our website:{" "}
                <a
                  href="https://www.bizassist.online/"
                  className="text-blue-500 dark:text-blue-400 underline"
                >
                  https://www.bizassist.online/
                </a>
              </li>
            </ul>
          </section>

          <p className="text-center text-gray-700 dark:text-gray-300 mt-12">
            Thank you for choosing Jovrab Technologies LLP. We appreciate your
            business and are committed to providing high-quality services.
          </p>
        </div>
      </main>
    </>
  );
};

export default RefundPolicy;
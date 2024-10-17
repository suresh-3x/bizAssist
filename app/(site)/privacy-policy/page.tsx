// app/privacy-policy/page.jsx

"use client"; // Ensure this directive is present if using client-side hooks or context

import React from 'react';
import Head from 'next/head'; // For SEO and meta tags
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>Privacy Policy | JOVRAB TECHNOLOGIES LLP</title>
        <meta
          name="description"
          content="Read the Privacy Policy of JOVRAB TECHNOLOGIES LLP to understand how we collect, use, and protect your personal data."
        />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* pt-24 adds top padding to prevent overlap with the fixed header. Adjust as needed based on header height */}
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-700 dark:text-gray-300">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-6 text-center dark:text-gray-400">
            Last updated: April 17, 2024
          </p>

          {/* Introduction Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              JOVRAB TECHNOLOGIES LLP reserves the right to collect and manage personal data, and this privacy policy outlines the procedures by which Jovrab and its partner entities gather, process, and utilize this personal data. It also delineates the rights afforded to individuals who are data subjects and/or consumers.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Please be aware that the term "private data" is employed to encompass all information concerning an identified or identifiable individual. Specific notices applicable to individual countries may employ different terminology as necessary.
            </p>
          </section>

          {/* Collection of Personal/Private Data Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Collection of Personal/Private Data
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jovrab collects various types of personal data through different means, each serving distinct purposes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When visiting Jovrab websites on the World Wide Web, data may be collected without necessarily identifying you as an individual. Our web servers and affiliated entities, responsible for analytics and performance services, may gather data including but not limited to IP addresses, browsing information, connectivity details, language settings, and other relevant information. This data is aggregated to analyze website traffic, average time spent, pages viewed, and other metrics used to generate data analytics.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The information collected in this manner is utilized by Jovrab for the assessment of website usage, content updates, and to maintain the security of personal data, ultimately enhancing website performance. On specific occasions, if you register with us to access restricted content on our website, we may collect your username and password.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In some instances, we may acquire data from third parties, particularly social networks, if you permit us to access your data through our website. Additionally, with your consent, we may access your location data to customize content based on your geographic location. Furthermore, data may be shared under a privacy agreement with partners engaged in joint marketing activities.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To ensure the proper functioning of our websites and gather data for optimal performance, Jovrab employs cookies and similar technologies for data collection and storage.
            </p>
          </section>

          {/* Registration Data On Our Website Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Registration Data On Our Website
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Upon your registration or submission of contact information through our website, Jovrab may gather and temporarily store your private data. This private data includes the spectrum of information but is not limited to contact details, full name, company and associated role, email and physical address, demographic insights, and the content of your communications with us.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For comprehensive guidance on the management of your contact data, email subscription preferences, and promotional communications, we kindly request that you utilize the dedicated "Contact Us" form available on our website. This platform ensures efficient and secure communication regarding your data preferences and interaction with Jovrab.
            </p>
          </section>

          {/* Additional Sections as Needed */}
          {/* ... */}
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
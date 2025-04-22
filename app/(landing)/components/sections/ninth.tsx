"use client";
import clsx from "clsx";
import React, { useState } from "react";
import {
  interNormal,
  rubikLight,
  rubikMedium,
  rubikNormal,
} from "@/fonts/font";

const NinthSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with creating videos?",
      answer:
        "Getting started is easy! Simply sign up for an account, choose a template or theme that fits your needs, input your script or ideas, and let our AI do the rest. In just a few clicks, your video will be ready for download or sharing on social media!",
    },
    {
      question: "What types of videos can I create using your platform?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Do I need any video editing experience?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Can I upload my own scripts or content?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How many videos can I create in a day?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What happens if I exceed my usage limit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-background">
      <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center">
          <h2
            className={clsx(
              "text-2xl lg:text-3xl font-bold text-center text-gradient bg-custom-gradient bg-clip-text mb-2",
              rubikMedium.className,
            )}
          >
            Have Any Questions?
          </h2>
          <p
            className={clsx(
              "text-center text-foreground/70 mb-8",
              rubikLight.className,
            )}
          >
            Find answers to common queries and get the support you need to make
            the most of our platform.
          </p>
          <div className="space-y-4 w-full max-w-screen-lg">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-purple-500 rounded-lg overflow-hidden w-full"
              >
                <button
                  className={clsx(
                    "w-full text-left text-base lg:text-lg font-medium text-foreground/80 hover:bg-primary focus:outline-none flex justify-between items-center p-4 transition",
                    openIndex === index &&
                      "text-gradient bg-custom-gradient bg-clip-text pb-0",
                    rubikNormal.className,
                  )}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-gradient bg-custom-gradient bg-clip-text">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={clsx(
                    "transition-all duration-500 ease-in overflow-hidden",
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div
                    className={clsx(
                      "p-4 bg-background text-sm lg:text-base text-foreground",
                      interNormal.className,
                    )}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="max-w-screen-lg w-full">
            <h2
              className={clsx(
                "text-2xl lg:text-3xl font-bold underline text-gradient bg-custom-gradient bg-clip-text mb-2 self-start",
                rubikMedium.className,
              )}
            >
              Billings
            </h2>
            <hr className="border-gradient w-16 border-2 -mt-2" />
            <div className="space-y-4 w-full mt-4 max-w-screen-lg">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-purple-500 rounded-lg overflow-hidden w-full"
                >
                  <button
                    className={clsx(
                      "w-full text-left text-base lg:text-lg font-medium text-foreground/80 hover:bg-primary focus:outline-none flex justify-between items-center p-4 transition",
                      openIndex === index &&
                        "text-gradient bg-custom-gradient bg-clip-text pb-0",
                      rubikNormal.className,
                    )}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="text-gradient bg-custom-gradient bg-clip-text">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={clsx(
                      "transition-all duration-500 ease-in overflow-hidden",
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <div
                      className={clsx(
                        "p-4 bg-background text-foreground text-sm lg:text-base",
                        interNormal.className,
                      )}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinthSection;

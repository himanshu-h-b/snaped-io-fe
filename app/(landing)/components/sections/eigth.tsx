"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { rubikLight, rubikMedium, rubikNormal } from "@/fonts/font";

const EigthSection = () => {
  const [isYearly, setIsYearly] = useState(true);
  const plans = [
    {
      name: "Starter",
      price: 228,
      features: [
        "Access 70+ use-cases",
        "Generate 20k+ characters",
        "Built-in plagiarism checker",
        "90+ copywriting tools",
        "29+ languages",
      ],
    },
    {
      name: "Pro",
      price: 348,
      features: [
        "Access 70+ use-cases",
        "Generate 20k+ characters",
        "Built-in plagiarism checker",
        "90+ copywriting tools",
        "29+ languages",
      ],
    },
    {
      name: "Enterprise",
      price: 478,
      features: [
        "Access 70+ use-cases",
        "Generate 20k+ characters",
        "Built-in plagiarism checker",
        "90+ copywriting tools",
        "29+ languages",
      ],
    },
  ];
  return (
    <div className="bg-primary">
      <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-20 text-center flex flex-col items-center justify-center max-w-screen-2xl mx-auto">
        <h2
          className={clsx(
            "text-2xl lg:text-3xl font-bold text-gradient bg-custom-gradient bg-clip-text mb-2",
            rubikMedium.className,
          )}
        >
          Pricing Plans
        </h2>
        <p
          className={clsx(
            "text-base lg:text-lg text-foreground/90 font-light mb-6",
            rubikLight.className,
          )}
        >
          Strikingly powerful, yet unbelievably affordable
        </p>

        <div
          className={clsx(
            "flex justify-center items-center bg-background relative mb-8 rounded-full text-sm lg:text-base",
            rubikNormal.className,
          )}
        >
          <button
            className={`px-4 py-2 ${
              isYearly
                ? "text-foreground bg-background rounded-full"
                : "text-gradient bg-custom-gradient bg-clip-text bg-primary"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 ${
              isYearly
                ? "text-gradient bg-custom-gradient bg-clip-text bg-primary"
                : "text-foreground bg-background rounded-full"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
          {isYearly && (
            <span className="ml-4 hidden sm:inline-block absolute text-gradient bg-custom-gradient bg-clip-text -right-24 top-8 font-normal">
              30% OFF
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 w-full md:grid-cols-3 md:w-fit gap-6 lg:px-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={clsx(
                "border rounded-xl px-4 py-4 bg-background shadow-lg",
                rubikNormal.className,
              )}
            >
              <h3 className="text-lg lg:text-xl mb-2 text-start text-foreground/50 font-light">
                {plan.name}
              </h3>
              <p
                className={clsx(
                  "text-2xl lg:text-3xl font-normal mb-4 text-start",
                )}
              >
                ${isYearly ? plan.price : (plan.price / 12).toFixed(2)}t/{" "}
                <span className="text-lg text-foreground/70">
                  {isYearly ? "yr" : "mo"}
                </span>
              </p>

              <hr className="border rounded-full mb-2" />
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-start gap-2">
                    <SiTicktick className="text-green-500 size-4" /> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "mt-4 px-6 py-2 bg-background border border-gradient text-foreground rounded-md hover:opacity-80 mb-3",
                  idx == 1 ? "bg-custom-gradient text-white" : "rounded-lg",
                )}
              >
                Start Free Trial Today
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EigthSection;

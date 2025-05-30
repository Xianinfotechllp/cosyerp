import React, { useState } from "react";

const faqs = [
    {
        question: "What is Vyapar GST billing software?",
        answer:
            "Vyapar is a GST-compliant billing and accounting software built for small and medium businesses. It helps manage invoicing, inventory, and accounting seamlessly.",
    },
    {
        question: "Can I use Vyapar for multiple businesses?",
        answer:
            "Yes, Vyapar allows you to manage multiple businesses with separate billing and accounting for each.",
    },
    {
        question: "Does Vyapar support offline usage?",
        answer:
            "Absolutely! Vyapar works both online and offline. You can continue managing your business even without an internet connection.",
    },
    {
        question: "Is my data secure on Vyapar?",
        answer:
            "Yes, your data is encrypted and backed up securely to ensure privacy and protection.",
    },
    {
        question: "Is my data secure on Vyapar?",
        answer:
            "Yes, your data is encrypted and backed up securely to ensure privacy and protection.",
    },
    {
        question: "Is my data secure on Vyapar?",
        answer:
            "Yes, your data is encrypted and backed up securely to ensure privacy and protection, backed up securely to ensure privacy and protection.",
    },
];

const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <h2 className="text-3xl md:text-5xl font-bold text-center p-6 md:p-10 mt-10 bg-gray-200 text-gray-700">
                Frequently Asked Questions
            </h2>
            <div className="max-w-full mx-auto px-4 py-6 md:py-10 bg-gray-200 flex justify-center">
                <div className="w-full md:w-[80%] space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-xl shadow-sm overflow-hidden"
                        >
                            <button
                                className="w-full px-3 py-4 md:px-6 md:py-10 flex justify-between items-center text-left text-base md:text-xl font-bold text-gray-700 bg-white hover:bg-gray-100 transition"
                                onClick={() => toggle(index)}
                            >
                                {faq.question}
                                <span className="text-xl md:text-2xl">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-3 py-4 md:px-6 md:py-8 text-sm md:text-xl text-gray-600 bg-red-100 transition-all duration-300 ease-in-out">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FaqComponent;

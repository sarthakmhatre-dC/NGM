import React, { useState } from 'react';
const ServiceFAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold font-outfit uppercase tracking-tight text-white mb-12">
                    FAQS
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <span className={`text-2xl text-red-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ↓
                                </span>
                            </button>

                            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-neutral-400 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;

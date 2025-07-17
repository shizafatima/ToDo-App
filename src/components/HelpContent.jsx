import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Settings, Info, HandHelping, Mail, ChevronDown, ChevronUp } from 'lucide-react';


function HelpContent() {

    const faqs = [
        {
            question: "How do I create a new task?",
            answer: "Click the +Add New Task button on the dashboard and fill in the task details in modal.",

        },
        {
            question: "Can I edit or delete a task?",
            answer: "Yes, you can edit or delete task using the icons available on each task card.",
        },
        {
            question: "Where is my data stored?",
            answer: "All task data are stored locally in your browser using localStorage.",
        },
        {
            question: "Can I add more task status and priority other than default?",
            answer: "Yes, you can add more task status and priorities  by clicking +Add Task Status and +Add Task Priority button on task categories page."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);


    const toggleFAQ = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="flex-1 bg-white text-black p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold flex items-center gap-2 text-black"><HelpCircle size={24}/> Help & Support</h1>
                <p className="text-gray-600 mt-6 text-left">Find answers to the common questions and learn how to use the app.</p>
            </div>

            <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black"><Settings size={24} />Frequently Asked Questions</h2>
                <div>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition">
                                <span className="font-medium text-gray-800">{faq.question}</span>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                        <div className="px-4 pb-4 text-sm text-gray-600 text-left">{faq.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4 mt-10 flex  items-center gap-2 text-black">
                    <HandHelping size={24} /> Need Help?
                </h2>
                <p className="text-gray-700 mb-2 text-left">If you run into issues or have feedback, feel free to contact us:</p>
                <p className="flex items-center gap-2"><Mail size={18} /> support@todoinfo.com</p>
            </section>

        </div>
    )
}
export default HelpContent
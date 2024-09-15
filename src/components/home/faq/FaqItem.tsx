import { useState } from "react";

interface FaqItemProps {
    question: string;
    answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFaq = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-emerald-700 py-4">
            <button className="w-full text-left font-medium text-lg flex justify-between items-center" onClick={toggleFaq}>
                <span>{question}</span>
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
                <div className="mt-2 text-base sm:text-lg ">{answer}</div>
            )}
        </div>
    )
}

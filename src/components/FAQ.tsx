
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full py-5 text-left font-cyber text-lg text-white hover:text-cyber-glow transition-colors"
      >
        <span>{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus size={20} className="text-cyber-glow" />
          ) : (
            <Plus size={20} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-2 text-gray-300">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes MULTITASKER GPT different from other AI tools?",
      answer: "MULTITASKER GPT excels in handling multiple complex tasks simultaneously while maintaining thoroughness and accuracy for each. It combines comprehensive web research, sequential task execution, and detailed documentation, ensuring each task receives full attention until completion."
    },
    {
      question: "How does the task execution process work?",
      answer: "MULTITASKER GPT first outlines all tasks, then works through them sequentially. For each task, it conducts web searches to gather accurate data, creates visualizations when needed, compiles detailed reports, and confirms completion before moving to the next task. This structured approach ensures thorough execution of each task."
    },
    {
      question: "Can MULTITASKER GPT handle data analysis and visualization?",
      answer: "Yes, MULTITASKER GPT creates accurate graphs, charts, and other visualizations using Python. It only uses real data gathered from reliable sources, never simulating or fabricating information. These visualizations are incorporated into comprehensive reports tailored to your specific requirements."
    },
    {
      question: "Is the data MULTITASKER GPT provides reliable?",
      answer: "MULTITASKER GPT is committed to data integrity. It conducts real-time web searches to gather current, accurate information from reliable sources. It never simulates or makes up data, ensuring all analyses and recommendations are based on factual information."
    },
    {
      question: "How do I get started with MULTITASKER GPT?",
      answer: (
        <>
          Getting started is simple: 
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>Click the "ACCESS MULTITASKER GPT" button on this page</li>
            <li>Outline the tasks you need completed</li>
            <li>Confirm when prompted to allow web searches</li>
            <li>Review the results of each completed task before moving to the next</li>
          </ol>
        </>
      )
    },
    {
      question: "Can I use MULTITASKER GPT for business purposes?",
      answer: "Yes, MULTITASKER GPT is designed for professional use across various industries including market research, data analysis, financial reporting, content creation, and more. It excels at handling complex business tasks that require detailed research and analysis."
    }
  ];

  return (
    <section className="section py-24" id="faq">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 title-gradient inline-block">Frequently Asked Questions</h2>
        <p className="subtitle max-w-3xl mx-auto">
          Learn more about how MULTITASKER GPT can transform your workflow and handle your most complex tasks.
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass-card rounded-xl p-6 md:p-8">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">Still have questions?</p>
        <a 
          href="mailto:Contact@ai-webtools.com" 
          className="btn-secondary inline-block"
        >
          Contact Support
        </a>
      </div>
    </section>
  );
};

export default FAQ;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FAQ() {
  const faqData = [
    {
      question: "Model Camp'e kimler katılabilir?",
      answer: "16 yaş üstü, modellik kariyeri hedefleyen herkes başvuru yapabilir.",
    },
    {
      question: "Eğitimler nerede gerçekleşiyor?",
      answer: "Eğitimler İstanbul'da belirli stüdyolarda organize edilmektedir.",
    },
    {
      question: "Konaklama sağlanıyor mu?",
      answer: "Katılımcıların konaklama ihtiyaçları kendilerine aittir.",
    },
    {
      question: "Katılım ücreti nedir?",
      answer: "Katılım ücreti dönemsel olarak değişmektedir. Başvuru formu sonrası detaylı bilgi iletilecektir.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 py-20 font-sans" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-h2 font-serif text-center mb-12">
          Sıkça Sorulan Sorular
        </h2>

        <div className="space-y-5">
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex justify-between items-center px-5 py-4 bg-white hover:bg-gray-50 transition"
              >
                <span className="text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`text-xl text-gray-400 transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-base text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

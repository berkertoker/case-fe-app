import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface Data {
  title: string;
  description: string;
  faq_questions: FAQ[];
}

interface HomeProps {
  data: Data | null;
}

export default function Home({ data }: HomeProps) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-[#0F182A] mb-4" style={{ fontSize: '36px', fontWeight: 600 }}>
          {data ? data.title : ""}
        </h1>
        <p className="text-lg text-[#233248] mb-14 text-start md:w-8/12 lg:w-6/12">
          {data ? data.description : ""}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0 md:gap-8">
          {data && data.faq_questions ? (
            [...Array(Math.ceil(data.faq_questions.length / 3))].map((_, columnIndex) => (
              <div key={columnIndex}>
                {data.faq_questions
                  .slice(columnIndex * 3, columnIndex * 3 + 3)
                  .map((faq: FAQ, index: number) => (
                    <div key={index} className="mb-10 space-y-6">
                      <h3 className="text-[#0F182A]" style={{ fontSize: '17px', fontWeight: 600 }}>
                        {faq.question}
                      </h3>
                      <p className="text-[#233248]" style={{ fontSize: '15px', fontWeight: 400 }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p className="text-[#0F182A]">Loading FAQs...</p>
          )}
        </div>
      </div>
    </div>
  );
}

// SSR
export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/proxy`);
  const data = await res.json();

  return {
    props: {
      data: data.data[0] || null,
    },
  };
}

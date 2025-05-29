
const allQuestions = [
    {
        id: "Q1",
        question: {
            en: "What does biotechnology primarily deal with?",
            bn: "জৈবপ্রযুক্তি মূলত কী নিয়ে কাজ করে?"
        },
        options: [
            { en: "Study of ancient life forms", bn: "প্রাচীন জীবন গঠনের অধ্যয়ন" },
            { en: "Industrial scale production of biopharmaceuticals and biologicals using genetically modified organisms", bn: "জেনেটিকালি পরিবর্তিত জীব ব্যবহার করে বায়োফার্মাসিউটিক্যালস এবং বায়োলজিক্যালগুলির বৃহৎ পরিসরে উৎপাদন" },
            { en: "The classification of plants and animals", bn: "উদ্ভিদ ও প্রাণীর শ্রেণিবিভাগ" },
            { en: "The study of Earth's atmosphere", bn: "পৃথিবীর বায়ুমণ্ডলের অধ্যয়ন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q2",
        question: {
            en: "Which of the following is NOT an application of biotechnology mentioned in the chapter?",
            bn: "অধ্যায়ে উল্লেখিত জৈবপ্রযুক্তির অ্যাপ্লিকেশন কোনটি নয়?"
        },
        options: [
            { en: "Therapeutics", bn: "থেরাপিউটিকস" },
            { en: "Genetically modified crops", bn: "জেনেটিক্যালি পরিবর্তিত ফসল" },
            { en: "Space exploration", bn: "মহাকাশ অনুসন্ধান" },
            { en: "Waste treatment", bn: "বর্জ্য পরিশোধন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q3",
        question: {
            en: "What is the first critical research area of biotechnology mentioned?",
            bn: "জৈবপ্রযুক্তির প্রথম গুরুত্বপূর্ণ গবেষণার ক্ষেত্র কোনটি উল্লেখ করা হয়েছে?"
        },
        options: [
            { en: "Creating optimal conditions for a catalyst", bn: "একটি অনুঘটকের জন্য সর্বোত্তম অবস্থা তৈরি করা" },
            { en: "Downstream processing", bn: "ডাউনস্ট্রিম প্রক্রিয়াকরণ" },
            { en: "Providing the best catalyst in the form of an improved organism or pure enzyme", bn: "উন্নত জীব বা বিশুদ্ধ এনজাইমের রূপে সেরা অনুঘটক প্রদান করা" },
            { en: "Energy production", bn: "শক্তি উৎপাদন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q4",
        question: {
            en: "Which of these is NOT one of the three options mentioned for increasing food production?",
            bn: "খাদ্য উৎপাদন বৃদ্ধির জন্য উল্লিখিত তিনটি বিকল্পের মধ্যে কোনটি নয়?"
        },
        options: [
            { en: "Agro-chemical based agriculture", bn: "এগ্রো-কেমিক্যাল ভিত্তিক কৃষি" },
            { en: "Organic agriculture", bn: "জৈব কৃষি" },
            { en: "Hydroponics", bn: "হাইড্রোপোনিক্স" },
            { en: "Genetically engineered crop-based agriculture", bn: "জেনেটিকালি প্রকৌশলীকৃত ফসল ভিত্তিক কৃষি" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q5",
        question: {
            en: "The Green Revolution succeeded in:",
            bn: "সবুজ বিপ্লব সফল হয়েছিল:"
        },
        options: [
            { en: "Doubling the food supply", bn: "খাদ্য সরবরাহ দ্বিগুণ করা" },
            { en: "Tripling the food supply", bn: "খাদ্য সরবরাহ তিনগুণ করা" },
            { en: "Quadrupling the food supply", bn: "খাদ্য সরবরাহ চারগুণ করা" },
            { en: "Halving the food supply", bn: "খাদ্য সরবরাহ অর্ধেক করা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q6",
        question: {
            en: "What is an explant in tissue culture?",
            bn: "টিস্যু কালচারে এক্সপ্ল্যান্ট কী?"
        },
        options: [
            { en: "The entire plant", bn: "পুরো গাছ" },
            { en: "Any part of a plant taken out and grown in a test tube", bn: "পরীক্ষাগারের টিউবে নেওয়া এবং বর্ধিত গাছের যে কোনো অংশ" },
            { en: "The nutrient medium", bn: "পুষ্টি মাধ্যম" },
            { en: "A genetically modified seed", bn: "একটি জেনেটিকালি পরিবর্তিত বীজ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q7",
        question: {
            en: "The capacity to generate a whole plant from any cell/explant is called:",
            bn: "কোনো কোষ/এক্সপ্ল্যান্ট থেকে সম্পূর্ণ গাছ তৈরি করার ক্ষমতাকে কী বলা হয়?"
        },
        options: [
            { en: "Photosynthesis", bn: "সালোকসংশ্লেষণ" },
            { en: "Totipotency", bn: "টটিপোটেন্সি" },
            { en: "Meiosis", bn: "মায়োসিস" },
            { en: "Germination", bn: "অঙ্কুরোদগম" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q8",
        question: {
            en: "What carbon source is commonly provided in a nutrient medium for tissue culture?",
            bn: "টিস্যু কালচারের জন্য পুষ্টি মাধ্যমে সাধারণত কোন কার্বন উৎস প্রদান করা হয়?"
        },
        options: [
            { en: "Glucose", bn: "গ্লুকোজ" },
            { en: "Fructose", bn: "ফ্রুক্টোজ" },
            { en: "Sucrose", bn: "সুক্রোজ" },
            { en: "Lactose", bn: "ল্যাকটোজ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q9",
        question: {
            en: "Plants produced through micro-propagation that are genetically identical to the original plant are called:",
            bn: "মাইক্রো-প্রোপাগেশনের মাধ্যমে উৎপাদিত গাছ যা মূল গাছের সাথে জেনেটিকালি অভিন্ন, সেগুলোকে কী বলা হয়?"
        },
        options: [
            { en: "Hybrids", bn: "হাইব্রিড" },
            { en: "Mutants", bn: "মিউট্যান্ট" },
            { en: "Somaclones", bn: "সোমাক্লোন" },
            { en: "Zygotes", bn: "জাইগোট" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q10",
        question: {
            en: "Which part of a virus-infected plant is usually free of virus and can be used for micropropagation?",
            bn: "ভাইরাস আক্রান্ত গাছের কোন অংশ সাধারণত ভাইরাস মুক্ত থাকে এবং মাইক্রোপ্রোপাগেশনের জন্য ব্যবহার করা যেতে পারে?"
        },
        options: [
            { en: "Leaves", bn: "পাতা" },
            { en: "Roots", bn: "মূল" },
            { en: "Meristem (apical and axillary)", bn: "মারিস্টেম (এপিক্যাল এবং অ্যাক্সিলারি)" },
            { en: "Flowers", bn: "ফুল" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q11",
        question: {
            en: "What are Genetically Modified Organisms (GMOs)?",
            bn: "জেনেটিকালি পরিবর্তিত জীব (GMOs) কী?"
        },
        options: [
            { en: "Organisms found in ancient fossils", bn: "প্রাচীন জীবাশ্মে পাওয়া জীব" },
            { en: "Organisms whose genes have been altered by manipulation", bn: "যে জীবদের জিন ম্যানিপুলেশনের মাধ্যমে পরিবর্তিত করা হয়েছে" },
            { en: "Organisms that grow only in specific climates", bn: "যে জীবগুলো কেবল নির্দিষ্ট জলবায়ুতে জন্মায়" },
            { en: "Organisms that reproduce asexually", bn: "যে জীবগুলো অযৌন প্রজনন করে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q12",
        question: {
            en: "Golden rice is enriched with:",
            bn: "গোল্ডেন রাইস সমৃদ্ধ থাকে কি দিয়ে?"
        },
        options: [
            { en: "Vitamin C", bn: "ভিটামিন সি" },
            { en: "Vitamin A", bn: "ভিটামিন এ" },
            { en: "Protein", bn: "প্রোটিন" },
            { en: "Iron", bn: "আয়রন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q13",
        question: {
            en: "Bt toxin is produced by a bacterium called:",
            bn: "বিটি টক্সিন কোন ব্যাকটেরিয়া দ্বারা উৎপাদিত হয়?"
        },
        options: [
            { en: "Escherichia coli", bn: "ইশ্চেরিচিয়া কোলি" },
            { en: "Bacillus thuringiensis", bn: "ব্যাসিলাস থুরিংয়েনসিস" },
            { en: "Streptococcus pneumoniae", bn: "স্ট্রেপটোকক্কাস নিউমোনিয়া" },
            { en: "Agrobacterium tumefaciens", bn: "অ্যাগ্রোব্যাকটেরিয়াম টুমেফেসিয়েন্স" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q14",
        question: {
            en: "The Bt toxin protein exists in the bacteria as an inactive:",
            bn: "বিটি টক্সিন প্রোটিন ব্যাকটেরিয়ার মধ্যে একটি নিষ্ক্রিয় রূপে থাকে:"
        },
        options: [
            { en: "Active toxin", bn: "সক্রিয় টক্সিন" },
            { en: "Enzyme", bn: "এনজাইম" },
            { en: "Protoxin", bn: "প্রোটক্সিন" },
            { en: "Antibody", bn: "অ্যান্টিবডি" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q15",
        question: {
            en: "The active form of Bt toxin binds to the surface of which cells in the insect?",
            bn: "বিটি টক্সিনের সক্রিয় রূপটি পোকার কোন কোষের পৃষ্ঠে আবদ্ধ হয়?"
        },
        options: [
            { en: "Nerve cells", bn: "স্নায়ু কোষ" },
            { en: "Muscle cells", bn: "পেশী কোষ" },
            { en: "Midgut epithelial cells", bn: "মিডগাট এপিথেলিয়াল কোষ" },
            { en: "Blood cells", bn: "রক্ত কোষ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q16",
        question: {
            en: "The genes crylAc and cryllAb control:",
            bn: "ক্রাই১এসি এবং ক্রাই২এবি জিনগুলো নিয়ন্ত্রণ করে:"
        },
        options: [
            { en: "Corn borer", bn: "ভূট্টার পোকা" },
            { en: "Cotton bollworms", bn: "তুঁত মথের লার্ভা" },
            { en: "Nematodes in tobacco", bn: "তামাকে থাকা নেমাটোড" },
            { en: "Fruit flies", bn: "ফলের মাছি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q17",
        question: {
            en: "RNA interference (RNAi) takes place in which organisms as a method of cellular defense?",
            bn: "কোন জীবগুলিতে কোষীয় প্রতিরক্ষার পদ্ধতি হিসেবে আরএনএ ইন্টারফারেন্স (RNAi) ঘটে?"
        },
        options: [
            { en: "Only bacteria", bn: "কেবলমাত্র ব্যাকটেরিয়া" },
            { en: "Only viruses", bn: "কেবলমাত্র ভাইরাস" },
            { en: "All eukaryotic organisms", bn: "সমস্ত ইউক্যারিওটিক জীব" },
            { en: "Only plants", bn: "কেবলমাত্র গাছপালা" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q18",
        question: {
            en: "About how many recombinant therapeutics have been approved for human use the world over (at the time of book printing)?",
            bn: "বই ছাপার সময় পর্যন্ত বিশ্বে মানব ব্যবহারের জন্য প্রায় কতগুলি রিকম্বিন্যান্ট থেরাপিউটিকস অনুমোদিত হয়েছে?"
        },
        options: [
            { en: "10", bn: "১০" },
            { en: "30", bn: "৩০" },
            { en: "100", bn: "১০০" },
            { en: "5", bn: "৫" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q19",
        question: {
            en: "Insulin used for diabetes was earlier extracted from:",
            bn: "ডায়াবেটিসের জন্য ব্যবহৃত ইনসুলিন পূর্বে কোথা থেকে নিষ্কাশন করা হতো?"
        },
        options: [
            { en: "Genetically modified bacteria", bn: "জেনেটিকালি পরিবর্তিত ব্যাকটেরিয়া" },
            { en: "Human volunteers", bn: "মানব স্বেচ্ছাসেবক" },
            { en: "Pancreas of slaughtered cattle and pigs", bn: "হত্যা করা গবাদি পশু এবং শূকরের অগ্ন্যাশয়" },
            { en: "Plant extracts", bn: "উদ্ভিদ নির্যাস" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q20",
        question: {
            en: "Mature insulin consists of how many short polypeptide chains?",
            bn: "পরিপক্ক ইনসুলিন কতগুলি ছোট পলিপেপটাইড চেইন দ্বারা গঠিত?"
        },
        options: [
            { en: "One", bn: "এক" },
            { en: "Two (A and B)", bn: "দুই (এ এবং বি)" },
            { en: "Three (A, B, and C)", bn: "তিন (এ, বি, এবং সি)" },
            { en: "Four", bn: "চার" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q21",
        question: {
            en: "What is the name of the American company that prepared human insulin using rDNA techniques in 1983?",
            bn: "১৯৮৩ সালে আরডিএনএ কৌশল ব্যবহার করে মানব ইনসুলিন প্রস্তুতকারী আমেরিকান কোম্পানির নাম কী?"
        },
        options: [
            { en: "Genentech", bn: "জেনেটেক" },
            { en: "Amgen", bn: "অ্যামজেন" },
            { en: "Eli Lilly", bn: "এলি লিলি" },
            { en: "Biogen", bn: "বায়োজেন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q22",
        question: {
            en: "Gene therapy is a collection of methods that allows correction of a:",
            bn: "জিন থেরাপি হলো কিছু পদ্ধতির সমাহার যা একটি ____ সংশোধন করতে সাহায্য করে:"
        },
        options: [
            { en: "Nutritional deficiency", bn: "পুষ্টির অভাব" },
            { en: "Gene defect", bn: "জিনগত ত্রুটি" },
            { en: "Physical injury", bn: "শারীরিক আঘাত" },
            { en: "Bacterial infection", bn: "ব্যাকটেরিয়াল সংক্রমণ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q23",
        question: {
            en: "The first clinical gene therapy was given in 1990 to a 4-year old girl with which deficiency?",
            bn: "প্রথম ক্লিনিকাল জিন থেরাপি ১৯৯০ সালে কোন অভাবযুক্ত ৪ বছর বয়সী মেয়েকে দেওয়া হয়েছিল?"
        },
        options: [
            { en: "Insulin deficiency", bn: "ইনসুলিনের অভাব" },
            { en: "Growth hormone deficiency", bn: "গ্রোথ হরমোনের অভাব" },
            { en: "Adenosine deaminase (ADA) deficiency", bn: "অ্যাডেনোসিন ডেaminase (ADA) অভাব" },
            { en: "Phenylketonuria", bn: "ফিনাইলকেটোনুরিয়া" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q24",
        question: {
            en: "Which technique can detect very low amounts of bacterial or viral DNA by amplification?",
            bn: "অ্যাম্প্লিফিকেশনের মাধ্যমে ব্যাকটেরিয়াল বা ভাইরাল ডিএনএর খুব কম পরিমাণ সনাক্ত করতে কোন কৌশল ব্যবহার করা যেতে পারে?"
        },
        options: [
            { en: "ELISA", bn: "এলিসা" },
            { en: "PCR", bn: "পিসিআর" },
            { en: "Autoradiography", bn: "অটোরেডিওগ্রাফি" },
            { en: "Tissue culture", bn: "টিস্যু কালচার" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q25",
        question: {
            en: "ELISA is based on the principle of:",
            bn: "এলিসা কোন নীতির উপর ভিত্তি করে তৈরি?"
        },
        options: [
            { en: "DNA replication", bn: "ডিএনএ রেপ্লিকেশন" },
            { en: "Antigen-antibody interaction", bn: "অ্যান্টিজেন-অ্যান্টিবডি ইন্টারঅ্যাকশন" },
            { en: "RNA interference", bn: "আরএনএ ইন্টারফারেন্স" },
            { en: "Protein synthesis", bn: "প্রোটিন সিন্থেসিস" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q26",
        question: {
            en: "Over 95% of all existing transgenic animals are:",
            bn: "বর্তমান সমস্ত ট্রান্সজেনিক প্রাণীর ৯৫% এর বেশি হলো:"
        },
        options: [
            { en: "Rats", bn: "ইঁদুর" },
            { en: "Rabbits", bn: "খরগোশ" },
            { en: "Pigs", bn: "শূকর" },
            { en: "Mice", bn: "ছোট ইঁদুর" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q27",
        question: {
            en: "The first transgenic cow, Rosie, produced human protein-enriched milk containing:",
            bn: "প্রথম ট্রান্সজেনিক গাভী, রোজি, মানব প্রোটিন সমৃদ্ধ দুধ উৎপাদন করেছিল যা ধারণ করে:"
        },
        options: [
            { en: "Human beta-globin", bn: "মানব বিটা-গ্লোবিন" },
            { en: "Human alpha-lactalbumin", bn: "মানব আলফা-ল্যাকটালবুমিন" },
            { en: "Human insulin", bn: "মানব ইনসুলিন" },
            { en: "Human growth hormone", bn: "মানব গ্রোথ হরমোন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q28",
        question: {
            en: "What is GEAC?",
            bn: "জিইএসি কী?"
        },
        options: [
            { en: "Global Environmental Action Committee", bn: "গ্লোবাল এনভায়রনমেন্টাল অ্যাকশন কমিটি" },
            { en: "Genetic Engineering Approval Committee", bn: "জেনেটিক ইঞ্জিনিয়ারিং অ্যাপারভাল কমিটি" },
            { en: "Gene Evaluation and Assessment Council", bn: "জিন ইভালুয়েশন অ্যান্ড অ্যাসেসমেন্ট কাউন্সিল" },
            { en: "Genetically Enhanced Agriculture Commission", bn: "জেনেটিকালি এনহ্যান্সড অ্যাগ্রিকালচার কমিশন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q29",
        question: {
            en: "How many documented varieties of Basmati are grown in India?",
            bn: "ভারতে কতগুলি নথিভুক্ত বাসমতি জাতের চাষ হয়?"
        },
        options: [
            { en: "10", bn: "১০" },
            { en: "27", bn: "২৭" },
            { en: "50", bn: "৫০" },
            { en: "100", bn: "১০০" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q30",
        question: {
            en: "The term used to refer to the use of bio-resources by multinational companies without proper authorisation is:",
            bn: "সঠিক অনুমোদন ছাড়া বহুজাতিক সংস্থাগুলি দ্বারা জৈব-সম্পদ ব্যবহারকে বোঝাতে ব্যবহৃত শব্দটি হলো:"
        },
        options: [
            { en: "Bioremediation", bn: "বায়োরিমিডিয়েশন" },
            { en: "Bio-prospecting", bn: "বায়ো-প্রস্পেক্টিং" },
            { en: "Biopiracy", bn: "বায়োপাইরেসি" },
            { en: "Bio-fortification", bn: "বায়ো-ফর্টিফিকেশন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q31",
        question: {
            en: "Downstream processing technologies in biotechnology are primarily used for:",
            bn: "জৈবপ্রযুক্তিতে ডাউনস্ট্রিম প্রক্রিয়াকরণ প্রযুক্তিগুলি মূলত কী জন্য ব্যবহৃত হয়?"
        },
        options: [
            { en: "Creating genetically modified organisms", bn: "জেনেটিকালি পরিবর্তিত জীব তৈরি করা" },
            { en: "Purifying the protein/organic compound", bn: "প্রোটিন/জৈব যৌগ বিশুদ্ধ করা" },
            { en: "Providing optimal conditions for catalyst action", bn: "অনুঘটকের ক্রিয়াকলাপের জন্য সর্বোত্তম অবস্থা প্রদান করা" },
            { en: "Finding the best catalyst", bn: "সেরা অনুঘটক খুঁজে বের করা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q32",
        question: {
            en: "Tissue culture requires a nutrient medium providing a carbon source, inorganic salts, vitamins, amino acids, and growth regulators. Which of the following are common growth regulators used?",
            bn: "টিস্যু কালচারের জন্য একটি পুষ্টি মাধ্যম প্রয়োজন যা কার্বন উৎস, অজৈব লবণ, ভিটামিন, অ্যামিনো অ্যাসিড এবং গ্রোথ রেগুলেটর সরবরাহ করে। নিম্নলিখিতগুলির মধ্যে কোনটি সাধারণ গ্রোথ রেগুলেটর হিসেবে ব্যবহৃত হয়?"
        },
        options: [
            { en: "Sucrose and glucose", bn: "সুক্রোজ এবং গ্লুকোজ" },
            { en: "Auxins and cytokinins", bn: "অক্সিন এবং সাইটোকাইনিন" },
            { en: "Proteins and lipids", bn: "প্রোটিন এবং লিপিড" },
            { en: "DNA and RNA", bn: "ডিএনএ এবং আরএনএ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q33",
        question: {
            en: "Somatic hybridisation involves the fusion of:",
            bn: "সোমাটিক হাইব্রিডাইজেশনে কীসের ফিউশন জড়িত?"
        },
        options: [
            { en: "Two gametes from different species", bn: "বিভিন্ন প্রজাতির দুটি গ্যামেট" },
            { en: "Naked protoplasts from two different plant varieties", bn: "দুটি ভিন্ন উদ্ভিদের নগ্ন প্রোটোপ্লাস্ট" },
            { en: "A plant cell and an animal cell", bn: "একটি উদ্ভিদ কোষ এবং একটি প্রাণী কোষ" },
            { en: "Two different types of explants", bn: "দুটি ভিন্ন ধরণের এক্সপ্ল্যান্ট" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q34",
        question: {
            en: "One of the main advantages of using Genetically Modified (GM) plants is that they can be made more tolerant to:",
            bn: "জেনেটিকালি পরিবর্তিত (GM) গাছপালা ব্যবহারের একটি প্রধান সুবিধা হলো এগুলি ____ প্রতি অধিক সহনশীল করা যায়:"
        },
        options: [
            { en: "Only biotic stresses", bn: "কেবলমাত্র বায়োটিক চাপ" },
            { en: "Only abiotic stresses (cold, drought, salt, heat)", bn: "কেবলমাত্র অ্যাবায়োটিক চাপ (ঠান্ডা, খরা, লবণ, তাপ)" },
            { en: "Both biotic and abiotic stresses", bn: "বায়োটিক এবং অ্যাবায়োটিক উভয় চাপ" },
            { en: "Mechanical damage", bn: "যান্ত্রিক ক্ষতি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q35",
        question: {
            en: "The Bt toxin is converted into an active form in the insect gut due to:",
            bn: "পোকার অন্ত্রে বিটি টক্সিন সক্রিয় রূপে রূপান্তরিত হয় কারণ:"
        },
        options: [
            { en: "Acidic pH of the gut", bn: "অন্ত্রের অম্লীয় pH" },
            { en: "Alkaline pH of the gut", bn: "অন্ত্রের ক্ষারীয় pH" },
            { en: "Presence of specific enzymes in the saliva", bn: "লালায় নির্দিষ্ট এনজাইমের উপস্থিতি" },
            { en: "High temperature in the gut", bn: "অন্ত্রের উচ্চ তাপমাত্রা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q36",
        question: {
            en: "In RNA interference (RNAi), what is the direct cause of silencing a specific mRNA?",
            bn: "আরএনএ ইন্টারফারেন্স (RNAi)-এ একটি নির্দিষ্ট mRNA-কে সাইলেন্স করার প্রত্যক্ষ কারণ কী?"
        },
        options: [
            { en: "Binding of a single-stranded DNA to the mRNA", bn: "mRNA-এর সাথে একটি একক-স্ট্র্যান্ডেড ডিএনএ-এর আবদ্ধ হওয়া" },
            { en: "Formation of a complementary dsRNA molecule that binds to the mRNA", bn: "একটি পরিপূরক dsRNA অণুর গঠন যা mRNA-এর সাথে আবদ্ধ হয়" },
            { en: "Degradation of the mRNA by host enzymes", bn: "হোস্ট এনজাইম দ্বারা mRNA-এর অবক্ষয়" },
            { en: "Methylation of the mRNA", bn: "mRNA-এর মিথাইলেশন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q37",
        question: {
            en: "What was the main challenge for producing insulin using rDNA techniques before Eli Lilly's success?",
            bn: "এলি লিলির সাফল্যের আগে আরডিএনএ কৌশল ব্যবহার করে ইনসুলিন তৈরির প্রধান চ্যালেঞ্জ কী ছিল?"
        },
        options: [
            { en: "Producing the A and B chains", bn: "এ এবং বি চেইন তৈরি করা" },
            { en: "Getting insulin assembled into a mature form", bn: "ইনসুলিনকে একটি পরিপক্ক রূপে একত্রিত করা" },
            { en: "Finding a suitable host organism", bn: "একটি উপযুক্ত হোস্ট জীব খুঁজে বের করা" },
            { en: "Purifying the insulin chains", bn: "ইনসুলিন চেইন বিশুদ্ধ করা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q38",
        question: {
            en: "For ADA deficiency, why is enzyme replacement therapy not a completely curative solution?",
            bn: "এডিএ অভাবের জন্য, কেন এনজাইম প্রতিস্থাপন থেরাপি সম্পূর্ণ নিরাময়মূলক সমাধান নয়?"
        },
        options: [
            { en: "The enzyme is very expensive", bn: "এনজাইমটি খুব ব্যয়বহুল" },
            { en: "The enzyme is quickly degraded in the body", bn: "এনজাইম শরীরে দ্রুত degraded হয়ে যায়" },
            { en: "It requires repeated infusions as functional ADA is not produced by the patient's cells continuously", bn: "এটি বারবার ইনফিউশনের প্রয়োজন হয় কারণ রোগীর কোষগুলি ক্রমাগত কার্যকরী এডিএ উৎপাদন করে না" },
            { en: "The enzyme causes severe allergic reactions", bn: "এনজাইম মারাত্মক অ্যালার্জিক প্রতিক্রিয়া সৃষ্টি করে" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q39",
        question: {
            en: "In molecular diagnosis using a probe, why would a clone with a mutated gene not show up on an autoradiograph if the probe is for the normal gene?",
            bn: "একটি প্রোব ব্যবহার করে মলিকুলার ডায়াগনোসিসে, যদি প্রোবটি স্বাভাবিক জিনের জন্য হয়, তবে কেন একটি mutated জিন সহ একটি ক্লোন অটোরেডিওগ্রাফে দেখা যাবে না?"
        },
        options: [
            { en: "The mutated gene replicates faster.", bn: "mutated জিন দ্রুত প্রতিরূপ তৈরি করে।" },
            { en: "The probe will not have complementarity with the mutated gene.", bn: "প্রোবটির mutated জিনের সাথে পরিপূরকতা থাকবে না।" },
            { en: "The mutated gene does not bind to the photographic film.", bn: "mutated জিন ফটোগ্রাফিক ফিল্মের সাথে আবদ্ধ হয় না।" },
            { en: "The radioactive molecule on the probe is inactivated by the mutation.", bn: "প্রোবের উপর থাকা তেজস্ক্রিয় অণু mutation দ্বারা নিষ্ক্রিয় হয়ে যায়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q40",
        question: {
            en: "Transgenic animals are useful for studying normal physiology and development, particularly for complex factors like:",
            bn: "ট্রান্সজেনিক প্রাণীগুলি স্বাভাবিক শারীরবিদ্যা এবং বিকাশ অধ্যয়নের জন্য দরকারী, বিশেষ করে জটিল কারণগুলির জন্য যেমন:"
        },
        options: [
            { en: "Blood clotting factors", bn: "রক্ত জমাট বাঁধার কারণ" },
            { en: "Insulin-like growth factor", bn: "ইনসুলিনের মতো গ্রোথ ফ্যাক্টর" },
            { en: "Neurotransmitters", bn: "নিউরোট্রান্সমিটার" },
            { en: "Digestive enzymes", bn: "হজম এনজাইম" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q41",
        question: {
            en: "How does Rosie the transgenic cow's milk compare to natural cow's milk for human babies?",
            bn: "মানব শিশুদের জন্য রোজী ট্রান্সজেনিক গাভীর দুধ প্রাকৃতিক গাভীর দুধের সাথে কীভাবে তুলনা করে?"
        },
        options: [
            { en: "It has less protein.", bn: "এতে কম প্রোটিন থাকে।" },
            { en: "It is nutritionally a more balanced product.", bn: "এটি পুষ্টিগতভাবে আরও সুষম পণ্য।" },
            { en: "It has a higher fat content.", bn: "এতে চর্বির পরিমাণ বেশি।" },
            { en: "It is designed for adult consumption.", bn: "এটি প্রাপ্তবয়স্কদের ব্যবহারের জন্য তৈরি।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q42",
        question: {
            en: "Why are traditional knowledge and biodiversity more prevalent in developing countries compared to industrialized nations?",
            bn: "শিল্পোন্নত দেশগুলির তুলনায় উন্নয়নশীল দেশগুলিতে ঐতিহ্যবাহী জ্ঞান এবং জীববৈচিত্র্য কেন বেশি প্রচলিত?"
        },
        options: [
            { en: "Industrialized nations have destroyed their biodiversity.", bn: "শিল্পোন্নত দেশগুলি তাদের জীববৈচিত্র্য ধ্বংস করেছে।" },
            { en: "Developing countries have a longer history of interaction with diverse ecosystems.", bn: "বিভিন্ন বাস্তুতন্ত্রের সাথে উন্নয়নশীল দেশগুলির দীর্ঘ ইতিহাস রয়েছে।" },
            { en: "Industrialized nations are rich financially but often poor in biodiversity and traditional knowledge.", bn: "শিল্পোন্নত দেশগুলি আর্থিকভাবে সমৃদ্ধ হলেও প্রায়শই জীববৈচিত্র্য এবং ঐতিহ্যবাহী জ্ঞানে দরিদ্র।" },
            { en: "Developing countries have better patenting laws for traditional knowledge.", bn: "ঐতিহ্যবাহী জ্ঞানের জন্য উন্নয়নশীল দেশগুলির উন্নত পেটেন্ট আইন রয়েছে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q43",
        question: {
            en: "The \"pomato\" plant, a result of somatic hybridisation between tomato and potato, was not commercially successful because:",
            bn: "টমেটো এবং আলুর মধ্যে সোমাটিক হাইব্রিডাইজেশনের ফলস্বরূপ \"পোমাটো\" উদ্ভিদ বাণিজ্যিক ভাবে সফল হয়নি কারণ:"
        },
        options: [
            { en: "It was susceptible to diseases.", bn: "এটি রোগপ্রবণ ছিল।" },
            { en: "It could not reproduce.", bn: "এটি প্রজনন করতে পারতো না।" },
            { en: "It did not have all the desired combination of characteristics.", bn: "এতে বৈশিষ্ট্যের কাঙ্ক্ষিত সমস্ত সমন্বয় ছিল না।" },
            { en: "It required very specific growing conditions.", bn: "এটির জন্য খুব নির্দিষ্ট ক্রমবর্ধমান অবস্থার প্রয়োজন ছিল।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q44",
        question: {
            en: "The gene 'cry' codes for the Bt toxin. What does 'cry' stand for?",
            bn: "'ক্রাই' জিনটি বিটি টক্সিনের জন্য কোড করে। 'ক্রাই' মানে কি?"
        },
        options: [
            { en: "Crystalline", bn: "ক্রিস্টালাইন" },
            { en: "Cryptic", bn: "ক্রিপ্টিক" },
            { en: "Critical", bn: "ক্রিটিক্যাল" },
            { en: "Carrier", bn: "ক্যারিয়ার" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q45",
        question: {
            en: "In the process of RNA interference used to protect tobacco plants from Meloidegyne incognitia, how is the dsRNA introduced or formed in the host plant cells?",
            bn: "মেলোইডেগাইন ইনকগনিটিয়া থেকে তামাক গাছকে রক্ষা করার জন্য ব্যবহৃত আরএনএ ইন্টারফারেন্স প্রক্রিয়ায়, হোস্ট উদ্ভিদ কোষে dsRNA কীভাবে প্রবেশ করানো হয় বা তৈরি হয়?"
        },
        options: [
            { en: "By direct injection of dsRNA", bn: "dsRNA সরাসরি ইনজেকশন করে" },
            { en: "By using Agrobacterium vectors to introduce nematode-specific genes that produce sense and anti-sense RNA", bn: "নেমাটোড-নির্দিষ্ট জিন প্রবর্তন করতে অ্যাগ্রোব্যাকটেরিয়াম ভেক্টর ব্যবহার করে যা sense এবং anti-sense RNA তৈরি করে" },
            { en: "By spraying the plant with dsRNA", bn: "dsRNA দিয়ে গাছ স্প্রে করে" },
            { en: "The plant naturally produces dsRNA upon infection", bn: "সংক্রমণের পর গাছ স্বাভাবিকভাবেই dsRNA তৈরি করে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q46",
        question: {
            en: "What is the significance of the C-peptide in human pro-insulin?",
            bn: "মানব প্রো-ইনসুলিনে সি-পেপটাইডের গুরুত্ব কী?"
        },
        options: [
            { en: "It is the active part of the insulin molecule.", bn: "এটি ইনসুলিন অণুর সক্রিয় অংশ।" },
            { en: "It helps in the correct folding and assembly of the A and B chains and is removed during maturation.", bn: "এটি এ এবং বি চেইনগুলির সঠিক ভাঁজ এবং একত্রিত হতে সাহায্য করে এবং পরিপক্কতার সময় অপসারিত হয়।" },
            { en: "It binds to the insulin receptor on target cells.", bn: "এটি লক্ষ্য কোষের ইনসুলিন রিসেপ্টরের সাথে আবদ্ধ হয়।" },
            { en: "It increases the shelf-life of insulin.", bn: "এটি ইনসুলিনের শেল্ফ-লাইফ বাড়ায়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q47",
        question: {
            en: "A permanent cure for ADA deficiency through gene therapy would ideally involve:",
            bn: "জিন থেরাপির মাধ্যমে এডিএ অভাবের স্থায়ী নিরাময়ের জন্য আদর্শভাবে কী প্রয়োজন?"
        },
        options: [
            { en: "Repeated infusion of genetically engineered lymphocytes.", bn: "জেনেটিকালি প্রকৌশলীকৃত লিম্ফোসাইট বারবার ইনফিউশন।" },
            { en: "Introducing the ADA cDNA into bone marrow cells at an early embryonic stage.", bn: "প্রাথমিক ভ্রূণীয় পর্যায়ে অস্থি মজ্জার কোষে ADA cDNA প্রবেশ করানো।" },
            { en: "Regular enzyme replacement therapy.", bn: "নিয়মিত এনজাইম প্রতিস্থাপন থেরাপি।" },
            { en: "Transplantation of a healthy thymus gland.", bn: "একটি সুস্থ থাইমাস গ্রন্থি প্রতিস্থাপন।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q48",
        question: {
            en: "Transgenic animals used for chemical safety testing (toxicity testing) are made more sensitive to toxic substances by:",
            bn: "রাসায়নিক নিরাপত্তা পরীক্ষার (toxicity testing) জন্য ব্যবহৃত ট্রান্সজেনিক প্রাণীগুলিকে বিষাক্ত পদার্থের প্রতি আরও সংবেদনশীল করে তোলা হয় কীভাবে?"
        },
        options: [
            { en: "Weakening their immune system", bn: "তাদের রোগ প্রতিরোধ ক্ষমতা দুর্বল করে" },
            { en: "Carrying specific genes that make them more sensitive", bn: "নির্দিষ্ট জিন বহন করে যা তাদের আরও সংবেদনশীল করে তোলে" },
            { en: "Exposing them to low doses of toxins from birth", bn: "জন্ম থেকেই তাদের বিষাক্ত পদার্থের কম ডোজের সংস্পর্শে এনে" },
            { en: "Modifying their diet", bn: "তাদের খাদ্যাভ্যাস পরিবর্তন করে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q49",
        question: {
            en: "The Indian Parliament's amendment to the Indian Patents Bill addresses issues including:",
            bn: "ভারতীয় পেটেন্ট বিলের ভারতীয় সংসদের সংশোধনীতে নিম্নলিখিত বিষয়গুলি অন্তর্ভুক্ত করা হয়েছে:"
        },
        options: [
            { en: "Granting patents for all traditional knowledge by default.", bn: "সমস্ত ঐতিহ্যবাহী জ্ঞানের জন্য ডিফল্টরূপে পেটেন্ট প্রদান।" },
            { en: "Patent terms, emergency provisions, research, and development initiatives.", bn: "পেটেন্টের মেয়াদ, জরুরি বিধান, গবেষণা এবং উন্নয়ন উদ্যোগ।" },
            { en: "Prohibiting any patents on biological materials.", bn: "জৈবিক উপাদানের উপর কোনো পেটেন্ট নিষিদ্ধ করা।" },
            { en: "Allowing indefinite patent terms for agricultural products.", bn: "কৃষি পণ্যের জন্য অনির্দিষ্টকালের পেটেন্টের মেয়াদ অনুমতি দেওয়া।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q50",
        question: {
            en: "Which statement best describes the relationship between Bt toxin and the bacterium Bacillus thuringiensis?",
            bn: "কোন বিবৃতিটি বিটি টক্সিন এবং ব্যাসিলাস থুরিংয়েনসিস ব্যাকটেরিয়ার মধ্যে সম্পর্ককে সবচেয়ে ভালোভাবে বর্ণনা করে?"
        },
        options: [
            { en: "The toxin kills the bacterium after a certain period.", bn: "টক্সিন নির্দিষ্ট সময়ের পর ব্যাকটেরিয়াকে মেরে ফেলে।" },
            { en: "The bacterium is immune to its own toxin because it lacks the specific gut pH.", bn: "ব্যাকটেরিয়া তার নিজের টক্সিনের প্রতি অনাক্রম্য কারণ এতে নির্দিষ্ট অন্ত্রের pH এর অভাব রয়েছে।" },
            { en: "The toxin exists as an inactive protoxin in the bacterium and requires insect gut conditions for activation.", bn: "টক্সিন ব্যাকটেরিয়ার মধ্যে একটি নিষ্ক্রিয় প্রোটক্সিন হিসেবে বিদ্যমান থাকে এবং সক্রিয়করণের জন্য পোকার অন্ত্রের অবস্থা প্রয়োজন।" },
            { en: "The bacterium encapsulates the toxin in a protective coat.", bn: "ব্যাকটেরিয়া টক্সিনকে একটি প্রতিরক্ষামূলক আবরণে আবদ্ধ করে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q51",
        question: {
            en: "Among the three critical research areas of biotechnology, \"Creating optimal conditions through engineering for a catalyst to act\" primarily refers to:",
            bn: "জৈবপ্রযুক্তির তিনটি গুরুত্বপূর্ণ গবেষণা ক্ষেত্রের মধ্যে, \"একটি অনুঘটকের ক্রিয়া করার জন্য প্রকৌশল দ্বারা সর্বোত্তম পরিস্থিতি তৈরি করা\" মূলত বোঝায়:"
        },
        options: [
            { en: "Genetic modification of the catalyst itself.", bn: "অনুঘটকের নিজস্ব জেনেটিক পরিবর্তন।" },
            { en: "Designing bioreactors and controlling process parameters like temperature, pH, substrate.", bn: "বায়োরিয়্যাক্টর ডিজাইন করা এবং তাপমাত্রা, pH, সাবস্ট্রেটের মতো প্রক্রিয়া প্যারামিটার নিয়ন্ত্রণ করা।" },
            { en: "Developing efficient purification techniques for the product.", bn: "পণ্যের জন্য কার্যকর পরিশোধন কৌশল বিকাশ করা।" },
            { en: "Screening for naturally occurring high-efficiency enzymes.", bn: "প্রাকৃতিকভাবে প্রাপ্ত উচ্চ-কার্যকরী এনজাইম স্ক্রীনিং।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q52",
        question: {
            en: "If traditional breeding techniques fail to keep pace with demand for crop improvement, tissue culture offers an advantage because it:",
            bn: "যদি ঐতিহ্যবাহী প্রজনন কৌশল শস্যের উন্নতির জন্য চাহিদার সাথে তাল মেলাতে ব্যর্থ হয়, তাহলে টিস্যু কালচার একটি সুবিধা প্রদান করে কারণ এটি:"
        },
        options: [
            { en: "Only works for a few specific crop types.", bn: "কেবলমাত্র কয়েকটি নির্দিষ্ট ধরণের ফসলের জন্য কাজ করে।" },
            { en: "Allows for rapid multiplication (micro-propagation) of desired plants and recovery of healthy plants from diseased ones.", bn: "কাঙ্ক্ষিত গাছের দ্রুত বংশবৃদ্ধি (মাইক্রো-প্রোপাগেশন) এবং রোগাক্রান্ত গাছ থেকে সুস্থ গাছ পুনরুদ্ধারের অনুমতি দেয়।" },
            { en: "Directly creates new genes not present in the parent plant.", bn: "মূল গাছে উপস্থিত নয় এমন নতুন জিন সরাসরি তৈরি করে।" },
            { en: "Is less expensive and requires less technical expertise than traditional breeding.", bn: "ঐতিহ্যবাহী প্রজননের চেয়ে কম ব্যয়বহুল এবং কম প্রযুক্তিগত দক্ষতার প্রয়োজন।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q53",
        question: {
            en: "The formation of \"pomato\" demonstrated somatic hybridisation. What fundamental cellular process allows the fusion of protoplasts from two different species to form a viable hybrid cell?",
            bn: "\"পোমাটো\" গঠন সোমাটিক হাইব্রিডাইজেশন প্রদর্শন করে। কোন মৌলিক কোষীয় প্রক্রিয়া দুটি ভিন্ন প্রজাতির প্রোটোপ্লাস্টের ফিউশনকে একটি কার্যকর হাইব্রিড কোষ তৈরি করতে সাহায্য করে?"
        },
        options: [
            { en: "Universality of the genetic code.", bn: "জেনেটিক কোডের সার্বজনীনতা।" },
            { en: "Compatibility of plasma membranes to fuse and the potential for nuclear fusion or coordinated activity.", bn: "প্লাজমা মেমব্রেনগুলির ফিউশনের জন্য সামঞ্জস্য এবং নিউক্লিয়ার ফিউশন বা সমন্বিত কার্যকলাপের সম্ভাবনা।" },
            { en: "The presence of identical cell wall components.", bn: "একই সেল প্রাচীর উপাদানগুলির উপস্থিতি।" },
            { en: "The ability of mitochondria from one species to function in the cytoplasm of another.", bn: "এক প্রজাতির মাইটোকন্ড্রিয়ার অন্য প্রজাতির সাইটোপ্লাজমে কাজ করার ক্ষমতা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q54",
        question: {
            en: "A specific Bt toxin gene, crylAb, controls corn borer. If this gene were introduced into cotton plants, what would be the most likely outcome regarding pest resistance?",
            bn: "একটি নির্দিষ্ট বিটি টক্সিন জিন, ক্রাই১এবি, ভূট্টার পোকা নিয়ন্ত্রণ করে। যদি এই জিনটি তুলা গাছে প্রবেশ করানো হয়, তাহলে পোকা প্রতিরোধ ক্ষমতার ক্ষেত্রে সবচেয়ে সম্ভাব্য ফলাফল কী হবে?"
        },
        options: [
            { en: "Cotton plants would become resistant to corn borer.", bn: "তুলা গাছ ভূট্টার পোকার প্রতি প্রতিরোধী হবে।" },
            { en: "Cotton plants would become resistant to cotton bollworms.", bn: "তুলা গাছ তুঁত মথের লার্ভার প্রতি প্রতিরোধী হবে।" },
            { en: "Cotton plants would likely show little or no resistance to corn borer due to pest specificity of the toxin.", bn: "টক্সিনের পোকা-নির্দিষ্টতার কারণে তুলা গাছ সম্ভবত ভূট্টার পোকার প্রতি সামান্য বা কোনো প্রতিরোধ ক্ষমতা দেখাবে না।" },
            { en: "Cotton plants would show resistance to a wide range of lepidopteran insects.", bn: "তুলা গাছ লেপিডোপটেরান পোকার বিস্তৃত পরিসরের প্রতি প্রতিরোধ ক্ষমতা দেখাবে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q55",
        question: {
            en: "The dsRNA molecule used in RNAi for nematode resistance in tobacco plants initiates silencing. This dsRNA is processed by cellular machinery (like Dicer and RISC complex, though not detailed in the text). What is the ultimate fate of the target nematode mRNA?",
            bn: "তামাক গাছে নেমাটোড প্রতিরোধের জন্য RNAi-তে ব্যবহৃত dsRNA অণু সাইলেন্সিং শুরু করে। এই dsRNA কোষীয় যন্ত্রপাতির (যেমন ডাইসার এবং RISC কমপ্লেক্স, যদিও পাঠ্যে বিস্তারিত নেই) দ্বারা প্রক্রিয়াকৃত হয়। লক্ষ্য নেমাটোড mRNA এর চূড়ান্ত পরিণতি কী?"
        },
        options: [
            { en: "It is prevented from entering the nucleus.", bn: "এটি নিউক্লিয়াসে প্রবেশ করতে বাধা পায়।" },
            { en: "Its translation is blocked, or it is cleaved and degraded.", bn: "এর translation অবরুদ্ধ হয়, অথবা এটি খণ্ডিত এবং degraded হয়।" },
            { en: "It is converted into a DNA molecule.", bn: "এটি একটি ডিএনএ অণুতে রূপান্তরিত হয়।" },
            { en: "It is permanently modified by methylation.", bn: "এটি methylation দ্বারা স্থায়ীভাবে পরিবর্তিত হয়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q56",
        question: {
            en: "Eli Lilly produced human insulin by separately producing chains A and B in E. coli and then combining them. This approach was necessary because:",
            bn: "এলি লিলি E. coli-তে A এবং B চেইনগুলি আলাদাভাবে উৎপাদন করে এবং তারপর সেগুলিকে একত্রিত করে মানব ইনসুলিন তৈরি করেছিল। এই পদ্ধতিটি প্রয়োজনীয় ছিল কারণ:"
        },
        options: [
            { en: "E. coli cannot synthesize disulfide bonds.", bn: "E. coli ডিসালফাইড বন্ড সংশ্লেষণ করতে পারে না।" },
            { en: "E. coli cannot process pro-insulin correctly to remove the C-peptide and form active insulin if the entire pro-hormone is made.", bn: "যদি সম্পূর্ণ প্রো-হরমোন তৈরি করা হয়, তবে E. coli C-পেপটাইড অপসারণ করে এবং সক্রিয় ইনসুলিন গঠন করার জন্য প্রো-ইনসুলিনকে সঠিকভাবে প্রক্রিয়া করতে পারে না।" },
            { en: "The A and B chains are toxic to E. coli when produced together.", bn: "একসাথে তৈরি হলে এ এবং বি চেইনগুলি E. coli-এর জন্য বিষাক্ত।" },
            { en: "The gene for pro-insulin is too large for E. coli plasmids.", bn: "প্রো-ইনসুলিনের জিনটি E. coli প্লাজমিডের জন্য খুব বড়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q57",
        question: {
            en: "Considering the gene therapy for ADA deficiency, if lymphocytes with functional ADA cDNA are returned to the patient, why is periodic infusion required?",
            bn: "এডিএ অভাবের জন্য জিন থেরাপির বিবেচনায়, যদি কার্যকরী এডিএ সিডিএনএ সহ লিম্ফোসাইটগুলি রোগীর কাছে ফেরত দেওয়া হয়, তবে কেন পর্যায়ক্রমিক ইনফিউশন প্রয়োজন?"
        },
        options: [
            { en: "The retroviral vector eventually gets deactivated.", bn: "রেট্রোভাইরাল ভেক্টর শেষ পর্যন্ত নিষ্ক্রিয় হয়ে যায়।" },
            { en: "The introduced ADA cDNA is gradually diluted with cell division.", bn: "কোষ বিভাজনের সাথে সাথে প্রবর্তিত এডিএ সিডিএনএ ধীরে ধীরে diluted হয়ে যায়।" },
            { en: "Lymphocytes are not immortal and have a finite lifespan; new, deficient lymphocytes are continuously produced by the patient.", bn: "লিম্ফোসাইটগুলি অমর নয় এবং তাদের একটি সীমিত আয়ুষ্কাল রয়েছে; নতুন, ত্রুটিপূর্ণ লিম্ফোসাইটগুলি রোগীর দ্বারা ক্রমাগত উৎপাদিত হয়।" },
            { en: "The patient's body develops an immune response against the genetically engineered lymphocytes.", bn: "রোগীর শরীর জেনেটিকালি প্রকৌশলীকৃত লিম্ফোসাইটের বিরুদ্ধে একটি অনাক্রম্য প্রতিক্রিয়া তৈরি করে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q58",
        question: {
            en: "Transgenic mice are used for vaccine safety testing, potentially replacing monkeys. The primary reason for this shift, if successful, would be:",
            bn: "টিকা নিরাপত্তা পরীক্ষার জন্য ট্রান্সজেনিক ইঁদুর ব্যবহার করা হয়, যা বানরদের প্রতিস্থাপন করতে পারে। যদি সফল হয়, এই পরিবর্তনের প্রাথমিক কারণ হবে:"
        },
        options: [
            { en: "Mice are cheaper and easier to handle than monkeys.", bn: "বানরের চেয়ে ইঁদুর সস্তা এবং পরিচালনা করা সহজ।" },
            { en: "Mice have a faster reproductive cycle, allowing for more rapid testing.", bn: "ইঁদুরের প্রজনন চক্র দ্রুত, যা আরও দ্রুত পরীক্ষা করার অনুমতি দেয়।" },
            { en: "Ethical considerations regarding the use of primates and the potential for more standardized, genetically defined models in mice.", bn: "প্রাইমেট ব্যবহারের নৈতিক বিবেচনা এবং ইঁদুরের আরও প্রমিত, জেনেটিকালি সংজ্ঞায়িত মডেলের সম্ভাবনা।" },
            { en: "Mice show a more pronounced immune response to vaccines.", bn: "ইঁদুর টিকার প্রতি আরও উচ্চারিত অনাক্রম্য প্রতিক্রিয়া দেখায়।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q59",
        question: {
            en: "Biopiracy is a significant ethical concern. The patenting of Basmati rice by a US company was controversial primarily because:",
            bn: "বায়োপাইরেসি একটি উল্লেখযোগ্য নৈতিক উদ্বেগ। একটি মার্কিন কোম্পানি কর্তৃক বাসমতি ধানের পেটেন্ট বিতর্কিত হয়েছিল প্রধানত কারণ:"
        },
        options: [
            { en: "The company used genetic engineering to create a completely new rice variety.", bn: "কোম্পানি সম্পূর্ণ নতুন ধানের জাত তৈরি করতে জেনেটিক ইঞ্জিনিয়ারিং ব্যবহার করেছিল।" },
            { en: "The 'new' variety was derived from Indian farmers' traditional varieties, and the patent could restrict others, including original cultivators.", bn: "'নতুন' জাতটি ভারতীয় কৃষকদের ঐতিহ্যবাহী জাত থেকে উদ্ভূত হয়েছিল, এবং পেটেন্টটি মূল চাষী সহ অন্যদেরও সীমাবদ্ধ করতে পারে।" },
            { en: "Basmati rice cannot be grown outside India.", bn: "বাসমতি ধান ভারতের বাইরে চাষ করা যায় না।" },
            { en: "The US company did not share the profits with the Indian government.", bn: "মার্কিন কোম্পানি ভারতীয় সরকারের সাথে লাভ ভাগাভাগি করেনি।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q60",
        question: {
            en: "The 'Evil Quartet' is a term often used in conservation biology to describe the major causes of biodiversity loss. Which application of biotechnology, if unregulated, could inadvertently contribute to one of these causes (e.g., through invasive GMOs or impact on non-target species)?",
            bn: "'ইভিল কোয়ার্টেট' জীববৈচিত্র্য হ্রাসের চারটি প্রধান কারণ বর্ণনা করার জন্য সংরক্ষণ জীববিজ্ঞানে ব্যবহৃত একটি শব্দ। জৈবপ্রযুক্তির কোন প্রয়োগ, যদি অনিয়ন্ত্রিত হয়, অনিচ্ছাকৃতভাবে এই কারণগুলির একটিতে অবদান রাখতে পারে (যেমন, আক্রমণাত্মক GMOs বা non-target প্রজাতির উপর প্রভাবের মাধ্যমে)?"
        },
        options: [
            { en: "Production of human insulin in E. coli.", bn: "E. coli-তে মানব ইনসুলিন উৎপাদন।" },
            { en: "Development of pest-resistant crops like Bt cotton.", bn: "বিটি তুলা গাছের মতো পোকা প্রতিরোধী ফসলের বিকাশ।" },
            { en: "Use of PCR for disease diagnosis.", bn: "রোগ নির্ণয়ের জন্য পিসিআর ব্যবহার।" },
            { en: "Production of a-1-antitrypsin in transgenic sheep.", bn: "ট্রান্সজেনিক ভেড়াতে α-1-অ্যান্টিট্রিপসিন উৎপাদন।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q61",
        question: {
            en: "While totipotency allows regeneration of a whole plant from an explant, the successful commercial application of micro-propagation for a specific elite plant variety relies heavily on:",
            bn: "টটিপোটেন্সি একটি এক্সপ্ল্যান্ট থেকে সম্পূর্ণ গাছ পুনরুৎপাদন করার অনুমতি দিলেও, একটি নির্দিষ্ট elite উদ্ভিদের জাতের জন্য মাইক্রো-প্রোপাগেশনের সফল বাণিজ্যিক প্রয়োগ অত্যন্ত নির্ভর করে:",
        },
        options: [
            { en: "The absolute genetic stability of the explant source, minimizing somaclonal variation during culture.", bn: "এক্সপ্ল্যান্ট উৎসের সম্পূর্ণ জেনেটিক স্থিতিশীলতা, যা কালচারের সময় সোমাক্লোনাল ভ্যারিয়েশন কমিয়ে আনে।" },
            { en: "The ability to induce rapid flowering in the cultured plantlets.", bn: "কালচার করা উদ্ভিদের দ্রুত ফুল ফোটানোর ক্ষমতা।" },
            { en: "The development of a universal nutrient medium suitable for all plant species.", bn: "সমস্ত উদ্ভিদের জাতের জন্য উপযুক্ত একটি সার্বজনীন পুষ্টি মাধ্যমের বিকাশ।" },
            { en: "The ease of transforming the explants with genes for enhanced growth.", bn: "উন্নত বৃদ্ধির জন্য জিন দিয়ে এক্সপ্ল্যান্টগুলি পরিবর্তন করার সহজতা।" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q62",
        question: {
            en: "The alkaline pH of an insect's gut is crucial for the activation of Bt protoxin. If a target insect species evolved a significantly more acidic gut environment, what would be the most probable impact on the efficacy of the corresponding Bt crop?",
            bn: "পোকার অন্ত্রের ক্ষারীয় pH বিটি প্রোটক্সিনের সক্রিয়করণের জন্য অত্যন্ত গুরুত্বপূর্ণ। যদি লক্ষ্য পোকার প্রজাতি উল্লেখযোগ্যভাবে আরও অম্লীয় অন্ত্রের পরিবেশ তৈরি করে, তবে সম্পর্কিত বিটি ফসলের কার্যকারিতার উপর সবচেয়ে সম্ভাব্য প্রভাব কী হবে?"
        },
        options: [
            { en: "Increased efficacy due to better protein stability.", bn: "উন্নত প্রোটিন স্থিতিশীলতার কারণে কার্যকারিতা বৃদ্ধি।" },
            { en: "No change in efficacy as the toxin targets epithelial cells directly.", bn: "কার্যকারিতায় কোনো পরিবর্তন হবে না কারণ টক্সিন সরাসরি এপিথেলিয়াল কোষকে লক্ষ্য করে।" },
            { en: "Reduced or eliminated efficacy due to improper solubilization and activation of the protoxin.", bn: "প্রোটক্সিনের অনুপযুক্ত solubilization এবং সক্রিয়করণের কারণে কার্যকারিতা হ্রাস বা বিলুপ্ত।" },
            { en: "The toxin would activate prematurely in the plant tissues.", bn: "টক্সিন উদ্ভিদের টিস্যুতে সময়ের আগেই সক্রিয় হয়ে যাবে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q63",
        question: {
            en: "RNA interference (RNAi) is a natural defense mechanism. The introduction of nematode-specific genes into tobacco via Agrobacterium vectors to produce both sense and anti-sense RNA mimics a cellular state that triggers RNAi. This engineered state is analogous to the presence of what kind of naturally occurring genetic element or viral lifecycle stage?",
            bn: "আরএনএ ইন্টারফারেন্স (RNAi) একটি প্রাকৃতিক প্রতিরক্ষা ব্যবস্থা। অ্যাগ্রোব্যাকটেরিয়াম ভেক্টরের মাধ্যমে তামাক গাছে নেমাটোড-নির্দিষ্ট জিন প্রবর্তন করা যা sense এবং anti-sense RNA তৈরি করে, এটি একটি কোষীয় অবস্থার অনুকরণ করে যা RNAi কে ট্রিগার করে। এই প্রকৌশলীকৃত অবস্থা প্রাকৃতিকভাবে ঘটে যাওয়া কোন ধরণের জেনেটিক উপাদান বা ভাইরাল জীবনচক্রের পর্যায়ের সাথে সাদৃশ্যপূর্ণ?"
        },
        options: [
            { en: "A retrotransposon integrating into the host genome.", bn: "হোস্ট জিনোমে একটি রেট্রোট্রান্সপোসনের সংহত হওয়া।" },
            { en: "The replication of a dsRNA virus or formation of dsRNA intermediates during ssRNA virus replication.", bn: "একটি dsRNA ভাইরাসের প্রতিরূপ তৈরি হওয়া বা ssRNA ভাইরাস প্রতিরূপ তৈরির সময় dsRNA ইন্টারমিডিয়েট গঠন।" },
            { en: "A bacterial plasmid undergoing conjugation.", bn: "যৌন-মিলনের মধ্য দিয়ে যাওয়া একটি ব্যাকটেরিয়াল প্লাজমিড।" },
            { en: "The activity of a restriction endonuclease.", bn: "একটি restriction endonuclease-এর কার্যকলাপ।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q64",
        question: {
            en: "The production of human insulin by Eli Lilly involved creating disulfide bonds between chains A and B after separate synthesis. If a hypothetical future technology allowed for the direct expression of correctly folded, active two-chain insulin in E. coli, what fundamental aspect of E. coli's protein processing machinery would need to be significantly different or augmented compared to its natural state?",
            bn: "এলি লিলি কর্তৃক মানব ইনসুলিন উৎপাদনে A এবং B চেইনগুলি আলাদাভাবে সংশ্লেষণের পর তাদের মধ্যে ডিসালফাইড বন্ড তৈরি করা জড়িত ছিল। যদি একটি কাল্পনিক ভবিষ্যৎ প্রযুক্তি E. coli-তে সঠিকভাবে ভাঁজ করা, সক্রিয় দ্বি-চেইন ইনসুলিনের সরাসরি প্রকাশের অনুমতি দেয়, তবে E. coli-এর প্রোটিন প্রক্রিয়াকরণ যন্ত্রপাতির কোন মৌলিক দিকটিকে এর প্রাকৃতিক অবস্থার তুলনায় উল্লেখযোগ্যভাবে ভিন্ন বা উন্নত করতে হবে?"
        },
        options: [
            { en: "Its ribosomal structure for translating mammalian mRNA.", bn: "স্তন্যপায়ী mRNA অনুবাদ করার জন্য এর রাইবোসোমাল গঠন।" },
            { en: "Its capacity for post-translational glycosylation.", bn: "এর post-translational glycosylation-এর ক্ষমতা।" },
            { en: "Its inherent ability to form complex, specific disulfide bonds efficiently in the cytoplasm or an engineered periplasmic space with an oxidizing environment.", bn: "সাইটোপ্লাজমে বা অক্সিডাইজিং পরিবেশ সহ একটি প্রকৌশলীকৃত periplasmic space-এ জটিল, নির্দিষ্ট ডিসালফাইড বন্ড দক্ষতার সাথে গঠন করার সহজাত ক্ষমতা।" },
            { en: "Its DNA polymerase fidelity for accurate gene replication.", bn: "সঠিক জিন প্রতিরূপ তৈরির জন্য এর ডিএনএ পলিমারেজ বিশ্বস্ততা।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q65",
        question: {
            en: "When considering gene therapy for ADA deficiency, the text states that if the gene isolated from marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure. This implies that the target cells for such embryonic gene therapy would need to be:",
            bn: "এডিএ অভাবের জন্য জিন থেরাপির বিবেচনায়, যদি এডিএ উৎপাদনকারী অস্থি মজ্জার কোষ থেকে বিচ্ছিন্ন জিন প্রাথমিক ভ্রূণীয় পর্যায়ে কোষে প্রবেশ করানো হয়, তবে এটি একটি স্থায়ী নিরাময় হতে পারে। এর দ্বারা বোঝানো হয় যে এই ধরনের ভ্রূণীয় জিন থেরাপির জন্য লক্ষ্য কোষগুলি হতে হবে:",
        },
        options: [
            { en: "Exclusively somatic cells of the developing immune system.", bn: "বিকাশমান অনাক্রম্য সিস্টেমের শুধুমাত্র সোমাটিক কোষ।" },
            { en: "Germ-line cells to ensure transmission to future generations.", bn: "ভবিষ্যৎ প্রজন্মে সংক্রমণ নিশ্চিত করার জন্য Germ-line কোষ।" },
            { en: "Pluripotent stem cells that will give rise to all hematopoietic lineages, including lymphocytes.", bn: "প্লুরিপোটেন্ট স্টেম সেল যা লিম্ফোসাইট সহ সমস্ত hematopoietic lineages তৈরি করবে।" },
            { en: "Mature, differentiated lymphocytes already present in the embryo.", bn: "ভ্রূণে ইতিমধ্যেই উপস্থিত পরিপক্ক, ডিফারেনশিয়েটেড লিম্ফোসাইট।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q66",
        question: {
            en: "Transgenic animals for chemical safety testing are often designed to be more sensitive to toxins. From a research perspective, what is the primary advantage of using such hypersensitive models over wild-type animals for initial toxicity screening?",
            bn: "রাসায়নিক নিরাপত্তা পরীক্ষার জন্য ট্রান্সজেনিক প্রাণীগুলিকে প্রায়শই টক্সিনের প্রতি আরও সংবেদনশীল করে ডিজাইন করা হয়। গবেষণার দৃষ্টিকোণ থেকে, প্রাথমিক বিষাক্ততা স্ক্রীনিংয়ের জন্য wild-type প্রাণীর চেয়ে এই ধরনের hypersensitive মডেল ব্যবহারের প্রাথমিক সুবিধা কী?"
        },
        options: [
            { en: "It allows for testing a wider range of structurally diverse chemicals.", bn: "এটি কাঠামোগতভাবে ভিন্ন রাসায়নিকের বিস্তৃত পরিসর পরীক্ষা করার অনুমতি দেয়।" },
            { en: "It reduces the overall number of animals needed for statistically significant results because effects are seen with lower doses or shorter exposure times.", bn: "এটি পরিসংখ্যানগতভাবে উল্লেখযোগ্য ফলাফলের জন্য প্রয়োজনীয় প্রাণীর মোট সংখ্যা হ্রাস করে কারণ কম ডোজ বা কম এক্সপোজার সময়েও প্রভাব দেখা যায়।" },
            { en: "It perfectly mimics the human response to all toxins.", bn: "এটি সমস্ত টক্সিনের প্রতি মানব প্রতিক্রিয়া পুরোপুরি অনুকরণ করে।" },
            { en: "It eliminates the need for downstream biochemical analysis of toxic effects.", bn: "এটি বিষাক্ত প্রভাবের downstream জৈব রাসায়নিক বিশ্লেষণের প্রয়োজনীয়তা দূর করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q67",
        question: {
            en: "The controversy surrounding the Basmati rice patent highlights the complexities of intellectual property in the context of biodiversity and traditional knowledge. A key ethical argument against such patents, beyond financial compensation, relates to:",
            bn: "বাসমতি ধানের পেটেন্ট সম্পর্কিত বিতর্ক জীববৈচিত্র্য এবং ঐতিহ্যবাহী জ্ঞানের প্রেক্ষাপটে বৌদ্ধিক সম্পত্তির জটিলতাগুলি তুলে ধরে। আর্থিক ক্ষতিপূরণ ছাড়াও এই ধরনের পেটেন্টের বিরুদ্ধে একটি প্রধান নৈতিক যুক্তি সম্পর্কিত হল:",
        },
        options: [
            { en: "The inherent difficulty in defining \"novelty\" for products derived from naturally occurring genetic resources.", bn: "প্রাকৃতিকভাবে প্রাপ্ত জেনেটিক সম্পদ থেকে উদ্ভূত পণ্যগুলির জন্য \"নতুনত্ব\" সংজ্ঞায়িত করার সহজাত অসুবিধা।" },
            { en: "The potential for such patents to stifle further research and development by restricting access to essential genetic material.", bn: "প্রয়োজনীয় জেনেটিক উপাদানগুলিতে অ্যাক্সেস সীমাবদ্ধ করার মাধ্যমে এই ধরনের পেটেন্টগুলির আরও গবেষণা এবং বিকাশকে বাধা দেওয়ার সম্ভাবনা।" },
            { en: "The claim of \"invention\" over resources and knowledge collectively developed and conserved by indigenous communities over generations.", bn: "ঐতিহ্যবাহী সম্প্রদায়ের দ্বারা প্রজন্ম ধরে সম্মিলিতভাবে বিকশিত এবং সংরক্ষিত সম্পদ এবং জ্ঞানের উপর \"উদ্ভাবন\" এর দাবি।" },
            { en: "The technical challenges in enforcing patent rights across international borders.", bn: "আন্তর্জাতিক সীমান্ত জুড়ে পেটেন্ট অধিকার প্রয়োগের প্রযুক্তিগত চ্যালেঞ্জ।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q68",
        question: {
            en: "The creation of 'pomato' through somatic hybridisation was technically successful but commercially unviable. If the goal was to combine a desirable root characteristic of potato with a desirable fruit characteristic of tomato, which fundamental limitation of somatic hybridisation (compared to precise genetic engineering) likely contributed to the undesired outcome?",
            bn: "সোমাটিক হাইব্রিডাইজেশনের মাধ্যমে 'পোমাটো' তৈরি প্রযুক্তিগতভাবে সফল হলেও বাণিজ্যিকভাবে অকার্যকর ছিল। যদি আলুর একটি কাঙ্ক্ষিত মূল বৈশিষ্ট্যকে টমেটোর একটি কাঙ্ক্ষিত ফল বৈশিষ্ট্যের সাথে একত্রিত করার লক্ষ্য থাকত, তবে সোমাটিক হাইব্রিডাইজেশনের কোন মৌলিক সীমাবদ্ধতা (সঠিক জেনেটিক ইঞ্জিনিয়ারিংয়ের তুলনায়) সম্ভবত অবাঞ্ছিত ফলাফলে অবদান রেখেছিল?",
        },
        options: [
            { en: "Inability to fuse protoplasts from dicotyledonous plants.", bn: "ডিকোটাইলেডোনাস উদ্ভিদের প্রোটোপ্লাস্ট ফিউজ করতে অক্ষমতা।" },
            { en: "The random and wholesale combination of entire nuclear and cytoplasmic genomes, leading to unpredictable trait expression and genomic instability, rather than targeted gene transfer.", bn: "লক্ষ্যযুক্ত জিন স্থানান্তরের পরিবর্তে সম্পূর্ণ নিউক্লিয়ার এবং সাইটোপ্লাজমিক জিনোমগুলির র্যান্ডম এবং পাইকারি সমন্বয়, যা অপ্রত্যাশিত বৈশিষ্ট্য প্রকাশ এবং জিনোমিক অস্থিরতার দিকে পরিচালিত করে।" },
            { en: "The pomato plant's sterility, preventing further breeding.", bn: "পোমাটো উদ্ভিদের sterility, যা আরও প্রজনন প্রতিরোধ করে।" },
            { en: "The lack of a suitable vector for introducing potato genes into tomato.", bn: "টমেটোতে আলুর জিন প্রবর্তনের জন্য উপযুক্ত ভেক্টরের অভাব।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q69",
        question: {
            en: "The three options for increasing food production are agro-chemical based, organic, and genetically engineered crop-based agriculture. Considering the long-term ecological sustainability and global food security, a balanced approach integrating aspects of which of these is often advocated?",
            bn: "খাদ্য উৎপাদন বৃদ্ধির তিনটি বিকল্প হলো এগ্রো-কেমিক্যাল ভিত্তিক, জৈব এবং জেনেটিকালি প্রকৌশলীকৃত ফসল ভিত্তিক কৃষি। দীর্ঘমেয়াদী পরিবেশগত স্থিতিশীলতা এবং বিশ্ব খাদ্য সুরক্ষার কথা বিবেচনা করে, এর মধ্যে কোনটির দিকগুলি সমন্বিত একটি সুষম পদ্ধতি প্রায়শই সমর্থিত হয়?",
        },
        options: [
            { en: "Primarily agro-chemical due to highest immediate yields.", bn: "সর্বোচ্চ তাৎক্ষণিক ফলনের কারণে প্রাথমিকভাবে এগ্রো-কেমিক্যাল।" },
            { en: "Primarily organic, as it avoids all synthetic inputs.", bn: "প্রাথমিকভাবে জৈব, কারণ এটি সমস্ত সিন্থেটিক ইনপুট এড়িয়ে চলে।" },
            { en: "Primarily genetically engineered crops, for targeted trait improvement.", bn: "লক্ষ্যযুক্ত বৈশিষ্ট্য উন্নতির জন্য প্রাথমিকভাবে জেনেটিকালি প্রকৌশলীকৃত ফসল।" },
            { en: "An integration of organic practices with the judicious use of validated and safe genetically engineered crops and reduced reliance on broad-spectrum agro-chemicals.", bn: "বৈধ এবং নিরাপদ জেনেটিকালি প্রকৌশলীকৃত ফসলগুলির বিচক্ষণ ব্যবহার এবং broad-spectrum এগ্রো-কেমিক্যালগুলির উপর নির্ভরশীলতা কমানোর সাথে জৈব পদ্ধতির একীকরণ।" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q70",
        question: {
            en: "Rosie, the transgenic cow, produced milk enriched with human alpha-lactalbumin, making it nutritionally more balanced for human babies. This specific modification targets an improvement in milk quality. What broader challenge in dairy science or human nutrition does this type of genetic engineering aim to address?",
            bn: "রোজি, ট্রান্সজেনিক গাভীটি মানব আলফা-ল্যাকটালবুমিন সমৃদ্ধ দুধ উৎপাদন করেছিল, যা মানব শিশুদের জন্য পুষ্টিগতভাবে আরও সুষম। এই নির্দিষ্ট পরিবর্তনটি দুধের গুণমানের উন্নতিকে লক্ষ্য করে। দুগ্ধ বিজ্ঞান বা মানব পুষ্টিতে এই ধরনের জেনেটিক ইঞ্জিনিয়ারিং কোন বিস্তৃত চ্যালেঞ্জ মোকাবেলার লক্ষ্য রাখে?",
        },
        options: [
            { en: "Increasing the sheer volume of milk produced per cow.", bn: "প্রতি গাভী দ্বারা উৎপাদিত দুধের পরিমাণ বৃদ্ধি করা।" },
            { en: "Making cow's milk hypoallergenic for all infants.", bn: "সমস্ত শিশুদের জন্য গাভীর দুধকে hypoallergenic করা।" },
            { en: "Enhancing the specific nutritional profile of animal-derived food to better match human, particularly infant, dietary requirements where natural milk may be suboptimal.", bn: "পশু-উদ্ভূত খাদ্যের নির্দিষ্ট পুষ্টিগত profile উন্নত করা যাতে প্রাকৃতিক দুধ যেখানে পর্যাপ্ত নয় সেখানে মানব, বিশেষ করে শিশুদের, খাদ্যের প্রয়োজনীয়তার সাথে আরও ভালোভাবে মেলে।" },
            { en: "Reducing the lactose content of milk to prevent intolerance.", bn: "অসহিষ্ণুতা রোধ করতে দুধের ল্যাকটোজের পরিমাণ হ্রাস করা।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q71",
        question: {
            en: "According to WHO, reproductive health means a total well-being in which aspects of reproduction?",
            bn: "WHO অনুসারে, প্রজনন স্বাস্থ্য মানে প্রজননের কোন দিকগুলিতে সম্পূর্ণ সুস্থতা?"
        },
        options: [
            { en: "Only physical", bn: "কেবল শারীরিক" },
            { en: "Physical and emotional", bn: "শারীরিক এবং মানসিক" },
            { en: "Physical, emotional, and social", bn: "শারীরিক, মানসিক এবং সামাজিক" },
            { en: "Physical, emotional, behavioural, and social", bn: "শারীরিক, মানসিক, আচরণগত এবং সামাজিক" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q72",
        question: {
            en: "India was amongst the first countries in the world to initiate action plans and programmes at a national level to attain total reproductive health. These programmes, called 'family planning', were initiated in:",
            bn: "সম্পূর্ণ প্রজনন স্বাস্থ্য অর্জনের জন্য জাতীয় পর্যায়ে কার্য পরিকল্পনা এবং কর্মসূচি গ্রহণকারী বিশ্বের প্রথম দেশগুলির মধ্যে ভারত ছিল। এই কর্মসূচিগুলি, যাকে 'পরিবার পরিকল্পনা' বলা হতো, শুরু হয়েছিল:",
        },
        options: [
            { en: "1947", bn: "১৯৪৭" },
            { en: "1951", bn: "১৯৫১" },
            { en: "1965", bn: "১৯৬৫" },
            { en: "1971", bn: "১৯৭১" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q73",
        question: {
            en: "The popular name for programmes covering wider reproduction-related areas currently in operation in India is:",
            bn: "বর্তমানে ভারতে প্রজনন সম্পর্কিত বিস্তৃত ক্ষেত্রগুলি অন্তর্ভুক্তকারী কর্মসূচিগুলির জনপ্রিয় নাম হল:"
        },
        options: [
            { en: "National Health Mission (NHM)", bn: "ন্যাশনাল হেলথ মিশন (NHM)" },
            { en: "Family Welfare Programme (FWP)", bn: "ফ্যামিলি ওয়েলফেয়ার প্রোগ্রাম (FWP)" },
            { en: "Reproductive and Child Health Care (RCH) programmes", bn: "প্রজনন ও শিশু স্বাস্থ্য যত্ন (RCH) কর্মসূচি" },
            { en: "Mother and Child Safety Initiative (MCSI)", bn: "মা ও শিশু সুরক্ষা উদ্যোগ (MCSI)" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q74",
        question: {
            en: "What is amniocentesis used for, as mentioned in the text regarding its misuse?",
            bn: "এর অপব্যবহার সংক্রান্ত পাঠ্যে উল্লিখিত অ্যামনিওসেন্টেসিস কী জন্য ব্যবহৃত হয়?"
        },
        options: [
            { en: "To determine the age of the foetus", bn: "ভ্রূণের বয়স নির্ধারণের জন্য" },
            { en: "To test for the presence of certain genetic disorders and determine foetal sex", bn: "কিছু জেনেটিক ডিসঅর্ডার পরীক্ষা করার জন্য এবং ভ্রূণের লিঙ্গ নির্ধারণের জন্য" },
            { en: "To increase the weight of the foetus", bn: "ভ্রূণের ওজন বৃদ্ধির জন্য" },
            { en: "To administer vaccines to the foetus", bn: "ভ্রূণকে ভ্যাকসিন দেওয়ার জন্য" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q75",
        question: {
            en: "The new oral contraceptive for females, 'Saheli', was developed by scientists at:",
            bn: "মহিলাদের জন্য নতুন ওরাল গর্ভনিরোধক, 'সাহেলী', বিজ্ঞানীদের দ্বারা ____ এ বিকশিত হয়েছিল:"
        },
        options: [
            { en: "Indian Institute of Science (IISc), Bangalore", bn: "ইন্ডিয়ান ইনস্টিটিউট অফ সায়েন্স (আইআইএসসি), ব্যাঙ্গালোর" },
            { en: "All India Institute of Medical Sciences (AIIMS), New Delhi", bn: "অল ইন্ডিয়া ইনস্টিটিউট অফ মেডিকেল সায়েন্সেস (এইমস), নয়াদিল্লি" },
            { en: "Central Drug Research Institute (CDRI), Lucknow", bn: "সেন্ট্রাল ড্রাগ রিসার্চ ইনস্টিটিউট (সিডিআরআই), লখনউ" },
            { en: "National Institute of Virology (NIV), Pune", bn: "ন্যাশনাল ইনস্টিটিউট অফ ভাইরোলজি (এনআইভি), পুনে" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q76",
        question: {
            en: "What was the approximate world population in 1900?",
            bn: "১৯০০ সালে আনুমানিক বিশ্ব জনসংখ্যা কত ছিল?"
        },
        options: [
            { en: "1 billion", bn: "১ বিলিয়ন" },
            { en: "2 billion", bn: "২ বিলিয়ন" },
            { en: "4 billion", bn: "৪ বিলিয়ন" },
            { en: "6 billion", bn: "৬ বিলিয়ন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q77",
        question: {
            en: "According to the 2011 census report, India's population growth rate was:",
            bn: "২০১১ সালের আদমশুমারি রিপোর্ট অনুযায়ী, ভারতের জনসংখ্যা বৃদ্ধির হার ছিল:"
        },
        options: [
            { en: "Less than 1 per cent", bn: "১ শতাংশের কম" },
            { en: "Less than 2 per cent (approx. 20/1000/year)", bn: "২ শতাংশের কম (প্রায় ২০/১০০০/বছর)" },
            { en: "Around 3 per cent", bn: "প্রায় ৩ শতাংশ" },
            { en: "More than 4 per cent", bn: "৪ শতাংশের বেশি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q78",
        question: {
            en: "What is the statutory marriageable age for females and males in India, mentioned as a measure to tackle population growth?",
            bn: "জনসংখ্যা বৃদ্ধি মোকাবেলার একটি পরিমাপ হিসেবে ভারতে নারী ও পুরুষের বিধিবদ্ধ বিবাহের বয়স কত?"
        },
        options: [
            { en: "Females 16, Males 18", bn: "মহিলা ১৬, পুরুষ ১৮" },
            { en: "Females 18, Males 21", bn: "মহিলা ১৮, পুরুষ ২১" },
            { en: "Females 21, Males 21", bn: "মহিলা ২১, পুরুষ ২১" },
            { en: "Females 18, Males 18", bn: "মহিলা ১৮, পুরুষ ১৮" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q79",
        question: {
            en: "Which of these is a natural method of contraception?",
            bn: "এর মধ্যে কোনটি গর্ভনিরোধের একটি প্রাকৃতিক পদ্ধতি?"
        },
        options: [
            { en: "Condoms", bn: "কনডম" },
            { en: "IUDs", bn: "আইইউডি" },
            { en: "Periodic abstinence", bn: "পিরিয়ডিক অ্যাবসটিনেন্স" },
            { en: "Oral contraceptive pills", bn: "ওরাল গর্ভনিরোধক পিল" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q80",
        question: {
            en: "Lactational amenorrhea is effective as a contraceptive method for a maximum period of how many months following parturition?",
            bn: "প্রসবের পর সর্বোচ্চ কত মাস পর্যন্ত ল্যাকটেশনাল অ্যামেনোরিয়া গর্ভনিরোধক পদ্ধতি হিসেবে কার্যকর?"
        },
        options: [
            { en: "3 months", bn: "৩ মাস" },
            { en: "6 months", bn: "৬ মাস" },
            { en: "9 months", bn: "৯ মাস" },
            { en: "12 months", bn: "১২ মাস" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q81",
        question: {
            en: "Condoms are barriers made of:",
            bn: "কনডমগুলি কীসের তৈরি বাধা?"
        },
        options: [
            { en: "Cotton or silk", bn: "তুলা বা রেশম" },
            { en: "Thin rubber/latex sheath", bn: "পাতলা রাবার/ল্যাটেক্সের আবরণ" },
            { en: "Plastic", bn: "প্লাস্টিক" },
            { en: "Metal foil", bn: "ধাতব ফয়েল" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q82",
        question: {
            en: "'Nirodh' is a popular brand of:",
            bn: "'নিরোধ' একটি জনপ্রিয় ব্র্যান্ড কিসের?"
        },
        options: [
            { en: "Oral contraceptive pill for females", bn: "মহিলাদের জন্য ওরাল গর্ভনিরোধক পিল" },
            { en: "Condom for males", bn: "পুরুষদের জন্য কনডম" },
            { en: "IUD", bn: "আইইউডি" },
            { en: "Spermicidal cream", bn: "স্পার্মিসাইডাল ক্রিম" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q83",
        question: {
            en: "Intra Uterine Devices (IUDs) are inserted by whom?",
            bn: "ইন্ট্রা ইউটেরাইন ডিভাইস (আইইউডি) কার দ্বারা স্থাপন করা হয়?"
        },
        options: [
            { en: "The user themselves", bn: "ব্যবহারকারী নিজেই" },
            { en: "Doctors or expert nurses", bn: "ডাক্তার বা বিশেষজ্ঞ নার্স" },
            { en: "Pharmacists", bn: "ফার্মাসিস্ট" },
            { en: "Friends or family members", bn: "বন্ধুরা বা পরিবারের সদস্যরা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q84",
        question: {
            en: "Hormone-releasing IUDs, in addition to increasing phagocytosis of sperms and suppressing sperm motility, also:",
            bn: "হরমোন-নির্গমনকারী আইইউডি, শুক্রাণুর ফ্যাগোসাইটোসিস বৃদ্ধি এবং শুক্রাণুর গতিশীলতা দমন করা ছাড়াও, এছাড়াও:"
        },
        options: [
            { en: "Make the uterus suitable for implantation", bn: "জরায়ুকে ইমপ্ল্যান্টেশনের জন্য উপযুক্ত করে তোলে" },
            { en: "Make the cervix hostile to sperms and uterus unsuitable for implantation", bn: "সার্ভিক্সকে শুক্রাণুর জন্য প্রতিকূল করে তোলে এবং জরায়ুকে ইমপ্ল্যান্টেশনের জন্য অনুপযুক্ত করে তোলে" },
            { en: "Increase ovulation", bn: "ওভুলেশন বৃদ্ধি করে" },
            { en: "Enhance sperm production", bn: "শুক্রাণু উৎপাদন বৃদ্ধি করে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q85",
        question: {
            en: "Oral contraceptive pills have to be taken daily for a period of:",
            bn: "ওরাল গর্ভনিরোধক পিলগুলি কত দিনের জন্য প্রতিদিন গ্রহণ করতে হয়?"
        },
        options: [
            { en: "7 days", bn: "৭ দিন" },
            { en: "14 days", bn: "১৪ দিন" },
            { en: "21 days", bn: "২১ দিন" },
            { en: "28 days", bn: "২৮ দিন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q86",
        question: {
            en: "'Saheli' pill is taken:",
            bn: "'সাহেলী' পিল গ্রহণ করা হয়:"
        },
        options: [
            { en: "Daily", bn: "প্রতিদিন" },
            { en: "Twice a week", bn: "সপ্তাহে দুবার" },
            { en: "Once a week", bn: "সপ্তাহে একবার" },
            { en: "Once a month", bn: "মাসে একবার" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q87",
        question: {
            en: "Surgical methods of contraception are also called:",
            bn: "গর্ভনিরোধের সার্জিক্যাল পদ্ধতিগুলিকেও বলা হয়:"
        },
        options: [
            { en: "Reversible methods", bn: "রিভার্সিবল পদ্ধতি" },
            { en: "Barrier methods", bn: "বাধা পদ্ধতি" },
            { en: "Sterilisation", bn: "বন্ধ্যাকরণ" },
            { en: "Natural methods", bn: "প্রাকৃতিক পদ্ধতি" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q88",
        question: {
            en: "Sterilisation procedure in the male is called:",
            bn: "পুরুষের বন্ধ্যাকরণ পদ্ধতিকে বলা হয়:"
        },
        options: [
            { en: "Tubectomy", bn: "টিউবেকটমি" },
            { en: "Hysterectomy", bn: "হিস্টেরেকটমি" },
            { en: "Vasectomy", bn: "ভাসেকটমি" },
            { en: "Oophorectomy", bn: "ওওফোরেক্টমি" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q89",
        question: {
            en: "Medical Termination of Pregnancy (MTP) is also known as:",
            bn: "মেডিকেল টার্মিনেশন অফ প্রেগন্যান্সি (MTP) এছাড়াও পরিচিত:"
        },
        options: [
            { en: "Natural birth", bn: "স্বাভাবিক প্রসব" },
            { en: "Induced abortion", bn: "প্ররোচিত গর্ভপাত" },
            { en: "Caesarean section", bn: "সিজারিয়ান সেকশন" },
            { en: "Ectopic pregnancy", bn: "এক্টোপিক প্রেগন্যান্সি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q90",
        question: {
            en: "Government of India legalised MTP in which year with strict conditions?",
            bn: "ভারত সরকার কঠোর শর্তে কোন সালে MTP কে আইনসম্মত করেছিল?"
        },
        options: [
            { en: "1951", bn: "১৯৫১" },
            { en: "1961", bn: "১৯৬১" },
            { en: "1971", bn: "১৯৭১" },
            { en: "1981", bn: "১৯৮১" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q91",
        question: {
            en: "MTPs are considered relatively safe during which period of pregnancy?",
            bn: "গর্ভধারণের কোন সময়ে MTPs তুলনামূলকভাবে নিরাপদ বলে বিবেচিত হয়?"
        },
        options: [
            { en: "First trimester (up to 12 weeks)", bn: "প্রথম ত্রৈমাসিক (১২ সপ্তাহ পর্যন্ত)" },
            { en: "Second trimester", bn: "দ্বিতীয় ত্রৈমাসিক" },
            { en: "Third trimester", bn: "তৃতীয় ত্রৈমাসিক" },
            { en: "Any time during pregnancy", bn: "গর্ভধারণের যে কোনো সময়" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q92",
        question: {
            en: "Infections or diseases transmitted through sexual intercourse are collectively called:",
            bn: "যৌন মিলনের মাধ্যমে সংক্রমিত সংক্রমণ বা রোগগুলিকে সম্মিলিতভাবে বলা হয়:"
        },
        options: [
            { en: "Communicable diseases", bn: "সংক্রামক রোগ" },
            { en: "Genetic disorders", bn: "জেনেটিক ডিসঅর্ডার" },
            { en: "Sexually Transmitted Infections (STIs) or Venereal Diseases (VD)", bn: "যৌনবাহিত সংক্রমণ (STIs) বা যৌন রোগ (VD)" },
            { en: "Autoimmune diseases", bn: "অটোইমিউন রোগ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q93",
        question: {
            en: "Which of the following STIs is considered the most dangerous and is discussed in detail in Chapter 7 (HIV/AIDS)?",
            bn: "নিম্নলিখিত STIগুলির মধ্যে কোনটি সবচেয়ে বিপজ্জনক বলে বিবেচিত হয় এবং ৭ অধ্যায়ে (HIV/AIDS) বিস্তারিত আলোচনা করা হয়েছে?"
        },
        options: [
            { en: "Gonorrhoea", bn: "গনোরিয়া" },
            { en: "Syphilis", bn: "সিফিলিস" },
            { en: "Genital herpes", bn: "জেনিটাল হার্পিস" },
            { en: "HIV infection", bn: "এইচআইভি সংক্রমণ" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q94",
        question: {
            en: "Pelvic Inflammatory Diseases (PID), abortions, stillbirths, and ectopic pregnancies can be complications of untreated:",
            bn: " untreated ____ এর জটিলতা হতে পারে পেলভিক ইনফ্ল্যামেটরি রোগ (PID), গর্ভপাত, স্টিলবার্থ এবং একটোপিক প্রেগন্যান্সি:"
        },
        options: [
            { en: "Common cold", bn: "সাধারণ ঠান্ডা" },
            { en: "STIs", bn: "যৌনবাহিত সংক্রমণ (STIs)" },
            { en: "Diabetes", bn: "ডায়াবেটিস" },
            { en: "Hypertension", bn: "উচ্চ রক্তচাপ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q95",
        question: {
            en: "What is the age group reported to have very high incidences of STIs?",
            bn: "কোন বয়স গোষ্ঠীতে যৌনবাহিত সংক্রমণের (STIs) ঘটনা খুব বেশি বলে রিপোর্ট করা হয়েছে?"
        },
        options: [
            { en: "5-10 years", bn: "৫-১০ বছর" },
            { en: "15-24 years", bn: "১৫-২৪ বছর" },
            { en: "30-40 years", bn: "৩০-৪০ বছর" },
            { en: "Above 50 years", bn: "৫০ বছরের উপরে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q96",
        question: {
            en: "Inability to produce children in spite of unprotected sexual co-habitation is called:",
            bn: "সুরক্ষিত যৌন মিলন সত্ত্বেও সন্তান ধারণে অক্ষমতাকে বলা হয়:"
        },
        options: [
            { en: "Impotence", bn: "ইম্পোটেন্স" },
            { en: "Infertility", bn: "বন্ধ্যাত্ব" },
            { en: "Sterility", bn: "সটেরিলিটি" },
            { en: "Menopause", bn: "মেনোপজ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q97",
        question: {
            en: "IVF stands for:",
            bn: "IVF এর পূর্ণরূপ কি:"
        },
        options: [
            { en: "Intra-vaginal fertilisation", bn: "ইন্ট্রা-ভ্যাজাইনাল ফার্টিলাইজেশন" },
            { en: "In vitro fertilisation", bn: "ইন ভিট্রো ফার্টিলাইজেশন" },
            { en: "Internal vigorous fertilisation", bn: "ইন্টারনাল ভিগোরিয়াস ফার্টিলাইজেশন" },
            { en: "In vivo formation", bn: "ইন ভিভো ফরমেশন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q98",
        question: {
            en: "In the test tube baby programme, ZIFT stands for:",
            bn: "টেস্ট টিউব বেবি প্রোগ্রামে, ZIFT এর পূর্ণরূপ কি:"
        },
        options: [
            { en: "Zygote Intra Fallopian Transfer", bn: "জাইগোট ইন্ট্রা ফ্যালোপিয়ান ট্রান্সফার" },
            { en: "Zygote Internal Follicle Transfer", bn: "জাইগোট ইন্টারনাল ফলিকল ট্রান্সফার" },
            { en: "Zona Insemination Fallopian Technique", bn: "জোনা ইনসেমিনেশন ফ্যালোপিয়ান টেকনিক" },
            { en: "Zygote Implantation Factor Test", bn: "জাইগোট ইমপ্ল্যান্টেশন ফ্যাক্টর টেস্ট" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q99",
        question: {
            en: "GIFT, an assisted reproductive technology, stands for:",
            bn: "GIFT, একটি সহায়ক প্রজনন প্রযুক্তি, এর পূর্ণরূপ কি:"
        },
        options: [
            { en: "Gamete Internal Fertilisation Technique", bn: "গ্যামেট ইন্টারনাল ফার্টিলাইজেশন টেকনিক" },
            { en: "Gamete Intra Fallopian Transfer", bn: "গ্যামেট ইন্ট্রা ফ্যালোপিয়ান ট্রান্সফার" },
            { en: "Germ-cell Insemination Factor Test", bn: "জার্ম-সেল ইনসেমিনেশন ফ্যাক্টর টেস্ট" },
            { en: "Genetic Implantation Female Transfer", bn: "জেনেটিক ইমপ্ল্যান্টেশন ফিমেল ট্রান্সফার" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q100",
        question: {
            en: "Artificial insemination (Al) technique is used to correct infertility cases due to:",
            bn: "আর্টিফিশিয়াল ইনসেমিনেশন (Al) কৌশলটি বন্ধ্যাত্বের ক্ষেত্রে ____ এর কারণে ব্যবহৃত হয়:"
        },
        options: [
            { en: "Blockage of fallopian tubes in females", bn: "মহিলাদের ফ্যালোপিয়ান টিউব বন্ধ হয়ে যাওয়া" },
            { en: "Inability of the male partner to inseminate the female or very low sperm counts", bn: "পুরুষ সঙ্গীর মহিলাকে গর্ভধারণ করাতে অক্ষমতা বা শুক্রাণুর সংখ্যা খুব কম থাকা" },
            { en: "Absence of ovulation in females", bn: "মহিলাদের ডিম্বস্ফোটন না হওয়া" },
            { en: "Uterine abnormalities", bn: "জরায়ুর অস্বাভাবিকতা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q101",
        question: {
            en: "Why is providing right information about sex-related aspects to adolescents important?",
            bn: "কিশোর-কিশোরীদের যৌন সম্পর্কিত দিক সম্পর্কে সঠিক তথ্য প্রদান করা কেন গুরুত্বপূর্ণ?"
        },
        options: [
            { en: "To encourage early marriage", bn: "বাল্যবিবাহ উৎসাহিত করতে" },
            { en: "To discourage them from believing in myths and having misconceptions", bn: "তাদের কুসংস্কার এবং ভুল ধারণা থেকে বিরত রাখতে" },
            { en: "To promote use of contraceptives only", bn: "কেবল গর্ভনিরোধক ব্যবহার প্রচার করতে" },
            { en: "To focus solely on the anatomy of reproductive organs", bn: "কেবলমাত্র প্রজনন অঙ্গের অ্যানাটমির উপর মনোযোগ দিতে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q102",
        question: {
            en: "Amniocentesis can be used to detect genetic disorders like Down syndrome. This is achieved by analyzing:",
            bn: "ডাউন সিনড্রোমের মতো জেনেটিক ডিসঅর্ডার সনাক্ত করতে অ্যামনিওসেন্টেসিস ব্যবহার করা যেতে পারে। এটি ____ বিশ্লেষণ করে অর্জন করা হয়:"
        },
        options: [
            { en: "Maternal blood cells", bn: "মায়ের রক্ত ​​কোষ" },
            { en: "Foetal cells and dissolved substances in the amniotic fluid", bn: "অ্যামনিওটিক ফ্লুইডে ভ্রূণের কোষ এবং দ্রবীভূত পদার্থ" },
            { en: "Ultrasound images of the foetus", bn: "ভ্রূণের আল্ট্রাসাউন্ড ছবি" },
            { en: "Hormonal levels in the mother", bn: "মায়ের হরমোনের মাত্রা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q103",
        question: {
            en: "What are the probable reasons cited for the rapid increase in India's population post-independence?",
            bn: "স্বাধীনতার পর ভারতে দ্রুত জনসংখ্যা বৃদ্ধির সম্ভাব্য কারণগুলি কী কী?"
        },
        options: [
            { en: "Increased birth rate and increased death rate", bn: "জন্মহার বৃদ্ধি এবং মৃত্যুহার বৃদ্ধি" },
            { en: "Rapid decline in death rate, MMR, and IMR, and increase in number of people in reproducible age", bn: "মৃত্যুহার, এমএমআর, এবং আইএমআর এর দ্রুত হ্রাস এবং প্রজননক্ষম বয়সের মানুষের সংখ্যা বৃদ্ধি" },
            { en: "Migration from other countries", bn: "অন্যান্য দেশ থেকে অভিবাসন" },
            { en: "Lack of awareness about family planning methods", bn: "পরিবার পরিকল্পনা পদ্ধতি সম্পর্কে সচেতনতার অভাব" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q104",
        question: {
            en: "An ideal contraceptive should possess which of the following characteristics?",
            bn: "একটি আদর্শ গর্ভনিরোধকের নিম্নলিখিত বৈশিষ্ট্যগুলির মধ্যে কোনটি থাকা উচিত?"
        },
        options: [
            { en: "Expensive and difficult to obtain", bn: "ব্যয়বহুল এবং প্রাপ্তি কঠিন" },
            { en: "Irreversible with significant side-effects", bn: "গুরুত্বপূর্ণ পার্শ্বপ্রতিক্রিয়া সহ অপরিবর্তনীয়" },
            { en: "User-friendly, easily available, effective, reversible with least side-effects", bn: "ব্যবহারকারী-বান্ধব, সহজে উপলব্ধ, কার্যকর, ন্যূনতম পার্শ্বপ্রতিক্রিয়া সহ পরিবর্তনযোগ্য" },
            { en: "Interferes significantly with sexual drive", bn: "যৌন ইচ্ছাকে উল্লেখযোগ্যভাবে বাধা দেয়" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q105",
        question: {
            en: "Periodic abstinence as a contraceptive method relies on avoiding coitus from day 10 to 17 of the menstrual cycle because:",
            bn: "পিরিয়ডিক অ্যাবসটিনেন্স নামক গর্ভনিরোধক পদ্ধতি ঋতুচক্রের ১০ থেকে ১৭ তম দিন পর্যন্ত সহবাস এড়িয়ে চলার উপর নির্ভর করে কারণ:"
        },
        options: [
            { en: "This is the period of menstruation.", bn: "এটি ঋতুস্রাবের সময়কাল।" },
            { en: "Ovulation is expected during this period, making chances of fertilisation very high.", bn: "এই সময়কালে ডিম্বস্ফোটন প্রত্যাশিত, যা নিষিক্তকরণের সম্ভাবনা খুব বেশি করে তোলে।" },
            { en: "Sperm survival is lowest during this period.", bn: "এই সময়কালে শুক্রাণুর survival সবচেয়ে কম থাকে।" },
            { en: "The uterine lining is not receptive.", bn: "জরায়ুর আস্তরণ receptive থাকে না।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q106",
        question: {
            en: "How do copper-releasing IUDs (e.g., CuT, Cu7) primarily work?",
            bn: "কপার-নির্গমনকারী আইইউডিগুলি (যেমন, CuT, Cu7) প্রাথমিকভাবে কীভাবে কাজ করে?"
        },
        options: [
            { en: "They prevent ovulation.", bn: "তারা ডিম্বস্ফোটন প্রতিরোধ করে।" },
            { en: "They block the entry of sperm into the cervix.", bn: "তারা সার্ভিক্সে শুক্রাণুর প্রবেশ বন্ধ করে।" },
            { en: "They increase phagocytosis of sperms and Cu ions suppress sperm motility and fertilising capacity.", bn: "তারা শুক্রাণুর ফ্যাগোসাইটোসিস বৃদ্ধি করে এবং Cu আয়ন শুক্রাণুর গতিশীলতা এবং নিষিক্ত করার ক্ষমতা দমন করে।" },
            { en: "They release hormones that make the uterus unsuitable for implantation.", bn: "তারা হরমোন নিঃসরণ করে যা জরায়ুকে ইমপ্ল্যান্টেশনের জন্য অনুপযুক্ত করে তোলে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q107",
        question: {
            en: "Oral contraceptive pills primarily prevent pregnancy by:",
            bn: "ওরাল গর্ভনিরোধক পিলগুলি মূলত গর্ভধারণ প্রতিরোধ করে:"
        },
        options: [
            { en: "Killing sperms in the vagina", bn: "যোনিতে শুক্রাণু হত্যা করে" },
            { en: "Inhibiting ovulation and implantation, and altering cervical mucus quality", bn: "ডিম্বস্ফোটন এবং ইমপ্ল্যান্টেশন প্রতিরোধ করে, এবং সার্ভিকাল মিউকাসের গুণমান পরিবর্তন করে" },
            { en: "Creating a physical barrier in the uterus", bn: "জরায়ুতে একটি শারীরিক বাধা তৈরি করে" },
            { en: "Inducing early menstruation", bn: "মাসিক ঋতুস্রাব আগে শুরু করে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q108",
        question: {
            en: "Emergency contraceptives, like IUDs or progestogen-estrogen combinations, are effective if administered within how many hours of coitus?",
            bn: "ইমার্জেন্সি গর্ভনিরোধক, যেমন আইইউডি বা প্রজেস্টোজেন-ইস্ট্রোজেন সমন্বয়, সহবাসের কত ঘন্টার মধ্যে প্রয়োগ করলে কার্যকর হয়?"
        },
        options: [
            { en: "12 hours", bn: "১২ ঘন্টা" },
            { en: "24 hours", bn: "২৪ ঘন্টা" },
            { en: "48 hours", bn: "৪৮ ঘন্টা" },
            { en: "72 hours", bn: "৭২ ঘন্টা" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q109",
        question: {
            en: "What is a major drawback of surgical methods of contraception (vasectomy and tubectomy)?",
            bn: "গর্ভনিরোধের সার্জিক্যাল পদ্ধতির (ভাসেকটমি এবং টিউবেকটমি) একটি প্রধান অসুবিধা কী?"
        },
        options: [
            { en: "They are not highly effective.", bn: "এগুলি খুব কার্যকর নয়।" },
            { en: "Their reversibility is very poor.", bn: "এগুলির পরিবর্তনযোগ্যতা খুব কম।" },
            { en: "They have significant side effects like hormonal imbalance.", bn: "এগুলির হরমোন ভারসাম্যহীনতার মতো উল্লেখযোগ্য পার্শ্বপ্রতিক্রিয়া রয়েছে।" },
            { en: "They need to be repeated frequently.", bn: "এগুলি ঘন ঘন পুনরাবৃত্তি করার প্রয়োজন হয়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q110",
        question: {
            en: "The Medical Termination of Pregnancy (Amendment) Act, 2017, allows termination of pregnancy up to 24 weeks (from 20 weeks) under specific conditions, requiring the opinion of:",
            bn: "মেডিকেল টার্মিনেশন অফ প্রেগন্যান্সি (সংশোধন) আইন, ২০১৭, নির্দিষ্ট শর্তে ২৪ সপ্তাহ পর্যন্ত (২০ সপ্তাহ থেকে) গর্ভধারণ termination-এর অনুমতি দেয়, যার জন্য মতামত প্রয়োজন হয়:"
        },
        options: [
            { en: "One registered medical practitioner", bn: "একজন নিবন্ধিত মেডিকেল practitioner" },
            { en: "Two registered medical practitioners", bn: "দুজন নিবন্ধিত মেডিকেল practitioner" },
            { en: "A panel of three doctors", bn: "তিনজন ডাক্তারের একটি প্যানেল" },
            { en: "The woman and her spouse only", bn: "কেবল মহিলা এবং তার স্ত্রীর" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1) - Note the OCR has extra info "(For pregnancies between 12-24 weeks; 1 RMP for up to 12 weeks)" which clarifies the answer but isn't part of the option text.
    },
    {
        id: "Q111",
        question: {
            en: "Why might infected females often remain undetected for STIs for a long duration?",
            bn: "কেন আক্রান্ত মহিলারা প্রায়শই দীর্ঘ সময় ধরে যৌনবাহিত সংক্রমণের (STIs) জন্য undetected থেকে যান?"
        },
        options: [
            { en: "STIs only affect males.", bn: "STIs শুধুমাত্র পুরুষদের প্রভাবিত করে।" },
            { en: "Symptoms in females are always severe and easily identifiable.", bn: "মহিলাদের লক্ষণগুলি সর্বদা গুরুতর এবং সহজে সনাক্তযোগ্য।" },
            { en: "Infected females may often be asymptomatic or have less significant symptoms in early stages.", bn: "সংক্রামিত মহিলারা প্রায়শই অ্যাসিম্পটোমেটিক হতে পারেন বা প্রাথমিক পর্যায়ে কম গুরুত্বপূর্ণ লক্ষণ থাকতে পারে।" },
            { en: "Social stigma prevents only females from seeking treatment.", bn: "সামাজিক কলঙ্ক কেবল মহিলাদের চিকিৎসা চাইতে বাধা দেয়।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q112",
        question: {
            en: "In the 'test tube baby' programme (IVF-ET), if an embryo has more than 8 blastomeres, where is it typically transferred?",
            bn: "'টেস্ট টিউব বেবি' প্রোগ্রামে (IVF-ET), যদি একটি ভ্রূণে ৮টির বেশি ব্লাস্টোমিয়ার থাকে, তবে এটি সাধারণত কোথায় স্থানান্তর করা হয়?"
        },
        options: [
            { en: "Into the fallopian tube (ZIFT)", bn: "ফ্যালোপিয়ান টিউবে (ZIFT)" },
            { en: "Into the uterus (IUT - Intra Uterine Transfer)", bn: "জরায়ুতে (IUT - ইন্ট্রা ইউটেরাইন ট্রান্সফার)" },
            { en: "Into the cervix", bn: "সার্ভিক্সে" },
            { en: "It is cultured further outside the body", bn: "এটি শরীরের বাইরে আরও cultured করা হয়" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q113",
        question: {
            en: "Intra Cytoplasmic Sperm Injection (ICSI) is a specialised procedure where:",
            bn: "ইন্ট্রা সাইটোপ্লাজমিক স্পার্ম ইনজেকশন (ICSI) একটি বিশেষ পদ্ধতি যেখানে:"
        },
        options: [
            { en: "Multiple sperms are injected into the fallopian tube.", bn: "একাধিক শুক্রাণু ফ্যালোপিয়ান টিউবে ইনজেকশন করা হয়।" },
            { en: "A sperm is directly injected into the ovum in the laboratory.", bn: "ল্যাবরেটরিতে ডিম্বাণুতে সরাসরি শুক্রাণু ইনজেকশন করা হয়।" },
            { en: "Semen is artificially introduced into the uterus.", bn: "কৃত্রিমভাবে সেমেন জরায়ুতে প্রবেশ করানো হয়।" },
            { en: "Ovum is directly injected into the uterus.", bn: "ডিম্বাণু সরাসরি জরায়ুতে ইনজেকশন করা হয়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q114",
        question: {
            en: "What is a significant socio-ethical consideration mentioned regarding Assisted Reproductive Technologies (ART) in India?",
            bn: "ভারতে সহায়ক প্রজনন প্রযুক্তি (ART) সম্পর্কিত একটি গুরুত্বপূর্ণ সামাজিক-নৈতিক বিবেচনা কী উল্লেখ করা হয়েছে?"
        },
        options: [
            { en: "They are universally affordable.", bn: "এগুলি সর্বজনীনভাবে সাশ্রয়ী।" },
            { en: "Their high cost, limited availability, and emotional/religious/social deterrents, contrasted with many orphaned children needing adoption.", bn: "এগুলির উচ্চ মূল্য, সীমিত সহজলভ্যতা, এবং মানসিক/ধর্মীয়/সামাজিক বাধা, অনেক অনাথ শিশুর দত্তক নেওয়ার প্রয়োজনীয়তার বিপরীতে।" },
            { en: "They always result in multiple births.", bn: "এগুলি সর্বদা একাধিক জন্ম দেয়।" },
            { en: "There are no legal provisions for these procedures.", bn: "এই পদ্ধতিগুলির জন্য কোনো আইনি বিধান নেই।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q115",
        question: {
            en: "One key objective of RCH programmes is to create awareness about:",
            bn: "RCH কর্মসূচিগুলির একটি মূল উদ্দেশ্য হল ____ সম্পর্কে সচেতনতা তৈরি করা:"
        },
        options: [
            { en: "Only birth control options", bn: "কেবল জন্ম নিয়ন্ত্রণ বিকল্প" },
            { en: "Various reproduction-related aspects, including STDs, post-natal care, and importance of breastfeeding", bn: "বিভিন্ন প্রজনন সম্পর্কিত দিক, যেমন STDs, প্রসবোত্তর যত্ন এবং বুকের দুধ খাওয়ানোর গুরুত্ব" },
            { en: "Financial incentives for large families", bn: "বড় পরিবারের জন্য আর্থিক প্রণোদনা" },
            { en: "Traditional methods of sex determination", bn: "লিঙ্গ নির্ধারণের ঐতিহ্যবাহী পদ্ধতি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q116",
        question: {
            en: "The failure rate of natural contraceptive methods like periodic abstinence or coitus interruptus is generally considered:",
            bn: "পিরিয়ডিক অ্যাবসটিনেন্স বা কোইটাস ইন্টারাপটাসের মতো প্রাকৃতিক গর্ভনিরোধক পদ্ধতির ব্যর্থতার হার সাধারণত বিবেচিত হয়:"
        },
        options: [
            { en: "Very low, almost nil", bn: "খুব কম, প্রায় শূন্য" },
            { en: "Moderate", bn: "মাঝারি" },
            { en: "High", bn: "উচ্চ" },
            { en: "Equal to barrier methods", bn: "বাধা পদ্ধতির সমান" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q117",
        question: {
            en: "Apart from preventing conception, what is an additional significant benefit of using condoms?",
            bn: "গর্ভধারণ প্রতিরোধ করা ছাড়াও, কনডম ব্যবহারের একটি অতিরিক্ত গুরুত্বপূর্ণ সুবিধা কী?"
        },
        options: [
            { en: "They enhance sexual pleasure.", bn: "তারা যৌন আনন্দ বৃদ্ধি করে।" },
            { en: "They protect the user from contracting STIs and AIDS.", bn: "তারা ব্যবহারকারীকে যৌনবাহিত সংক্রমণ (STIs) এবং এইডস থেকে রক্ষা করে।" },
            { en: "They are reusable multiple times.", bn: "এগুলি একাধিকবার পুনরায় ব্যবহারযোগ্য।" },
            { en: "They regulate hormonal balance.", bn: "তারা হরমোনের ভারসাম্য নিয়ন্ত্রণ করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q118",
        question: {
            en: "Tubectomy involves:",
            bn: "টিউবেকটমি জড়িত:"
        },
        options: [
            { en: "Removal of the uterus", bn: "জরায়ু অপসারণ" },
            { en: "Tying or removing a small part of the vas deferens", bn: "ভাস ডিফারেন্সের একটি ছোট অংশ বেঁধে দেওয়া বা অপসারণ করা" },
            { en: "Tying or removing a small part of the fallopian tube", bn: "ফ্যালোপিয়ান টিউবের একটি ছোট অংশ বেঁধে দেওয়া বা অপসারণ করা" },
            { en: "Removal of the ovaries", bn: "ডিম্বাশয় অপসারণ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q119",
        question: {
            en: "Why is the misuse of amniocentesis for foetal sex determination a dangerous trend, especially in India?",
            bn: "বিশেষ করে ভারতে ভ্রূণের লিঙ্গ নির্ধারণের জন্য অ্যামনিওসেন্টেসিসের অপব্যবহার কেন একটি বিপজ্জনক প্রবণতা?"
        },
        options: [
            { en: "It is a very painful procedure for the mother.", bn: "এটি মায়ের জন্য খুব বেদনাদায়ক প্রক্রিয়া।" },
            { en: "It can lead to illegal female foeticides, worsening the sex ratio.", bn: "এটি অবৈধ কন্যা ভ্রূণ হত্যার দিকে পরিচালিত করতে পারে, যা লিঙ্গ অনুপাতকে খারাপ করে তোলে।" },
            { en: "It often gives incorrect results about genetic disorders.", bn: "এটি প্রায়শই জেনেটিক ডিসঅর্ডার সম্পর্কে ভুল ফলাফল দেয়।" },
            { en: "It is not permitted by any religion.", bn: "এটি কোনো ধর্ম দ্বারা অনুমোদিত নয়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q120",
        question: {
            en: "Which of these STIs are generally NOT completely curable, even if detected early?",
            bn: "এই STIগুলির মধ্যে কোনটি সাধারণত সম্পূর্ণ নিরাময়যোগ্য নয়, এমনকি তাড়াতাড়ি সনাক্ত করা হলেও?"
        },
        options: [
            { en: "Gonorrhoea and Syphilis", bn: "গনোরিয়া এবং সিফিলিস" },
            { en: "Chlamydiasis and Trichomoniasis", bn: "ক্ল্যামিডিয়া এবং ট্রিচোমোনিয়াসিস" },
            { en: "Hepatitis-B, Genital Herpes, and HIV infections", bn: "হেপাটাইটিস-বি, জেনিটাল হার্পিস এবং এইচআইভি সংক্রমণ" },
            { en: "Genital warts", bn: "জেনিটাল ওয়ার্টস" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q121",
        question: {
            en: "The RCH programmes aim to bring about \"socially conscious healthy families of desired size.\" This implies an approach that goes beyond just contraception, encompassing:",
            bn: "RCH কর্মসূচিগুলির লক্ষ্য হল \"কাম্য আকারের সামাজিকভাবে সচেতন সুস্থ পরিবার\" গড়ে তোলা। এর দ্বারা বোঝানো হয় এমন একটি পদ্ধতি যা কেবল গর্ভনিরোধের বাইরেও বিস্তৃত, যার মধ্যে অন্তর্ভুক্ত রয়েছে:",
        },
        options: [
            { en: "Only medical interventions for infertility.", bn: "কেবল বন্ধ্যাত্বের জন্য চিকিৎসা হস্তক্ষেপ।" },
            { en: "A holistic view including maternal/child health, awareness of population impact, and gender equality.", bn: "মা ও শিশুর স্বাস্থ্য, জনসংখ্যা প্রভাব সম্পর্কে সচেতনতা এবং লিঙ্গ সমতা সহ একটি সামগ্রিক দৃষ্টিভঙ্গি।" },
            { en: "Strict enforcement of a one-child norm.", bn: "এক সন্তান নীতির কঠোর প্রয়োগ।" },
            { en: "Promotion of only traditional family planning methods.", bn: "কেবল ঐতিহ্যবাহী পরিবার পরিকল্পনা পদ্ধতির প্রচার।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q122",
        question: {
            en: "While 'Saheli' is a non-steroidal oral contraceptive pill, most conventional oral contraceptive pills contain progestogen-estrogen combinations. The primary mechanism by which these hormonal pills prevent pregnancy involves:",
            bn: "'সাহেলী' একটি নন-স্টেরয়েডাল ওরাল গর্ভনিরোধক পিল হলেও, বেশিরভাগ প্রচলিত ওরাল গর্ভনিরোধক পিলগুলিতে প্রজেস্টোজেন-ইস্ট্রোজেন সমন্বয় থাকে। এই হরমোনাল পিলগুলি গর্ভধারণ প্রতিরোধের প্রধান পদ্ধতি হল:",
        },
        options: [
            { en: "Direct spermicidal action in the vagina.", bn: "যোনিতে সরাসরি স্পার্মিসাইডাল ক্রিয়া।" },
            { en: "Creating a permanent blockage in the fallopian tubes.", bn: "ফ্যালোপিয়ান টিউবে একটি স্থায়ী blockage তৈরি করা।" },
            { en: "Inhibition of ovulation and implantation, and altering cervical mucus quality", bn: "ডিম্বস্ফোটন এবং ইমপ্ল্যান্টেশন প্রতিরোধ করা, এবং সার্ভিকাল মিউকাসের গুণমান পরিবর্তন করা" },
            { en: "Causing premature shedding of the uterine lining immediately after coitus.", bn: "সহবাসের পরপরই জরায়ুর আস্তরণের অকাল shedding ঘটানো।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q123",
        question: {
            en: "Consider the effectiveness of lactational amenorrhea. This method is based on the physiological fact that:",
            bn: "ল্যাকটেশনাল অ্যামেনোরিয়ার কার্যকারিতা বিবেচনা করুন। এই পদ্ধতিটি এই শারীরিক তথ্যের উপর ভিত্তি করে তৈরি যে:",
        },
        options: [
            { en: "Suckling inhibits the release of prolactin.", bn: "স্তন্যপান প্রোল্যাকটিন নিঃসরণকে বাধা দেয়।" },
            { en: "Intense lactation and suckling inhibit gonadotropin release, thereby suppressing ovulation and the menstrual cycle.", bn: "ঘন স্তন্যপান এবং স্তন্যপান গোনাডোট্রপিন নিঃসরণকে বাধা দেয়, ফলে ডিম্বস্ফোটন এবং ঋতুচক্রকে দমন করে।" },
            { en: "The uterine environment is hostile to sperm during lactation.", bn: "স্তন্যপানের সময় জরায়ুর পরিবেশ শুক্রাণুর জন্য প্রতিকূল থাকে।" },
            { en: "Estrogen levels are extremely high during lactation, preventing follicle development.", bn: "স্তন্যপানের সময় ইস্ট্রোজেনের মাত্রা অত্যন্ত বেশি থাকে, যা ফলিকল বিকাশকে প্রতিরোধ করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q124",
        question: {
            en: "The government's decision to legalise MTP in 1971 came with \"strict conditions to avoid its misuse.\" These restrictions are particularly crucial to prevent:",
            bn: "১৯৭১ সালে MTP কে আইনসম্মত করার সরকারের সিদ্ধান্তটি এর \"অপব্যবহার এড়াতে কঠোর শর্তাবলী\" সহ এসেছিল। এই সীমাবদ্ধতাগুলি বিশেষ করে ____ প্রতিরোধ করার জন্য অত্যন্ত গুরুত্বপূর্ণ:",
        },
        options: [
            { en: "MTPs for non-medical reasons like contraceptive failure.", bn: "গর্ভনিরোধক ব্যর্থতার মতো অ-চিকিৎসা কারণে MTPs।" },
            { en: "Indiscriminate and illegal female foeticides following sex determination.", bn: "লিঙ্গ নির্ধারণের পরে নির্বিচারে এবং অবৈধ কন্যা ভ্রূণ হত্যা।" },
            { en: "MTPs performed by unqualified personnel.", bn: "অযোগ্য কর্মী দ্বারা সম্পাদিত MTPs।" },
            { en: "MTPs in the first trimester of pregnancy.", bn: "গর্ভধারণের প্রথম ত্রৈমাসিকে MTPs।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q125",
        question: {
            en: "In ZIFT (Zygote Intra Fallopian Transfer), the zygote or early embryo (up to 8 blastomeres) is transferred into the fallopian tube. This location is chosen because:",
            bn: "ZIFT (জাইগোট ইন্ট্রা ফ্যালোপিয়ান ট্রান্সফার)-এ, জাইগোট বা প্রাথমিক ভ্রূণ (৮ ব্লাস্টোমিয়ার পর্যন্ত) ফ্যালোপিয়ান টিউবে স্থানান্তর করা হয়। এই স্থানটি নির্বাচন করা হয় কারণ:",
        },
        options: [
            { en: "The uterus is not yet prepared to receive the embryo at this stage.", bn: "এই পর্যায়ে জরায়ু এখনও ভ্রূণ গ্রহণ করার জন্য প্রস্তুত থাকে না।" },
            { en: "The fallopian tube provides the natural site for early cleavage and development before implantation in the uterus.", bn: "ফ্যালোপিয়ান টিউব জরায়ুতে ইমপ্ল্যান্টেশনের আগে প্রাথমিক বিভাজন এবং বিকাশের জন্য প্রাকৃতিক স্থান সরবরাহ করে।" },
            { en: "It is easier to access the fallopian tube surgically.", bn: "সার্জিকভাবে ফ্যালোপিয়ান টিউবে প্রবেশ করা সহজ।" },
            { en: "The embryo requires specific tubal secretions not found in the uterus.", bn: "ভ্রূণের জন্য নির্দিষ্ট tubal secretions প্রয়োজন যা জরায়ুতে পাওয়া যায় না।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q126",
        question: {
            en: "GIFT (Gamete Intra Fallopian Transfer) is a suitable ART for a female who:",
            bn: "GIFT (গ্যামেট ইন্ট্রা ফ্যালোপিয়ান ট্রান্সফার) একজন মহিলার জন্য উপযুক্ত ART যিনি:"
        },
        options: [
            { en: "Can produce ova but has a blocked uterus.", bn: "ডিম্বাণু তৈরি করতে পারেন কিন্তু তার জরায়ু block আছে।" },
            { en: "Cannot produce ova but can provide a suitable environment for fertilisation and further development.", bn: "ডিম্বাণু তৈরি করতে পারেন না কিন্তু নিষিক্তকরণ এবং পরবর্তী বিকাশের জন্য একটি উপযুক্ত পরিবেশ প্রদান করতে পারেন।" },
            { en: "Has healthy ova and uterus but her male partner has very low sperm count.", bn: "সুস্থ ডিম্বাণু এবং জরায়ু আছে কিন্তু তার পুরুষ সঙ্গীর শুক্রাণুর সংখ্যা খুব কম।" },
            { en: "Has a damaged fallopian tube but produces healthy ova.", bn: "একটি damaged ফ্যালোপিয়ান টিউব আছে কিন্তু সুস্থ ডিম্বাণু তৈরি করেন।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q127",
        question: {
            en: "The success of RCH programs in improving societal reproductive health can be gauged by indicators such as:",
            bn: "সামাজিক প্রজনন স্বাস্থ্যের উন্নতিতে RCH কর্মসূচিগুলির সাফল্য ____ সূচক দ্বারা পরিমাপ করা যেতে পারে:"
        },
        options: [
            { en: "Increased rate of population growth.", bn: "জনসংখ্যা বৃদ্ধির হার বৃদ্ধি।" },
            { en: "Decreased maternal and infant mortality rates, better detection and cure of STDs, and increased number of couples with small families.", bn: "মা ও শিশু মৃত্যুর হার হ্রাস, যৌনবাহিত সংক্রমণের (STDs) উন্নত সনাক্তকরণ ও নিরাময়, এবং ছোট পরিবারের সংখ্যা বৃদ্ধি।" },
            { en: "Higher adoption rates of only permanent contraceptive methods.", bn: "কেবল স্থায়ী গর্ভনিরোধক পদ্ধতির উচ্চ গ্রহণ হার।" },
            { en: "Increased number of amniocentesis procedures.", bn: "অ্যামনিওসেন্টেসিস পদ্ধতির সংখ্যা বৃদ্ধি।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q128",
        question: {
            en: "The text mentions that \"an ideal contraceptive should...in no way interfere with the sexual drive, desire and/or the sexual act of the user.\" This highlights a crucial aspect of contraceptive acceptability, which is:",
            bn: "পাঠ্যে উল্লেখ করা হয়েছে যে \"একটি আদর্শ গর্ভনিরোধক ব্যবহারকারীর যৌন ইচ্ছা, আকাঙ্ক্ষা এবং/অথবা যৌন ক্রিয়াকলাপের সাথে কোনোভাবেই হস্তক্ষেপ করবে না।\" এটি গর্ভনিরোধকের গ্রহণযোগ্যতার একটি গুরুত্বপূর্ণ দিক তুলে ধরে, যা হলো:"
        },
        options: [
            { en: "Its cost-effectiveness", bn: "এর কার্যকারিতা" },
            { en: "Its 100% efficacy", bn: "এর ১০০% কার্যকারিতা" },
            { en: "Its minimal impact on the user's psycho-sexual well-being and relationship dynamics.", bn: "ব্যবহারকারীর মানসিক-যৌন সুস্থতা এবং সম্পর্কের গতিশীলতার উপর এর ন্যূনতম প্রভাব।" },
            { en: "Its ease of disposal.", bn: "এর নিষ্পত্তি সহজতা।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q129",
        question: {
            en: "Statutory ban on amniocentesis for sex-determination is primarily aimed at tackling female foeticide. However, amniocentesis itself is a valuable medical procedure for:",
            bn: "লিঙ্গ নির্ধারণের জন্য অ্যামনিওসেন্টেসিসের বিধিবদ্ধ নিষেধাজ্ঞা প্রধানত কন্যা ভ্রূণ হত্যা মোকাবেলা করার লক্ষ্য রাখে। তবে, অ্যামনিওসেন্টেসিস নিজেই একটি মূল্যবান চিকিৎসা পদ্ধতি ____ এর জন্য:",
        },
        options: [
            { en: "Enhancing foetal growth and development.", bn: "ভ্রূণের বৃদ্ধি এবং বিকাশ বৃদ্ধি।" },
            { en: "Prenatal diagnosis of chromosomal abnormalities and certain genetic metabolic disorders.", bn: "ক্রোমোসোমাল অস্বাভাবিকতা এবং কিছু জেনেটিক বিপাকীয় রোগের প্রসবপূর্ব নির্ণয়।" },
            { en: "Administering nutritional supplements directly to the foetus.", bn: "সরাসরি ভ্রূণকে পুষ্টি পরিপূরক দেওয়া।" },
            { en: "Determining the exact date of conception.", bn: "গর্ভধারণের সঠিক তারিখ নির্ধারণ।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q130",
        question: {
            en: "The success of ART procedures like IVF-ET often depends on controlled ovarian stimulation in the female. This typically involves:",
            bn: "IVF-ET-এর মতো ART পদ্ধতিগুলির সাফল্য প্রায়শই মহিলার নিয়ন্ত্রিত ওভারিয়ান উদ্দীপনার উপর নির্ভর করে। এর মধ্যে সাধারণত অন্তর্ভুক্ত থাকে:",
        },
        options: [
            { en: "Administering hormones to suppress ovulation completely.", bn: "ডিম্বস্ফোটন সম্পূর্ণরূপে দমন করার জন্য হরমোন প্রয়োগ করা।" },
            { en: "Administering hormones to induce the development and maturation of multiple follicles and ova.", bn: "একাধিক ফলিকল এবং ডিম্বাণুর বিকাশ এবং পরিপক্কতা প্ররোচিত করার জন্য হরমোন প্রয়োগ করা।" },
            { en: "Surgical removal of immature follicles for in-vitro maturation.", bn: "ইন-ভিট্রো পরিপক্কতার জন্য অপরিণত ফলিকলগুলির অস্ত্রোপচার অপসারণ।" },
            { en: "Using natural cycle ovulation without any hormonal intervention.", bn: "কোনো হরমোন হস্তক্ষেপ ছাড়াই প্রাকৃতিক চক্রের ডিম্বস্ফোটন ব্যবহার করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q131",
        question: {
            en: "The RCH programmes aim to build a \"reproductively healthy society.\" From a public health perspective, this involves not just individual health but also societal attitudes and infrastructure. Which of the following represents the most complex challenge in achieving this goal in a diverse country like India?",
            bn: "RCH কর্মসূচিগুলির লক্ষ্য হল একটি \"প্রজননগতভাবে সুস্থ সমাজ\" গড়ে তোলা। জনস্বাস্থ্যের দৃষ্টিকোণ থেকে, এর মধ্যে কেবল ব্যক্তিগত স্বাস্থ্য নয়, সামাজিক মনোভাব এবং অবকাঠামোও জড়িত। ভারতের মতো একটি বৈচিত্র্যপূর্ণ দেশে এই লক্ষ্য অর্জনে নিম্নলিখিত কোনটি সবচেয়ে জটিল চ্যালেঞ্জ উপস্থাপন করে?"
        },
        options: [
            { en: "Ensuring availability of contraceptives in urban areas.", bn: "শহরাঞ্চলে গর্ভনিরোধক সহজলভ্যতা নিশ্চিত করা।" },
            { en: "Overcoming socio-cultural barriers, myths, misconceptions, and ensuring equitable access to quality healthcare and education, especially in remote areas.", bn: "সামাজিক-সাংস্কৃতিক বাধা, পৌরাণিক কাহিনী, ভুল ধারণা অতিক্রম করা, এবং বিশেষ করে প্রত্যন্ত অঞ্চলে মানসম্মত স্বাস্থ্যসেবা এবং শিক্ষার equitable অ্যাক্সেস নিশ্চিত করা।" },
            { en: "Training sufficient numbers of gynecologists.", bn: "পর্যাপ্ত সংখ্যক স্ত্রীরোগ বিশেষজ্ঞ প্রশিক্ষণ দেওয়া।" },
            { en: "Developing new contraceptive technologies.", bn: "নতুন গর্ভনিরোধক প্রযুক্তি বিকাশ করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q132",
        question: {
            en: "Lactational amenorrhea relies on the anovulatory state induced by breastfeeding. However, its reliability as a contraceptive decreases significantly after 6 months or if breastfeeding is not exclusive. This is primarily because:",
            bn: "ল্যাকটেশনাল অ্যামেনোরিয়া বুকের দুধ খাওয়ানোর দ্বারা প্ররোচিত anovulatory অবস্থার উপর নির্ভর করে। তবে, ৬ মাস পর বা বুকের দুধ খাওয়ানো exclusive না হলে গর্ভনিরোধক হিসেবে এর নির্ভরযোগ্যতা উল্লেখযোগ্যভাবে হ্রাস পায়। এর প্রধান কারণ হলো:"
        },
        options: [
            { en: "The infant's suckling stimulus weakens considerably after 6 months.", bn: "৬ মাস পর শিশুর স্তন্যপান উদ্দীপনা উল্লেখযোগ্যভাবে দুর্বল হয়ে যায়।" },
            { en: "The maternal pituitary gland becomes desensitized to prolactin's inhibitory effect on gonadotropins over time or with reduced suckling frequency.", bn: "সময়ের সাথে সাথে বা স্তন্যপানের ফ্রিকোয়েন্সি কমে যাওয়ার সাথে সাথে মায়ের পিটুইটারি গ্রন্থি গোনাডোট্রপিনগুলির উপর প্রোল্যাকটিনের inhibitory প্রভাবের প্রতি desensitized হয়ে যায়।" },
            { en: "The ovarian follicles spontaneously mature irrespective of hormonal signals after 6 months postpartum.", bn: "প্রসবের পর ৬ মাস পরে হরমোনের সংকেত নির্বিশেষে ওভারিয়ান ফলিকলগুলি স্বাভাবিকভাবেই পরিপক্ক হয়।" },
            { en: "The antibodies in colostrum that prevent conception are no longer produced.", bn: "কোলোস্ট্রামে থাকা অ্যান্টিবডি যা গর্ভধারণ প্রতিরোধ করে তা আর উৎপাদিত হয় না।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q133",
        question: {
            en: "While vasectomy and tubectomy are highly effective sterilization methods, their \"poor reversibility\" is a significant factor in counseling. The difficulty in reversal is mainly due to:",
            bn: "ভাসেকটমি এবং টিউবেকটমি অত্যন্ত কার্যকর বন্ধ্যাকরণ পদ্ধতি হলেও, তাদের \"কম পরিবর্তনযোগ্যতা\" কাউন্সেলিংয়ের একটি গুরুত্বপূর্ণ কারণ। পরিবর্তনের অসুবিধা প্রধানত এর কারণে হয়:",
        },
        options: [
            { en: "The body's immune response against the surgical site.", bn: "সার্জিক্যাল সাইটের বিরুদ্ধে শরীরের রোগ প্রতিরোধ ক্ষমতা।" },
            { en: "The technical challenges in successfully re-anastomosing the severed vas deferens or fallopian tubes, and potential damage or blockage that impairs gamete transport even if patency is restored.", bn: "বিচ্ছিন্ন ভাস ডিফারেন্স বা ফ্যালোপিয়ান টিউব সফলভাবে re-anastomose করার প্রযুক্তিগত চ্যালেঞ্জ, এবং সম্ভাব্য ক্ষতি বা blockage যা patency পুনরুদ্ধার করা হলেও গ্যামেট পরিবহনে বাধা দেয়।" },
            { en: "Hormonal changes that permanently alter gamete production after sterilization.", bn: "হরমোন পরিবর্তন যা বন্ধ্যাকরণের পরে গ্যামেট উৎপাদনকে স্থায়ীভাবে পরিবর্তন করে।" },
            { en: "The high cost of reversal procedures making them inaccessible.", bn: "পরিবর্তন পদ্ধতির উচ্চ ব্যয় যা সেগুলিকে দুর্গম করে তোলে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q134",
        question: {
            en: "The Medical Termination of Pregnancy (MTP) Act aims to reduce illegal abortions and consequent maternal mortality. A critical ethical and medical dilemma arises when MTP is sought late in pregnancy for foetal abnormalities incompatible with life. This situation requires balancing:",
            bn: "মেডিকেল টার্মিনেশন অফ প্রেগন্যান্সি (MTP) আইনের লক্ষ্য হল অবৈধ গর্ভপাত এবং ফলস্বরূপ মাতৃমৃত্যু হ্রাস করা। জীবনযাত্রার সাথে বেমানান ভ্রূণের অস্বাভাবিকতার জন্য গর্ভাবস্থার দেরিতে MTP চাওয়া হলে একটি গুরুত্বপূর্ণ নৈতিক এবং চিকিৎসা dilemma দেখা দেয়। এই পরিস্থিতিকে ভারসাম্য বজায় রাখার জন্য প্রয়োজন:"
        },
        options: [
            { en: "The cost of MTP versus the cost of neonatal intensive care.", bn: "MTP এর খরচ বনাম neonatal intensive care এর খরচ।" },
            { en: "The woman's autonomy and psychological well-being against the potential viability of the foetus and societal views on late-term abortions.", bn: "ভ্রূণের সম্ভাব্য viability এবং দেরিতে গর্ভপাত সম্পর্কে সামাজিক দৃষ্টিভঙ্গির বিরুদ্ধে মহিলার স্বায়ত্তশাসন এবং মানসিক সুস্থতা।" },
            { en: "The risk of MTP to the mother versus the risk of continuing the pregnancy.", bn: "মায়ের জন্য MTP এর ঝুঁকি বনাম গর্ভাবস্থা চালিয়ে যাওয়ার ঝুঁকি।" },
            { en: "The availability of qualified medical practitioners for late-term MTPs.", bn: "দেরিতে MTPs এর জন্য যোগ্য চিকিৎসা practitioners এর সহজলভ্যতা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q135",
        question: {
            en: "In the context of STIs, the phrase \"social stigma...deters infected persons from going for timely detection and proper treatment\" has profound public health implications. This deterrence directly contributes to:",
            bn: "যৌনবাহিত সংক্রমণের (STIs) প্রেক্ষাপটে, \"সামাজিক কলঙ্ক...সংক্রমিত ব্যক্তিদের সময়মতো সনাক্তকরণ এবং সঠিক চিকিৎসা চাইতে বাধা দেয়\" এই বাক্যটির গভীর জনস্বাস্থ্যগত প্রভাব রয়েছে। এই বাধা সরাসরি অবদান রাখে:",
        },
        options: [
            { en: "Increased efficacy of antibiotic treatments when finally sought.", bn: "শেষ পর্যন্ত চিকিৎসা চাইলে অ্যান্টিবায়োটিক চিকিৎসার কার্যকারিতা বৃদ্ধি।" },
            { en: "Reduced transmission rates as infected individuals isolate themselves.", bn: "সংক্রমিত ব্যক্তিরা নিজেদেরকে বিচ্ছিন্ন করায় transmission হার হ্রাস।" },
            { en: "Higher rates of asymptomatic carriers, increased risk of complications, and continued unknowing transmission within the community.", bn: "অ্যাসিম্পটোমেটিক carriers এর উচ্চ হার, জটিলতার ঝুঁকি বৃদ্ধি, এবং সম্প্রদায়ের মধ্যে অব্যাহত অজান্তে transmission।" },
            { en: "Spontaneous resolution of most STIs without medical intervention.", bn: "চিকিৎসা হস্তক্ষেপ ছাড়াই বেশিরভাগ STIs এর স্বতঃস্ফূর্ত নিরাময়।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q136",
        question: {
            en: "Assisted Reproductive Technologies (ART) have revolutionized infertility treatment. However, the transfer of multiple embryos in IVF-ET, often done to increase success rates per cycle, carries an increased risk of:",
            bn: "সহায়ক প্রজনন প্রযুক্তি (ART) বন্ধ্যাত্বের চিকিৎসায় বিপ্লব ঘটিয়েছে। তবে, IVF-ET-তে একাধিক ভ্রূণ স্থানান্তর, যা প্রায়শই প্রতি চক্রে সাফল্যের হার বাড়ানোর জন্য করা হয়, ____ এর ঝুঁকি বৃদ্ধি করে:",
        },
        options: [
            { en: "Genetic abnormalities in the resulting offspring.", bn: "ফলস্বরূপ offspring-এ জেনেটিক অস্বাভাবিকতা।" },
            { en: "Maternal STIs post-procedure.", bn: "পদ্ধতির পরে মায়ের যৌনবাহিত সংক্রমণ (STIs)।" },
            { en: "Multiple pregnancies (twins, triplets, etc.), which are associated with higher risks for both mother and babies (e.g., premature birth, low birth weight).", bn: "একাধিক গর্ভধারণ (যমজ, ত্রিপল ইত্যাদি), যা মা এবং শিশু উভয়ের জন্য উচ্চ ঝুঁকির সাথে জড়িত (যেমন, অকাল জন্ম, কম জন্ম ওজন)।" },
            { en: "Failure of the uterine lining to support implantation.", bn: "ইমপ্ল্যান্টেশন সমর্থন করার জন্য জরায়ুর আস্তরণের ব্যর্থতা।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q137",
        question: {
            en: "Consider the slogan \"Hum Do Hamare Do\" (We two, our two). While promoting smaller family norms, its effective adoption by a diverse population requires more than just awareness campaigns. It necessitates:",
            bn: "\"আমরা দুই, আমাদের দুই\" (Hum Do Hamare Do) স্লোগানটি বিবেচনা করুন। ছোট পরিবার প্রথা প্রচার করার সময়, বিভিন্ন জনগোষ্ঠীর দ্বারা এর কার্যকর গ্রহণের জন্য কেবল সচেতনতা প্রচারের চেয়ে বেশি কিছুর প্রয়োজন। এর জন্য অপরিহার্য:",
        },
        options: [
            { en: "Legal penalties for having more than two children.", bn: "দুটির বেশি সন্তান থাকার জন্য আইনি জরিমানা।" },
            { en: "Widespread access to a range of safe, effective, and affordable contraceptive methods, coupled with quality reproductive health services and socio-economic empowerment, especially for women.", bn: "নিরাপদ, কার্যকর, এবং সাশ্রয়ী মূল্যের গর্ভনিরোধক পদ্ধতির বিস্তৃত পরিসরে ব্যাপক অ্যাক্সেস, সাথে মানসম্মত প্রজনন স্বাস্থ্য পরিষেবা এবং আর্থ-সামাজিক ক্ষমতায়ন, বিশেষ করে মহিলাদের জন্য।" },
            { en: "Focusing contraceptive efforts solely on female sterilization.", bn: "কেবলমাত্র মহিলাদের বন্ধ্যাকরণের উপর গর্ভনিরোধক প্রচেষ্টা কেন্দ্রীভূত করা।" },
            { en: "Promoting only natural family planning methods due to their lack of side effects.", bn: "তাদের পার্শ্বপ্রতিক্রিয়ার অভাবের কারণে কেবল প্রাকৃতিক পরিবার পরিকল্পনা পদ্ধতির প্রচার।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q138",
        question: {
            en: "The statement \"Though all persons are vulnerable to [STIs], their incidences are reported to be very high among persons in the age group of 15-24 years\" suggests that this demographic is particularly at risk. Beyond biological susceptibility, what combination of factors likely contributes most significantly to this higher incidence?",
            bn: "\"যদিও সমস্ত ব্যক্তি যৌনবাহিত সংক্রমণের (STIs) জন্য ঝুঁকিপূর্ণ, তবে ১৫-২৪ বছর বয়সী মানুষের মধ্যে এদের ঘটনা খুব বেশি বলে রিপোর্ট করা হয়েছে\" এই বিবৃতিটি বোঝায় যে এই demographic গোষ্ঠীটি বিশেষভাবে ঝুঁকিপূর্ণ। biological susceptibility ছাড়াও, কোন কারণগুলির সমন্বয় এই উচ্চ ঘটনার জন্য সবচেয়ে উল্লেখযোগ্যভাবে অবদান রাখে?",
        },
        options: [
            { en: "Lower immune system development and mandatory STI screening in this age group.", bn: "এই বয়সের মধ্যে রোগ প্রতিরোধ ক্ষমতার কম বিকাশ এবং বাধ্যতামূলক STI স্ক্রীনিং।" },
            { en: "A confluence of factors including initiation of sexual activity, potential for multiple partners, lower awareness or utilization of protective measures, and feelings of invincibility.", bn: "যৌন ক্রিয়াকলাপের সূচনা, একাধিক সঙ্গীর সম্ভাবনা, প্রতিরক্ষামূলক ব্যবস্থার কম সচেতনতা বা ব্যবহার, এবং অপরাজেয়তার অনুভূতি সহ কারণগুলির একটি সংমিশ্রণ।" },
            { en: "Higher exposure to environmental toxins that mimic STI symptoms.", bn: "STI লক্ষণ অনুকরণকারী পরিবেশগত টক্সিনের প্রতি উচ্চতর এক্সপোজার।" },
            { en: "A genetic predisposition to STIs that manifests primarily in this age group.", bn: "STIs এর প্রতি একটি জেনেটিক প্রবণতা যা প্রাথমিকভাবে এই বয়স গোষ্ঠীতে প্রকাশ পায়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q139",
        question: {
            en: "The \"additional benefit of protecting the user from contracting STIs and AIDS\" is a key advantage of condoms over many other contraceptive methods. This dual protection is critical because:",
            bn: "\"ব্যবহারকারীকে যৌনবাহিত সংক্রমণ (STIs) এবং এইডস থেকে রক্ষা করার অতিরিক্ত সুবিধা\" হল অন্যান্য অনেক গর্ভনিরোধক পদ্ধতির চেয়ে কনডমের একটি প্রধান সুবিধা। এই দ্বৈত সুরক্ষা গুরুত্বপূর্ণ কারণ:",
        },
        options: [
            { en: "All other contraceptive methods increase the risk of STIs.", bn: "অন্যান্য সমস্ত গর্ভনিরোধক পদ্ধতি STIs এর ঝুঁকি বাড়ায়।" },
            { en: "Many hormonal and intrauterine methods, while effective for contraception, offer no barrier against the exchange of bodily fluids that transmit STIs.", bn: "অনেক হরমোনাল এবং ইন্ট্রা-ইউটেরাইন পদ্ধতি, যদিও গর্ভনিরোধের জন্য কার্যকর, তবে STIs সংক্রমণকারী bodily fluid আদান-প্রদানের বিরুদ্ধে কোনো বাধা প্রদান করে না।" },
            { en: "STIs are only transmissible if pregnancy occurs.", bn: "STIs শুধুমাত্র গর্ভধারণ ঘটলে সংক্রমণযোগ্য।" },
            { en: "Condoms are the only 100% effective method against both pregnancy and STIs.", bn: "গর্ভধারণ এবং STIs উভয় ক্ষেত্রেই কনডম একমাত্র ১০০% কার্যকর পদ্ধতি।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q140",
        question: {
            en: "The success of an RCH programme in a society can also be indirectly measured by a reduction in practices like illegal MTPs and foetal sex determination. This indicates:",
            bn: "একটি সমাজে RCH কর্মসূচির সাফল্য অবৈধ MTP এবং ভ্রূণের লিঙ্গ নির্ধারণের মতো চর্চাগুলির হ্রাসের মাধ্যমেও পরোক্ষভাবে পরিমাপ করা যেতে পারে। এটি ইঙ্গিত করে:",
        },
        options: [
            { en: "A shift towards valuing male children more.", bn: "ছেলে শিশুদের বেশি মূল্যায়ন করার দিকে পরিবর্তন।" },
            { en: "Increased access to and acceptance of family planning, better maternal health, and a societal shift towards gender equality and valuing female children.", bn: "পরিবার পরিকল্পনা, উন্নত মাতৃস্বাস্থ্য এবং লিঙ্গ সমতা ও মেয়ে শিশুদের মূল্যয়ন করার দিকে সামাজিক পরিবর্তনের প্রতি বর্ধিত অ্যাক্সেস এবং গ্রহণ।" },
            { en: "Stricter law enforcement as the sole deterrent.", bn: "একমাত্র প্রতিবন্ধক হিসেবে কঠোর আইন প্রয়োগ।" },
            { en: "A decline in the overall birth rate due to economic factors alone.", bn: "কেবলমাত্র অর্থনৈতিক কারণের কারণে সামগ্রিক জন্মহার হ্রাস।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q141",
        question: {
            en: "Ecology studies the interactions among organisms and between the organism and its:",
            bn: "পরিবেশবিদ্যা জীবদের মধ্যে এবং জীব ও তার ____ এর মধ্যে মিথস্ক্রিয়া অধ্যয়ন করে:"
        },
        options: [
            { en: "Only other organisms", bn: "কেবল অন্যান্য জীব" },
            { en: "Only its physical environment", bn: "কেবল তার ভৌত পরিবেশ" },
            { en: "Its physical (abiotic) environment and other organisms (biotic)", bn: "তার ভৌত (অজৈব) পরিবেশ এবং অন্যান্য জীব (জৈব)" },
            { en: "Its internal organs", bn: "তার অভ্যন্তরীণ অঙ্গ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q142",
        question: {
            en: "Which of the following is NOT one of the four levels of biological organisation that ecology is basically concerned with?",
            bn: "নিম্নলিখিতগুলির মধ্যে কোনটি জীববৈজ্ঞানিক সংগঠনের চারটি স্তরের একটি নয় যা পরিবেশবিদ্যার সাথে মূলত সম্পর্কিত?"
        },
        options: [
            { en: "Organisms", bn: "জীব" },
            { en: "Populations", bn: "জনসংখ্যা" },
            { en: "Cells", bn: "কোষ" },
            { en: "Biomes", bn: "বায়োম" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q143",
        question: {
            en: "A group of individuals of the same species living in a well-defined geographical area, sharing or competing for resources, and potentially interbreeding is called a:",
            bn: "একটি সু-সংজ্ঞায়িত ভৌগোলিক এলাকায় বসবাসকারী একই প্রজাতির জীবগোষ্ঠী, যারা সংস্থান ভাগ করে নেয় বা প্রতিদ্বন্দ্বিতা করে এবং সম্ভাব্যভাবে আন্তঃপ্রজনন করে, তাকে কী বলা হয়?"
        },
        options: [
            { en: "Community", bn: "কমিউনিটি" },
            { en: "Population", bn: "পপুলেশন (জনসংখ্যা)" },
            { en: "Ecosystem", bn: "বাস্তুতন্ত্র" },
            { en: "Biome", bn: "বায়োম" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q144",
        question: {
            en: "Which of these is an attribute of a population but not of an individual organism?",
            bn: "এগুলোর মধ্যে কোনটি জনসংখ্যার একটি বৈশিষ্ট্য কিন্তু একটি একক জীবের নয়?"
        },
        options: [
            { en: "Birth", bn: "জন্ম" },
            { en: "Death", bn: "মৃত্যু" },
            { en: "Birth rate", bn: "জন্মহার" },
            { en: "Age", bn: "বয়স" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q145",
        question: {
            en: "If in a pond there were 20 lotus plants last year and 8 new plants are added through reproduction, the birth rate is:",
            bn: "যদি একটি পুকুরে গত বছর ২০টি পদ্ম গাছ ছিল এবং প্রজননের মাধ্যমে ৮টি নতুন গাছ যোগ করা হয়, তবে জন্মহার কত?"
        },
        options: [
            { en: "8 per year", bn: "বছরে ৮টি" },
            { en: "0.4 offspring per lotus per year", bn: "বছরে প্রতি পদ্মে ০.৪ টি সন্তান" },
            { en: "28 per year", bn: "বছরে ২৮টি" },
            { en: "0.2 offspring per lotus per year", bn: "বছরে প্রতি পদ্মে ০.২ টি সন্তান" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q146",
        question: {
            en: "An age pyramid with a broad base indicates that the population is:",
            bn: "প্রশস্ত ভিত্তিযুক্ত একটি বয়স পিরামিড নির্দেশ করে যে জনসংখ্যাটি:"
        },
        options: [
            { en: "Stable", bn: "স্থিতিশীল" },
            { en: "Declining", bn: "হ্রাসমান" },
            { en: "Growing (Expanding)", bn: "ক্রমবর্ধমান" },
            { en: "Senescent", bn: "বার্ধক্যপ্রাপ্ত" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q147",
        question: {
            en: "Population density is technically designated as:",
            bn: "জনসংখ্যার ঘনত্ব প্রযুক্তিগতভাবে কী হিসেবে মনোনীত?"
        },
        options: [
            { en: "P", bn: "P" },
            { en: "D", bn: "D" },
            { en: "N", bn: "N" },
            { en: "S", bn: "S" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q148",
        question: {
            en: "Which factor contributes to an increase in population density?",
            bn: "কোন কারণটি জনসংখ্যার ঘনত্ব বৃদ্ধিতে অবদান রাখে?"
        },
        options: [
            { en: "Mortality", bn: "মৃত্যুহার" },
            { en: "Emigration", bn: "বহির্গমন" },
            { en: "Natality", bn: "জন্মহার" },
            { en: "Predation pressure", bn: "শিকার চাপ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q149",
        question: {
            en: "The term 'r' in the population growth equation dN/dt = rN represents:",
            bn: "জনসংখ্যা বৃদ্ধির সমীকরণ dN/dt = rN এ 'r' কী নির্দেশ করে?"
        },
        options: [
            { en: "Carrying capacity", bn: "ক্যারিয়িং ক্যাপাসিটি" },
            { en: "Intrinsic rate of natural increase", bn: "অন্তর্নিহিত বৃদ্ধির হার" },
            { en: "Population density", bn: "জনসংখ্যার ঘনত্ব" },
            { en: "Death rate", bn: "মৃত্যুহার" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q150",
        question: {
            en: "When resources are unlimited, a population shows which type of growth?",
            bn: "যখন সম্পদ সীমাহীন, তখন জনসংখ্যা কোন ধরণের বৃদ্ধি দেখায়?"
        },
        options: [
            { en: "Logistic growth", bn: "লজিস্টিক বৃদ্ধি" },
            { en: "Exponential growth", bn: "এক্সপোনেনশিয়াল বৃদ্ধি" },
            { en: "Stable growth", bn: "স্থিতিশীল বৃদ্ধি" },
            { en: "Declining growth", bn: "হ্রাসমান বৃদ্ধি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q151",
        question: {
            en: "The logistic population growth curve is typically:",
            bn: "লজিস্টিক জনসংখ্যা বৃদ্ধির বক্ররেখা সাধারণত কেমন হয়?"
        },
        options: [
            { en: "J-shaped", bn: "J-আকৃতির" },
            { en: "S-shaped (sigmoid)", bn: "S-আকৃতির (সিগময়েড)" },
            { en: "U-shaped", bn: "U-আকৃতির" },
            { en: "L-shaped", bn: "L-আকৃতির" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q152",
        question: {
            en: "The maximum possible number of individuals a habitat can support is called its:",
            bn: "একটি habitat সর্বোচ্চ সম্ভাব্য সংখ্যক জীবকে সমর্থন করতে পারে, তাকে কী বলা হয়?"
        },
        options: [
            { en: "Biotic potential", bn: "বায়োটিক পটেনশিয়াল" },
            { en: "Intrinsic rate", bn: "অন্তর্নিহিত হার" },
            { en: "Carrying capacity (K)", bn: "ক্যারিয়িং ক্যাপাসিটি (K)" },
            { en: "Population size", bn: "জনসংখ্যার আকার" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q153",
        question: {
            en: "Organisms that breed only once in their lifetime include:",
            bn: "যে জীবগুলি তাদের জীবদ্দশায় কেবল একবার প্রজনন করে, তাদের মধ্যে অন্তর্ভুক্ত রয়েছে:"
        },
        options: [
            { en: "Most birds", bn: "বেশিরভাগ পাখি" },
            { en: "Most mammals", bn: "বেশিরভাগ স্তন্যপায়ী প্রাণী" },
            { en: "Pacific salmon fish and bamboo", bn: "প্যাসিফিক স্যামন মাছ এবং বাঁশ" },
            { en: "Oysters", bn: "ঝিনুক" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q154",
        question: {
            en: "Interspecific interactions arise from the interaction of populations of:",
            bn: "ইন্টারস্পেসিফিক ইন্টারঅ্যাকশনগুলি কোন জনসংখ্যার মিথস্ক্রিয়া থেকে উদ্ভূত হয়?"
        },
        options: [
            { en: "The same species", bn: "একই প্রজাতি" },
            { en: "Two different species", bn: "দুটি ভিন্ন প্রজাতি" },
            { en: "Multiple individuals of the same species", bn: "একই প্রজাতির একাধিক জীব" },
            { en: "Organisms and their abiotic environment", bn: "জীব এবং তাদের অজৈব পরিবেশ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q155",
        question: {
            en: "An interaction where both interacting species benefit is called:",
            bn: "একটি মিথস্ক্রিয়া যেখানে উভয় অংশগ্রহণকারী প্রজাতিই উপকৃত হয় তাকে কী বলা হয়?"
        },
        options: [
            { en: "Competition", bn: "প্রতিযোগিতা" },
            { en: "Predation", bn: "শিকার" },
            { en: "Mutualism", bn: "মিউচুয়ালিজম (সহযোগিতা)" },
            { en: "Amensalism", bn: "অ্যামেনসালিজম" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q156",
        question: {
            en: "An interaction where one species benefits and the other is harmed is:",
            bn: "একটি মিথস্ক্রিয়া যেখানে একটি প্রজাতি উপকৃত হয় এবং অন্যটি ক্ষতিগ্রস্ত হয় তাকে কী বলা হয়?"
        },
        options: [
            { en: "Mutualism", bn: "মিউচুয়ালিজম" },
            { en: "Commensalism", bn: "কমেনসালিজম" },
            { en: "Predation or Parasitism", bn: "শিকার বা পরজীবীতা" },
            { en: "Amensalism", bn: "অ্যামেনসালিজম" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q157",
        question: {
            en: "An interaction where one species benefits and the other is neither harmed nor benefited is called:",
            bn: "একটি মিথস্ক্রিয়া যেখানে একটি প্রজাতি উপকৃত হয় এবং অন্যটি ক্ষতিগ্রস্ত বা উপকৃত কোনটাই হয় না তাকে কী বলা হয়?"
        },
        options: [
            { en: "Mutualism", bn: "মিউচুয়ালিজম" },
            { en: "Commensalism", bn: "কমেনসালিজম" },
            { en: "Parasitism", bn: "পরজীবীতা" },
            { en: "Competition", bn: "প্রতিযোগিতা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q158",
        question: {
            en: "The Monarch butterfly is highly distasteful to its predator (bird) because:",
            bn: "মনার্ক প্রজাপতি তার শিকারী (পাখি) এর কাছে খুব অপ্রীতিকর কারণ:"
        },
        options: [
            { en: "It is camouflaged.", bn: "এটি ছদ্মবেশী।" },
            { en: "It has a special chemical present in its body.", bn: "এর শরীরে একটি বিশেষ রাসায়নিক পদার্থ রয়েছে।" },
            { en: "It flies too fast.", bn: "এটি খুব দ্রুত উড়ে।" },
            { en: "It has sharp thorns.", bn: "এটিতে তীক্ষ্ণ কাঁটা রয়েছে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q159",
        question: {
            en: "The most common morphological defense in plants like Acacia and Cactus is:",
            bn: "বাবলা এবং ক্যাকটাসের মতো উদ্ভিদের সবচেয়ে সাধারণ রূপগত প্রতিরক্ষা হল:"
        },
        options: [
            { en: "Chemical toxins", bn: "রাসায়নিক টক্সিন" },
            { en: "Thorns", bn: "কাঁটা" },
            { en: "Camouflage", bn: "ছদ্মবেশ" },
            { en: "Thick bark", bn: "পুরো ছাল" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q160",
        question: {
            en: "Gause's 'Competitive Exclusion Principle' states that two closely related species competing for the same resources cannot co-exist indefinitely if:",
            bn: "গসের 'প্রতিযোগিতামূলক বর্জন নীতি' বলে যে একই সম্পদের জন্য প্রতিদ্বন্দ্বিতাকারী দুটি ঘনিষ্ঠভাবে সম্পর্কিত প্রজাতি অনির্দিষ্টকালের জন্য সহাবস্থান করতে পারে না যদি:"
        },
        options: [
            { en: "Resources are abundant", bn: "সম্পদ প্রচুর" },
            { en: "One species is a predator", bn: "একটি প্রজাতি শিকারী" },
            { en: "Resources are limiting", bn: "সম্পদ সীমিত" },
            { en: "They live in different habitats", bn: "তারা ভিন্ন আবাসস্থলে বাস করে" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q161",
        question: {
            en: "Parasites that feed on the external surface of the host organism are called:",
            bn: "হোস্ট জীবের বাহ্যিক পৃষ্ঠে খাবার গ্রহণকারী পরজীবীদের বলা হয়:"
        },
        options: [
            { en: "Endoparasites", bn: "এন্ডোপ্যারাসাইট" },
            { en: "Brood parasites", bn: "ব্রুড প্যারাসাইট" },
            { en: "Ectoparasites", bn: "এক্টোপ্যারাসাইট" },
            { en: "Phytophagous parasites", bn: "ফাইটোফ্যাগাস প্যারাসাইট" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q162",
        question: {
            en: "An orchid growing as an epiphyte on a mango branch is an example of:",
            bn: "আম গাছের ডালে একটি অর্কিড epiphyte হিসাবে বেড়ে ওঠা একটি উদাহরণ হল:"
        },
        options: [
            { en: "Parasitism", bn: "পরজীবীতা" },
            { en: "Mutualism", bn: "মিউচুয়ালিজম" },
            { en: "Commensalism", bn: "কমেনসালিজম" },
            { en: "Competition", bn: "প্রতিযোগিতা" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q163",
        question: {
            en: "Mycorrhizae are associations between:",
            bn: "মাইকোরাইজা হলো ____ এর মধ্যেকার সংযোগ:"
        },
        options: [
            { en: "Fungi and algae", bn: "ছত্রাক এবং শৈবাল" },
            { en: "Fungi and roots of higher plants", bn: "ছত্রাক এবং উচ্চতর উদ্ভিদের মূল" },
            { en: "Bacteria and roots of higher plants", bn: "ব্যাকটেরিয়া এবং উচ্চতর উদ্ভিদের মূল" },
            { en: "Algae and roots of higher plants", bn: "শৈবাল এবং উচ্চতর উদ্ভিদের মূল" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q164",
        question: {
            en: "The Mediterranean orchid Ophrys employs what mechanism to get pollination done by a species of bee?",
            bn: "ভূমধ্যসাগরীয় অর্কিড Ophrys মৌমাছির একটি প্রজাতি দ্বারা পরাগায়ণ সম্পন্ন করার জন্য কোন কৌশল ব্যবহার করে?"
        },
        options: [
            { en: "Offering nectar", bn: "মধু প্রদান করে" },
            { en: "Offering pollen as food", bn: "খাবার হিসেবে পরাগ প্রদান করে" },
            { en: "Sexual deceit", bn: "যৌন প্রতারণা" },
            { en: "Brightly colored petals", bn: "উজ্জ্বল রঙের পাপড়ি" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q165",
        question: {
            en: "What does the term 'population' refer to in ecological studies?",
            bn: "পরিবেশবিদ্যা অধ্যয়নে 'পপুলেশন (জনসংখ্যা)' শব্দটি দ্বারা কী বোঝানো হয়?"
        },
        options: [
            { en: "All organisms in an ecosystem", bn: "একটি বাস্তুতন্ত্রের সমস্ত জীব" },
            { en: "A group of individuals of the same species in a defined area that can interbreed", bn: "একটি নির্দিষ্ট এলাকায় বসবাসকারী একই প্রজাতির জীবগোষ্ঠী যারা আন্তঃপ্রজনন করতে পারে" },
            { en: "All plant species in a forest", bn: "একটি বনের সমস্ত উদ্ভিদ প্রজাতি" },
            { en: "A collection of different communities", bn: "বিভিন্ন সম্প্রদায়ের একটি সংগ্রহ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q166",
        question: {
            en: "Why is population ecology an important area in ecology?",
            bn: "পরিবেশবিদ্যায় জনসংখ্যা পরিবেশবিদ্যা কেন একটি গুরুত্বপূর্ণ ক্ষেত্র?"
        },
        options: [
            { en: "It focuses only on individual organisms.", bn: "এটি কেবল পৃথক জীবের উপর মনোযোগ দেয়।" },
            { en: "It links ecology to population genetics and evolution.", bn: "এটি পরিবেশবিদ্যাকে জনসংখ্যা জিনবিদ্যা এবং বিবর্তনের সাথে যুক্ত করে।" },
            { en: "It primarily studies abiotic factors.", bn: "এটি মূলত অজৈব কারণগুলি অধ্যয়ন করে।" },
            { en: "It deals with the global distribution of biomes.", bn: "এটি বায়োমগুলির বৈশ্বিক বিতরণ নিয়ে কাজ করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q167",
        question: {
            en: "If 4 individuals in a laboratory population of 40 fruitflies died during a week, the death rate in the population during that period is:",
            bn: "যদি একটি পরীক্ষাগারের ৪০টি fruitflies এর জনসংখ্যার মধ্যে এক সপ্তাহে ৪টি fruitflies মারা যায়, তবে সেই সময়ের জনসংখ্যার মৃত্যুহার কত?"
        },
        options: [
            { en: "0.4 individuals per fruitfly per week", bn: "সপ্তাহে প্রতি fruitfly-এ ০.৪ জন জীব" },
            { en: "0.1 individuals per fruitfly per week", bn: "সপ্তাহে প্রতি fruitfly-এ ০.১ জন জীব" },
            { en: "4 individuals per week", bn: "সপ্তাহে ৪ জন জীব" },
            { en: "10 individuals per fruitfly per week", bn: "সপ্তাহে প্রতি fruitfly-এ ১০ জন জীব" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q168",
        question: {
            en: "When is using 'percent cover' or 'biomass' a more meaningful measure of population density than total number?",
            bn: "'পার্সেন্ট কভার' বা 'বায়োমাস' ব্যবহার করে জনসংখ্যার ঘনত্ব পরিমাপ মোট সংখ্যার চেয়ে কখন বেশি অর্থবহ হয়?"
        },
        options: [
            { en: "When the population is very small.", bn: "যখন জনসংখ্যা খুব ছোট।" },
            { en: "When individuals vary greatly in size, like a few large trees vs. many small grasses.", bn: "যখন জীবগুলি আকারে ব্যাপকভাবে পরিবর্তিত হয়, যেমন কয়েকটি বড় গাছ বনাম অনেক ছোট ঘাস।" },
            { en: "When counting is easy and not time-consuming.", bn: "যখন গণনা করা সহজ এবং সময়সাপেক্ষ নয়।" },
            { en: "When studying migratory bird populations.", bn: "যখন পরিযায়ী পাখির জনসংখ্যা অধ্যয়ন করা হয়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q169",
        question: {
            en: "Under normal conditions, which two factors are the most important in influencing population density changes?",
            bn: "স্বাভাবিক পরিস্থিতিতে, জনসংখ্যার ঘনত্ব পরিবর্তনের উপর প্রভাব ফেলতে কোন দুটি কারণ সবচেয়ে গুরুত্বপূর্ণ?"
        },
        options: [
            { en: "Immigration and Emigration", bn: "অভিবাসন এবং বহির্গমন" },
            { en: "Births and Deaths", bn: "জন্ম এবং মৃত্যু" },
            { en: "Predation and Resource availability", bn: "শিকার এবং সম্পদের সহজলভ্যতা" },
            { en: "Weather and Disease", bn: "আবহাওয়া এবং রোগ" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q170",
        question: {
            en: "The equation Nt+1 = Nt + [(B + I) – (D + E)] describes population growth. What does 'E' represent?",
            bn: "সমীকরণ Nt+1 = Nt + [(B + I) – (D + E)] জনসংখ্যা বৃদ্ধি বর্ণনা করে। 'E' কী বোঝায়?"
        },
        options: [
            { en: "Birth rate", bn: "জন্মহার" },
            { en: "Immigration", bn: "অভিবাসন" },
            { en: "Emigration", bn: "বহির্গমন" },
            { en: "Death rate", bn: "মৃত্যুহার" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q171",
        question: {
            en: "In the logistic growth equation dN/dt = rN ((K-N)/K), what does (K-N)/K represent?",
            bn: "লজিস্টিক বৃদ্ধি সমীকরণ dN/dt = rN ((K-N)/K) এ (K-N)/K কী নির্দেশ করে?"
        },
        options: [
            { en: "The intrinsic rate of increase", bn: "অন্তর্নিহিত বৃদ্ধির হার" },
            { en: "The available resources or environmental resistance limiting growth", bn: "উপলব্ধ সংস্থান বা পরিবেশগত প্রতিরোধ যা বৃদ্ধিকে সীমিত করে" },
            { en: "The current population size", bn: "বর্তমান জনসংখ্যার আকার" },
            { en: "The birth rate minus death rate", bn: "জন্মহার বিয়োগ মৃত্যুহার" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q172",
        question: {
            en: "Life history traits of organisms, such as breeding frequency and offspring size/number, are suggested by ecologists to have evolved in relation to:",
            bn: "জীবের জীবন ইতিহাস বৈশিষ্ট্য, যেমন প্রজনন ফ্রিকোয়েন্সি এবং offspring আকার/সংখ্যা, পরিবেশবিদদের দ্বারা ____ এর সাথে সম্পর্কিতভাবে বিবর্তিত হয়েছে বলে মনে করা হয়:"
        },
        options: [
            { en: "Only the genetic makeup of the species.", bn: "কেবলমাত্র প্রজাতির জেনেটিক গঠন।" },
            { en: "The constraints imposed by the abiotic and biotic components of their habitat.", bn: "তাদের আবাসস্থলের অজৈব এবং জৈব উপাদান দ্বারা আরোপিত সীমাবদ্ধতা।" },
            { en: "Random chance events only.", bn: "কেবলমাত্র এলোমেলো সুযোগের ঘটনা।" },
            { en: "The preferences of human breeders.", bn: "মানব প্রজননকারীদের পছন্দ।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q173",
        question: {
            en: "Predators play an important role in maintaining species diversity in a community by:",
            bn: "শিকারীরা একটি কমিউনিটিতে প্রজাতির বৈচিত্র্য বজায় রাখতে গুরুত্বপূর্ণ ভূমিকা পালন করে:"
        },
        options: [
            { en: "Increasing the population of all prey species.", bn: "সমস্ত শিকার প্রজাতির জনসংখ্যা বৃদ্ধি করে।" },
            { en: "Reducing the intensity of competition among competing prey species.", bn: "প্রতিদ্বন্দ্বী শিকার প্রজাতির মধ্যে প্রতিযোগিতার তীব্রতা হ্রাস করে।" },
            { en: "Exclusively feeding on dominant plant species.", bn: "একচেটিয়াভাবে প্রভাবশালী উদ্ভিদ প্রজাতির উপর খাবার গ্রহণ করে।" },
            { en: "Introducing new genetic variations into prey populations.", bn: "শিকার জনসংখ্যার মধ্যে নতুন জেনেটিক বৈচিত্র্য প্রবর্তন করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q174",
        question: {
            en: "The prickly pear cactus introduced into Australia was brought under control by:",
            bn: "অস্ট্রেলিয়াতে প্রবর্তিত কাঁটাযুক্ত নাশপাতি ক্যাকটাসকে ____ দ্বারা নিয়ন্ত্রণে আনা হয়েছিল:"
        },
        options: [
            { en: "Chemical pesticides", bn: "রাসায়নিক কীটনাশক" },
            { en: "A viral disease", bn: "একটি ভাইরাল রোগ" },
            { en: "A cactus-feeding predator (a moth) from its natural habitat", bn: "এর প্রাকৃতিক আবাসস্থল থেকে আসা একটি ক্যাকটাস-খাদক শিকারী (একটি মথ)" },
            { en: "Manual removal by humans", bn: "মানুষ দ্বারা হাতে অপসারণ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q175",
        question: {
            en: "Resource partitioning is a mechanism that can promote co-existence between competing species by:",
            bn: "রিসোর্স পার্টিশনিং এমন একটি ব্যবস্থা যা প্রতিদ্বন্দ্বী প্রজাতিগুলির মধ্যে সহাবস্থানকে উৎসাহিত করতে পারে এর মাধ্যমে:"
        },
        options: [
            { en: "One species eliminating the other.", bn: "একটি প্রজাতি অন্যটিকে নির্মূল করে।" },
            { en: "Both species increasing their resource consumption.", bn: "উভয় প্রজাতি তাদের সংস্থান ব্যবহার বৃদ্ধি করে।" },
            { en: "Species choosing different times for feeding or different foraging patterns for the same resource.", bn: "একই সম্পদের জন্য বিভিন্ন সময়ে খাবার নির্বাচন করা বা বিভিন্ন foraging প্যাটার্ন নির্বাচন করা।" },
            { en: "One species becoming parasitic on the other.", bn: "একটি প্রজাতি অন্যটির উপর পরজীবী হয়ে ওঠে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q176",
        question: {
            en: "Cuscuta, a parasitic plant, has lost which of the following during evolution?",
            bn: "Cuscuta, একটি পরজীবী উদ্ভিদ, বিবর্তনের সময় নিম্নলিখিতগুলির মধ্যে কোনটি হারিয়েছে?"
        },
        options: [
            { en: "Roots and flowers", bn: "মূল এবং ফুল" },
            { en: "Chlorophyll and leaves", bn: "ক্লোরোফিল এবং পাতা" },
            { en: "Stem and vascular tissue", bn: "কাণ্ড এবং ভাস্কুলার টিস্যু" },
            { en: "Reproductive structures", bn: "প্রজনন কাঠামো" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q177",
        question: {
            en: "In brood parasitism, how have the eggs of the parasitic bird (like cuckoo) often evolved?",
            bn: "ব্রুড প্যারাসিটিজমে, পরজীবী পাখির (যেমন কোকিল) ডিমগুলি প্রায়শই কীভাবে বিবর্তিত হয়েছে?"
        },
        options: [
            { en: "To be much larger and more colorful than the host's eggs.", bn: "হোস্টের ডিমের চেয়ে অনেক বড় এবং বেশি রঙিন হতে।" },
            { en: "To hatch much earlier than the host's eggs.", bn: "হোস্টের ডিমের চেয়ে অনেক আগে ডিম ফোটাতে।" },
            { en: "To resemble the host's egg in size and colour.", bn: "আকার এবং রঙে হোস্টের ডিমের মতো দেখতে হতে।" },
            { en: "To require no incubation by the host.", bn: "হোস্ট দ্বারা কোনো incubation এর প্রয়োজন না হতে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q178",
        question: {
            en: "The interaction between sea anemone and clown fish, where the fish gets protection and the anemone is apparently unaffected, is an example of:",
            bn: "সাগরের anemone এবং ক্লাউন মাছের মধ্যেকার মিথস্ক্রিয়া, যেখানে মাছ সুরক্ষা পায় এবং anemone দৃশ্যত অপ্রভাবিত থাকে, এটি কোনটির উদাহরণ?"
        },
        options: [
            { en: "Mutualism (+/+)", bn: "মিউচুয়ালিজম (+/+)" },
            { en: "Commensalism (+/0)", bn: "কমেনসালিজম (+/০)" },
            { en: "Amensalism (-/0)", bn: "অ্যামেনসালিজম (-/০)" },
            { en: "Parasitism (+/-)", bn: "পরজীবীতা (+/-)" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q179",
        question: {
            en: "In the mutualistic relationship between figs and wasps, what does the fig offer the wasp in return for pollination?",
            bn: "ডুমুর এবং বোলতাগুলির মধ্যে mutualistic সম্পর্কে, পরাগায়ণ করার বিনিময়ে ডুমুর বোলতাকে কী প্রদান করে?"
        },
        options: [
            { en: "Only nectar", bn: "কেবল মধু" },
            { en: "Only pollen", bn: "কেবল পরাগ" },
            { en: "Some of its developing seeds as food for wasp larvae and an oviposition site", bn: "বোলতার লার্ভাগুলির খাবার হিসেবে এর কিছু উন্নয়নশীল বীজ এবং ডিম পাড়ার একটি স্থান" },
            { en: "Protection from predators", bn: "শিকারী থেকে সুরক্ষা" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q180",
        question: {
            en: "The age pyramid for a declining human population typically has:",
            bn: "হ্রাসমান মানব জনসংখ্যার বয়স পিরামিড সাধারণত কেমন হয়?"
        },
        options: [
            { en: "A very broad base and rapidly tapering top.", bn: "একটি খুব প্রশস্ত ভিত্তি এবং দ্রুত সরু হওয়া উপরের অংশ।" },
            { en: "A relatively uniform distribution across age groups.", bn: "বয়স গোষ্ঠীর মধ্যে তুলনামূলকভাবে uniform বিতরণ।" },
            { en: "A narrow base and a broader top or middle section.", bn: "একটি সরু ভিত্তি এবং প্রশস্ত উপরের বা মধ্য অংশ।" },
            { en: "More males than females in all age groups.", bn: "সমস্ত বয়স গোষ্ঠীতে মহিলাদের চেয়ে বেশি পুরুষ।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q181",
        question: {
            en: "The concept of 'per capita' birth and death rates is crucial in population ecology because:",
            bn: "'পার ক্যাপিতা' জন্ম ও মৃত্যুর হারের ধারণা জনসংখ্যা পরিবেশবিদ্যায় গুরুত্বপূর্ণ কারণ:"
        },
        options: [
            { en: "It directly measures the total number of births and deaths.", bn: "এটি সরাসরি মোট জন্ম এবং মৃত্যুর সংখ্যা পরিমাপ করে।" },
            { en: "It allows comparison of population growth regardless of the absolute population size.", bn: "এটি জনসংখ্যার absolute আকার নির্বিশেষে জনসংখ্যা বৃদ্ধির তুলনা করার অনুমতি দেয়।" },
            { en: "It only applies to asexually reproducing organisms.", bn: "এটি কেবল অযৌন প্রজননকারী জীবদের জন্য প্রযোজ্য।" },
            { en: "It is easier to calculate than total births and deaths.", bn: "মোট জন্ম এবং মৃত্যুর চেয়ে এটি গণনা করা সহজ।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q182",
        question: {
            en: "The intrinsic rate of natural increase (r) is a key parameter for assessing impacts on population growth. A species with a high 'r' value under ideal conditions would:",
            bn: "অন্তর্নিহিত প্রাকৃতিক বৃদ্ধির হার (r) জনসংখ্যা বৃদ্ধির উপর প্রভাব মূল্যায়নের জন্য একটি মূল প্যারামিটার। আদর্শ পরিস্থিতিতে উচ্চ 'r' মান সহ একটি প্রজাতি কেমন হবে?"
        },
        options: [
            { en: "Have a very long generation time.", bn: "খুব দীর্ঘ generation time থাকবে।" },
            { en: "Experience rapid population growth.", bn: "দ্রুত জনসংখ্যা বৃদ্ধির অভিজ্ঞতা হবে।" },
            { en: "Be limited by carrying capacity even with abundant resources.", bn: "প্রচুর সম্পদ থাকলেও carrying capacity দ্বারা সীমিত হবে।" },
            { en: "Produce very few offspring per reproductive event.", bn: "প্রতি প্রজনন ইভেন্টে খুব কম offspring উৎপাদন করবে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q183",
        question: {
            en: "The anecdote of the king and the minister playing chess with wheat grains illustrates the concept of exponential growth. What key factor, often present in natural populations, is absent in this simplified model that allows such unchecked growth?",
            bn: "গম দানা দিয়ে রাজা ও মন্ত্রীর দাবা খেলার উপাখ্যানটি এক্সপোনেনশিয়াল বৃদ্ধির ধারণাটি ব্যাখ্যা করে। প্রাকৃতিক জনসংখ্যায় প্রায়শই উপস্থিত কোন মূল ফ্যাক্টর এই সরলীকৃত মডেলটিতে অনুপস্থিত যা এই ধরনের অবাধ বৃদ্ধি অনুমোদন করে?"
        },
        options: [
            { en: "Sexual reproduction", bn: "যৌন প্রজনন" },
            { en: "Limited resources and carrying capacity (K)", bn: "সীমিত সম্পদ এবং ক্যারিয়িং ক্যাপাসিটি (K)" },
            { en: "Genetic variation", bn: "জেনেটিক পরিবর্তন" },
            { en: "Predation", bn: "শিকার" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q184",
        question: {
            en: "Why is it that \"predators in nature are 'prudent'\"?",
            bn: "প্রকৃতিতে শিকারীরা কেন 'বিচক্ষণ' হয়?"
        },
        options: [
            { en: "They consciously decide to conserve prey populations.", bn: "তারা সচেতনভাবে শিকার জনসংখ্যা সংরক্ষণ করার সিদ্ধান্ত নেয়।" },
            { en: "If a predator is too efficient and overexploits its prey, the prey might become extinct, leading to the predator's own extinction due to lack of food.", bn: "যদি একজন শিকারী খুব দক্ষ হয় এবং তার শিকারকে অত্যধিক ব্যবহার করে, তবে শিকার বিলুপ্ত হতে পারে, যা খাদ্যাভাবের কারণে শিকারীর নিজেরও বিলুপ্তির দিকে পরিচালিত করে।" },
            { en: "Prey species have evolved perfect defense mechanisms.", bn: "শিকার প্রজাতিগুলি নিখুঁত প্রতিরক্ষা প্রক্রিয়া তৈরি করেছে।" },
            { en: "Predators only hunt old or sick individuals.", bn: "শিকারীরা কেবল বয়স্ক বা অসুস্থ জীব শিকার করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q185",
        question: {
            en: "Connell's field experiments with barnacles (Balanus and Chathamalus) demonstrated competitive exclusion. What was the key observation when the competitively superior Balanus was removed from the intertidal zone?",
            bn: "বারনাকল (Balanus এবং Chathamalus) নিয়ে কনেলের মাঠের পরীক্ষাগুলি প্রতিযোগিতামূলক বর্জন প্রদর্শন করে। যখন প্রতিযোগিতামূলকভাবে উচ্চতর Balanus intertidal zone থেকে সরানো হয়েছিল তখন মূল পর্যবেক্ষণটি কী ছিল?"
        },
        options: [
            { en: "Balanus populations from adjacent areas quickly recolonized.", bn: "সংলগ্ন এলাকার Balanus জনসংখ্যা দ্রুত পুনরায় উপনিবেশ স্থাপন করে।" },
            { en: "The distribution of Chathamalus expanded into the zone previously occupied by Balanus.", bn: "Chathamalus এর বিতরণ Balanus দ্বারা পূর্বে occupied zone-এ প্রসারিত হয়েছিল।" },
            { en: "Chathamalus also became extinct due to lack of competition.", bn: "প্রতিযোগিতার অভাবে Chathamalusও বিলুপ্ত হয়ে যায়।" },
            { en: "A new species of barnacle colonized the area.", bn: "বারনাকলের একটি নতুন প্রজাতি এলাকাটি উপনিবেশ স্থাপন করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q186",
        question: {
            en: "Why is the female mosquito, which requires our blood for reproduction, not considered a parasite in the typical ecological definition provided, while lice on humans are?",
            bn: "স্ত্রী মশা, যার প্রজননের জন্য আমাদের রক্তের প্রয়োজন, কেন প্রদত্ত সাধারণ পরিবেশগত সংজ্ঞায় পরজীবী হিসাবে বিবেচিত হয় না, যেখানে মানুষের উকুনকে পরজীবী ধরা হয়?"
        },
        options: [
            { en: "Mosquitoes do not live on the host continuously.", bn: "মশা হোস্টের উপর ক্রমাগত বাস করে না।" },
            { en: "Mosquitoes transmit diseases, whereas lice do not.", bn: "মশা রোগ ছড়ায়, যেখানে উকুন ছড়ায় না।" },
            { en: "The interaction with mosquitoes is brief and for a specific purpose (blood meal for egg production), not a sustained dependency for overall nutrition like lice.", bn: "মশার সাথে interaction সংক্ষিপ্ত এবং একটি নির্দিষ্ট উদ্দেশ্যে (ডিম উৎপাদনের জন্য রক্ত), উকুন এর মতো সামগ্রিক পুষ্টির জন্য একটি টেকসই নির্ভরশীলতা নয়।" },
            { en: "Lice cause more irritation than mosquitoes.", bn: "মশার চেয়ে উকুন বেশি irritation সৃষ্টি করে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q187",
        question: {
            en: "The tight one-to-one relationship between many fig species and their pollinator wasp species is an example of co-evolution. What would likely happen if the partner wasp species for a particular fig tree went extinct?",
            bn: "অনেক ডুমুর প্রজাতি এবং তাদের পরাগায়ণকারী বোলতা প্রজাতির মধ্যে tight one-to-one সম্পর্কটি সহ-বিবর্তনের একটি উদাহরণ। যদি একটি নির্দিষ্ট ডুমুর গাছের জন্য অংশীদার বোলতা প্রজাতি বিলুপ্ত হয়ে যায় তবে কী হওয়ার সম্ভাবনা রয়েছে?"
        },
        options: [
            { en: "The fig tree would be pollinated by other insect species.", bn: "ডুমুর গাছ অন্য পোকার প্রজাতি দ্বারা পরাগায়িত হবে।" },
            { en: "The fig tree would switch to wind pollination.", bn: "ডুমুর গাছ বায়ু পরাগায়ণে switch করবে।" },
            { en: "The fig tree would eventually fail to reproduce sexually and might face local extinction.", bn: "ডুমুর গাছ শেষ পর্যন্ত যৌন প্রজননে ব্যর্থ হবে এবং স্থানীয় বিলুপ্তির সম্মুখীন হতে পারে।" },
            { en: "The fig tree would develop parthenocarpic fruits.", bn: "ডুমুর গাছ parthenocarpic ফল তৈরি করবে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q188",
        question: {
            en: "Amensalism (-/0) is an interaction where one species is harmed, and the other is unaffected. Which of the following scenarios best exemplifies amensalism?",
            bn: "অ্যামেনসালিজম (-/০) হল এমন একটি মিথস্ক্রিয়া যেখানে একটি প্রজাতি ক্ষতিগ্রস্ত হয় এবং অন্যটি প্রভাবিত হয় না। নিম্নলিখিতscenarioগুলির মধ্যে কোনটি সবচেয়ে ভালোভাবে অ্যামেনসালিজমকে ব্যাখ্যা করে?"
        },
        options: [
            { en: "A large tree shading out smaller plants growing beneath it.", bn: "একটি বড় গাছ তার নিচে জন্মানো ছোট গাছপালাকে shading করে।" },
            { en: "A lion hunting a zebra.", bn: "একটি সিংহ একটি জেব্রাকে শিকার করছে।" },
            { en: "Fungi decomposing dead organic matter.", bn: "ছত্রাক মৃত জৈব পদার্থ decompose করছে।" },
            { en: "Bees pollinating flowers while collecting nectar.", bn: "মৌমাছি মধু সংগ্রহের সময় ফুলের পরাগায়ন করছে।" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q189",
        question: {
            en: "In logistic growth, the population growth rate (dN/dt) is highest when:",
            bn: "লজিস্টিক বৃদ্ধিতে, জনসংখ্যা বৃদ্ধির হার (dN/dt) সর্বোচ্চ হয় যখন:"
        },
        options: [
            { en: "N is very close to K", bn: "N, K এর খুব কাছাকাছি" },
            { en: "N is very small (close to 0)", bn: "N খুব ছোট (০ এর কাছাকাছি)" },
            { en: "N = K/2", bn: "N = K/2" },
            { en: "N > K", bn: "N > K" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q190",
        question: {
            en: "Considering life history variations, organisms like oysters producing a large number of small-sized offspring typically exhibit:",
            bn: "জীবন ইতিহাসের তারতম্য বিবেচনা করে, ঝিনুকের মতো জীব যারা প্রচুর সংখ্যক ছোট আকারের offspring উৎপাদন করে, তারা সাধারণত প্রদর্শন করে:"
        },
        options: [
            { en: "High parental care and low offspring mortality.", bn: "উচ্চ parental care এবং low offspring mortality।" },
            { en: "Low parental care and high offspring mortality, relying on sheer numbers for some to survive.", bn: "low parental care এবং high offspring mortality, কিছু surviving এর জন্য sheer সংখ্যার উপর নির্ভর করে।" },
            { en: "K-selected strategy with stable population sizes.", bn: "স্থিতিশীল জনসংখ্যার আকার সহ K-নির্বাচিত কৌশল।" },
            { en: "A single, massive reproductive event followed by death.", bn: "মৃত্যুর পর একটি একক, massive প্রজনন ইভেন্ট।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q191",
        question: {
            en: "The shift from a J-shaped exponential growth curve to an S-shaped logistic growth curve for a population implies the increasing influence of:",
            bn: "জনসংখ্যার জন্য J-আকৃতির এক্সপোনেনশিয়াল বৃদ্ধি বক্ররেখা থেকে S-আকৃতির লজিস্টিক বৃদ্ধি বক্ররেখার পরিবর্তন বোঝায় ____ এর ক্রমবর্ধমান প্রভাব:"
        },
        options: [
            { en: "A constant intrinsic rate of natural increase.", bn: "প্রাকৃতিক বৃদ্ধির একটি ধ্রুবক অন্তর্নিহিত হার।" },
            { en: "Density-dependent factors and environmental resistance as the population approaches carrying capacity.", bn: "ঘনত্ব-নির্ভর কারণ এবং পরিবেশগত প্রতিরোধ যখন জনসংখ্যা carrying capacity এর কাছাকাছি আসে।" },
            { en: "Density-independent factors becoming less severe.", bn: "ঘনত্ব-স্বাধীন কারণগুলির তীব্রতা কমছে।" },
            { en: "A sudden increase in resource availability.", bn: "সম্পদের সহজলভ্যতা হঠাৎ বৃদ্ধি।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q192",
        question: {
            en: "\"For any species, the minimal requirement is one more species on which it can feed. Even a plant species...needs soil microbes...\" This statement underscores the concept of:",
            bn: "\"যে কোনো প্রজাতির জন্য, ন্যূনতম প্রয়োজন হল আরও একটি প্রজাতি যার উপর এটি খাদ্য গ্রহণ করতে পারে। এমনকি একটি উদ্ভিদ প্রজাতি...মাটির জীবাণু প্রয়োজন...\" এই বিবৃতিটি ____ এর ধারণাটিকে গুরুত্ব দেয়:"
        },
        options: [
            { en: "The inherent stability of single-species ecosystems.", bn: "একক-প্রজাতি বাস্তুতন্ত্রের সহজাত স্থিতিশীলতা।" },
            { en: "The fundamental interconnectedness and interdependencies within biological communities, making true isolation impossible.", bn: "জৈবিক সম্প্রদায়ের মধ্যে মৌলিক আন্তঃসংযোগ এবং পারস্পরিক নির্ভরশীলতা, যা প্রকৃত বিচ্ছিন্নতাকে অসম্ভব করে তোলে।" },
            { en: "The dominance of competitive interactions in shaping communities.", bn: "সম্প্রদায় গঠনে প্রতিযোগিতামূলক মিথস্ক্রিয়ার আধিপত্য।" },
            { en: "The self-sufficiency of autotrophic organisms.", bn: "স্বভোজী জীবদের স্বাবলম্বিতা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q193",
        question: {
            en: "The Monarch butterfly acquires its distasteful chemical by feeding on a poisonous weed during its caterpillar stage. This is an evolutionary strategy where the butterfly:",
            bn: "মনার্ক প্রজাপতি তার শুঁয়োপোকা পর্যায়ে বিষাক্ত আগাছা খেয়ে তার অপ্রীতিকর রাসায়নিক পদার্থ অর্জন করে। এটি একটি বিবর্তনীয় কৌশল যেখানে প্রজাপতি:"
        },
        options: [
            { en: "Synthesizes the toxin de novo.", bn: "নতুন করে টক্সিন সংশ্লেষণ করে।" },
            { en: "Sequesters and utilizes a pre-existing plant defense chemical for its own protection.", bn: "তার নিজের সুরক্ষার জন্য একটি পূর্ব-বিদ্যমান উদ্ভিদ প্রতিরক্ষা রাসায়নিককে sequester করে এবং ব্যবহার করে।" },
            { en: "Evolves mimicry of a poisonous plant.", bn: "একটি বিষাক্ত উদ্ভিদের অনুকরণে বিবর্তিত হয়।" },
            { en: "Develops an immune response to plant toxins.", bn: "উদ্ভিদ টক্সিনের প্রতি একটি অনাক্রম্য প্রতিক্রিয়া বিকাশ করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q194",
        question: {
            en: "MacArthur's study on warblers co-existing on the same tree by partitioning resources (different feeding times/foraging patterns) suggests that interspecific competition can drive:",
            bn: "একই গাছে warblers এর সহাবস্থান নিয়ে ম্যাকআর্থারের অধ্যয়ন সম্পদ ভাগ করে নেওয়ার (ভিন্ন খাবার সময়/foraging প্যাটার্ন) মাধ্যমে ইঙ্গিত করে যে interspecific প্রতিযোগিতা ____ কে চালিত করতে পারে:"
        },
        options: [
            { en: "Competitive exclusion of all but one species.", bn: "কেবল একটি প্রজাতি ছাড়া বাকি সকলের প্রতিযোগিতামূলক বর্জন।" },
            { en: "Niche differentiation and character displacement, allowing for co-existence.", bn: "নিশ ডিফারেনসিয়েশন এবং ক্যারেক্টার ডিসপ্লেসমেন্ট, যা সহাবস্থানকে সম্ভব করে তোলে।" },
            { en: "Mutualistic relationships between the warbler species.", bn: "warbler প্রজাতির মধ্যে mutualistic সম্পর্ক।" },
            { en: "An increase in the carrying capacity for each warbler species.", bn: "প্রতিটি warbler প্রজাতির জন্য carrying capacity এর বৃদ্ধি।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q195",
        question: {
            en: "The evolution of host-specificity in many parasites, leading to co-evolution, implies a dynamic \"arms race\" where:",
            bn: "অনেক পরজীবীর মধ্যে host-specificity এর বিবর্তন, যা সহ-বিবর্তনের দিকে পরিচালিত করে, একটি dynamic \"arms race\" বোঝায় যেখানে:"
        },
        options: [
            { en: "The parasite always gains the upper hand, leading to host extinction.", bn: "পরজীবী সর্বদা উপরের হাত লাভ করে, যা হোস্ট বিলুপ্তির দিকে পরিচালিত করে।" },
            { en: "The host always evolves perfect resistance, leading to parasite extinction.", bn: "হোস্ট সর্বদা নিখুঁত প্রতিরোধের বিবর্তন ঘটায়, যা পরজীবী বিলুপ্তির দিকে পরিচালিত করে।" },
            { en: "Reciprocal selective pressures drive adaptations in both host (e.g., resistance mechanisms) and parasite (e.g., mechanisms to evade host defenses).", bn: "পারস্পরিক নির্বাচনমূলক চাপ হোস্ট (যেমন, প্রতিরোধ প্রক্রিয়া) এবং পরজীবী (যেমন, হোস্ট প্রতিরক্ষা এড়াতে প্রক্রিয়া) উভয়ের মধ্যে অভিযোজন চালিত করে।" },
            { en: "Both host and parasite evolve towards a mutualistic relationship.", bn: "হোস্ট এবং পরজীবী উভয়ই mutualistic সম্পর্কের দিকে বিবর্তিত হয়।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q196",
        question: {
            en: "The \"sexual deceit\" employed by the orchid Ophrys relies on the male bee's misidentification. If the female bee's color patterns change significantly due to natural selection for other reasons (e.g., camouflage), what is the most likely long-term consequence for the orchid-bee pollination system unless the orchid co-evolves?",
            bn: "Ophrys অর্কিড দ্বারা ব্যবহৃত \"যৌন প্রতারণা\" পুরুষ মৌমাছির misidentification এর উপর নির্ভর করে। যদি অন্য কারণের জন্য প্রাকৃতিক নির্বাচনের কারণে স্ত্রী মৌমাছির রঙের প্যাটার্ন উল্লেখযোগ্যভাবে পরিবর্তিত হয় (যেমন, camouflage), তবে অর্কিড co-evolve না করলে অর্কিড-মৌমাছি পরাগায়ন পদ্ধতির জন্য সবচেয়ে সম্ভাব্য দীর্ঘমেয়াদী ফলাফল কী হবে?"
        },
        options: [
            { en: "The male bees will learn to pollinate other flower types.", bn: "পুরুষ মৌমাছিরা অন্য ধরণের ফুলের পরাগায়ন শিখবে।" },
            { en: "The orchid's pollination success will decline, potentially leading to selection pressure for the orchid to match the new female bee pattern or find alternative pollinators.", bn: "অর্কিডের পরাগায়নের সাফল্য হ্রাস পাবে, সম্ভাব্যভাবে অর্কিডের জন্য নতুন স্ত্রী মৌমাছির প্যাটার্নের সাথে মেলানোর জন্য বা বিকল্প পরাগায়ণকারী খুঁজে বের করার জন্য selection pressure সৃষ্টি হবে।" },
            { en: "The female bees will start pollinating the orchid.", bn: "স্ত্রী মৌমাছিরা অর্কিডের পরাগায়ন শুরু করবে।" },
            { en: "The orchid will switch to self-pollination.", bn: "অর্কিড self-pollination এ switch করবে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q197",
        question: {
            en: "Population density can be measured in terms of biomass. For an ecological study assessing the impact of a nutrient pollutant on a lake's primary producers (phytoplankton), why might biomass be a more informative measure than just the number of individuals?",
            bn: "জনসংখ্যার ঘনত্ব বায়োমাস হিসাবে পরিমাপ করা যেতে পারে। একটি হ্রদের প্রাথমিক উৎপাদকদের (ফাইটোপ্ল্যাঙ্কটন) উপর একটি পুষ্টি দূষণকারীর প্রভাব মূল্যায়নের জন্য একটি পরিবেশগত অধ্যয়নের ক্ষেত্রে, কেন বায়োমাস কেবলমাত্র জীবের সংখ্যার চেয়ে বেশি তথ্যপূর্ণ পরিমাপ হতে পারে?"
        },
        options: [
            { en: "Phytoplankton cells are too small to count accurately.", bn: "ফাইটোপ্ল্যাঙ্কটন কোষগুলি সঠিকভাবে গণনা করার জন্য খুব ছোট।" },
            { en: "Biomass directly reflects the energy captured and stored, and individual cell sizes can vary greatly with nutrient availability, affecting total productivity even if numbers don't change proportionally.", bn: "বায়োমাস সরাসরি energy capture এবং stored হওয়াকে প্রতিফলিত করে, এবং individual cell sizes পুষ্টির সহজলভ্যতা অনুযায়ী ব্যাপকভাবে পরিবর্তিত হতে পারে, সংখ্যা আনুপাতিকভাবে পরিবর্তিত না হলেও মোট উৎপাদনশীলতাকে প্রভাবিত করে।" },
            { en: "Biomass is easier to measure for aquatic organisms.", bn: "জলজ জীবের জন্য বায়োমাস পরিমাপ করা সহজ।" },
            { en: "Number of individuals always overestimates the ecological role.", bn: "জীবের সংখ্যা সর্বদা পরিবেশগত ভূমিকাকে অতিরিক্ত অনুমান করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q198",
        question: {
            en: "The Verhulst-Pearl Logistic Growth equation (dN/dt = rN((K-N)/K)) models a population where growth slows as it approaches K. This slowing is attributed to \"environmental resistance.\" Which of these is a primary component of this resistance?",
            bn: "ভারহুলস্ট-পার্ল লজিস্টিক গ্রোথ সমীকরণ (dN/dt = rN((K-N)/K)) একটি জনসংখ্যার মডেল তৈরি করে যেখানে K-এর কাছাকাছি পৌঁছানোর সাথে সাথে বৃদ্ধি কমে যায়। এই ধীরগতিকে \"পরিবেশগত প্রতিরোধ\" এর জন্য দায়ী করা হয়। এই প্রতিরোধের একটি প্রাথমিক উপাদান কোনটি?"
        },
        options: [
            { en: "An increase in the intrinsic rate of natural increase (r).", bn: "প্রাকৃতিক বৃদ্ধির অন্তর্নিহিত হারের (r) বৃদ্ধি।" },
            { en: "Increased availability of food and space.", bn: "খাবার এবং স্থানের সহজলভ্যতা বৃদ্ধি।" },
            { en: "Accumulation of waste products, increased competition for limited resources, and higher susceptibility to predation or disease.", bn: "বর্জ্য পদার্থের সঞ্চয়, সীমিত সংস্থানের জন্য প্রতিযোগিতা বৃদ্ধি, এবং শিকার বা রোগের প্রতি উচ্চতর সংবেদনশীলতা।" },
            { en: "A decrease in the generation time of the species.", bn: "প্রজাতির generation time হ্রাস।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q199",
        question: {
            en: "In the context of interspecific competition, \"interference competition\" differs from \"exploitation competition\" (resource competition) in that:",
            bn: "ইন্টারস্পেসিফিক প্রতিযোগিতার প্রেক্ষাপটে, \"ইন্টারফারেন্স প্রতিযোগিতা\" \"exploitation প্রতিযোগিতা\" (সংস্থান প্রতিযোগিতা) থেকে ভিন্ন কারণ:"
        },
        options: [
            { en: "Interference competition only occurs when resources are extremely scarce.", bn: "ইন্টারফারেন্স প্রতিযোগিতা কেবল তখনই ঘটে যখন সংস্থান অত্যন্ত দুষ্প্রাপ্য।" },
            { en: "Interference competition involves direct antagonistic interactions (e.g., territoriality, release of toxins) between individuals, reducing access to resources even if those resources are not limiting.", bn: "ইন্টারফারেন্স প্রতিযোগিতায় জীবদের মধ্যে সরাসরি antagonistic মিথস্ক্রিয়া (যেমন, territoriality, টক্সিন নিঃসরণ) জড়িত থাকে, যা সংস্থান সীমিত না হলেও সেগুলিতে প্রবেশাধিকার হ্রাস করে।" },
            { en: "Exploitation competition always leads to the extinction of one species.", bn: "Exploitation প্রতিযোগিতা সর্বদা একটি প্রজাতির বিলুপ্তির দিকে পরিচালিত করে।" },
            { en: "Interference competition is only observed between closely related species.", bn: "ইন্টারফারেন্স প্রতিযোগিতা কেবল ঘনিষ্ঠভাবে সম্পর্কিত প্রজাতির মধ্যে দেখা যায়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q200",
        question: {
            en: "Ramdeo Misra is revered as the Father of Ecology in India. His research laid foundations for understanding tropical communities and their succession, environmental responses of plant populations, and productivity/nutrient cycling. This holistic approach emphasizes ecology as a science of:",
            bn: "রামদেও মিশ্রকে ভারতে পরিবেশবিদ্যার জনক হিসেবে শ্রদ্ধা করা হয়। তাঁর গবেষণা গ্রীষ্মমন্ডলীয় কমিউনিটি এবং তাদের succession, উদ্ভিদের জনসংখ্যার পরিবেশগত প্রতিক্রিয়া, এবং উৎপাদনশীলতা/পুষ্টি চক্র বোঝার ভিত্তি স্থাপন করেছে। এই holistic পদ্ধতি পরিবেশবিদ্যাকে ____ এর বিজ্ঞান হিসাবে গুরুত্ব দেয়:"
        },
        options: [
            { en: "Merely cataloging species.", bn: "কেবলমাত্র প্রজাতি তালিকাভুক্ত করা।" },
            { en: "Understanding the complex interactions and processes within and between different levels of biological organization and their environment.", bn: "বিভিন্ন স্তরের জৈবিক সংগঠন এবং তাদের পরিবেশের মধ্যে এবং তাদের মধ্যে জটিল মিথস্ক্রিয়া এবং প্রক্রিয়াগুলি বোঝা।" },
            { en: "Focusing solely on the impact of pollution.", bn: "কেবলমাত্র দূষণের প্রভাবের উপর মনোযোগ দেওয়া।" },
            { en: "Developing genetically modified organisms for environmental benefit.", bn: "পরিবেশগত সুবিধার জন্য জেনেটিকালি পরিবর্তিত জীব বিকাশ করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q201",
        question: {
            en: "An ecosystem is visualized as a functional unit of nature where:",
            bn: "একটি বাস্তুতন্ত্রকে প্রকৃতির একটি কার্যকরী একক হিসাবে কল্পনা করা হয় যেখানে:"
        },
        options: [
            { en: "Only living organisms interact.", bn: "কেবলমাত্র জীবন্ত জীব interact করে।" },
            { en: "Only abiotic factors are considered.", bn: "কেবলমাত্র অজৈব কারণগুলি বিবেচনা করা হয়।" },
            { en: "Living organisms interact among themselves and with the surrounding physical environment.", bn: "জীবন্ত জীবগুলি নিজেরা এবং চারপাশের ভৌত পরিবেশের সাথে interact করে।" },
            { en: "Only plant life is studied.", bn: "কেবলমাত্র উদ্ভিদ জীবন অধ্যয়ন করা হয়।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q202",
        question: {
            en: "Which of the following is an example of a terrestrial ecosystem?",
            bn: "নিম্নলিখিতগুলির মধ্যে কোনটি একটি স্থলজ বাস্তুতন্ত্রের উদাহরণ?"
        },
        options: [
            { en: "Pond", bn: "পুকুর" },
            { en: "River", bn: "নদী" },
            { en: "Forest", bn: "বন" },
            { en: "Estuary", bn: "মোহনা" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q203",
        question: {
            en: "Which of the following is an example of an aquatic ecosystem?",
            bn: "নিম্নলিখিতগুলির মধ্যে কোনটি একটি জলজ বাস্তুতন্ত্রের উদাহরণ?"
        },
        options: [
            { en: "Grassland", bn: "ঘাসভূমি" },
            { en: "Desert", bn: "মরুভূমি" },
            { en: "Crop field", bn: "ফসলের ক্ষেত্র" },
            { en: "Lake", bn: "হ্রদ" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q204",
        question: {
            en: "Vertical distribution of different species occupying different levels in an ecosystem is called:",
            bn: "একটি বাস্তুতন্ত্রে বিভিন্ন স্তরে বসবাসকারী বিভিন্ন প্রজাতির উল্লম্ব বিতরণকে কী বলা হয়?"
        },
        options: [
            { en: "Species composition", bn: "প্রজাতি গঠন" },
            { en: "Stratification", bn: "স্তরায়ন" },
            { en: "Niche differentiation", bn: "নিশ ডিফারেন্সিয়েশন" },
            { en: "Food web", bn: "খাদ্য জাল" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q205",
        question: {
            en: "Which of the following is NOT one of the four basic components/aspects of an ecosystem considered for its functioning?",
            bn: "নিম্নলিখিতগুলির মধ্যে কোনটি একটি বাস্তুতন্ত্রের কার্যকারিতার জন্য বিবেচিত চারটি মৌলিক উপাদান/দিকগুলির মধ্যে একটি নয়?"
        },
        options: [
            { en: "Productivity", bn: "উৎপাদনশীলতা" },
            { en: "Decomposition", bn: "বিয়োজন" },
            { en: "Species richness", bn: "প্রজাতি সমৃদ্ধি" },
            { en: "Energy flow", bn: "শক্তি প্রবাহ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q206",
        question: {
            en: "In a pond ecosystem, the abiotic component includes:",
            bn: "একটি পুকুরের বাস্তুতন্ত্রে, অজৈব উপাদানের মধ্যে অন্তর্ভুক্ত রয়েছে:"
        },
        options: [
            { en: "Phytoplankton and algae", bn: "ফাইটোপ্ল্যাঙ্কটন এবং শৈবাল" },
            { en: "Zooplankton and free-swimming forms", bn: "জুপ্ল্যাঙ্কটন এবং মুক্ত-সাঁতার কাটা জীব" },
            { en: "Water with dissolved substances and soil deposit", bn: "দ্রবীভূত পদার্থ এবং মাটির তলানি সহ জল" },
            { en: "Fungi and bacteria", bn: "ছত্রাক এবং ব্যাকটেরিয়া" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q207",
        question: {
            en: "The autotrophic components in a pond ecosystem typically include:",
            bn: "একটি পুকুরের বাস্তুতন্ত্রে autotrophic উপাদানগুলির মধ্যে সাধারণত অন্তর্ভুক্ত রয়েছে:"
        },
        options: [
            { en: "Zooplankton", bn: "জুপ্ল্যাঙ্কটন" },
            { en: "Fungi and bacteria", bn: "ছত্রাক এবং ব্যাকটেরিয়া" },
            { en: "Phytoplankton, algae, and marginal plants", bn: "ফাইটোপ্ল্যাঙ্কটন, শৈবাল এবং marginal উদ্ভিদ" },
            { en: "Bottom dwelling fish", bn: "তলদেশে বসবাসকারী মাছ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q208",
        question: {
            en: "Primary production is defined as the amount of biomass or organic matter produced per unit area over a time period by:",
            bn: "প্রাথমিক উৎপাদনকে একটি নির্দিষ্ট সময়ের মধ্যে প্রতি একক এলাকা দ্বারা উৎপাদিত বায়োমাস বা জৈব পদার্থের পরিমাণ হিসাবে সংজ্ঞায়িত করা হয়:",
        },
        options: [
            { en: "Consumers", bn: "খাদক" },
            { en: "Decomposers", bn: "বিয়োজক" },
            { en: "Plants during photosynthesis", bn: "সালোকসংশ্লেষণের সময় উদ্ভিদ" },
            { en: "Herbivores", bn: "তৃণভোজী" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q209",
        question: {
            en: "The rate of biomass production is called:",
            bn: "বায়োমাস উৎপাদনের হারকে কী বলা হয়?"
        },
        options: [
            { en: "Decomposition rate", bn: "বিয়োজন হার" },
            { en: "Standing crop", bn: "স্ট্যান্ডিং ক্রপ" },
            { en: "Productivity", bn: "উৎপাদনশীলতা" },
            { en: "Respiration rate", bn: "শ্বসন হার" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q210",
        question: {
            en: "Gross Primary Productivity (GPP) minus respiration losses (R) is:",
            bn: "মোট প্রাথমিক উৎপাদনশীলতা (GPP) বিয়োগ শ্বসন ক্ষতি (R) হল:"
        },
        options: [
            { en: "Secondary Productivity", bn: "সেকেন্ডারি উৎপাদনশীলতা" },
            { en: "Net Primary Productivity (NPP)", bn: "নেট প্রাথমিক উৎপাদনশীলতা (NPP)" },
            { en: "Decomposition rate", bn: "বিয়োজন হার" },
            { en: "Standing state", bn: "স্ট্যান্ডিং স্টেট" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q211",
        question: {
            en: "Secondary productivity is defined as the rate of formation of new organic matter by:",
            bn: "সেকেন্ডারি উৎপাদনশীলতা ____ দ্বারা নতুন জৈব পদার্থ গঠনের হার হিসাবে সংজ্ঞায়িত করা হয়:"
        },
        options: [
            { en: "Producers", bn: "উৎপাদক" },
            { en: "Decomposers", bn: "বিয়োজক" },
            { en: "Consumers", bn: "খাদক" },
            { en: "Sunlight", bn: "সূর্যের আলো" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q212",
        question: {
            en: "The process of breakdown of complex organic matter into inorganic substances like CO2, water, and nutrients is called:",
            bn: "জটিল জৈব পদার্থকে CO2, জল এবং পুষ্টি উপাদানের মতো অজৈব পদার্থে ভেঙে ফেলার প্রক্রিয়াকে কী বলা হয়?"
        },
        options: [
            { en: "Productivity", bn: "উৎপাদনশীলতা" },
            { en: "Stratification", bn: "স্তরায়ন" },
            { en: "Decomposition", bn: "বিয়োজন" },
            { en: "Eutrophication", bn: "ইউট্রোফিকেশন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q213",
        question: {
            en: "Dead plant remains such as leaves, bark, flowers, and dead remains of animals, including fecal matter, constitute:",
            bn: "মৃত উদ্ভিদের অংশ যেমন পাতা, ছাল, ফুল, এবং প্রাণীর মৃতাবশেষ, মল সহ, কী গঠন করে?"
        },
        options: [
            { en: "Humus", bn: "হিউমাস" },
            { en: "Detritus", bn: "ডেট্রাইটাস" },
            { en: "Litter", bn: "লিটার" },
            { en: "Biomass", bn: "বায়োমাস" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q214",
        question: {
            en: "The process by which detritivores (e.g., earthworm) break down detritus into smaller particles is called:",
            bn: "যে প্রক্রিয়ার মাধ্যমে detritivores (যেমন, কেঁচো) detritus কে ছোট ছোট কণায়ে ভেঙে ফেলে তাকে কী বলা হয়?"
        },
        options: [
            { en: "Leaching", bn: "লিচিং" },
            { en: "Catabolism", bn: "ক্যাটাবোলিজম" },
            { en: "Humification", bn: "হিউমিফিকেশন" },
            { en: "Fragmentation", bn: "খণ্ডিতকরণ" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q215",
        question: {
            en: "The process by which water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts is called:",
            bn: "যে প্রক্রিয়ার মাধ্যমে জলে দ্রবণীয় অজৈব পুষ্টি উপাদানগুলি মাটির স্তরে নেমে যায় এবং অনুপলব্ধ লবণ হিসাবে জমা হয় তাকে কী বলা হয়?"
        },
        options: [
            { en: "Fragmentation", bn: "খণ্ডিতকরণ" },
            { en: "Leaching", bn: "লিচিং" },
            { en: "Catabolism", bn: "ক্যাটাবোলিজম" },
            { en: "Mineralisation", bn: "মিনারেলিজেশন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q216",
        question: {
            en: "Humification leads to the accumulation of a dark-colored amorphous substance called:",
            bn: "হিউমিফিকেশন একটি গাঢ় রঙের amorphous পদার্থের সঞ্চয়ের দিকে পরিচালিত করে যাকে বলা হয়:"
        },
        options: [
            { en: "Detritus", bn: "ডেট্রাইটাস" },
            { en: "Litter", bn: "লিটার" },
            { en: "Humus", bn: "হিউমাস" },
            { en: "Minerals", bn: "খনিজ পদার্থ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q217",
        question: {
            en: "The process by which humus is further degraded by some microbes, releasing inorganic nutrients, is known as:",
            bn: "যে প্রক্রিয়ার মাধ্যমে হিউমাস কিছু জীবাণু দ্বারা আরও degraded হয়, অজৈব পুষ্টি উপাদানগুলি release করে, তাকে কী বলা হয়?"
        },
        options: [
            { en: "Humification", bn: "হিউমিফিকেশন" },
            { en: "Fragmentation", bn: "খণ্ডিতকরণ" },
            { en: "Leaching", bn: "লিচিং" },
            { en: "Mineralisation", bn: "মিনারেলিজেশন" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q218",
        question: {
            en: "What is the ultimate source of energy for all ecosystems on Earth, except for deep-sea hydrothermal ecosystems?",
            bn: "পৃথিবীর সমস্ত বাস্তুতন্ত্রের (deep-sea hydrothermal বাস্তুতন্ত্র ব্যতীত) শক্তির চূড়ান্ত উৎস কী?"
        },
        options: [
            { en: "Wind", bn: "বায়ু" },
            { en: "Water", bn: "জল" },
            { en: "Sun", bn: "সূর্য" },
            { en: "Geothermal heat", bn: "ভূতাপীয় তাপ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q219",
        question: {
            en: "Photosynthetically Active Radiation (PAR) constitutes what percentage of the incident solar radiation?",
            bn: "ফটোসিন্থেটিকভাবে সক্রিয় বিকিরণ (PAR) আপতিত সৌর বিকিরণের কত শতাংশ গঠন করে?"
        },
        options: [
            { en: "Less than 10%", bn: "১০% এর কম" },
            { en: "About 25%", bn: "প্রায় ২৫%" },
            { en: "Less than 50%", bn: "৫০% এর কম" },
            { en: "About 75%", bn: "প্রায় ৭৫%" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q220",
        question: {
            en: "Organisms that feed on producers (plants) are called:",
            bn: "উৎপাদকদের (উদ্ভিদ) উপর খাবার গ্রহণকারী জীবদের বলা হয়:"
        },
        options: [
            { en: "Primary carnivores", bn: "প্রাথমিক মাংসাশী" },
            { en: "Secondary consumers", bn: "সেকেন্ডারি খাদক" },
            { en: "Primary consumers (herbivores)", bn: "প্রাথমিক খাদক (তৃণভোজী)" },
            { en: "Decomposers", bn: "বিয়োজক" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q221",
        question: {
            en: "The detritus food chain (DFC) begins with:",
            bn: "ডেট্রাইটাস খাদ্য শৃঙ্খল (DFC) শুরু হয় কি দিয়ে?"
        },
        options: [
            { en: "Living green plants", bn: "জীবন্ত সবুজ গাছ" },
            { en: "Dead organic matter", bn: "মৃত জৈব পদার্থ" },
            { en: "Herbivores", bn: "তৃণভোজী" },
            { en: "Carnivores", bn: "মাংসাশী" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q222",
        question: {
            en: "Organisms that occupy a specific place in the food chain based on their source of nutrition are said to be at a specific:",
            bn: "খাদ্য শৃঙ্খলে পুষ্টির উৎসের উপর ভিত্তি করে একটি নির্দিষ্ট স্থান দখলকারী জীবদের একটি নির্দিষ্ট ____ এ আছে বলে মনে করা হয়:"
        },
        options: [
            { en: "Habitat", bn: "আবাসস্থল" },
            { en: "Niche", bn: "নিশ" },
            { en: "Trophic level", bn: "ট্রফিক স্তর" },
            { en: "Stratum", bn: "স্ট্র্যাটাম" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q223",
        question: {
            en: "Producers (plants) belong to which trophic level?",
            bn: "উৎপাদকরা (উদ্ভিদ) কোন ট্রফিক স্তরের অন্তর্গত?"
        },
        options: [
            { en: "First trophic level", bn: "প্রথম ট্রফিক স্তর" },
            { en: "Second trophic level", bn: "দ্বিতীয় ট্রফিক স্তর" },
            { en: "Third trophic level", bn: "তৃতীয় ট্রফিক স্তর" },
            { en: "Top trophic level", bn: "শীর্ষ ট্রফিক স্তর" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q224",
        question: {
            en: "The mass of living material at a particular time in a trophic level is called:",
            bn: "একটি নির্দিষ্ট সময়ে একটি ট্রফিক স্তরের জীবন্ত পদার্থের ভরকে কী বলা হয়?"
        },
        options: [
            { en: "Biomass", bn: "বায়োমাস" },
            { en: "Standing crop", bn: "স্ট্যান্ডিং ক্রপ" },
            { en: "Productivity", bn: "উৎপাদনশীলতা" },
            { en: "Detritus", bn: "ডেট্রাইটাস" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q225",
        question: {
            en: "Approximately what percentage of energy is transferred from one trophic level to the next lower trophic level?",
            bn: "প্রায় কত শতাংশ শক্তি একটি ট্রফিক স্তর থেকে পরবর্তী নিম্ন ট্রফিক স্তরে স্থানান্তরিত হয়?"
        },
        options: [
            { en: "1%", bn: "১%" },
            { en: "10%", bn: "১০%" },
            { en: "50%", bn: "৫০%" },
            { en: "90%", bn: "৯০%" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q226",
        question: {
            en: "Which ecological pyramid is always upright and can never be inverted?",
            bn: "কোন পরিবেশগত পিরামিড সর্বদা upright থাকে এবং কখনই inverted হতে পারে না?"
        },
        options: [
            { en: "Pyramid of numbers", bn: "সংখ্যার পিরামিড" },
            { en: "Pyramid of biomass", bn: "বায়োমাসের পিরামিড" },
            { en: "Pyramid of energy", bn: "শক্তির পিরামিড" },
            { en: "All pyramids are always upright", bn: "সমস্ত পিরামিড সর্বদা upright" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q227",
        question: {
            en: "The pyramid of biomass in a sea ecosystem is generally:",
            bn: "সমুদ্রের বাস্তুতন্ত্রে বায়োমাসের পিরামিড সাধারণত কেমন হয়?"
        },
        options: [
            { en: "Upright", bn: "Upright" },
            { en: "Inverted", bn: "Inverted" },
            { en: "Spindle-shaped", bn: "Spindle-shaped" },
            { en: "Has no specific shape", bn: "নির্দিষ্ট কোনো আকার নেই" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q228",
        question: {
            en: "Saprophytes, like fungi and bacteria, are not given any place in ecological pyramids, even though they play a vital role. What is their primary role?",
            bn: "ছত্রাক এবং ব্যাকটেরিয়ার মতো Saprophytes কে পরিবেশগত পিরামিডে কোনো স্থান দেওয়া হয় না, যদিও তারা একটি গুরুত্বপূর্ণ ভূমিকা পালন করে। তাদের প্রাথমিক ভূমিকা কী?"
        },
        options: [
            { en: "Primary production", bn: "প্রাথমিক উৎপাদন" },
            { en: "Predation", bn: "শিকার" },
            { en: "Decomposition", bn: "বিয়োজন" },
            { en: "Herbivory", bn: "তৃণভোজীতা" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q229",
        question: {
            en: "In a pond ecosystem, decomposers like fungi and bacteria are especially abundant where?",
            bn: "একটি পুকুরের বাস্তুতন্ত্রে, ছত্রাক এবং ব্যাকটেরিয়ার মতো বিয়োজকগুলি বিশেষত কোথায় প্রচুর পরিমাণে থাকে?"
        },
        options: [
            { en: "At the surface of the water", bn: "জলের পৃষ্ঠে" },
            { en: "In the body of fish", bn: "মাছের শরীরে" },
            { en: "In the marginal plants", bn: "marginal উদ্ভিদে" },
            { en: "In the bottom of the pond", bn: "পুকুরের তলদেশে" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q230",
        question: {
            en: "The annual net primary productivity of the whole biosphere is approximately:",
            bn: "সমগ্র biosphere-এর বার্ষিক নেট প্রাথমিক উৎপাদনশীলতা আনুমানিক কত?"
        },
        options: [
            { en: "55 billion tons", bn: "৫৫ বিলিয়ন টন" },
            { en: "100 billion tons", bn: "১০০ বিলিয়ন টন" },
            { en: "170 billion tons", bn: "১৭০ বিলিয়ন টন" },
            { en: "250 billion tons", bn: "২৫০ বিলিয়ন টন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q231",
        question: {
            en: "Why is it convenient to divide the global ecosystem into terrestrial and aquatic categories for study?",
            bn: "অধ্যয়নের জন্য বৈশ্বিক বাস্তুতন্ত্রকে স্থলজ এবং জলজ বিভাগে ভাগ করা কেন সুবিধাজনক?"
        },
        options: [
            { en: "Because they do not interact with each other.", bn: "কারণ তারা একে অপরের সাথে interact করে না।" },
            { en: "Because the global ecosystem is too big and complex to be studied at one time.", bn: "কারণ বৈশ্বিক বাস্তুতন্ত্র একসাথে অধ্যয়ন করার জন্য খুব বড় এবং জটিল।" },
            { en: "Because aquatic ecosystems are more important than terrestrial ones.", bn: "কারণ জলজ বাস্তুতন্ত্র স্থলজগুলির চেয়ে বেশি গুরুত্বপূর্ণ।" },
            { en: "Because terrestrial ecosystems lack abiotic components.", bn: "কারণ স্থলজ বাস্তুতন্ত্রে অজৈব উপাদানের অভাব রয়েছে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q232",
        question: {
            en: "The rate of function of an entire pond ecosystem is regulated by:",
            bn: "একটি সম্পূর্ণ পুকুরের বাস্তুতন্ত্রের কার্যকারিতার হার ____ দ্বারা নিয়ন্ত্রিত হয়:"
        },
        options: [
            { en: "Only the number of fish present.", bn: "উপস্থিত মাছের সংখ্যার উপর।" },
            { en: "Only the amount of dissolved oxygen.", bn: "দ্রবীভূত অক্সিজেনের পরিমাণের উপর।" },
            { en: "Solar input, temperature cycle, day-length, and other climatic conditions.", bn: "সৌর শক্তি, তাপমাত্রা চক্র, দিনের দৈর্ঘ্য এবং অন্যান্য জলবায়ু অবস্থা।" },
            { en: "The type of bacteria in the sediment.", bn: "তলানির ব্যাকটেরিয়ার ধরণের উপর।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q233",
        question: {
            en: "Net primary productivity (NPP) represents the:",
            bn: "নেট প্রাথমিক উৎপাদনশীলতা (NPP) কী নির্দেশ করে?"
        },
        options: [
            { en: "Total solar energy captured by plants.", bn: "উদ্ভিদ দ্বারা captured মোট সৌর শক্তি।" },
            { en: "Energy lost by plants during respiration.", bn: "উদ্ভিদ দ্বারা শ্বসনের সময় হারানো শক্তি।" },
            { en: "Available biomass for consumption by heterotrophs (herbivores and decomposers).", bn: "heterotrophs (তৃণভোজী এবং বিয়োজক) দ্বারা ব্যবহারের জন্য উপলব্ধ বায়োমাস।" },
            { en: "Rate of decomposition by microbes.", bn: "জীবাণু দ্বারা বিয়োজনের হার।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q234",
        question: {
            en: "Despite occupying about 70% of the Earth's surface, the productivity of oceans is only 55 billion tons. What is a primary reason for this relatively low productivity per unit area compared to land?",
            bn: "পৃথিবীর পৃষ্ঠের প্রায় ৭০% দখল করা সত্ত্বেও, সমুদ্রের উৎপাদনশীলতা কেবল ৫৫ বিলিয়ন টন। ভূমির তুলনায় প্রতি ইউনিট এলাকায় এই তুলনামূলকভাবে কম উৎপাদনশীলতার প্রাথমিক কারণ কী?"
        },
        options: [
            { en: "Lack of sunlight in deep ocean zones and nutrient limitation in surface waters.", bn: "গভীর সমুদ্র অঞ্চলে সূর্যালোকের অভাব এবং পৃষ্ঠের জলে পুষ্টির সীমাবদ্ধতা।" },
            { en: "Oceans have fewer plant species.", bn: "সমুদ্রে উদ্ভিদের প্রজাতি কম।" },
            { en: "High salinity inhibits photosynthesis.", bn: "উচ্চ লবণাক্ততা সালোকসংশ্লেষণকে বাধা দেয়।" },
            { en: "Most oceanic plants are consumed rapidly.", bn: "অধিকাংশ সামুদ্রিক উদ্ভিদ দ্রুত consumed হয়ে যায়।" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q235",
        question: {
            en: "Decomposition rate is slower if detritus is rich in:",
            bn: "যদি ডেট্রাইটাস ____ এ সমৃদ্ধ হয় তবে বিয়োজনের হার ধীর হয়:"
        },
        options: [
            { en: "Nitrogen and water-soluble sugars", bn: "নাইট্রোজেন এবং জলে দ্রবণীয় শর্করা" },
            { en: "Lignin and chitin", bn: "লিগনিন এবং কাইটিন" },
            { en: "Phosphorus and potassium", bn: "ফসফরাস এবং পটাসিয়াম" },
            { en: "Simple carbohydrates", bn: "সরল শর্করা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q236",
        question: {
            en: "Which climatic conditions favor decomposition?",
            bn: "কোন জলবায়ু অবস্থা বিয়োজনকে উৎসাহিত করে?"
        },
        options: [
            { en: "Low temperature and anaerobic conditions", bn: "নিম্ন তাপমাত্রা এবং anaerobic অবস্থা" },
            { en: "Warm and moist environment", bn: "উষ্ণ এবং আর্দ্র পরিবেশ" },
            { en: "Extreme dryness and high sunlight", bn: "অত্যধিক শুষ্কতা এবং উচ্চ সূর্যালোক" },
            { en: "Cold and aerobic conditions", bn: "ঠান্ডা এবং aerobic অবস্থা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q237",
        question: {
            en: "Plants capture only about what percentage of the Photosynthetically Active Radiation (PAR) to sustain the entire living world?",
            bn: "সমগ্র জীবজগতকে sustain করার জন্য উদ্ভিদরা ফটোসিন্থেটিকভাবে সক্রিয় বিকিরণ (PAR) এর প্রায় কত শতাংশ capture করে?"
        },
        options: [
            { en: "0.1 - 1%", bn: "০.১ - ১%" },
            { en: "2 - 10%", bn: "২ - ১০%" },
            { en: "15 - 25%", bn: "১৫ - ২৫%" },
            { en: "More than 50%", bn: "৫০% এর বেশি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q238",
        question: {
            en: "The unidirectional flow of energy in an ecosystem (sun to producers to consumers) is in keeping with which law of thermodynamics?",
            bn: "একটি বাস্তুতন্ত্রে শক্তির একমুখী প্রবাহ (সূর্য থেকে উৎপাদক থেকে খাদক) তাপগতিবিদ্যার কোন সূত্র মেনে চলে?"
        },
        options: [
            { en: "It violates the first law.", bn: "এটি প্রথম সূত্র লঙ্ঘন করে।" },
            { en: "It is an exception to the second law.", bn: "এটি দ্বিতীয় সূত্রের একটি ব্যতিক্রম।" },
            { en: "It is consistent with the first law (energy conservation) and the second law (energy dissipation as heat).", bn: "এটি প্রথম সূত্র (শক্তির সংরক্ষণ) এবং দ্বিতীয় সূত্র (তাপ হিসেবে শক্তির অপচয়) উভয়ের সাথে সামঞ্জস্যপূর্ণ।" },
            { en: "It relates only to the third law of thermodynamics.", bn: "এটি কেবল তাপগতিবিদ্যার তৃতীয় সূত্রের সাথে সম্পর্কিত।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q239",
        question: {
            en: "In most terrestrial ecosystems, a much larger fraction of energy flows through which food chain compared to the Grazing Food Chain (GFC)?",
            bn: "বেশিরভাগ স্থলজ বাস্তুতন্ত্রে, Grazing Food Chain (GFC) এর তুলনায় শক্তির একটি অনেক বড় অংশ কোন খাদ্য শৃঙ্খলের মাধ্যমে প্রবাহিত হয়?"
        },
        options: [
            { en: "Parasitic Food Chain", bn: "পরজীবী খাদ্য শৃঙ্খল" },
            { en: "Detritus Food Chain (DFC)", bn: "ডেট্রাইটাস খাদ্য শৃঙ্খল (DFC)" },
            { en: "Aquatic Food Chain", bn: "জলজ খাদ্য শৃঙ্খল" },
            { en: "Auxiliary Food Chain", bn: "সহায়ক খাদ্য শৃঙ্খল" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q240",
        question: {
            en: "A sparrow eating seeds is a primary consumer, but when it eats insects, it functions as a:",
            bn: "বীজ খাওয়া একটি চড়ুই প্রাথমিক খাদক, কিন্তু যখন এটি পোকামাকড় খায়, তখন এটি কী হিসাবে কাজ করে?"
        },
        options: [
            { en: "Producer", bn: "উৎপাদক" },
            { en: "Decomposer", bn: "বিয়োজক" },
            { en: "Secondary consumer", bn: "সেকেন্ডারি খাদক" },
            { en: "Herbivore", bn: "তৃণভোজী" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q241",
        question: {
            en: "Why is the measurement of biomass in terms of dry weight considered more accurate than fresh weight?",
            bn: "শুকনো ওজনের পরিপ্রেক্ষিতে বায়োমাস পরিমাপ কেন তাজা ওজনের চেয়ে বেশি নির্ভুল বলে বিবেচিত হয়?"
        },
        options: [
            { en: "Dry weight is easier to measure.", bn: "শুকনো ওজন পরিমাপ করা সহজ।" },
            { en: "Fresh weight includes variable water content, which can distort comparisons of actual organic matter.", bn: "তাজা ওজনের মধ্যে পরিবর্তনশীল জলের পরিমাণ অন্তর্ভুক্ত থাকে, যা প্রকৃত জৈব পদার্থের তুলনার ক্ষেত্রে বিকৃতি ঘটাতে পারে।" },
            { en: "Dry weight is always higher than fresh weight.", bn: "শুকনো ওজন সবসময় তাজা ওজনের চেয়ে বেশি হয়।" },
            { en: "Fresh weight cannot be measured for microorganisms.", bn: "মাইক্রোঅর্গানিজমের জন্য তাজা ওজন পরিমাপ করা যায় না।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q242",
        question: {
            en: "If you were to count the number of insects feeding on a big tree and then the number of small birds depending on these insects, the pyramid of numbers would likely be:",
            bn: "যদি আপনি একটি বড় গাছে খাবার গ্রহণকারী পোকা এবং তারপর এই পোকাগুলির উপর নির্ভরশীল ছোট পাখির সংখ্যা গণনা করেন, তাহলে সংখ্যার পিরামিড সম্ভবত কেমন হবে?"
        },
        options: [
            { en: "Upright", bn: "আপরাইট" },
            { en: "Inverted for the producer-insect relationship, then upright for insect-bird.", bn: "উৎপাদক-পোকা সম্পর্কের জন্য Inverted, তারপর পোকা-পাখি সম্পর্কের জন্য Upright।" },
            { en: "Spindle-shaped (narrow base, wider middle, narrow top) or partially inverted at the base.", bn: "স্পিন্ডল-আকৃতির (সরু ভিত্তি, প্রশস্ত মধ্যভাগ, সরু শীর্ষ) বা গোড়ায় আংশিকভাবে inverted।" },
            { en: "Always completely inverted.", bn: "সর্বদা সম্পূর্ণরূপে inverted।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q243",
        question: {
            en: "The primary difference between the GFC (Grazing Food Chain) and DFC (Detritus Food Chain) is:",
            bn: "GFC (Grazing Food Chain) এবং DFC (Detritus Food Chain) এর মধ্যে প্রাথমিক পার্থক্য হল:"
        },
        options: [
            { en: "DFC has more trophic levels than GFC.", bn: "DFC-এর GFC-এর চেয়ে বেশি ট্রফিক স্তর রয়েছে।" },
            { en: "GFC starts with living green plants while DFC starts with dead organic matter.", bn: "GFC জীবন্ত সবুজ গাছপালা দিয়ে শুরু হয় যখন DFC মৃত জৈব পদার্থ দিয়ে শুরু হয়।" },
            { en: "Energy flow is bidirectional in DFC.", bn: "DFC-এ শক্তি প্রবাহ দ্বিমুখী।" },
            { en: "DFC is only found in aquatic ecosystems.", bn: "DFC কেবল জলজ বাস্তুতন্ত্রে পাওয়া যায়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q244",
        question: {
            en: "Humus is highly resistant to microbial action and serves as a reservoir of nutrients because:",
            bn: "হিউমাস জীবাণু ক্রিয়ার প্রতি অত্যন্ত প্রতিরোধী এবং পুষ্টি উপাদানের একটি reservoir হিসাবে কাজ করে কারণ:"
        },
        options: [
            { en: "It is primarily inorganic.", bn: "এটি প্রাথমিকভাবে অজৈব।" },
            { en: "It is colloidal in nature and decomposes very slowly.", bn: "এটি প্রকৃতিতে কলোয়ডাল এবং খুব ধীরে ধীরে বিয়োজিত হয়।" },
            { en: "It is water-soluble and leaches quickly.", bn: "এটি জলে দ্রবণীয় এবং দ্রুত লিচ করে।" },
            { en: "It is rapidly consumed by detritivores.", bn: "এটি detritivores দ্বারা দ্রুত খাওয়া হয়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q245",
        question: {
            en: "The \"10 percent law\" of energy transfer between trophic levels means that:",
            bn: "ট্রফিক স্তরগুলির মধ্যে শক্তি স্থানান্তরের \"১০ শতাংশ আইন\" মানে:"
        },
        options: [
            { en: "Only 10% of organisms from a lower trophic level are eaten by the next.", bn: "নিম্ন ট্রফিক স্তরের মাত্র ১০% জীব পরবর্তী স্তরের দ্বারা খাওয়া হয়।" },
            { en: "10% of the energy is lost as heat at each transfer.", bn: "প্রতিটি স্থানান্তরে ১০% শক্তি তাপ হিসাবে হারিয়ে যায়।" },
            { en: "Approximately 10% of the energy from a lower trophic level is incorporated into the biomass of the next higher trophic level.", bn: "নিম্ন ট্রফিক স্তরের প্রায় ১০% শক্তি পরবর্তী উচ্চ ট্রফিক স্তরের বায়োমাসে অন্তর্ভুক্ত হয়।" },
            { en: "Each trophic level has 10% more biomass than the level above it.", bn: "প্রতিটি ট্রফিক স্তরের উপরের স্তরের চেয়ে ১০% বেশি বায়োমাস থাকে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q246",
        question: {
            en: "Consider a small, isolated pond ecosystem. If a sudden influx of organic pollutants significantly increases the amount of decomposable organic matter, what would be the immediate impact on the Biochemical Oxygen Demand (BOD)?",
            bn: "একটি ছোট, বিচ্ছিন্ন পুকুর বাস্তুতন্ত্র বিবেচনা করুন। যদি জৈব দূষণকারীর হঠাৎ influx decomposable জৈব পদার্থের পরিমাণ উল্লেখযোগ্যভাবে বৃদ্ধি করে, তাহলে জৈব রাসায়নিক অক্সিজেন চাহিদা (BOD) এর উপর তাৎক্ষণিক প্রভাব কী হবে?"
        },
        options: [
            { en: "BOD would decrease rapidly.", bn: "BOD দ্রুত হ্রাস পাবে।" },
            { en: "BOD would remain unchanged.", bn: "BOD অপরিবর্তিত থাকবে।" },
            { en: "BOD would increase significantly due to increased microbial activity consuming oxygen.", bn: "অক্সিজেন consuming বর্ধিত microbial activity এর কারণে BOD উল্লেখযোগ্যভাবে বৃদ্ধি পাবে।" },
            { en: "BOD would fluctuate unpredictably.", bn: "BOD অপ্রত্যাশিতভাবে ওঠানামা করবে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q247",
        question: {
            en: "The stratification in a forest ecosystem (trees at top, shrubs second, herbs/grasses at bottom) is primarily a result of:",
            bn: "একটি বন বাস্তুতন্ত্রের স্তরায়ন (উপরে গাছ, দ্বিতীয়ত গুল্ম, নিচে ভেষজ/ঘাস) মূলত এর ফল:"
        },
        options: [
            { en: "Different reproductive strategies of the plants.", bn: "উদ্ভিদের বিভিন্ন প্রজনন কৌশল।" },
            { en: "Competition for light, leading to adaptations for optimal light capture at different heights.", bn: "আলোর জন্য প্রতিযোগিতা, যা বিভিন্ন উচ্চতায় সর্বোত্তম আলো capture করার জন্য অভিযোজনের দিকে পরিচালিত করে।" },
            { en: "The types of soil present at different depths.", bn: "বিভিন্ন গভীরতায় উপস্থিত মাটির প্রকার।" },
            { en: "Random distribution of plant seeds.", bn: "উদ্ভিদের বীজের এলোমেলো বিতরণ।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q248",
        question: {
            en: "If primary productivity in an ecosystem is very low, what would be the likely consequence for the higher trophic levels (e.g., number of carnivores)?",
            bn: "যদি একটি বাস্তুতন্ত্রে প্রাথমিক উৎপাদনশীলতা খুব কম হয়, তবে উচ্চতর ট্রফিক স্তরগুলির (যেমন, মাংসাশীদের সংখ্যা) জন্য সম্ভাব্য পরিণতি কী হবে?"
        },
        options: [
            { en: "Higher trophic levels would be unaffected.", bn: "উচ্চতর ট্রফিক স্তরগুলি প্রভাবিত হবে না।" },
            { en: "Higher trophic levels would be more diverse and abundant.", bn: "উচ্চতর ট্রফিক স্তরগুলি আরও বৈচিত্র্যময় এবং প্রচুর হবে।" },
            { en: "Higher trophic levels would be severely limited in number and biomass due to insufficient energy base.", bn: "অপর্যাপ্ত শক্তি ভিত্তির কারণে উচ্চতর ট্রফিক স্তরগুলির সংখ্যা এবং বায়োমাস মারাত্মকভাবে সীমিত হবে।" },
            { en: "Carnivores would switch to consuming producers directly.", bn: "মাংসাশীরা সরাসরি উৎপাদকদের খাওয়া শুরু করবে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q249",
        question: {
            en: "Decomposition is largely an oxygen-requiring process. In waterlogged soils where anaerobic conditions prevail, what is the likely fate of organic matter?",
            bn: "বিয়োজন মূলত একটি অক্সিজেন-প্রয়োজনীয় প্রক্রিয়া। জলাবদ্ধ মাটিতে যেখানে anaerobic অবস্থা বিদ্যমান, সেখানে জৈব পদার্থের সম্ভাব্য পরিণতি কী?"
        },
        options: [
            { en: "It decomposes very rapidly.", bn: "এটি খুব দ্রুত বিয়োজিত হয়।" },
            { en: "It undergoes rapid mineralisation.", bn: "এটি দ্রুত mineralisation এর মধ্য দিয়ে যায়।" },
            { en: "It decomposes very slowly, leading to accumulation of peat or organic-rich soil.", bn: "এটি খুব ধীরে ধীরে বিয়োজিত হয়, যা পিট বা জৈব-সমৃদ্ধ মাটির সঞ্চয়ের দিকে পরিচালিত করে।" },
            { en: "It is primarily consumed by aerobic detritivores.", bn: "এটি মূলত aerobic detritivores দ্বারাConsumed হয়।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q250",
        question: {
            en: "The statement \"ecosystems are not exempt from the Second Law of thermodynamics\" implies that:",
            bn: "\"বাস্তুতন্ত্র তাপগতিবিদ্যার দ্বিতীয় সূত্র থেকে অব্যাহতিপ্রাপ্ত নয়\" এই বিবৃতিটি বোঝায় যে:"
        },
        options: [
            { en: "Energy can be created within an ecosystem.", bn: "একটি বাস্তুতন্ত্রের মধ্যে শক্তি তৈরি করা যেতে পারে।" },
            { en: "Energy transfer between trophic levels is 100% efficient.", bn: "ট্রফিক স্তরগুলির মধ্যে শক্তি স্থানান্তর ১০০% দক্ষ।" },
            { en: "There is a continuous dissipation of energy as heat at each transfer, requiring a constant input of energy (from the sun) to maintain order.", bn: "প্রতিটি স্থানান্তরে তাপ হিসাবে শক্তির একটি ধারাবাহিক অপচয় হয়, যা শৃঙ্খলা বজায় রাখার জন্য শক্তির একটি constante input (সূর্য থেকে) প্রয়োজন।" },
            { en: "All energy in an ecosystem is eventually converted back to solar energy.", bn: "একটি বাস্তুতন্ত্রের সমস্ত শক্তি শেষ পর্যন্ত সৌর শক্তিতে রূপান্তরিত হয়।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q251",
        question: {
            en: "Why is the pyramid of biomass generally inverted in a marine ecosystem (phytoplankton biomass < zooplankton biomass)?",
            bn: "সামুদ্রিক বাস্তুতন্ত্রে বায়োমাসের পিরামিড সাধারণত কেন inverted হয় (ফাইটোপ্ল্যাঙ্কটন বায়োমাস < জুপ্ল্যাঙ্কটন বায়োমাস)?"
        },
        options: [
            { en: "Zooplankton are much larger than phytoplankton.", bn: "জুপ্ল্যাঙ্কটন ফাইটোপ্ল্যাঙ্কটনের চেয়ে অনেক বড়।" },
            { en: "Phytoplankton have a very high turnover rate (rapid reproduction and consumption), so their standing crop at any given time is low, but their overall productivity supports a larger biomass of longer-lived zooplankton.", bn: "ফাইটোপ্ল্যাঙ্কটনের turnover হার খুব বেশি (দ্রুত প্রজনন এবং ভোগ), তাই যে কোনো সময়ে তাদের standing crop কম থাকে, কিন্তু তাদের সামগ্রিক উৎপাদনশীলতা দীর্ঘজীবী জুপ্ল্যাঙ্কটনের একটি বৃহত্তর বায়োমাসকে সমর্থন করে।" },
            { en: "Zooplankton photosynthesize more efficiently.", bn: "জুপ্ল্যাঙ্কটন আরও দক্ষতার সাথে সালোকসংশ্লেষণ করে।" },
            { en: "Phytoplankton lose more energy through respiration.", bn: "ফাইটোপ্ল্যাঙ্কটন শ্বসনের মাধ্যমে আরও বেশি শক্তি হারায়।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q252",
        question: {
            en: "Ecosystem services, such as purification of air and water by forests, are often undervalued in economic terms. The concept of \"ecosystem services\" highlights:",
            bn: "বন দ্বারা বায়ু ও জলের পরিশোধন, যেমন বাস্তুতন্ত্র পরিষেবাগুলি, অর্থনৈতিক দিক থেকে প্রায়শই অবমূল্যায়ন করা হয়। \"বাস্তুতন্ত্র পরিষেবা\" এর ধারণাটি তুলে ধরে:"
        },
        options: [
            { en: "The direct commercial products obtained from ecosystems.", bn: "বাস্তুতন্ত্র থেকে প্রাপ্ত সরাসরি বাণিজ্যিক পণ্য।" },
            { en: "The indirect benefits that functioning ecosystems provide to human well-being, often without direct market valuation.", bn: "কার্যকরী বাস্তুতন্ত্রগুলি মানব সুস্থতার জন্য যে পরোক্ষ সুবিধাগুলি প্রদান করে, প্রায়শই সরাসরি বাজার মূল্যায়ন ছাড়াই।" },
            { en: "The recreational value of ecosystems only.", bn: "কেবলমাত্র বাস্তুতন্ত্রের বিনোদনমূলক মূল্য।" },
            { en: "The aesthetic value of individual species only.", bn: "কেবলমাত্র একক প্রজাতির নান্দনিক মূল্য।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q253",
        question: {
            en: "Consider the important steps in decomposition: fragmentation, leaching, catabolism, humification, and mineralisation. Which of these steps are primarily mediated by microbial enzymes?",
            bn: "বিয়োজনের গুরুত্বপূর্ণ ধাপগুলি বিবেচনা করুন: খণ্ডিতকরণ, লিচিং, ক্যাটাবোলিজম, হিউমিফিকেশন এবং মিনারেলিজেশন। এই ধাপগুলির মধ্যে কোনটি প্রাথমিকভাবে microbial এনজাইম দ্বারা নিয়ন্ত্রিত হয়?"
        },
        options: [
            { en: "Fragmentation and Leaching", bn: "খণ্ডিতকরণ এবং লিচিং" },
            { en: "Catabolism, Humification, and Mineralisation", bn: "ক্যাটাবোলিজম, হিউমিফিকেশন এবং মিনারেলিজেশন" },
            { en: "Only Fragmentation", bn: "কেবলমাত্র খণ্ডিতকরণ" },
            { en: "Only Leaching and Mineralisation", bn: "কেবলমাত্র লিচিং এবং মিনারেলিজেশন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q254",
        question: {
            en: "If a toxin (e.g., a heavy metal) that biomagnifies is introduced at the producer level in a food chain, where would its concentration likely be highest?",
            bn: "যদি একটি টক্সিন (যেমন, একটি ভারী ধাতু) যা বায়োম্যাগনিফাই করে, একটি খাদ্য শৃঙ্খলে উৎপাদক স্তরে প্রবেশ করানো হয়, তবে এর ঘনত্ব সম্ভবত সর্বোচ্চ কোথায় হবে?"
        },
        options: [
            { en: "In the producers", bn: "উৎপাদকদের মধ্যে" },
            { en: "In the primary consumers", bn: "প্রাথমিক খাদকদের মধ্যে" },
            { en: "In the top carnivores", bn: "শীর্ষ মাংসাশীদের মধ্যে" },
            { en: "Equally distributed across all trophic levels", bn: "সমস্ত ট্রফিক স্তরে সমানভাবে বিতরণ করা" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q255",
        question: {
            en: "The standing crop (biomass) of a trophic level represents the amount of living material at a particular time, while productivity represents the rate of biomass production. In a stable ecosystem:",
            bn: "একটি ট্রফিক স্তরের standing crop (বায়োমাস) একটি নির্দিষ্ট সময়ে জীবন্ত পদার্থের পরিমাণকে প্রতিনিধিত্ব করে, যখন উৎপাদনশীলতা বায়োমাস উৎপাদনের হারকে প্রতিনিধিত্ব করে। একটি স্থিতিশীল বাস্তুতন্ত্রে:"
        },
        options: [
            { en: "Standing crop is always equal to productivity.", bn: "Standing crop সর্বদা উৎপাদনশীলতার সমান।" },
            { en: "Productivity must be sufficient to support the turnover and maintenance of the standing crop and allow for transfer to the next trophic level.", bn: "উৎপাদনশীলতা standing crop এর turnover এবং maintenance সমর্থন করার জন্য এবং পরবর্তী ট্রফিক স্তরে স্থানান্তরের অনুমতি দেওয়ার জন্য পর্যাপ্ত হতে হবে।" },
            { en: "Standing crop is always much higher than productivity.", bn: "Standing crop সর্বদা উৎপাদনশীলতার চেয়ে অনেক বেশি।" },
            { en: "Productivity is independent of the standing crop.", bn: "উৎপাদনশীলতা standing crop থেকে স্বাধীন।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q256",
        question: {
            en: "While the sun is the primary energy source for most ecosystems, deep-sea hydrothermal vent ecosystems are an exception. Their primary producers are typically:",
            bn: "সূর্য বেশিরভাগ বাস্তুতন্ত্রের প্রাথমিক শক্তির উৎস হলেও, গভীর-সমুদ্রের হাইড্রোথার্মাল ভেন্ট বাস্তুতন্ত্রগুলি এর ব্যতিক্রম। তাদের প্রাথমিক উৎপাদকরা সাধারণত হল:"
        },
        options: [
            { en: "Photosynthetic algae that have adapted to low light.", bn: "কম আলোর সাথে অভিযোজিত সালোকসংশ্লেষী শৈবাল।" },
            { en: "Chemosynthetic bacteria that utilize energy from reduced inorganic compounds (e.g., hydrogen sulfide) released from the vents.", bn: "রাসায়নিক সংশ্লেষী ব্যাকটেরিয়া যা ভেন্ট থেকে নির্গত হ্রাসপ্রাপ্ত অজৈব যৌগ (যেমন, হাইড্রোজেন সালফাইড) থেকে শক্তি ব্যবহার করে।" },
            { en: "Detritivores feeding on organic matter sinking from surface waters.", bn: "পৃষ্ঠের জল থেকে sinking জৈব পদার্থের উপর খাবার গ্রহণকারী detritivores।" },
            { en: "Filter-feeding animals that directly absorb dissolved organic matter.", bn: "ফিল্টার-খাদক প্রাণী যা সরাসরি দ্রবীভূত জৈব পদার্থ শোষণ করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q257",
        question: {
            en: "The efficiency of Net Primary Productivity (NPP) varies greatly among ecosystems. Factors like nutrient availability, temperature, and water are key. In a nutrient-poor, oligotrophic lake, NPP is limited. If this lake experiences significant nutrient enrichment (eutrophication) from agricultural runoff, what initial cascade of events is most likely?",
            bn: "নেট প্রাথমিক উৎপাদনশীলতা (NPP) এর কার্যকারিতা বাস্তুতন্ত্রের মধ্যে ব্যাপকভাবে পরিবর্তিত হয়। পুষ্টির সহজলভ্যতা, তাপমাত্রা এবং জলের মতো কারণগুলি গুরুত্বপূর্ণ। একটি পুষ্টি-দরিদ্র, ওলিগোট্রফিক হ্রদে, NPP সীমিত। যদি এই হ্রদটি কৃষি runoff থেকে উল্লেখযোগ্য পুষ্টি সমৃদ্ধি (ইউট্রোফিকেশন) অনুভব করে, তবে ঘটনার কোন প্রাথমিক ক্যাসকেডটি সবচেয়ে সম্ভাব্য?"
        },
        options: [
            { en: "A decrease in algal blooms and an increase in water clarity.", bn: "শৈবাল blooms এর হ্রাস এবং জলের স্বচ্ছতা বৃদ্ধি।" },
            { en: "A rapid increase in algal blooms (primary productivity), followed by increased decomposition of dead algae, leading to oxygen depletion (hypoxia) and potential fish kills.", bn: "শৈবাল blooms এর দ্রুত বৃদ্ধি (প্রাথমিক উৎপাদনশীলতা), তারপরে মৃত শৈবালের বর্ধিত বিয়োজন, যা অক্সিজেন হ্রাস (hypoxia) এবং সম্ভাব্য মাছের মৃত্যুর দিকে পরিচালিত করে।" },
            { en: "An immediate increase in fish populations due to more food.", bn: "বেশি খাবারের কারণে মাছের জনসংখ্যার তাৎক্ষণিক বৃদ্ধি।" },
            { en: "A shift towards a desert-like ecosystem.", bn: "মরুভূমি-সদৃশ বাস্তুতন্ত্রের দিকে পরিবর্তন।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q258",
        question: {
            en: "The concept of \"trophic level\" simplifies complex food webs. However, many organisms are omnivores or feed at multiple trophic levels. How does this omnivory affect the structure and stability of ecological pyramids and energy flow calculations?",
            bn: "\"ট্রফিক স্তর\" এর ধারণাটি জটিল খাদ্য জালকে সরল করে। তবে, অনেক জীব omnivore অথবা একাধিক ট্রফিক স্তরে খাদ্য গ্রহণ করে। এই omnivory পরিবেশগত পিরামিড এবং শক্তি প্রবাহ গণনার কাঠামো এবং স্থিতিশীলতাকে কীভাবে প্রভাবিত করে?"
        },
        options: [
            { en: "It makes ecological pyramids perfectly symmetrical and energy flow calculations simpler.", bn: "এটি পরিবেশগত পিরামিডকে সম্পূর্ণরূপে symmetrical করে তোলে এবং শক্তি প্রবাহ গণনাকে সরল করে।" },
            { en: "It has no significant impact on pyramid structure or energy flow.", bn: "পিরামিড কাঠামো বা শক্তি প্রবাহের উপর এর কোনো উল্লেখযোগ্য প্রভাব নেই।" },
            { en: "It complicates the depiction of simple pyramids and necessitates more complex food web models; energy flow must account for partitioning across different trophic roles.", bn: "এটি সাধারণ পিরামিডের চিত্রণকে জটিল করে তোলে এবং আরও জটিল খাদ্য জাল মডেলের প্রয়োজন হয়; শক্তি প্রবাহকে বিভিন্ন ট্রফিক ভূমিকার মধ্যে partitioning এর জন্য হিসাব করতে হবে।" },
            { en: "It always leads to an inverted pyramid of energy.", bn: "এটি সর্বদা শক্তির একটি inverted পিরামিডের দিকে পরিচালিত করে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q259",
        question: {
            en: "Humification is a critical process in soil formation, creating stable organic matter (humus). If soil conditions (e.g., extreme acidity or waterlogging) inhibit humification but allow for some fragmentation and catabolism, what would be the characteristic of the organic matter in such soils?",
            bn: "হিউমিফিকেশন মাটি গঠনে একটি গুরুত্বপূর্ণ প্রক্রিয়া, যা স্থিতিশীল জৈব পদার্থ (হিউমাস) তৈরি করে। যদি মাটির অবস্থা (যেমন, চরম অম্লতা বা জলাবদ্ধতা) হিউমিফিকেশনকে বাধা দেয় কিন্তু কিছু খণ্ডিতকরণ এবং ক্যাটাবোলিজমকে অনুমতি দেয়, তাহলে এই ধরনের মাটিতে জৈব পদার্থের বৈশিষ্ট্য কী হবে?"
        },
        options: [
            { en: "Rapid conversion to inorganic nutrients.", bn: "অজৈব পুষ্টিতে দ্রুত রূপান্তর।" },
            { en: "Accumulation of partially decomposed, less stable organic residues rather than well-developed humus, potentially leading to nutrient imbalances.", bn: "আংশিকভাবে বিয়োজিত, কম স্থিতিশীল জৈব অবশেষের সঞ্চয় ভালভাবে বিকশিত হিউমাসের পরিবর্তে, সম্ভাব্যভাবে পুষ্টির ভারসাম্যহীনতার দিকে পরিচালিত করে।" },
            { en: "Formation of highly fertile, dark topsoil.", bn: "অত্যন্ত উর্বর, গাঢ় উপরের মাটির গঠন।" },
            { en: "Complete absence of any organic matter.", bn: "কোনো জৈব পদার্থের সম্পূর্ণ অনুপস্থিতি।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q260",
        question: {
            en: "The 10% energy transfer rule is a generalization. The actual efficiency of energy transfer between trophic levels can vary. If in a specific food chain, the transfer efficiency from herbivores to primary carnivores is unusually high (e.g., 20%), what would be a plausible ecological reason or consequence?",
            bn: "১০% শক্তি স্থানান্তরের নিয়মটি একটি সাধারণীকরণ। ট্রফিক স্তরগুলির মধ্যে শক্তি স্থানান্তরের প্রকৃত কার্যকারিতা পরিবর্তিত হতে পারে। যদি একটি নির্দিষ্ট খাদ্য শৃঙ্খলে, তৃণভোজী থেকে প্রাথমিক মাংসাশীদের শক্তি স্থানান্তরের কার্যকারিতা অস্বাভাবিকভাবে বেশি হয় (যেমন, ২০%), তবে এর একটি সম্ভাব্য পরিবেশগত কারণ বা পরিণতি কী হবে?"
        },
        options: [
            { en: "Herbivores are very inefficient at converting plant matter into their own biomass.", bn: "তৃণভোজীরা উদ্ভিদ পদার্থকে তাদের নিজস্ব বায়োমাসে রূপান্তর করতে খুব অদক্ষ।" },
            { en: "Primary carnivores are highly efficient at digesting and assimilating herbivore biomass, and/or herbivores have a high proportion of easily digestible tissue.", bn: "প্রাথমিক মাংসাশীরা তৃণভোজী বায়োমাস হজম এবং assimilate করতে অত্যন্ত দক্ষ, এবং/অথবা তৃণভোজীদের সহজে হজমযোগ্য টিস্যুর একটি উচ্চ অনুপাত রয়েছে।" },
            { en: "The primary carnivores have a much lower metabolic rate than the herbivores.", bn: "প্রাথমিক মাংসাশীদের বিপাক হার তৃণভোজীদের তুলনায় অনেক কম।" },
            { en: "This would violate the second law of thermodynamics.", bn: "এটি তাপগতিবিদ্যার দ্বিতীয় সূত্র লঙ্ঘন করবে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q261",
        question: {
            en: "Ecosystems exhibit both resistance (ability to withstand disturbance) and resilience (ability to recover from disturbance). A highly diverse ecosystem is often hypothesized to be more resilient because:",
            bn: "বাস্তুতন্ত্র উভয় প্রতিরোধ ক্ষমতা (disturbance সহ্য করার ক্ষমতা) এবং স্থিতিস্থাপকতা (disturbance থেকে পুনরুদ্ধার করার ক্ষমতা) প্রদর্শন করে। একটি অত্যন্ত বৈচিত্র্যময় বাস্তুতন্ত্রকে প্রায়শই আরও স্থিতিস্থাপক বলে অনুমান করা হয় কারণ:"
        },
        options: [
            { en: "All species perform exactly the same function, making them easily replaceable.", bn: "সমস্ত প্রজাতি একই কাজ করে, যা তাদের সহজে প্রতিস্থাপনযোগ্য করে তোলে।" },
            { en: "The presence of multiple species with overlapping functional roles (functional redundancy) means that if some species are lost, others can compensate, maintaining overall ecosystem processes.", bn: " overlapping functional role সহ একাধিক প্রজাতির উপস্থিতি (কার্যকরী অপ্রয়োজনীয়তা) বোঝায় যে যদি কিছু প্রজাতি হারিয়ে যায়, তবে অন্যরা ক্ষতিপূরণ দিতে পারে, সামগ্রিক বাস্তুতন্ত্র প্রক্রিয়া বজায় রেখে।" },
            { en: "Dominant species in diverse ecosystems are inherently more resistant to all types of disturbances.", bn: "বিভিন্ন বাস্তুতন্ত্রে প্রভাবশালী প্রজাতিগুলি সহজাতভাবে সমস্ত ধরণের disturbance এর প্রতি বেশি প্রতিরোধী।" },
            { en: "Diverse ecosystems have lower rates of nutrient cycling.", bn: "বিভিন্ন বাস্তুতন্ত্রে পুষ্টি চক্রের হার কম।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q262",
        question: {
            en: "In the context of nutrient cycling, decomposers are crucial for mineralisation. If decomposer activity in a terrestrial ecosystem was severely inhibited (e.g., by a persistent fungicide), what would be the long-term impact on primary productivity?",
            bn: "পুষ্টি চক্রের প্রেক্ষাপটে, বিয়োজকগুলি মিনারেলিজেশনের জন্য অত্যন্ত গুরুত্বপূর্ণ। যদি একটি স্থলজ বাস্তুতন্ত্রে বিয়োজক কার্যকলাপ গুরুতরভাবে inhibited হয় (যেমন, একটি persistent ছত্রাকনাশক দ্বারা), তবে প্রাথমিক উৎপাদনশীলতার উপর দীর্ঘমেয়াদী প্রভাব কী হবে?"
        },
        options: [
            { en: "Primary productivity would increase due to less competition from microbes.", bn: "জীবাণু থেকে কম প্রতিযোগিতার কারণে প্রাথমিক উৎপাদনশীলতা বৃদ্ধি পাবে।" },
            { en: "Primary productivity would remain unaffected as plants can obtain all nutrients from atmospheric deposition.", bn: "প্রাথমিক উৎপাদনশীলতা অপ্রভাবিত থাকবে কারণ উদ্ভিদগুলি বায়ুমণ্ডলীয় deposition থেকে সমস্ত পুষ্টি অর্জন করতে পারে।" },
            { en: "Primary productivity would eventually decline significantly due to the locking up of essential nutrients in dead organic matter and reduced availability in the soil.", bn: "মৃত জৈব পদার্থে প্রয়োজনীয় পুষ্টির আটকা পড়ে যাওয়া এবং মাটিতে সহজলভ্যতা হ্রাসের কারণে প্রাথমিক উৎপাদনশীলতা শেষ পর্যন্ত উল্লেখযোগ্যভাবে হ্রাস পাবে।" },
            { en: "Plants would evolve to directly absorb complex organic matter.", bn: "উদ্ভিদগুলি সরাসরি জটিল জৈব পদার্থ শোষণ করার জন্য বিবর্তিত হবে।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q263",
        question: {
            en: "Consider two forest ecosystems: a temperate deciduous forest and a tropical rainforest. While both have GPP, the ratio of NPP to GPP (NPP/GPP) might differ. Tropical rainforests, despite high GPP, often have high respiration rates due to warm temperatures. This implies their NPP/GPP ratio might be:",
            bn: "দুটি বনের বাস্তুতন্ত্র বিবেচনা করুন: একটি temperate deciduous বন এবং একটি গ্রীষ্মমন্ডলীয় রেইনফরেস্ট। উভয়টির GPP থাকলেও, NPP থেকে GPP এর অনুপাত (NPP/GPP) ভিন্ন হতে পারে। গ্রীষ্মমন্ডলীয় রেইনফরেস্টগুলিতে, উচ্চ GPP থাকা সত্ত্বেও, উষ্ণ তাপমাত্রার কারণে প্রায়শই উচ্চ শ্বসন হার থাকে। এর অর্থ তাদের NPP/GPP অনুপাত কেমন হতে পারে?"
        },
        options: [
            { en: "Significantly higher than temperate forests.", bn: "temperate বনের চেয়ে উল্লেখযোগ্যভাবে বেশি।" },
            { en: "Similar to or potentially lower than some temperate forests during their growing season, as a larger fraction of GPP is used in respiration.", bn: "তাদের ক্রমবর্ধমান মৌসুমে কিছু temperate বনের অনুরূপ বা সম্ভাব্যভাবে কম, কারণ GPP এর একটি বড় অংশ শ্বসনে ব্যবহৃত হয়।" },
            { en: "Always 1, meaning no respiratory losses.", bn: "সর্বদা ১, যার অর্থ কোনো শ্বসন ক্ষতি নেই।" },
            { en: "Dependent only on the number of tree species.", bn: "কেবলমাত্র গাছের প্রজাতির সংখ্যার উপর নির্ভরশীল।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q264",
        question: {
            en: "The pyramid of numbers can be inverted if a single large producer (like a tree) supports many primary consumers (insects). If these insects are then consumed by a smaller number of secondary consumers (birds), the overall shape of the pyramid of numbers for this three-trophic-level system would be:",
            bn: "সংখ্যার পিরামিড inverted হতে পারে যদি একটি একক বড় উৎপাদক (যেমন একটি গাছ) অনেক প্রাথমিক খাদক (পোকা) সমর্থন করে। যদি এই পোকাগুলি তখন অল্প সংখ্যক সেকেন্ডারি খাদক (পাখি) দ্বারা খাওয়া হয়, তবে এই তিন-ট্রফিক-স্তর ব্যবস্থার জন্য সংখ্যার পিরামিডের সামগ্রিক আকার কেমন হবে?"
        },
        options: [
            { en: "Consistently upright.", bn: "ধারাবাহিকভাবে upright।" },
            { en: "Consistently inverted.", bn: "ধারাবাহিকভাবে inverted।" },
            { en: "Inverted at the base (producer to primary consumer) and then upright (primary to secondary consumer), resulting in a somewhat spindle or irregular shape.", bn: "গোড়ায় inverted (উৎপাদক থেকে প্রাথমিক খাদক) এবং তারপর upright (প্রাথমিক থেকে সেকেন্ডারি খাদক), ফলস্বরূপ কিছুটা স্পিন্ডল বা অনিয়মিত আকৃতি।" },
            { en: "A perfect rectangle.", bn: "একটি নিখুঁত আয়তক্ষেত্র।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q265",
        question: {
            en: "The process of ecological succession involves changes in species composition and community structure over time. Early successional (pioneer) species often have characteristics like rapid growth and high dispersal. How does their role relate to NPP and decomposition in the initial stages of succession?",
            bn: "পরিবেশগত succession এর প্রক্রিয়াটিতে সময়ের সাথে সাথে প্রজাতির গঠন এবং কমিউনিটির কাঠামোতে পরিবর্তন জড়িত। প্রাথমিক successional (পায়োনিয়ার) প্রজাতির প্রায়শই দ্রুত বৃদ্ধি এবং উচ্চ dispersal এর মতো বৈশিষ্ট্য থাকে। succession এর প্রাথমিক পর্যায়ে তাদের ভূমিকা NPP এবং বিয়োজনের সাথে কীভাবে সম্পর্কিত?"
        },
        options: [
            { en: "They contribute minimally to NPP and enhance decomposition rates.", bn: "তারা NPP তে ন্যূনতম অবদান রাখে এবং বিয়োজনের হার বাড়ায়।" },
            { en: "They contribute significantly to initial NPP, and their decomposition, though perhaps initially slow, begins the process of soil building and nutrient accumulation.", bn: "তারা প্রাথমিক NPP তে উল্লেখযোগ্যভাবে অবদান রাখে, এবং তাদের বিয়োজন, যদিও প্রাথমিকভাবে ধীর, মাটি গঠন এবং পুষ্টি সঞ্চয়ের প্রক্রিয়া শুরু করে।" },
            { en: "They have very low NPP and primarily inhibit decomposition.", bn: "তাদের NPP খুব কম এবং প্রাথমিকভাবে বিয়োজনকে বাধা দেয়।" },
            { en: "They only fix nitrogen and do not contribute to biomass.", bn: "তারা কেবল নাইট্রোজেন fixation করে এবং বায়োমাসে অবদান রাখে না।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q266",
        question: {
            en: "Biodiversity is a term popularised by sociobiologist:",
            bn: "জীববৈচিত্র্য শব্দটি কোন সমাজবিজ্ঞানী দ্বারা জনপ্রিয় করা হয়েছে?"
        },
        options: [
            { en: "Charles Darwin", bn: "চার্লস ডারউইন" },
            { en: "Gregor Mendel", bn: "গ্রেগর মেন্ডেল" },
            { en: "Edward Wilson", bn: "এডওয়ার্ড উইলসন" },
            { en: "Ramdeo Misra", bn: "রামদেও মিশ্র" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q267",
        question: {
            en: "Which of the following is NOT one of the three most important levels of biodiversity?",
            bn: "নিম্নলিখিতগুলির মধ্যে কোনটি জীববৈচিত্র্যের তিনটি সবচেয়ে গুরুত্বপূর্ণ স্তরের একটি নয়?"
        },
        options: [
            { en: "Genetic diversity", bn: "জেনেটিক বৈচিত্র্য" },
            { en: "Species diversity", bn: "প্রজাতি বৈচিত্র্য" },
            { en: "Cellular diversity", bn: "কোষীয় বৈচিত্র্য" },
            { en: "Ecological diversity", bn: "পরিবেশগত বৈচিত্র্য" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q268",
        question: {
            en: "Genetic variation shown by the medicinal plant Rauwolfia vomitoria growing in different Himalayan ranges is an example of:",
            bn: "হিমালয়ের বিভিন্ন রেঞ্জে জন্মানো ঔষধি উদ্ভিদ রাউওলফিয়া ভোমিটোরিয়া দ্বারা প্রদর্শিত জেনেটিক বৈচিত্র্য কোনটির উদাহরণ?"
        },
        options: [
            { en: "Species diversity", bn: "প্রজাতি বৈচিত্র্য" },
            { en: "Genetic diversity", bn: "জেনেটিক বৈচিত্র্য" },
            { en: "Ecological diversity", bn: "পরিবেশগত বৈচিত্র্য" },
            { en: "Community diversity", bn: "কমিউনিটি বৈচিত্র্য" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q269",
        question: {
            en: "India has more than 50,000 genetically different strains of:",
            bn: "ভারতে ৫০,০০০ এর বেশি জেনেটিকালি ভিন্ন স্ট্রেন রয়েছে কিসের?"
        },
        options: [
            { en: "Mango", bn: "আম" },
            { en: "Wheat", bn: "গম" },
            { en: "Rice", bn: "ধান" },
            { en: "Corn", bn: "ভূট্টা" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q270",
        question: {
            en: "The Western Ghats having a greater amphibian species diversity than the Eastern Ghats is an example of:",
            bn: "পশ্চিমঘাটে পূর্বঘাটের চেয়ে বেশি উভচর প্রজাতির বৈচিত্র্য কোনটির উদাহরণ?"
        },
        options: [
            { en: "Genetic diversity", bn: "জেনেটিক বৈচিত্র্য" },
            { en: "Species diversity", bn: "প্রজাতি বৈচিত্র্য" },
            { en: "Ecological diversity", bn: "পরিবেশগত বৈচিত্র্য" },
            { en: "Ecosystem diversity", bn: "বাস্তুতন্ত্র বৈচিত্র্য" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q271",
        question: {
            en: "According to the IUCN (2004), the total number of plant and animal species described so far is slightly more than:",
            bn: "IUCN (২০০৪) অনুসারে, এখন পর্যন্ত বর্ণিত উদ্ভিদ ও প্রাণী প্রজাতির মোট সংখ্যা কতের সামান্য বেশি?"
        },
        options: [
            { en: "0.5 million", bn: "০.৫ মিলিয়ন" },
            { en: "1.0 million", bn: "১.০ মিলিয়ন" },
            { en: "1.5 million", bn: "১.৫ মিলিয়ন" },
            { en: "2.0 million", bn: "২.০ মিলিয়ন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q272",
        question: {
            en: "A more conservative and scientifically sound estimate made by Robert May places the global species diversity at about:",
            bn: "রবার্ট মে দ্বারা করা একটি আরও রক্ষণশীল এবং বৈজ্ঞানিকভাবে সঠিক অনুমান বিশ্ব প্রজাতির বৈচিত্র্যকে প্রায় কততে স্থাপন করে?"
        },
        options: [
            { en: "3 million", bn: "৩ মিলিয়ন" },
            { en: "7 million", bn: "৭ মিলিয়ন" },
            { en: "10 million", bn: "১০ মিলিয়ন" },
            { en: "15 million", bn: "১৫ মিলিয়ন" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q273",
        question: {
            en: "More than what percentage of all species recorded are animals?",
            bn: "রেকর্ডকৃত সমস্ত প্রজাতির কত শতাংশের বেশি প্রাণী?"
        },
        options: [
            { en: "30%", bn: "৩০%" },
            { en: "50%", bn: "৫০%" },
            { en: "70%", bn: "৭০%" },
            { en: "90%", bn: "৯০%" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q274",
        question: {
            en: "Among animals, which group is the most species-rich, making up more than 70% of the total?",
            bn: "প্রাণীদের মধ্যে, কোন গোষ্ঠীটি সবচেয়ে প্রজাতি-সমৃদ্ধ, মোট সংখ্যার ৭০% এর বেশি গঠন করে?"
        },
        options: [
            { en: "Mammals", bn: "স্তন্যপায়ী প্রাণী" },
            { en: "Birds", bn: "পাখি" },
            { en: "Insects", bn: "পোকামাকড়" },
            { en: "Fishes", bn: "মাছ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q275",
        question: {
            en: "The number of fungi species in the world is more than the combined total of the species of:",
            bn: "বিশ্বে ছত্রাক প্রজাতির সংখ্যা নিম্নলিখিতগুলির সম্মিলিত মোট প্রজাতির চেয়ে বেশি:"
        },
        options: [
            { en: "Insects and crustaceans", bn: "পোকামাকড় এবং ক্রাস্টেশিয়ান" },
            { en: "Fishes, amphibians, reptiles, and mammals", bn: "মাছ, উভচর, সরীসৃপ এবং স্তন্যপায়ী প্রাণী" },
            { en: "Plants and algae", bn: "উদ্ভিদ এবং শৈবাল" },
            { en: "Birds and mammals", bn: "পাখি এবং স্তন্যপায়ী প্রাণী" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q276",
        question: {
            en: "India has what percentage of the world's land area?",
            bn: "বিশ্বের স্থলভাগের কত শতাংশ ভারতের?"
        },
        options: [
            { en: "1.0%", bn: "১.০%" },
            { en: "2.4%", bn: "২.৪%" },
            { en: "5.5%", bn: "৫.৫%" },
            { en: "8.1%", bn: "৮.১%" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q277",
        question: {
            en: "India's share of global species diversity is an impressive:",
            bn: "বিশ্ব প্রজাতির বৈচিত্র্যে ভারতের অংশীদারিত্ব চিত্তাকর্ষক কত শতাংশ?"
        },
        options: [
            { en: "2.4%", bn: "২.৪%" },
            { en: "5.0%", bn: "৫.০%" },
            { en: "8.1%", bn: "৮.১%" },
            { en: "12.5%", bn: "১২.৫%" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q278",
        question: {
            en: "Species diversity generally decreases as we move from:",
            bn: "প্রজাতি বৈচিত্র্য সাধারণত হ্রাস পায় যখন আমরা ____ থেকে ____ দিকে যাই:"
        },
        options: [
            { en: "Poles towards the equator", bn: "মেরু থেকে বিষুবরেখার দিকে" },
            { en: "Equator towards the poles", bn: "বিষুবরেখা থেকে মেরুর দিকে" },
            { en: "Low altitudes to high altitudes", bn: "নিম্ন উচ্চতা থেকে উচ্চ উচ্চতার দিকে" },
            { en: "Coastal areas to inland areas", bn: "উপকূলীয় এলাকা থেকে অভ্যন্তরীণ এলাকার দিকে" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q279",
        question: {
            en: "Colombia, located near the equator, has nearly how many species of birds?",
            bn: "কলম্বিয়া, বিষুবরেখার কাছাকাছি অবস্থিত, প্রায় কত প্রজাতির পাখি রয়েছে?"
        },
        options: [
            { en: "105", bn: "১০৫" },
            { en: "560", bn: "৫৬০" },
            { en: "1,400", bn: "১,৪০০" },
            { en: "3,000", bn: "৩,০০০" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q280",
        question: {
            en: "The Amazonian rain forest in South America has the greatest biodiversity on earth and is home to more than how many species of plants?",
            bn: "দক্ষিণ আমেরিকার অ্যামাজোনিয়ান রেইনফরেস্টে পৃথিবীর সবচেয়ে বেশি জীববৈচিত্র্য রয়েছে এবং এটি ____ এর বেশি উদ্ভিদ প্রজাতির আবাসস্থল?"
        },
        options: [
            { en: "10,000", bn: "১০,০০০" },
            { en: "20,000", bn: "২০,০০০" },
            { en: "30,000", bn: "৩০,০০০" },
            { en: "40,000", bn: "৪০,০০০" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q281",
        question: {
            en: "The relationship between species richness and area for a wide variety of taxa turns out to be a:",
            bn: "বিভিন্ন ট্যাক্সার জন্য প্রজাতির সমৃদ্ধি এবং এলাকার মধ্যে সম্পর্কটি কী হিসেবে পরিণত হয়?"
        },
        options: [
            { en: "Straight line", bn: "সরল রেখা" },
            { en: "Rectangular hyperbola", bn: "আয়তাকার হাইপারবোলা" },
            { en: "Parabola", bn: "প্যারাবোলা" },
            { en: "Sigmoid curve", bn: "সিগময়েড বক্ররেখা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q282",
        question: {
            en: "On a logarithmic scale, the species-area relationship is a:",
            bn: "লগারিদমিক স্কেলে, প্রজাতি-এলাকার সম্পর্কটি কী?"
        },
        options: [
            { en: "Curve", bn: "বক্ররেখা" },
            { en: "Straight line", bn: "সরল রেখা" },
            { en: "Circle", bn: "বৃত্ত" },
            { en: "Hyperbola", bn: "হাইপারবোলা" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q283",
        question: {
            en: "The value of Z (slope of the line) in the species-area relationship (log S = log C + Z log A) for small areas generally lies in the range of:",
            bn: "ছোট এলাকার জন্য প্রজাতি-এলাকার সম্পর্কে Z (রেখার ঢাল) এর মান (log S = log C + Z log A) সাধারণত কোন পরিসরে থাকে?"
        },
        options: [
            { en: "0.01 to 0.02", bn: "০.০১ থেকে ০.০২" },
            { en: "0.1 to 0.2", bn: "০.১ থেকে ০.২" },
            { en: "0.5 to 0.7", bn: "০.৫ থেকে ০.৭" },
            { en: "1.0 to 1.2", bn: "১.০ থেকে ১.২" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q284",
        question: {
            en: "Who proposed the 'rivet popper hypothesis' to explain the importance of species richness?",
            bn: "প্রজাতি সমৃদ্ধির গুরুত্ব ব্যাখ্যা করার জন্য কে 'rivet popper hypothesis' প্রস্তাব করেছিলেন?"
        },
        options: [
            { en: "David Tilman", bn: "ডেভিড টিলম্যান" },
            { en: "Alexander von Humboldt", bn: "আলেকজান্ডার ভন হামবোল্ট" },
            { en: "Paul Ehrlich", bn: "পল এরলিচ" },
            { en: "Robert May", bn: "রবার্ট মে" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q285",
        question: {
            en: "The IUCN Red List (2004) documents the extinction of how many species in the last 500 years?",
            bn: "IUCN রেড লিস্ট (২০০৪) গত ৫০০ বছরে কত প্রজাতির বিলুপ্তি নথিভুক্ত করেছে?"
        },
        options: [
            { en: "125", bn: "১২৫" },
            { en: "338", bn: "৩৩৮" },
            { en: "550", bn: "৫৫০" },
            { en: "784", bn: "৭৮৪" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q286",
        question: {
            en: "The dodo, which became extinct, was native to:",
            bn: "ডোডো, যা বিলুপ্ত হয়ে গেছে, তার আদি নিবাস ছিল:"
        },
        options: [
            { en: "Australia", bn: "অস্ট্রেলিয়া" },
            { en: "Africa", bn: "আফ্রিকা" },
            { en: "Mauritius", bn: "মরিশাস" },
            { en: "Russia", bn: "রাশিয়া" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q287",
        question: {
            en: "The sobriquet used to describe the four major causes of biodiversity losses is:",
            bn: "জীববৈচিত্র্য হ্রাসের চারটি প্রধান কারণ বর্ণনা করতে ব্যবহৃত ডাকনামটি হল:"
        },
        options: [
            { en: "The Fatal Four", bn: "দ্য ফ্যাটাল ফোর" },
            { en: "The Evil Quartet", bn: "দ্য ইভিল কোয়ার্টেট" },
            { en: "The Destructive Dozen", bn: "দ্য ডেস্ট্রাক্টিভ ডজন" },
            { en: "The Sinister Six", bn: "দ্য সিনিস্টার সিক্স" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q288",
        question: {
            en: "Which is considered the most important cause driving animals and plants to extinction?",
            bn: "প্রাণী ও উদ্ভিদকে বিলুপ্তির দিকে চালিত করার সবচেয়ে গুরুত্বপূর্ণ কারণ কোনটি?"
        },
        options: [
            { en: "Over-exploitation", bn: "অতি-শোষণ" },
            { en: "Alien species invasions", bn: "বিদেশী প্রজাতির আক্রমণ" },
            { en: "Co-extinctions", bn: "সহ-বিলুপ্তি" },
            { en: "Habitat loss and fragmentation", bn: "আবাসস্থল হ্রাস এবং খণ্ডিতকরণ" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q289",
        question: {
            en: "The Amazon rain forest in South America is so huge that it is called the:",
            bn: "দক্ষিণ আমেরিকার অ্যামাজন রেইনফরেস্ট এত বিশাল যে এটিকে বলা হয়:"
        },
        options: [
            { en: "Heart of the planet", bn: "গ্রহের হৃদয়" },
            { en: "Lungs of the planet", bn: "গ্রহের ফুসফুস" },
            { en: "Brain of the planet", bn: "গ্রহের মস্তিষ্ক" },
            { en: "Kidneys of the planet", bn: "গ্রহের কিডনি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q290",
        question: {
            en: "The Nile perch introduced into Lake Victoria in east Africa led to the extinction of many species of:",
            bn: "পূর্ব আফ্রিকার ভিক্টোরিয়া হ্রদে নীলনদীর পার্চ মাছের প্রবর্তন ____ এর অনেক প্রজাতির বিলুপ্তির কারণ হয়েছিল:"
        },
        options: [
            { en: "Aquatic plants", bn: "জলজ উদ্ভিদ" },
            { en: "Cichlid fish", bn: "সিচলিড মাছ" },
            { en: "Amphibians", bn: "উভচর" },
            { en: "Water birds", bn: "জলজ পাখি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q291",
        question: {
            en: "The invasive weed species Parthenium is also known as:",
            bn: "আক্রমণাত্মক আগাছা প্রজাতি পারথেনিয়াম এছাড়াও পরিচিত:"
        },
        options: [
            { en: "Water hyacinth", bn: "জলজ কচুরিপানা" },
            { en: "Lantana", bn: "ল্যান্টানা" },
            { en: "Carrot grass", bn: "গাজর ঘাস" },
            { en: "Eicchornia", bn: "আইকর্নিয়া" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q292",
        question: {
            en: "When a host fish species becomes extinct, its unique assemblage of parasites also meets the same fate. This is an example of:",
            bn: "যখন একটি হোস্ট মাছের প্রজাতি বিলুপ্ত হয়ে যায়, তখন তার অনন্য পরজীবী assemblage-ও একই পরিণতি ভোগ করে। এটি কোনটির উদাহরণ?"
        },
        options: [
            { en: "Habitat loss", bn: "আবাসস্থল হ্রাস" },
            { en: "Over-exploitation", bn: "অতি-শোষণ" },
            { en: "Alien species invasion", bn: "বিদেশী প্রজাতির আক্রমণ" },
            { en: "Co-extinctions", bn: "সহ-বিলুপ্তি" }
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q293",
        question: {
            en: "Protecting the whole ecosystem to save its biodiversity at all levels is called:",
            bn: "এর জীববৈচিত্র্যকে সমস্ত স্তরে রক্ষা করার জন্য সম্পূর্ণ বাস্তুতন্ত্রকে রক্ষা করাকে বলা হয়:"
        },
        options: [
            { en: "Ex situ conservation", bn: "এক্স সিটু সংরক্ষণ" },
            { en: "In situ conservation", bn: "ইন সিটু সংরক্ষণ" },
            { en: "Cryopreservation", bn: "ক্রায়োপ্রিজার্ভেশন" },
            { en: "Seed banking", bn: "বীজ ব্যাংকিং" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q294",
        question: {
            en: "Regions with very high levels of species richness and high degree of endemism are known as:",
            bn: "অত্যন্ত উচ্চ মাত্রার প্রজাতি সমৃদ্ধি এবং উচ্চ মাত্রার এন্ডেমিজম সহ অঞ্চলগুলিকে কী বলা হয়?"
        },
        options: [
            { en: "National Parks", bn: "জাতীয় উদ্যান" },
            { en: "Wildlife Sanctuaries", bn: "বন্যপ্রাণী অভয়ারণ্য" },
            { en: "Biodiversity hotspots", bn: "জীববৈচিত্র্য হটস্পট" },
            { en: "Biosphere Reserves", bn: "বায়োস্ফিয়ার রিজার্ভ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q295",
        question: {
            en: "How many biodiversity hotspots were initially identified globally?",
            bn: "প্রাথমিকভাবে বিশ্বব্যাপী কতগুলি জীববৈচিত্র্য হটস্পট চিহ্নিত করা হয়েছিল?"
        },
        options: [
            { en: "10", bn: "১০" },
            { en: "15", bn: "১৫" },
            { en: "25", bn: "২৫" },
            { en: "34", bn: "৩৪" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q296",
        question: {
            en: "Which of these is NOT a biodiversity hotspot covering India's exceptionally high biodiversity regions?",
            bn: "নিম্নলিখিতগুলির মধ্যে কোনটি ভারতের অত্যন্ত উচ্চ জীববৈচিত্র্য অঞ্চলগুলিকে কভারকারী একটি জীববৈচিত্র্য হটস্পট নয়?"
        },
        options: [
            { en: "Western Ghats and Sri Lanka", bn: "পশ্চিমঘাট এবং শ্রীলঙ্কা" },
            { en: "Indo-Burma", bn: "ইন্দো-বার্মা" },
            { en: "Eastern Ghats", bn: "পূর্বঘাট" },
            { en: "Himalaya", bn: "হিমালয়" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q297",
        question: {
            en: "Sacred groves are examples of:",
            bn: "পবিত্র উপবন কিসের উদাহরণ?"
        },
        options: [
            { en: "Ex situ conservation", bn: "এক্স সিটু সংরক্ষণ" },
            { en: "In situ conservation through traditional practices", bn: "ঐতিহ্যবাহী পদ্ধতির মাধ্যমে ইন সিটু সংরক্ষণ" },
            { en: "Botanical gardens", bn: "বোটানিক্যাল গার্ডেন" },
            { en: "Gene banks", bn: "জিন ব্যাংক" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q298",
        question: {
            en: "Zoological parks, botanical gardens, and wildlife safari parks are examples of:",
            bn: "প্রাণিবিদ্যা উদ্যান, বোটানিক্যাল গার্ডেন এবং বন্যপ্রাণী সাফারি পার্ক কিসের উদাহরণ?"
        },
        options: [
            { en: "In situ conservation", bn: "ইন সিটু সংরক্ষণ" },
            { en: "Ex situ conservation", bn: "এক্স সিটু সংরক্ষণ" },
            { en: "Sacred groves", bn: "পবিত্র উপবন" },
            { en: "National parks", bn: "জাতীয় উদ্যান" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q299",
        question: {
            en: "The historic Convention on Biological Diversity ('The Earth Summit') was held in Rio de Janeiro in:",
            bn: "জীববৈচিত্র্য সম্পর্কিত ঐতিহাসিক কনভেনশন ('আর্থ সামিট') রিও ডি জেনিরোতে অনুষ্ঠিত হয়েছিল কোন সালে?"
        },
        options: [
            { en: "1982", bn: "১৯৮২" },
            { en: "1992", bn: "১৯৯২" },
            { en: "2002", bn: "২০০২" },
            { en: "2012", bn: "২০১২" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q300",
        question: {
            en: "The World Summit on Sustainable Development was held in 2002 in:",
            bn: "টেকসই উন্নয়ন সম্পর্কিত বিশ্ব শীর্ষ সম্মেলন ২০০২ সালে কোথায় অনুষ্ঠিত হয়েছিল?"
        },
        options: [
            { en: "Rio de Janeiro, Brazil", bn: "রিও ডি জেনিরো, ব্রাজিল" },
            { en: "Stockholm, Sweden", bn: "স্টকহোম, সুইডেন" },
            { en: "Johannesburg, South Africa", bn: "জোহানেসবার্গ, দক্ষিণ আফ্রিকা" },
            { en: "Kyoto, Japan", bn: "কিয়োটো, জাপান" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q301",
        question: {
            en: "The genetic diversity within Rauwolfia vomitoria is reflected in the potency and concentration of the active chemical:",
            bn: "রাউওলফিয়া ভোমিটোরিয়ার মধ্যে জেনেটিক বৈচিত্র্য সক্রিয় রাসায়নিকের potency এবং concentration এ প্রতিফলিত হয়:"
        },
        options: [
            { en: "Quinine", bn: "কুইনাইন" },
            { en: "Morphine", bn: "মরফিন" },
            { en: "Reserpine", bn: "রেসার্পিন" },
            { en: "Digitoxin", bn: "ডিজিটক্সিন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q302",
        question: {
            en: "Why are species inventories more complete in temperate than in tropical countries?",
            bn: "ক্রান্তীয় দেশগুলির তুলনায় নাতিশীতোষ্ণ দেশগুলিতে প্রজাতির ইনভেন্টরি কেন বেশি সম্পূর্ণ?"
        },
        options: [
            { en: "Tropical countries have fewer species.", bn: "ক্রান্তীয় দেশগুলিতে কম প্রজাতি রয়েছে।" },
            { en: "Temperate countries have more taxonomists and resources for such studies.", bn: "নাতিশীতোষ্ণ দেশগুলিতে এই ধরনের গবেষণার জন্য বেশি taxonomist এবং সম্পদ রয়েছে।" },
            { en: "Tropical species are harder to identify.", bn: "ক্রান্তীয় প্রজাতিগুলি সনাক্ত করা কঠিন।" },
            { en: "Tropical ecosystems are less accessible.", bn: "ক্রান্তীয় বাস্তুতন্ত্রগুলি কম সহজলভ্য।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q303",
        question: {
            en: "Biologists estimate global species diversity by making a statistical comparison of temperate-tropical species richness of an exhaustively studied group (like insects) and then:",
            bn: "জীববিজ্ঞানীরা একটি পুঙ্খানুপুঙ্খভাবে অধ্যয়ন করা গোষ্ঠী (যেমন পোকামাকড়) এর নাতিশীতোষ্ণ-ক্রান্তীয় প্রজাতির সমৃদ্ধির একটি পরিসংখ্যানগত তুলনা করে বিশ্ব প্রজাতির বৈচিত্র্য অনুমান করেন এবং তারপর:"
        },
        options: [
            { en: "Directly counting all other species.", bn: "অন্যান্য সমস্ত প্রজাতির সরাসরি গণনা করা।" },
            { en: "Extrapolating this ratio to other groups of animals and plants.", bn: "এই অনুপাতকে প্রাণী ও উদ্ভিদের অন্যান্য গোষ্ঠীতে প্রসারিত করা।" },
            { en: "Assuming all groups have the same number of species as insects.", bn: "সমস্ত গোষ্ঠীতে পোকাদের মতো একই সংখ্যক প্রজাতি রয়েছে বলে ধরে নেওয়া।" },
            { en: "Focusing only on vertebrate species.", bn: "কেবলমাত্র মেরুদণ্ডী প্রজাতির উপর মনোযোগ দেওয়া।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q304",
        question: {
            en: "Why are conventional taxonomic methods not suitable for identifying many prokaryotic species?",
            bn: "অনেক প্রোক্যারিওটিক প্রজাতি সনাক্ত করার জন্য প্রচলিত taxonomic পদ্ধতিগুলি কেন উপযুক্ত নয়?"
        },
        options: [
            { en: "Prokaryotes do not have DNA.", bn: "প্রোক্যারিওটে ডিএনএ থাকে না।" },
            { en: "Many prokaryotic species are not culturable under laboratory conditions.", bn: "অনেক প্রোক্যারিওটিক প্রজাতি পরীক্ষাগার পরিস্থিতিতে culturable নয়।" },
            { en: "Prokaryotes lack distinct morphological features.", bn: "প্রোক্যারিওটদের স্বতন্ত্র রূপগত বৈশিষ্ট্য নেই।" },
            { en: "Prokaryotes reproduce too rapidly.", bn: "প্রোক্যারিওটরা খুব দ্রুত প্রজনন করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q305",
        question: {
            en: "One important hypothesis for greater biodiversity in tropics is that speciation is generally a function of time, and tropical latitudes have:",
            bn: "ক্রান্তীয় অঞ্চলে বৃহত্তর জীববৈচিত্র্যের জন্য একটি গুরুত্বপূর্ণ অনুমান হল যে speciation সাধারণত সময়ের একটি ফাংশন, এবং ক্রান্তীয় অক্ষাংশে রয়েছে:"
        },
        options: [
            { en: "Remained relatively undisturbed for millions of years, allowing longer evolutionary time.", bn: "লক্ষ লক্ষ বছর ধরে তুলনামূলকভাবে undisturbed ছিল, যা দীর্ঘ বিবর্তনীয় সময়ের অনুমতি দেয়।" },
            { en: "Experienced frequent glaciations, promoting rapid speciation.", bn: "ঘন ঘন glaciations অভিজ্ঞতা লাভ করেছে, যা দ্রুত speciation কে উৎসাহিত করে।" },
            { en: "Fewer ecological niches, leading to more specialized species.", bn: "কম পরিবেশগত নিশ, যা আরও বিশেষায়িত প্রজাতির দিকে পরিচালিত করে।" },
            { en: "Lower solar energy, causing slower mutation rates.", bn: "কম সৌর শক্তি, যা ধীর mutation rate সৃষ্টি করে।" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q306",
        question: {
            en: "For very large areas like entire continents, the slope of the species-area relationship (Z value) is typically:",
            bn: "পুরো মহাদেশের মতো খুব বড় এলাকার জন্য, প্রজাতি-এলাকা সম্পর্কের (Z মান) ঢাল সাধারণত কেমন হয়?"
        },
        options: [
            { en: "Steeper (e.g., 0.6 to 1.2)", bn: "খাড়া (যেমন, ০.৬ থেকে ১.২)" },
            { en: "Flatter (e.g., 0.01 to 0.05)", bn: "চ্যাপ্টা (যেমন, ০.০১ থেকে ০.০৫)" },
            { en: "The same as for small areas (0.1 to 0.2)", bn: "ছোট এলাকার মতোই (০.১ থেকে ০.২)" },
            { en: "Negative", bn: "নেতিবাচক" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q307",
        question: {
            en: "David Tilman's long-term ecosystem experiments found that plots with more species showed:",
            bn: "ডেভিড টিলম্যানের দীর্ঘমেয়াদী বাস্তুতন্ত্রের পরীক্ষাগুলিতে দেখা গেছে যে, যে plotগুলিতে বেশি প্রজাতি ছিল, সেগুলিতে দেখা গেছে:"
        },
        options: [
            { en: "More year-to-year variation in total biomass and lower productivity.", bn: "মোট বায়োমাস এবং কম উৎপাদনশীলতায় বছর-ওয়ারী আরও বেশি পরিবর্তন।" },
            { en: "Less year-to-year variation in total biomass and higher productivity.", bn: "মোট বায়োমাস এবং উচ্চতর উৎপাদনশীলতায় বছর-ওয়ারী কম পরিবর্তন।" },
            { en: "No difference in biomass variation or productivity compared to plots with fewer species.", bn: "কম প্রজাতির প্লটগুলির তুলনায় বায়োমাস পরিবর্তন বা উৎপাদনশীলতায় কোনো পার্থক্য নেই।" },
            { en: "Increased susceptibility to invasions by alien species.", bn: "বিদেশী প্রজাতির আক্রমণ দ্বারা বর্ধিত সংবেদনশীলতা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q308",
        question: {
            en: "The extinction of Steller's sea cow and passenger pigeon were primarily due to:",
            bn: "স্টেলার্স সি কাউ এবং প্যাসেঞ্জার পিজিয়নের বিলুপ্তি প্রধানত এর কারণে হয়েছিল:"
        },
        options: [
            { en: "Habitat loss", bn: "আবাসস্থল হ্রাস" },
            { en: "Alien species invasion", bn: "বিদেশী প্রজাতির আক্রমণ" },
            { en: "Over-exploitation by humans", bn: "মানুষ দ্বারা অতি-শোষণ" },
            { en: "Climate change", bn: "জলবায়ু পরিবর্তন" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q309",
        question: {
            en: "The African catfish Clarias gariepinus, introduced for aquaculture, poses a threat to indigenous catfishes in Indian rivers. This is an example of problems caused by:",
            bn: "আফ্রিকার catfish Clarias gariepinus, যা জলজ চাষের জন্য প্রবর্তিত হয়েছিল, ভারতীয় নদীগুলিতে স্থানীয় catfish-এর জন্য একটি হুমকি সৃষ্টি করে। এটি ____ দ্বারা সৃষ্ট সমস্যার একটি উদাহরণ:"
        },
        options: [
            { en: "Co-extinctions", bn: "সহ-বিলুপ্তি" },
            { en: "Habitat fragmentation", bn: "আবাসস্থল খণ্ডিতকরণ" },
            { en: "Alien species invasions", bn: "বিদেশী প্রজাতির আক্রমণ" },
            { en: "Over-exploitation", bn: "অতি-শোষণ" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q310",
        question: {
            en: "The \"narrowly utilitarian\" argument for conserving biodiversity emphasizes:",
            bn: "জীববৈচিত্র্য সংরক্ষণের জন্য \"সঙ্কীর্ণ উপযোগবাদী\" যুক্তিটি জোর দেয়:"
        },
        options: [
            { en: "The ethical responsibility to protect all species.", bn: "সমস্ত প্রজাতিকে রক্ষা করার নৈতিক দায়িত্ব।" },
            { en: "The ecosystem services like pollination and climate regulation.", bn: "পরাগায়ণ এবং জলবায়ু নিয়ন্ত্রণের মতো বাস্তুতন্ত্র পরিষেবা।" },
            { en: "The direct economic benefits humans derive from nature (food, medicine, industrial products).", bn: "প্রকৃতি থেকে মানুষ যে সরাসরি অর্থনৈতিক সুবিধা লাভ করে (খাদ্য, ঔষধ, শিল্প পণ্য)।" },
            { en: "The aesthetic and spiritual value of nature.", bn: "প্রকৃতির নান্দনিক এবং আধ্যাত্মিক মূল্য।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q311",
        question: {
            en: "Bioprospecting refers to:",
            bn: "বায়োপ্রস্পেক্টিং বোঝায়:"
        },
        options: [
            { en: "Conserving biodiversity in national parks.", bn: "জাতীয় উদ্যানগুলিতে জীববৈচিত্র্য সংরক্ষণ করা।" },
            { en: "Exploring molecular, genetic, and species-level diversity for products of economic importance.", bn: "আর্থিক গুরুত্বের পণ্যগুলির জন্য আণবিক, জেনেটিক এবং প্রজাতি-স্তরের বৈচিত্র্য অনুসন্ধান করা।" },
            { en: "The illegal trade of endangered species.", bn: "বিপন্ন প্রজাতির অবৈধ বাণিজ্য।" },
            { en: "Restoring degraded ecosystems.", bn: "অবক্ষয়িত বাস্তুতন্ত্র পুনরুদ্ধার করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q312",
        question: {
            en: "The \"broadly utilitarian\" argument for conserving biodiversity highlights the importance of:",
            bn: "জীববৈচিত্র্য সংরক্ষণের জন্য \"ব্যাপক উপযোগবাদী\" যুক্তিটি ____ এর গুরুত্ব তুলে ধরে:"
        },
        options: [
            { en: "Direct harvesting of timber and firewood.", bn: "কাঠ ও জ্বালানি কাঠের সরাসরি harvest।" },
            { en: "Ecosystem services like oxygen production by forests, pollination, and climate moderation.", bn: "বন দ্বারা অক্সিজেন উৎপাদন, পরাগায়ন, এবং জলবায়ু নিয়ন্ত্রণের মতো বাস্তুতন্ত্র পরিষেবা।" },
            { en: "Developing new pharmaceutical drugs from plants.", bn: "উদ্ভিদ থেকে নতুন ফার্মাসিউটিক্যাল ঔষধ তৈরি করা।" },
            { en: "The intrinsic value of every species.", bn: "প্রতিটি প্রজাতির অন্তর্নিহিত মূল্য।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q313",
        question: {
            en: "The \"ethical\" argument for conserving biodiversity is based on the idea that:",
            bn: "জীববৈচিত্র্য সংরক্ষণের জন্য \"নৈতিক\" যুক্তিটি এই ধারণার উপর ভিত্তি করে তৈরি যে:"
        },
        options: [
            { en: "Biodiversity is essential for economic development.", bn: "অর্থনৈতিক উন্নয়নের জন্য জীববৈচিত্র্য অপরিহার্য।" },
            { en: "All species have an intrinsic value, and we have a moral duty to protect them.", bn: "সমস্ত প্রজাতির একটি অন্তর্নিহিত মূল্য রয়েছে, এবং তাদের রক্ষা করা আমাদের নৈতিক দায়িত্ব।" },
            { en: "Conserving biodiversity provides better recreational opportunities.", bn: "জীববৈচিত্র্য সংরক্ষণ আরও ভাল বিনোদনের সুযোগ প্রদান করে।" },
            { en: "Only species useful to humans need to be conserved.", bn: "কেবলমাত্র মানুষের জন্য দরকারী প্রজাতির সংরক্ষণ করা প্রয়োজন।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q314",
        question: {
            en: "Endemism, a key criterion for identifying biodiversity hotspots, refers to:",
            bn: "এন্ডেমিজম, জীববৈচিত্র্য হটস্পট চিহ্নিত করার একটি মূল মাপকাঠি, যা বোঝায়:"
        },
        options: [
            { en: "Species that are found worldwide.", bn: "বিশ্বজুড়ে পাওয়া প্রজাতি।" },
            { en: "Species that are confined to a particular region and not found anywhere else.", bn: "যে প্রজাতিগুলি একটি নির্দিষ্ট অঞ্চলে সীমাবদ্ধ এবং অন্য কোথাও পাওয়া যায় না।" },
            { en: "Species that are critically endangered.", bn: "যে প্রজাতিগুলি মারাত্মকভাবে বিপন্ন।" },
            { en: "Species that have high economic value.", bn: "যে প্রজাতিগুলির উচ্চ অর্থনৈতিক মূল্য রয়েছে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q315",
        question: {
            en: "Cryopreservation techniques, used in ex situ conservation, involve preserving gametes of threatened species in viable and fertile condition at:",
            bn: "ক্রায়োপ্রিজার্ভেশন কৌশলগুলি, এক্স সিটু সংরক্ষণে ব্যবহৃত, বিপন্ন প্রজাতির গ্যামেটগুলি কার্যকর এবং উর্বর অবস্থায় সংরক্ষণ করে:"
        },
        options: [
            { en: "Room temperature", bn: "ঘরের তাপমাত্রা" },
            { en: "Slightly above freezing point (4°C)", bn: "হিমাঙ্কের সামান্য উপরে (৪°C)" },
            { en: "Very low temperatures (e.g., using liquid nitrogen at -196°C)", bn: "খুব নিম্ন তাপমাত্রা (যেমন, -১৯৬°C এ তরল নাইট্রোজেন ব্যবহার করে)" },
            { en: "High temperatures to sterilize them.", bn: "তাদের জীবাণুমুক্ত করার জন্য উচ্চ তাপমাত্রা।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q316",
        question: {
            en: "While Robert May's estimate of 7 million global species is widely cited, the actual number could be much higher if prokaryotic diversity, identified using molecular criteria, is fully accounted for. This is because:",
            bn: "রবার্ট মে'র ৭ মিলিয়ন বৈশ্বিক প্রজাতির অনুমান ব্যাপকভাবে উদ্ধৃত হলেও, আণবিক মানদণ্ড ব্যবহার করে চিহ্নিত প্রোক্যারিওটিক বৈচিত্র্য সম্পূর্ণরূপে হিসাব করা হলে প্রকৃত সংখ্যা অনেক বেশি হতে পারে। এর কারণ হলো:"
        },
        options: [
            { en: "Prokaryotes are much larger than eukaryotes.", bn: "প্রোক্যারিওট ইউক্যারিওটদের চেয়ে অনেক বড়।" },
            { en: "Conventional taxonomy based on morphology vastly underestimates the genetic and metabolic diversity of prokaryotes, many of which are unculturable.", bn: "রূপবিজ্ঞানের উপর ভিত্তি করে প্রচলিত ট্যাক্সোনমি প্রোক্যারিওটদের জেনেটিক এবং বিপাকীয় বৈচিত্র্যকে ব্যাপকভাবে অবমূল্যায়ন করে, যার মধ্যে অনেকগুলি unculturable।" },
            { en: "Prokaryotes have a very slow rate of evolution.", bn: "প্রোক্যারিওটদের বিবর্তনের হার খুব ধীর।" },
            { en: "All prokaryotic species have already been described.", bn: "সমস্ত প্রোক্যারিওটিক প্রজাতি ইতিমধ্যেই বর্ণিত হয়েছে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q317",
        question: {
            en: "The species-area relationship (S = CA^Z) indicates that species richness increases with area, but the Z value (slope) being steeper for continents than for small islands suggests that:",
            bn: "প্রজাতি-এলাকা সম্পর্ক (S = CA^Z) নির্দেশ করে যে প্রজাতির সমৃদ্ধি এলাকার সাথে বৃদ্ধি পায়, কিন্তু ছোট দ্বীপের চেয়ে মহাদেশের জন্য Z মান (ঢাল) খাড়া হওয়ার অর্থ হল:"
        },
        options: [
            { en: "Speciation rates are lower on continents.", bn: "মহাদেশে speciation এর হার কম।" },
            { en: "Extinction rates are higher on continents.", bn: "মহাদেশে বিলুপ্তির হার বেশি।" },
            { en: "Larger areas like continents encompass a greater variety of habitats and environmental gradients, allowing for more niche specialization and higher beta diversity, leading to a faster accumulation of species with area.", bn: "মহাদেশের মতো বড় এলাকাগুলিতে বিভিন্ন ধরণের বাসস্থান এবং পরিবেশগত gradient অন্তর্ভুক্ত থাকে, যা আরও niche specialization এবং উচ্চতর বিটা বৈচিত্র্যের অনুমতি দেয়, যার ফলে এলাকার সাথে প্রজাতির দ্রুত সঞ্চয় হয়।" },
            { en: "Dispersal is more limited on continents.", bn: "মহাদেশে dispersal বেশি সীমিত।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q318",
        question: {
            en: "In Paul Ehrlich's \"rivet popper hypothesis,\" the loss of \"rivets on the wings\" (key species) is considered more critical than loss of rivets on seats. This analogy implies that:",
            bn: "পল এরলিচের \"রিভেট পপার হাইপোথিসিস\"-এ, \"ডানার রিভেট\" (মূল প্রজাতি) হারানোকে সিটের রিভেট হারানোর চেয়ে বেশি গুরুত্বপূর্ণ বলে মনে করা হয়। এই সাদৃশ্যটি বোঝায় যে:"
        },
        options: [
            { en: "All species in an ecosystem are equally important for its functioning.", bn: "একটি বাস্তুতন্ত্রে সমস্ত প্রজাতি এর কার্যকারিতার জন্য সমান গুরুত্বপূর্ণ।" },
            { en: "The extinction of species with crucial functional roles (keystone species) can have disproportionately large and cascading negative effects on ecosystem stability and services.", bn: "গুরুত্বপূর্ণ কার্যকরী ভূমিকা (keystone species) সহ প্রজাতির বিলুপ্তির বাস্তুতন্ত্রের স্থিতিশীলতা এবং পরিষেবাগুলিতে অসামঞ্জস্যপূর্ণভাবে বড় এবং cascading নেতিবাচক প্রভাব থাকতে পারে।" },
            { en: "Species richness alone determines ecosystem stability, regardless of the roles of individual species.", bn: "প্রজাতি সমৃদ্ধি একাই বাস্তুতন্ত্রের স্থিতিশীলতা নির্ধারণ করে, পৃথক প্রজাতির ভূমিকা নির্বিশেষে।" },
            { en: "Only aesthetically pleasing species are important for ecosystem health.", bn: "কেবলমাত্র নান্দনিকভাবে আকর্ষণীয় প্রজাতি বাস্তুতন্ত্রের স্বাস্থ্যের জন্য গুরুত্বপূর্ণ।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q319",
        question: {
            en: "Habitat fragmentation, a major cause of biodiversity loss, particularly affects mammals and birds requiring large territories and animals with migratory habits because:",
            bn: "আবাসস্থল খণ্ডিতকরণ, জীববৈচিত্র্য হ্রাসের একটি প্রধান কারণ, বিশেষ করে বৃহৎ অঞ্চল প্রয়োজন এমন স্তন্যপায়ী প্রাণী এবং পাখিদের এবং পরিযায়ী প্রাণীগুলিকে প্রভাবিত করে কারণ:"
        },
        options: [
            { en: "Smaller fragments cannot support the minimum viable population size or disrupt essential migratory routes and resource availability.", bn: "ছোট fragment গুলো ন্যূনতম কার্যকর জনসংখ্যার আকারকে সমর্থন করতে পারে না বা প্রয়োজনীয় পরিযায়ী রুট এবং সংস্থান সহজলভ্যতাকে ব্যাহত করতে পারে না।" },
            { en: "Fragmentation increases the overall amount of habitat available.", bn: "খণ্ডিতকরণ সামগ্রিকভাবে উপলব্ধ আবাসস্থলের পরিমাণ বৃদ্ধি করে।" },
            { en: "Smaller fragments have fewer predators.", bn: "ছোট fragment গুলিতে কম শিকারী থাকে।" },
            { en: "Fragmentation leads to increased genetic diversity within isolated populations.", bn: "খণ্ডিতকরণ বিচ্ছিন্ন জনসংখ্যার মধ্যে জেনেটিক বৈচিত্র্য বৃদ্ধি করে।" }
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q320",
        question: {
            en: "The introduction of Nile perch into Lake Victoria in east Africa led to the extinction of many species of:",
            bn: "পূর্ব আফ্রিকার ভিক্টোরিয়া হ্রদে নীলনদীর পার্চ মাছের প্রবর্তন ____ এর অনেক প্রজাতির বিলুপ্তির কারণ হয়েছিল:"
        },
        options: [
            { en: "Aquatic plants", bn: "জলজ উদ্ভিদ" },
            { en: "Cichlid fish", bn: "সিচলিড মাছ" },
            { en: "Amphibians", bn: "উভচর" },
            { en: "Water birds", bn: "জলজ পাখি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q321",
        question: {
            en: "The argument that the Amazon forest produces 20% of Earth's oxygen through photosynthesis is a powerful \"broadly utilitarian\" reason for its conservation. This service directly contributes to:",
            bn: "অ্যামাজন বন সালোকসংশ্লেষণের মাধ্যমে পৃথিবীর ২০% অক্সিজেন উৎপাদন করে এই যুক্তিটি এর সংরক্ষণের জন্য একটি শক্তিশালী \"ব্যাপক উপযোগবাদী\" কারণ। এই পরিষেবাটি সরাসরি অবদান রাখে:"
        },
        options: [
            { en: "Global carbon sequestration only.", bn: "কেবলমাত্র বৈশ্বিক কার্বন sequestration।" },
            { en: "Maintaining the atmospheric composition necessary for aerobic life globally.", bn: "বিশ্বব্যাপী aerobic জীবনের জন্য প্রয়োজনীয় বায়ুমণ্ডলীয় গঠন বজায় রাখা।" },
            { en: "Local climate regulation in the Amazon basin only.", bn: "কেবলমাত্র অ্যামাজন অববাহিকায় স্থানীয় জলবায়ু নিয়ন্ত্রণ।" },
            { en: "Soil fertility in the Amazon.", bn: "অ্যামাজনে মাটির উর্বরতা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q322",
        question: {
            en: "Biodiversity hotspots, while covering less than 2% of Earth's land area, are estimated to harbor an extremely high number of species. Concentrating conservation efforts on these hotspots is a strategy aimed at:",
            bn: "জীববৈচিত্র্য হটস্পটগুলি, পৃথিবীর স্থলভাগের ২% এর কম অঞ্চল দখল করলেও, অনুমান করা হয় যে এগুলিতে অত্যন্ত উচ্চ সংখ্যক প্রজাতি রয়েছে। এই হটস্পটগুলিতে সংরক্ষণ প্রচেষ্টা কেন্দ্রীভূত করা ____ এর লক্ষ্যযুক্ত একটি কৌশল:"
        },
        options: [
            { en: "Protecting all endangered species worldwide equally.", bn: "বিশ্বব্যাপী সমস্ত বিপন্ন প্রজাতিকে সমানভাবে রক্ষা করা।" },
            { en: "Maximizing the number of species protected with limited conservation resources by focusing on areas of high endemism and threat.", bn: "সীমিত সংরক্ষণ সংস্থান সহ উচ্চ এন্ডেমিজম এবং হুমকির ক্ষেত্রগুলিতে মনোযোগ দিয়ে সুরক্ষিত প্রজাতির সংখ্যা সর্বাধিক করা।" },
            { en: "Primarily promoting tourism in these regions.", bn: "প্রাথমিকভাবে এই অঞ্চলে পর্যটন প্রচার করা।" },
            { en: "Converting these areas into agricultural land.", bn: "এই অঞ্চলগুলিকে কৃষি জমিতে রূপান্তরিত করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q323",
        question: {
            en: "Ex situ conservation methods like seed banks and cryopreservation are crucial for:",
            bn: "বীজ ব্যাংক এবং ক্রায়োপ্রিজার্ভেশনের মতো এক্স সিটু সংরক্ষণ পদ্ধতিগুলি ____ এর জন্য অত্যন্ত গুরুত্বপূর্ণ:"
        },
        options: [
            { en: "Allowing natural evolution of species in their original habitats.", bn: "তাদের আসল আবাসস্থলে প্রজাতির প্রাকৃতিক বিবর্তনকে অনুমতি দেওয়া।" },
            { en: "Preserving genetic diversity, especially of threatened or economically important species, outside their natural habitats as a safeguard against extinction or for future use.", bn: "বিলুপ্তি বা ভবিষ্যতের ব্যবহারের বিরুদ্ধে সুরক্ষা হিসাবে তাদের প্রাকৃতিক আবাসস্থলের বাইরে জেনেটিক বৈচিত্র্য, বিশেষত বিপন্ন বা অর্থনৈতিকভাবে গুরুত্বপূর্ণ প্রজাতির, সংরক্ষণ করা।" },
            { en: "Directly restoring degraded ecosystems.", bn: "অবক্ষয়িত বাস্তুতন্ত্র সরাসরি পুনরুদ্ধার করা।" },
            { en: "Controlling populations of invasive species.", bn: "আক্রমণাত্মক প্রজাতির জনসংখ্যা নিয়ন্ত্রণ করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q324",
        question: {
            en: "The commitment made at the World Summit on Sustainable Development (2002) to achieve a significant reduction in the current rate of biodiversity loss by 2010 was ambitious. The (largely unmet) target highlights:",
            bn: "টেকসই উন্নয়ন সম্পর্কিত বিশ্ব শীর্ষ সম্মেলন (২০০২) এ ২০১০ সালের মধ্যে জীববৈচিত্র্য হ্রাসের বর্তমান হারকে উল্লেখযোগ্যভাবে হ্রাস করার যে প্রতিশ্রুতি দেওয়া হয়েছিল তা উচ্চাভিলাষী ছিল। (বড় অংশে পূরণ হয়নি) লক্ষ্যটি তুলে ধরে:"
        },
        options: [
            { en: "The ease with which global biodiversity loss can be reversed.", bn: "বৈশ্বিক জীববৈচিত্র্য হ্রাসকে সহজেই বিপরীত করা যায়।" },
            { en: "The complex socio-economic and political challenges in implementing effective, large-scale conservation measures despite scientific understanding.", bn: "বৈজ্ঞানিক উপলব্ধি সত্ত্বেও কার্যকর, বৃহৎ আকারের সংরক্ষণ ব্যবস্থা বাস্তবায়নে জটিল আর্থ-সামাজিক এবং রাজনৈতিক চ্যালেঞ্জ।" },
            { en: "That biodiversity loss was no longer a significant issue after 2002.", bn: "২০০২ সালের পর জীববৈচিত্র্য হ্রাস আর কোনো গুরুত্বপূর্ণ সমস্যা ছিল না।" },
            { en: "The primary responsibility of developing nations for biodiversity conservation.", bn: "জীববৈচিত্র্য সংরক্ষণের জন্য উন্নয়নশীল দেশগুলির প্রাথমিক দায়িত্ব।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q325",
        question: {
            en: "Sacred groves in India, like those in Meghalaya and the Western Ghats, often serve as refuges for rare and threatened plants. This form of in situ conservation is successful primarily due to:",
            bn: "ভারতের মেঘালয় এবং পশ্চিমঘাটের মতো পবিত্র উপবনগুলি প্রায়শই বিরল এবং বিপন্ন উদ্ভিদের আশ্রয়স্থল হিসাবে কাজ করে। ইন সিটু সংরক্ষণের এই রূপটি প্রাথমিকভাবে ____ এর কারণে সফল হয়:"
        },
        options: [
            { en: "Active government management and funding.", bn: "সক্রিয় সরকারি ব্যবস্থাপনা এবং তহবিল।" },
            { en: "The large geographical area they cover.", bn: "তারা যে বিশাল ভৌগোলিক এলাকা জুড়ে বিস্তৃত।" },
            { en: "Traditional, community-based protection rooted in religious and cultural beliefs, which often restricts resource extraction and habitat disturbance.", bn: "ধর্মীয় ও সাংস্কৃতিক বিশ্বাসে নিহিত ঐতিহ্যবাহী, সম্প্রদায়-ভিত্তিক সুরক্ষা, যা প্রায়শই সম্পদ নিষ্কাশন এবং আবাসস্থল disturbance কে সীমাবদ্ধ করে।" },
            { en: "The presence of unique soil types that support rare plants.", bn: "বিরল উদ্ভিদ সমর্থনকারী অনন্য মাটির প্রকারের উপস্থিতি।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q326",
        question: {
            en: "The latitudinal gradient in species diversity (higher in tropics) is a well-established pattern. If global climate change leads to significant warming and \"tropicalization\" of some current temperate zones, what is a complex, long-term potential consequence for biodiversity in those altered zones, considering both immigration and adaptation?",
            bn: "প্রজাতি বৈচিত্র্যে অক্ষাংশীয় gradient (ক্রান্তীয় অঞ্চলে বেশি) একটি সুপ্রতিষ্ঠিত প্যাটার্ন। যদি বিশ্ব জলবায়ু পরিবর্তন কিছু বর্তমান নাতিশীতোষ্ণ অঞ্চলের উল্লেখযোগ্য উষ্ণায়ন এবং \"tropicalization\" ঘটায়, তবে অভিবাসন এবং অভিযোজন উভয়ই বিবেচনা করে, সেই পরিবর্তিত অঞ্চলগুলিতে জীববৈচিত্র্যের জন্য একটি জটিল, দীর্ঘমেয়াদী সম্ভাব্য পরিণতি কী?"
        },
        options: [
            { en: "A rapid and predictable increase in species richness matching current tropical levels.", bn: "বর্তমান ক্রান্তীয় স্তরগুলির সাথে মিলে যাওয়া প্রজাতির সমৃদ্ধিতে একটি দ্রুত এবং অনুমানযোগ্য বৃদ্ধি।" },
            { en: "A potential increase in richness due to immigration of tropical-adapted species, but also potential loss of native temperate species unable to adapt or compete, leading to a novel, possibly less stable, community composition.", bn: "ক্রান্তীয়-অভিযোজিত প্রজাতির অভিবাসনের কারণে সমৃদ্ধির সম্ভাব্য বৃদ্ধি, তবে স্থানীয় নাতিশীতোষ্ণ প্রজাতির সম্ভাব্য ক্ষতিও যারা অভিযোজিত বা প্রতিযোগিতা করতে অক্ষম, যা একটি novel, সম্ভবত কম স্থিতিশীল, কমিউনিটি গঠনের দিকে পরিচালিত করবে।" },
            { en: "A definitive decrease in species richness as temperate species go extinct without replacement.", bn: "প্রতিস্থাপন ছাড়াই নাতিশীতোষ্ণ প্রজাতি বিলুপ্ত হওয়ায় প্রজাতির সমৃদ্ধিতে একটি নির্দিষ্ট হ্রাস।" },
            { en: "No significant change, as species are highly adaptable to gradual warming.", bn: "কোনো উল্লেখযোগ্য পরিবর্তন নেই, কারণ প্রজাতিগুলি ধীর উষ্ণায়নের সাথে অত্যন্ত অভিযোজিত।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q327",
        question: {
            en: "The species-area relationship (S = CA^Z) is often used to predict species loss due to habitat destruction. If 90% of a habitat is destroyed, and the Z value is 0.2, the predicted percentage of species loss is not 90%. This non-linear relationship implies that:",
            bn: "প্রজাতি-এলাকা সম্পর্ক (S = CA^Z) প্রায়শই আবাসস্থল ধ্বংসের কারণে প্রজাতির ক্ষতি অনুমান করতে ব্যবহৃত হয়। যদি একটি আবাসস্থলের ৯০% ধ্বংস হয়ে যায়, এবং Z এর মান ০.২ হয়, তবে প্রজাতির ক্ষতির পূর্বাভাসিত শতাংশ ৯০% নয়। এই অ-রৈখিক সম্পর্কটি বোঝায় যে:"
        },
        options: [
            { en: "Initial habitat loss causes a disproportionately small loss of species, but further loss accelerates extinction rates.", bn: "প্রাথমিক আবাসস্থল হ্রাস প্রজাতির অসামঞ্জস্যপূর্ণভাবে ছোট ক্ষতি ঘটায়, কিন্তু আরও ক্ষতি বিলুপ্তির হারকে ত্বরান্বিত করে।" },
            { en: "The relationship is such that a large proportion of species are lost with even minor habitat reduction, but the rate of loss decreases as more habitat is lost.", bn: "সম্পর্কটি এমন যে সামান্য আবাসস্থল হ্রাসের সাথেও প্রজাতির একটি বড় অংশ হারিয়ে যায়, কিন্তু আবাসস্থল যত বেশি হারায়, ক্ষতির হার তত কমে যায়।" },
            { en: "Species loss is directly proportional to habitat loss.", bn: "প্রজাতির ক্ষতি সরাসরি আবাসস্থল হ্রাসের আনুপাতিক।" },
            { en: "The Z value is irrelevant for predicting species loss.", bn: "প্রজাতির ক্ষতি অনুমান করার জন্য Z মান অপ্রাসঙ্গিক।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1) - OCR explanation provided for this question.
    },
    {
        id: "Q328",
        question: {
            en: "The \"Evil Quartet\" includes habitat loss, over-exploitation, alien species, and co-extinctions. Consider a scenario where a keystone pollinator species is driven to extinction by a new pesticide (an indirect effect of human activity). This could then lead to the extinction of several plant species dependent on it. This cascade would best be categorized as primarily involving:",
            bn: "\"ইভিল কোয়ার্টেট\" এর মধ্যে রয়েছে আবাসস্থল হ্রাস, অতি-শোষণ, বিদেশী প্রজাতি এবং সহ-বিলুপ্তি। একটি scenario বিবেচনা করুন যেখানে একটি keystone পরাগায়ণকারী প্রজাতি একটি নতুন কীটনাশক দ্বারা বিলুপ্তির দিকে চালিত হয় (মানব কার্যকলাপের একটি পরোক্ষ প্রভাব)। এটি তখন এর উপর নির্ভরশীল বেশ কয়েকটি উদ্ভিদ প্রজাতির বিলুপ্তির দিকে পরিচালিত করতে পারে। এই cascade কে প্রাথমিকভাবে কী হিসাবে শ্রেণীবদ্ধ করা হবে?"
        },
        options: [
            { en: "Only over-exploitation of the pollinator.", bn: "কেবলমাত্র পরাগায়ণকারীর অতি-শোষণ।" },
            { en: "A combination of habitat loss (for the plants if the area becomes unsuitable) and co-extinctions (plants due to pollinator loss). The pesticide effect is a form of environmental degradation leading to the initial loss.", bn: "আবাসস্থল হ্রাস (উদ্ভিদের জন্য যদি এলাকাটি অনুপযুক্ত হয়ে যায়) এবং সহ-বিলুপ্তির (পরাগায়ণকারীর ক্ষতির কারণে উদ্ভিদ) একটি সমন্বয়। কীটনাশকের প্রভাব পরিবেশগত অবক্ষয়ের একটি রূপ যা প্রাথমিক ক্ষতির দিকে পরিচালিত করে।" },
            { en: "Only alien species invasion (if the pesticide is considered alien).", bn: "কেবলমাত্র বিদেশী প্রজাতির আক্রমণ (যদি কীটনাশকটিকে বিদেশী হিসাবে বিবেচনা করা হয়)।" },
            { en: "A primary co-extinction event for the pollinator, followed by habitat loss for the plants.", bn: "পরাগায়ণকারীর জন্য একটি প্রাথমিক সহ-বিলুপ্তি ঘটনা, তারপরে উদ্ভিদের জন্য আবাসস্থল হ্রাস।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1) - OCR explanation provided for this question.
    },
    {
        id: "Q329",
        question: {
            en: "Ex situ conservation strategies like captive breeding programs for highly endangered animals face a significant challenge in maintaining long-term viability for reintroduction. This challenge is primarily:",
            bn: "বন্দী প্রজনন কর্মসূচির মতো এক্স সিটু সংরক্ষণ কৌশলগুলি অত্যন্ত বিপন্ন প্রাণীদের পুনঃপ্রবর্তনের জন্য দীর্ঘমেয়াদী কার্যকারিতা বজায় রাখতে একটি উল্লেখযোগ্য চ্যালেঞ্জের সম্মুখীন হয়। এই চ্যালেঞ্জটি প্রাথমিকভাবে হল:"
        },
        options: [
            { en: "The high cost of feeding animals in captivity.", bn: "বন্দী অবস্থায় প্রাণীদের খাওয়ানোর উচ্চ ব্যয়।" },
            { en: "The loss of genetic diversity due to small founder populations and potential inbreeding, and the loss of learned behaviors necessary for survival in the wild.", bn: "ছোট founder জনসংখ্যা এবং সম্ভাব্য ইনব্রিডিং এর কারণে জেনেটিক বৈচিত্র্যের ক্ষতি, এবং বন্য পরিবেশে বেঁচে থাকার জন্য প্রয়োজনীয় শেখা আচরণের ক্ষতি।" },
            { en: "The difficulty in transporting animals back to their natural habitat.", bn: "প্রাণীদের তাদের প্রাকৃতিক আবাসস্থলে ফেরত পাঠানোর অসুবিধা।" },
            { en: "The public's lack of interest in such programs.", bn: "এই ধরনের কর্মসূচিতে জনসাধারণের আগ্রহের অভাব।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q330",
        question: {
            en: "The debate around patenting genetic resources often involves the concept of \"functional equivalents\" mentioned in the Basmati rice case. If a company patents a specific gene sequence from a traditional plant variety that confers a desirable trait, and the patent extends to \"functional equivalents,\" this could potentially restrict:",
            bn: "জেনেটিক সংস্থানগুলির পেটেন্টিং সম্পর্কিত বিতর্ক প্রায়শই বাসমতি ধানের মামলায় উল্লিখিত \"কার্যকরী সমতুল্য\" এর ধারণাটি জড়িত। যদি একটি কোম্পানি একটি ঐতিহ্যবাহী উদ্ভিদের জাত থেকে একটি নির্দিষ্ট জিন ক্রমকে পেটেন্ট করে যা একটি কাঙ্ক্ষিত বৈশিষ্ট্য প্রদান করে, এবং পেটেন্টটি \"কার্যকরী সমতুল্য\" পর্যন্ত প্রসারিত হয়, তবে এটি সম্ভাব্যভাবে ____ কে সীমাবদ্ধ করতে পারে:"
        },
        options: [
            { en: "Only the use of that exact patented gene sequence.", bn: "কেবলমাত্র সেই সঠিক পেটেন্টকৃত জিন ক্রমের ব্যবহার।" },
            { en: "The use of other, naturally occurring or independently developed genes from different varieties or species that achieve the same desirable trait through a similar biochemical pathway or function.", bn: "বিভিন্ন জাত বা প্রজাতি থেকে প্রাপ্ত অন্যান্য, প্রাকৃতিকভাবে বিদ্যমান বা স্বাধীনভাবে বিকশিত জিনগুলির ব্যবহার যা একই কাঙ্ক্ষিত বৈশিষ্ট্যকে একটি অনুরূপ জৈব রাসায়নিক pathway বা কার্যকারিতার মাধ্যমে অর্জন করে।" },
            { en: "The traditional cultivation of the original plant variety by farmers.", bn: "কৃষকদের দ্বারা মূল উদ্ভিদের জাতের ঐতিহ্যবাহী চাষ।" },
            { en: "Research on unrelated genes in the same plant.", bn: "একই উদ্ভিদে সম্পর্কহীন জিনের উপর গবেষণা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q331",
        question: {
            en: "India's rich biodiversity and associated traditional knowledge represent a vast potential for bioprospecting. To ensure equitable benefit-sharing and prevent biopiracy, as outlined by the Convention on Biological Diversity (CBD) and national laws like the Biological Diversity Act, 2002, a critical mechanism required is:",
            bn: "ভারতের সমৃদ্ধ জীববৈচিত্র্য এবং সম্পর্কিত ঐতিহ্যবাহী জ্ঞান বায়োপ্রস্পেক্টিংয়ের জন্য একটি বিশাল সম্ভাবনাকে প্রতিনিধিত্ব করে। CBD (Convention on Biological Diversity) এবং ২০০২ সালের জৈবিক বৈচিত্র্য আইন (Biological Diversity Act) এর মতো জাতীয় আইন দ্বারা বর্ণিত ন্যায়সঙ্গত সুবিধা-ভাগাভাগি নিশ্চিত করতে এবং বায়োপাইরেসি প্রতিরোধ করতে, একটি গুরুত্বপূর্ণ প্রক্রিয়া প্রয়োজন হল:"
        },
        options: [
            { en: "Banning all international collaboration in biodiversity research.", bn: "জীববৈচিত্র্য গবেষণায় সমস্ত আন্তর্জাতিক সহযোগিতা নিষিদ্ধ করা।" },
            { en: "Establishing clear protocols for Prior Informed Consent (PIC) from knowledge holders/communities and Mutually Agreed Terms (MAT) for access and benefit-sharing before commercial utilization of resources or associated knowledge.", bn: "সম্পদ বা সম্পর্কিত জ্ঞানের বাণিজ্যিক ব্যবহারের আগে জ্ঞানধারক/সম্প্রদায়গুলি থেকে পূর্বানুমতি (PIC) এবং পারস্পরিক সম্মত শর্তাবলী (MAT) এর জন্য স্পষ্ট প্রোটোকল স্থাপন করা।" },
            { en: "Nationalizing all traditional knowledge and making it freely available to corporations.", bn: "সমস্ত ঐতিহ্যবাহী জ্ঞান জাতীয়করণ করা এবং কর্পোরেশনগুলির জন্য বিনামূল্যে উপলব্ধ করা।" },
            { en: "Granting automatic patent rights to any company that discovers a new use for a traditional resource.", bn: "একটি ঐতিহ্যবাহী সম্পদের নতুন ব্যবহার আবিষ্কারকারী যেকোনো কোম্পানিকে স্বয়ংক্রিয় পেটেন্ট অধিকার প্রদান করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q332",
        question: {
            en: "The current \"Sixth Extinction\" is distinguished from the previous five mass extinctions in Earth's history primarily by its:",
            bn: "পৃথিবীর ইতিহাসে পূর্ববর্তী পাঁচটি গণবিলুপ্তি থেকে বর্তমান \"ষষ্ঠ বিলুপ্তি\" প্রাথমিকভাবে এর ____ দ্বারা স্বতন্ত্র:"
        },
        options: [
            { en: "Slower rate and natural causation.", bn: "ধীর গতি এবং প্রাকৃতিক কারণ।" },
            { en: "Predominant impact on marine species only.", bn: "কেবলমাত্র সামুদ্রিক প্রজাতির উপর প্রধান প্রভাব।" },
            { en: "Unprecedentedly rapid rate and its primary driver being human activities.", bn: "অভূতপূর্ব দ্রুত গতি এবং এর প্রাথমিক চালক মানব কার্যকলাপ।" },
            { en: "Occurrence during an interglacial period.", bn: "একটি interglacial সময়ের সময় সংঘটিত হওয়া।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q333",
        question: {
            en: "Consider the ecological diversity of India with its deserts, rainforests, mangroves, etc., versus a Scandinavian country like Norway, which has less ecological diversity. This difference in large-scale ecosystem variety (gamma diversity) directly contributes to India having:",
            bn: "ভারতবর্ষের মরুভূমি, রেইনফরেস্ট, ম্যানগ্রোভ ইত্যাদি সহ পরিবেশগত বৈচিত্র্য এবং নরওয়ের মতো একটি স্ক্যান্ডিনেভিয়ান দেশের কম পরিবেশগত বৈচিত্র্যের তুলনা করুন। বৃহৎ আকারের বাস্তুতন্ত্রের বৈচিত্র্যের (গামা বৈচিত্র্য) এই পার্থক্যটি সরাসরি ভারতের ____ এর দিকে পরিচালিত করে:"
        },
        options: [
            { en: "Lower overall species richness compared to Norway.", bn: "নরওয়ের তুলনায় সামগ্রিক প্রজাতির সমৃদ্ধি কম।" },
            { en: "Higher overall species richness and genetic diversity due to a wider range of available niches and environmental conditions.", bn: "উপলব্ধ niche এবং পরিবেশগত অবস্থার বিস্তৃত পরিসরের কারণে উচ্চতর সামগ্রিক প্রজাতির সমৃদ্ধি এবং জেনেটিক বৈচিত্র্য।" },
            { en: "The same number of endemic species as Norway.", bn: "নরওয়ের মতো একই সংখ্যক স্থানীয় প্রজাতি।" },
            { en: "A more stable climate across all its regions.", bn: "এর সমস্ত অঞ্চলে আরও স্থিতিশীল জলবায়ু।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q334",
        question: {
            en: "The text mentions that \"Nature's biological library is burning even before we catalogued the titles of all the books stocked there.\" This metaphor powerfully illustrates the urgency of biodiversity conservation because:",
            bn: "পাঠ্যে উল্লেখ করা হয়েছে যে \"প্রকৃতির জৈবিক গ্রন্থাগারটি সমস্ত বইয়ের শিরোনাম cataloged করার আগেই পুড়ে যাচ্ছে।\" এই রূপকটি জীববৈচিত্র্য সংরক্ষণের জরুরি অবস্থাকে শক্তিশালীভাবে চিত্রিত করে কারণ:"
        },
        options: [
            { en: "Extinct species can always be recreated from DNA.", bn: "বিলুপ্ত প্রজাতি সর্বদা ডিএনএ থেকে পুনরায় তৈরি করা যায়।" },
            { en: "We are losing species, and potentially their unique genetic information and ecological roles, before we even understand their existence or potential benefits.", bn: "আমরা প্রজাতি হারাচ্ছি, এবং সম্ভাব্যভাবে তাদের অনন্য জেনেটিক তথ্য এবং পরিবেশগত ভূমিকা, এমনকি তাদের অস্তিত্ব বা সম্ভাব্য সুবিধাগুলি বোঝার আগেই।" },
            { en: "All species have already been discovered and cataloged.", bn: "সমস্ত প্রজাতি ইতিমধ্যেই আবিষ্কৃত এবং cataloged হয়েছে।" },
            { en: "Biodiversity loss only affects economically unimportant species.", bn: "জীববৈচিত্র্য হ্রাস কেবলমাত্র অর্থনৈতিকভাবে গুরুত্বহীন প্রজাতিকে প্রভাবিত করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q335",
        question: {
            en: "If a stable ecosystem (as per Tilman's findings) shows less year-to-year variation in total biomass, this implies a higher degree of:",
            bn: "যদি একটি স্থিতিশীল বাস্তুতন্ত্র (টিলম্যানের ফলাফল অনুসারে) মোট বায়োমাসে বছর-ওয়ারী কম পরিবর্তন দেখায়, তবে এটি ____ এর উচ্চতর ডিগ্রী বোঝায়:"
        },
        options: [
            { en: "Species turnover.", bn: "প্রজাতি turnover।" },
            { en: "Predictability and consistency in its overall productivity and functioning despite environmental fluctuations.", bn: "পরিবেশগত ওঠানামা সত্ত্বেও এর সামগ্রিক উৎপাদনশীলতা এবং কার্যকারিতার ক্ষেত্রে পূর্বাভাসযোগ্যতা এবং ধারাবাহিকতা।" },
            { en: "Susceptibility to invasive species.", bn: "আক্রমণাত্মক প্রজাতির প্রতি সংবেদনশীলতা।" },
            { en: "Dependence on a single dominant species.", bn: "একটি একক প্রভাবশালী প্রজাতির উপর নির্ভরশীলতা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q336",
        question: {
            en: "The National Curriculum Framework (NCF) 2005 recommends that children's life at school must be linked to:",
            bn: "ন্যাশনাল কারিকুলাম ফ্রেমওয়ার্ক (NCF) ২০০৫ সুপারিশ করে যে স্কুলে শিশুদের জীবনকে ____ এর সাথে যুক্ত করতে হবে:"
        },
        options: [
            { en: "Only textbooks", bn: "কেবল পাঠ্যবই" },
            { en: "Their life outside the school", bn: "স্কুলের বাইরের তাদের জীবন" },
            { en: "Only laboratory experiments", bn: "কেবল পরীক্ষাগার পরীক্ষা" },
            { en: "International curricula", bn: "আন্তর্জাতিক পাঠ্যক্রম" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q337",
        question: {
            en: "According to the NCF 2005, treating the prescribed textbook as the sole basis of examination is problematic because:",
            bn: "NCF ২০০৫ অনুসারে, নির্ধারিত পাঠ্যবইকে পরীক্ষার একমাত্র ভিত্তি হিসেবে বিবেচনা করা problematic কারণ:"
        },
        options: [
            { en: "Textbooks are always outdated.", bn: "পাঠ্যবই সর্বদা outdated।" },
            { en: "It leads to ignoring other resources and sites of learning.", bn: "এটি অন্যান্য সংস্থান এবং শেখার স্থানগুলিকে উপেক্ষা করার দিকে পরিচালিত করে।" },
            { en: "Examinations should not be based on textbooks.", bn: "পরীক্ষা পাঠ্যবইয়ের উপর ভিত্তি করে হওয়া উচিত নয়।" },
            { en: "It encourages too much practical work.", bn: "এটি খুব বেশি ব্যবহারিক কাজকে উৎসাহিত করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q338",
        question: {
            en: "Who is revered as the Father of Ecology in India, as mentioned in the NCERT textbook?",
            bn: "NCERT পাঠ্যপুস্তকে উল্লিখিত ভারতে পরিবেশবিদ্যার জনক হিসাবে কে revered?"
        },
        options: [
            { en: "M.S. Swaminathan", bn: "এম.এস. স্বামীনাথন" },
            { en: "Panchanan Maheshwari", bn: "পঞ্চানন মাহেশ্বরী" },
            { en: "Ramdeo Misra", bn: "রামদেও মিশ্র" },
            { en: "Herbert Boyer", bn: "হার্বার্ট বয়ের" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q339",
        question: {
            en: "Herbert Boyer, along with Stanley Cohen, accomplished the construction of the first artificial recombinant DNA molecule in:",
            bn: "হার্বার্ট বয়ের, স্ট্যানলি কোহেনের সাথে, প্রথম কৃত্রিম রিকম্বিন্যান্ট ডিএনএ অণু নির্মাণ সম্পন্ন করেছিলেন কোন সালে?"
        },
        options: [
            { en: "1953", bn: "১৯৫৩" },
            { en: "1963", bn: "১৯৬৩" },
            { en: "1972", bn: "১৯৭২" },
            { en: "1983", bn: "১৯৮৩" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q340",
        question: {
            en: "The European Federation of Biotechnology (EFB) definition of biotechnology encompasses:",
            bn: "ইউরোপীয় ফেডারেশন অফ বায়োটেকনোলজি (EFB) এর জৈবপ্রযুক্তির সংজ্ঞায় অন্তর্ভুক্ত রয়েছে:"
        },
        options: [
            { en: "Only traditional practices like making curd.", bn: "কেবলমাত্র দই তৈরির মতো ঐতিহ্যবাহী অনুশীলন।" },
            { en: "Only modern molecular biotechnology.", bn: "কেবলমাত্র আধুনিক আণবিক জৈবপ্রযুক্তি।" },
            { en: "Both traditional view and modern molecular biotechnology.", bn: "ঐতিহ্যবাহী এবং আধুনিক আণবিক জৈবপ্রযুক্তি উভয়ই।" },
            { en: "Only the production of antibiotics.", bn: "কেবলমাত্র অ্যান্টিবায়োটিকের উৎপাদন।" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q341",
        question: {
            en: "The preface of the NCERT Biology textbook mentions that in the 19th and 20th centuries, Physics and Chemistry were applied to Biology, leading to the new science of:",
            bn: "NCERT জীববিজ্ঞান পাঠ্যপুস্তকের মুখবন্ধে উল্লেখ করা হয়েছে যে ১৯ এবং ২০ শতকে পদার্থবিদ্যা এবং রসায়ন জীববিজ্ঞানে প্রয়োগ করা হয়েছিল, যা নতুন বিজ্ঞানের দিকে পরিচালিত করেছিল:"
        },
        options: [
            { en: "Ecology", bn: "পরিবেশবিদ্যা" },
            { en: "Taxonomy", bn: "শ্রেণীবিন্যাস" },
            { en: "Biochemistry", bn: "জৈব রসায়ন" },
            { en: "Paleontology", bn: "প্যালিওন্টোলজি" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q342",
        question: {
            en: "The work of Watson and Crick, along with others, established a modern version of Molecular Biology dealing with life processes at what level?",
            bn: "ওয়াটসন এবং ক্রিক, অন্যদের সাথে, আণবিক জীববিজ্ঞানের একটি আধুনিক সংস্করণ প্রতিষ্ঠা করেছিলেন যা জীবন প্রক্রিয়া নিয়ে কোন স্তরে কাজ করে?"
        },
        options: [
            { en: "Organismal level", bn: "জীবের স্তর" },
            { en: "Population level", bn: "জনসংখ্যা স্তর" },
            { en: "Molecular level", bn: "আণবিক স্তর" },
            { en: "Ecosystem level", bn: "বাস্তুতন্ত্র স্তর" }
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q343",
        question: {
            en: "The NCERT preface states that \"Ecology brought in synthesis of both approaches (classical and reductionist biology) and emphasised integrated understanding of biology.\" This implies that ecology:",
            bn: "NCERT মুখবন্ধে বলা হয়েছে যে \"পরিবেশবিদ্যা উভয় পদ্ধতির (ধ্রুপদী এবং reductionist জীববিজ্ঞান) সংশ্লেষণ নিয়ে আসে এবং জীববিজ্ঞানের একটি সমন্বিত বোঝাপড়ার উপর জোর দেয়।\" এর দ্বারা বোঝানো হয় যে পরিবেশবিদ্যা:"
        },
        options: [
            { en: "Focuses only on molecular details.", bn: "কেবলমাত্র আণবিক বিবরণীর উপর মনোযোগ দেয়।" },
            { en: "Considers both the form and process, and the interactions across different levels of organization.", bn: "গঠন এবং প্রক্রিয়া উভয়ই বিবেচনা করে, এবং সংগঠনের বিভিন্ন স্তরে মিথস্ক্রিয়া।" },
            { en: "Is primarily concerned with classification.", bn: "প্রাথমিকভাবে শ্রেণীবিন্যাসের সাথে সম্পর্কিত।" },
            { en: "Rejects the findings of molecular biology.", bn: "আণবিক জীববিজ্ঞানের ফলাফল প্রত্যাখ্যান করে।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q344",
        question: {
            en: "Ramdeo Misra formulated the first postgraduate course in ecology in India at which university?",
            bn: "রামদেও মিশ্র ভারতে পরিবেশবিদ্যায় প্রথম স্নাতকোত্তর কোর্স কোন বিশ্ববিদ্যালয়ে তৈরি করেছিলেন?"
        },
        options: [
            { en: "University of Delhi", bn: "দিল্লি বিশ্ববিদ্যালয়" },
            { en: "Banaras Hindu University, Varanasi", bn: "বেনারস হিন্দু বিশ্ববিদ্যালয়, বারাণসী" },
            { en: "Aligarh Muslim University", bn: "আলিগড় মুসলিম বিশ্ববিদ্যালয়" },
            { en: "Calcutta University", bn: "কলকাতা বিশ্ববিদ্যালয়" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q345",
        question: {
            en: "Herbert Boyer observed that certain restriction enzymes from E. coli had the capability of cutting DNA strands in a particular fashion, leaving what became known as:",
            bn: "হার্বার্ট বয়ের পর্যবেক্ষণ করেছিলেন যে E. coli থেকে নির্দিষ্ট restriction enzyme-এর ডিএনএ স্ট্র্যান্ডগুলি একটি নির্দিষ্ট ফ্যাশনে কাটার ক্ষমতা ছিল, যা ____ নামে পরিচিতি লাভ করে:"
        },
        options: [
            { en: "Blunt ends", bn: "ব্লান্ট এন্ডস" },
            { en: "Sticky ends", bn: "স্টিকি এন্ডস" },
            { en: "Methylated ends", bn: "মিথিলেটেড এন্ডস" },
            { en: "Circular ends", bn: "গোলাকার এন্ডস" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q346",
        question: {
            en: "The NCERT foreword emphasizes that \"children generate new knowledge by engaging with the information passed on to them by adults,\" if given space, time, and freedom. This pedagogical approach contrasts with:",
            bn: "NCERT মুখবন্ধে জোর দেওয়া হয়েছে যে \"শিশুরা প্রাপ্তবয়স্কদের কাছ থেকে তাদের কাছে স্থান, সময় এবং স্বাধীনতা দেওয়া হলে প্রাপ্ত তথ্যের সাথে যুক্ত হয়ে নতুন জ্ঞান তৈরি করে।\" এই শিক্ষামূলক পদ্ধতিটি এর সাথে বিপরীত:"
        },
        options: [
            { en: "Encouraging critical thinking.", bn: "সমালোচনামূলক চিন্তাভাবনাকে উৎসাহিত করা।" },
            { en: "Treating children as passive receivers of a fixed body of knowledge.", bn: "শিশুদের একটি নির্দিষ্ট জ্ঞানের নিস্ক্রিয় গ্রহণকারী হিসাবে বিবেচনা করা।" },
            { en: "Project-based learning.", bn: "প্রজেক্ট-ভিত্তিক শিক্ষা।" },
            { en: "Experiential learning.", bn: "অভিজ্ঞতামূলক শিক্ষা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q347",
        question: {
            en: "The development of \"Systems biology,\" mentioned in the NCERT preface, uses mathematical tools to bring about a modern synthesis of different aspects of Biology. This approach likely aims to:",
            bn: "NCERT মুখবন্ধে উল্লিখিত \"সিস্টেম জীববিজ্ঞান\" এর বিকাশ, জীববিজ্ঞানের বিভিন্ন দিকগুলির একটি আধুনিক synthesis আনার জন্য গাণিতিক সরঞ্জাম ব্যবহার করে। এই পদ্ধতির সম্ভবত লক্ষ্য হল:"
        },
        options: [
            { en: "Simplify complex biological phenomena by ignoring molecular details.", bn: "আণবিক বিবরণ উপেক্ষা করে জটিল জৈবিক ঘটনাগুলিকে সরল করা।" },
            { en: "Model and understand the emergent properties of complex biological systems arising from the interactions of their components.", bn: "জটিল জৈবিক সিস্টেমগুলির উপাদানগুলির মিথস্ক্রিয়া থেকে উদ্ভূত emergent বৈশিষ্ট্যগুলি মডেল করা এবং বোঝা।" },
            { en: "Focus exclusively on ecological field studies.", bn: "কেবলমাত্র পরিবেশগত মাঠ গবেষণার উপর মনোযোগ কেন্দ্রীভূত করা।" },
            { en: "Replace all experimental biology with computational simulations.", bn: "কম্পিউটেশনাল সিমুলেশন দ্বারা সমস্ত পরীক্ষামূলক জীববিজ্ঞান প্রতিস্থাপন করা।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q348",
        question: {
            en: "The collaboration between Herbert Boyer (expert in restriction enzymes) and Stanley Cohen (expert in plasmids) was crucial for the birth of recombinant DNA technology. This highlights the importance of what in scientific advancement?",
            bn: "হার্বার্ট বয়ের (restriction enzyme এর বিশেষজ্ঞ) এবং স্ট্যানলি কোহেনের (প্লাজমিডের বিশেষজ্ঞ) মধ্যে সহযোগিতা রিকম্বিন্যান্ট ডিএনএ প্রযুক্তির জন্মের জন্য গুরুত্বপূর্ণ ছিল। এটি বৈজ্ঞানিক অগ্রগতিতে কীসের গুরুত্ব তুলে ধরে?"
        },
        options: [
            { en: "Working in complete isolation.", bn: "সম্পূর্ণ বিচ্ছিন্নভাবে কাজ করা।" },
            { en: "Interdisciplinary collaboration and the combination of different expertise and techniques.", bn: "আন্তঃবিষয়ক সহযোগিতা এবং বিভিন্ন দক্ষতা ও কৌশলের সমন্বয়।" },
            { en: "Focusing only on theoretical research.", bn: "কেবলমাত্র তাত্ত্বিক গবেষণার উপর মনোযোগ দেওয়া।" },
            { en: "Strict adherence to pre-existing dogmas.", bn: "পূর্ব-বিদ্যমান মতবাদের কঠোর আনুগত্য।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q349",
        question: {
            en: "The NCERT Biology textbook aims to enable students to \"realise that biology is the story of the struggle of living organisms for existence and survival.\" This reflects a foundational concept from:",
            bn: "NCERT জীববিজ্ঞান পাঠ্যপুস্তকের লক্ষ্য হল শিক্ষার্থীদেরকে \"উপলব্ধি করানো যে জীববিজ্ঞান হল জীবন্ত জীবের অস্তিত্ব ও টিকে থাকার সংগ্রামের গল্প।\" এটি কোনটির একটি মৌলিক ধারণাকে প্রতিফলিত করে:"
        },
        options: [
            { en: "Mendelian genetics", bn: "মেন্ডেলীয় জেনেটিক্স" },
            { en: "Darwinian theory of evolution by natural selection", bn: "ডারউইনীয় প্রাকৃতিক নির্বাচনের মাধ্যমে বিবর্তন তত্ত্ব" },
            { en: "The cell theory", bn: "কোষ তত্ত্ব" },
            { en: "The principles of biochemistry", bn: "জৈব রসায়নের নীতি" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q350",
        question: {
            en: "The \"Rationalisation of Content in the Textbook\" section mentions reducing content load in view of the COVID-19 pandemic and the National Education Policy 2020. One of the criteria for rationalisation was \"Content, which is easily accessible to students without much interventions from teachers and can be learned by children through self-learning or peer-learning.\" This implies a shift towards:",
            bn: "\"পাঠ্যপুস্তকে বিষয়বস্তুর যৌক্তিকীকরণ\" অংশে কোভিড-১৯ মহামারী এবং জাতীয় শিক্ষা নীতি ২০২০ এর পরিপ্রেক্ষিতে বিষয়বস্তুর বোঝা কমানোর কথা বলা হয়েছে। যৌক্তিকীকরণের একটি মানদণ্ড ছিল \"বিষয়বস্তু, যা শিক্ষকদের কাছ থেকে বেশি হস্তক্ষেপ ছাড়াই শিক্ষার্থীদের কাছে সহজে অ্যাক্সেসযোগ্য এবং শিশুরা স্ব-শিক্ষার বা peer-learning এর মাধ্যমে শিখতে পারে।\" এটি ____ এর দিকে একটি পরিবর্তন বোঝায়:"
        },
        options: [
            { en: "Increasing teacher-centric instruction.", bn: "শিক্ষক-কেন্দ্রিক নির্দেশনা বৃদ্ধি।" },
            { en: "Promoting student autonomy and collaborative learning.", bn: "শিক্ষার্থীদের স্বায়ত্তশাসন এবং সহযোগিতামূলক শিক্ষা প্রচার।" },
            { en: "Removing all challenging concepts from the syllabus.", bn: "পাঠ্যক্রম থেকে সমস্ত চ্যালেঞ্জিং ধারণা অপসারণ।" },
            { en: "Focusing solely on rote memorization.", bn: "কেবলমাত্র মুখস্থ করার উপর মনোযোগ দেওয়া।" }
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    }
];

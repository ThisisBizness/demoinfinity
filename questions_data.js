const allQuestions = [
    {
        id: "Q1",
        question: "What does biotechnology primarily deal with?",
        options: [
            "Study of ancient life forms",
            "Industrial scale production of biopharmaceuticals and biologicals using genetically modified organisms",
            "The classification of plants and animals",
            "The study of Earth's atmosphere"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q2",
        question: "Which of the following is NOT an application of biotechnology mentioned in the chapter?",
        options: [
            "Therapeutics",
            "Genetically modified crops",
            "Space exploration",
            "Waste treatment"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q3",
        question: "What is the first critical research area of biotechnology mentioned?",
        options: [
            "Creating optimal conditions for a catalyst",
            "Downstream processing",
            "Providing the best catalyst in the form of an improved organism or pure enzyme",
            "Energy production"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q4",
        question: "Which of these is NOT one of the three options mentioned for increasing food production?",
        options: [
            "Agro-chemical based agriculture",
            "Organic agriculture",
            "Hydroponics",
            "Genetically engineered crop-based agriculture"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q5",
        question: "The Green Revolution succeeded in:",
        options: [
            "Doubling the food supply",
            "Tripling the food supply",
            "Quadrupling the food supply",
            "Halving the food supply"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q6",
        question: "What is an explant in tissue culture?",
        options: [
            "The entire plant",
            "Any part of a plant taken out and grown in a test tube",
            "The nutrient medium",
            "A genetically modified seed"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q7",
        question: "The capacity to generate a whole plant from any cell/explant is called:",
        options: [
            "Photosynthesis",
            "Totipotency",
            "Meiosis",
            "Germination"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q8",
        question: "What carbon source is commonly provided in a nutrient medium for tissue culture?",
        options: [
            "Glucose",
            "Fructose",
            "Sucrose",
            "Lactose"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q9",
        question: "Plants produced through micro-propagation that are genetically identical to the original plant are called:",
        options: [
            "Hybrids",
            "Mutants",
            "Somaclones",
            "Zygotes"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q10",
        question: "Which part of a virus-infected plant is usually free of virus and can be used for micropropagation?",
        options: [
            "Leaves",
            "Roots",
            "Meristem (apical and axillary)",
            "Flowers"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q11",
        question: "What are Genetically Modified Organisms (GMOs)?",
        options: [
            "Organisms found in ancient fossils",
            "Organisms whose genes have been altered by manipulation",
            "Organisms that grow only in specific climates",
            "Organisms that reproduce asexually"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q12",
        question: "Golden rice is enriched with:",
        options: [
            "Vitamin C",
            "Vitamin A",
            "Protein",
            "Iron"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q13",
        question: "Bt toxin is produced by a bacterium called:",
        options: [
            "Escherichia coli",
            "Bacillus thuringiensis",
            "Streptococcus pneumoniae",
            "Agrobacterium tumefaciens"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q14",
        question: "The Bt toxin protein exists in the bacteria as an inactive:",
        options: [
            "Active toxin",
            "Enzyme",
            "Protoxin",
            "Antibody"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q15",
        question: "The active form of Bt toxin binds to the surface of which cells in the insect?",
        options: [
            "Nerve cells",
            "Muscle cells",
            "Midgut epithelial cells",
            "Blood cells"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q16",
        question: "The genes crylAc and cryllAb control:",
        options: [
            "Corn borer",
            "Cotton bollworms",
            "Nematodes in tobacco",
            "Fruit flies"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q17",
        question: "RNA interference (RNAi) takes place in which organisms as a method of cellular defense?",
        options: [
            "Only bacteria",
            "Only viruses",
            "All eukaryotic organisms",
            "Only plants"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q18",
        question: "About how many recombinant therapeutics have been approved for human use the world over (at the time of book printing)?",
        options: [
            "10",
            "30",
            "100",
            "5"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q19",
        question: "Insulin used for diabetes was earlier extracted from:",
        options: [
            "Genetically modified bacteria",
            "Human volunteers",
            "Pancreas of slaughtered cattle and pigs",
            "Plant extracts"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q20",
        question: "Mature insulin consists of how many short polypeptide chains?",
        options: [
            "One",
            "Two (A and B)",
            "Three (A, B, and C)",
            "Four"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q21",
        question: "What is the name of the American company that prepared human insulin using rDNA techniques in 1983?",
        options: [
            "Genentech",
            "Amgen",
            "Eli Lilly",
            "Biogen"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q22",
        question: "Gene therapy is a collection of methods that allows correction of a:",
        options: [
            "Nutritional deficiency",
            "Gene defect",
            "Physical injury",
            "Bacterial infection"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q23",
        question: "The first clinical gene therapy was given in 1990 to a 4-year old girl with which deficiency?",
        options: [
            "Insulin deficiency",
            "Growth hormone deficiency",
            "Adenosine deaminase (ADA) deficiency",
            "Phenylketonuria"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q24",
        question: "Which technique can detect very low amounts of bacterial or viral DNA by amplification?",
        options: [
            "ELISA",
            "PCR",
            "Autoradiography",
            "Tissue culture"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q25",
        question: "ELISA is based on the principle of:",
        options: [
            "DNA replication",
            "Antigen-antibody interaction",
            "RNA interference",
            "Protein synthesis"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q26",
        question: "Over 95% of all existing transgenic animals are:",
        options: [
            "Rats",
            "Rabbits",
            "Pigs",
            "Mice"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q27",
        question: "The first transgenic cow, Rosie, produced human protein-enriched milk containing:",
        options: [
            "Human beta-globin",
            "Human alpha-lactalbumin",
            "Human insulin",
            "Human growth hormone"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q28",
        question: "What is GEAC?",
        options: [
            "Global Environmental Action Committee",
            "Genetic Engineering Approval Committee",
            "Gene Evaluation and Assessment Council",
            "Genetically Enhanced Agriculture Commission"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q29",
        question: "How many documented varieties of Basmati are grown in India?",
        options: [
            "10",
            "27",
            "50",
            "100"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q30",
        question: "The term used to refer to the use of bio-resources by multinational companies without proper authorisation is:",
        options: [
            "Bioremediation",
            "Bio-prospecting",
            "Biopiracy",
            "Bio-fortification"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q31",
        question: "Downstream processing technologies in biotechnology are primarily used for:",
        options: [
            "Creating genetically modified organisms",
            "Purifying the protein/organic compound",
            "Providing optimal conditions for catalyst action",
            "Finding the best catalyst"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q32",
        question: "Tissue culture requires a nutrient medium providing a carbon source, inorganic salts, vitamins, amino acids, and growth regulators. Which of the following are common growth regulators used?",
        options: [
            "Sucrose and glucose",
            "Auxins and cytokinins",
            "Proteins and lipids",
            "DNA and RNA"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q33",
        question: "Somatic hybridisation involves the fusion of:",
        options: [
            "Two gametes from different species",
            "Naked protoplasts from two different plant varieties",
            "A plant cell and an animal cell",
            "Two different types of explants"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q34",
        question: "One of the main advantages of using Genetically Modified (GM) plants is that they can be made more tolerant to:",
        options: [
            "Only biotic stresses",
            "Only abiotic stresses (cold, drought, salt, heat)",
            "Both biotic and abiotic stresses",
            "Mechanical damage"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q35",
        question: "The Bt toxin is converted into an active form in the insect gut due to:",
        options: [
            "Acidic pH of the gut",
            "Alkaline pH of the gut",
            "Presence of specific enzymes in the saliva",
            "High temperature in the gut"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q36",
        question: "In RNA interference (RNAi), what is the direct cause of silencing a specific mRNA?",
        options: [
            "Binding of a single-stranded DNA to the mRNA",
            "Formation of a complementary dsRNA molecule that binds to the mRNA",
            "Degradation of the mRNA by host enzymes",
            "Methylation of the mRNA"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q37",
        question: "What was the main challenge for producing insulin using rDNA techniques before Eli Lilly's success?",
        options: [
            "Producing the A and B chains",
            "Getting insulin assembled into a mature form",
            "Finding a suitable host organism",
            "Purifying the insulin chains"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q38",
        question: "For ADA deficiency, why is enzyme replacement therapy not a completely curative solution?",
        options: [
            "The enzyme is very expensive",
            "The enzyme is quickly degraded in the body",
            "It requires repeated infusions as functional ADA is not produced by the patient's cells continuously",
            "The enzyme causes severe allergic reactions"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q39",
        question: "In molecular diagnosis using a probe, why would a clone with a mutated gene not show up on an autoradiograph if the probe is for the normal gene?",
        options: [
            "The mutated gene replicates faster.",
            "The probe will not have complementarity with the mutated gene.",
            "The mutated gene does not bind to the photographic film.",
            "The radioactive molecule on the probe is inactivated by the mutation."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q40",
        question: "Transgenic animals are useful for studying normal physiology and development, particularly for complex factors like:",
        options: [
            "Blood clotting factors",
            "Insulin-like growth factor",
            "Neurotransmitters",
            "Digestive enzymes"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q41",
        question: "How does Rosie the transgenic cow's milk compare to natural cow's milk for human babies?",
        options: [
            "It has less protein.",
            "It is nutritionally a more balanced product.",
            "It has a higher fat content.",
            "It is designed for adult consumption."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q42",
        question: "Why are traditional knowledge and biodiversity more prevalent in developing countries compared to industrialized nations?",
        options: [
            "Industrialized nations have destroyed their biodiversity.",
            "Developing countries have a longer history of interaction with diverse ecosystems.",
            "Industrialized nations are rich financially but often poor in biodiversity and traditional knowledge.",
            "Developing countries have better patenting laws for traditional knowledge."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q43",
        question: "The \"pomato\" plant, a result of somatic hybridisation between tomato and potato, was not commercially successful because:",
        options: [
            "It was susceptible to diseases.",
            "It could not reproduce.",
            "It did not have all the desired combination of characteristics.",
            "It required very specific growing conditions."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q44",
        question: "The gene 'cry' codes for the Bt toxin. What does 'cry' stand for?",
        options: [
            "Crystalline",
            "Cryptic",
            "Critical",
            "Carrier"
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q45",
        question: "In the process of RNA interference used to protect tobacco plants from Meloidegyne incognitia, how is the dsRNA introduced or formed in the host plant cells?",
        options: [
            "By direct injection of dsRNA",
            "By using Agrobacterium vectors to introduce nematode-specific genes that produce sense and anti-sense RNA",
            "By spraying the plant with dsRNA",
            "The plant naturally produces dsRNA upon infection"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q46",
        question: "What is the significance of the C-peptide in human pro-insulin?",
        options: [
            "It is the active part of the insulin molecule.",
            "It helps in the correct folding and assembly of the A and B chains and is removed during maturation.",
            "It binds to the insulin receptor on target cells.",
            "It increases the shelf-life of insulin."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q47",
        question: "A permanent cure for ADA deficiency through gene therapy would ideally involve:",
        options: [
            "Repeated infusion of genetically engineered lymphocytes.",
            "Introducing the ADA cDNA into bone marrow cells at an early embryonic stage.",
            "Regular enzyme replacement therapy.",
            "Transplantation of a healthy thymus gland."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q48",
        question: "Transgenic animals used for chemical safety testing (toxicity testing) are made more sensitive to toxic substances by:",
        options: [
            "Weakening their immune system",
            "Carrying specific genes that make them more sensitive",
            "Exposing them to low doses of toxins from birth",
            "Modifying their diet"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q49",
        question: "The Indian Parliament's amendment to the Indian Patents Bill addresses issues including:",
        options: [
            "Granting patents for all traditional knowledge by default.",
            "Patent terms, emergency provisions, research, and development initiatives.",
            "Prohibiting any patents on biological materials.",
            "Allowing indefinite patent terms for agricultural products."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q50",
        question: "Which statement best describes the relationship between Bt toxin and the bacterium Bacillus thuringiensis?",
        options: [
            "The toxin kills the bacterium after a certain period.",
            "The bacterium is immune to its own toxin because it lacks the specific gut pH.",
            "The toxin exists as an inactive protoxin in the bacterium and requires insect gut conditions for activation.",
            "The bacterium encapsulates the toxin in a protective coat."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q51",
        question: "Among the three critical research areas of biotechnology, \"Creating optimal conditions through engineering for a catalyst to act\" primarily refers to:",
        options: [
            "Genetic modification of the catalyst itself.",
            "Designing bioreactors and controlling process parameters like temperature, pH, substrate.",
            "Developing efficient purification techniques for the product.",
            "Screening for naturally occurring high-efficiency enzymes."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q52",
        question: "If traditional breeding techniques fail to keep pace with demand for crop improvement, tissue culture offers an advantage because it:",
        options: [
            "Only works for a few specific crop types.",
            "Allows for rapid multiplication (micro-propagation) of desired plants and recovery of healthy plants from diseased ones.",
            "Directly creates new genes not present in the parent plant.",
            "Is less expensive and requires less technical expertise than traditional breeding."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q53",
        question: "The formation of \"pomato\" demonstrated somatic hybridisation. What fundamental cellular process allows the fusion of protoplasts from two different species to form a viable hybrid cell?",
        options: [
            "Universality of the genetic code.",
            "Compatibility of plasma membranes to fuse and the potential for nuclear fusion or coordinated activity.",
            "The presence of identical cell wall components.",
            "The ability of mitochondria from one species to function in the cytoplasm of another."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q54",
        question: "A specific Bt toxin gene, crylAb, controls corn borer. If this gene were introduced into cotton plants, what would be the most likely outcome regarding pest resistance?",
        options: [
            "Cotton plants would become resistant to corn borer.",
            "Cotton plants would become resistant to cotton bollworms.",
            "Cotton plants would likely show little or no resistance to corn borer due to pest specificity of the toxin.",
            "Cotton plants would show resistance to a wide range of lepidopteran insects."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q55",
        question: "The dsRNA molecule used in RNAi for nematode resistance in tobacco plants initiates silencing. This dsRNA is processed by cellular machinery (like Dicer and RISC complex, though not detailed in the text). What is the ultimate fate of the target nematode mRNA?",
        options: [
            "It is prevented from entering the nucleus.",
            "Its translation is blocked, or it is cleaved and degraded.",
            "It is converted into a DNA molecule.",
            "It is permanently modified by methylation."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q56",
        question: "Eli Lilly produced human insulin by separately producing chains A and B in E. coli and then combining them. This approach was necessary because:",
        options: [
            "E. coli cannot synthesize disulfide bonds.",
            "E. coli cannot process pro-insulin correctly to remove the C-peptide and form active insulin if the entire pro-hormone is made.",
            "The A and B chains are toxic to E. coli when produced together.",
            "The gene for pro-insulin is too large for E. coli plasmids."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q57",
        question: "Considering the gene therapy for ADA deficiency, if lymphocytes with functional ADA cDNA are returned to the patient, why is periodic infusion required?",
        options: [
            "The retroviral vector eventually gets deactivated.",
            "The introduced ADA cDNA is gradually diluted with cell division.",
            "Lymphocytes are not immortal and have a finite lifespan; new, deficient lymphocytes are continuously produced by the patient.",
            "The patient's body develops an immune response against the genetically engineered lymphocytes."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q58",
        question: "Transgenic mice are used for vaccine safety testing, potentially replacing monkeys. The primary reason for this shift, if successful, would be:",
        options: [
            "Mice are cheaper and easier to handle than monkeys.",
            "Mice have a faster reproductive cycle, allowing for more rapid testing.",
            "Ethical considerations regarding the use of primates and the potential for more standardized, genetically defined models in mice.",
            "Mice show a more pronounced immune response to vaccines."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q59",
        question: "Biopiracy is a significant ethical concern. The patenting of Basmati rice by a US company was controversial primarily because:",
        options: [
            "The company used genetic engineering to create a completely new rice variety.",
            "The 'new' variety was derived from Indian farmers' traditional varieties, and the patent could restrict others, including original cultivators.",
            "Basmati rice cannot be grown outside India.",
            "The US company did not share the profits with the Indian government."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q60",
        question: "The 'Evil Quartet' is a term often used in conservation biology to describe the major causes of biodiversity loss. Which application of biotechnology, if unregulated, could inadvertently contribute to one of these causes (e.g., through invasive GMOs or impact on non-target species)?",
        options: [
            "Production of human insulin in E. coli.",
            "Development of pest-resistant crops like Bt cotton.",
            "Use of PCR for disease diagnosis.",
            "Production of a-1-antitrypsin in transgenic sheep."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q61",
        question: "While totipotency allows regeneration of a whole plant from an explant, the successful commercial application of micro-propagation for a specific elite plant variety relies heavily on:",
        options: [
            "The absolute genetic stability of the explant source, minimizing somaclonal variation during culture.",
            "The ability to induce rapid flowering in the cultured plantlets.",
            "The development of a universal nutrient medium suitable for all plant species.",
            "The ease of transforming the explants with genes for enhanced growth."
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q62",
        question: "The alkaline pH of an insect's gut is crucial for the activation of Bt protoxin. If a target insect species evolved a significantly more acidic gut environment, what would be the most probable impact on the efficacy of the corresponding Bt crop?",
        options: [
            "Increased efficacy due to better protein stability.",
            "No change in efficacy as the toxin targets epithelial cells directly.",
            "Reduced or eliminated efficacy due to improper solubilization and activation of the protoxin.",
            "The toxin would activate prematurely in the plant tissues."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q63",
        question: "RNA interference (RNAi) is a natural defense mechanism. The introduction of nematode-specific genes into tobacco via Agrobacterium vectors to produce both sense and anti-sense RNA mimics a cellular state that triggers RNAi. This engineered state is analogous to the presence of what kind of naturally occurring genetic element or viral lifecycle stage?",
        options: [
            "A retrotransposon integrating into the host genome.",
            "The replication of a dsRNA virus or formation of dsRNA intermediates during ssRNA virus replication.",
            "A bacterial plasmid undergoing conjugation.",
            "The activity of a restriction endonuclease."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q64",
        question: "The production of human insulin by Eli Lilly involved creating disulfide bonds between chains A and B after separate synthesis. If a hypothetical future technology allowed for the direct expression of correctly folded, active two-chain insulin in E. coli, what fundamental aspect of E. coli's protein processing machinery would need to be significantly different or augmented compared to its natural state?",
        options: [
            "Its ribosomal structure for translating mammalian mRNA.",
            "Its capacity for post-translational glycosylation.",
            "Its inherent ability to form complex, specific disulfide bonds efficiently in the cytoplasm or an engineered periplasmic space with an oxidizing environment.",
            "Its DNA polymerase fidelity for accurate gene replication."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q65",
        question: "When considering gene therapy for ADA deficiency, the text states that if the gene isolated from marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure. This implies that the target cells for such embryonic gene therapy would need to be:",
        options: [
            "Exclusively somatic cells of the developing immune system.",
            "Germ-line cells to ensure transmission to future generations.",
            "Pluripotent stem cells that will give rise to all hematopoietic lineages, including lymphocytes.",
            "Mature, differentiated lymphocytes already present in the embryo."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q66",
        question: "Transgenic animals for chemical safety testing are often designed to be more sensitive to toxins. From a research perspective, what is the primary advantage of using such hypersensitive models over wild-type animals for initial toxicity screening?",
        options: [
            "It allows for testing a wider range of structurally diverse chemicals.",
            "It reduces the overall number of animals needed for statistically significant results because effects are seen with lower doses or shorter exposure times.",
            "It perfectly mimics the human response to all toxins.",
            "It eliminates the need for downstream biochemical analysis of toxic effects."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q67",
        question: "The controversy surrounding the Basmati rice patent highlights the complexities of intellectual property in the context of biodiversity and traditional knowledge. A key ethical argument against such patents, beyond financial compensation, relates to:",
        options: [
            "The inherent difficulty in defining \"novelty\" for products derived from naturally occurring genetic resources.",
            "The potential for such patents to stifle further research and development by restricting access to essential genetic material.",
            "The claim of \"invention\" over resources and knowledge collectively developed and conserved by indigenous communities over generations.",
            "The technical challenges in enforcing patent rights across international borders."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q68",
        question: "The creation of 'pomato' through somatic hybridisation was technically successful but commercially unviable. If the goal was to combine a desirable root characteristic of potato with a desirable fruit characteristic of tomato, which fundamental limitation of somatic hybridisation (compared to precise genetic engineering) likely contributed to the undesired outcome?",
        options: [
            "Inability to fuse protoplasts from dicotyledonous plants.",
            "The random and wholesale combination of entire nuclear and cytoplasmic genomes, leading to unpredictable trait expression and genomic instability, rather than targeted gene transfer.",
            "The pomato plant's sterility, preventing further breeding.",
            "The lack of a suitable vector for introducing potato genes into tomato."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q69",
        question: "The three options for increasing food production are agro-chemical based, organic, and genetically engineered crop-based agriculture. Considering the long-term ecological sustainability and global food security, a balanced approach integrating aspects of which of these is often advocated?",
        options: [
            "Primarily agro-chemical due to highest immediate yields.",
            "Primarily organic, as it avoids all synthetic inputs.",
            "Primarily genetically engineered crops, for targeted trait improvement.",
            "An integration of organic practices with the judicious use of validated and safe genetically engineered crops and reduced reliance on broad-spectrum agro-chemicals."
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q70",
        question: "Rosie, the transgenic cow, produced milk enriched with human alpha-lactalbumin, making it nutritionally more balanced for human babies. This specific modification targets an improvement in milk quality. What broader challenge in dairy science or human nutrition does this type of genetic engineering aim to address?",
        options: [
            "Increasing the sheer volume of milk produced per cow.",
            "Making cow's milk hypoallergenic for all infants.",
            "Enhancing the specific nutritional profile of animal-derived food to better match human, particularly infant, dietary requirements where natural milk may be suboptimal.",
            "Reducing the lactose content of milk to prevent intolerance."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
     {
        id: "Q71",
        question: "According to WHO, reproductive health means a total well-being in which aspects of reproduction?",
        options: [
            "Only physical",
            "Physical and emotional",
            "Physical, emotional, and social",
            "Physical, emotional, behavioural, and social"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q72",
        question: "India was amongst the first countries in the world to initiate action plans and programmes at a national level to attain total reproductive health. These programmes, called 'family planning', were initiated in:",
        options: [
            "1947",
            "1951",
            "1965",
            "1971"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q73",
        question: "The popular name for programmes covering wider reproduction-related areas currently in operation in India is:",
        options: [
            "National Health Mission (NHM)",
            "Family Welfare Programme (FWP)",
            "Reproductive and Child Health Care (RCH) programmes",
            "Mother and Child Safety Initiative (MCSI)"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q74",
        question: "What is amniocentesis used for, as mentioned in the text regarding its misuse?",
        options: [
            "To determine the age of the foetus",
            "To test for the presence of certain genetic disorders and determine foetal sex",
            "To increase the weight of the foetus",
            "To administer vaccines to the foetus"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q75",
        question: "The new oral contraceptive for females, 'Saheli', was developed by scientists at:",
        options: [
            "Indian Institute of Science (IISc), Bangalore",
            "All India Institute of Medical Sciences (AIIMS), New Delhi",
            "Central Drug Research Institute (CDRI), Lucknow",
            "National Institute of Virology (NIV), Pune"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q76",
        question: "What was the approximate world population in 1900?",
        options: [
            "1 billion",
            "2 billion",
            "4 billion",
            "6 billion"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q77",
        question: "According to the 2011 census report, India's population growth rate was:",
        options: [
            "Less than 1 per cent",
            "Less than 2 per cent (approx. 20/1000/year)",
            "Around 3 per cent",
            "More than 4 per cent"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q78",
        question: "What is the statutory marriageable age for females and males in India, mentioned as a measure to tackle population growth?",
        options: [
            "Females 16, Males 18",
            "Females 18, Males 21",
            "Females 21, Males 21",
            "Females 18, Males 18"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q79",
        question: "Which of these is a natural method of contraception?",
        options: [
            "Condoms",
            "IUDs",
            "Periodic abstinence",
            "Oral contraceptive pills"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q80",
        question: "Lactational amenorrhea is effective as a contraceptive method for a maximum period of how many months following parturition?",
        options: [
            "3 months",
            "6 months",
            "9 months",
            "12 months"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q81",
        question: "Condoms are barriers made of:",
        options: [
            "Cotton or silk",
            "Thin rubber/latex sheath",
            "Plastic",
            "Metal foil"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q82",
        question: "'Nirodh' is a popular brand of:",
        options: [
            "Oral contraceptive pill for females",
            "Condom for males",
            "IUD",
            "Spermicidal cream"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q83",
        question: "Intra Uterine Devices (IUDs) are inserted by whom?",
        options: [
            "The user themselves",
            "Doctors or expert nurses",
            "Pharmacists",
            "Friends or family members"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q84",
        question: "Hormone-releasing IUDs, in addition to increasing phagocytosis of sperms and suppressing sperm motility, also:",
        options: [
            "Make the uterus suitable for implantation",
            "Make the cervix hostile to sperms and uterus unsuitable for implantation",
            "Increase ovulation",
            "Enhance sperm production"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q85",
        question: "Oral contraceptive pills have to be taken daily for a period of:",
        options: [
            "7 days",
            "14 days",
            "21 days",
            "28 days"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q86",
        question: "'Saheli' pill is taken:",
        options: [
            "Daily",
            "Twice a week",
            "Once a week",
            "Once a month"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q87",
        question: "Surgical methods of contraception are also called:",
        options: [
            "Reversible methods",
            "Barrier methods",
            "Sterilisation",
            "Natural methods"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q88",
        question: "Sterilisation procedure in the male is called:",
        options: [
            "Tubectomy",
            "Hysterectomy",
            "Vasectomy",
            "Oophorectomy"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q89",
        question: "Medical Termination of Pregnancy (MTP) is also known as:",
        options: [
            "Natural birth",
            "Induced abortion",
            "Caesarean section",
            "Ectopic pregnancy"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q90",
        question: "Government of India legalised MTP in which year with strict conditions?",
        options: [
            "1951",
            "1961",
            "1971",
            "1981"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q91",
        question: "MTPs are considered relatively safe during which period of pregnancy?",
        options: [
            "First trimester (up to 12 weeks)",
            "Second trimester",
            "Third trimester",
            "Any time during pregnancy"
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q92",
        question: "Infections or diseases transmitted through sexual intercourse are collectively called:",
        options: [
            "Communicable diseases",
            "Genetic disorders",
            "Sexually Transmitted Infections (STIs) or Venereal Diseases (VD)",
            "Autoimmune diseases"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q93",
        question: "Which of the following STIs is considered the most dangerous and is discussed in detail in Chapter 7 (HIV/AIDS)?",
        options: [
            "Gonorrhoea",
            "Syphilis",
            "Genital herpes",
            "HIV infection"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q94",
        question: "Pelvic Inflammatory Diseases (PID), abortions, stillbirths, and ectopic pregnancies can be complications of untreated:",
        options: [
            "Common cold",
            "STIs",
            "Diabetes",
            "Hypertension"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q95",
        question: "What is the age group reported to have very high incidences of STIs?",
        options: [
            "5-10 years",
            "15-24 years",
            "30-40 years",
            "Above 50 years"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q96",
        question: "Inability to produce children in spite of unprotected sexual co-habitation is called:",
        options: [
            "Impotence",
            "Infertility",
            "Sterility",
            "Menopause"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q97",
        question: "IVF stands for:",
        options: [
            "Intra-vaginal fertilisation",
            "In vitro fertilisation",
            "Internal vigorous fertilisation",
            "In vivo formation"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q98",
        question: "In the test tube baby programme, ZIFT stands for:",
        options: [
            "Zygote Intra Fallopian Transfer",
            "Zygote Internal Follicle Transfer",
            "Zona Insemination Fallopian Technique",
            "Zygote Implantation Factor Test"
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q99",
        question: "GIFT, an assisted reproductive technology, stands for:",
        options: [
            "Gamete Internal Fertilisation Technique",
            "Gamete Intra Fallopian Transfer",
            "Germ-cell Insemination Factor Test",
            "Genetic Implantation Female Transfer"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q100",
        question: "Artificial insemination (Al) technique is used to correct infertility cases due to:",
        options: [
            "Blockage of fallopian tubes in females",
            "Inability of the male partner to inseminate the female or very low sperm counts",
            "Absence of ovulation in females",
            "Uterine abnormalities"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q101",
        question: "Why is providing right information about sex-related aspects to adolescents important?",
        options: [
            "To encourage early marriage",
            "To discourage them from believing in myths and having misconceptions",
            "To promote use of contraceptives only",
            "To focus solely on the anatomy of reproductive organs"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q102",
        question: "Amniocentesis can be used to detect genetic disorders like Down syndrome. This is achieved by analyzing:",
        options: [
            "Maternal blood cells",
            "Foetal cells and dissolved substances in the amniotic fluid",
            "Ultrasound images of the foetus",
            "Hormonal levels in the mother"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q103",
        question: "What are the probable reasons cited for the rapid increase in India's population post-independence?",
        options: [
            "Increased birth rate and increased death rate",
            "Rapid decline in death rate, MMR, and IMR, and increase in number of people in reproducible age",
            "Migration from other countries",
            "Lack of awareness about family planning methods"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q104",
        question: "An ideal contraceptive should possess which of the following characteristics?",
        options: [
            "Expensive and difficult to obtain",
            "Irreversible with significant side-effects",
            "User-friendly, easily available, effective, reversible with least side-effects",
            "Interferes significantly with sexual drive"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q105",
        question: "Periodic abstinence as a contraceptive method relies on avoiding coitus from day 10 to 17 of the menstrual cycle because:",
        options: [
            "This is the period of menstruation.",
            "Ovulation is expected during this period, making chances of fertilisation very high.",
            "Sperm survival is lowest during this period.",
            "The uterine lining is not receptive."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q106",
        question: "How do copper-releasing IUDs (e.g., CuT, Cu7) primarily work?",
        options: [
            "They prevent ovulation.",
            "They block the entry of sperm into the cervix.",
            "They increase phagocytosis of sperms and Cu ions suppress sperm motility and fertilising capacity.",
            "They release hormones that make the uterus unsuitable for implantation."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q107",
        question: "Oral contraceptive pills primarily prevent pregnancy by:",
        options: [
            "Killing sperms in the vagina",
            "Inhibiting ovulation and implantation, and altering cervical mucus quality",
            "Creating a physical barrier in the uterus",
            "Inducing early menstruation"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q108",
        question: "Emergency contraceptives, like IUDs or progestogen-estrogen combinations, are effective if administered within how many hours of coitus?",
        options: [
            "12 hours",
            "24 hours",
            "48 hours",
            "72 hours"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q109",
        question: "What is a major drawback of surgical methods of contraception (vasectomy and tubectomy)?",
        options: [
            "They are not highly effective.",
            "Their reversibility is very poor.",
            "They have significant side effects like hormonal imbalance.",
            "They need to be repeated frequently."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q110",
        question: "The Medical Termination of Pregnancy (Amendment) Act, 2017, allows termination of pregnancy up to 24 weeks (from 20 weeks) under specific conditions, requiring the opinion of:",
        options: [
            "One registered medical practitioner",
            "Two registered medical practitioners",
            "A panel of three doctors",
            "The woman and her spouse only"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1) - Note the OCR has extra info "(For pregnancies between 12-24 weeks; 1 RMP for up to 12 weeks)" which clarifies the answer but isn't part of the option text.
    },
    {
        id: "Q111",
        question: "Why might infected females often remain undetected for STIs for a long duration?",
        options: [
            "STIs only affect males.",
            "Symptoms in females are always severe and easily identifiable.",
            "Infected females may often be asymptomatic or have less significant symptoms in early stages.",
            "Social stigma prevents only females from seeking treatment."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q112",
        question: "In the 'test tube baby' programme (IVF-ET), if an embryo has more than 8 blastomeres, where is it typically transferred?",
        options: [
            "Into the fallopian tube (ZIFT)",
            "Into the uterus (IUT - Intra Uterine Transfer)",
            "Into the cervix",
            "It is cultured further outside the body"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q113",
        question: "Intra Cytoplasmic Sperm Injection (ICSI) is a specialised procedure where:",
        options: [
            "Multiple sperms are injected into the fallopian tube.",
            "A sperm is directly injected into the ovum in the laboratory.",
            "Semen is artificially introduced into the uterus.",
            "Ovum is directly injected into the uterus."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q114",
        question: "What is a significant socio-ethical consideration mentioned regarding Assisted Reproductive Technologies (ART) in India?",
        options: [
            "They are universally affordable.",
            "Their high cost, limited availability, and emotional/religious/social deterrents, contrasted with many orphaned children needing adoption.",
            "They always result in multiple births.",
            "There are no legal provisions for these procedures."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q115",
        question: "One key objective of RCH programmes is to create awareness about:",
        options: [
            "Only birth control options",
            "Various reproduction-related aspects, including STDs, post-natal care, and importance of breastfeeding",
            "Financial incentives for large families",
            "Traditional methods of sex determination"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q116",
        question: "The failure rate of natural contraceptive methods like periodic abstinence or coitus interruptus is generally considered:",
        options: [
            "Very low, almost nil",
            "Moderate",
            "High",
            "Equal to barrier methods"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q117",
        question: "Apart from preventing conception, what is an additional significant benefit of using condoms?",
        options: [
            "They enhance sexual pleasure.",
            "They protect the user from contracting STIs and AIDS.",
            "They are reusable multiple times.",
            "They regulate hormonal balance."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q118",
        question: "Tubectomy involves:",
        options: [
            "Removal of the uterus",
            "Tying or removing a small part of the vas deferens",
            "Tying or removing a small part of the fallopian tube",
            "Removal of the ovaries"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q119",
        question: "Why is the misuse of amniocentesis for foetal sex determination a dangerous trend, especially in India?",
        options: [
            "It is a very painful procedure for the mother.",
            "It can lead to illegal female foeticides, worsening the sex ratio.",
            "It often gives incorrect results about genetic disorders.",
            "It is not permitted by any religion."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q120",
        question: "Which of these STIs are generally NOT completely curable, even if detected early?",
        options: [
            "Gonorrhoea and Syphilis",
            "Chlamydiasis and Trichomoniasis",
            "Hepatitis-B, Genital Herpes, and HIV infections",
            "Genital warts"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
     {
        id: "Q121",
        question: "The RCH programmes aim to bring about \"socially conscious healthy families of desired size.\" This implies an approach that goes beyond just contraception, encompassing:",
        options: [
            "Only medical interventions for infertility.",
            "A holistic view including maternal/child health, awareness of population impact, and gender equality.",
            "Strict enforcement of a one-child norm.",
            "Promotion of only traditional family planning methods."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q122",
        question: "While 'Saheli' is a non-steroidal oral contraceptive pill, most conventional oral contraceptive pills contain progestogen-estrogen combinations. The primary mechanism by which these hormonal pills prevent pregnancy involves:",
        options: [
            "Direct spermicidal action in the vagina.",
            "Creating a permanent blockage in the fallopian tubes.",
            "Inhibition of ovulation and implantation, and alteration of cervical mucus to prevent sperm entry.",
            "Causing premature shedding of the uterine lining immediately after coitus."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q123",
        question: "Consider the effectiveness of lactational amenorrhea. This method is based on the physiological fact that:",
        options: [
            "Suckling inhibits the release of prolactin.",
            "Intense lactation and suckling inhibit gonadotropin release, thereby suppressing ovulation and the menstrual cycle.",
            "The uterine environment is hostile to sperm during lactation.",
            "Estrogen levels are extremely high during lactation, preventing follicle development."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q124",
        question: "The government's decision to legalise MTP in 1971 came with \"strict conditions to avoid its misuse.\" These restrictions are particularly crucial to prevent:",
        options: [
            "MTPs for non-medical reasons like contraceptive failure.",
            "Indiscriminate and illegal female foeticides following sex determination.",
            "MTPs performed by unqualified personnel.",
            "MTPs in the first trimester of pregnancy."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q125",
        question: "In ZIFT (Zygote Intra Fallopian Transfer), the zygote or early embryo (up to 8 blastomeres) is transferred into the fallopian tube. This location is chosen because:",
        options: [
            "The uterus is not yet prepared to receive the embryo at this stage.",
            "The fallopian tube provides the natural site for early cleavage and development before implantation in the uterus.",
            "It is easier to access the fallopian tube surgically.",
            "The embryo requires specific tubal secretions not found in the uterus."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q126",
        question: "GIFT (Gamete Intra Fallopian Transfer) is a suitable ART for a female who:",
        options: [
            "Can produce ova but has a blocked uterus.",
            "Cannot produce ova but can provide a suitable environment for fertilisation and further development.",
            "Has healthy ova and uterus but her male partner has very low sperm count.",
            "Has a damaged fallopian tube but produces healthy ova."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q127",
        question: "The success of RCH programs in improving societal reproductive health can be gauged by indicators such as:",
        options: [
            "Increased rate of population growth.",
            "Decreased maternal and infant mortality rates, better detection and cure of STDs, and increased number of couples with small families.",
            "Higher adoption rates of only permanent contraceptive methods.",
            "Increased number of amniocentesis procedures."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q128",
        question: "The text mentions that \"an ideal contraceptive should...in no way interfere with the sexual drive, desire and/or the sexual act of the user.\" This highlights a crucial aspect of contraceptive acceptability, which is:",
        options: [
            "Its cost-effectiveness",
            "Its 100% efficacy",
            "Its minimal impact on the user's psycho-sexual well-being and relationship dynamics.",
            "Its ease of disposal."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q129",
        question: "Statutory ban on amniocentesis for sex-determination is primarily aimed at tackling female foeticide. However, amniocentesis itself is a valuable medical procedure for:",
        options: [
            "Enhancing foetal growth and development.",
            "Prenatal diagnosis of chromosomal abnormalities and certain genetic metabolic disorders.",
            "Administering nutritional supplements directly to the foetus.",
            "Determining the exact date of conception."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q130",
        question: "The success of ART procedures like IVF-ET often depends on controlled ovarian stimulation in the female. This typically involves:",
        options: [
            "Administering hormones to suppress ovulation completely.",
            "Administering hormones to induce the development and maturation of multiple follicles and ova.",
            "Surgical removal of immature follicles for in-vitro maturation.",
            "Using natural cycle ovulation without any hormonal intervention."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q131",
        question: "The RCH programmes aim to build a \"reproductively healthy society.\" From a public health perspective, this involves not just individual health but also societal attitudes and infrastructure. Which of the following represents the most complex challenge in achieving this goal in a diverse country like India?",
        options: [
            "Ensuring availability of contraceptives in urban areas.",
            "Overcoming socio-cultural barriers, myths, misconceptions, and ensuring equitable access to quality healthcare and education, especially in remote areas.",
            "Training sufficient numbers of gynecologists.",
            "Developing new contraceptive technologies."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q132",
        question: "Lactational amenorrhea relies on the anovulatory state induced by breastfeeding. However, its reliability as a contraceptive decreases significantly after 6 months or if breastfeeding is not exclusive. This is primarily because:",
        options: [
            "The infant's suckling stimulus weakens considerably after 6 months.",
            "The maternal pituitary gland becomes desensitized to prolactin's inhibitory effect on gonadotropins over time or with reduced suckling frequency.",
            "The ovarian follicles spontaneously mature irrespective of hormonal signals after 6 months postpartum.",
            "The antibodies in colostrum that prevent conception are no longer produced."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q133",
        question: "While vasectomy and tubectomy are highly effective sterilization methods, their \"poor reversibility\" is a significant factor in counseling. The difficulty in reversal is mainly due to:",
        options: [
            "The body's immune response against the surgical site.",
            "The technical challenges in successfully re-anastomosing the severed vas deferens or fallopian tubes, and potential damage or blockage that impairs gamete transport even if patency is restored.",
            "Hormonal changes that permanently alter gamete production after sterilization.",
            "The high cost of reversal procedures making them inaccessible."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q134",
        question: "The Medical Termination of Pregnancy (MTP) Act aims to reduce illegal abortions and consequent maternal mortality. A critical ethical and medical dilemma arises when MTP is sought late in pregnancy for foetal abnormalities incompatible with life. This situation requires balancing:",
        options: [
            "The cost of MTP versus the cost of neonatal intensive care.",
            "The woman's autonomy and psychological well-being against the potential viability of the foetus and societal views on late-term abortions.",
            "The risk of MTP to the mother versus the risk of continuing the pregnancy.",
            "The availability of qualified medical practitioners for late-term MTPs."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q135",
        question: "In the context of STIs, the phrase \"social stigma...deters infected persons from going for timely detection and proper treatment\" has profound public health implications. This deterrence directly contributes to:",
        options: [
            "Increased efficacy of antibiotic treatments when finally sought.",
            "Reduced transmission rates as infected individuals isolate themselves.",
            "Higher rates of asymptomatic carriers, increased risk of complications, and continued unknowing transmission within the community.",
            "Spontaneous resolution of most STIs without medical intervention."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q136",
        question: "Assisted Reproductive Technologies (ART) have revolutionized infertility treatment. However, the transfer of multiple embryos in IVF-ET, often done to increase success rates per cycle, carries an increased risk of:",
        options: [
            "Genetic abnormalities in the resulting offspring.",
            "Maternal STIs post-procedure.",
            "Multiple pregnancies (twins, triplets, etc.), which are associated with higher risks for both mother and babies (e.g., premature birth, low birth weight).",
            "Failure of the uterine lining to support implantation."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q137",
        question: "Consider the slogan \"Hum Do Hamare Do\" (We two, our two). While promoting smaller family norms, its effective adoption by a diverse population requires more than just awareness campaigns. It necessitates:",
        options: [
            "Legal penalties for having more than two children.",
            "Widespread access to a range of safe, effective, and affordable contraceptive methods, coupled with quality reproductive health services and socio-economic empowerment, especially for women.",
            "Focusing contraceptive efforts solely on female sterilization.",
            "Promoting only natural family planning methods due to their lack of side effects."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q138",
        question: "The statement \"Though all persons are vulnerable to [STIs], their incidences are reported to be very high among persons in the age group of 15-24 years\" suggests that this demographic is particularly at risk. Beyond biological susceptibility, what combination of factors likely contributes most significantly to this higher incidence?",
        options: [
            "Lower immune system development and mandatory STI screening in this age group.",
            "A confluence of factors including initiation of sexual activity, potential for multiple partners, lower awareness or utilization of protective measures, and feelings of invincibility.",
            "Higher exposure to environmental toxins that mimic STI symptoms.",
            "A genetic predisposition to STIs that manifests primarily in this age group."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q139",
        question: "The \"additional benefit of protecting the user from contracting STIs and AIDS\" is a key advantage of condoms over many other contraceptive methods. This dual protection is critical because:",
        options: [
            "All other contraceptive methods increase the risk of STIs.",
            "Many hormonal and intrauterine methods, while effective for contraception, offer no barrier against the exchange of bodily fluids that transmit STIs.",
            "STIs are only transmissible if pregnancy occurs.",
            "Condoms are the only 100% effective method against both pregnancy and STIs."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q140",
        question: "The success of an RCH programme in a society can also be indirectly measured by a reduction in practices like illegal MTPs and foetal sex determination. This indicates:",
        options: [
            "A shift towards valuing male children more.",
            "Increased access to and acceptance of family planning, better maternal health, and a societal shift towards gender equality and valuing female children.",
            "Stricter law enforcement as the sole deterrent.",
            "A decline in the overall birth rate due to economic factors alone."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
     {
        id: "Q141",
        question: "Ecology studies the interactions among organisms and between the organism and its:",
        options: [
            "Only other organisms",
            "Only its physical environment",
            "Its physical (abiotic) environment and other organisms (biotic)",
            "Its internal organs"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q142",
        question: "Which of the following is NOT one of the four levels of biological organisation that ecology is basically concerned with?",
        options: [
            "Organisms",
            "Populations",
            "Cells",
            "Biomes"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q143",
        question: "A group of individuals of the same species living in a well-defined geographical area, sharing or competing for resources, and potentially interbreeding is called a:",
        options: [
            "Community",
            "Population",
            "Ecosystem",
            "Biome"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q144",
        question: "Which of these is an attribute of a population but not of an individual organism?",
        options: [
            "Birth",
            "Death",
            "Birth rate",
            "Age"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q145",
        question: "If in a pond there were 20 lotus plants last year and 8 new plants are added through reproduction, the birth rate is:",
        options: [
            "8 per year",
            "0.4 offspring per lotus per year",
            "28 per year",
            "0.2 offspring per lotus per year"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q146",
        question: "An age pyramid with a broad base indicates that the population is:",
        options: [
            "Stable",
            "Declining",
            "Growing (Expanding)",
            "Senescent"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q147",
        question: "Population density is technically designated as:",
        options: [
            "P",
            "D",
            "N",
            "S"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q148",
        question: "Which factor contributes to an increase in population density?",
        options: [
            "Mortality",
            "Emigration",
            "Natality",
            "Predation pressure"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q149",
        question: "The term 'r' in the population growth equation dN/dt = rN represents:",
        options: [
            "Carrying capacity",
            "Intrinsic rate of natural increase",
            "Population density",
            "Death rate"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q150",
        question: "When resources are unlimited, a population shows which type of growth?",
        options: [
            "Logistic growth",
            "Exponential growth",
            "Stable growth",
            "Declining growth"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q151",
        question: "The logistic population growth curve is typically:",
        options: [
            "J-shaped",
            "S-shaped (sigmoid)",
            "U-shaped",
            "L-shaped"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q152",
        question: "The maximum possible number of individuals a habitat can support is called its:",
        options: [
            "Biotic potential",
            "Intrinsic rate",
            "Carrying capacity (K)",
            "Population size"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q153",
        question: "Organisms that breed only once in their lifetime include:",
        options: [
            "Most birds",
            "Most mammals",
            "Pacific salmon fish and bamboo",
            "Oysters"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q154",
        question: "Interspecific interactions arise from the interaction of populations of:",
        options: [
            "The same species",
            "Two different species",
            "Multiple individuals of the same species",
            "Organisms and their abiotic environment"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q155",
        question: "An interaction where both interacting species benefit is called:",
        options: [
            "Competition",
            "Predation",
            "Mutualism",
            "Amensalism"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q156",
        question: "An interaction where one species benefits and the other is harmed is:",
        options: [
            "Mutualism",
            "Commensalism",
            "Predation or Parasitism",
            "Amensalism"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q157",
        question: "An interaction where one species benefits and the other is neither harmed nor benefited is called:",
        options: [
            "Mutualism",
            "Commensalism",
            "Parasitism",
            "Competition"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q158",
        question: "The Monarch butterfly is highly distasteful to its predator (bird) because:",
        options: [
            "It is camouflaged.",
            "It has a special chemical present in its body.",
            "It flies too fast.",
            "It has sharp thorns."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q159",
        question: "The most common morphological defense in plants like Acacia and Cactus is:",
        options: [
            "Chemical toxins",
            "Thorns",
            "Camouflage",
            "Thick bark"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q160",
        question: "Gause's 'Competitive Exclusion Principle' states that two closely related species competing for the same resources cannot co-exist indefinitely if:",
        options: [
            "Resources are abundant",
            "One species is a predator",
            "Resources are limiting",
            "They live in different habitats"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q161",
        question: "Parasites that feed on the external surface of the host organism are called:",
        options: [
            "Endoparasites",
            "Brood parasites",
            "Ectoparasites",
            "Phytophagous parasites"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q162",
        question: "An orchid growing as an epiphyte on a mango branch is an example of:",
        options: [
            "Parasitism",
            "Mutualism",
            "Commensalism",
            "Competition"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q163",
        question: "Mycorrhizae are associations between:",
        options: [
            "Fungi and algae",
            "Fungi and roots of higher plants",
            "Bacteria and roots of higher plants",
            "Algae and roots of higher plants"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q164",
        question: "The Mediterranean orchid Ophrys employs what mechanism to get pollination done by a species of bee?",
        options: [
            "Offering nectar",
            "Offering pollen as food",
            "Sexual deceit",
            "Brightly colored petals"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q165",
        question: "What does the term 'population' refer to in ecological studies?",
        options: [
            "All organisms in an ecosystem",
            "A group of individuals of the same species in a defined area that can interbreed",
            "All plant species in a forest",
            "A collection of different communities"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q166",
        question: "Why is population ecology an important area in ecology?",
        options: [
            "It focuses only on individual organisms.",
            "It links ecology to population genetics and evolution.",
            "It primarily studies abiotic factors.",
            "It deals with the global distribution of biomes."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q167",
        question: "If 4 individuals in a laboratory population of 40 fruitflies died during a week, the death rate in the population during that period is:",
        options: [
            "0.4 individuals per fruitfly per week",
            "0.1 individuals per fruitfly per week",
            "4 individuals per week",
            "10 individuals per fruitfly per week"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q168",
        question: "When is using 'percent cover' or 'biomass' a more meaningful measure of population density than total number?",
        options: [
            "When the population is very small.",
            "When individuals vary greatly in size, like a few large trees vs. many small grasses.",
            "When counting is easy and not time-consuming.",
            "When studying migratory bird populations."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q169",
        question: "Under normal conditions, which two factors are the most important in influencing population density changes?",
        options: [
            "Immigration and Emigration",
            "Births and Deaths",
            "Predation and Resource availability",
            "Weather and Disease"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q170",
        question: "The equation Nt+1 = Nt + [(B + I) – (D + E)] describes population growth. What does 'E' represent?",
        options: [
            "Birth rate",
            "Immigration",
            "Emigration",
            "Death rate"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q171",
        question: "In the logistic growth equation dN/dt = rN ((K-N)/K), what does (K-N)/K represent?",
        options: [
            "The intrinsic rate of increase",
            "The available resources or environmental resistance limiting growth",
            "The current population size",
            "The birth rate minus death rate"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q172",
        question: "Life history traits of organisms, such as breeding frequency and offspring size/number, are suggested by ecologists to have evolved in relation to:",
        options: [
            "Only the genetic makeup of the species.",
            "The constraints imposed by the abiotic and biotic components of their habitat.",
            "Random chance events only.",
            "The preferences of human breeders."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q173",
        question: "Predators play an important role in maintaining species diversity in a community by:",
        options: [
            "Increasing the population of all prey species.",
            "Reducing the intensity of competition among competing prey species.",
            "Exclusively feeding on dominant plant species.",
            "Introducing new genetic variations into prey populations."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q174",
        question: "The prickly pear cactus introduced into Australia was brought under control by:",
        options: [
            "Chemical pesticides",
            "A viral disease",
            "A cactus-feeding predator (a moth) from its natural habitat",
            "Manual removal by humans"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q175",
        question: "Resource partitioning is a mechanism that can promote co-existence between competing species by:",
        options: [
            "One species eliminating the other.",
            "Both species increasing their resource consumption.",
            "Species choosing different times for feeding or different foraging patterns for the same resource.",
            "One species becoming parasitic on the other."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q176",
        question: "Cuscuta, a parasitic plant, has lost which of the following during evolution?",
        options: [
            "Roots and flowers",
            "Chlorophyll and leaves",
            "Stem and vascular tissue",
            "Reproductive structures"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q177",
        question: "In brood parasitism, how have the eggs of the parasitic bird (like cuckoo) often evolved?",
        options: [
            "To be much larger and more colorful than the host's eggs.",
            "To hatch much earlier than the host's eggs.",
            "To resemble the host's egg in size and colour.",
            "To require no incubation by the host."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q178",
        question: "The interaction between sea anemone and clown fish, where the fish gets protection and the anemone is apparently unaffected, is an example of:",
        options: [
            "Mutualism (+/+)",
            "Commensalism (+/0)",
            "Amensalism (-/0)",
            "Parasitism (+/-)"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q179",
        question: "In the mutualistic relationship between figs and wasps, what does the fig offer the wasp in return for pollination?",
        options: [
            "Only nectar",
            "Only pollen",
            "Some of its developing seeds as food for wasp larvae and an oviposition site",
            "Protection from predators"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q180",
        question: "The age pyramid for a declining human population typically has:",
        options: [
            "A very broad base and rapidly tapering top.",
            "A relatively uniform distribution across age groups.",
            "A narrow base and a broader top or middle section.",
            "More males than females in all age groups."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q181",
        question: "The concept of 'per capita' birth and death rates is crucial in population ecology because:",
        options: [
            "It directly measures the total number of births and deaths.",
            "It allows comparison of population growth regardless of the absolute population size.",
            "It only applies to asexually reproducing organisms.",
            "It is easier to calculate than total births and deaths."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q182",
        question: "The intrinsic rate of natural increase (r) is a key parameter for assessing impacts on population growth. A species with a high 'r' value under ideal conditions would:",
        options: [
            "Have a very long generation time.",
            "Experience rapid population growth.",
            "Be limited by carrying capacity even with abundant resources.",
            "Produce very few offspring per reproductive event."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q183",
        question: "The anecdote of the king and the minister playing chess with wheat grains illustrates the concept of exponential growth. What key factor, often present in natural populations, is absent in this simplified model that allows such unchecked growth?",
        options: [
            "Sexual reproduction",
            "Limited resources and carrying capacity (K)",
            "Genetic variation",
            "Predation"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q184",
        question: "Why is it that \"predators in nature are 'prudent'\"?",
        options: [
            "They consciously decide to conserve prey populations.",
            "If a predator is too efficient and overexploits its prey, the prey might become extinct, leading to the predator's own extinction due to lack of food.",
            "Prey species have evolved perfect defense mechanisms.",
            "Predators only hunt old or sick individuals."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q185",
        question: "Connell's field experiments with barnacles (Balanus and Chathamalus) demonstrated competitive exclusion. What was the key observation when the competitively superior Balanus was removed from the intertidal zone?",
        options: [
            "Balanus populations from adjacent areas quickly recolonized.",
            "The distribution of Chathamalus expanded into the zone previously occupied by Balanus.",
            "Chathamalus also became extinct due to lack of competition.",
            "A new species of barnacle colonized the area."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q186",
        question: "Why is the female mosquito, which requires our blood for reproduction, not considered a parasite in the typical ecological definition provided, while lice on humans are?",
        options: [
            "Mosquitoes do not live on the host continuously.",
            "Mosquitoes transmit diseases, whereas lice do not.",
            "The interaction with mosquitoes is brief and for a specific purpose (blood meal for egg production), not a sustained dependency for overall nutrition like lice.",
            "Lice cause more irritation than mosquitoes."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q187",
        question: "The tight one-to-one relationship between many fig species and their pollinator wasp species is an example of co-evolution. What would likely happen if the partner wasp species for a particular fig tree went extinct?",
        options: [
            "The fig tree would be pollinated by other insect species.",
            "The fig tree would switch to wind pollination.",
            "The fig tree would eventually fail to reproduce sexually and might face local extinction.",
            "The fig tree would develop parthenocarpic fruits."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q188",
        question: "Amensalism (-/0) is an interaction where one species is harmed, and the other is unaffected. Which of the following scenarios best exemplifies amensalism?",
        options: [
            "A large tree shading out smaller plants growing beneath it.",
            "A lion hunting a zebra.",
            "Fungi decomposing dead organic matter.",
            "Bees pollinating flowers while collecting nectar."
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0) - Note the OCR explanation adds nuance but the primary example fits option 1.
    },
    {
        id: "Q189",
        question: "In logistic growth, the population growth rate (dN/dt) is highest when:",
        options: [
            "N is very close to K",
            "N is very small (close to 0)",
            "N = K/2",
            "N > K"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q190",
        question: "Considering life history variations, organisms like oysters producing a large number of small-sized offspring typically exhibit:",
        options: [
            "High parental care and low offspring mortality.",
            "Low parental care and high offspring mortality, relying on sheer numbers for some to survive.",
            "K-selected strategy with stable population sizes.",
            "A single, massive reproductive event followed by death."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q191",
        question: "The shift from a J-shaped exponential growth curve to an S-shaped logistic growth curve for a population implies the increasing influence of:",
        options: [
            "A constant intrinsic rate of natural increase.",
            "Density-dependent factors and environmental resistance as the population approaches carrying capacity.",
            "Density-independent factors becoming less severe.",
            "A sudden increase in resource availability."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q192",
        question: "\"For any species, the minimal requirement is one more species on which it can feed. Even a plant species...needs soil microbes...\" This statement underscores the concept of:",
        options: [
            "The inherent stability of single-species ecosystems.",
            "The fundamental interconnectedness and interdependencies within biological communities, making true isolation impossible.",
            "The dominance of competitive interactions in shaping communities.",
            "The self-sufficiency of autotrophic organisms."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q193",
        question: "The Monarch butterfly acquires its distasteful chemical by feeding on a poisonous weed during its caterpillar stage. This is an evolutionary strategy where the butterfly:",
        options: [
            "Synthesizes the toxin de novo.",
            "Sequesters and utilizes a pre-existing plant defense chemical for its own protection.",
            "Evolves mimicry of a poisonous plant.",
            "Develops an immune response to plant toxins."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q194",
        question: "MacArthur's study on warblers co-existing on the same tree by partitioning resources (different feeding times/foraging patterns) suggests that interspecific competition can drive:",
        options: [
            "Competitive exclusion of all but one species.",
            "Niche differentiation and character displacement, allowing for co-existence.",
            "Mutualistic relationships between the warbler species.",
            "An increase in the carrying capacity for each warbler species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q195",
        question: "The evolution of host-specificity in many parasites, leading to co-evolution, implies a dynamic \"arms race\" where:",
        options: [
            "The parasite always gains the upper hand, leading to host extinction.",
            "The host always evolves perfect resistance, leading to parasite extinction.",
            "Reciprocal selective pressures drive adaptations in both host (e.g., resistance mechanisms) and parasite (e.g., mechanisms to evade host defenses).",
            "Both host and parasite evolve towards a mutualistic relationship."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q196",
        question: "The \"sexual deceit\" employed by the orchid Ophrys relies on the male bee's misidentification. If the female bee's color patterns change significantly due to natural selection for other reasons (e.g., camouflage), what is the most likely long-term consequence for the orchid-bee pollination system unless the orchid co-evolves?",
        options: [
            "The male bees will learn to pollinate other flower types.",
            "The orchid's pollination success will decline, potentially leading to selection pressure for the orchid to match the new female bee pattern or find alternative pollinators.",
            "The female bees will start pollinating the orchid.",
            "The orchid will switch to self-pollination."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q197",
        question: "Population density can be measured in terms of biomass. For an ecological study assessing the impact of a nutrient pollutant on a lake's primary producers (phytoplankton), why might biomass be a more informative measure than just the number of individuals?",
        options: [
            "Phytoplankton cells are too small to count accurately.",
            "Biomass directly reflects the energy captured and stored, and individual cell sizes can vary greatly with nutrient availability, affecting total productivity even if numbers don't change proportionally.",
            "Biomass is easier to measure for aquatic organisms.",
            "Number of individuals always overestimates the ecological role."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q198",
        question: "The Verhulst-Pearl Logistic Growth equation (dN/dt = rN((K-N)/K)) models a population where growth slows as it approaches K. This slowing is attributed to \"environmental resistance.\" Which of these is a primary component of this resistance?",
        options: [
            "An increase in the intrinsic rate of natural increase (r).",
            "Increased availability of food and space.",
            "Accumulation of waste products, increased competition for limited resources, and higher susceptibility to predation or disease.",
            "A decrease in the generation time of the species."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q199",
        question: "In the context of interspecific competition, \"interference competition\" differs from \"exploitation competition\" (resource competition) in that:",
        options: [
            "Interference competition only occurs when resources are extremely scarce.",
            "Interference competition involves direct antagonistic interactions (e.g., territoriality, release of toxins) between individuals, reducing access to resources even if those resources are not limiting.",
            "Exploitation competition always leads to the extinction of one species.",
            "Interference competition is only observed between closely related species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q200",
        question: "Ramdeo Misra is revered as the Father of Ecology in India. His research laid foundations for understanding tropical communities and their succession, environmental responses of plant populations, and productivity/nutrient cycling. This holistic approach emphasizes ecology as a science of:",
        options: [
            "Merely cataloging species.",
            "Understanding the complex interactions and processes within and between different levels of biological organization and their environment.",
            "Focusing solely on the impact of pollution.",
            "Developing genetically modified organisms for environmental benefit."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q201",
        question: "An ecosystem is visualized as a functional unit of nature where:",
        options: [
            "Only living organisms interact.",
            "Only abiotic factors are considered.",
            "Living organisms interact among themselves and with the surrounding physical environment.",
            "Only plant life is studied."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q202",
        question: "Which of the following is an example of a terrestrial ecosystem?",
        options: [
            "Pond",
            "River",
            "Forest",
            "Estuary"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q203",
        question: "Which of the following is an example of an aquatic ecosystem?",
        options: [
            "Grassland",
            "Desert",
            "Crop field",
            "Lake"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q204",
        question: "Vertical distribution of different species occupying different levels in an ecosystem is called:",
        options: [
            "Species composition",
            "Stratification",
            "Niche differentiation",
            "Food web"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q205",
        question: "Which of the following is NOT one of the four basic components/aspects of an ecosystem considered for its functioning?",
        options: [
            "Productivity",
            "Decomposition",
            "Species richness",
            "Energy flow"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q206",
        question: "In a pond ecosystem, the abiotic component includes:",
        options: [
            "Phytoplankton and algae",
            "Zooplankton and free-swimming forms",
            "Water with dissolved substances and soil deposit",
            "Fungi and bacteria"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q207",
        question: "The autotrophic components in a pond ecosystem typically include:",
        options: [
            "Zooplankton",
            "Fungi and bacteria",
            "Phytoplankton, algae, and marginal plants",
            "Bottom dwelling fish"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q208",
        question: "Primary production is defined as the amount of biomass or organic matter produced per unit area over a time period by:",
        options: [
            "Consumers",
            "Decomposers",
            "Plants during photosynthesis",
            "Herbivores"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q209",
        question: "The rate of biomass production is called:",
        options: [
            "Decomposition rate",
            "Standing crop",
            "Productivity",
            "Respiration rate"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q210",
        question: "Gross Primary Productivity (GPP) minus respiration losses (R) is:",
        options: [
            "Secondary Productivity",
            "Net Primary Productivity (NPP)",
            "Decomposition rate",
            "Standing state"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q211",
        question: "Secondary productivity is defined as the rate of formation of new organic matter by:",
        options: [
            "Producers",
            "Decomposers",
            "Consumers",
            "Sunlight"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q212",
        question: "The process of breakdown of complex organic matter into inorganic substances like CO2, water, and nutrients is called:",
        options: [
            "Productivity",
            "Stratification",
            "Decomposition",
            "Eutrophication"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q213",
        question: "Dead plant remains such as leaves, bark, flowers, and dead remains of animals, including fecal matter, constitute:",
        options: [
            "Humus",
            "Detritus",
            "Litter",
            "Biomass"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q214",
        question: "The process by which detritivores (e.g., earthworm) break down detritus into smaller particles is called:",
        options: [
            "Leaching",
            "Catabolism",
            "Humification",
            "Fragmentation"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q215",
        question: "The process by which water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts is called:",
        options: [
            "Fragmentation",
            "Leaching",
            "Catabolism",
            "Mineralisation"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q216",
        question: "Humification leads to the accumulation of a dark-colored amorphous substance called:",
        options: [
            "Detritus",
            "Litter",
            "Humus",
            "Minerals"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q217",
        question: "The process by which humus is further degraded by some microbes, releasing inorganic nutrients, is known as:",
        options: [
            "Humification",
            "Fragmentation",
            "Leaching",
            "Mineralisation"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q218",
        question: "What is the ultimate source of energy for all ecosystems on Earth, except for deep-sea hydrothermal ecosystems?",
        options: [
            "Wind",
            "Water",
            "Sun",
            "Geothermal heat"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q219",
        question: "Photosynthetically Active Radiation (PAR) constitutes what percentage of the incident solar radiation?",
        options: [
            "Less than 10%",
            "About 25%",
            "Less than 50%",
            "About 75%"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q220",
        question: "Organisms that feed on producers (plants) are called:",
        options: [
            "Primary carnivores",
            "Secondary consumers",
            "Primary consumers (herbivores)",
            "Decomposers"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q221",
        question: "The detritus food chain (DFC) begins with:",
        options: [
            "Living green plants",
            "Dead organic matter",
            "Herbivores",
            "Carnivores"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q222",
        question: "Organisms that occupy a specific place in the food chain based on their source of nutrition are said to be at a specific:",
        options: [
            "Habitat",
            "Niche",
            "Trophic level",
            "Stratum"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q223",
        question: "Producers (plants) belong to which trophic level?",
        options: [
            "First trophic level",
            "Second trophic level",
            "Third trophic level",
            "Top trophic level"
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q224",
        question: "The mass of living material at a particular time in a trophic level is called:",
        options: [
            "Biomass",
            "Standing crop",
            "Productivity",
            "Detritus"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q225",
        question: "Approximately what percentage of energy is transferred from one trophic level to the next lower trophic level?",
        options: [
            "1%",
            "10%",
            "50%",
            "90%"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q226",
        question: "Which ecological pyramid is always upright and can never be inverted?",
        options: [
            "Pyramid of numbers",
            "Pyramid of biomass",
            "Pyramid of energy",
            "All pyramids are always upright"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q227",
        question: "The pyramid of biomass in a sea ecosystem is generally:",
        options: [
            "Upright",
            "Inverted",
            "Spindle-shaped",
            "Has no specific shape"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q228",
        question: "Saprophytes, like fungi and bacteria, are not given any place in ecological pyramids, even though they play a vital role. What is their primary role?",
        options: [
            "Primary production",
            "Predation",
            "Decomposition",
            "Herbivory"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q229",
        question: "In a pond ecosystem, decomposers like fungi and bacteria are especially abundant where?",
        options: [
            "At the surface of the water",
            "In the body of fish",
            "In the marginal plants",
            "In the bottom of the pond"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q230",
        question: "The annual net primary productivity of the whole biosphere is approximately:",
        options: [
            "55 billion tons",
            "100 billion tons",
            "170 billion tons",
            "250 billion tons"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q231",
        question: "Why is it convenient to divide the global ecosystem into terrestrial and aquatic categories for study?",
        options: [
            "Because they do not interact with each other.",
            "Because the global ecosystem is too big and complex to be studied at one time.",
            "Because aquatic ecosystems are more important than terrestrial ones.",
            "Because terrestrial ecosystems lack abiotic components."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q232",
        question: "The rate of function of an entire pond ecosystem is regulated by:",
        options: [
            "Only the number of fish present.",
            "Only the amount of dissolved oxygen.",
            "Solar input, temperature cycle, day-length, and other climatic conditions.",
            "The type of bacteria in the sediment."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q233",
        question: "Net primary productivity (NPP) represents the:",
        options: [
            "Total solar energy captured by plants.",
            "Energy lost by plants during respiration.",
            "Available biomass for consumption by heterotrophs (herbivores and decomposers).",
            "Rate of decomposition by microbes."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q234",
        question: "Despite occupying about 70% of the Earth's surface, the productivity of oceans is only 55 billion tons. What is a primary reason for this relatively low productivity per unit area compared to land?",
        options: [
            "Lack of sunlight in deep ocean zones and nutrient limitation in surface waters.",
            "Oceans have fewer plant species.",
            "High salinity inhibits photosynthesis.",
            "Most oceanic plants are consumed rapidly."
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q235",
        question: "Decomposition rate is slower if detritus is rich in:",
        options: [
            "Nitrogen and water-soluble sugars",
            "Lignin and chitin",
            "Phosphorus and potassium",
            "Simple carbohydrates"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q236",
        question: "Which climatic conditions favor decomposition?",
        options: [
            "Low temperature and anaerobic conditions",
            "Warm and moist environment",
            "Extreme dryness and high sunlight",
            "Cold and aerobic conditions"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q237",
        question: "Plants capture only about what percentage of the Photosynthetically Active Radiation (PAR) to sustain the entire living world?",
        options: [
            "0.1 - 1%",
            "2 - 10%",
            "15 - 25%",
            "More than 50%"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q238",
        question: "The unidirectional flow of energy in an ecosystem (sun to producers to consumers) is in keeping with which law of thermodynamics?",
        options: [
            "It violates the first law.",
            "It is an exception to the second law.",
            "It is consistent with the first law (energy conservation) and the second law (energy dissipation as heat).",
            "It relates only to the third law of thermodynamics."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q239",
        question: "In most terrestrial ecosystems, a much larger fraction of energy flows through which food chain compared to the Grazing Food Chain (GFC)?",
        options: [
            "Parasitic Food Chain",
            "Detritus Food Chain (DFC)",
            "Aquatic Food Chain",
            "Auxiliary Food Chain"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q240",
        question: "A sparrow eating seeds is a primary consumer, but when it eats insects, it functions as a:",
        options: [
            "Producer",
            "Decomposer",
            "Secondary consumer",
            "Herbivore"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q241",
        question: "Why is the measurement of biomass in terms of dry weight considered more accurate than fresh weight?",
        options: [
            "Dry weight is easier to measure.",
            "Fresh weight includes variable water content, which can distort comparisons of actual organic matter.",
            "Dry weight is always higher than fresh weight.",
            "Fresh weight cannot be measured for microorganisms."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q242",
        question: "If you were to count the number of insects feeding on a big tree and then the number of small birds depending on these insects, the pyramid of numbers would likely be:",
        options: [
            "Upright",
            "Inverted for the producer-insect relationship, then upright for insect-bird.",
            "Spindle-shaped (narrow base, wider middle, narrow top) or partially inverted at the base.",
            "Always completely inverted."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q243",
        question: "The primary difference between the GFC (Grazing Food Chain) and DFC (Detritus Food Chain) is:",
        options: [
            "DFC has more trophic levels than GFC.",
            "GFC starts with living green plants while DFC starts with dead organic matter.",
            "Energy flow is bidirectional in DFC.",
            "DFC is only found in aquatic ecosystems."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q244",
        question: "Humus is highly resistant to microbial action and serves as a reservoir of nutrients because:",
        options: [
            "It is primarily inorganic.",
            "It is colloidal in nature and decomposes very slowly.",
            "It is water-soluble and leaches quickly.",
            "It is rapidly consumed by detritivores."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q245",
        question: "The \"10 percent law\" of energy transfer between trophic levels means that:",
        options: [
            "Only 10% of organisms from a lower trophic level are eaten by the next.",
            "10% of the energy is lost as heat at each transfer.",
            "Approximately 10% of the energy from a lower trophic level is incorporated into the biomass of the next higher trophic level.",
            "Each trophic level has 10% more biomass than the level above it."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q246",
        question: "Consider a small, isolated pond ecosystem. If a sudden influx of organic pollutants significantly increases the amount of decomposable organic matter, what would be the immediate impact on the Biochemical Oxygen Demand (BOD)?",
        options: [
            "BOD would decrease rapidly.",
            "BOD would remain unchanged.",
            "BOD would increase significantly due to increased microbial activity consuming oxygen.",
            "BOD would fluctuate unpredictably."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q247",
        question: "The stratification in a forest ecosystem (trees at top, shrubs second, herbs/grasses at bottom) is primarily a result of:",
        options: [
            "Different reproductive strategies of the plants.",
            "Competition for light, leading to adaptations for optimal light capture at different heights.",
            "The types of soil present at different depths.",
            "Random distribution of plant seeds."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q248",
        question: "If primary productivity in an ecosystem is very low, what would be the likely consequence for the higher trophic levels (e.g., number of carnivores)?",
        options: [
            "Higher trophic levels would be unaffected.",
            "Higher trophic levels would be more diverse and abundant.",
            "Higher trophic levels would be severely limited in number and biomass due to insufficient energy base.",
            "Carnivores would switch to consuming producers directly."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q249",
        question: "Decomposition is largely an oxygen-requiring process. In waterlogged soils where anaerobic conditions prevail, what is the likely fate of organic matter?",
        options: [
            "It decomposes very rapidly.",
            "It undergoes rapid mineralisation.",
            "It decomposes very slowly, leading to accumulation of peat or organic-rich soil.",
            "It is primarily consumed by aerobic detritivores."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q250",
        question: "The statement \"ecosystems are not exempt from the Second Law of thermodynamics\" implies that:",
        options: [
            "Energy can be created within an ecosystem.",
            "Energy transfer between trophic levels is 100% efficient.",
            "There is a continuous dissipation of energy as heat at each transfer, requiring a constant input of energy (from the sun) to maintain order.",
            "All energy in an ecosystem is eventually converted back to solar energy."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q251",
        question: "Why is the pyramid of biomass generally inverted in a marine ecosystem (phytoplankton biomass < zooplankton biomass)?",
        options: [
            "Zooplankton are much larger than phytoplankton.",
            "Phytoplankton have a very high turnover rate (rapid reproduction and consumption), so their standing crop at any given time is low, but their overall productivity supports a larger biomass of longer-lived zooplankton.",
            "Zooplankton photosynthesize more efficiently.",
            "Phytoplankton lose more energy through respiration."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q252",
        question: "Ecosystem services, such as purification of air and water by forests, are often undervalued in economic terms. The concept of \"ecosystem services\" highlights:",
        options: [
            "The direct commercial products obtained from ecosystems.",
            "The indirect benefits that functioning ecosystems provide to human well-being, often without direct market valuation.",
            "The recreational value of ecosystems only.",
            "The aesthetic value of individual species only."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q253",
        question: "Consider the important steps in decomposition: fragmentation, leaching, catabolism, humification, and mineralisation. Which of these steps are primarily mediated by microbial enzymes?",
        options: [
            "Fragmentation and Leaching",
            "Catabolism, Humification, and Mineralisation",
            "Only Fragmentation",
            "Only Leaching and Mineralisation"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q254",
        question: "If a toxin (e.g., a heavy metal) that biomagnifies is introduced at the producer level in a food chain, where would its concentration likely be highest?",
        options: [
            "In the producers",
            "In the primary consumers",
            "In the top carnivores",
            "Equally distributed across all trophic levels"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q255",
        question: "The standing crop (biomass) of a trophic level represents the amount of living material at a particular time, while productivity represents the rate of biomass production. In a stable ecosystem:",
        options: [
            "Standing crop is always equal to productivity.",
            "Productivity must be sufficient to support the turnover and maintenance of the standing crop and allow for transfer to the next trophic level.",
            "Standing crop is always much higher than productivity.",
            "Productivity is independent of the standing crop."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q256",
        question: "While the sun is the primary energy source for most ecosystems, deep-sea hydrothermal vent ecosystems are an exception. Their primary producers are typically:",
        options: [
            "Photosynthetic algae that have adapted to low light.",
            "Chemosynthetic bacteria that utilize energy from reduced inorganic compounds (e.g., hydrogen sulfide) released from the vents.",
            "Detritivores feeding on organic matter sinking from surface waters.",
            "Filter-feeding animals that directly absorb dissolved organic matter."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q257",
        question: "The efficiency of Net Primary Productivity (NPP) varies greatly among ecosystems. Factors like nutrient availability, temperature, and water are key. In a nutrient-poor, oligotrophic lake, NPP is limited. If this lake experiences significant nutrient enrichment (eutrophication) from agricultural runoff, what initial cascade of events is most likely?",
        options: [
            "A decrease in algal blooms and an increase in water clarity.",
            "A rapid increase in algal blooms (primary productivity), followed by increased decomposition of dead algae, leading to oxygen depletion (hypoxia) and potential fish kills.",
            "An immediate increase in fish populations due to more food.",
            "A shift towards a desert-like ecosystem."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q258",
        question: "The concept of \"trophic level\" simplifies complex food webs. However, many organisms are omnivores or feed at multiple trophic levels. How does this omnivory affect the structure and stability of ecological pyramids and energy flow calculations?",
        options: [
            "It makes ecological pyramids perfectly symmetrical and energy flow calculations simpler.",
            "It has no significant impact on pyramid structure or energy flow.",
            "It complicates the depiction of simple pyramids and necessitates more complex food web models; energy flow must account for partitioning across different trophic roles.",
            "It always leads to an inverted pyramid of energy."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q259",
        question: "Humification is a critical process in soil formation, creating stable organic matter (humus). If soil conditions (e.g., extreme acidity or waterlogging) inhibit humification but allow for some fragmentation and catabolism, what would be the characteristic of the organic matter in such soils?",
        options: [
            "Rapid conversion to inorganic nutrients.",
            "Accumulation of partially decomposed, less stable organic residues rather than well-developed humus, potentially leading to nutrient imbalances.",
            "Formation of highly fertile, dark topsoil.",
            "Complete absence of any organic matter."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q260",
        question: "The 10% energy transfer rule is a generalization. The actual efficiency of energy transfer between trophic levels can vary. If in a specific food chain, the transfer efficiency from herbivores to primary carnivores is unusually high (e.g., 20%), what would be a plausible ecological reason or consequence?",
        options: [
            "Herbivores are very inefficient at converting plant matter into their own biomass.",
            "Primary carnivores are highly efficient at digesting and assimilating herbivore biomass, and/or herbivores have a high proportion of easily digestible tissue.",
            "The primary carnivores have a much lower metabolic rate than the herbivores.",
            "This would violate the second law of thermodynamics."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q261",
        question: "Ecosystems exhibit both resistance (ability to withstand disturbance) and resilience (ability to recover from disturbance). A highly diverse ecosystem is often hypothesized to be more resilient because:",
        options: [
            "All species perform exactly the same function, making them easily replaceable.",
            "The presence of multiple species with overlapping functional roles (functional redundancy) means that if some species are lost, others can compensate, maintaining overall ecosystem processes.",
            "Dominant species in diverse ecosystems are inherently more resistant to all types of disturbances.",
            "Diverse ecosystems have lower rates of nutrient cycling."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q262",
        question: "In the context of nutrient cycling, decomposers are crucial for mineralisation. If decomposer activity in a terrestrial ecosystem was severely inhibited (e.g., by a persistent fungicide), what would be the long-term impact on primary productivity?",
        options: [
            "Primary productivity would increase due to less competition from microbes.",
            "Primary productivity would remain unaffected as plants can obtain all nutrients from atmospheric deposition.",
            "Primary productivity would eventually decline significantly due to the locking up of essential nutrients in dead organic matter and reduced availability in the soil.",
            "Plants would evolve to directly absorb complex organic matter."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q263",
        question: "Consider two forest ecosystems: a temperate deciduous forest and a tropical rainforest. While both have GPP, the ratio of NPP to GPP (NPP/GPP) might differ. Tropical rainforests, despite high GPP, often have high respiration rates due to warm temperatures. This implies their NPP/GPP ratio might be:",
        options: [
            "Significantly higher than temperate forests.",
            "Similar to or potentially lower than some temperate forests during their growing season, as a larger fraction of GPP is used in respiration.",
            "Always 1, meaning no respiratory losses.",
            "Dependent only on the number of tree species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q264",
        question: "The pyramid of numbers can be inverted if a single large producer (like a tree) supports many primary consumers (insects). If these insects are then consumed by a smaller number of secondary consumers (birds), the overall shape of the pyramid of numbers for this three-trophic-level system would be:",
        options: [
            "Consistently upright.",
            "Consistently inverted.",
            "Inverted at the base (producer to primary consumer) and then upright (primary to secondary consumer), resulting in a somewhat spindle or irregular shape.",
            "A perfect rectangle."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q265",
        question: "The process of ecological succession involves changes in species composition and community structure over time. Early successional (pioneer) species often have characteristics like rapid growth and high dispersal. How does their role relate to NPP and decomposition in the initial stages of succession?",
        options: [
            "They contribute minimally to NPP and enhance decomposition rates.",
            "They contribute significantly to initial NPP, and their decomposition, though perhaps initially slow, begins the process of soil building and nutrient accumulation.",
            "They have very low NPP and primarily inhibit decomposition.",
            "They only fix nitrogen and do not contribute to biomass."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q266",
        question: "Biodiversity is a term popularised by sociobiologist:",
        options: [
            "Charles Darwin",
            "Gregor Mendel",
            "Edward Wilson",
            "Ramdeo Misra"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q267",
        question: "Which of the following is NOT one of the three most important levels of biodiversity?",
        options: [
            "Genetic diversity",
            "Species diversity",
            "Cellular diversity",
            "Ecological diversity"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q268",
        question: "Genetic variation shown by the medicinal plant Rauwolfia vomitoria growing in different Himalayan ranges is an example of:",
        options: [
            "Species diversity",
            "Genetic diversity",
            "Ecological diversity",
            "Community diversity"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q269",
        question: "India has more than 50,000 genetically different strains of:",
        options: [
            "Mango",
            "Wheat",
            "Rice",
            "Corn"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q270",
        question: "The Western Ghats having a greater amphibian species diversity than the Eastern Ghats is an example of:",
        options: [
            "Genetic diversity",
            "Species diversity",
            "Ecological diversity",
            "Ecosystem diversity"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q271",
        question: "According to the IUCN (2004), the total number of plant and animal species described so far is slightly more than:",
        options: [
            "0.5 million",
            "1.0 million",
            "1.5 million",
            "2.0 million"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q272",
        question: "A more conservative and scientifically sound estimate made by Robert May places the global species diversity at about:",
        options: [
            "3 million",
            "7 million",
            "10 million",
            "15 million"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q273",
        question: "More than what percentage of all species recorded are animals?",
        options: [
            "30%",
            "50%",
            "70%",
            "90%"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q274",
        question: "Among animals, which group is the most species-rich, making up more than 70% of the total?",
        options: [
            "Mammals",
            "Birds",
            "Insects",
            "Fishes"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q275",
        question: "The number of fungi species in the world is more than the combined total of the species of:",
        options: [
            "Insects and crustaceans",
            "Fishes, amphibians, reptiles, and mammals",
            "Plants and algae",
            "Birds and mammals"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q276",
        question: "India has what percentage of the world's land area?",
        options: [
            "1.0%",
            "2.4%",
            "5.5%",
            "8.1%"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q277",
        question: "India's share of global species diversity is an impressive:",
        options: [
            "2.4%",
            "5.0%",
            "8.1%",
            "12.5%"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q278",
        question: "Species diversity generally decreases as we move from:",
        options: [
            "Poles towards the equator",
            "Equator towards the poles",
            "Low altitudes to high altitudes",
            "Coastal areas to inland areas"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q279",
        question: "Colombia, located near the equator, has nearly how many species of birds?",
        options: [
            "105",
            "560",
            "1,400",
            "3,000"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q280",
        question: "The Amazonian rain forest in South America has the greatest biodiversity on earth and is home to more than how many species of plants?",
        options: [
            "10,000",
            "20,000",
            "30,000",
            "40,000"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q281",
        question: "The relationship between species richness and area for a wide variety of taxa turns out to be a:",
        options: [
            "Straight line",
            "Rectangular hyperbola",
            "Parabola",
            "Sigmoid curve"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q282",
        question: "On a logarithmic scale, the species-area relationship is a:",
        options: [
            "Curve",
            "Straight line",
            "Circle",
            "Hyperbola"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q283",
        question: "The value of Z (slope of the line) in the species-area relationship (log S = log C + Z log A) for small areas generally lies in the range of:",
        options: [
            "0.01 to 0.02",
            "0.1 to 0.2",
            "0.5 to 0.7",
            "1.0 to 1.2"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q284",
        question: "Who proposed the 'rivet popper hypothesis' to explain the importance of species richness?",
        options: [
            "David Tilman",
            "Alexander von Humboldt",
            "Paul Ehrlich",
            "Robert May"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q285",
        question: "The IUCN Red List (2004) documents the extinction of how many species in the last 500 years?",
        options: [
            "125",
            "338",
            "550",
            "784"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q286",
        question: "The dodo, which became extinct, was native to:",
        options: [
            "Australia",
            "Africa",
            "Mauritius",
            "Russia"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q287",
        question: "The sobriquet used to describe the four major causes of biodiversity losses is:",
        options: [
            "The Fatal Four",
            "The Evil Quartet",
            "The Destructive Dozen",
            "The Sinister Six"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q288",
        question: "Which is considered the most important cause driving animals and plants to extinction?",
        options: [
            "Over-exploitation",
            "Alien species invasions",
            "Co-extinctions",
            "Habitat loss and fragmentation"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q289",
        question: "The Amazon rain forest is so huge that it is called the:",
        options: [
            "Heart of the planet",
            "Lungs of the planet",
            "Brain of the planet",
            "Kidneys of the planet"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q290",
        question: "The Nile perch introduced into Lake Victoria in east Africa led to the extinction of many species of:",
        options: [
            "Aquatic plants",
            "Cichlid fish",
            "Amphibians",
            "Water birds"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q291",
        question: "The invasive weed species Parthenium is also known as:",
        options: [
            "Water hyacinth",
            "Lantana",
            "Carrot grass",
            "Eicchornia"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q292",
        question: "When a host fish species becomes extinct, its unique assemblage of parasites also meets the same fate. This is an example of:",
        options: [
            "Habitat loss",
            "Over-exploitation",
            "Alien species invasion",
            "Co-extinctions"
        ],
        answer: 3 // Corresponds to Answer: 4 in OCR (4 - 1 = 3)
    },
    {
        id: "Q293",
        question: "Protecting the whole ecosystem to save its biodiversity at all levels is called:",
        options: [
            "Ex situ conservation",
            "In situ conservation",
            "Cryopreservation",
            "Seed banking"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q294",
        question: "Regions with very high levels of species richness and high degree of endemism are known as:",
        options: [
            "National Parks",
            "Wildlife Sanctuaries",
            "Biodiversity hotspots",
            "Biosphere Reserves"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q295",
        question: "How many biodiversity hotspots were initially identified globally?",
        options: [
            "10",
            "15",
            "25",
            "34"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q296",
        question: "Which of these is NOT a biodiversity hotspot covering India's exceptionally high biodiversity regions?",
        options: [
            "Western Ghats and Sri Lanka",
            "Indo-Burma",
            "Eastern Ghats",
            "Himalaya"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q297",
        question: "Sacred groves are examples of:",
        options: [
            "Ex situ conservation",
            "In situ conservation through traditional practices",
            "Botanical gardens",
            "Gene banks"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q298",
        question: "Zoological parks, botanical gardens, and wildlife safari parks are examples of:",
        options: [
            "In situ conservation",
            "Ex situ conservation",
            "Sacred groves",
            "National parks"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q299",
        question: "The historic Convention on Biological Diversity ('The Earth Summit') was held in Rio de Janeiro in:",
        options: [
            "1982",
            "1992",
            "2002",
            "2012"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q300",
        question: "The World Summit on Sustainable Development was held in 2002 in:",
        options: [
            "Rio de Janeiro, Brazil",
            "Stockholm, Sweden",
            "Johannesburg, South Africa",
            "Kyoto, Japan"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q301",
        question: "The genetic diversity within Rauwolfia vomitoria is reflected in the potency and concentration of the active chemical:",
        options: [
            "Quinine",
            "Morphine",
            "Reserpine",
            "Digitoxin"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q302",
        question: "Why are species inventories more complete in temperate than in tropical countries?",
        options: [
            "Tropical countries have fewer species.",
            "Temperate countries have more taxonomists and resources for such studies.",
            "Tropical species are harder to identify.",
            "Tropical ecosystems are less accessible."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q303",
        question: "Biologists estimate global species diversity by making a statistical comparison of temperate-tropical species richness of an exhaustively studied group (like insects) and then:",
        options: [
            "Directly counting all other species.",
            "Extrapolating this ratio to other groups of animals and plants.",
            "Assuming all groups have the same number of species as insects.",
            "Focusing only on vertebrate species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q304",
        question: "Why are conventional taxonomic methods not suitable for identifying many prokaryotic species?",
        options: [
            "Prokaryotes do not have DNA.",
            "Many prokaryotic species are not culturable under laboratory conditions.",
            "Prokaryotes lack distinct morphological features.",
            "Prokaryotes reproduce too rapidly."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q305",
        question: "One important hypothesis for greater biodiversity in tropics is that speciation is generally a function of time, and tropical latitudes have:",
        options: [
            "Remained relatively undisturbed for millions of years, allowing longer evolutionary time.",
            "Experienced frequent glaciations, promoting rapid speciation.",
            "Fewer ecological niches, leading to more specialized species.",
            "Lower solar energy, causing slower mutation rates."
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q306",
        question: "For very large areas like entire continents, the slope of the species-area relationship (Z value) is typically:",
        options: [
            "Steeper (e.g., 0.6 to 1.2)",
            "Flatter (e.g., 0.01 to 0.05)",
            "The same as for small areas (0.1 to 0.2)",
            "Negative"
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q307",
        question: "David Tilman's long-term ecosystem experiments found that plots with more species showed:",
        options: [
            "More year-to-year variation in total biomass and lower productivity.",
            "Less year-to-year variation in total biomass and higher productivity.",
            "No difference in biomass variation or productivity compared to plots with fewer species.",
            "Increased susceptibility to invasions by alien species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q308",
        question: "The extinction of Steller's sea cow and passenger pigeon were primarily due to:",
        options: [
            "Habitat loss",
            "Alien species invasion",
            "Over-exploitation by humans",
            "Climate change"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q309",
        question: "The African catfish Clarias gariepinus, introduced for aquaculture, poses a threat to indigenous catfishes in Indian rivers. This is an example of problems caused by:",
        options: [
            "Co-extinctions",
            "Habitat fragmentation",
            "Alien species invasions",
            "Over-exploitation"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q310",
        question: "The \"narrowly utilitarian\" argument for conserving biodiversity emphasizes:",
        options: [
            "The ethical responsibility to protect all species.",
            "The ecosystem services like pollination and climate regulation.",
            "The direct economic benefits humans derive from nature (food, medicine, industrial products).",
            "The aesthetic and spiritual value of nature."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q311",
        question: "Bioprospecting refers to:",
        options: [
            "Conserving biodiversity in national parks.",
            "Exploring molecular, genetic, and species-level diversity for products of economic importance.",
            "The illegal trade of endangered species.",
            "Restoring degraded ecosystems."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q312",
        question: "The \"broadly utilitarian\" argument for conserving biodiversity highlights the importance of:",
        options: [
            "Direct harvesting of timber and firewood.",
            "Ecosystem services like oxygen production by forests, pollination, and climate moderation.",
            "Developing new pharmaceutical drugs from plants.",
            "The intrinsic value of every species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q313",
        question: "The \"ethical\" argument for conserving biodiversity is based on the idea that:",
        options: [
            "Biodiversity is essential for economic development.",
            "All species have an intrinsic value, and we have a moral duty to protect them.",
            "Conserving biodiversity provides better recreational opportunities.",
            "Only species useful to humans need to be conserved."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q314",
        question: "Endemism, a key criterion for identifying biodiversity hotspots, refers to:",
        options: [
            "Species that are found worldwide.",
            "Species that are confined to a particular region and not found anywhere else.",
            "Species that are critically endangered.",
            "Species that have high economic value."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q315",
        question: "Cryopreservation techniques, used in ex situ conservation, involve preserving gametes of threatened species in viable and fertile condition at:",
        options: [
            "Room temperature",
            "Slightly above freezing point (4°C)",
            "Very low temperatures (e.g., using liquid nitrogen at -196°C)",
            "High temperatures to sterilize them."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q316",
        question: "While Robert May's estimate of 7 million global species is widely cited, the actual number could be much higher if prokaryotic diversity, identified using molecular criteria, is fully accounted for. This is because:",
        options: [
            "Prokaryotes are much larger than eukaryotes.",
            "Conventional taxonomy based on morphology vastly underestimates the genetic and metabolic diversity of prokaryotes, many of which are unculturable.",
            "Prokaryotes have a very slow rate of evolution.",
            "All prokaryotic species have already been described."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q317",
        question: "The species-area relationship (S = CA^Z) indicates that species richness increases with area, but the Z value (slope) being steeper for continents than for small islands suggests that:",
        options: [
            "Speciation rates are lower on continents.",
            "Extinction rates are higher on continents.",
            "Larger areas like continents encompass a greater variety of habitats and environmental gradients, allowing for more niche specialization and higher beta diversity, leading to a faster accumulation of species with area.",
            "Dispersal is more limited on continents."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q318",
        question: "In Paul Ehrlich's \"rivet popper hypothesis,\" the loss of \"rivets on the wings\" (key species) is considered more critical than loss of rivets on seats. This analogy implies that:",
        options: [
            "All species in an ecosystem are equally important for its functioning.",
            "The extinction of species with crucial functional roles (keystone species) can have disproportionately large and cascading negative effects on ecosystem stability and services.",
            "Species richness alone determines ecosystem stability, regardless of the roles of individual species.",
            "Only aesthetically pleasing species are important for ecosystem health."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q319",
        question: "Habitat fragmentation, a major cause of biodiversity loss, particularly affects mammals and birds requiring large territories and animals with migratory habits because:",
        options: [
            "Smaller fragments cannot support the minimum viable population size or disrupt essential migratory routes and resource availability.",
            "Fragmentation increases the overall amount of habitat available.",
            "Smaller fragments have fewer predators.",
            "Fragmentation leads to increased genetic diversity within isolated populations."
        ],
        answer: 0 // Corresponds to Answer: 1 in OCR (1 - 1 = 0)
    },
    {
        id: "Q320",
        question: "The introduction of Nile perch into Lake Victoria is an example of an alien species invasion leading to mass extinction. Such invasive species often thrive in new environments because:",
        options: [
            "They are inherently more adaptable than native species.",
            "They often lack natural predators, competitors, or diseases that controlled their populations in their native habitat.",
            "Native species are always genetically weaker.",
            "They primarily improve the biodiversity of the new ecosystem."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q321",
        question: "The argument that the Amazon forest produces 20% of Earth's oxygen through photosynthesis is a powerful \"broadly utilitarian\" reason for its conservation. This service directly contributes to:",
        options: [
            "Global carbon sequestration only.",
            "Maintaining the atmospheric composition necessary for aerobic life globally.",
            "Local climate regulation in the Amazon basin only.",
            "Soil fertility in the Amazon."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q322",
        question: "Biodiversity hotspots, while covering less than 2% of Earth's land area, are estimated to harbor an extremely high number of species. Concentrating conservation efforts on these hotspots is a strategy aimed at:",
        options: [
            "Protecting all endangered species worldwide equally.",
            "Maximizing the number of species protected with limited conservation resources by focusing on areas of high endemism and threat.",
            "Primarily promoting tourism in these regions.",
            "Converting these areas into agricultural land."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q323",
        question: "Ex situ conservation methods like seed banks and cryopreservation are crucial for:",
        options: [
            "Allowing natural evolution of species in their original habitats.",
            "Preserving genetic diversity, especially of threatened or economically important species, outside their natural habitats as a safeguard against extinction or for future use.",
            "Directly restoring degraded ecosystems.",
            "Controlling populations of invasive species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q324",
        question: "The commitment made at the World Summit on Sustainable Development (2002) to achieve a significant reduction in the current rate of biodiversity loss by 2010 was ambitious. The (largely unmet) target highlights:",
        options: [
            "The ease with which global biodiversity loss can be reversed.",
            "The complex socio-economic and political challenges in implementing effective, large-scale conservation measures despite scientific understanding.",
            "That biodiversity loss was no longer a significant issue after 2002.",
            "The primary responsibility of developing nations for biodiversity conservation."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q325",
        question: "Sacred groves in India, like those in Meghalaya and the Western Ghats, often serve as refuges for rare and threatened plants. This form of in situ conservation is successful primarily due to:",
        options: [
            "Active government management and funding.",
            "The large geographical area they cover.",
            "Traditional, community-based protection rooted in religious and cultural beliefs, which often restricts resource extraction and habitat disturbance.",
            "The presence of unique soil types that support rare plants."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q326",
        question: "The latitudinal gradient in species diversity (higher in tropics) is a well-established pattern. If global climate change leads to significant warming and \"tropicalization\" of some current temperate zones, what is a complex, long-term potential consequence for biodiversity in those altered zones, considering both immigration and adaptation?",
        options: [
            "A rapid and predictable increase in species richness matching current tropical levels.",
            "A potential increase in richness due to immigration of tropical-adapted species, but also potential loss of native temperate species unable to adapt or compete, leading to a novel, possibly less stable, community composition.",
            "A definitive decrease in species richness as temperate species go extinct without replacement.",
            "No significant change, as species are highly adaptable to gradual warming."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q327",
        question: "The species-area relationship (S = CA^Z) is often used to predict species loss due to habitat destruction. If 90% of a habitat is destroyed, and the Z value is 0.2, the predicted percentage of species loss is not 90%. This non-linear relationship implies that:",
        options: [
            "Initial habitat loss causes a disproportionately small loss of species, but further loss accelerates extinction rates.",
            "The relationship is such that a large proportion of species are lost with even minor habitat reduction, but the rate of loss decreases as more habitat is lost. (The formula S_new / S_old = (A_new / A_old)^Z shows that with A_new = 0.1 A_old, S_new is approx 0.63 S_old, meaning about 37% loss for 90% area reduction if Z=0.2. If Z were higher, the loss would be greater).",
            "Species loss is directly proportional to habitat loss.",
            "The Z value is irrelevant for predicting species loss."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q328",
        question: "The \"Evil Quartet\" includes habitat loss, over-exploitation, alien species, and co-extinctions. Consider a scenario where a keystone pollinator species is driven to extinction by a new pesticide (an indirect effect of human activity). This could then lead to the extinction of several plant species dependent on it. This cascade would best be categorized as primarily involving:",
        options: [
            "Only over-exploitation of the pollinator.",
            "A combination of habitat loss (for the plants if the area becomes unsuitable) and co-extinctions (plants due to pollinator loss). The pesticide effect is a form of environmental degradation leading to the initial loss.",
            "Only alien species invasion (if the pesticide is considered alien).",
            "A primary co-extinction event for the pollinator, followed by habitat loss for the plants."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q329",
        question: "Ex situ conservation strategies like captive breeding programs for highly endangered animals face a significant challenge in maintaining long-term viability for reintroduction. This challenge is primarily:",
        options: [
            "The high cost of feeding animals in captivity.",
            "The loss of genetic diversity due to small founder populations and potential inbreeding, and the loss of learned behaviors necessary for survival in the wild.",
            "The difficulty in transporting animals back to their natural habitat.",
            "The public's lack of interest in such programs."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q330",
        question: "The debate around patenting genetic resources often involves the concept of \"functional equivalents\" mentioned in the Basmati rice case. If a company patents a specific gene sequence from a traditional plant variety that confers a desirable trait, and the patent extends to \"functional equivalents,\" this could potentially restrict:",
        options: [
            "Only the use of that exact patented gene sequence.",
            "The use of other, naturally occurring or independently developed genes from different varieties or species that achieve the same desirable trait through a similar biochemical pathway or function.",
            "The traditional cultivation of the original plant variety by farmers.",
            "Research on unrelated genes in the same plant."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q331",
        question: "India's rich biodiversity and associated traditional knowledge represent a vast potential for bioprospecting. To ensure equitable benefit-sharing and prevent biopiracy, as outlined by the Convention on Biological Diversity (CBD) and national laws like the Biological Diversity Act, 2002, a critical mechanism required is:",
        options: [
            "Banning all international collaboration in biodiversity research.",
            "Establishing clear protocols for Prior Informed Consent (PIC) from knowledge holders/communities and Mutually Agreed Terms (MAT) for access and benefit-sharing before commercial utilization of resources or associated knowledge.",
            "Nationalizing all traditional knowledge and making it freely available to corporations.",
            "Granting automatic patent rights to any company that discovers a new use for a traditional resource."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q332",
        question: "The current \"Sixth Extinction\" is distinguished from the previous five mass extinctions in Earth's history primarily by its:",
        options: [
            "Slower rate and natural causation.",
            "Predominant impact on marine species only.",
            "Unprecedentedly rapid rate and its primary driver being human activities.",
            "Occurrence during an interglacial period."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q333",
        question: "Consider the ecological diversity of India with its deserts, rainforests, mangroves, etc., versus a Scandinavian country like Norway, which has less ecological diversity. This difference in large-scale ecosystem variety (gamma diversity) directly contributes to India having:",
        options: [
            "Lower overall species richness compared to Norway.",
            "Higher overall species richness and genetic diversity due to a wider range of available niches and environmental conditions.",
            "The same number of endemic species as Norway.",
            "A more stable climate across all its regions."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q334",
        question: "The text mentions that \"Nature's biological library is burning even before we catalogued the titles of all the books stocked there.\" This metaphor powerfully illustrates the urgency of biodiversity conservation because:",
        options: [
            "Extinct species can always be recreated from DNA.",
            "We are losing species, and potentially their unique genetic information and ecological roles, before we even understand their existence or potential benefits.",
            "All species have already been discovered and cataloged.",
            "Biodiversity loss only affects economically unimportant species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q335",
        question: "If a stable ecosystem (as per Tilman's findings) shows less year-to-year variation in total biomass, this implies a higher degree of:",
        options: [
            "Species turnover.",
            "Predictability and consistency in its overall productivity and functioning despite environmental fluctuations.",
            "Susceptibility to invasive species.",
            "Dependence on a single dominant species."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
     {
        id: "Q336",
        question: "The National Curriculum Framework (NCF) 2005 recommends that children's life at school must be linked to:",
        options: [
            "Only textbooks",
            "Their life outside the school",
            "Only laboratory experiments",
            "International curricula"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q337",
        question: "According to the NCF 2005, treating the prescribed textbook as the sole basis of examination is problematic because:",
        options: [
            "Textbooks are always outdated.",
            "It leads to ignoring other resources and sites of learning.",
            "Examinations should not be based on textbooks.",
            "It encourages too much practical work."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q338",
        question: "Who is revered as the Father of Ecology in India, as mentioned in the NCERT textbook?",
        options: [
            "M.S. Swaminathan",
            "Panchanan Maheshwari",
            "Ramdeo Misra",
            "Herbert Boyer"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q339",
        question: "Herbert Boyer, along with Stanley Cohen, accomplished the construction of the first artificial recombinant DNA molecule in:",
        options: [
            "1953",
            "1963",
            "1972",
            "1983"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q340",
        question: "The European Federation of Biotechnology (EFB) definition of biotechnology encompasses:",
        options: [
            "Only traditional practices like making curd.",
            "Only modern molecular biotechnology.",
            "Both traditional view and modern molecular biotechnology.",
            "Only the production of antibiotics."
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q341",
        question: "The preface of the NCERT Biology textbook mentions that in the 19th and 20th centuries, Physics and Chemistry were applied to Biology, leading to the new science of:",
        options: [
            "Ecology",
            "Taxonomy",
            "Biochemistry",
            "Paleontology"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q342",
        question: "The work of Watson and Crick, along with others, established a modern version of Molecular Biology dealing with life processes at what level?",
        options: [
            "Organismal level",
            "Population level",
            "Molecular level",
            "Ecosystem level"
        ],
        answer: 2 // Corresponds to Answer: 3 in OCR (3 - 1 = 2)
    },
    {
        id: "Q343",
        question: "The NCERT preface states that \"Ecology brought in synthesis of both approaches (classical and reductionist biology) and emphasised integrated understanding of biology.\" This implies that ecology:",
        options: [
            "Focuses only on molecular details.",
            "Considers both the form and process, and the interactions across different levels of organization.",
            "Is primarily concerned with classification.",
            "Rejects the findings of molecular biology."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q344",
        question: "Ramdeo Misra formulated the first postgraduate course in ecology in India at which university?",
        options: [
            "University of Delhi",
            "Banaras Hindu University, Varanasi",
            "Aligarh Muslim University",
            "Calcutta University"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q345",
        question: "Herbert Boyer observed that certain restriction enzymes from E. coli had the capability of cutting DNA strands in a particular fashion, leaving what became known as:",
        options: [
            "Blunt ends",
            "Sticky ends",
            "Methylated ends",
            "Circular ends"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q346",
        question: "The NCERT foreword emphasizes that \"children generate new knowledge by engaging with the information passed on to them by adults,\" if given space, time, and freedom. This pedagogical approach contrasts with:",
        options: [
            "Encouraging critical thinking.",
            "Treating children as passive receivers of a fixed body of knowledge.",
            "Project-based learning.",
            "Experiential learning."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q347",
        question: "The development of \"Systems biology,\" mentioned in the NCERT preface, uses mathematical tools to bring about a modern synthesis of different aspects of Biology. This approach likely aims to:",
        options: [
            "Simplify complex biological phenomena by ignoring molecular details.",
            "Model and understand the emergent properties of complex biological systems arising from the interactions of their components.",
            "Focus exclusively on ecological field studies.",
            "Replace all experimental biology with computational simulations."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q348",
        question: "The collaboration between Herbert Boyer (expert in restriction enzymes) and Stanley Cohen (expert in plasmids) was crucial for the birth of recombinant DNA technology. This highlights the importance of what in scientific advancement?",
        options: [
            "Working in complete isolation.",
            "Interdisciplinary collaboration and the combination of different expertise and techniques.",
            "Focusing only on theoretical research.",
            "Strict adherence to pre-existing dogmas."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q349",
        question: "The NCERT Biology textbook aims to enable students to \"realise that biology is the story of the struggle of living organisms for existence and survival.\" This reflects a foundational concept from:",
        options: [
            "Mendelian genetics",
            "Darwinian theory of evolution by natural selection",
            "The cell theory",
            "The principles of biochemistry"
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    },
    {
        id: "Q350",
        question: "The \"Rationalisation of Content in the Textbook\" section mentions reducing content load in view of the COVID-19 pandemic and the National Education Policy 2020. One of the criteria for rationalisation was \"Content, which is easily accessible to students without much interventions from teachers and can be learned by children through self-learning or peer-learning.\" This implies a shift towards:",
        options: [
            "Increasing teacher-centric instruction.",
            "Promoting student autonomy and collaborative learning.",
            "Removing all challenging concepts from the syllabus.",
            "Focusing solely on rote memorization."
        ],
        answer: 1 // Corresponds to Answer: 2 in OCR (2 - 1 = 1)
    }
];
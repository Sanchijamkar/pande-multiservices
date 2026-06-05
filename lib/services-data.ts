export interface Service {
  id: string
  category: "csc" | "government" | "digital" | "financial" | "online"
  titleKey: string
  descKey: string
  icon: string
  requiredDocs: string[]
  processSteps: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  // CSC Services
  {
    id: "pan-card",
    category: "csc",
    titleKey: "panCard",
    descKey: "panCardDesc",
    icon: "CreditCard",
    requiredDocs: [
      "Aadhaar Card (mandatory)",
      "Passport size photograph",
      "Signature on white paper",
      "Proof of identity (if different from Aadhaar)",
      "Proof of address (if different from Aadhaar)",
    ],
    processSteps: [
      "Visit Pande Multiservices with required documents",
      "Fill the PAN application form",
      "Submit documents and biometric verification",
      "Pay the application fee",
      "Receive acknowledgment number",
      "Track application status online",
      "Receive PAN card within 15-20 days",
    ],
    faqs: [
      {
        question: "How long does it take to get a PAN card?",
        answer: "Usually 15-20 working days after successful application submission.",
      },
      {
        question: "What is the cost of applying for a PAN card?",
        answer: "The official fee is Rs. 107 for Indian citizens. Service charges may apply.",
      },
      {
        question: "Can I apply for PAN card correction?",
        answer: "Yes, we provide correction services for name, date of birth, and other details.",
      },
    ],
  },
  {
    id: "aadhaar-services",
    category: "csc",
    titleKey: "aadhaar",
    descKey: "aadhaarDesc",
    icon: "Fingerprint",
    requiredDocs: [
      "Existing Aadhaar card (for updates)",
      "Proof of identity",
      "Proof of address",
      "Date of birth proof",
      "Mobile number for OTP verification",
    ],
    processSteps: [
      "Visit with required documents",
      "Fill the Aadhaar enrollment/update form",
      "Biometric capture (fingerprints and iris)",
      "Photo capture",
      "Pay the applicable fee",
      "Receive acknowledgment slip",
      "Download e-Aadhaar or receive card by post",
    ],
    faqs: [
      {
        question: "What services are available for Aadhaar?",
        answer: "New enrollment, address update, mobile update, name correction, and biometric update.",
      },
      {
        question: "Is there a fee for Aadhaar update?",
        answer: "Yes, Rs. 50 for demographic updates. Biometric updates are free once in a lifetime.",
      },
      {
        question: "Can I update my Aadhaar online?",
        answer: "Some updates can be done online, but biometric updates require visiting a center.",
      },
    ],
  },
  {
    id: "voter-id",
    category: "csc",
    titleKey: "voterId",
    descKey: "voterIdDesc",
    icon: "Vote",
    requiredDocs: [
      "Age proof (birth certificate, school certificate)",
      "Address proof (Aadhaar, utility bills)",
      "Passport size photographs",
      "Aadhaar card",
      "Form 6 for new registration",
    ],
    processSteps: [
      "Verify eligibility (18+ years and Indian citizen)",
      "Fill Form 6 for new registration",
      "Submit required documents",
      "Photo and signature capture",
      "Verification by BLO officer",
      "Approval and card printing",
      "Collect Voter ID or receive by post",
    ],
    faqs: [
      {
        question: "What is the minimum age for Voter ID?",
        answer: "You must be 18 years or older as of January 1st of the registration year.",
      },
      {
        question: "How can I correct details in my Voter ID?",
        answer: "Fill Form 8 for corrections and submit with supporting documents.",
      },
      {
        question: "Can I apply if I have moved to a new address?",
        answer: "Yes, fill Form 8A for address change within the same constituency or Form 6 for new constituency.",
      },
    ],
  },
  {
    id: "income-certificate",
    category: "csc",
    titleKey: "incomeCert",
    descKey: "incomeCertDesc",
    icon: "FileText",
    requiredDocs: [
      "Aadhaar card",
      "Ration card",
      "Salary slip or income proof",
      "Self-declaration affidavit",
      "Bank statement (if applicable)",
      "Previous year income certificate (if renewal)",
    ],
    processSteps: [
      "Visit with all required documents",
      "Fill the income certificate application form",
      "Submit documents for verification",
      "Pay the application fee",
      "Application forwarded to Tehsil office",
      "Field verification (if required)",
      "Certificate issued within 7-15 days",
    ],
    faqs: [
      {
        question: "What is the validity of income certificate?",
        answer: "Usually valid for 1 year from the date of issue.",
      },
      {
        question: "For what purposes is income certificate required?",
        answer: "For scholarships, government schemes, admissions, and various subsidies.",
      },
      {
        question: "What is the processing time?",
        answer: "Usually 7-15 working days depending on verification requirements.",
      },
    ],
  },
  {
    id: "caste-certificate",
    category: "csc",
    titleKey: "casteCert",
    descKey: "casteCertDesc",
    icon: "Users",
    requiredDocs: [
      "Aadhaar card",
      "Ration card",
      "School leaving certificate",
      "Father's caste certificate",
      "Self-declaration affidavit",
      "Two passport size photographs",
    ],
    processSteps: [
      "Gather all required documents",
      "Fill the caste certificate application form",
      "Submit application with documents",
      "Pay the processing fee",
      "Verification by concerned authorities",
      "Committee approval (for certain categories)",
      "Certificate issued after verification",
    ],
    faqs: [
      {
        question: "Who can apply for caste certificate?",
        answer: "Any person belonging to SC, ST, OBC, or other backward classes.",
      },
      {
        question: "Is father's caste certificate mandatory?",
        answer: "Yes, for most applications father's or grandfather's caste certificate is required.",
      },
      {
        question: "How long does it take to get caste certificate?",
        answer: "Usually 15-30 days depending on the category and verification process.",
      },
    ],
  },
  {
    id: "domicile-certificate",
    category: "csc",
    titleKey: "domicileCert",
    descKey: "domicileCertDesc",
    icon: "Home",
    requiredDocs: [
      "Aadhaar card",
      "Ration card",
      "School leaving certificate",
      "Proof of residence (minimum 15 years)",
      "Birth certificate",
      "Passport size photographs",
    ],
    processSteps: [
      "Prepare all required documents",
      "Fill domicile certificate application form",
      "Submit application at CSC center",
      "Pay the applicable fee",
      "Verification of residential proof",
      "Tehsildar approval",
      "Certificate issued",
    ],
    faqs: [
      {
        question: "What is the residential requirement?",
        answer: "Usually 15 years of continuous residence in Maharashtra is required.",
      },
      {
        question: "What is domicile certificate used for?",
        answer: "For state government jobs, admissions, and local reservation benefits.",
      },
      {
        question: "Can NRIs apply for domicile certificate?",
        answer: "NRIs can apply if they meet the residency requirements and have valid documents.",
      },
    ],
  },
  // Digital Services
  {
    id: "online-form-filling",
    category: "digital",
    titleKey: "formFilling",
    descKey: "formFillingDesc",
    icon: "FormInput",
    requiredDocs: [
      "All documents required for the specific form",
      "Aadhaar card",
      "Passport size photographs",
      "Mobile number and email",
      "Payment method for form fees",
    ],
    processSteps: [
      "Bring all required documents",
      "Specify the form/application to be filled",
      "Provide accurate information",
      "Review the filled form",
      "Make payment for form fees",
      "Submit the application",
      "Receive confirmation and acknowledgment",
    ],
    faqs: [
      {
        question: "What types of forms do you fill?",
        answer: "Government jobs, college admissions, exam forms, scheme applications, and more.",
      },
      {
        question: "Do you provide assistance with corrections?",
        answer: "Yes, we help with form corrections and modifications before final submission.",
      },
      {
        question: "What if I make a mistake in the form?",
        answer: "We review all forms before submission to minimize errors.",
      },
    ],
  },
  {
    id: "resume-creation",
    category: "digital",
    titleKey: "resume",
    descKey: "resumeDesc",
    icon: "FileUser",
    requiredDocs: [
      "Educational certificates",
      "Work experience details",
      "Skills and achievements",
      "Passport size photograph",
      "Contact information",
    ],
    processSteps: [
      "Provide your details and requirements",
      "Choose resume template and format",
      "We create professional resume",
      "Review and suggest changes",
      "Final formatting and printing",
      "Receive digital and printed copies",
    ],
    faqs: [
      {
        question: "What resume formats do you offer?",
        answer: "We offer various professional formats suitable for different industries and job levels.",
      },
      {
        question: "Can you create resume in multiple languages?",
        answer: "Yes, we can create resumes in English, Hindi, and Marathi.",
      },
      {
        question: "Do you provide cover letters?",
        answer: "Yes, we also create professional cover letters to accompany your resume.",
      },
    ],
  },
  {
    id: "printing-scanning",
    category: "digital",
    titleKey: "printing",
    descKey: "printingDesc",
    icon: "Printer",
    requiredDocs: ["Files to print (USB/email/WhatsApp)", "Original documents for scanning"],
    processSteps: [
      "Bring documents or files",
      "Specify print/scan requirements",
      "Choose paper size and quality",
      "Review preview if needed",
      "Processing and output",
      "Quality check and delivery",
    ],
    faqs: [
      {
        question: "What printing sizes are available?",
        answer: "A4, A3, legal, and custom sizes. Color and black & white options.",
      },
      {
        question: "Can you scan documents to PDF?",
        answer: "Yes, we provide high-quality scanning with PDF, JPG, and other formats.",
      },
      {
        question: "Do you offer bulk printing discounts?",
        answer: "Yes, discounts are available for bulk printing orders.",
      },
    ],
  },
  {
    id: "email-document-services",
    category: "digital",
    titleKey: "email",
    descKey: "emailDesc",
    icon: "Mail",
    requiredDocs: [
      "Mobile number for verification",
      "Personal details for email creation",
      "Documents for sending/receiving",
    ],
    processSteps: [
      "Specify service requirement",
      "Provide necessary details",
      "Email creation/document handling",
      "Verification and setup",
      "Training on basic usage",
      "Provide credentials securely",
    ],
    faqs: [
      {
        question: "What email services do you offer?",
        answer: "Gmail creation, email sending/receiving, document attachment services.",
      },
      {
        question: "Can you help with email recovery?",
        answer: "Yes, we assist with password recovery and account access issues.",
      },
      {
        question: "Do you provide email training?",
        answer: "Yes, basic training on email usage is provided.",
      },
    ],
  },
  // Financial Services
  {
    id: "money-transfer",
    category: "financial",
    titleKey: "moneyTransfer",
    descKey: "moneyTransferDesc",
    icon: "ArrowLeftRight",
    requiredDocs: [
      "Sender's Aadhaar card",
      "Recipient's bank account details",
      "Mobile number for verification",
      "Cash amount to transfer",
    ],
    processSteps: [
      "Visit with required documents",
      "Provide recipient bank details",
      "Verify sender identity",
      "Submit cash amount",
      "Transaction processing",
      "Receive confirmation receipt",
    ],
    faqs: [
      {
        question: "What is the transfer limit?",
        answer: "Limits vary based on service. Usually Rs. 25,000-50,000 per transaction.",
      },
      {
        question: "How long does transfer take?",
        answer: "Instant transfer through IMPS, or same day through NEFT.",
      },
      {
        question: "What are the charges?",
        answer: "Nominal service charges apply based on transfer amount.",
      },
    ],
  },
  {
    id: "bill-payments",
    category: "financial",
    titleKey: "billPayments",
    descKey: "billPaymentsDesc",
    icon: "Receipt",
    requiredDocs: ["Bill number or consumer ID", "Mobile number", "Payment amount"],
    processSteps: [
      "Bring bill or consumer number",
      "Select bill type and provider",
      "Verify bill details",
      "Make payment",
      "Receive payment confirmation",
      "Get printed receipt",
    ],
    faqs: [
      {
        question: "What bills can I pay here?",
        answer: "Electricity, water, gas, mobile recharge, DTH, and more.",
      },
      {
        question: "Is there any extra charge?",
        answer: "Minimal convenience fee may apply for certain services.",
      },
      {
        question: "Will I get a receipt?",
        answer: "Yes, printed receipt is provided for all transactions.",
      },
    ],
  },
  {
    id: "insurance-services",
    category: "financial",
    titleKey: "insurance",
    descKey: "insuranceDesc",
    icon: "Shield",
    requiredDocs: [
      "Aadhaar card",
      "Age proof",
      "Income proof (for some policies)",
      "Bank account details",
      "Passport size photographs",
    ],
    processSteps: [
      "Discuss insurance needs",
      "Choose suitable policy",
      "Fill application form",
      "Submit required documents",
      "Medical checkup (if required)",
      "Premium payment",
      "Policy issuance",
    ],
    faqs: [
      {
        question: "What insurance types are available?",
        answer: "Life insurance, health insurance, vehicle insurance, and government schemes.",
      },
      {
        question: "Can I renew existing insurance?",
        answer: "Yes, we help with insurance renewals and premium payments.",
      },
      {
        question: "Do you help with claims?",
        answer: "Yes, we assist with insurance claim documentation.",
      },
    ],
  },
  // Online Form Services
  {
    id: "government-schemes",
    category: "online",
    titleKey: "govtSchemes",
    descKey: "govtSchemesDesc",
    icon: "Building",
    requiredDocs: [
      "Aadhaar card",
      "Ration card",
      "Income certificate",
      "Caste certificate (if applicable)",
      "Bank account details",
      "Passport size photographs",
    ],
    processSteps: [
      "Check eligibility for scheme",
      "Gather required documents",
      "Fill scheme application form",
      "Submit application online",
      "Track application status",
      "Receive benefits after approval",
    ],
    faqs: [
      {
        question: "What government schemes are available?",
        answer: "PM Kisan, Ayushman Bharat, housing schemes, pension schemes, and more.",
      },
      {
        question: "How to check eligibility?",
        answer: "We help you check eligibility based on your documents and criteria.",
      },
      {
        question: "Is there any charge for scheme registration?",
        answer: "Government registrations are free. Service charges may apply for assistance.",
      },
    ],
  },
  {
    id: "scholarship-forms",
    category: "online",
    titleKey: "scholarship",
    descKey: "scholarshipDesc",
    icon: "GraduationCap",
    requiredDocs: [
      "Student ID card",
      "Previous marksheets",
      "Income certificate",
      "Caste certificate",
      "Bank account details",
      "Aadhaar card",
      "College bonafide certificate",
    ],
    processSteps: [
      "Check scholarship eligibility",
      "Gather academic documents",
      "Fill scholarship application form",
      "Upload required documents",
      "Submit before deadline",
      "Track application status",
      "Receive scholarship amount",
    ],
    faqs: [
      {
        question: "What scholarships can I apply for?",
        answer: "State and central government scholarships, minority scholarships, merit scholarships.",
      },
      {
        question: "What is the deadline for applications?",
        answer: "Deadlines vary by scholarship. We help you apply before the deadline.",
      },
      {
        question: "Can I apply for multiple scholarships?",
        answer: "Generally, you can apply for one government scholarship at a time.",
      },
    ],
  },
  {
    id: "exam-forms",
    category: "online",
    titleKey: "examForms",
    descKey: "examFormsDesc",
    icon: "FileCheck",
    requiredDocs: [
      "Previous marksheets",
      "Admit card/Hall ticket",
      "Aadhaar card",
      "Passport size photographs",
      "Signature scan",
      "Eligibility documents",
    ],
    processSteps: [
      "Check exam notification and eligibility",
      "Gather all required documents",
      "Fill exam application form",
      "Upload documents and photo",
      "Pay examination fee",
      "Submit and download acknowledgment",
      "Print admit card when released",
    ],
    faqs: [
      {
        question: "Which exam forms do you fill?",
        answer: "SSC, HSC, competitive exams, university exams, government job applications.",
      },
      {
        question: "Can you correct mistakes in filled forms?",
        answer: "Corrections depend on the exam board policy. We help minimize errors.",
      },
      {
        question: "Do you help with admit card download?",
        answer: "Yes, we help download and print admit cards.",
      },
    ],
  },
]

export const serviceCategories = [
  { id: "csc", labelKey: "csc", icon: "Building2" },
  { id: "government", labelKey: "government", icon: "Landmark" },
  { id: "digital", labelKey: "digital", icon: "Monitor" },
  { id: "financial", labelKey: "financial", icon: "Wallet" },
  { id: "online", labelKey: "online", icon: "Globe" },
] as const

export function getServicesByCategory(category: string) {
  return services.filter((service) => service.category === category)
}

export function getServiceById(id: string) {
  return services.find((service) => service.id === id)
}

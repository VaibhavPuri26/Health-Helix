export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-sharma.svg",
    name: "Hardik Sharma",
  },
  {
    image: "/assets/images/dr-bhavna.svg",
    name: "Bhavna Malik",
  },
  {
    image: "/assets/images/dr-deepak.svg",
    name: "Deepak Rastogi",
  },
  {
    image: "/assets/images/dr-harsh.svg",
    name: "Harsh Dogra",
  },
  {
    image: "/assets/images/dr-gunjan.svg",
    name: "Gunjan Verma",
  },
  {
    image: "/assets/images/dr-rushil.svg",
    name: "Rushil Dhingra",
  },
  {
    image: "/assets/images/dr-anjali.svg",
    name: "Anjali Jain",
  },
  {
    image: "/assets/images/dr-tanmay.svg",
    name: "Tanmay Kapoor",
  },
  {
    image: "/assets/images/dr-iyer.svg",
    name: "venkatesh Iyer",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
import create from 'zustand'

const useStore = create((set) => ({
 FreelancFirstName: "",
 FreelancLastName: "",
 FreelancEmail: "",
 FreelancPhone: "",
 FreelancLivingAddress: "",
 FreelancRegion: "",
 FreelancStreet: "",
 FreelancPositions: "",
 FreelancDateOfBirth: "",
 FreelancSkills: "",
 FreelancHobbies: "",
 FreelancDeskYourself: "",
 FreelancLanguage: "",
 FreelancLanguageDegree: "",
 FreelancDescrobe: "",
 FreelancWebsite: "",
 FreelancDataList: [],
 FreelancDataListJob: [],
 tags: [],
 hobs: [],
 inputList: [[{language:"", level:""}]],

 Company:[],
 CompanyFirstName: "",
 CompanyLastName: "",
 CompanyEmail: "",
 CompanyNumber: "",
 CompanyImage: "",
 CompanyCompany: "",
 CompanyCompanyNum: "",
 CompanyLocation: "",
 CompanyDescription: "",
 CompanyWebsite: "",
 CompanyWhatsapp: "",
 CompanyFacebook: "",
 CompanyInstagram: "",
 CompanyTelegram: "",
 CompanyGithub: "",
 CompanyTwitter: "",

 login:[],
 contract:false,
 contractPassport: "",
 contractCarta: "",
 contractInn: "",
 contractInps: "",
 contractBank: "",
 contractInnBank: "",
 contractTranzit: "",
 contractMfo: "",
 loginToken: "",

 FreelancFirstNameHendler: (FreelancFirstName) => set({ FreelancFirstName }),
 FreelancLastNameHendler: (FreelancLastName) => set({ FreelancLastName }),
 FreelancEmailHendler: (FreelancEmail) => set({ FreelancEmail }),
 FreelancPhoneHendler: (FreelancPhone) => set({ FreelancPhone }),
 FreelancLivingAddressHendler: (FreelancLivingAddress) => set({ FreelancLivingAddress }),
 FreelancRegionHendler: (FreelancRegion) => set({ FreelancRegion }),
 FreelancStreetHendler: (FreelancStreet) => set({ FreelancStreet }),
 FreelancPositionsHendler: (FreelancPositions) => set({ FreelancPositions }),
 FreelancDateOfBirthHendler: (FreelancDateOfBirth) => set({ FreelancDateOfBirth }),
 FreelancSkillsHendler: (FreelancSkills) => set({ FreelancSkills }),
 FreelancDescrobeHendler: (FreelancDescrobe) => set({ FreelancDescrobe }),
 FreelancWebsiteHendler: (FreelancWebsite) => set({ FreelancWebsite }),
 FreelancDataListHendler: (FreelancDataList) => set({ FreelancDataList }),
 FreelancDataListJobHendler: (FreelancDataListJob) => set({ FreelancDataListJob }),

 TagsHendler: (tags) => set({ tags }),
 HobsHenedler: (hobs) => set({ hobs }),
 setInputListLang: () => set((state) => ({ inputList: state.language})),
 setInputListLevel: () => set((state) => ({ inputList: state.level})),

 loginHendler: (login) => set({ login }),
 contractHendler: (contract) => set({ contract }),

 CompanyHendler: (Company) => set({ Company }),
 CompanyFirstNameHendler: (CompanyFirstName) => set({ CompanyFirstName }),
 CompanyLastNameHendler: (CompanyLastName) => set({ CompanyLastName }),
 CompanyEmailHendler: (CompanyEmail) => set({ CompanyEmail }),
 CompanyNumberHendler: (CompanyNumber) => set({ CompanyNumber }),
 CompanyImageHendler: (CompanyImage) => set({ CompanyImage }),
 CompanyCompanyHendler: (CompanyCompany) => set({ CompanyCompany }),
 CompanyCompanyNumHendler: (CompanyCompanyNum) => set({ CompanyCompanyNum }),
 CompanyLocationHendler: (CompanyLocation) => set({ CompanyLocation }),
 CompanyDescriptionHendler: (CompanyDescription) => set({ CompanyDescription }),
 CompanyWebsiteHendler: (CompanyWebsite) => set({ CompanyWebsite }),
 CompanyWhatsappHendler: (CompanyWhatsapp) => set({ CompanyWhatsapp }),
 CompanyFacebookHendler: (CompanyFacebook) => set({ CompanyFacebook }),
 CompanyInstagramHendler: (CompanyInstagram) => set({ CompanyInstagram }),
 CompanyTelegramHendler: (CompanyTelegram) => set({ CompanyTelegram }),
 CompanyGithubHendler: (CompanyGithub) => set({ CompanyGithub }),
 CompanyTwitterHendler: (CompanyTwitter) => set({ CompanyTwitter }),

 ContractPassportHendler: (contractPassport) => set({ contractPassport }),
 ContractCartaHendler: (contractCarta) => set({ contractCarta }),
 ContractInnHendler: (contractInn) => set({ contractInn }),
 ContractInpsHendler: (contractInps) => set({ contractInps }),
 ContractBankHendler: (contractBank) => set({ contractBank }),
 ContractInnBankHendler: (contractInnBank) => set({ contractInnBank }),
 ContractTranzitHendler: (contractTranzit) => set({ contractTranzit }),
 ContractMfoHendler: (contractMfo) => set({ contractMfo }),
 loginTokenHendler: (loginToken) => set({ loginToken }),

}))

export default useStore
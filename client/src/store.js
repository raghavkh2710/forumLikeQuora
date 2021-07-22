import create from 'zustand';
import {devtools} from 'zustand/middleware';

let store=(set) => ({
    apiResponse: {},
    setApiResponse: (apiResponse) => set({apiResponse}),
    cartOverview: {cartValue: 0, productCount: 0},
    setCartOverview: (cartOverview) => set({cartOverview}),
    searchFields: {},
    setSearchFields: (searchFields) => set({searchFields}),
    planForm: {
        dental_benefits: 51,
        vision_benefits: 51, 
        dental_package_type: 3,
    },
    setPlanForm: (planForm) => set({planForm}),
    applicantForm: {},
    setApplicantForm: (applicantForm) => set({applicantForm}),
    prevInsuranceForm: {},
    setPrevInsuranceForm: (prevInsuranceForm) => set({prevInsuranceForm}),
    paymentInfoForm: {},
    setPaymentInfoForm: (paymentInfoForm) => set({paymentInfoForm}),
    appID: '',
    setAppID: (appID) => set({appID}),
});

store=devtools(store);
export const useStore = create(store);
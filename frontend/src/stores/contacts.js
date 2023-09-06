/* Customer Contact Form Data */

import { defineStore } from 'pinia'

export const useCustomerContact = defineStore('contact', () => {
    const companyName = ref('')
    const customerName = ref('')
    const mailAccount = ref('')
    const customerPurpose = ref('')

    function sendData() {
        console.log(companyName)
    }

    return { companyName, customerName, mailAccount, customerPurpose, sendData }
})
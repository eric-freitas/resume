import { Dispatch } from 'react';
import apiService from './apiExec';

const ContactInfoService = () => {

	const {  doGet } = apiService();

	const listMyContactInfo = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/contact_info/${lang}?code=GLTNct/InDAnqHnZ5p/MgYf3gVcBtYY0Atxja4cgHDNSpa0n2MGLEg==`, undefined, dispatch);
	}
	return {
		listMyContactInfo
	}

};
export default ContactInfoService;

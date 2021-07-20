import { Dispatch } from 'react';
import apiService from './apiExec';

const ContactInfoService = () => {

	const {  doGet } = apiService();

	const listMyContactInfo = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/contact_info/${lang}`, undefined, dispatch);
	}
	return {
		listMyContactInfo
	}

};
export default ContactInfoService;

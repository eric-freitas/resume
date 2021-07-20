import { Dispatch } from 'react';
import apiService from './apiExec';

const SkillsService = () => {

	const {  doGet } = apiService();

	const listMySkills = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/skills/${lang}`, undefined, dispatch);
	}
	return {
		listMySkills
	}

};
export default SkillsService;

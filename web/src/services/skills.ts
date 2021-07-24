import { Dispatch } from 'react';
import apiService from './apiExec';

const SkillsService = () => {

	const {  doGet } = apiService();

	const listMySkills = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/skills/${lang}?code=saQaBecryIBfnNy9dpJlJCpBa5a0lVByLVSOVp3hJQgepO25F09hJA==`, undefined, dispatch);
	}
	return {
		listMySkills
	}

};
export default SkillsService;

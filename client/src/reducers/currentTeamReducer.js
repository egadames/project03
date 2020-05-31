import { 
	ADD_PLAYER_TO_TEAM,
	ADD_PLAYER_TO_TEAM_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
	currentTeam: [],
};
export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_PLAYER_TO_TEAM:
			return {...state, currentTeam: action.payload, ADD_PLAYER_TO_TEAM_ERROR: ''};
		case ADD_PLAYER_TO_TEAM_ERROR:
			return {...state, ADD_PLAYER_TO_TEAM_ERROR: action.payload };
		default:
			return state;
	}
}
import { 
  SHOW_FOLDER,
} from '../constants/ActionsTypes';

const initialState = {
  'projects': {
    id: 'projects',
    showed: true,
    folderTheme: 'First',
    items: [
      {
        id: '001',
        icon: 'ICON',
        title: 'First Project',
      },
      {
        id: '002',
        icon: 'ICON',
        title: 'Second Project',
      },
      {
        id: '003',
        icon: 'ICON',
        title: 'Third Project',
      },
    ],
  },
  'photos': {
    id: 'photos',
    showed: false,
    folderTheme: 'Second',
    items: [
      {
        id: '004',
        icon: 'ICON',
        title: 'First Photo Pr',
      },
      {
        id: '005',
        icon: 'ICON',
        title: 'Second Photo Pr',
      },
      {
        id: '006',
        icon: 'ICON',
        title: 'Third Photo Pr',
      },
    ],
  },
}

const foldersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_FOLDER :
      state[action.id].showed = !state[action.id].showed;
      return {
        ...state
      };
    default :
      return state;
  }

}

export default foldersReducer;
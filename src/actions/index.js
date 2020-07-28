import { 
  SHOW_FOLDER,
} from '../constants/ActionsTypes';

export const showFolder = (id) => {
  return {
    type: SHOW_FOLDER,
    id
  }
}
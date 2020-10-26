import { 
  TOGGLE_FOLDER,
} from '../constants/ActionsTypes';

export const toggleFolder = (id) => {
  return {
    type: TOGGLE_FOLDER,
    id
  }
}
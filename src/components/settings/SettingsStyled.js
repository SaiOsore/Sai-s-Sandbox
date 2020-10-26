import styled from 'styled-components';
import { 
  colorVariables, 
  headerHeight, 
  device, 
} from '../../theme/variables';

export const SettingsStyled = styled.div`
  padding: 10px;
`;

export const SettingsBlock = styled.div`
  
`;

export const SettingsTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SettingsList = styled.ul`
  font-size: 18px;
  display: flex;
`;

export const SettingsItem = styled.li`
  font-size: 18px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export const SettingsButton = styled.button`
  font-size: 18px;
  width: 30px;
  height: 30px;
  background: grey;
  background: ${(props) => props.background || `${colorVariables.dark}`};
`;
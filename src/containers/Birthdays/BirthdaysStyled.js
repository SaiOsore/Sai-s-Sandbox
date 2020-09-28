import styled from 'styled-components';
import { 
  colorVariables, 
  headerHeight, 
} from '../../theme/variables';

export const BirthdaysStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colorVariables.primaryLight};
  min-height: calc(100vh - ${headerHeight});
`;
import React from 'react';
import { 
  SettingsStyled,
  SettingsBlock,
  SettingsTitle,
  SettingsList,
  SettingsItem,
  SettingsButton,
} from './SettingsStyled';

const Settings = () => {

  const applyFilter = (className) => {
    const body = document.querySelector('body');
    if(body.className === className) {
      body.classList.remove(className);
    } else {
      body.className = '';
      body.classList.toggle(className);
    }
  }

  const removeFilters = () => {
    const body = document.querySelector('body');
    body.className = '';
  }

  return (
    <SettingsStyled>
      <SettingsBlock>
        <SettingsTitle>
          Filters
        </SettingsTitle>
        <SettingsList>
          <SettingsItem>
            <SettingsButton 
              background={'grey'}
              onClick={() => {
                applyFilter('grayscale');
              }}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsButton 
              background={'blue'}
              onClick={() => {
                applyFilter('blur');
              }}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsButton 
              background={'orange'}
              onClick={() => {
                applyFilter('hue');
              }}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsButton 
              onClick={() => {
                applyFilter('invert');
              }}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsButton 
              background={'white'}
              onClick={removeFilters}
            />
          </SettingsItem>
        </SettingsList>
      </SettingsBlock>
    </SettingsStyled>
  );
};

export default Settings;
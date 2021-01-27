import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Searchbox } from './Searchbox';
import {
  OptionsBox,
  OptionWrapper,
  OptionText,
  OptionLabel,
} from './StyledMultiSelect';

const SelectedList = ({
  selectedItems,
  layout,
  isExcluded,
  renderSearch,
  searchPlaceholder,
  onRemove,
  clearAll,
  renderEmptySelected,
  width,
  height,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const [search, setSearch] = React.useState('');

  let filteredItems = selectedItems;
  if (search.length)
    filteredItems = selectedItems.filter(val => val.includes(search));

  const renderClearButton = () => (
    <Button
      role="button"
      a11yTitle="Clear all selected options"
      focusIndicator={false}
      onClick={() => clearAll()}
      plain
    >
      <Box
        border={theme.multiselect.chips.clear.border}
        height={theme.multiselect.chips.clear.height}
      >
        <Text {...theme.multiselect.chips.clear}>CLEAR ALL</Text>
      </Box>
    </Button>
  );

  const Sticky = styled(Box)`
    position: sticky;
    top: 0;
    z-index: 1;
  `;

  return (
    <OptionsBox style={{ height: '100%' }}>
      {selectedItems && selectedItems.length > 0 && (
        <Box>
          <Sticky {...theme.multiselect.rightPanel.incExcHeader.box}>
            <Text {...theme.multiselect.rightPanel.incExcHeader.text}>
              {isExcluded ? 'Excluded' : 'Included'}
            </Text>
            <Box {...theme.multiselect.rightPanel.incExcHeader.count}>
              <Text weight="600">{selectedItems.length}</Text>
            </Box>
          </Sticky>
          {renderSearch && (
            <Searchbox
              layout={layout}
              placeholder={searchPlaceholder}
              value={search}
              onValueChange={val => setSearch(val)}
            />
          )}

          <OptionWrapper
            twoColumnLayout={layout === 'double-column'}
            height={height}
            {...theme.multiselect.chips.wrapper}
            wrap
          >
            <Box width="100%">
              {filteredItems.length ? (
                filteredItems.map((item, id) => (
                  <OptionText
                    key={`${id}-${item}`}
                    twoColumnLayout={layout === 'double-column'}
                    {...theme.multiselect.chips.option}
                  >
                    <OptionLabel
                      isExcluded={isExcluded}
                      {...theme.multiselect.chips.label}
                    >
                      <Text>{item}</Text>
                    </OptionLabel>
                    <Close
                      style={{ cursor: 'pointer' }}
                      onClick={() => onRemove(item)}
                      style={{ cursor: 'pointer' }}
                      {...theme.multiselect.chips.icon}
                    />
                  </OptionText>
                ))
              ) : (
                <Box align="center" margin="medium" fill>
                  <Text>No Result Found</Text>
                </Box>
              )}
            </Box>
          </OptionWrapper>
          {renderClearButton()}
        </Box>
      )}
      {!selectedItems.length && (
        <Box align="center" justify="center" fill>
          {renderEmptySelected}
        </Box>
      )}
    </OptionsBox>
  );
};

export default React.memo(SelectedList);
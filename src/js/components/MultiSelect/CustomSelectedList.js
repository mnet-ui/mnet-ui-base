import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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
  inclusionExclusion,
  width,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const [search, setSearch] = React.useState('');

  let filteredItems = selectedItems;
  if (search.length)
    filteredItems = selectedItems.filter(val => val.includes(search));

  const renderClearButton = () => (
    <Button focusIndicator={false} onClick={() => clearAll()} plain>
      <Box
        border={{
          side: 'bottom',
          color: theme.multiselect.chips.clear.color,
        }}
      >
        <Text {...theme.multiselect.chips.clear}>CLEAR ALL</Text>
      </Box>
    </Button>
  );

  return (
    <OptionsBox style={{ height: '100%' }}>
      {selectedItems && selectedItems.length > 0 && (
        <>
          <Box {...theme.multiselect.rightPanel.incExcHeader.box}>
            <Text {...theme.multiselect.rightPanel.incExcHeader.text}>
              {isExcluded ? 'Excluded List' : 'Included List'}
            </Text>
            {renderClearButton()}
          </Box>
          {renderSearch && (
            <Searchbox
              layout={layout}
              placeholder={searchPlaceholder}
              value={search}
              onValueChange={val => setSearch(val)}
            />
          )}
          <OptionWrapper
            inclusionExclusion={inclusionExclusion}
            width={width}
            {...theme.multiselect.chips.wrapper}
            wrap
          >
            {filteredItems.map((item, id) => (
              <OptionText
                key={`${id}-${item}`}
                incExcVal={isExcluded !== null}
                {...theme.multiselect.chips.option}
              >
                <OptionLabel
                  value={isExcluded !== null}
                  {...theme.multiselect.chips.label}
                >
                  <Text>{item}</Text>
                </OptionLabel>
                <Close
                  onClick={() => onRemove(item)}
                  {...theme.multiselect.chips.icon}
                />
              </OptionText>
            ))}
          </OptionWrapper>
        </>
      )}
      <Box align="center" justify="center" fill>
        {!selectedItems.length && renderEmptySelected}
      </Box>
    </OptionsBox>
  );
};

export default React.memo(SelectedList);

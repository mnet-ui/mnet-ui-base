import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { FormNextLink, Validate, CircleAlert } from 'grommet-icons';

import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Table } from '../Table';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { closeConfirmAlert } from '../ModalPopUp';
import { Tooltip } from '../Tooltip';
import { ShowChanges } from './ShowChanges';
import {
  modifiedValInRule,
  isAnyFailInRule,
  failMessageInRule,
} from '../../utils';

const UploadedTable = ({ tableData }) => {
  const { upload } = useContext(ThemeContext) || defaultProps.theme;
  const { headers, rules } = tableData;
  const [isShowModified, setIsShowModified] = useState(true);

  const getStatusColor = (showModified, isModified, result) => {
    if (showModified && isModified && result.status === 'OK') return '#8ed09c';
    if (showModified && isModified && result.status === 'FAIL')
      return '#ffd5d5';
  };

  return (
    <Box>
      <ShowChanges
        isShowModified={isShowModified}
        setIsShowModified={setIsShowModified}
      />
      <Box>
        <Box {...(upload && upload.table && upload.table.container)}>
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map(text => (
                  <TableCell key={text} scope="col" verticalAlign="middle">
                    <Text size="large" color="white">
                      {text}
                    </Text>
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map(rule => {
                const renderRow = modifiedValInRule(isShowModified, rule) && (
                  <TableRow
                    style={{
                      background:
                        isShowModified && isAnyFailInRule(rule)
                          ? '#ffd5d5'
                          : null,
                    }}
                  >
                    {headers.map((header, index) => {
                      const { oldValue, newValue, isModified, result } = rule[
                        header
                      ];
                      return (
                        <TableCell
                          background={getStatusColor(
                            isShowModified,
                            isModified,
                            result,
                          )}
                          key={oldValue}
                          scope="row"
                          verticalAlign="middle"
                        >
                          {isShowModified &&
                            isModified &&
                            result.status === 'OK' && (
                              <Text
                                style={{ verticalAlign: 'middle' }}
                                margin={{ right: 'large' }}
                              >
                                <Validate color="status-ok" size="small" />
                              </Text>
                            )}

                          {index === 0 &&
                            isShowModified &&
                            failMessageInRule(rule).status && (
                              <Box
                                style={{
                                  display: 'inline-block',
                                  verticalAlign: 'middle',
                                }}
                                margin={{ right: 'large' }}
                              >
                                <Tooltip
                                  message={failMessageInRule(rule).message}
                                  position="up"
                                >
                                  <Text style={{ verticalAlign: 'middle' }}>
                                    <CircleAlert
                                      color="status-error"
                                      size="small"
                                    />
                                  </Text>
                                </Tooltip>
                              </Box>
                            )}

                          <Text size="large">{oldValue}</Text>
                          <Text
                            style={{ verticalAlign: 'middle' }}
                            margin="large"
                          >
                            <FormNextLink size="medium" color="dark-2" />
                          </Text>
                          <Text size="large">{newValue}</Text>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
                return renderRow;
              })}
            </TableBody>
          </Table>
        </Box>
        <Box direction="row" justify="center" margin={{ top: 'large' }}>
          <Button
            label="DONE"
            secondary
            size="medium"
            onClick={closeConfirmAlert}
          />
        </Box>
      </Box>
    </Box>
  );
};

UploadedTable.defaultProps = {
  tableData: {},
};

UploadedTable.propTypes = {
  tableData: PropTypes.shape({
    headers: PropTypes.shape([]),
    rules: PropTypes.shape([]),
  }),
};

export { UploadedTable };

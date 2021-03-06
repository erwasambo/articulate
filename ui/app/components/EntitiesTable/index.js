/**
 *
 * EntitiesTable
 *
 */

import React from 'react';
import Table2 from '../Table2';
import columns from './columnDefinition';
import IntentListTable from './components/intentListtable';

class EntitiesTable extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { data, intentData, onCellChange, menu } = this.props;
    return (
      <Table2
        columns={columns}
        data={data}
        onCellChange={onCellChange}
        menu={menu}
        tableName={'Entities'}
        SubComponent={row => {

          return <div style={{ padding: '20px' }}>
            <div
              style={{
                padding: '20px',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
              className={' grey lighten-5'}
            >
              <IntentListTable
                data={intentData[row.original.id]}
              />
            </div>
          </div>
            ;
        }}
      />
    );
  }
}

EntitiesTable.propTypes = {
  data: React.PropTypes.array,
  intentData: React.PropTypes.any,
  menu: React.PropTypes.array,
  onCellChange: React.PropTypes.func,
  onFetchIntents: React.PropTypes.func,
};

export default EntitiesTable;

import React from 'react';

const Pagination = ({ list, getSelectedEvent }) => {
  if (list.length <= 8) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(list.length / 8); ++i) {
    range.push(i);
  }

  const setPage = page => list.onSetPage(page);

  return (
    <nav>
      <ul className="pagination">

        {
          range.map(v => {
            const isCurrent = v === list.currentPage;
            const onClick = ev => {
              ev.preventDefault();
              setPage(v);
            };
            return (
              <li
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={onClick}
                key={v.toString()}>

                <a className="page-link" href="">{v + 1}</a>

              </li>
            );
          })
        }

      </ul>
    </nav>
  );
};


export default Pagination;

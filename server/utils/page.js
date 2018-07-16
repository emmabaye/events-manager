
export default (offset, limit, count) => {
  let page = {};
  page.firstPage = (count > 0) ? 1 : "";
  page.lastPage = Math.ceil(count / limit);
  page.currentPage = ((offset / limit) + 1) <= page.lastPage ?
    (offset / limit) + 1 : page.lastPage;
  page.previousPage = (page.currentPage - 1) > 0 ?
    page.currentPage - 1 : "";
  page.nextPage = (page.currentPage < page.lastPage) ? page.currentPage + 1 : page.lastPage;
  return page;
};

import chai from 'chai';
import page from "../utils/page";

const { expect } = chai;

const offset = 9;
const limit = 9;
const count = 53;

const pages = page(offset, limit, count);

describe('Test for page object', () => {
  it('It should return page', () => {
    expect(pages).to.be.an('object');
    expect(pages.firstPage).to.equal(1);
    expect(pages.lastPage).to.equal(6);
    expect(pages.currentPage).to.equal(2);
    expect(pages.previousPage).to.equal(1);
    expect(pages.nextPage).to.equal(3);
  });
});
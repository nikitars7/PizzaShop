import filterReducer, {
  setCategoryId,
  setSortBy,
  setPageCount,
  setFilters,
  setSeatchValue,
  SortPropEnum,
} from "../slices/filterSlice";
const initialState = {
  searchValue: "",
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "rating",
    sortProperty: SortPropEnum.RATING_DESC,
  },
};
describe("filterSlice", () => {
  it("should return default state", () => {
    const result = filterReducer(undefined, { type: "" });
    expect(result).toEqual({
      searchValue: "",
      categoryId: 0,
      pageCount: 1,
      sort: {
        name: "rating",
        sortProperty: "rating",
      },
    });
    expect(result).toMatchSnapshot();
  });
  it("should setCategoryId value", () => {
    const action = {
      type: setCategoryId.type,
      payload: 1,
    };
    const result = filterReducer(initialState, action);
    const updatedState = { ...initialState, categoryId: 1 };
    expect(result).toEqual(updatedState);
    expect(result).toMatchSnapshot();
  });
  it("should setPageCount value", () => {
    const action = {
      type: setPageCount.type,
      payload: 2,
    };
    const result = filterReducer(initialState, action);
    const updatedState = { ...initialState, pageCount: 2 };
    expect(result).toEqual(updatedState);
    expect(result).toMatchSnapshot();
  });
  it("should setSearchValue value", () => {
    const action = {
      type: setSeatchValue.type,
      payload: "HelloWorld",
    };
    const result = filterReducer(initialState, action);
    const updatedState = { ...initialState, searchValue: "HelloWorld" };
    expect(result).toEqual(updatedState);
    expect(result).toMatchSnapshot();
  });
  it("should setSortBy value", () => {
    const action = {
      type: setSortBy.type,
      payload: {
        name: "price (ASC)",
        sortProperty: "-price",
      },
    };
    const result = filterReducer(initialState, action);
    const updatedState = {
      ...initialState,
      sort: {
        name: "price (ASC)",
        sortProperty: "-price",
      },
    };
    expect(result).toEqual(updatedState);
    expect(result).toMatchSnapshot();
  });
  it("should setFilters", () => {
    const action = {
      type: setFilters.type,
      payload: {
        categoryId: 1,
        sort: "-title",
        pageCount: 2,
        searchValue: "",
      },
    };
    const result = filterReducer(initialState, action);
    expect(result).toEqual({
      categoryId: 1,
      sort: "-title",
      pageCount: 2,
      searchValue: "",
    });
  });
});

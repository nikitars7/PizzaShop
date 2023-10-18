import itemsReducer, { fetchItems } from "../slices/itemsSlice";
const initialState = {
  items: [],
  isLoading: "loading" | "success" | "error",
};

describe("itemsSlice", () => {
  it('should change status with "fetchItems.pending" action', () => {
    const state = itemsReducer(initialState, fetchItems.pending());
    expect(state.isLoading).toBe("loading");
  });
  it('should change status with "fetchItems.fulfilled" action', () => {
    const mockItems = {
      data: [
        {
          id: "7",
          imageUrl:
            "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
          title: "Margarita",
          types: [0, 1],
          sizes: [26, 30, 40],
          price: 450,
          category: 4,
          rating: 10,
        },
        {
          id: "8",
          imageUrl:
            "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
          title: "Four seasons",
          types: [0, 1],
          sizes: [26, 30, 40],
          price: 395,
          category: 5,
          rating: 10,
        },
        {
          id: "6",
          imageUrl:
            "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
          title: "Pepperoni",
          types: [0, 1],
          sizes: [26, 30, 40],
          price: 675,
          category: 1,
          rating: 9,
        },
        {
          id: "4",
          imageUrl:
            "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
          title: "Cheeseburger pizza",
          types: [0, 1],
          sizes: [26, 30, 40],
          price: 415,
          category: 3,
          rating: 8,
        },
      ],
    };
    const state = itemsReducer(initialState, fetchItems.fulfilled(mockItems.data));
    expect(state).toEqual({
      items: mockItems.data,
      isLoading: "success",
    });
  });
  it('should change status with "fetchItems.rejected" action', () => {
    const state = itemsReducer(initialState, fetchItems.rejected());
    expect(state.isLoading).toBe("error");
  });
});

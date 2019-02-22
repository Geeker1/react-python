
export const ADD_CART = 'add_to_cart'

export function add_to_cart (quantity, id, colors) {
  return {
    type: ADD_CART,
    quantity,
    id,
    colors
  }
}

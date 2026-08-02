export type CartItem = {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
};

const CART_KEY = "corex-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  const cart = localStorage.getItem(CART_KEY);

  if (!cart) return [];

  return JSON.parse(cart);
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  window.dispatchEvent(
    new Event("cart-updated")
  );
}

export function addToCart(
  item: Omit<CartItem, "quantity">
) {
  const cart = getCart();

  const existing = cart.find(
    (p) => p.id === item.id
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...item,
      quantity: 1,
    });
  }

  saveCart(cart);
}

export function increaseQuantity(
  id: number
) {
  const cart = getCart();

  const item = cart.find(
    (p) => p.id === id
  );

  if (!item) return;

  item.quantity++;

  saveCart(cart);
}

export function decreaseQuantity(
  id: number
) {
  const cart = getCart();

  const item = cart.find(
    (p) => p.id === id
  );

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    removeFromCart(id);
    return;
  }

  saveCart(cart);
}

export function removeFromCart(
  id: number
) {
  const cart = getCart().filter(
    (item) => item.id !== id
  );

  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}

export function getCartCount() {
  return getCart().reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}


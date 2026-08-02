export function flyToCart(
  image: HTMLImageElement,
  cart: HTMLElement
) {
  const start = image.getBoundingClientRect();
  const end = cart.getBoundingClientRect();

  const clone = image.cloneNode(true) as HTMLImageElement;

  clone.style.position = "fixed";
  clone.style.left = `${start.left}px`;
  clone.style.top = `${start.top}px`;
  clone.style.width = `${start.width}px`;
  clone.style.height = `${start.height}px`;

  clone.style.borderRadius = "20px";
  clone.style.pointerEvents = "none";
  clone.style.zIndex = "99999";

  clone.style.transition =
    "all .8s cubic-bezier(.22,1,.36,1)";

  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.left = `${
      end.left + end.width / 2
    }px`;

    clone.style.top = `${
      end.top + end.height / 2
    }px`;

    clone.style.width = "28px";
    clone.style.height = "28px";

    clone.style.opacity = "0";
    clone.style.transform =
      "scale(.2) rotate(360deg)";
  });

  clone.addEventListener("transitionend", () => {
    clone.remove();
  });
}
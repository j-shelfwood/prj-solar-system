# Prj-solar-system

The goal of this project is to learn mathmatical concepts in a practical way by building a solar system. In addition I'm going to be taking my first steps in rendering 3D environments, aiming to become better at understanding 3D environments and rendering.

Hopefully the end result will be a dynamic solar system simulation that I can use as reference for how to combine mathmatical concepts to create dynamic and interactive 3D animations.

## Tech Stack

- Astro
- TailwindCSS
- TypeScript
- [Babylon JS](https://www.babylonjs.com/)
- Plain JS Webcomponents (See example below)

## Webcomponents

```astro
<!-- Wrap the component elements in our custom element “astro-heart”. -->
<astro-heart>
  <button aria-label="Heart">💜</button> × <span>0</span>
</astro-heart>

<script>
  // Define the behaviour for our new type of HTML element.
  class AstroHeart extends HTMLElement {
    connectedCallback() {
      let count = 0;

      const heartButton = this.querySelector('button');
      const countSpan = this.querySelector('span');

      // Each time the button is clicked, update the count.
      heartButton.addEventListener('click', () => {
        count++;
        countSpan.textContent = count.toString();
      });
    }
  }

  // Tell the browser to use our AstroHeart class for <astro-heart> elements.
  customElements.define('astro-heart', AstroHeart);
</script>
```

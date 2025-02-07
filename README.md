# Prj-solar-system

The goal of this project is to learn mathmatical concepts in a practical way by building a solar system. In addition I'm going to be taking my first steps in rendering 3D environments, aiming to become better at understanding 3D environments and rendering.

Hopefully the end result will be a dynamic solar system simulation that I can use as reference for how to combine mathmatical concepts to create dynamic and interactive 3D animations.

## Tech Stack

- Astro
- TailwindCSS
- TypeScript
- [Babylon JS](https://www.babylonjs.com/)
- Plain JS Webcomponents (See example below)

### Webcomponents Example

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

## Project Plan

### 1. **Setting Up the Foundation**

- **Step 1:** Create a new Astro project with the default configuration.
- **Step 2:** Set up TypeScript support by adding necessary configurations and dependencies.
- **Step 3:** Initialize the basic structure of the project, including components and layouts.

### 2. **Mathematics Core**

- **Objective:** Develop a set of reusable TypeScript classes to handle mathematical operations required for 3D modeling.
- **Tasks:**
  - **Vector Mathematics:**
    - Create `Vector` class with methods for vector operations (addition, subtraction, dot product, cross product).
    - Implement normalization and length calculations.
  - **Matrix Operations:**
    - Develop a `Matrix` class supporting matrix creation (identity, rotation, scaling) and multiplication.
  - **Transformations:**
    - Create utility functions for:
      - Rotation matrices (around X, Y, Z axes).
      - Scaling operations.
      - Translation operations.
- **Output:** Modular TypeScript classes in separate files (`vector.ts`, `matrix.ts`, etc.) with clear documentation.

### 3. **Babylon.js Components**

- **Objective:** Build reusable components that leverage Babylon.js for 3D modeling and rendering.
- **Tasks:**
  - **Basic Setup:**
    - Integrate Babylon.js into the project by adding it as a dependency.
    - Set up basic configurations and initialization for the 3D canvas.
  - **Core Components:**
    - Create `Scene` component to manage the 3D scene.
    - Develop `Camera` component with controls for navigation.
    - Implement `Lighting` component for different light sources (ambient, directional, point lights).
  - **Mesh Operations:**
    - Build components for creating basic shapes (sphere, cube, cylinder) using Babylon.js primitives.
    - Add support for custom meshes and loading external models.
- **Output:** Collection of reusable components in `src/components` with clear documentation.

### 4. **Integration**

- **Objective:** Combine the mathematical utilities and Babylon.js components into functional modules within the Astro project.
- **Tasks:**
  - Integrate the core math classes into the Babylon.js components to handle transformations, rendering, and user interactions.
  - Ensure seamless communication between the mathematical operations and 3D visualization.
- **Output:** Working modules that demonstrate the integration of math utilities with 3D components.

### 5. **Testing and Documentation**

- **Tasks:**
  - Write unit tests for the core math classes using testing frameworks like Jest or Jasmine.
  - Document each class, method, and component with clear usage instructions and examples.
  - Create integration tests to ensure the combined modules work as expected.
- **Output:** Comprehensive test suite and documentation ensuring ease of use and maintainability.

### 6. **Final Adjustments**

- **Tasks:**
  - Optimize performance by reviewing and improving critical paths in the codebase.
  - Refactor any overly complex or repetitive code to improve readability and scalability.
  - Add error handling and logging for better debugging and user experience.
- **Output:** Final polished and production-ready codebase.

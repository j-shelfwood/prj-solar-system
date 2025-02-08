import { Engine, Scene, Vector3, ArcRotateCamera, HemisphericLight, Color4 } from "@babylonjs/core";

export class BaseScene extends HTMLElement {
  protected scene?: Scene;
  protected engine?: Engine;
  protected camera?: ArcRotateCamera;

  connectedCallback() {
    this.initScene();
  }

  protected initScene() {
    try {
      console.log("Scene: Initializing...");

      const canvas = this.querySelector("canvas");
      if (!canvas) throw new Error("Canvas element not found");

      // Create engine
      this.engine = new Engine(canvas as HTMLCanvasElement, true);

      // Create scene
      this.scene = new Scene(this.engine);
      this.scene.clearColor = new Color4(0.1, 0.1, 0.2, 1);

      // Setup camera
      this.camera = new ArcRotateCamera(
        "camera",
        -Math.PI / 2,
        Math.PI / 2.5,
        20,
        Vector3.Zero(),
        this.scene
      );
      this.camera.attachControl(canvas, true);
      this.camera.lowerRadiusLimit = 5;
      this.camera.upperRadiusLimit = 50;
      this.camera.setPosition(new Vector3(10, 10, 10));

      // Add light
      const light = new HemisphericLight(
        "hemisphericLight",
        new Vector3(0, 1, 0),
        this.scene
      );
      light.intensity = 0.7;

      // Setup scene content
      this.setupScene();

      // Render loop
      this.engine.runRenderLoop(() => {
        this.scene?.render();
      });

      // Handle resize
      window.addEventListener("resize", () => {
        this.engine?.resize();
      });

    } catch (error) {
      console.error("Scene initialization failed:", error);
    }
  }

  protected setupScene() {
    // Override in child classes
  }
}
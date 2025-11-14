/**
 * Visualizador 3D para modelos SketchUp
 * Este arquivo cria um visualizador 3D usando Three.js
 *
 * NOTA IMPORTANTE: Arquivos .skp não são nativamente suportados por navegadores.
 * Você precisa converter o arquivo projeto3d.skp para formato .glb ou .gltf
 * usando SketchUp Export ou ferramentas online como:
 * - SketchUp Web (exportar como .glb)
 * - https://products.aspose.app/3d/conversion/skp-to-glb
 */

class Model3DViewer {
  constructor(containerId, modelPath) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container ${containerId} não encontrado`);
      return;
    }

    this.modelPath = modelPath;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.model = null;

    this.init();
  }

  init() {
    // Criar cena
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf5f5f5);

    // Configurar câmera
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 400;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(5, 5, 5);

    // Criar renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // Adicionar luzes
    this.setupLights();

    // Adicionar controles de órbita
    if (typeof THREE.OrbitControls !== "undefined") {
      this.controls = new THREE.OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 2;
    }

    // Adicionar grid helper
    const gridHelper = new THREE.GridHelper(10, 10, 0xcccccc, 0xeeeeee);
    this.scene.add(gridHelper);

    // Carregar modelo
    this.loadModel();

    // Adicionar responsividade
    window.addEventListener("resize", () => this.onWindowResize());

    // Iniciar animação
    this.animate();
  }

  setupLights() {
    // Luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    // Luz direcional principal
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);

    // Luz de preenchimento
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 0, -5);
    this.scene.add(fillLight);
  }

  loadModel() {
    // Verificar extensão do arquivo
    const extension = this.modelPath.split(".").pop().toLowerCase();

    if (extension === "skp") {
      // Mostrar mensagem de aviso para arquivo .skp
      this.showConversionMessage();
      return;
    }

    // Loader para FBX
    if (extension === "fbx" && typeof THREE.FBXLoader !== "undefined") {
      this.loadFBXModel();
      return;
    }

    // Loader para GLB/GLTF
    if (typeof THREE.GLTFLoader !== "undefined") {
      const loader = new THREE.GLTFLoader();

      loader.load(
        this.modelPath,
        (gltf) => {
          this.model = gltf.scene;

          // Centralizar modelo
          const box = new THREE.Box3().setFromObject(this.model);
          const center = box.getCenter(new THREE.Vector3());
          this.model.position.sub(center);

          // Ajustar escala se necessário
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 4 / maxDim;
          this.model.scale.multiplyScalar(scale);

          this.scene.add(this.model);
        },
        (progress) => {
          console.log(
            "Carregando modelo: " +
              (progress.loaded / progress.total) * 100 +
              "%"
          );
        },
        (error) => {
          console.error("Erro ao carregar modelo:", error);
          this.showErrorMessage();
        }
      );
    } else {
      console.error("GLTFLoader não encontrado");
      this.showErrorMessage();
    }
  }

  loadFBXModel() {
    const loader = new THREE.FBXLoader();

    loader.load(
      this.modelPath,
      (object) => {
        this.model = object;

        // Centralizar modelo
        const box = new THREE.Box3().setFromObject(this.model);
        const center = box.getCenter(new THREE.Vector3());
        this.model.position.sub(center);

        // Ajustar escala se necessário
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 4 / maxDim;
        this.model.scale.multiplyScalar(scale);

        this.scene.add(this.model);
      },
      (progress) => {
        console.log(
          "Carregando modelo FBX: " +
            (progress.loaded / progress.total) * 100 +
            "%"
        );
      },
      (error) => {
        console.error("Erro ao carregar modelo FBX:", error);
        this.showErrorMessage();
      }
    );
  }

  showConversionMessage() {
    const message = document.createElement("div");
    message.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 106, 0, 0.95);
      color: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      max-width: 400px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    message.innerHTML = `
      <h3 style="margin: 0 0 15px 0;">⚠️ Conversão Necessária</h3>
      <p style="margin: 0 0 10px 0;">
        Arquivos .skp precisam ser convertidos para .glb ou .gltf para visualização web.
      </p>
      <p style="margin: 0; font-size: 0.9em;">
        Use o SketchUp ou ferramentas online para converter o arquivo.
      </p>
    `;
    this.container.style.position = "relative";
    this.container.appendChild(message);
  }

  showErrorMessage() {
    const message = document.createElement("div");
    message.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(220, 53, 69, 0.95);
      color: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      max-width: 400px;
    `;
    message.innerHTML = `
      <h3 style="margin: 0 0 15px 0;">❌ Erro ao Carregar Modelo</h3>
      <p style="margin: 0;">
        Não foi possível carregar o modelo 3D. Verifique se o arquivo existe e está no formato correto.
      </p>
    `;
    this.container.style.position = "relative";
    this.container.appendChild(message);
  }

  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 400;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.controls) {
      this.controls.update();
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Exportar para uso global
window.Model3DViewer = Model3DViewer;
